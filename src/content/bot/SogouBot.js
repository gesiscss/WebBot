
import Bot from '../Bot';

export default class SogouBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);

    if (this.debug){
      // use the defaults for debug in Bot
    } else {
      this.result_text_pages = 5;
      this.result_videos_pages = 5;
      this.scroll_images_reloads = 6;
    }

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
    setTimeout(function(){
      this.scroll_down().then( value => 
        this.timed_scroll_down(2000).then( value => 
          // the callback needs to be bind again, so that it finds
          // the methods of the object
          callback_end.bind(this)().then(
              value => this.set_navigate_timeout()
            )
        )
      );
    }.bind(this), this.initial_scroll_delay);
  }

  set_videos_results_animation(callback_end){
    setTimeout(function(){
      this.scroll_down().then( value => 
        // the callback needs to be bind again, so that it finds
        // the methods of the object
        callback_end.bind(this)().then(
            value => this.set_navigate_timeout()
          )
      )
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
    return document.querySelector("a[href*='/pics']");
  }

  get_videos_tab() {
    return document.querySelector("a[href*='/v']");
  }

  get_next_button(){
    return document.querySelector('a#sogou_next');
  }

  get_next_button_videos(){
    // HACK: change the URL
    let _url = new URL(location.href);
    _url.searchParams.set('vpage', this.get_videos_result_page() + 1)
    history.pushState('','', _url.search);
    
    return document.querySelector('a.btn_pg.btn_nxt');
  }

  get_text_result_page(){
    let _start = this.find_get_parameter('page');
    if (_start){
      return parseInt(_start);
    } else {
      return 1;
    }
  }

  get_images_result_page(){
    this.images_results_counter += 1;
    return this.images_results_counter;
  }

  get_videos_result_page(){
    let _start = document.querySelector('a.btn_pg.btn_pg_num.on');
    if (_start){
      let _val = _start.getAttribute('data-num');
      if (_val){
        return parseInt(_val);
      }
    } 

    console.warn('data-num not found');
    return 1;
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

