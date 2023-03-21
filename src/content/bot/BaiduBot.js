
import Bot from '../Bot';

export default class BaiduBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);

    this.initial_scroll_delay = 3000;
    

    if (this.debug){
      // use the defaults for debug in Bot
    } else {
      this.result_text_pages = 5;;
      this.scroll_videos_reloads = 7;
      this.scroll_images_reloads = 7;

    }

    this.sub_scroll_down_delay = 1000;

  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('BaiduBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate()
    });
  }


  async images_animation(delay = null){
    if (delay == null) delay = this.initial_scroll_delay

    if (this.is_images_result_scrolls_end()){
      this.images_results_counter = 0
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('images')
      // jump to the result type we want to consider next
      await this.jump_to_next_active_result_type('Images', null)
    } else {
      setTimeout(async function(){
        await this.scroll_down()
        this.images_animation(500)
      }.bind(this), delay)
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

  set_get_search_button_timeout(delay=1000){
    setTimeout(function(){
      this.click_or_reload_promise(this.get_search_button()).then(
            value => this.set_navigate_timeout()
          );
    }.bind(this), delay);
  };

  set_text_results_animation(callback_end){
    setTimeout(async function(){
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('text')
      // the callback needs to be bind again, so that it finds
      // the methods of the object
      await callback_end.bind(this)()
      this.set_navigate_timeout()
    }.bind(this), this.initial_scroll_delay);
  }

  get_search_input(){
    return document.querySelector('input#kw');
  }

  is_text_result_page(){
    return location.pathname.includes('/s') && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page();
  }

  is_news_result_page(){
    if (location.href.includes('tn=news')) {
      return true;
    } else {
      return false;
    }
  }

  is_images_result_page(){
    if (location.hostname.includes('image.')) {
      this.sub_scroll_waiting_for_more = 3000;
      return true;
    } else {
      return false;
    }
  }

  is_videos_result_page(){
    if (location.pathname.includes('/vsearch')) {
      this.sub_scroll_waiting_for_more = 3000;
      return true;
    } else {
      return false;
    }
  }

  get_search_button(){
    return document.querySelector("form input#su");
  }

  get_news_tab() {
    return document.querySelector("div.s_tab_inner a[href*='tn=news']");
  }

  get_images_tab() {
    return document.querySelector("div.s_tab_inner a[href*='tn=baiduimage']");
  }

  get_videos_tab() {
    let tab = document.querySelector("div.s_tab_inner a[href*='tn=vsearch'], a[name='i_video']")
    tab.dispatchEvent(new MouseEvent('mousedown')) // weirdly, this is required for Baidu's video tab
    return tab;
  }

  get_next_button(){
    let navs = document.querySelectorAll("div#page a.n");
    if (navs){
      return navs[navs.length-1];
    } else {
      return null;
    }

  }

  is_news_loaded(){
    //assume that things are loaded for news

    // this selector is broken, we just move one for now
    // return document.querySelector("div#page a.n") != null;

    return true;
  }

  get_next_button_news(){
    let navs = document.querySelectorAll("div#page a.n");
    let p = this.find_get_parameter('pn');
    
    // not first page
    if (p){
      if (navs.length == 2){
        return navs[1];
      } else {
        debugger;
        return null;
      }
    } 
    // first page
    else {
      if (navs){
        return navs[navs.length-1];
      } else {
        return null;
      }
    }
  }

  get_text_result_page(){
    let p = this.find_get_parameter('pn');

    if (p){
      return Math.floor(parseInt(p) / 10) + 1;
    } else {
      return 1;
    }
  }

  get_news_result_page(){
    let p = this.find_get_parameter('pn');

    if (p){
      return Math.floor(parseInt(p) / 10) + 1;
    } else {
      return 1;
    }
  }

  get_images_result_page(){
    console.log("\n\n");
    console.log(this.images_results_counter);
    console.log("\n\n");
    this.images_results_counter += 1;
    return this.images_results_counter;
  }

  get_videos_result_page(){
    console.log("\n\n");
    console.log(this.videos_results_counter);
    console.log("\n\n");
    this.videos_results_counter += 1;
    return this.videos_results_counter;
  }


  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('BaiduBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Baidu START!!!!');
      fn(1500);
    }, 1000);
  }

}//class

