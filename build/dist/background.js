(()=>{var e={430:()=>{!function(){"use strict";"undefined"==typeof globalThis&&(window.globalThis=window),(()=>{const e={},t=globalThis.origin&&globalThis.origin.startsWith("safari-web-extension://");if((!globalThis.browser||t)&&globalThis.chrome){const t=globalThis.chrome;globalThis.__defineGetter__("browser",(()=>({browserAction:{onClicked:{addListener:e=>t.browserAction.onClicked.addListener(e)},setBadgeText:s=>new Promise(((r,n)=>{if(!e["browserAction.setBadgeText"]||!e["browserAction.setBadgeText"].callbackNotSupported)try{t.browserAction.setBadgeText(s,(()=>{t.runtime.lastError?n(t.runtime.lastError):r()}))}catch(t){e["browserAction.setBadgeText"]={callbackNotSupported:!0}}e["browserAction.setBadgeText"]&&e["browserAction.setBadgeText"].callbackNotSupported&&(t.browserAction.setBadgeText(s),t.runtime.lastError?n(t.runtime.lastError):r())})),setBadgeBackgroundColor:s=>new Promise(((r,n)=>{if(!e["browserAction.setBadgeBackgroundColor"]||!e["browserAction.setBadgeBackgroundColor"].callbackNotSupported)try{t.browserAction.setBadgeBackgroundColor(s,(()=>{t.runtime.lastError?n(t.runtime.lastError):r()}))}catch(t){e["browserAction.setBadgeBackgroundColor"]={callbackNotSupported:!0}}e["browserAction.setBadgeBackgroundColor"]&&e["browserAction.setBadgeBackgroundColor"].callbackNotSupported&&(t.browserAction.setBadgeBackgroundColor(s),t.runtime.lastError?n(t.runtime.lastError):r())})),setTitle:s=>new Promise(((r,n)=>{if(!e["browserAction.setTitle"]||!e["browserAction.setTitle"].callbackNotSupported)try{t.browserAction.setTitle(s,(()=>{t.runtime.lastError?n(t.runtime.lastError):r()}))}catch(t){e["browserAction.setTitle"]={callbackNotSupported:!0}}e["browserAction.setTitle"]&&e["browserAction.setTitle"].callbackNotSupported&&(t.browserAction.setTitle(s),t.runtime.lastError?n(t.runtime.lastError):r())})),setIcon:s=>new Promise(((r,n)=>{if(!e["browserAction.setIcon"]||!e["browserAction.setIcon"].callbackNotSupported)try{t.browserAction.setIcon(s,(()=>{t.runtime.lastError?n(t.runtime.lastError):r()}))}catch(t){e["browserAction.setIcon"]={callbackNotSupported:!0}}e["browserAction.setIcon"]&&e["browserAction.setIcon"].callbackNotSupported&&(t.browserAction.setIcon(s),t.runtime.lastError?n(t.runtime.lastError):r())}))},bookmarks:{get:e=>new Promise(((s,r)=>{t.bookmarks.get(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))})),onCreated:{addListener:e=>t.bookmarks.onCreated.addListener(e),removeListener:e=>t.bookmarks.onCreated.removeListener(e)},onChanged:{addListener:e=>t.bookmarks.onChanged.addListener(e),removeListener:e=>t.bookmarks.onChanged.removeListener(e)},onMoved:{addListener:e=>t.bookmarks.onMoved.addListener(e),removeListener:e=>t.bookmarks.onMoved.removeListener(e)},update:(e,s)=>new Promise(((r,n)=>{t.bookmarks.update(e,s,(e=>{t.runtime.lastError?n(t.runtime.lastError):r(e)}))}))},commands:{onCommand:{addListener:e=>t.commands.onCommand.addListener(e)}},downloads:{download:e=>new Promise(((s,r)=>{t.downloads.download(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))})),onChanged:{addListener:e=>t.downloads.onChanged.addListener(e),removeListener:e=>t.downloads.onChanged.removeListener(e)},search:e=>new Promise(((s,r)=>{t.downloads.search(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))}))},i18n:{getMessage:(e,s)=>t.i18n.getMessage(e,s)},identity:{getRedirectURL:()=>t.identity.getRedirectURL(),get getAuthToken(){return t.identity&&t.identity.getAuthToken&&(e=>new Promise(((s,r)=>t.identity.getAuthToken(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)})))))},get launchWebAuthFlow(){return t.identity&&t.identity.launchWebAuthFlow&&(e=>new Promise(((s,r)=>{t.identity.launchWebAuthFlow(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))})))},get removeCachedAuthToken(){return t.identity&&t.identity.removeCachedAuthToken&&(e=>new Promise(((s,r)=>t.identity.removeCachedAuthToken(e,(()=>{t.runtime.lastError?r(t.runtime.lastError):s()})))))}},menus:{onClicked:{addListener:e=>t.contextMenus.onClicked.addListener(e)},create:e=>new Promise(((s,r)=>{t.contextMenus.create(e,(()=>{t.runtime.lastError?r(t.runtime.lastError):s()}))})),update:(e,s)=>new Promise(((r,n)=>{t.contextMenus.update(e,s,(()=>{t.runtime.lastError?n(t.runtime.lastError):r()}))})),removeAll:()=>new Promise(((e,s)=>{t.contextMenus.removeAll((()=>{t.runtime.lastError?s(t.runtime.lastError):e()}))}))},permissions:{request:e=>new Promise(((s,r)=>{t.permissions.request(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))})),remove:e=>new Promise(((s,r)=>{t.permissions.remove(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))}))},runtime:{sendNativeMessage:(e,s)=>new Promise(((r,n)=>{t.runtime.sendNativeMessage(e,s,(e=>{t.runtime.lastError?n(t.runtime.lastError):r(e)}))})),getManifest:()=>t.runtime.getManifest(),onMessage:{addListener:e=>t.runtime.onMessage.addListener(((t,s,r)=>{const n=e(t,s);if(n&&"function"==typeof n.then)return n.then((e=>{if(void 0!==e)try{r(e)}catch(e){}})),!0})),removeListener:e=>t.runtime.onMessage.removeListener(e)},onMessageExternal:{addListener:e=>t.runtime.onMessageExternal.addListener(((t,s,r)=>{const n=e(t,s);if(n&&"function"==typeof n.then)return n.then((e=>{if(void 0!==e)try{r(e)}catch(e){}})),!0}))},sendMessage:e=>new Promise(((s,r)=>{t.runtime.sendMessage(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)})),t.runtime.lastError&&r(t.runtime.lastError)})),getURL:e=>t.runtime.getURL(e),get lastError(){return t.runtime.lastError}},storage:{local:{set:e=>new Promise(((s,r)=>{t.storage.local.set(e,(()=>{t.runtime.lastError?r(t.runtime.lastError):s()}))})),get:()=>new Promise(((e,s)=>{t.storage.local.get(null,(r=>{t.runtime.lastError?s(t.runtime.lastError):e(r)}))})),clear:()=>new Promise(((e,s)=>{t.storage.local.clear((()=>{t.runtime.lastError?s(t.runtime.lastError):e()}))})),remove:e=>new Promise(((s,r)=>{t.storage.local.remove(e,(()=>{t.runtime.lastError?r(t.runtime.lastError):s()}))}))},sync:{set:e=>new Promise(((s,r)=>{t.storage.sync.set(e,(()=>{t.runtime.lastError?r(t.runtime.lastError):s()}))})),get:()=>new Promise(((e,s)=>{t.storage.sync.get(null,(r=>{t.runtime.lastError?s(t.runtime.lastError):e(r)}))})),clear:()=>new Promise(((e,s)=>{t.storage.sync.clear((()=>{t.runtime.lastError?s(t.runtime.lastError):e()}))})),remove:e=>new Promise(((s,r)=>{t.storage.sync.remove(e,(()=>{t.runtime.lastError?r(t.runtime.lastError):s()}))}))}},tabs:{onCreated:{addListener:e=>t.tabs.onCreated.addListener(e)},onActivated:{addListener:e=>t.tabs.onActivated.addListener(e)},onUpdated:{addListener:e=>t.tabs.onUpdated.addListener(e),removeListener:e=>t.tabs.onUpdated.removeListener(e)},onRemoved:{addListener:e=>t.tabs.onRemoved.addListener(e),removeListener:e=>t.tabs.onRemoved.removeListener(e)},onReplaced:{addListener:e=>t.tabs.onReplaced.addListener(e),removeListener:e=>t.tabs.onReplaced.removeListener(e)},executeScript:(e,s)=>new Promise(((r,n)=>{t.tabs.executeScript(e,s,(()=>{t.runtime.lastError?n(t.runtime.lastError):r()}))})),sendMessage:(e,s,r={})=>new Promise(((n,o)=>{t.tabs.sendMessage(e,s,r,(e=>{t.runtime.lastError?o(t.runtime.lastError):n(e)})),t.runtime.lastError&&o(t.runtime.lastError)})),query:e=>new Promise(((s,r)=>{t.tabs.query(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))})),create:e=>new Promise(((s,r)=>{t.tabs.create(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))})),get:e=>new Promise(((s,r)=>{t.tabs.get(e,(e=>{t.runtime.lastError?r(t.runtime.lastError):s(e)}))})),remove:e=>new Promise(((s,r)=>{t.tabs.remove(e,(()=>{t.runtime.lastError?r(t.runtime.lastError):s()}))})),update:(e,s)=>new Promise(((r,n)=>{t.tabs.update(e,s,(e=>{t.runtime.lastError?n(t.runtime.lastError):r(e)}))}))},devtools:t.devtools&&{inspectedWindow:t.devtools.inspectedWindow&&{onResourceContentCommitted:t.devtools.inspectedWindow.onResourceContentCommitted&&{addListener:e=>t.devtools.inspectedWindow.onResourceContentCommitted.addListener(e)},get tabId(){return t.devtools.inspectedWindow.tabId}}},webRequest:{onBeforeSendHeaders:{addListener:(e,s,r)=>t.webRequest.onBeforeSendHeaders.addListener(e,s,r),removeListener:e=>t.webRequest.onBeforeSendHeaders.removeListener(e)}}})))}})()}()},487:()=>{!function(){"use strict";const e=new Map,t=8388608;async function s(e,s,r){for(let n=0;n*t<=r.array.length;n++){const o={method:"singlefile.fetchResponse",requestId:s,headers:r.headers,status:r.status,error:r.error};o.truncated=r.array.length>t,o.truncated?(o.finished=(n+1)*t>r.array.length,o.array=r.array.slice(n*t,(n+1)*t)):o.array=r.array,await browser.tabs.sendMessage(e,o)}return{}}function r(t,s={},n){return new Promise(((o,i)=>{const a=new XMLHttpRequest;if(a.withCredentials=!0,a.responseType="arraybuffer",a.onerror=e=>i(new Error(e.detail)),a.onreadystatechange=()=>{a.readyState==XMLHttpRequest.DONE&&(a.status||a.response.byteLength?401!=a.status&&403!=a.status&&404!=a.status||n?o({array:Array.from(new Uint8Array(a.response)),headers:{"content-type":a.getResponseHeader("Content-Type")},status:a.status}):r(t,s,!0).then(o).catch(i):i())},a.open("GET",t,!0),s.headers)for(const e of Object.entries(s.headers))a.setRequestHeader(e[0],e[1]);if(n){const t=String(Math.random()).substring(2);c=t,l=s.referrer,e.set(c,l),a.setRequestHeader("x-single-file-request-id",t)}var c,l;a.send()}))}browser.runtime.onMessage.addListener(((e,t)=>{if(e.method&&e.method.startsWith("singlefile.fetch"))return new Promise((n=>{(async function(e,t){if("singlefile.fetch"==e.method)try{const n=await r(e.url,{referrer:e.referrer,headers:e.headers});return s(t.tab.id,e.requestId,n)}catch(r){return s(t.tab.id,e.requestId,{error:r.message,arrray:[]})}else if("singlefile.fetchFrame"==e.method)return browser.tabs.sendMessage(t.tab.id,e)})(e,t).then(n).catch((e=>n({error:e&&e.toString()})))}))})),browser.runtime.onMessage.addListener(((e,t)=>{if("singlefile.frameTree.initResponse"==e.method||"singlefile.frameTree.ackInitRequest"==e.method)return browser.tabs.sendMessage(t.tab.id,e,{frameId:0}),Promise.resolve({})}));const n=new Map;function o(e,t){e.delete(t)}browser.runtime.onMessage.addListener(((e,t)=>{if("singlefile.lazyTimeout.setTimeout"==e.method){let s,r=n.get(t.tab.id);if(r)if(s=r.get(t.frameId),s){const t=s.get(e.type);t&&clearTimeout(t)}else s=new Map;const i=setTimeout((async()=>{try{const s=n.get(t.tab.id),r=s.get(t.frameId);s&&r&&o(r,e.type),await browser.tabs.sendMessage(t.tab.id,{method:"singlefile.lazyTimeout.onTimeout",type:e.type})}catch(e){}}),e.delay);return r||(r=new Map,s=new Map,r.set(t.frameId,s),n.set(t.tab.id,r)),s.set(e.type,i),Promise.resolve({})}if("singlefile.lazyTimeout.clearTimeout"==e.method){let s=n.get(t.tab.id);if(s){const r=s.get(t.frameId);if(r){const t=r.get(e.type);t&&clearTimeout(t),o(r,e.type)}}return Promise.resolve({})}})),browser.tabs.onRemoved.addListener((e=>n.delete(e)))}()},228:e=>{"use strict";var t=Object.prototype.hasOwnProperty,s="~";function r(){}function n(e,t,s){this.fn=e,this.context=t,this.once=s||!1}function o(e,t,r,o,i){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new n(r,o||e,i),c=s?s+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function i(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(s=!1)),a.prototype.eventNames=function(){var e,r,n=[];if(0===this._eventsCount)return n;for(r in e=this._events)t.call(e,r)&&n.push(s?r.slice(1):r);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},a.prototype.listeners=function(e){var t=s?s+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var n=0,o=r.length,i=new Array(o);n<o;n++)i[n]=r[n].fn;return i},a.prototype.listenerCount=function(e){var t=s?s+e:e,r=this._events[t];return r?r.fn?1:r.length:0},a.prototype.emit=function(e,t,r,n,o,i){var a=s?s+e:e;if(!this._events[a])return!1;var c,l,g=this._events[a],h=arguments.length;if(g.fn){switch(g.once&&this.removeListener(e,g.fn,void 0,!0),h){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,t),!0;case 3:return g.fn.call(g.context,t,r),!0;case 4:return g.fn.call(g.context,t,r,n),!0;case 5:return g.fn.call(g.context,t,r,n,o),!0;case 6:return g.fn.call(g.context,t,r,n,o,i),!0}for(l=1,c=new Array(h-1);l<h;l++)c[l-1]=arguments[l];g.fn.apply(g.context,c)}else{var d,u=g.length;for(l=0;l<u;l++)switch(g[l].once&&this.removeListener(e,g[l].fn,void 0,!0),h){case 1:g[l].fn.call(g[l].context);break;case 2:g[l].fn.call(g[l].context,t);break;case 3:g[l].fn.call(g[l].context,t,r);break;case 4:g[l].fn.call(g[l].context,t,r,n);break;default:if(!c)for(d=1,c=new Array(h-1);d<h;d++)c[d-1]=arguments[d];g[l].fn.apply(g[l].context,c)}}return!0},a.prototype.on=function(e,t,s){return o(this,e,t,s,!1)},a.prototype.once=function(e,t,s){return o(this,e,t,s,!0)},a.prototype.removeListener=function(e,t,r,n){var o=s?s+e:e;if(!this._events[o])return this;if(!t)return i(this,o),this;var a=this._events[o];if(a.fn)a.fn!==t||n&&!a.once||r&&a.context!==r||i(this,o);else{for(var c=0,l=[],g=a.length;c<g;c++)(a[c].fn!==t||n&&!a[c].once||r&&a[c].context!==r)&&l.push(a[c]);l.length?this._events[o]=1===l.length?l[0]:l:i(this,o)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=s?s+e:e,this._events[t]&&i(this,t)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=s,a.EventEmitter=a,e.exports=a}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}(()=>{"use strict";class e{constructor(e){this.server=e,this.DEFAULT_OPTION={method:"GET",headers:{Accept:"application/json"}}}jsonFetch(e,t=this.DEFAULT_OPTION){return this._fetch(e,t)}_fetch(e,t){return new Promise(((s,r)=>{fetch(e,t).then((e=>{if(!e.ok)throw e.statusText;return e.json()})).then((e=>{if(null!=e.error)r({message:e.error.message||"",code:e.error.code||"",nr:e.error.nr||""});else{var t="object"==typeof e.result&&e.result.hasOwnProperty("data")?e.result.data:e.result;s(t)}})).catch((e=>{r({message:"_fetch: "+e.message,code:"500",nr:"-1"})}))}))}}class t{constructor(e,t){this.settings=e,this.transfer=t,this.debug=!1}getQueryTerms(){return new Promise(((e,t)=>{this.transfer.jsonFetch(this.settings.server+"bot/getqueryterms",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({})}).then((t=>{e(t)})).catch((t=>{console.warn("Failed fetching the queryterms"),e([])}))}))}getUrlList(){return new Promise(((e,t)=>{this.transfer.jsonFetch(this.settings.server+"bot/geturllist",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({})}).then((t=>{e(t)})).catch((t=>{console.warn("Failed fetching the urllist"),e([])}))}))}getEngines(){return new Promise(((e,t)=>{this.transfer.jsonFetch(this.settings.server+"bot/getengines",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({})}).then((t=>{e(t)})).catch((t=>{console.warn("Failed fetching the engines"),e([])}))}))}getResultTypes(){return new Promise(((e,t)=>{this.transfer.jsonFetch(this.settings.server+"bot/getresulttypes",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({})}).then((t=>{e(t)})).catch((t=>{console.warn("Failed fetching the resultTypes"),e([])}))}))}getBasePage(){return"/nextround.html"}clear_browser(){if(this.settings.clear_browser)try{console.log("Removing Chrome Data"),window.chrome.browsingData.remove({originTypes:{protectedWeb:!0,unprotectedWeb:!0,extension:!1}},{appcache:!0,cache:!0,cacheStorage:!0,cookies:!0,fileSystems:!0,formData:!0,history:!0,indexedDB:!0,localStorage:!0,pluginData:!0,passwords:!0,serviceWorkers:!0,webSQL:!0},(function(){console.log("Chrome data is Deleted...")}))}catch(e){console.log("Removing Firefox Data"),window.browser.browsingData.remove({originTypes:{unprotectedWeb:!0}},{cache:!0,cookies:!0,formData:!0,history:!0,indexedDB:!0,localStorage:!0,pluginData:!0,passwords:!0},(function(){console.log("Firefox data is Deleted...")}))}else console.log("NOT DELETING BROWSING DATA! Check settings.clear_browser")}}const r=s(228),n="onDisconnectPopup",o="onConnectedPopup";class i{constructor(){this.allow=!0,this.disabled=!1,this.content_blocked=!1}setState(e,t){this[e]=t}getState(e){return this[e]}}class a{constructor(e,t){this.config=e,this.tabs={},this.event=new r,this.keyword_iterator=0,this.keywords=t.keywords,this.engines=t.engines,this.result_types=t.resultTypes,console.log("using keywords:",this.keywords),console.log("using engines:",this.engines),console.log("using resultTypes:",this.result_types),this.engine="",this.keyword="",this.search_loop_activate=!1,this.starting_search_event=null,this.next_search_timeout=null,this.trigger_next_search_timeout=null,this.go_to_engine_and_retrigger_next_search_timeout=null,this.next_clear_browser=null,this.next_check_engine=null,this.search_tab_id=null,this._onContentMessage=this._onContentMessage.bind(this),this._onDisconnectPopup=this._onDisconnectPopup.bind(this),this._onConnectPopup=this._onConnectPopup.bind(this),this.getAllTabsIds=this.getAllTabsIds.bind(this);const s=this.config.settings.search_ticks_mins-4+this.result_types.length;this.search_ticks=6e4*s,this.clear_browser_lapse=this.search_ticks-45e3,this.check_engine_lapse=this.search_ticks-3e4,this.initial_search_delay=6e4,this.step_iterators={},this.debug=!1}clear_browser(){console.log("-> Extension.clear_browser()"),this.config.clear_browser(),this.next_clear_browser&&(console.log("Removing Browser Event (this.next_clear_browser)"),clearTimeout(this.next_clear_browser))}set_settings(e){const t=this.config.settings.server!=e.server,s=e.clearBrowser&!this.config.settings.clear_browser;this.debug&&(console.log("before:"),console.log("this.keywords:",this.keywords,"this.keyword_iterator:",this.keyword_iterator),console.log("this.engines:",this.engines),console.log("this.config.settings:",this.config.settings)),this.keywords=e.queryTerms.split(",").map((e=>e.trim())),this.keyword_iterator=0,console.log(this.keywords,this.keyword_iterator),this.engines=e.searchEngines.filter((({active:e})=>e)).map((({url:e})=>e)),console.log(this.engines),this.result_types=e.resultTypes.filter((({active:e})=>e)).map((({name:e})=>e)),console.log(this.result_types);const r=this.config.settings.search_ticks_mins-4+this.result_types.length;this.search_ticks=6e4*r,this.clear_browser_lapse=this.search_ticks-45e3,this.check_engine_lapse=this.search_ticks-3e4,e.useServer||(e.server=""),this.config.settings.server=e.server,this.config.settings.clear_browser=e.clearBrowser,this.config.settings.download_pages=e.downloadPages,this.config.settings.downloads_folder=e.downloadsFolder,this.config.settings.close_inactive_tabs=e.closeInactiveTabs,this.config.settings.search_ticks_mins=e.searchTicksMins;try{window.localStorage.setItem("extension_settings",JSON.stringify(e)),console.log("persisted settings in localStorage")}catch(e){console.warn(e)}t&&(console.log("reloading engines and keywords from server"),this.config.getEngines().then((e=>{this.engines=e,console.log("got engines:",e)})),this.config.getQueryTerms().then((e=>{this.keywords=e,console.log("got keywords:",e)})),this.config.getResultTypes().then((e=>{this.resultTypes=e,console.log("got result types:",e)}))),s&&(console.log("clearing browser now"),this.config.clear_browser()),this.debug&&(console.log("after:"),console.log(this.config.settings))}get_settings(){let e=[{name:"Google",url:"https://google.com",active:!1},{name:"DuckDuckGo",url:"https://duckduckgo.com",active:!1},{name:"Bing",url:"https://bing.com",active:!1},{name:"Yandex",url:"https://yandex.com",active:!1},{name:"Yahoo",url:"https://search.yahoo.com",active:!1},{name:"Baidu",url:"https://baidu.com",active:!1},{name:"So",url:"https://so.com",active:!1},{name:"Sogou",url:"https://sogou.com",active:!1}];for(let t in this.engines)e=e.map((({name:e,url:s,active:r})=>s==this.engines[t]?{name:e,url:s,active:!0}:{name:e,url:s,active:r}));let t=[{name:"Text",active:!1},{name:"News",active:!1},{name:"Images",active:!1},{name:"Videos",active:!1}];for(let e in this.result_types)t=t.map((({name:t,active:s})=>t==this.result_types[e]?{name:t,active:!0}:{name:t,active:s}));return{queryTerms:this.keywords.join(", "),searchEngines:e,resultTypes:t,clearBrowser:!!this.config.settings.clear_browser&&this.config.settings.clear_browser,downloadPages:!!this.config.settings.download_pages&&this.config.settings.download_pages,downloadsFolder:this.config.settings.downloads_folder?this.config.settings.downloads_folder:"",closeInactiveTabs:!!this.config.settings.close_inactive_tabs&&this.config.settings.close_inactive_tabs,searchTicksMins:this.config.settings.search_ticks_mins?this.config.settings.search_ticks_mins:6,server:this.config.settings.server?this.config.settings.server:"",useServer:""!=this.config.settings.server}}_onConnectPopup(e){this.debug&&console.log("--\x3e_onConnectPopup:",e),"extension_popup"==e.name&&(e.onDisconnect.addListener(this._onDisconnectPopup),this.event.emit(o)),this.debug&&console.log("<--_onConnectPopup:")}_onDisconnectPopup(e){this.debug&&console.log("--\x3e_onDisconnectPopup:",e),"extension_popup"==e.name&&(e.onDisconnect.removeListener(this._onDisconnectPopup),this.event.emit(n)),this.debug&&console.log("<--_onDisconnectPopup")}getAllTabsIds(e={},t=!0){return new Promise(((s,r)=>{xbrowser.tabs.query(e,(e=>{s(t?e.map((e=>e.id)):e)}))}))}arrayRotate(e,t){return t-=e.length*Math.floor(t/e.length),e.push.apply(e,e.splice(0,t)),e}start_search_loop(e=6e4){let t=new Date,s=t.getTime()%e;console.log("Now:",t),this.starting_search_event=t.getTime()-s+e,console.log("Starting Search Event:",new Date(this.starting_search_event),this.engine,this.get_next_term()),console.log("...which in milliseconds is",this.starting_search_event),this.config.settings.close_inactive_tabs&&this.getAllTabsIds({active:!1}).then((e=>{for(let t of e)xbrowser.tabs.remove(t)}));let r=e-s;this.next_search_timeout=setTimeout(function(){this.trigger_next_search(),this.search_loop(t.getTime()-s+e)}.bind(this),r)}search_loop(e){let t=new Date;console.log("Next Search Event:",new Date(e+this.search_ticks),this.get_next_engine(),this.get_next_term()),this.next_search_timeout=setTimeout(function(){this.next_search(),this.search_loop(e+this.search_ticks)}.bind(this),e+this.search_ticks-t.getTime()),console.log("Next Browsing Cleaning:",new Date(e+this.clear_browser_lapse)),this.next_clear_browser=setTimeout(function(){this.trigger_clear_browser()}.bind(this),e+this.clear_browser_lapse-t.getTime()),console.log("Next Check Engine Event:",new Date(e+this.check_engine_lapse)),this.next_check_engine=setTimeout(function(){this.trigger_check_next_engine()}.bind(this),e+this.check_engine_lapse-t.getTime())}get_next_term(){let e=this.keyword_iterator+1;return e>=this.keywords.length&&(e=0),this.keywords[e]}_clean_www(e){return e.startsWith("www.")?e.substr(4):e}get_engine_index(){let e=this.engines.indexOf(this.engine);if(-1==e){console.log("Engine not found, looking for the canonical form");let t="https://"+this._clean_www(new URL(this.engine).hostname);e=this.engines.indexOf(t)}return e}get_next_engine(){let e=this.get_engine_index();return e+=1,e>=this.engines.length&&(e=0),this.engines[e]}next_search(){this.keyword_iterator=this.keyword_iterator+1,this.keyword_iterator>=this.keywords.length&&(this.keyword_iterator=0),this.keyword=this.keywords[this.keyword_iterator],this.engine=this.get_next_engine(this.engine),this.trigger_next_search()}async trigger_clear_browser(){console.log("trigger_clear_browser(): NEW"),await this.save_current_page();try{xbrowser.tabs.update(this.search_tab_id,{url:this.config.getBasePage()})}catch(e){console.log("Caught error (trigger_clear_browser):",e)}}save_current_page(){return new Promise(((e,t)=>{this.config.settings.download_pages?xbrowser.tabs.sendMessage(this.search_tab_id,{action:"download_page"},(()=>{console.warn("waiting for resolve"),setTimeout((()=>{console.warn("resolving now"),e()}),5e3)})):e()}))}async trigger_check_next_engine(){console.log("trigger_check_next_engine");try{xbrowser.tabs.get(this.search_tab_id,function(e){let t=this.get_next_engine(),s=new URL(t);if(xbrowser.runtime.lastError)try{xbrowser.tabs.update(this.search_tab_id,{url:t})}catch(e){console.log("Caught error 1 (trigger_check_next_engine):",e)}var r=new URL(e.url);if(this._clean_www(r.hostname)==this._clean_www(s.hostname)&&"/"==r.pathname)console.log("this is the correct engine:",s.hostname);else{console.log("wrong engine (main page)",this._clean_www(r.hostname),this._clean_www(s.hostname));try{xbrowser.tabs.update(this.search_tab_id,{url:t})}catch(e){console.log("Caught error 2 (trigger_check_next_engine):",e)}}}.bind(this))}catch(e){console.log("Caught error 3 (trigger_check_next_engine):",e)}}go_to_engine_and_retrigger_next_search(e,t){try{xbrowser.tabs.update(this.search_tab_id,{url:e},function(e){xbrowser.runtime.lastError?this.go_to_engine_and_retrigger_next_search_timeout=setTimeout(function(){this.trigger_next_search()}.bind(this),3e4):(console.log("Interface not ready:  waiting for redirection"),this.trigger_next_search_timeout=setTimeout(function(){this.trigger_next_search()}.bind(this),3e4))}.bind(this))}catch(e){console.log("Caught error in go_to_engine_and_retrigger_next_search:",e)}}async trigger_frontend_next_search(e,t){console.log("trigger_frontend_next_search");try{xbrowser.tabs.sendMessage(this.search_tab_id,{action:"search",engine:e,keyword:t},function(s){xbrowser.runtime.lastError&&(this.debug&&console.log("trigger_next_search: No front end tab is listening. Try refreshing engine again"),this.go_to_engine_and_retrigger_next_search(e,t)),s||(console.log("Interface not ready:  waiting for redirection"),this.go_to_engine_and_retrigger_next_search(e,t))}.bind(this))}catch(e){console.log("Caught error (trigger_frontend_next_search):",e)}}check_keyword_engine_synchronization(){let e=new Date-this.starting_search_event,t=Math.floor(e/this.search_ticks),s=t%this.keywords.length,r=t%this.engines.length;console.log("keywords:",this.keywords[this.keyword_iterator],"vs",this.keywords[s]);let n=!0;this.keyword_iterator!=s?(console.log("Resynchronization of keyword iterator required"),this.keyword_iterator=s,n=!1):(console.log("keyword is synchronized"),n=!0);let o=new URL(this.engine).hostname,i=new URL(this.engines[r]).hostname;return console.log("engines:",this.engine,"vs",this.engines[r]),this._clean_www(o)!=this._clean_www(i)?(console.log("Resynchronization of engine iterator required"),this.engine=this.engines[r],n=!1):(console.log("engine is synchronized"),n=!0),n}async trigger_next_search(){console.log("trigger_next_search"),this.check_keyword_engine_synchronization()||console.log("the keyword or engine were no longer syncrhonized");let e=this.keywords[this.keyword_iterator],t=this.engine;this.step_iterators={};try{xbrowser.tabs.get(this.search_tab_id,function(s){xbrowser.runtime.lastError&&this.go_to_engine_and_retrigger_next_search(t,e);var r=new URL(s.url);console.log("tabs.get()",r.pathname);let n=new URL(t).hostname;this._clean_www(r.hostname)==this._clean_www(n)&&"/"==r.pathname?(console.log("this is the correct location to be:",e,t),this.trigger_frontend_next_search(t,e)):(console.log("not the correct location (main page)",this._clean_www(r.hostname),this._clean_www(n)),this.go_to_engine_and_retrigger_next_search(t,e))}.bind(this))}catch(e){console.log("Caught error (trigger_next_search):",e)}}_onContentMessage(e,t,s){if(this.debug&&console.log("-> _onContentMessage"),"on_start"===e)s({clear_browser_flag:this.config.settings.clear_browser,server:this.config.settings.server,download_pages:this.config.settings.download_pages,result_types:this.result_types});else if(e.hasOwnProperty("steady"))console.log("engine:",this.engine),console.log("msg.engine:",e.engine),this.search_loop_activate?s(!1):(this.engine=e.engine,this.engines=this.arrayRotate(this.engines,this.get_engine_index()),console.log("Engine order:",this.engines),this.search_loop_activate=!0,this.keyword_iterator=0,this.keyword=this.keywords[this.keyword_iterator],this.search_tab_id=t.tab.id,this.start_search_loop(),s(!0));else if(e.hasOwnProperty("clear_browser"))this.clear_browser(),s(!0);else if(e.hasOwnProperty("set_iter_step")){e.step in this.step_iterators?this.step_iterators[e.step]+=1:this.step_iterators[e.step]=0;let t=this.step_iterators[e.step];console.log("set_iter_step",e.step,t),s({iterator:t})}else if(e.hasOwnProperty("get_iter_step")){let t=this.step_iterators[e.step];console.log("get_iter_step",e.step,t),s({iterator:t})}else if(e.hasOwnProperty("go_to_base_page")){let e=this.config.getBasePage();console.log("go_to_base_page",e),xbrowser.tabs.update(this.search_tab_id,{url:this.config.getBasePage()}),s({base_page:e})}else if(e.hasOwnProperty("get_current_search"))console.log("get_current_search:",this.engine,this.keyword),s({current_engine:this.engine,current_keyword:this.keyword});else if(e.hasOwnProperty("get_next_engine")){let e=this.get_next_engine();console.log("get_next_engine",e),s({next_engine:e})}else if(e.hasOwnProperty("update_settings"))e.hasOwnProperty("settings")?(console.log("updating settings"),this.set_settings(e.settings),s(!0)):s(!1);else if(e.hasOwnProperty("get_settings"))console.log("getting settings"),s(this.get_settings());else if(e.hasOwnProperty("download_page")){const t=new Blob([e.content],{type:"text/html"}),r={url:URL.createObjectURL(t),filename:this.config.settings.downloads_folder+"/"+this.engine.split("//")[1]+"_"+this.keyword.replace(/[<>:"/\\|?*\x00-\x1F]/gi,"_").replace(/_{2,}/g,"_")+"_"+e.filename_suffix};xbrowser.downloads.download(r,s(!0))}else e.hasOwnProperty("fetch")&&fetch(e.resource,e.options).then((async e=>{const t=e.status,r=[];for(const t of e.headers.entries())r.push(t);const n=Array.from(new Uint8Array(await e.arrayBuffer()));s({status:t,headers:r,array:n})})).catch((e=>{console.warn(e),s({status:404,headers:[],array:[]})}));return this.debug&&console.log("<- _onContentMessage"),!0}start(){return new Promise(((e,t)=>{xbrowser.runtime.onMessage.addListener(this._onContentMessage),xbrowser.runtime.onConnect.addListener(this._onConnectPopup),xbrowser.browserAction.onClicked.addListener((()=>{xbrowser.runtime.openOptionsPage()})),this.getAllTabsIds().then((e=>{for(let t of e)this.tabs[t]=new i})),e()}))}}class c{constructor(e,t){this.config=e,this.debug=!1,this.urllist=t.urllist,this.navlists=t}async reload_config(){try{this.debug&&console.log("***Load Configuration***"),this.debug&&console.log("***Configuration Loaded***")}catch(e){console.log("ERROR IN INIT"),console.error(e)}}async init(){this.debug&&console.log("ExtensionHandler.init()"),await this.reload_config(),this.initialize()}initialize(){return new Promise(((e,t)=>{this.debug&&console.log("-> ExtensionHandler.initialize() - Promise");try{this.extension=new a(this.config,this.navlists),this.extension.start()}catch(e){t(e)}finally{this.debug&&console.log("<- ExtensionHandler.initialize() - Promise"),e()}}))}track_list(){return this.debug&&console.log("-> ExtensionHandler.track_list()"),new Promise(((e,t)=>{this.navigate(),e(!0)}))}navigate(){return new Promise(((e,t)=>{xbrowser.tabs.query({currentWindow:!0,active:!0},function(e){let t=0;xbrowser.tabs.update(e[0].id,{url:s});let s=this.urllist[t];s.startsWith("http")||(s="http://"+s),xbrowser.tabs.update(e[0].id,{url:s}),t+=1,t==this.urllist.length&&clearInterval(r);let r=setInterval(function(){let s=this.urllist[t];s.startsWith("http")||(s="http://"+s),xbrowser.tabs.update(e[0].id,{url:s}),t+=1,t==this.urllist.length&&clearInterval(r)}.bind(this),1e4)}.bind(this))}))}}s(430),s(487);!async function(){const{base_settings:s,restored_settings:r}=function(){let e=null;try{e=JSON.parse(window.localStorage.getItem("extension_settings"))}catch(e){console.warn(e)}return null===e&&(console.warn("Could not restore settings from local storage, using default values."),e={useServer:!1,searchEngines:[{name:"Google",url:"https://google.com",active:!0},{name:"DuckDuckGo",url:"https://duckduckgo.com",active:!0},{name:"Bing",url:"https://bing.com",active:!0},{name:"Yandex",url:"https://yandex.com",active:!1},{name:"Yahoo",url:"https://search.yahoo.com",active:!1},{name:"Baidu",url:"https://baidu.com",active:!1},{name:"So",url:"https://so.com",active:!1},{name:"Sogou",url:"https://sogou.com",active:!1}],resultTypes:[{name:"Text",active:!0},{name:"News",active:!0},{name:"Images",active:!1},{name:"Videos",active:!1}],queryTerms:"Sage Concept Grant, elections",server:"",searchTicksMins:6,clearBrowser:!1,closeInactiveTabs:!1,downloadPages:!1,downloadsFolder:"webbot"}),{base_settings:{server:e.server,search_ticks_mins:e.searchTicksMins,clear_browser:e.clearBrowser,close_inactive_tabs:e.closeInactiveTabs,download_pages:e.downloadPages,downloads_folder:e.downloadsFolder},restored_settings:e}}();console.log("Start",new Date);var n=new e(s.server);window.config=new t(s,n),window.config.clear_browser(),window.addEventListener("unhandledrejection",(e=>{console.warn("UNHANDLED PROMISE REJECTION: ",e.reason,". Have you added the certificates by visiting the server page?")})),window.xbrowser=window.hasOwnProperty("chrome")?chrome:browser,window.settings=s;let o={keywords:[],engines:[],resultTypes:[]};r.useServer?(console.log("Loading engines & keywords from server:",s.server),o.keywords=await config.getQueryTerms(),o.engines=await config.getEngines(),o.resultTypes=await config.getResultTypes()):(console.log("Restoring engines & keywords from localStorage"),o.keywords=r.queryTerms.split(",").map((e=>e.trim())),o.engines=r.searchEngines.filter((({active:e})=>e)).map((({url:e})=>e)),o.resultTypes=r.resultTypes.filter((({active:e})=>e)).map((({name:e})=>e))),window.extensionHandler=new c(config,o),await window.extensionHandler.init()}()})()})();