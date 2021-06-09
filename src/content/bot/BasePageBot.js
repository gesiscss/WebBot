
import Bot from '../Bot';

export default class BasePageBot extends Bot{

  constructor(worker, extension){
    super(worker, extension);
    this.onStart = this.onStart.bind(this);
  }


  /**
   * [start the tracker]
   * @return {[type]} [description]
   */
  start(){
    if (this.debug) console.log('BasePageBot -> start()');
    this.onStart(delay => {
      this.eventEmitter.emit(this.EVENT_NAMES.start, delay, false);
      this.navigate();
    });

  }

  async navigate(){
    console.log('navigate', location.href)
    this.set_go_to_next_engine();
 
  }

  set_go_to_next_engine(){
    this.clear_browser().then(
      value => this.go_to_next_engine()
    );
  }

  go_to_next_engine(){
    console.log('Go to next engine'); 
    setTimeout(function(){
      this.extension.go_to_next_engine();
      // give enough time to complete the process
    }.bind(this), 5000);
  }

  /**
   * [onStart on start event]
   * @param  {Function} fn
   */
  onStart(fn){
    if (this.debug) console.log('BasePageBot -> onStart()');
    setTimeout(() => {
      if (this.debug) console.log('BasePage START!!!!');
      fn(1000);
    }, 500);
  }

}//class

