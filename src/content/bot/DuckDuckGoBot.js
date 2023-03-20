
import Bot from '../Bot';

export default class DuckDuckGoBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);


    if (this.debug){
      // use the defaults for debug in Bot
    } else {
      // it initially seems incorrect to only have 3 reloads
      // for main results, but DDG first load 10 results, then
      // 20 results, and then 30 results
      // Similarly for news, DDG loads 30 results the first and
      // second time
      // DDG in Google is broken because no results are loaded 
      // after the 2nd page
      this.scroll_images_reloads = 4;
    }

    this.initial_scroll_delay = 1000;

  }


  start(){
    if (this.debug) console.log('DuckDuckGoBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate()
    });
  }

  // WATCH OUT: DUCKDUCKGO is different because it uses pushstate and popstate,
  // therefore there is a navigate timeout method
  async text_animation(extra_delay=0){
    // skip the initial text results if unwanted
    if (!this.extension.settings['result_types'].includes('Text')) {
      console.log('skipping the text')
      // don't do any animation when directly skipping the text results
      await this.jump_to_next_active_result_type('Text', null)
      this.set_navigate_timeout()

    } else if (this.is_text_result_scrolls_end()){
      this.text_results_counter = 0;
      setTimeout(async function(){
        await this.scroll_down()
        if (this.extension.settings['download_pages']) await this.download_page('text')
        // jump to the result type we want to consider next
        await this.jump_to_next_active_result_type('Text', null)
        this.set_navigate_timeout()
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.more_text_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }


  get_more_text_button(){
    return document.querySelector('a.result--more__btn');
  }

  news_animation(extra_delay=0){
    if (this.is_news_result_scrolls_end()){
      console.log('End of news');
      this.news_results_counter = 0;
      setTimeout(async function(){
        await this.scroll_down()
        if (this.extension.settings['download_pages']) await this.download_page('news')
        // jump to the result type we want to consider next
        await this.jump_to_next_active_result_type('News', null)
        this.set_navigate_timeout()
      }.bind(this), this.initial_scroll_delay + extra_delay);
    } else {
      console.log('Continue news');
      setTimeout(function(){
        this.scroll_down().then(
          value => this.more_news_animation());
      }.bind(this), this.initial_scroll_delay + extra_delay);
    }
  }


  get_more_news_button(){
    return document.querySelector('a.result--more__btn');
  }


  async images_animation(delay = null){
    if (delay == null){
      delay = this.initial_scroll_delay;
    }

    if (this.is_images_result_scrolls_end()){
      this.images_results_counter = 0;
      await this.scroll_down()
      if (this.extension.settings['download_pages']) await this.download_page('images')
      // jump to the result type we want to consider next
      await this.jump_to_next_active_result_type('Images', null)
      this.set_navigate_timeout()
    } else {
      setTimeout(function(){
        this.scroll_down().then(
          value => this.images_animation(0));
      }.bind(this), delay);
    }
  }

  async videos_animation(delay = null){
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

  get_search_input(){
    return document.querySelector('#search_form_input_homepage');
  }

  is_text_result_page(){
    return (this.find_get_parameter('q') != null) && !this.is_images_result_page() && !this.is_videos_result_page() && !this.is_news_result_page(); 
  }

  is_news_result_page(){
    return this.find_get_parameter('ia') == 'news';
  }

  is_images_result_page(){
    return this.find_get_parameter('ia') == 'images';
  }

  is_videos_result_page(){
    return this.find_get_parameter('ia') == 'videos';
  }

  get_search_button(){
    return document.querySelector('#search_button_homepage');
  }

  get_news_tab() {
    return document.querySelector("#duckbar a.js-zci-link--news");
  }

  get_images_tab() {
    return document.querySelector("#duckbar a.js-zci-link--images");
  }

  get_videos_tab() {
    return document.querySelector("#duckbar a.js-zci-link--videos");
  }

  get_text_result_page(){
    this.text_results_counter += 1;
    return this.text_results_counter;
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



  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('DuckDuckGoBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('DuckDuckGo START!!!!');
      fn(1000);
    }, 500);
  }

}//class

