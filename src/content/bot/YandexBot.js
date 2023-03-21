
import Bot from '../Bot';

export default class YandexBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);

    // set the number of result pages to load
    if (this.debug){
      this.result_text_pages = 1;
      this.result_news_pages = 1;
      
      this.scroll_text_reloads = 1;
      this.scroll_news_reloads = 1;
    } else {
      // use the defaults
    }

    this.initial_scroll_delay = 3000;
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('YandexBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate()
    });
  }


  videos_animation(extra_delay=0){
    if (this.is_videos_result_scrolls_end()){
      this.videos_results_counter = 0;
      setTimeout(async function(){
        await this.scroll_down()
        // download image results page only after scrolling all the way to the bottom (continuously loading additional images)
        // in contrast, text results etc. are saved at the bottom of each results page
        if (this.extension.settings['download_pages']) await this.download_page('videos')
        this.go_to_base_page()
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(async function(){
        await this.scroll_down()
        this.more_videos_animation()
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }


  set_videos_results_animation(callback_end){
    setTimeout(function(){
      this.scroll_down().then( value => 
        this.timed_scroll_down(1000).then( value => 
          // the callback needs to be bind again, so that it finds
          // the methods of the object
          callback_end.bind(this)()
        )
      )
    }.bind(this), this.initial_scroll_delay);
  }


  get_more_videos_button(){
    return document.querySelector('div.more_last_yes button');
  }

  get_search_input(){
    return document.querySelector('input#text');
  }

  consent_animation(){
    setTimeout(function(){
      let consent_button = document.querySelector('table button[data-id=button-all]');
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
    console.log('Consent page detected: ', document.querySelector('table button[data-id=button-all]') != null);
    return document.querySelector('table button[data-id=button-all]') != null;
  }

  is_text_result_page(){
    console.log('is_text_result_page');
    return location.pathname.includes('/search/');
  }

  // Yandex doesn't have news results anymore, see dzen.ru
  is_news_result_page(){
    return false
  }

  // Skip the news results
  text_animation(){
    // skip the initial text results if unwanted
    if (!this.extension.settings['result_types'].includes('Text')) {
      console.log('skipping the text')
      // don't do any animation when directly skipping the text results
      this.jump_to_next_active_result_type('Text', null, ['News'])
    // jump to the result type we want to consider next
    } else if (this.is_text_result_pages_end()){
      this.jump_to_next_active_result_type('Text', this.set_text_results_animation.bind(this), ['News'])
    // continue with the next result page
    } else {
      this.set_text_results_animation(
        this.set_get_next_button_text_result_timeout
      )
    }
  }

  is_images_result_page(){
    console.log('is_images_result_page');
    return location.pathname.includes('/images/');
  }

  is_videos_result_page(){
    console.log('is_videos_result_page');
    if (location.pathname.includes('/video/')) {
      this.sub_scroll_waiting_for_more = 3000;
      this.sub_scroll_down_delay = 1000;
      return true;
    } else {
      return false;
    }
  }

  get_news_tab() {
    let el = document.querySelector("a[href*='newssearch.']");
    el.removeAttribute('target')
    return el;
  }

  get_images_tab() {
    let el = document.querySelector("a[href*='/images/']");
    el.removeAttribute('target')
    return el;
  }

  get_videos_tab() {
    let el = document.querySelector("a[href*='/video/']");
    el.removeAttribute('target');
    return el;
  }

  get_search_button(){
    return document.querySelector('div.search2__button button')
  }

  get_next_button(){
    return document.querySelector('a.Pager-Item_type_next')
  }

  /*get_next_button_news(){
    let buttons = document.querySelectorAll('span.pager__group a.button')
    return buttons[buttons.length - 1];
  }*/

  get_text_result_page(){
    let p = this.find_get_parameter('p')

    if (p){
      return parseInt(p) + 1
    } else {
      return 1
    }
  }

  get_news_result_page(){
    let p = this.find_get_parameter('p');

    if (p){
      return parseInt(p) + 1;
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

  // get_videos_result_page(){
  //   let p = this.find_get_parameter('p');
  //   if (p){
  //     return parseInt(p) + 1;
  //   } else {
  //     return 1;
  //   }
  // }


  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('YandexBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Yandex START!!!!');
      fn(1000);
    }, 500);
  }

}//class

