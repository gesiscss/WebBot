/*global chrome*/
/*global browser*/

import EventEmitter from 'eventemitter3';
const EVENT_NAMES = {
  'ready': 'onReady'
}

export default class Extension{

    constructor(){
      this.xbrowser = chrome? chrome: browser;
      this.event = new EventEmitter();
      this.settings = this.get().settings;
      this.requireUpdate = this.get().requireUpdate;
      this.extensionHandler = this.get().extensionHandler;

      // hack to force an event in the background when the extension is closed
      var port = this.xbrowser.runtime.connect({name:"extension_popup"});
      this._onReady();
    }

    /**
     * [wait if the extensionHandler on the cross view from the background page exist]
     * @return {[type]} [description]
     */
    _onReady(){
      this.interval = setInterval(function(){
        if(this.extensionHandler!=null){
          clearInterval(this.interval);
          this.event.emit(EVENT_NAMES.ready, {
            extensionHandler: this.extensionHandler,
            settings: this.settings,
          }, false);
        }
      }.bind(this), 500);
    }

    /**
     * [get the window object from the brackground page]
     * @return {Object}
     */
    get(){
      return this.xbrowser.extension.getBackgroundPage()
    }

}
