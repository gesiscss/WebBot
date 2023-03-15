(()=>{"use strict";var e,t={601:(e,t,r)=>{var n=r(294),o=r(745);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}(this,r)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t,r){return(t=p(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}const y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(s,e);var t,r,o,i=c(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),f(u(t=i.call(this,e)),"handleEngineChange",(function(e){var r=e.target.id,n=e.target.checked,o=t.props.searchEngines.map((function(e){var t=e.name,o=e.url,i=e.active;return t.toLowerCase()==r?{name:t,url:o,active:n}:{name:t,url:o,active:i}}));t.props.onEngineChange({searchEngines:o})})),f(u(t),"handleQueryTermsChange",(function(e){t.props.onQueryTermsChange({queryTerms:e.target.value})})),t}return t=s,(r=[{key:"render",value:function(){var e=this;return n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("label",null,"Search Engines")),n.createElement("td",null,this.props.searchEngines.map((function(t){var r=t.name,o=t.active;return n.createElement("div",{className:"box",key:r.toLowerCase()},n.createElement("input",{type:"checkbox",defaultChecked:o,name:r.toLowerCase(),id:r.toLowerCase(),onChange:e.handleEngineChange}),n.createElement("label",{className:"checklabel",htmlFor:r.toLowerCase()},r))})))),n.createElement("tr",null,n.createElement("td",{className:"lastrow"},n.createElement("label",{htmlFor:"queryterms"},"Query Terms"),n.createElement("div",{className:"tooltip","data-title":"Comma-seperated list of terms to query. Each term is queried once by a selected search engine. To query the same term by multiple search engines, repeat the term for each engine."},"?")),n.createElement("td",{className:"lastrow"},n.createElement("textarea",{id:"queryterms",defaultValue:this.props.queryTerms,onChange:this.handleQueryTermsChange,placeholder:"short term, a substainably longer term,..."}))))}}])&&a(t.prototype,r),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(n.Component);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,r)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function w(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,r,o,i=h(a);function a(e){var t,r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e),r=v(t),o=function(e){t.props.onServerChange({server:e.target.value})},(n=w(n="handleServerChange"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}return t=a,(r=[{key:"render",value:function(){return n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{className:"lastrow"},n.createElement("label",{htmlFor:"server"},"Server"),n.createElement("div",{className:"tooltip","data-title":"Server (full URL) to query for search engines and query terms."},"?")),n.createElement("td",{className:"lastrow"},n.createElement("input",{type:"text",defaultValue:this.props.server,onChange:this.handleServerChange,placeholder:"http://example.com:8000/"}))))}}])&&m(t.prototype,r),o&&m(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,T(n.key),n)}}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}(this,r)}}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function T(e){var t=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===E(t)?t:String(t)}const R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,r,o,i=P(a);function a(e){var t,r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e),r=C(t),o=function(e){t.props.onConfigChange({useServer:"server"==e.target.value})},(n=T(n="handleConfigChange"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}return t=a,(r=[{key:"render",value:function(){return n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("label",{htmlFor:"serverSwitch"},"Configuration"),n.createElement("div",{className:"tooltip","data-title":"Switch to Server configuration type to automatically gather lists of search engines and query terms from a server."},"?")),n.createElement("td",null,n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:"serverSwitch",id:"localConfig",value:"local",checked:!this.props.useServer,onChange:this.handleConfigChange}),n.createElement("label",{htmlFor:"localConfig",className:"radiolabel"},"Local")),n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:"serverSwitch",id:"serverConfig",value:"server",checked:this.props.useServer,onChange:this.handleConfigChange}),n.createElement("label",{htmlFor:"serverConfig",className:"radiolabel"},"Server")))))}}])&&S(t.prototype,r),o&&S(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,L(n.key),n)}}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=D(e);if(t){var o=D(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}(this,r)}}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function I(e,t,r){return(t=L(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===k(t)?t:String(t)}const A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,r,o,i=M(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),I(q(t=i.call(this,e)),"handleOptionsChange",(function(e){var r=e.target.name,n="yes"==e.target.value,o=Object.fromEntries(Object.entries(t.props.options).map((function(e){var t=x(e,2),o=t[0],i=t[1],a=(i._,i.value);return o==r?[o,n]:[o,a]})));t.props.onOptionsChange(o)})),I(q(t),"handleFolderChange",(function(e){t.props.onOptionsChange({downloadsFolder:e.target.value})})),t}return t=a,(r=[{key:"render",value:function(){var e=this;return this.props.options,n.createElement("tbody",null,Object.entries(this.props.options).map((function(t){var r=x(t,2),o=r[0],i=r[1],a=i.name,l=i.value;return n.createElement("tr",{key:o},n.createElement("td",null,n.createElement("label",{htmlFor:o},a)),n.createElement("td",null,n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:o,id:o+"_yes",value:"yes",checked:l,onChange:e.handleOptionsChange}),n.createElement("label",{htmlFor:o+"_yes",className:"radiolabel"},"Yes")),n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:o,id:o+"_no",value:"no",checked:!l,onChange:e.handleOptionsChange}),n.createElement("label",{htmlFor:o+"_no",className:"radiolabel"},"No"))))})),this.props.options.downloadPages.value?n.createElement("tr",{key:"downloadsFolder"},n.createElement("td",null,n.createElement("label",{htmlFor:"downloadsFolder"},"Save in"),n.createElement("div",{className:"tooltip","data-title":"Subdirectory of the Downloads folder to save the crawled search results to. Saving directly to the Downloads folder is not possible."},"?")),n.createElement("td",null,n.createElement("input",{type:"text",defaultValue:this.props.downloadsFolder,onChange:this.handleFolderChange,placeholder:"webbot"}))):"")}}])&&F(t.prototype,r),o&&F(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,K(n.key),n)}}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},$(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=H(e);if(t){var o=H(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===Q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}(this,r)}}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}function J(e,t,r){return(t=K(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e){var t=function(e,t){if("object"!==Q(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==Q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===Q(t)?t:String(t)}const W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(a,e);var t,r,o,i=z(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),J(G(e=i.call(this)),"updateSettings",(function(t){e.setState({settings:V(V({},e.state.settings),t)})})),J(G(e),"handleSubmit",(function(){if(e.state.settings.useServer)try{new URL(e.state.settings.server)}catch(t){return void e.setState({updatingMessage:"error"})}e.state.settings.useServer||e.updateSettings({server:""}),new Promise((function(t,r){e.browser.runtime.sendMessage({update_settings:!0,settings:e.state.settings},(function(r){e.browser.runtime.lastError||!r?e.setState({updatingMessage:"error"}):e.setState({updatingMessage:"success"}),t(r)}))}))})),J(G(e),"Message",(function(t){var r=t.color,o=t.children;return(0,n.useEffect)((function(){setTimeout((function(){e.setState({updatingMessage:null})}),1e3)})),n.createElement("div",{style:{float:"right",color:r}},o)})),e.browser=window.hasOwnProperty("chrome")?chrome:browser,e.state={updatingMessage:null,settings:{useServer:!1,searchEngines:[],queryTerms:"",server:"",searchTicksMins:6,clearBrowser:!1,closeInactiveTabs:!1,downloadPages:!1,downloadsFolder:""}},e}return t=a,(r=[{key:"componentDidMount",value:function(){var e=this;new Promise((function(t,r){e.browser.runtime.sendMessage({get_settings:!0},(function(r){e.browser.runtime.lastError?console.log("error getting settings"):e.setState({settings:r}),t(r)}))}))}},{key:"render",value:function(){var e=this.state.settings,t=this.Message,r={clearBrowser:{name:"Clear Browser Data",value:e.clearBrowser},closeInactiveTabs:{name:"Close Inactive Tabs",value:e.closeInactiveTabs},downloadPages:{name:"Save Pages",value:e.downloadPages}};return n.createElement("form",{onSubmit:this.handleSubmit},n.createElement("table",null,n.createElement(A,{options:r,downloadsFolder:e.downloadsFolder,onOptionsChange:this.updateSettings}),n.createElement(R,{useServer:e.useServer,onConfigChange:this.updateSettings}),e.useServer?n.createElement(O,{server:e.server,onServerChange:this.updateSettings}):n.createElement(y,{searchEngines:e.searchEngines,queryTerms:e.queryTerms,onEngineChange:this.updateSettings,onQueryTermsChange:this.updateSettings})),n.createElement("input",{type:"button",value:"Update Settings",onClick:this.handleSubmit}),"success"==this.state.updatingMessage?n.createElement(t,{color:"darkgreen"},"Settings Updated"):null,"error"==this.state.updatingMessage?n.createElement(t,{color:"darkred"},"Error while updating"):null)}}])&&Y(t.prototype,r),o&&Y(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);o.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(W,null)))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],l=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var s=c(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkwebbot_extension_client=self.webpackChunkwebbot_extension_client||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[745],(()=>n(601)));o=n.O(o)})();