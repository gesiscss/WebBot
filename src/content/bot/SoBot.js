
import Bot from '../Bot';

export default class SoBot extends Bot{

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
    if (this.debug) console.log('SoBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate()
    }) ;

  }


  set_text_results_animation(callback_end){
    setTimeout(async function(){
      await this.scroll_down()
      // capture at the bottom of the page because of lazy loading images
      if (this.extension.settings['download_pages']) await this.download_page('text')
        // the callback needs to be bind again, so that it finds
        // the methods of the object
      await callback_end.bind(this)()
      await this.set_navigate_timeout() // So doesn't navigate to a new page, but just replaces the results
    }.bind(this), this.initial_scroll_delay);
  }

  get_search_input(){
    return document.querySelector('input#input');
  }

  is_text_result_page(){
    return window.location.pathname == '/s' && !this.is_videos_result_page()
  }

  is_news_result_page(){
    return window.location.pathname == '/ns'
  }

  is_images_result_page(){
    if (window.location.pathname == '/i') {
      this.sub_scroll_waiting_for_more = 3000;
      return true;
    } else {
      return false;
    }
  }

  is_videos_result_page(){
     return window.location.hostname == 'tv.360kan.com'
  }

  get_search_button(){
    return document.querySelector('input#search-button')
  }

  get_news_tab(){
    return document.querySelector("div#tabs-wrap a[href*='news.so.com/ns']")
  }

  get_images_tab() {
    return document.querySelector("div#so-nav-container a[href*='image.so.com/i']")
  }

  get_videos_tab() {
    return document.querySelector("div#so-nav-container a[href*='tv.360kan.com/s']")
  }

  get_next_button(){
    return document.querySelector('a#snext')
  }

  get_next_button_videos(){
    return document.querySelector("a.js-next")
  }

  get_next_button_news(){
    return document.querySelector('a.next')
  }

  get_text_result_page(){
    let _start = this.find_get_parameter('pn')
    if (_start) return parseInt(_start)
    else return 1
  }

  get_news_result_page(){
    let _start = this.find_get_parameter('pn')
    if (_start) return parseInt(_start)
    else return 1
  }

  get_images_result_page(){
    this.images_results_counter += 1;

    console.log('\n\n', this.images_results_counter, '\n\n');
    return this.images_results_counter;
  }

  // Video result are automatically loaded
  async videos_animation(delay = null){
    if (delay == null){
      delay = this.initial_scroll_delay;
    }

    if (this.videos_results_counter == 0) {
      delay += 6000 // add more delay on initally loading video results
    }

    if (this.is_videos_result_scrolls_end()){
      this.videos_results_counter = 0;
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('videos')
      this.go_to_base_page()
    } else {
      setTimeout(async function(){
        await this.scroll_down()
        this.videos_animation(this.next_delay)
      }.bind(this), delay);
    }
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
    if (this.debug) console.log('SoBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('So START!!!!');
      fn(1000);
    }, 500);
  }

}//class

