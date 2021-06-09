import GoogleBot from './bot/GoogleBot';
import GoogleConsentBot from './bot/GoogleConsentBot';
import YahooConsentBot from './bot/YahooConsentBot';
import DuckDuckGoBot from './bot/DuckDuckGoBot';
import YandexBot from './bot/YandexBot';
import BingBot from './bot/BingBot';
import YahooBot from './bot/YahooBot';
import BaiduBot from './bot/BaiduBot';
import SoBot from './bot/SoBot';
import SogouBot from './bot/SogouBot';
import BasePageBot from './bot/BasePageBot';
import CaptchaBot from './bot/CaptchaBot';
import YandexCaptchaBot from './bot/YandexCaptchaBot';



import Bot from './Bot';


export default class ContentHandler {

  /**
   * [constructor]
   */
  constructor(){
    this.isListeningToBackend = false;

    this.browser = window.hasOwnProperty('chrome') ? chrome : browser;
    this.debug = false;
    this.onBackendMessage = this.onBackendMessage.bind(this);
    this.settings = {}
    
  }


  /**
   * [return specific tracker for the current page]
   * @return {[type]} [description]
   */
  _getBot(){

    console.log(this.settings);
    console.log((new URL(this.settings['dummy_server'])).hostname);
    console.log((new URL(this.settings['server'])).hostname);

    let hostname_parts = window.location.hostname.split('.');
    let locationstr = window.location.toString();

    if (hostname_parts.length > 1) {
      let str = hostname_parts[hostname_parts.length - 2];

      if (locationstr.includes('captcha')){
        if(str =='yandex'){
          if (this.debug) console.log('YandexCaptchaBot');
          return YandexCaptchaBot;
        } else {
          return CaptchaBot;
        }
      }

      if(str =='google'){
        console.log('google');

        // check second level domain for google
        if (hostname_parts.length > 2) {
          str = hostname_parts[hostname_parts.length - 3];
          if (str =='consent'){
            if (this.debug) console.log('GoogleConsentBot');
            return GoogleConsentBot;
          } else if(str =='scholar'){
            //if (this.debug) console.log('YandexBot');
            //return YandexBot;
            return null;
          } 
        }

        // otherwise default to google
        if (this.debug) console.log('GoogleBot');
        return GoogleBot;
      }else if(str =='duckduckgo'){
        if (this.debug) console.log('DuckDuckGoBot');
        return DuckDuckGoBot;
      }else if(str =='yandex'){
        if (this.debug) console.log('YandexBot');
        return YandexBot;
      }else if(str =='bing'){
        if (this.debug) console.log('BingBot');
        return BingBot;
      } else if(str =='yahoo'){
        // check second level domain for yahoo
        if (hostname_parts.length > 2) {
          str = hostname_parts[hostname_parts.length - 3];
          if (str =='consent'){
            if (this.debug) console.log('YahooConsentBot');
            return YahooConsentBot;
          } 
        }
        if (this.debug) console.log('YahooBot');
        return YahooBot;
      } else if(str =='baidu'){
        if (this.debug) console.log('BaiduBot');
        return BaiduBot;
      }  else if(str =='so' || str =='360kan'){
        if (this.debug) console.log('SoBot');
        return SoBot;
      } else if(str =='sogou'){
        if (this.debug) console.log('SogouBot');
        return SogouBot;
      } else if( this._clean_www(window.location.hostname) ==(new URL(this.settings['server'])).hostname){
        if (this.debug) console.log('BasePageBot');
        return BasePageBot;
      }
    }

    if( this._clean_www(window.location.hostname) ==(new URL(this.settings['dummy_server'])).hostname){
      if (this.debug) console.log('BasePageBot');
      return BasePageBot;
    }

    if (this.debug) console.log('Bot');
    return null;
  }

  /**
   * [get parameter from background]
   * @return {Promise<object>}
   */
  _getParam(){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("on_start")');
      this.browser.runtime.sendMessage('on_start', (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
        } 
        this.settings = response;
        resolve(response);
      });

    });
  }

  get_engine_url(){
    return location.protocol + '//' + location.hostname;
  }

  steady(){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("steady")');
      console.log(this.get_engine_url());
      this.browser.runtime.sendMessage({
          'steady': true,
          'engine': this.get_engine_url()
        }, (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        } 
        resolve(response);
      });

    });
  }


  clear_browser(){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("clear_browser")');
      this.browser.runtime.sendMessage({'clear_browser': true}, (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        } 
        resolve(response);
      });
    });
  }

  set_iter_step(step){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("set_iter_step")');
      this.browser.runtime.sendMessage({'set_iter_step': true, 'step': step}, (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        } 
        resolve(response['iterator']);
      });
    });
  }

  get_iter_step(step){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("get_iter_step")');
      this.browser.runtime.sendMessage({'get_iter_step': true, 'step': step}, (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        } 
        resolve(response['iterator']);
      });
    });
  }

  go_to_base_page(){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("get_base_page")');
      this.browser.runtime.sendMessage({'get_base_page': true}, (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        } 

        window.location.replace(response.base_page);
        resolve(response);
      });
    });
  }

  resume_search_from(path_suffix){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("get_base_page")');
      this.browser.runtime.sendMessage({'get_current_search': true}, (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        } 
        window.location.replace(response.current_engine + path_suffix + response.current_keyword);
        resolve(response);
      });
    });
  }

  go_to_next_engine(){
    return new Promise((resolve, reject)=>{
      if (this.debug) console.log('sendMessage("get_next_engine")');
      this.browser.runtime.sendMessage({'get_next_engine': true}, (response) => {
        if(this.browser.runtime.lastError) {
          /*ignore when the background is not listening*/;
          // console.log(this.browser.runtime.lastError);
        } 

        window.location.replace(response.next_engine);
        resolve(response);
      });
    });
  }


  _clean_www(hostname){
    if (hostname.startsWith('www.')){
      return hostname.substr(4);
    } else {
      return hostname;
    }
  }


  onBackendMessage (message, sender, sendResponse) {
    if (this.debug) console.log(message);
    
    if (message.action == 'init'){
      if (this.debug) console.log('onBackendMessage: init');
      if (this.bot==null){
        this.init();
      } 
      sendResponse(true);
    } else if (message.action == 'search'){
      if (this.debug) console.log('onBackendMessage: search');

      let engine_hostname = (new URL(message.engine)).hostname;


      /**
      This check happens now in the backend, so it should never enter in the else part.
      Leaving if for now, but it could be replaced by simply:
      this.bot.search(message.keyword, message.engine);
      **/
      if(this._clean_www(location.hostname) == this._clean_www(engine_hostname) && location.pathname == '/'){
        this.bot.search(message.keyword, message.engine);
        sendResponse(true);
      } else {
        console.log('not main page', this._clean_www(location.hostname), this._clean_www(engine_hostname))
        window.location.replace(message.engine);
        sendResponse(false);
      }
    }
  }


  /**
   * [create the tracker and start the event listeners for fetching the data]
   */
  createBot(){
    if (this.debug) console.log('-> createBot()')
    const Bot = this._getBot();

    if (Bot != null){
      this.bot = new Bot(this);
      this.bot.eventEmitter.on('onNewURL', () => {
        this.init();
      })

      this.bot.eventEmitter.on('onStart', async delay => {
        if (this.debug) console.log('onStart this.sendMessage');
      });

      
      // connect to the backend
      this.browser.runtime.connect({
        name:"content_handler_connection"
      }).onDisconnect.addListener(
        function(externalPort) {
          if (this.debug) console.log(externalPort);
          if (this.init_timer){
            clearTimeout(this.init_timer);
          }
        }.bind(this));
      this.bot.start();
    }
  }




  /**
   * [initalizate the contenthandler]
   */
  async init(){
    if (!this.isListeningToBackend){
      this.browser.runtime.onMessage.addListener(this.onBackendMessage);
      this.isListeningToBackend = true;
    }

    try {
      let param = await this._getParam();

      if(typeof param == 'object'){
        this.createBot();
      }
    } catch (e) {
      this.init_timer = setTimeout(()=> this.init(), 2000)
      console.log(e);
    }
  }

}//class