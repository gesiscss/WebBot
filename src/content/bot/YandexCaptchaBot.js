
import Bot from '../Bot';

export default class YandexCaptchaBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('YandexCaptchaBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });

  }

  async navigate(){
    console.log('navigate', location.href)
    console.log('Go to Yandex Base page:', new Date()); 
    await this.extension.set_iter_step('yandex_captcha');

    setTimeout(async function(){
      let iter = await this.extension.get_iter_step('yandex_captcha');
      if (iter < this.step_attempts) {
        this.extension.resume_search_from('/images/search?text=');
      } else {
        this.extension.go_to_base_page();
      }
    }.bind(this), 60000);
 
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('YandexCaptchaBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('YandexCaptcha START!!!!');
      fn(1000);
    }, 500);
  }

}//class

