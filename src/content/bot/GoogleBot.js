
import Bot from '../Bot';

export default class GoogleBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
    if (this.debug){
      // use the defaults for debug in Bot
    } else {
    }
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('GoogleBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });

  }


  // simple_type_search(input){
  //   console.log(input);  
  //   let el = this.get_search_input();
  //   el.focus();
  //   el.value=input;
  //   this.set_get_search_button_timeout();
  // }

  // __type_search(plc){
  //   // get the element in question
  //   let input = document.querySelector('input[name=q]');

  //   // focus on the input element
  //   input.focus();

  //   // add event listeners to the input element
  //   input.addEventListener('keypress', (event) => {
  //     console.log("You have pressed key: ", event.key);
  //   });

  //   input.addEventListener('keydown', (event) => {
  //     console.log(`key: ${event.key} has been pressed down`);
  //   });

  //   input.addEventListener('keyup', (event) => {
  //     console.log(`key: ${event.key} has been released`);
  //   });
  // }


  consent_animation(){
    setTimeout(function(){
      let consent_button = this.get_consent_button();
      if (consent_button){
        consent_button.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        }))
      }
    }.bind(this), 100);
  }

  // OLD, for when iframe was detected
  // consent_animation(){
  //   setTimeout(function(){
  //     let consent_frame = document.querySelector('iframe');
  //     if (consent_frame){
  //       window.location = consent_frame.src;
  //     }
  //   }.bind(this), 100);
  // }

  get_search_input(){
    return document.querySelector('input[name=q]');
  }

  get_consent_button(){
    let b = document.querySelector('#zV9nZe');

    // german
    if (!b){
      console.log('default consent button not detected, trying german')
      b = Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Ich stimme zu');
    }
    // spanish
    if (!b){
      b = Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Acepto');
    }
    // english
    if (!b){
      b = Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'I agree');
    }
    // French
    if (!b){
      b = Array.from(document.querySelectorAll('button')).find(el => el.textContent === "J'accepte");
    }
    // portuguese
    if (!b){
      b = Array.from(document.querySelectorAll('button')).find(el => el.textContent === 'Aceito');
    }

    
    return b;

  }

  is_collect_consent_page(){

    let _button = this.get_consent_button();
    console.log('Consent page detected: ', _button != null);
    return _button != null;
  }

  is_text_result_page(){
    return window.location.pathname == '/search' && this.find_get_parameter('tbm') == null;
  }

  is_news_result_page(){
    return this.find_get_parameter('tbm') == 'nws';
  }

  is_images_result_page(){
    return this.find_get_parameter('tbm') == 'isch';
  }

  is_videos_result_page(){
    return this.find_get_parameter('tbm') == 'vid';
  }

  get_search_button(){
    return document.querySelector('input[name=btnK]');
  }

  get_news_tab() {
    return document.querySelector("a[href*='tbm=nws']");
  }

  get_images_tab() {
    return document.querySelector("a[href*='tbm=isch']");
  }

  get_videos_tab() {
    return document.querySelector("a[href*='tbm=vid']");
  }

  get_next_button(){
    return document.querySelector('a#pnnext');
  }

  get_next_button_news(){
    return document.querySelector('a#pnnext');
  }

  get_next_button_videos(){
    return document.querySelector('a#pnnext');
  }

  get_text_result_page(){
    let _start = this.find_get_parameter('start');
    if (_start){
      return (parseInt(_start) / 10) + 1;
    } else {
      return 1;
    }
  }

  get_news_result_page(){
    let _start = this.find_get_parameter('start');
    if (_start){
      return (parseInt(_start) / 10) + 1;
    } else {
      return 1;
    }
  }

  get_images_result_page(){
    this.images_results_counter += 1;
    return this.images_results_counter;
  }

  get_videos_result_page(){
    let _start = this.find_get_parameter('start');
    if (_start){
      return (parseInt(_start) / 10) + 1;
    } else {
      return 1;
    }
  }


  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('GoogleBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Google START!!!!');
      fn(1000);
    }, 500);
  }

}//class

