(()=>{"use strict";var e,t={2601:(e,t,r)=>{var n=r(7294),o=r(745);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(l,e);var t,r,o,i=u(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),p(s(t=i.call(this,e)),"handleEngineChange",(function(e){var r=e.target.id,n=e.target.checked,o=t.props.searchEngines.map((function(e){var t=e.name,o=e.url,i=e.active;return t.toLowerCase()==r?{name:t,url:o,active:n}:{name:t,url:o,active:i}}));t.props.onEngineChange({searchEngines:o})})),p(s(t),"handleQueryTermsChange",(function(e){t.props.onQueryTermsChange({queryTerms:e.target.value})})),t}return t=l,(r=[{key:"render",value:function(){var e=this;return n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("label",null,"Search Engines")),n.createElement("td",null,this.props.searchEngines.map((function(t){var r=t.name,o=t.active;return n.createElement("div",{className:"box",key:r.toLowerCase()},n.createElement("input",{type:"checkbox",defaultChecked:o,name:r.toLowerCase(),id:r.toLowerCase(),onChange:e.handleEngineChange}),n.createElement("label",{className:"checklabel",htmlFor:r.toLowerCase()},r))})))),n.createElement("tr",null,n.createElement("td",{className:"lastrow"},n.createElement("label",{htmlFor:"queryterms"},"Query Terms")),n.createElement("td",{className:"lastrow"},n.createElement("textarea",{id:"queryterms",defaultValue:this.props.queryTerms,onChange:this.handleQueryTermsChange,placeholder:"short term, a substainably longer term,..."}))))}}])&&a(t.prototype,r),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),l}(n.Component);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}const w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,r,o,i=d(a);function a(e){var t,r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e),r=g(t),o=function(e){t.props.onServerChange({server:e.target.value})},(n="handleServerChange")in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}return t=a,(r=[{key:"render",value:function(){return n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{className:"lastrow"},n.createElement("label",{htmlFor:"server"},"Server")),n.createElement("td",{className:"lastrow"},n.createElement("input",{type:"text",defaultValue:this.props.server,onChange:this.handleServerChange,placeholder:"http://example.com/"}))))}}])&&h(t.prototype,r),o&&h(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=T(e);if(t){var o=T(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return C(this,r)}}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}const R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,r,o,i=P(a);function a(e){var t,r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e),r=_(t),o=function(e){t.props.onConfigChange({useServer:"server"==e.target.value})},(n="handleConfigChange")in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}return t=a,(r=[{key:"render",value:function(){return n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("label",{htmlFor:"serverSwitch"},"Configuration")),n.createElement("td",null,n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:"serverSwitch",id:"localConfig",value:"local",checked:!this.props.useServer,onChange:this.handleConfigChange}),n.createElement("label",{htmlFor:"localConfig",className:"radiolabel"},"Local")),n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:"serverSwitch",id:"serverConfig",value:"server",checked:this.props.useServer,onChange:this.handleConfigChange}),n.createElement("label",{htmlFor:"serverConfig",className:"radiolabel"},"Server")))))}}])&&j(t.prototype,r),o&&j(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},N(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=q(e);if(t){var o=q(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return F(this,r)}}function F(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}const L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,r,o,i=D(a);function a(e){var t,r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e),r=I(t),o=function(e){var r=e.target.name,n="yes"==e.target.value,o=Object.fromEntries(Object.entries(t.props.options).map((function(e){var t=x(e,2),o=t[0],i=t[1],a=(i._,i.value);return o==r?[o,n]:[o,a]})));t.props.onOptionsChange(o)},(n="handleOptionsChange")in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}return t=a,(r=[{key:"render",value:function(){var e=this;return this.props.options,n.createElement("tbody",null,Object.entries(this.props.options).map((function(t){var r=x(t,2),o=r[0],i=r[1],a=i.name,c=i.value;return n.createElement("tr",{key:o},n.createElement("td",null,n.createElement("label",{htmlFor:o},a)),n.createElement("td",null,n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:o,id:o+"_yes",value:"yes",checked:c,onChange:e.handleOptionsChange}),n.createElement("label",{htmlFor:o+"_yes",className:"radiolabel"},"Yes")),n.createElement("div",{className:"box"},n.createElement("input",{type:"radio",name:o,id:o+"_no",value:"no",checked:!c,onChange:e.handleOptionsChange}),n.createElement("label",{htmlFor:o+"_no",className:"radiolabel"},"No"))))})))}}])&&M(t.prototype,r),o&&M(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Y(e,t){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Y(e,t)}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=H(e);if(t){var o=H(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return z(this,r)}}function z(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return G(e)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}(a,e);var t,r,o,i=$(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),J(G(e=i.call(this)),"updateSettings",(function(t){e.setState({settings:U(U({},e.state.settings),t)})})),J(G(e),"handleSubmit",(function(){if(e.state.settings.useServer)try{new URL(e.state.settings.server)}catch(t){return void e.setState({updatingMessage:"error"})}e.state.settings.useServer||e.updateSettings({server:""}),new Promise((function(t,r){e.browser.runtime.sendMessage({update_settings:!0,settings:e.state.settings},(function(r){e.browser.runtime.lastError||!r?e.setState({updatingMessage:"error"}):e.setState({updatingMessage:"success"}),t(r)}))}))})),J(G(e),"Message",(function(t){var r=t.color,o=t.children;return(0,n.useEffect)((function(){setTimeout((function(){e.setState({updatingMessage:null})}),1e3)})),n.createElement("div",{style:{float:"right",color:r}},o)})),e.browser=window.hasOwnProperty("chrome")?chrome:browser,e.state={updatingMessage:null,settings:{useServer:!1,searchEngines:[],queryTerms:"",server:"",searchTicksMins:5,clearBrowser:!1,closeInactiveTabs:!1,download:!1}},e}return t=a,(r=[{key:"componentDidMount",value:function(){var e=this;new Promise((function(t,r){e.browser.runtime.sendMessage({get_settings:!0},(function(r){e.browser.runtime.lastError?console.log("error getting settings"):e.setState({settings:r}),t(r)}))}))}},{key:"render",value:function(){var e=this.state.settings,t=this.Message,r={clearBrowser:{name:"Clear Browser Data",value:e.clearBrowser},closeInactiveTabs:{name:"Close Inactive Tabs",value:e.closeInactiveTabs},download:{name:"Save Pages",value:e.download}};return n.createElement("form",{onSubmit:this.handleSubmit},n.createElement("table",null,n.createElement(L,{options:r,onOptionsChange:this.updateSettings}),n.createElement(R,{useServer:e.useServer,onConfigChange:this.updateSettings}),e.useServer?n.createElement(w,{server:e.server,onServerChange:this.updateSettings}):n.createElement(y,{searchEngines:e.searchEngines,queryTerms:e.queryTerms,onEngineChange:this.updateSettings,onQueryTermsChange:this.updateSettings})),n.createElement("input",{type:"button",value:"Update Settings",onClick:this.handleSubmit}),"success"==this.state.updatingMessage?n.createElement(t,{color:"darkgreen"},"Settings Updated"):null,"error"==this.state.updatingMessage?n.createElement(t,{color:"darkred"},"Error while updating"):null)}}])&&V(t.prototype,r),o&&V(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(n.Component);o.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(K,null)))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,o,i]=e[s],c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,c,u]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self.webpackChunkwebbot_extension_client=self.webpackChunkwebbot_extension_client||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[273],(()=>n(6124)));var o=n.O(void 0,[273],(()=>n(2601)));o=n.O(o)})();