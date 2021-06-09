
import Bot from '../Bot';

export default class YahooBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('YahooBot -> start()');
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
      //console.log('Consented');
      //window.location = 'https://search.yahoo.com';
    }
  }

  consent_animation(){
    setTimeout(function(){
      let consent_form = document.querySelector('form.consent-form');
      if (consent_form){
        document.querySelector(
          'form.consent-form button[name=agree]').dispatchEvent(
          new MouseEvent('click'))
      }
    }.bind(this), 100);
  }

  is_collect_consent_page(){
    return location.pathname.includes('/collectConsent');
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('YahooBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('Yahoo START!!!!');
      fn(1000);
    }, 500);
  }

}//class

