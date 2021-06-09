import "babel-polyfill"
import Transfer from './Transfer';
import Configuration from './Configuration';
import ExtensionHandler from './ExtensionHandler';
import settings from '../lib/settings';



async function load_navlists(xbrowser) {
  return {
    'urllist': ['empty'],
    'keywords': ['empty'],
    'engines': ['empty']
  }
}

(async function main() {
  
  console.log('Start', new Date(), settings.server);
  var transfer = new Transfer(settings.server);
  window.config = new Configuration(settings, transfer);
  window.config.clear_browser()
  
  window.addEventListener("unhandledrejection", event => {
    console.warn(`UNHANDLED PROMISE REJECTION: `, event.reason, 
      '. Have you added the certificates by visiting the server page?');
  });

  window.requireUpdate = false;
  if(settings.requireVersion.hasOwnProperty(settings.getBrowser().name) && settings.requireVersion[settings.getBrowser().name] > settings.getBrowser().version){
    console.error('PLEASE UPDATE YOUR BROWSER');
    window.requireUpdate = true;
  }
  
  window.xbrowser = window.hasOwnProperty('chrome') ? chrome : browser;
  window.settings = settings;

  let navlists = await load_navlists(window.xbrowser);
 

  navlists['keywords'] = await config.getQueryTerms();
  navlists['engines'] = await config.getEngines();
  navlists['urllist'] = await config.getUrlList();
  console.log(navlists);

  window.extensionHandler = new ExtensionHandler(config, navlists);
  await window.extensionHandler.init();

})();
