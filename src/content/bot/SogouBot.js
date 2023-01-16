
import Bot from '../Bot';

export default class SogouBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);

    // set the number of result pages to load
    if (this.debug){
      // use the defaults for debug in Bot
    } else {
      // also use the defaults 
    }

    this.initial_scroll_delay = 3000;
    this.sub_scroll_down_delay = 1000;

  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('SogouBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate()
    });

  }



  set_text_results_animation(callback_end){
    setTimeout(async function(){
      await this.scroll_down()
      // Sogou loads some ads at the bottom of the bottom of the page
      await this.timed_scroll_down(1000)
      await this.timed_scroll_down(1000)
      // capture at the bottom of the page because of lazy loading images
      if (this.extension.settings['download_pages']) await this.download_page('text')
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      await callback_end.bind(this)()
    }.bind(this), this.initial_scroll_delay);
  }

  async images_animation(delay = null){
    if (delay == null) delay = this.initial_scroll_delay

    if (this.is_images_result_scrolls_end()){
      this.images_results_counter = 0;
      await this.scroll_down()
      console.log('waiting for images to load...')
      await new Promise(resolve => setTimeout(resolve, 6000)); // give the images some time to load
      // download image results page only after scrolling all the way to the bottom (continuously loading additional images)
      // in contrast, text results etc. are saved at the bottom of each results page
      if (this.extension.settings['download_pages']) await this.download_page('images')
      this.set_get_videos_tab_timeout()
    } else {
      setTimeout(async function(){
        await this.scroll_down()
        this.images_animation(0)
      }.bind(this), delay)
    }
  }

  set_videos_results_animation(callback_end){
    setTimeout(async function(){
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('videos')
      await callback_end.bind(this)()
      await this.set_navigate_timeout() // Sogou just replaces the video results, doesn't load a new page
    }.bind(this), this.initial_scroll_delay);
  }

  get_search_input(){
    return document.querySelector(('input#query'));
  }

  is_text_result_page(){
    return window.location.pathname == '/web';
  }

  is_images_result_page(){
    return window.location.pathname == '/pics';
  }

  is_videos_result_page(){
    return window.location.pathname == '/v';
  }

  get_search_button(){
    return document.querySelector('input#stb');
  }

  get_images_tab() {
    return document.querySelector("ul.searchnav a[href*='/pics']");
  }

  get_videos_tab() {
    return document.querySelector("ul.searchnav a[href*='/v']");
  }

  get_next_button(){
    return document.querySelector('a#sogou_next');
  }

  get_next_button_videos(){
    // HACK: change the URL
    /*let _url = new URL(location.href);
    _url.searchParams.set('vpage', this.get_videos_result_page() + 1)
    history.pushState('','', _url.search);*/
    
    return document.querySelector('a.btn_nxt');
  }

  get_text_result_page(){
    let _start = this.find_get_parameter('page');
    if (_start) return parseInt(_start)
    else return 1;
  }

  get_images_result_page(){
    this.images_results_counter += 1;
    return this.images_results_counter;
  }

  get_videos_result_page(){
    let _start = document.querySelector('a.btn_pg_num.on');
    if (_start){
      let _val = _start.getAttribute('data-page');
      if (_val){
        return parseInt(_val);
      }
    } 

    console.warn('data-page not found');
    return 1;
  }

  // Sogou doesn't have news results
  is_news_result_page(){
    return false
  }

  // Skip the news results
  text_animation(){
    if (this.is_text_result_pages_end()){
      this.set_text_results_animation(
        this.set_get_images_tab_timeout // jump to images directly
      )
    } else {
      this.set_text_results_animation(
        this.set_get_next_button_text_result_timeout
      )
    }
  }


  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('SogouBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Sogou START!!!!');
      fn(1000);
    }, 500);
  }

}//class

