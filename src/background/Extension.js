import EventEmitter from 'eventemitter3';
const EVENT_NAMES = {
  'event': 'onEvent',
  'disconnectPopup': 'onDisconnectPopup',
  'connectedPopup': 'onConnectedPopup'
}

class Tab {

  constructor() {
    this.allow = true;
    this.disabled = false;
    this.content_blocked = false;
  }

  setState(name, boolean){
    this[name] = boolean;
  }

  getState(name){
    return this[name];
  }

}


export default class Extension {


  constructor(config, navlists){
    this.config = config;
    this.tabs = {};
    this.event = new EventEmitter();

    this.keyword_iterator = 0;
    this.keywords = navlists['keywords'];
    this.engines = navlists['engines'];
    console.log('using keywords:', this.keywords);
    console.log('using engines:', this.engines);

    this.engine = '';
    this.keyword = '';
    this.search_loop_activate = false;
    //this.engine_identifier = null;
    this.starting_search_event = null;
    this.next_search_timeout = null;
    this.trigger_next_search_timeout = null;
    this.go_to_engine_and_retrigger_next_search_timeout = null;
    this.next_clear_browser = null;
    this.next_check_engine = null;
    this.search_tab_id = null;

    this._onContentMessage = this._onContentMessage.bind(this);
    this._onDisconnectPopup = this._onDisconnectPopup.bind(this);
    this._onConnectPopup = this._onConnectPopup.bind(this);

    this.getAllTabsIds = this.getAllTabsIds.bind(this);

    this.search_ticks = this.config.settings.search_ticks_mins*60000;
    this.clear_browser_lapse = this.search_ticks - 45000;
    this.check_engine_lapse = this.search_ticks - 30000;
    this.initial_search_delay = 60000;

    this.step_iterators = {}

    this.debug = false;
  }


  clear_browser(){
    console.log("-> Extension.clear_browser()");
    this.config.clear_browser()

    if (this.next_clear_browser){
      console.log("Removing Browser Event (this.next_clear_browser)");
      clearTimeout(this.next_clear_browser);
    }
  }

  set_settings(settings){
    
    const reload_server = this.config.settings.server != settings.server
    const clear_browser = settings.clearBrowser & !this.config.settings.clear_browser

    if (this.debug) {
      console.log('before:')
      console.log('this.keywords:', this.keywords, 'this.keyword_iterator:', this.keyword_iterator)
      console.log('this.engines:', this.engines)
      console.log('this.config.settings:', this.config.settings)
    }

    this.keywords = settings.queryTerms.split(',').map((term) => term.trim())
    this.keyword_iterator = 0
    console.log(this.keywords, this.keyword_iterator)

    this.engines = settings.searchEngines.filter(({active}) => active).map(({url}) => url)
    console.log(this.engines)

    if (!settings.useServer) settings.server = ''
    this.config.settings.server = settings.server

    this.config.settings.clear_browser = settings.clearBrowser
    this.config.settings.download_pages = settings.downloadPages
    this.config.settings.close_inactive_tabs = settings.closeInactiveTabs
    this.config.settings.search_ticks_mins = settings.searchTicksMins

    // save the settings to localStorage, if possible
    try {
      window.localStorage.setItem('extension_settings', JSON.stringify(settings))
      console.log('persisted settings in localStorage')
    } catch(err) {console.warn(err)}

    // reload engines and keywords if server changed
    if (reload_server) {
      console.log('reloading engines and keywords from server')
      new Promise((resolve, reject) => {
        this.config.getEngines().then(engines => {
          this.engines = engines
          console.log('got engines:', engines)
          resolve()
        })
      })
      new Promise((resolve, reject) => {
        this.config.getQueryTerms().then(keywords => {
          this.keywords = keywords
          console.log('got keywords:', keywords)
          resolve()
        })
      })
    }

    // clear browser after clearing was turned on
    if (clear_browser) {
      console.log('clearing browser now')
      this.config.clear_browser()
    }

    if (this.debug) {
      console.log('after:')
      console.log(this.config.settings)
    }
  }

  get_settings(){
    let searchEngines = [ // augment list of search engine urls with names and activations
      {name: 'Google', url: 'https://google.com', active: false},
      {name: 'DuckDuckGo', url: 'https://duckduckgo.com', active: false},
      {name: 'Bing', url: 'https://bing.com', active: false},
      {name: 'Yandex', url: 'https://yandex.com', active: false},
      {name: 'Yahoo', url: 'https://search.yahoo.com', active: false},
      {name: 'Baidu', url: 'https://baidu.com', active: false}
    ]
    for (let i in this.engines) {
      searchEngines = searchEngines.map(({name, url, active}) => url == this.engines[i] ? {name, url, active: true} : {name, url, active})
    }

    return {
      queryTerms: this.keywords.join(', '),
      searchEngines: searchEngines,
      clearBrowser: this.config.settings.clear_browser ? this.config.settings.clear_browser : false,
      downloadPages: this.config.settings.download_pages ? this.config.settings.download_pages : false,
      closeInactiveTabs: this.config.settings.close_inactive_tabs ? this.config.settings.close_inactive_tabs : false,
      searchTicksMins: this.config.settings.search_ticks_mins ? this.config.settings.search_ticks_mins : 5,
      server: this.config.settings.server ? this.config.settings.server : '',
      useServer: this.config.settings.server == '' ? false : true
    }
  }

  /**
   * [_onConnectedPopup listen when the extension popup is open]
   */
  _onConnectPopup(externalPort){
    if (this.debug) console.log('-->_onConnectPopup:', externalPort);
    if (externalPort.name == "extension_popup"){
      externalPort.onDisconnect.addListener(this._onDisconnectPopup);
      this.event.emit(EVENT_NAMES.connectedPopup);
    }
    if (this.debug) console.log('<--_onConnectPopup:');
  }

  /**
   * [_onDisconnectPopup listen when the extension popup is closed]
   */
  _onDisconnectPopup(externalPort){
    if (this.debug) console.log('-->_onDisconnectPopup:', externalPort);
    if (externalPort.name == "extension_popup"){
      externalPort.onDisconnect.removeListener(this._onDisconnectPopup);
      this.event.emit(EVENT_NAMES.disconnectPopup);
    }
    if (this.debug) console.log('<--_onDisconnectPopup');
  }


  /**
   * [getAllTabsIds return all tabs]
   * @param  {Object}  query    [default: {}]
   * @param  {Boolean} onlyId   [default: true]
   * @return {Promise}
   */
  getAllTabsIds(query={}, onlyId=true){
    return new Promise((resolve, reject)=>{
      xbrowser.tabs.query(query, tabs => {
        if(onlyId){
          resolve(tabs.map(v => v.id))
        }else{
          resolve(tabs)
        }
      });
    });
  }


  arrayRotate(arr, count) {
    count -= arr.length * Math.floor(count / arr.length);
    arr.push.apply(arr, arr.splice(0, count));
    return arr;
  }

  start_search_loop(milliseconds=60000) {
    let now = new Date();

    let passed = now.getTime() % milliseconds;
    console.log('Now:', now);
    this.starting_search_event = now.getTime() - passed + milliseconds;

    console.log('Starting Search Event:', new Date(this.starting_search_event), this.engine, this.get_next_term());
    console.log('...which in milliseconds is', this.starting_search_event);

    if (this.config.settings.close_inactive_tabs){
      this.getAllTabsIds({'active': false}).then(tabIds => {
        for (let id of tabIds){
          var removing = xbrowser.tabs.remove(id);
        }
      });
    }

    let ms = milliseconds - passed;

    this.next_search_timeout = setTimeout(function() {
        this.trigger_next_search();
        this.search_loop(now.getTime() - passed + milliseconds);
    }.bind(this), ms);

  }

  search_loop(next_timestamp) {
    let now = new Date();

    console.log('Next Search Event:', new Date(next_timestamp + this.search_ticks), this.get_next_engine(), this.get_next_term());
    this.next_search_timeout = setTimeout(function() {
        this.next_search();
        //this.search_loop(2*60000, offset);
        this.search_loop(next_timestamp + this.search_ticks);
    }.bind(this), next_timestamp + this.search_ticks - now.getTime());

    console.log('Next Browsing Cleaning:', new Date(next_timestamp + this.clear_browser_lapse));
    this.next_clear_browser = setTimeout(function() {
        // 20220529: not sure why this event would be removed
        // if (this.next_check_engine){
          // removing the check because the cleaning the browser should redirect
          // console.log("Removing Check Engine Event (this.next_check_engine)");
          // clearTimeout(this.next_check_engine);
        // }
        this.trigger_clear_browser();
    }.bind(this), next_timestamp + this.clear_browser_lapse - now.getTime());

    console.log('Next Check Engine Event:', new Date(next_timestamp + this.check_engine_lapse));
    this.next_check_engine = setTimeout(function() {
        this.trigger_check_next_engine();
    }.bind(this), next_timestamp + this.check_engine_lapse - now.getTime());
  }

  get_next_term(){
    let keyword_iterator = this.keyword_iterator + 1;
    if (keyword_iterator >= this.keywords.length){
      keyword_iterator=0;      
    }
    return this.keywords[keyword_iterator];
  }


  _clean_www(hostname){
    if (hostname.startsWith('www.')){
      return hostname.substr(4);
    } else {
      return hostname;
    }
  }

  get_engine_index(){
    let engine_idx = this.engines.indexOf(this.engine);

    if (engine_idx == -1){
      console.log('Engine not found, looking for the canonical form');
      let engine_canonical = 'https://' + this._clean_www((new URL(this.engine)).hostname);
      engine_idx = this.engines.indexOf(engine_canonical);
    }

    return engine_idx;

  }

  get_next_engine(){
    let engine_idx = this.get_engine_index();

    engine_idx += 1;

    if (engine_idx >= this.engines.length){
      engine_idx = 0;
    }

    return this.engines[engine_idx];    
  }



  next_search(){

    this.keyword_iterator = this.keyword_iterator + 1;
    if (this.keyword_iterator >= this.keywords.length){
      this.keyword_iterator=0;      
    }
    
    this.keyword = this.keywords[this.keyword_iterator];
    this.engine = this.get_next_engine(this.engine);

    this.trigger_next_search();
  }

  /**
   * trigger_a browser_clean loop send a message
   * @param {Boolean} 
   */
  async trigger_clear_browser(){
    console.log("trigger_clear_browser(): NEW");
    try{
      xbrowser.tabs.update(this.search_tab_id, {
        'url': this.config.getBasePage()
      })
    } catch (e){
      console.log('Caught error (trigger_clear_browser):', e);
    }
  }

  async trigger_check_next_engine(){
    console.log('trigger_check_next_engine');
    
    
    try{

      xbrowser.tabs.get(this.search_tab_id,function(tab) {
        let next_engine = this.get_next_engine();
        let next_location = (new URL(next_engine));

        if(xbrowser.runtime.lastError) {
          try{
            xbrowser.tabs.update(this.search_tab_id, {
              'url': next_engine
            })
          } catch (e){
            console.log('Caught error 1 (trigger_check_next_engine):', e);
          }
        }  

        var tablocation = new URL(tab.url);
        
        if(this._clean_www(tablocation.hostname) == this._clean_www(next_location.hostname) && tablocation.pathname == '/'){
          console.log('this is the correct engine:',  next_location.hostname);          
        } else {
          console.log('wrong engine (main page)', this._clean_www(tablocation.hostname), this._clean_www(next_location.hostname));
          try{
            xbrowser.tabs.update(this.search_tab_id, {
              'url': next_engine
            })
          } catch (e){
            console.log('Caught error 2 (trigger_check_next_engine):', e);
          }
        }
    
      }.bind(this))

    } catch (e){
      console.log('Caught error 3 (trigger_check_next_engine):', e);
    }


  }

  go_to_engine_and_retrigger_next_search(engine, keyword){
    try {
      xbrowser.tabs.update(this.search_tab_id, {
        'url': engine
      }, function(response){
        if(xbrowser.runtime.lastError) {
          // if redirecting the page fails, try again in 3secs
          this.go_to_engine_and_retrigger_next_search_timeout = setTimeout(function() {
            this.trigger_next_search();
          }.bind(this), 30000);
        } else {
          // if redirection is successful, then trigger the search in 2secs
          console.log('Interface not ready:  waiting for redirection');
          this.trigger_next_search_timeout = setTimeout(function() {
            this.trigger_next_search();
          }.bind(this), 30000);
        }
      }.bind(this))
    } catch (e){
      console.log('Caught error in go_to_engine_and_retrigger_next_search:', e);
    }
  }

  async trigger_frontend_next_search(engine, keyword){
    console.log('trigger_frontend_next_search');

    try{
       xbrowser.tabs.sendMessage(this.search_tab_id, { 
          action: "search", 
          engine: engine,
          keyword: keyword
        }, 
        function(response) {
          if(xbrowser.runtime.lastError) {
            if (this.debug) console.log('trigger_next_search: No front end tab is listening. Try refreshing engine again');
            this.go_to_engine_and_retrigger_next_search(engine, keyword);
          }
          if (!response){
            console.log('Interface not ready:  waiting for redirection');
            this.go_to_engine_and_retrigger_next_search(engine, keyword);
          }
        }.bind(this));
    } catch (e){
      console.log('Caught error (trigger_frontend_next_search):', e);
    }
  }

  check_keyword_engine_synchronization(){
    let elapsed_since_starting = new Date() - this.starting_search_event;
    let round = Math.floor(elapsed_since_starting / this.search_ticks);
    let keyword_turn = round % this.keywords.length;
    let engine_turn = round % this.engines.length;
    console.log('keywords:', this.keywords[this.keyword_iterator], 'vs', this.keywords[keyword_turn]);
    

    let is_synchronized = true;

    if (this.keyword_iterator != keyword_turn){
      console.log('Resynchronization of keyword iterator required');
      this.keyword_iterator = keyword_turn;
      is_synchronized = false;
    } else {
      console.log('keyword is synchronized');
      is_synchronized = true;
    }

    let this_engine_hostname = (new URL(this.engine)).hostname;
    let engine_turn_hostname = (new URL(this.engines[engine_turn])).hostname;

    console.log('engines:', this.engine, 'vs', this.engines[engine_turn]);
    if (this._clean_www(this_engine_hostname) != this._clean_www(engine_turn_hostname)){
      console.log('Resynchronization of engine iterator required');
      this.engine = this.engines[engine_turn];
      is_synchronized = false;
    }else {
      console.log('engine is synchronized');
      is_synchronized = true;
    }
    return is_synchronized;
  }


  /**
   * trigger_next_search send a message indicating that a popup should appear
   * @param {Boolean} 
   */
  async trigger_next_search(){
    console.log('trigger_next_search');

    let is_synchronized = this.check_keyword_engine_synchronization();
    if (!is_synchronized){
      console.log('the keyword or engine were no longer syncrhonized');
    }

    let keyword = this.keywords[this.keyword_iterator];
    let engine = this.engine;

    this.step_iterators = {};
    try{

      xbrowser.tabs.get(this.search_tab_id,function(tab) {
        if(xbrowser.runtime.lastError) {
          this.go_to_engine_and_retrigger_next_search(engine, keyword);
        }  

        var tablocation = new URL(tab.url);
        console.log('tabs.get()', tablocation.pathname)

        let engine_hostname = (new URL(engine)).hostname;

        if(this._clean_www(tablocation.hostname) == this._clean_www(engine_hostname) && tablocation.pathname == '/'){
          console.log('this is the correct location to be:', keyword, engine);
          this.trigger_frontend_next_search(engine, keyword);
        } else {
          console.log('not the correct location (main page)', this._clean_www(tablocation.hostname), this._clean_www(engine_hostname));
          this.go_to_engine_and_retrigger_next_search(engine, keyword);
        }
    
      }.bind(this))

    } catch (e){
      console.log('Caught error (trigger_next_search):', e);
    }
  }


  /**
  * Main communitaction with the content
  */
  _onContentMessage(msg, sender, sendResponse){
      if (this.debug) console.log('-> _onContentMessage');

      
      if(msg==='on_start'){
        sendResponse({
          'clear_browser_flag': this.config.settings.clear_browser,
          //'dummy_server': this.config.settings.dummy_server,
          'server': this.config.settings.server,
          'download_pages': this.config.settings.download_pages
        });
      }else if (msg.hasOwnProperty('steady')){


        console.log('engine:', this.engine)
        console.log('msg.engine:', msg.engine);


        if (!this.search_loop_activate){

          this.engine = msg.engine;

          this.engines = this.arrayRotate(this.engines, this.get_engine_index());
          console.log('Engine order:', this.engines);

          this.search_loop_activate = true;
          this.keyword_iterator = 0;
          this.keyword = this.keywords[this.keyword_iterator];
          this.search_tab_id = sender.tab.id;
          this.start_search_loop();
          sendResponse(true);
        } else {
          sendResponse(false);
        }
        
      } else if (msg.hasOwnProperty('clear_browser')){
        this.clear_browser();
        sendResponse(true);
      
      } else if (msg.hasOwnProperty('set_iter_step')){
        if (msg.step in this.step_iterators){
          this.step_iterators[msg.step] += 1;
        } else {
          this.step_iterators[msg.step] = 0;
        }        
        let _iterator = this.step_iterators[msg.step];
        console.log('set_iter_step', msg.step, _iterator);
        sendResponse({'iterator': _iterator});
      
      } else if (msg.hasOwnProperty('get_iter_step')){
        let _iterator = this.step_iterators[msg.step];
        console.log('get_iter_step', msg.step, _iterator);
        sendResponse({'iterator': _iterator});
      
      } else if (msg.hasOwnProperty('go_to_base_page')){
        let _basepage = this.config.getBasePage();
        console.log('go_to_base_page', _basepage)
        xbrowser.tabs.update(this.search_tab_id, {
          'url': this.config.getBasePage()
        })
        sendResponse({'base_page': _basepage});
      
      } else if (msg.hasOwnProperty('get_current_search')){
        console.log('get_current_search:', this.engine, this.keyword)
        sendResponse({
          'current_engine': this.engine,
          'current_keyword': this.keyword
        });
      
      } else if (msg.hasOwnProperty('get_next_engine')){
        let _next_engine = this.get_next_engine();
        console.log('get_next_engine', _next_engine)
        sendResponse({'next_engine': _next_engine});
      
      } else if (msg.hasOwnProperty('update_settings')){
        // TODO: implement the updating of the settings
        if (!msg.hasOwnProperty('settings')) sendResponse(false)
        else {
          console.log('updating settings')
          this.set_settings(msg.settings)
          sendResponse(true)
        }
      } else if (msg.hasOwnProperty('get_settings')){
        console.log('getting settings')
        sendResponse(this.get_settings())

      } else if (msg.hasOwnProperty('download_page')){
        const blob = new Blob([msg.content], {type: "text/html"})
        const pageData = {
          url: URL.createObjectURL(blob),
          filename: 'webbot/' + this.engine.split('//')[1] + '_' + this.keyword + '_' + msg.filename_suffix
        }
        xbrowser.downloads.download(pageData)
        sendResponse({});
      }
      if (this.debug) console.log('<- _onContentMessage');
      return true;
  }


  /**
   * [start load content]
   * @return {Promise}
   */
  start(){
    return new Promise((resolve, reject) => {
      xbrowser.runtime.onMessage.addListener(this._onContentMessage);
      xbrowser.runtime.onConnect.addListener(this._onConnectPopup);

      xbrowser.browserAction.onClicked.addListener(() => {xbrowser.runtime.openOptionsPage();});

      this.getAllTabsIds().then(tabIds => {
        for (let id of tabIds){
          this.tabs[id] = new Tab()
        }
      });

      resolve();
    });
  }


}//()
