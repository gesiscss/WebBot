import EventEmitter from 'eventemitter3';


export default class Bot {

  constructor(extension) {

    this.extension = extension;

    this.EVENT_NAMES = {
      'data': 'onData',
      'newURL': 'onNewURL',
      'start': 'onStart'
    }

    this.eventEmitter = new EventEmitter();

    this.debug = false;
    this.navigate_delay = 1500;


    // let this be at least 2 (for tests)
    if (this.debug){
      this.result_text_pages = 2;
      this.result_news_pages = 2;
      this.result_images_pages = 2;
      this.result_videos_pages = 2;
      
      this.scroll_text_reloads = 2;
      this.scroll_news_reloads = 2;
      this.scroll_videos_reloads = 2;
      this.scroll_images_reloads = 2;
    } else {
      this.result_text_pages = 5;
      this.result_news_pages = 5;
      this.result_images_pages = 5;
      this.result_videos_pages = 5;
      
      this.scroll_text_reloads = 3;
      this.scroll_news_reloads = 3;
      this.scroll_videos_reloads = 3;
      this.scroll_images_reloads = 3;     
    }

    this.next_delay = 2000;
    this.initial_scroll_delay = 1000;


    this.images_results_counter = 0;
    this.news_results_counter = 0;
    this.text_results_counter = 0;
    this.videos_results_counter = 0;

    this.sub_scroll_chunk = 50;
    this.sub_scroll_down_chunk_delay = 25;
    this.sub_scroll_down_delay = 500;
    this.sub_scroll_waiting_for_more = 100;

    this.consent_checks = 5;
    this.step = '';
    this.step_attempts = 5;

  }

  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('Bot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false)
    });
  }


  async navigate(){

    console.log('navigate', location.href);
    if (this.is_text_result_page()){
      console.log('this.is_text_result_page()');
      this.step = 'text_animation';
      this.text_animation();
    } else if (this.is_news_result_page()){
      console.log('this.is_news_result_page()');
      this.step = 'news_animation';
      this.news_animation();
    } else if (this.is_images_result_page()){
      console.log('this.is_images_result_page()');
      this.step = 'images_animation';
      this.images_animation();
    } else if (this.is_videos_result_page()){
      console.log('this.is_videos_result_page()');
      this.step = 'videos_animation';
      this.videos_animation();
    } else {
      console.log('this.constant_consent_check()');
      this.constant_consent_check();
      console.log('this.start_navigation()');
      this.step = 'start_navigation';
      this.start_navigation();
    }
    this.extension.set_iter_step(this.step);
  }

  set_navigate_timeout(navigate_delay=null){
    if (navigate_delay == null){
      navigate_delay = this.navigate_delay;
    }
    console.log('set_navigate_timeout');
    setTimeout(function(){
      this.navigate();
    }.bind(this), navigate_delay);
  }


  text_animation(){
    if (this.is_text_result_pages_end()){
      this.set_text_results_animation(
        this.set_get_news_tab_timeout
      );
    } else {
      this.set_text_results_animation(
        this.set_get_next_button_text_result_timeout
      );
    }
  }

  news_animation(){
    if (this.is_news_result_pages_end()){
      this.set_news_results_animation(
        this.set_get_images_tab_timeout
      );
    } else {
      console.log('continue news animation');
      this.set_news_results_animation(
        this.set_get_next_button_news_result_timeout
      );
    }
  }

  images_animation(delay = null){
    if (delay == null){
      delay = this.initial_scroll_delay;
    }

    if (this.is_images_result_scrolls_end()){
      this.images_results_counter = 0;
      this.scroll_down().then(
        value => this.set_get_videos_tab_timeout()
      );
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.images_animation(0));
      }.bind(this), delay);
    }
  }


  videos_animation(){
    if (this.is_videos_result_pages_end()){
      this.set_videos_results_animation(
        this.go_to_base_page
      );
    } else {
      this.set_videos_results_animation(
        this.set_get_next_button_videos_timeout
      );
    }
  }



  ///////////////////////////////////////////////////
  // More_text animation (used in DuckDuckGo)
  ///////////////////////////////////////////////////
  // text
  more_text_animation(){
    this.set_click_more_text_timeout().then(
      value => this.text_animation(500)
    )
  }

  set_click_more_text_timeout(){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        this.click_more_text();
        resolve(true);
      }.bind(this), 250);
    });
  }
  
  click_more_text(){
    this.click_or_reload(this.get_more_text_button());
  }

  // news
  more_news_animation(){
    this.set_click_more_news_timeout().then(
      value => this.news_animation(500)
    )
  }

  set_click_more_news_timeout(){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        this.click_more_news();
        resolve(true);
      }.bind(this), 250);
    });
  }
  
  click_more_news(){
    this.click_or_reload(this.get_more_news_button());
  }
  /////////////////////////////////////
  // End more text animation
  /////////////////////////////////////


  ///////////////////////////////////////////////////
  // More images animation (used in Yahoo)
  ///////////////////////////////////////////////////
  more_images_animation(){
    this.set_click_more_images_timeout().then(
      value => this.images_animation(500)
    )
  }

  set_click_more_images_timeout(){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        this.click_more_images();
        resolve(true);
      }.bind(this), 150);
    });
  }

  click_more_images(){
    this.click_or_reload(this.get_more_images_button());
  }
  /////////////////////////////////////
  // End more images animation
  /////////////////////////////////////
  

  /////////////////////////////////////////////////////
  // More_videos animation (used in Yandex and Yahoo)
  /////////////////////////////////////////////////////
  more_videos_animation(){
    this.set_click_more_videos_timeout().then(
      value => this.videos_animation(500)
    )
  }

  set_click_more_videos_timeout(){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        this.click_more_videos();
        resolve(true);
      }.bind(this), 150);
    });
  }

  click_more_videos(){
    this.click_or_reload(this.get_more_videos_button());
  }
  /////////////////////////////////////
  // End more videos animation
  /////////////////////////////////////


  start_navigation(){
    this.extension.steady()
  }

  search(keyword, engine){
    setTimeout(function(){
      this.set_mainpage_animation(keyword);
    }.bind(this), this.next_delay);
  }

  go_to_base_page(){
    console.log('Go to base page'); 
    setTimeout(function(){
      this.extension.go_to_base_page();
    }.bind(this), this.next_delay);
  }

  constant_consent_check(){
    console.log("constant_consent_check");

    return new Promise(async (resolve, reject) => {
      let checks = 1;
      var interval_id = setInterval(function(){
        console.log("checking for consent", checks);
        if (this.is_collect_consent_page()){
          this.consent_animation();
          clearInterval(interval_id);
        } else {
          if (checks >= this.consent_checks){
            console.log("bye intervals", checks);
            clearInterval(interval_id);
          }
          checks += 1;
        }
      }.bind(this), 3000);
    });
  }

  consent_animation(){
  }

  is_collect_consent_page(){
    return false;
  }

  is_text_result_pages_end(){
    console.log('is_text_result_pages_end()');
    let count = this.get_text_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n')
    return this.result_text_pages  <= count;
  }

  is_news_result_pages_end(){
    console.log('is_news_result_pages_end()');
    let count = this.get_news_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n')
    return this.result_news_pages  <= count;
  }

  is_videos_result_pages_end(){
    console.log('is_videos_result_pages_end()');
    let count = this.get_videos_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n')
    return this.result_videos_pages  <= count;
  }

  is_images_result_pages_end(){
    console.log('is_images_result_pages_end()');
    let count = this.get_images_result_page();
    console.log('\n\nPage Count: ' + count + '\n\n')
    return this.result_images_pages  <= count;
  }

  is_text_result_scrolls_end(){
    console.log('is_text_result_scrolls_end()');
    let count = this.get_text_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n')
    return this.scroll_text_reloads  <= count;
  }

  is_news_result_scrolls_end(){
    console.log('is_news_result_scrolls_end()');
    let count = this.get_news_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n')
    return this.scroll_news_reloads  <= count;
  }


  is_videos_result_scrolls_end(){
    console.log('is_videos_result_scrolls_end()');
    let count = this.get_videos_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n')
    return this.scroll_videos_reloads  <= count;
  }

  is_images_result_scrolls_end(){
    console.log('is_images_result_scrolls_end()');
    let count = this.get_images_result_page();
    console.log('\n\nScroll Count: ' + count + '\n\n')
    return this.scroll_images_reloads  <= count;
  }

  set_mainpage_animation(keyword, delay=500){
    setTimeout(function(){
      this.type_search(keyword);
    }.bind(this), delay);
  }

  set_get_search_button_timeout(delay=1000){
    setTimeout(function(){
      this.click_or_reload(this.get_search_button());
    }.bind(this), delay);
  };

  set_videos_results_animation(callback_end){
    setTimeout(function(){
      this.scroll_down().then( value => 
        // the callback needs to be bind again, so that it finds
        // the methods of the object
        callback_end.bind(this)()
      )
    }.bind(this), this.initial_scroll_delay);
  }

  set_text_results_animation(callback_end){
    setTimeout(function(){
      this.scroll_down().then( value => 
        // the callback needs to be bind again, so that it finds
        // the methods of the object
        callback_end.bind(this)()
      );
    }.bind(this), this.initial_scroll_delay);
  }

  set_news_results_animation(callback_end){
    setTimeout(function(){
      this.scroll_down().then( value => 
        // the callback needs to be bind again, so that it finds
        // the methods of the object
        callback_end.bind(this)()
      );
    }.bind(this), this.initial_scroll_delay);
  }
  
  set_get_next_button_text_result_timeout(){
    return new Promise(async (resolve, reject) => {
      setTimeout(function(){
        this.click_or_reload(this.get_next_button());
        resolve(true);
      }.bind(this), this.next_delay);
    });  
  }

  set_get_next_button_news_result_timeout(){
    return new Promise(async (resolve, reject) => {
      setTimeout(function(){
        console.log("this.click_or_move_to_images(this.get_next_button_news());");
        this.click_or_move_to_images(this.get_next_button_news());
        resolve(true);
      }.bind(this), this.next_delay);
    });  
  }

  set_get_next_button_videos_timeout(){
    return new Promise(async (resolve, reject) => {
      setTimeout(function(){
        this.click_or_reload(this.get_next_button_videos());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }

  set_get_news_tab_timeout(){
    return new Promise(async (resolve, reject) => {
      setTimeout(function(){
        this.click_or_reload(this.get_news_tab());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }

  set_get_images_tab_timeout(){
    return new Promise(async (resolve, reject) => {
      setTimeout(function(){
        this.click_or_reload(this.get_images_tab());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }

  set_get_videos_tab_timeout(){
    return new Promise(async (resolve, reject) => {
      setTimeout(function(){
        this.click_or_reload(this.get_videos_tab());
        resolve(true);
      }.bind(this), this.next_delay);
    });
  }

  is_news_loaded(){
    //assume that things are loaded for news
    // see baidu for an example of implementing this properly
    return true;
  }


  click_or_move_to_images(button){
    console.log(button)
    if(button){
      //button.click();
      button.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }))
    }else {
      console.log('Moving to images (Promise)...');
      setTimeout(function(){

        console.log('is_it_loaded', this.is_news_loaded());
        if (this.is_news_loaded()){
          console.log('is_news_loaded');
          this.set_news_results_animation(
            this.set_get_images_tab_timeout
          );
        } else {
          location.reload();
        }
      }.bind(this), 500);
    }
  }

  click_or_reload(button){
    console.log(button)
    if(button){
      //button.click();
      button.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }))
    }else {
      let iter = this.extension.get_iter_step(this.step);
      if (iter < this.step_attempts) {
        console.log('Reloading...');
        location.reload();
      }
    }
  }

  click_or_reload_promise(button){
    return new Promise(async (resolve, reject) => {
      console.log(button)
      if(button){
        //button.click();
        button.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }));
        resolve(true);
      }else {
        console.log('Reloading (Promise)...');
        let iter = this.extension.get_iter_step(this.step);
        if (iter < this.step_attempts) {
          console.log('Reloading...');
          location.reload();
        }
      }
    });
  }

  type_search(keyword){
    var input = this.get_search_input();
    input.focus();
    var i = 0;
    //var keyword = 'type A B C';
    var speed = 100;
    var tracker = this;
    var attempts = 0;

    //a.addEventListener('focus',triGr)
    function triGr(){
      if(i < keyword.length){
        let c = keyword.charAt(i);

        input.value += c;

        // dispatch keyboard events
        input.dispatchEvent(new KeyboardEvent('keypress',  {'key': c}));
        input.dispatchEvent(new KeyboardEvent('keydown',  {'key': c}));
        input.dispatchEvent(new KeyboardEvent('keyup', {'key': c}));
        i++;
        setTimeout(triGr, speed);
      } else {
        console.log('input.value is: ', input.value);
        tracker.clear_autosuggestion_box();
        function check_and_send(){
          console.log('now input.value is: ', input.value);
          // check that the keyword is equal to the input
          if (input.value == keyword ) {
            console.log('value is correct');
            tracker.set_get_search_button_timeout();
          }else if (attempts < 1){
            console.log('try again typing: ' + keyword );
            input.value = '';
            i = 0;
            attempts += 1;
            setTimeout(triGr, speed);
          } else {          
            console.log('give up, just paste the keyword: ' + keyword );
            input.value = keyword;
            tracker.set_get_search_button_timeout();
          }
        }

        setTimeout(check_and_send, 1000); 
      }
    }

    triGr();

  }

  clear_autosuggestion_box(){

  }
  
  clear_browser(){
    return new Promise(async (resolve, reject) => {
      if (this.extension.settings['clear_browser_flag']) {
        localStorage.clear();
        sessionStorage.clear() 
        this.deleteAllCookies();
        this.clear_cookies();
      } else {
        console.log("NOT DELETING BROWSING DATA! Check settings.clear_browser");
      }
      // DO NOT INCLUDE this line in the condition above, clear_browser
      // also might keep track of the iterations
      this.extension.clear_browser();
      resolve(true);
    });
  }
    
  clear_cookies() {
    var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
  }

  deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }


  find_get_parameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
  }


  timed_scroll_down(delay){
    return new Promise(async (resolve, reject) => {
      setTimeout( async function(){
        this.scroll_down().then(resolve(true));
      }.bind(this), delay);
    });
  }

  scroll_down(){
    return new Promise(async (resolve, reject) => {
      let bottom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let _scroll = document.documentElement.scrollTop;

      bottom = Math.min(bottom, _scroll + 7500)

      console.log('_scroll (current):', _scroll );
      console.log('bottom (target):', bottom );

      while (_scroll < bottom){
        await this.sub_scroll_down(_scroll, _scroll + document.documentElement.clientHeight)
        _scroll +=  document.documentElement.clientHeight;
        window.scrollTo(0,_scroll);
      }

      resolve(true);
    });
  }

  sub_scroll_down(_start, _end){
    return new Promise((resolve, reject) => {
      setTimeout( async function(){
        let interval = setInterval(function() {
          if (_start < _end){
            _start += this.sub_scroll_chunk;
            window.scrollTo(0,_start);
          } else {
            clearInterval(interval); 

            let bottom = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let _scroll = document.documentElement.scrollTop;

            // if scroll is in the bottom, wait to load more
            if (_scroll >= bottom){
              setTimeout(function(){
                resolve(true);
              }, this.sub_scroll_waiting_for_more);
            } else {
              resolve(true);
            }
          }
        }.bind(this), this.sub_scroll_down_chunk_delay);
      }.bind(this), this.sub_scroll_down_delay);
    });
  }

  /**
   * [onStart]
   * @param  {Function} fn 
   */
  onStart(fn){
    if (this.debug) console.log('Bot -> onStart()');
    fn(1000);
  }

}
