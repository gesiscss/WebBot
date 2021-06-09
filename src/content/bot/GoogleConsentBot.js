
import Bot from '../Bot';

export default class GoogleBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
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

  async navigate(){
    console.log('navigate', location.href)
    if (this.is_collect_consent_page()){
      console.log('this.is_collect_consent_page()');
      this.consent_animation();
    } else {
      console.log('Consented');
      window.location = 'https://www.google.com';
    }
  }

  consent_animation(){
    setTimeout(function(){
      let consent_button = document.querySelector('#introAgreeButton');
      this.click_or_reload(consent_button);
    }.bind(this), 200);
  }

  is_collect_consent_page(){
    console.log('Consent page detected: ', document.querySelector('#introAgreeButton') != null);
    return document.querySelector('#introAgreeButton') != null;
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

