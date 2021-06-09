import Extension from './Extension';



export default class ExtensionHandler {

  /**
   * [constructor]
   * @param {Configuration} config
   * @param {Transfer} transfer
   */
  constructor(config, navlists) {
    this.config = config;
    this.debug = false;
    this.urllist = navlists['urllist'];
    this.navlists = navlists;
  }

  async reload_config(){
    try {
      if (this.debug) console.log('***Load Configuration***');
      if (this.debug) console.log('***Configuration Loaded***');
    } catch(err){
      console.log('ERROR IN INIT');
      console.error(err);
    }
  }


  async init(){
    if (this.debug) console.log('ExtensionHandler.init()');

    await this.reload_config();
    this.initialize();
  }


  initialize(){
    return new Promise((resolve, reject) => {
      if (this.debug) console.log('-> ExtensionHandler.initialize() - Promise');
      try {
        this.extension = new Extension(this.config, this.navlists);
        this.extension.start();
      } catch (e) {
        reject(e)
      } finally{
        if (this.debug) console.log('<- ExtensionHandler.initialize() - Promise');
        resolve();
      }
    });
  }


  track_list(){
    if (this.debug) console.log('-> ExtensionHandler.track_list()')
    return new Promise((resolve, reject)=>{
      this.navigate();
      resolve(true);
    });
  }

  navigate(){

    return new Promise((resolve, reject)=>{
      xbrowser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        let url_iterator = 0;
        xbrowser.tabs.update(tabs[0].id, {url: url});

        let url = this.urllist[url_iterator];
        if (!url.startsWith('http')){
          url = 'http://' + url;
        }
        xbrowser.tabs.update(tabs[0].id, {url: url});
        url_iterator += 1;
        if (url_iterator  == this.urllist.length) {
          clearInterval(interval_id);
        }

        let interval_id = setInterval(function(){
          let url = this.urllist[url_iterator];
          if (!url.startsWith('http')){
            url = 'http://' + url;
          }
          xbrowser.tabs.update(tabs[0].id, {url: url});
          url_iterator += 1;
          if (url_iterator  == this.urllist.length) {
            clearInterval(interval_id);
          }

        }.bind(this), 10000);
      }.bind(this));
    });
  }




}//class
