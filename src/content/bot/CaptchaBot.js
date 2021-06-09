
import Bot from '../Bot';

export default class CaptchaBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('CaptchaBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });

  }

  async navigate(){
    console.log('navigate', location.href)
    console.log('Go to base page:', new Date()); 
    setTimeout(function(){
      this.extension.go_to_base_page();
    }.bind(this), 60000);
 
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('CaptchaBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Captcha START!!!!');
      fn(1000);
    }, 500);
  }

}//class

