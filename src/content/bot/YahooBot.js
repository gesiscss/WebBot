
import Bot from '../Bot';

export default class YahooBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);

    // set the number of result pages to load
    if (this.debug){
      // use the defaults for debug in Bot
    } else {
      // also use the defaults
    }

    this.sub_scroll_waiting_for_more = 500;
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('YahooBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate()
    });
  }

  consent_animation(){
    setTimeout(function(){
      let consent_form = document.querySelector('form.consent-form');
      if (consent_form){
        document.querySelector(
          'form.consent-form button[name=agree]').dispatchEvent(
          new MouseEvent('click'))
      }
    }.bind(this), 100);
  }

  // for the new yahoo main page, just press 'Enter' to start the search
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
  };

  images_animation(extra_delay=0){
    if (this.is_images_result_scrolls_end()){
      this.images_results_counter = 0;
      setTimeout(async function(){
        await this.scroll_down()
        if (this.extension.settings['download_pages']) await this.download_page('images')
        this.set_get_videos_tab_timeout()
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.more_images_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }



  videos_animation(extra_delay=0){
    if (this.is_videos_result_scrolls_end()){
      this.videos_results_counter = 0;
      setTimeout(async function(){
        await this.scroll_down()
        if (this.extension.settings['download_pages']) await this.download_page('videos')
        this.go_to_base_page()
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.more_videos_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }


  // this selects the correct button but the button is broken most of the time
  // i.e., after clicking (even manually with the extension disabled), nothing happens
  get_more_videos_button(){
    return document.querySelector('section#search button.more');
  }


  get_more_images_button(){
    return document.querySelector('section#results button.more-res');
  }


  get_search_input(){
    return document.querySelector('form[role=search] input')
  }

  is_collect_consent_page(){
    return location.pathname.includes('/collectConsent');
  }

  is_text_result_page(){
    return location.pathname.includes('/search') && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page();
  }

  is_news_result_page(){
    return location.hostname.includes('news.search');
  }

  is_images_result_page(){
    return location.pathname.includes('/search/images');
  }

  is_videos_result_page(){
    return location.pathname.includes('/search/video');
  }

  get_search_button(){
    return document.querySelector('form[role=search] button[type=submit]');
  }

  get_images_tab() {
    return document.querySelector("a[href*='/search/images']");
  }

  get_news_tab() {
    return document.querySelector("a[href*='news.search']");
  }

  get_videos_tab() {
    return document.querySelector("a[href*='/search/video']");
  }

  get_next_button(){
    return document.querySelector('a.next');
  }

  get_next_button_news(){
    return document.querySelector('a.next');
  }

  get_text_result_page(){
    const p = this.find_get_parameter('b')
    const stride = this.find_get_parameter('pz')
    
    if (p && stride){
      return Math.floor(parseInt(p) / parseInt(stride)) + 1;
    } else {
      return 1;
    }
  }

  get_news_result_page(){
    const p = this.find_get_parameter('b')
    const stride = this.find_get_parameter('pz')
    
    if (p && stride){
      return Math.floor(parseInt(p) / parseInt(stride)) + 1;
    } else {
      return 1;
    }
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
    if (this.debug) console.log('YahooBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Yahoo START!!!!');
      fn(1000);
    }, 500);
  }

}//class

