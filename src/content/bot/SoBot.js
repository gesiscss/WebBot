
import Bot from '../Bot';

export default class SoBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    
    if (this.debug){
      // use the defaults for debug in Bot
    } else {
      this.result_text_pages = 5;
      this.result_videos_pages = 5;
      this.scroll_images_reloads = 10;     
    }

    this.initial_scroll_delay = 2000;
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

  set_videos_results_animation(callback_end){
    setTimeout(function(){
      this.scroll_down().then( value => 
        this.timed_scroll_down(500).then( value => 
          // the callback needs to be bind again, so that it finds
          // the methods of the object
          callback_end.bind(this)()
        )
      )
    }.bind(this), this.initial_scroll_delay);
  }


  set_text_results_animation(callback_end){
    setTimeout(function(){
      this.scroll_down().then( value => 
        // the callback needs to be bind again, so that it finds
        // the methods of the object
        callback_end.bind(this)().then(
            value => this.set_navigate_timeout()
          )
      );
    }.bind(this), this.initial_scroll_delay);
  }

  get_search_input(){
    return document.querySelector('input#input');
  }

  is_text_result_page(){
    return window.location.pathname == '/s';
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
     return window.location.pathname == '/v';
  }

  get_search_button(){
    return document.querySelector('input#search-button');
  }

  get_images_tab() {
    return document.querySelector("div#tabs-wrap a[href*='/i']");
  }

  get_videos_tab() {
    return document.querySelector("div.sitenav a[href*='/v']");
  }

  get_next_button(){
    return document.querySelector('a#snext');
  }

  get_next_button_videos(){
    return document.querySelector("a.js-next");
  }

  get_text_result_page(){
    let _start = this.find_get_parameter('pn');
    if (_start){
      return parseInt(_start);
    } else {
      return 1;
    }
  }

  get_images_result_page(){
    this.images_results_counter += 1;

    console.log('\n\n', this.images_results_counter, '\n\n');
    return this.images_results_counter;
  }

  get_videos_result_page(){
    let _start = this.find_get_parameter('pageno');
    if (_start){
      return parseInt(_start);
    } else {
      return 1;
    }
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

