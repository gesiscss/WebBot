
import Bot from '../Bot';

export default class BingBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);

    if (this.debug){
      // use the defaults for debug in Bot
    } else {
      // for Bing it is better to track the number of results
      this.result_text_pages = 50;
      this.scroll_news_reloads = 10;
      this.scroll_images_reloads = 10;
      this.scroll_videos_reloads = 14;
    }
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('BingBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate()
    });
  }

  async news_animation(delay = null){
    console.log('news_animation');
    if (delay == null){
      delay = this.initial_scroll_delay;
    }

    if (this.is_news_result_scrolls_end()){
      this.news_results_counter = 0;
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('news')
      // jump to the result type we want to consider next
      this.jump_to_next_active_result_type('News', null)
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.news_animation(0));
      }.bind(this), delay);
    }
  }


  async images_animation(delay = null){
    console.log('images_animation');
    if (delay == null){
      delay = this.initial_scroll_delay;
    }

    if (this.is_images_result_scrolls_end()){
      this.images_results_counter = 0;
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('images')
      // jump to the result type we want to consider next
      this.jump_to_next_active_result_type('Images', null)
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.images_animation(0));
      }.bind(this), delay);
    }
  }


  async videos_animation(delay = null){
    console.log('videos_animation');
    if (delay == null){
      delay = this.initial_scroll_delay;
    }

    if (this.is_videos_result_scrolls_end()){
      this.videos_results_counter = 0;
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('videos')
      this.go_to_base_page()
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.videos_animation(0));
      }.bind(this), delay);
    }
  }

  consent_animation(){
    setTimeout(function(){
      console.log("CLICKING!!!!");
      let consent_button = document.querySelector('#bnp_btn_accept');
      if (consent_button){
        consent_button.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }))
      }
    }.bind(this), 100);
  }


  is_collect_consent_page(){
    console.log('Consent page detected: ', document.querySelector('#bnp_btn_accept') != null);
    return document.querySelector('#bnp_btn_accept') != null;
  }



  /***************************************************************
  This metnod is a replacement of the click simulation, it does not 
  work with the AWS zombies in Chrome only.

  The method is otherwise unnecessary. It will still work without
  it. Basically the URL bar does not seem to be triggering the 
  loading of a new page.

  BROKEN because there is no search button anymore
  *****************************************************************/
  /*set_get_next_button_text_result_timeout(){
    return new Promise(async (resolve, reject) => {
      setTimeout(function(){
        console.log("click_or_reload_promise");
        let button=this.get_search_button();
        let _href = window.location.protocol + '//' + window.location.hostname + document.querySelector('a.sb_pagN').getAttribute('href');
        this.force_location(_href);
        // this.click_or_reload_promise(button).then(
        //   value => 
        // );
        resolve(true);
      }.bind(this), this.next_delay);
    });  
  }*/

  force_location(_href){
    console.log('force location', _href);
    setTimeout(function(){
      window.location = _href;
    }.bind(this), 1500);
  }

  /**************************************************************
  END OF THE AWS
  ***************************************************************/
  
  /*
  * For Bing, click as fast as possible to avoid the auto-suggestions
  * Leaving the parameter just in case but it is fine to just ignore it
  */
  /*set_get_search_button_timeout(delay=0){
    this.click_or_reload(this.get_search_button());
  };*/

  // for the new bing main page, just press 'Enter' to start the search
  set_get_search_button_timeout(delay=1000){
    console.log('pressing enter...')
    setTimeout(function(){
      var input = this.get_search_input();
      const enterEvent = new KeyboardEvent('keydown', {
        code: 'Enter',
        key: 'Enter',
        charCode: 13,
        keyCode: 13,
        view: window,
        bubbles: true
      })
      input.dispatchEvent(enterEvent)
      console.log('...pressed.')
    }.bind(this), delay);
  }

  get_search_input(){
    return document.querySelector('textarea#sb_form_q');
  }

  clear_autosuggestion_box(){
    let el = document.querySelector("div#sw_as");
    if (el){
      el.remove();
    }
  }

  is_text_result_page(){
    return location.pathname.includes('/search') && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page();
  }

  is_news_result_page(){
    return location.pathname.includes('/news/');
  }

  is_images_result_page(){
    return location.pathname.includes('/images/');
  }

  is_videos_result_page(){
    if (location.pathname.includes('/videos/')) {
      this.sub_scroll_waiting_for_more = 1500;
      return true;
    } else {
      return false;
    }
  }

  /*get_search_button(){
    return document.querySelector('input#sb_form_go');
  }*/

  get_news_tab() {
    return document.querySelector("a[href*='/news/']");
  }

  get_images_tab() {
    return document.querySelector("a[href*='/images/']");
  }

  get_videos_tab() {
    return document.querySelector("a[href*='/videos/']");
  }

  get_next_button(){
    console.log("Next Button", document.querySelector('a.sb_pagN'))
    return document.querySelector('a.sb_pagN');
  }

  get_text_result_page(){
    let r = this.find_get_parameter('first');

    if (r){
      return parseInt(r);
    } else {
      return 1;
    }
  }

  get_news_result_page(){
    this.news_results_counter += 1;
    return this.news_results_counter;
  }

  get_images_result_page(){
    this.images_results_counter += 1;
    return this.images_results_counter;
  }

  get_videos_result_page(){
    this.videos_results_counter += 1;
    return this.videos_results_counter;
  }


  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('BingBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Bing START!!!!');
      fn(1000);
    }, 500);
  }

}//class

