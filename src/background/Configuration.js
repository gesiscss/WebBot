
export default class Configuration {

  /**
   * [constructor]
   * @param {Object} settings [instance of Settings]
   * @param {Object} transfer [instance of Transfer]
   */
  constructor(settings, transfer) {
    this.settings = settings;
    this.transfer = transfer;
    this.debug = false;
  }

  /**
   * [_fetchQueryTerms deliver all projects]
   * @return {Array}
   */
  getQueryTerms(){
    return new Promise((resolve, reject)=>{
      this.transfer.jsonFetch(this.settings.server+'bot/getqueryterms', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})})
      .then(queryterms => {
          resolve(queryterms);
         })
        .catch(err => {
          //if (this.debug) console.log('_fetchQueryTerms: ', err);
          console.log("Failed fetching the queryterms");
          resolve(['Sage Concept Grant', 'elections']);
          //resolve(false);
        })
    });
  }


  /**
   * [_fetchQueryTerms deliver all projects]
   * @return {Array}
   */
  getUrlList(){
    return new Promise((resolve, reject)=>{
      this.transfer.jsonFetch(this.settings.server+'bot/geturllist', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})})
      .then(urllist => {
          resolve(urllist);
         })
        .catch(err => {
          //if (this.debug) console.log('_fetchQueryTerms: ', err);
          console.log("Failed fetching the urllist");
          resolve(['example.com']);
          //resolve(false);
        })
    });
  }


    /**
   * [_fetchEngines deliver all projects]
   * @return {Array}
   */
  getEngines(){
    return new Promise((resolve, reject)=>{
      this.transfer.jsonFetch(this.settings.server+'bot/getengines', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})})
      .then(engines => {
          resolve(engines);
         })
        .catch(err => {
          //if (this.debug) console.log('_fetchEngines: ', err);
          console.log("Failed fetching the engines");
          //resolve(false);
          resolve(['https://google.com', 'https://duckduckgo.com', 
            'https://bing.com', 'https://yandex.com', 
            'https://search.yahoo.com', 'https://baidu.com']);
        })
    });
  }

  getBasePage(){
    return this.settings.dummy_server + 'bot/nextround';
  }


  clear_browser(){
    console.log('clear_browser', this.settings.clear_browser);

    if (this.settings.clear_browser){
      //chrome
      try {
        console.log("Removing Chrome Data");
        window.chrome.browsingData.remove({
          "originTypes": {
            "protectedWeb": true, // Set to true or true as per your requirement
            "unprotectedWeb":true,// Set to true or true as per your requirement
            "extension": false    // Set to true or true as per your requirement
          }
        }, {
          "appcache": true, // Set to true or true as per your requirement
          "cache": true, // Set to true or true as per your requirement
          "cacheStorage": true,  // DO NOT WORK IN FIREFOX
          "cookies": true, //LOGS OUT WEBTRACKER in FIREFOX
          //"downloads": true, // Set to true or true as per your requirement
          "fileSystems": true, // DO NOT WORK IN FIREFOX
          "formData": true, // Set to true or true as per your requirement
          "history": true, // Set to true or true as per your requirement
          "indexedDB": true, // Set to true or true as per your requirement
          "localStorage": true, // LOGS OUT WEBTRACKER
          "pluginData": true, // Set to true or true as per your requirement
          "passwords": true, // Set to true or true as per your requirement
          "serviceWorkers": true, // Set to true or true as per your requirement
          "webSQL": true // Set to true or true as per your requirement
        }, function (){
            console.log("Chrome data is Deleted...");
        });
      // firefox
      } catch(err) {
        console.log("Removing Firefox Data");
        window.browser.browsingData.remove({
          "originTypes": {
            //"protectedWeb": true, // NOT SUPPORTED BY FIREFOX
            "unprotectedWeb":true,// Set to true or true as per your requirement
            //"extension": false    // NOT SUPPORTED BY FIREFOX
          }
        }, {
          "cache": true, // Set to true or true as per your requirement
          //"cacheStorage": true,  // DO NOT WORK IN FIREFOX
          "cookies": true, //LOGS OUT WEBTRACKER
          //"downloads": true, // Set to true or true as per your requirement
          //"fileSystems": true, // DO NOT WORK IN FIREFOX
          "formData": true, // Set to true or true as per your requirement
          "history": true, // Set to true or true as per your requirement
          "indexedDB": true, // Set to true or true as per your requirement
          "localStorage": true, // LOGS OUT WEBTRACKER
          "pluginData": true, // Set to true or true as per your requirement
          "passwords": true, // Set to true or true as per your requirement

        }, function (){
            console.log("Firefox data is Deleted...");
        });
      }
    } else{
      console.log("NOT DELETING BROWSING DATA! Check settings.clear_browser");
    }
  }


}//class
