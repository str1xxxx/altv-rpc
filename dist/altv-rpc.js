'use strict';Object.defineProperty(exports,"__esModule",{value:!0});function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e["default"]:e}var Reflect$1,alt=_interopDefault(require("alt"));(function(e){(function(t){function n(e,t){return function(n,r){"function"!=typeof e[n]&&Object.defineProperty(e,n,{configurable:!0,writable:!0,value:r}),t&&t(n,r)}}var r="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=n(e);"undefined"==typeof r.Reflect?r.Reflect=e:o=n(r.Reflect,o),t(o)})(function(e){function t(e,t){for(var n=e.length-1;0<=n;--n){var r=e[n],o=r(t);if(!g(o)&&!u(o)){if(!E(o))throw new TypeError;t=o}}return t}function n(e,t,n,r){for(var o=e.length-1;0<=o;--o){var a=e[o],l=a(t,n,r);if(!g(l)&&!u(l)){if(!f(l))throw new TypeError;r=l}}return r}function r(e,t,n){var r=F.get(e);if(g(r)){if(!n)return;r=new L,F.set(e,r)}var o=r.get(t);if(g(o)){if(!n)return;o=new L,r.set(t,o)}return o}function o(e,t,n){var r=a(e,t,n);if(r)return!0;var i=B(t);return!u(i)&&o(e,i,n)}function a(e,t,n){var o=r(t,n,!1);return!g(o)&&h(o.has(e))}function i(e,t,n){var r=a(e,t,n);if(r)return l(e,t,n);var o=B(t);return u(o)?void 0:i(e,o,n)}function l(e,t,n){var o=r(t,n,!1);return g(o)?void 0:o.get(e)}function s(e,t,n,o){var a=r(n,o,!0);a.set(e,t)}function d(e,t){var n=c(e,t),r=B(e);if(null===r)return n;var o=d(r,t);if(0>=o.length)return n;if(0>=n.length)return o;for(var a=new W,i=[],l=0,s=n;l<s.length;l++){var p=s[l],g=a.has(p);g||(a.add(p),i.push(p))}for(var u=0,y=o;u<y.length;u++){var p=y[u],g=a.has(p);g||(a.add(p),i.push(p))}return i}function c(e,t){var n=[],o=r(e,t,!1);if(g(o))return n;for(var a=o.keys(),i=w(a),l=0;;){var s=P(i);if(!s)return n.length=l,n;var d=O(s);try{n[l]=d}catch(t){try{j(i)}finally{throw t}}l++}}function p(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6;}}function g(e){return e===void 0}function u(e){return null===e}function y(e){return"symbol"==typeof e}function f(e){return"object"==typeof e?null!==e:"function"==typeof e}function _(e,t){switch(p(e)){case 0:return e;case 1:return e;case 2:return e;case 3:return e;case 4:return e;case 5:return e;}var n=3===t?"string":5===t?"number":"default",r=k(e,U);if(r!==void 0){var o=r.call(e,n);if(f(o))throw new TypeError;return o}return m(e,"default"==n?"number":n)}function m(e,t){if("string"===t){var n=e.toString;if(b(n)){var r=n.call(e);if(!f(r))return r}var o=e.valueOf;if(b(o)){var r=o.call(e);if(!f(r))return r}}else{var o=e.valueOf;if(b(o)){var r=o.call(e);if(!f(r))return r}var a=e.toString;if(b(a)){var r=a.call(e);if(!f(r))return r}}throw new TypeError}function h(e){return!!e}function v(e){return""+e}function R(e){var t=_(e,3);return y(t)?t:v(t)}function S(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function b(e){return"function"==typeof e}function E(e){return"function"==typeof e}function x(e){switch(p(e)){case 3:return!0;case 4:return!0;default:return!1;}}function k(e,t){var n=e[t];if(void 0!==n&&null!==n){if(!b(n))throw new TypeError;return n}}function w(e){var t=k(e,I);if(!b(t))throw new TypeError;var n=t.call(e);if(!f(n))throw new TypeError;return n}function O(e){return e.value}function P(e){var t=e.next();return!t.done&&t}function j(e){var t=e["return"];t&&t.call(e)}function B(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===Q)return t;if(t!==Q)return t;var n=e.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return t;var o=r.constructor;return"function"==typeof o?o===e?t:o:t}function C(e){return e.__=void 0,delete e.__,e}var M=Object.prototype.hasOwnProperty,T="function"==typeof Symbol,U=T&&"undefined"!=typeof Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",I=T&&"undefined"!=typeof Symbol.iterator?Symbol.iterator:"@@iterator",N="function"==typeof Object.create,A={__proto__:[]}instanceof Array,K=!N&&!A,V={create:N?function(){return C(Object.create(null))}:A?function(){return C({__proto__:null})}:function(){return C({})},has:K?function(e,t){return M.call(e,t)}:function(e,t){return t in e},get:K?function(e,t){return M.call(e,t)?e[t]:void 0}:function(e,t){return e[t]}},Q=Object.getPrototypeOf(Function),z="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,L=z||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){function e(e){return e}function t(e,t){return t}function n(e,t){return[e,t]}var r={},o=[],a=function(){function e(e,t,n){this._index=0,this._keys=e,this._values=t,this._selector=n}return e.prototype["@@iterator"]=function(){return this},e.prototype[I]=function(){return this},e.prototype.next=function(){var e=this._index;if(0<=e&&e<this._keys.length){var t=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=o,this._values=o):this._index++,{value:t,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw 0<=this._index&&(this._index=-1,this._keys=o,this._values=o),e},e.prototype.return=function(e){return 0<=this._index&&(this._index=-1,this._keys=o,this._values=o),{value:e,done:!0}},e}();return function(){function o(){this._keys=[],this._values=[],this._cacheKey=r,this._cacheIndex=-2}return Object.defineProperty(o.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),o.prototype.has=function(e){return 0<=this._find(e,!1)},o.prototype.get=function(e){var t=this._find(e,!1);return 0<=t?this._values[t]:void 0},o.prototype.set=function(e,t){var n=this._find(e,!0);return this._values[n]=t,this},o.prototype.delete=function(e){var t=this._find(e,!1);if(0<=t){for(var n=this._keys.length,o=t+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=r,this._cacheIndex=-2),!0}return!1},o.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=r,this._cacheIndex=-2},o.prototype.keys=function(){return new a(this._keys,this._values,e)},o.prototype.values=function(){return new a(this._keys,this._values,t)},o.prototype.entries=function(){return new a(this._keys,this._values,n)},o.prototype["@@iterator"]=function(){return this.entries()},o.prototype[I]=function(){return this.entries()},o.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),0>this._cacheIndex&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},o}()}():Map,W=z||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){return function(){function e(){this._map=new L}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[I]=function(){return this.keys()},e}()}():Set,D=z||"function"!=typeof WeakMap?function(){function e(){var e;do e="@@WeakMap@@"+o();while(V.has(a,e));return a[e]=!0,e}function t(e,t){if(!M.call(e,i)){if(!t)return;Object.defineProperty(e,i,{value:V.create()})}return e[i]}function n(e,t){for(var n=0;n<t;++n)e[n]=0|255*Math.random();return e}function r(e){return"function"==typeof Uint8Array?"undefined"==typeof crypto?"undefined"==typeof msCrypto?n(new Uint8Array(e),e):msCrypto.getRandomValues(new Uint8Array(e)):crypto.getRandomValues(new Uint8Array(e)):n(Array(e),e)}function o(){var e=r(16);e[6]=64|79&e[6],e[8]=128|191&e[8];for(var t,n="",o=0;o<16;++o)t=e[o],(4==o||6===o||8===o)&&(n+="-"),16>t&&(n+="0"),n+=t.toString(16).toLowerCase();return n}var a=V.create(),i=e();return function(){function n(){this._key=e()}return n.prototype.has=function(e){var n=t(e,!1);return void 0!==n&&V.has(n,this._key)},n.prototype.get=function(e){var n=t(e,!1);return void 0===n?void 0:V.get(n,this._key)},n.prototype.set=function(e,n){var r=t(e,!0);return r[this._key]=n,this},n.prototype.delete=function(e){var n=t(e,!1);return void 0!==n&&delete n[this._key]},n.prototype.clear=function(){this._key=e()},n}()}():WeakMap,F=new D;e("decorate",function(e,r,o,a){if(!g(o)){if(!S(e))throw new TypeError;if(!f(r))throw new TypeError;if(!f(a)&&!g(a)&&!u(a))throw new TypeError;return u(a)&&(a=void 0),o=R(o),n(e,r,o,a)}if(!S(e))throw new TypeError;if(!E(r))throw new TypeError;return t(e,r)}),e("metadata",function(e,t){return function(n,r){if(!f(n))throw new TypeError;if(!g(r)&&!x(r))throw new TypeError;s(e,t,n,r)}}),e("defineMetadata",function(e,t,n,r){if(!f(n))throw new TypeError;return g(r)||(r=R(r)),s(e,t,n,r)}),e("hasMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),o(e,t,n)}),e("hasOwnMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),a(e,t,n)}),e("getMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),i(e,t,n)}),e("getOwnMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),l(e,t,n)}),e("getMetadataKeys",function(e,t){if(!f(e))throw new TypeError;return g(t)||(t=R(t)),d(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!f(e))throw new TypeError;return g(t)||(t=R(t)),c(e,t)}),e("deleteMetadata",function(e,t,n){if(!f(t))throw new TypeError;g(n)||(n=R(n));var o=r(t,n,!1);if(g(o))return!1;if(!o.delete(e))return!1;if(0<o.size)return!0;var a=F.get(t);return!(a.delete(n),!(0<a.size))||(F.delete(t),!0)})})})(Reflect$1||(Reflect$1={}));const glob=getGlobal(),setTimeout=alt.setTimeout||glob.setTimeout;function uid(){const e=0|46656*Math.random(),t=0|46656*Math.random(),n=("000"+e.toString(36)).slice(-3),r=("000"+t.toString(36)).slice(-3);return n+r}function getEnvironment(){if(!alt.Player)return"cef";return alt.Player.local?"client":alt.Player?"server":void 0}function stringifyData(e){const t=getEnvironment();return JSON.stringify(e,(e,n)=>("client"===t||"server"===t)&&n instanceof alt.Entity?{__i:n.id}:n)}function parseData(t){const n=getEnvironment();try{return JSON.parse(t,(e,t)=>("client"===n||"server"===n)&&t&&"object"==typeof t&&"number"==typeof t.__i&&1===Object.keys(t).length?alt.BaseObject.getById(t.__i):t)}catch(n){log(`Failed to parse event arguments: ${n.message}`,!0),log(t,!0)}}function promiseTimeout(e,t){return"number"==typeof t?Promise.race([new Promise((e,n)=>{setTimeout(()=>n("TIMEOUT"),t)}),e]):e}function getGlobal(){if("undefined"!=typeof global)return global;return"undefined"==typeof window?void 0:window}function requestNamespace(e){const t="__rpc:namespaces",n=(e,t)=>{if(!e.includes(t))return e.push(t),!0};if(glob){const r=glob[t]||[];if(!n(r,e))return!1;glob[t]=r}else{const r=alt.Player.local;if(r){const o=r.getMeta(t),a=o?JSON.parse(o):[];if(!n(a,e))return!1;r.setMeta(t,JSON.stringify(a))}}return!0}function log(e,t=!1){const n=getEnvironment();(t||!1)&&(alt.log||console.log)(`RPC (${n}): ${e}`)}function chunk(e){return e.match(/.{1,10000}/g)}const environment=getEnvironment();if(!environment)throw"Unknown alt:V environment";const ERR_NOT_FOUND="EVENT NOT FOUND",PROCESS_EVENT="__rpc:process",BROWSER_REGISTER="__rpc:browserRegister",TRIGGER_EVENT="__rpc:triggerEvent",TRIGGER_EVENT_BROWSERS="__rpc:triggerEventBrowsers";var EventType;(function(e){e[e.REQUEST=0]="REQUEST",e[e.RESPONSE_SUCCESS=1]="RESPONSE_SUCCESS",e[e.RESPONSE_ERROR=2]="RESPONSE_ERROR"})(EventType||(EventType={}));const rpcListeners={},rpcPending={},rpcIncoming={},rpcEvListeners={},rpcBrowsers=[],rpcBrowserProcedures={},registeredProcedures=new Map;let rpcNamespace="";function init(e){if(rpcNamespace)throw"Already initialized.";if(!e)throw"Must specify a namespace.";if(!requestNamespace(e))throw`Namespace "${e}" is already in use.`;log(`Initialized with namespace "${e}"`),rpcNamespace=e;const t=getEventName(PROCESS_EVENT),n=getEventName(TRIGGER_EVENT);alt.on(t,processEvent),"server"===environment&&alt.onClient(t,(e,t)=>processEvent(t,e)),"client"===environment&&(alt.onServer(t,processEvent),register("__rpc:callServer",([e,t,n],r)=>_callServer(e,t,{fenv:r.environment,noRet:n})),register("__rpc:callBrowsers",([e,t,n],r)=>_callBrowsers(null,e,t,{fenv:r.environment,noRet:n})),register(getEventName(TRIGGER_EVENT_BROWSERS),([e,t],r)=>{rpcBrowsers.forEach(o=>{_callBrowser(o,n,[e,t],{fenv:r.environment,noRet:1})})})),register(n,([e,t],n)=>callEvent(e,t,n))}function getEventName(e){return`${e}::${rpcNamespace}`}function requireNamespace(){if(!rpcNamespace)throw new Error(`You must first call rpc.init() with a namespace.`)}function processEvent(e,t,n){log(`Processing Event: ${e.id} (${e.part}/${e.total})${t?" from player":""}${n?" from cef":""}`);const r=rpcIncoming[e.id]||{recv:0,total:e.total};if("undefined"!=typeof e.args&&(!r.args&&(r.args=""),r.args+=e.args),r.recv++,rpcIncoming[e.id]=r,r.recv<r.total)return;delete rpcIncoming[e.id],log(`Stringified Args: ${r.args}`);const o="undefined"==typeof r.args?void 0:parseData(r.args),a=getEventName(PROCESS_EVENT);if(e.type===EventType.REQUEST){const r={id:e.id,environment:e.fenv||e.env,player:t};let i,l=!0;switch(environment){case"server":i=e=>alt.emitClient(t,a,e);break;case"client":{"server"===e.env?i=e=>alt.emitServer(a,e):"cef"===e.env&&(r.browser=n,i=e=>n&&n.valid&&n.emit(a,e));break}case"cef":i=e=>alt.emit(PROCESS_EVENT,e),l=!1;}if(i){const t=callProcedure(e.name,o,r);if(!e.noRet){let n,r=EventType.RESPONSE_SUCCESS;t.then(e=>{n=e}).catch(e=>{r=EventType.RESPONSE_ERROR,n=e}).finally(()=>{sendEvent({type:r,id:e.id,env:environment},n,i,l)})}}}else{const n=rpcPending[e.id];if("server"===environment&&n.player!==t)return;n&&(n.resolve(e.type===EventType.RESPONSE_SUCCESS?o:Promise.reject(o)),delete rpcPending[e.id])}}async function callProcedure(e,t,n){const r=rpcListeners[e];if(!r)throw`${ERR_NOT_FOUND} (${e})`;return r(t,n)}function sendEvent(e,t,n,r=!0){const o=(t,r,o)=>n({...e,part:t,total:r,args:o});if("undefined"!=typeof t){const e=stringifyData(t),n=r?chunk(e):[e];n.forEach((e,t)=>{o(t+1,n.length,e)})}else o(1,1)}function addWebView(e){if(requireNamespace(),"client"!==environment)throw"addWebView can only be used on the client";rpcBrowsers.includes(e)||(e.on(PROCESS_EVENT,t=>processEvent(t,void 0,e)),e.on(BROWSER_REGISTER,t=>{rpcBrowserProcedures[t]=e}),rpcBrowsers.push(e))}function register(e,t){if(2!==arguments.length)throw"register expects 2 arguments: \"name\" and \"cb\"";log(`Registered procedure "${e}"`),"cef"===environment&&alt.emit(BROWSER_REGISTER,e),rpcListeners[e]=t}function unregister(e){if(1!==arguments.length)throw"unregister expects 1 argument: \"name\"";rpcListeners[e]=void 0}function call(e,t,n={}){return 1>arguments.length||3<arguments.length?Promise.reject("call expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\""):promiseTimeout(callProcedure(e,t,{environment}),n.timeout)}function _callServer(e,t,n={}){switch(requireNamespace(),environment){case"server":return call(e,t);case"client":{const r=uid();return new Promise(o=>{n.noRet||(rpcPending[r]={resolve:o}),sendEvent({type:EventType.REQUEST,id:r,name:e,env:environment,...n},t,e=>alt.emitServer(getEventName(PROCESS_EVENT),e))})}case"cef":return callClient("__rpc:callServer",[e,t,+n.noRet]);}}function callServer(e,t,n={}){if(requireNamespace(),1>arguments.length||3<arguments.length)return Promise.reject("callServer expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");let r={};return n.noRet&&(r.noRet=1),promiseTimeout(_callServer(e,t,r),n.timeout)}function _callClient(e,t,n,r={}){switch(requireNamespace(),environment){case"client":return call(t,n);case"server":{const o=uid();return new Promise(a=>{r.noRet||(rpcPending[o]={resolve:a,player:e}),sendEvent({type:EventType.REQUEST,id:o,name:t,env:environment,...r},n,t=>alt.emitClient(e,getEventName(PROCESS_EVENT),t))})}case"cef":{const e=uid();return new Promise(o=>{r.noRet||(rpcPending[e]={resolve:o}),sendEvent({type:EventType.REQUEST,id:e,name:t,env:environment,...r},n,e=>alt.emit(PROCESS_EVENT,e),!1)})}}}function callClient(e,t,n,r={}){switch(requireNamespace(),environment){case"client":{if(r=n||{},n=t,t=e,e=null,1>arguments.length||3<arguments.length||"string"!=typeof t)return Promise.reject("callClient from the client expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");break}case"server":{if(2>arguments.length||4<arguments.length||"object"!=typeof e)return Promise.reject("callClient from the server expects 2 to 4 arguments: \"player\", \"name\", optional \"args\", and optional \"options\"");break}case"cef":{if(r=n||{},n=t,t=e,e=null,1>arguments.length||3<arguments.length||"string"!=typeof t)return Promise.reject("callClient from the browser expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");break}}let o={};return r.noRet&&(o.noRet=1),promiseTimeout(_callClient(e,t,n,o),r.timeout)}function _callBrowser(e,t,n,r={}){return e&&e.valid?(requireNamespace(),new Promise(o=>{const a=uid();r.noRet||(rpcPending[a]={resolve:o}),sendEvent({type:EventType.REQUEST,id:a,name:t,env:environment,...r},n,t=>e.emit(getEventName(PROCESS_EVENT),t),!1)})):Promise.reject("INVALID_BROWSER")}function _callBrowsers(e,t,n,r={}){switch(requireNamespace(),environment){case"client":const o=rpcBrowserProcedures[t];return o&&o.valid?_callBrowser(o,t,n,r):Promise.reject(`${ERR_NOT_FOUND} (${t})`);case"server":return _callClient(e,"__rpc:callBrowsers",[t,n,+r.noRet],r);case"cef":return _callClient(null,"__rpc:callBrowsers",[t,n,+r.noRet],r);}}function callBrowsers(e,t,n,r={}){requireNamespace();let o,a={};switch(environment){case"client":case"cef":if(r=n||{},n=t,t=e,1>arguments.length||3<arguments.length)return Promise.reject("callBrowsers from the client or browser expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");r.noRet&&(a.noRet=1),o=_callBrowsers(null,t,n,a);break;case"server":if(2>arguments.length||4<arguments.length)return Promise.reject("callBrowsers from the server expects 2 to 4 arguments: \"player\", \"name\", optional \"args\", and optional \"options\"");r.noRet&&(a.noRet=1),o=_callBrowsers(e,t,n,a);}if(o)return promiseTimeout(o,r.timeout)}function callBrowser(e,t,n,r={}){if("client"!==environment)return Promise.reject("callBrowser can only be used in the client environment");if(2>arguments.length||4<arguments.length)return Promise.reject("callBrowser expects 2 to 4 arguments: \"browser\", \"name\", optional \"args\", and optional \"options\"");requireNamespace();let o={};return r.noRet&&(o.noRet=1),promiseTimeout(_callBrowser(e,t,n,o),r.timeout)}function callEvent(e,t,n){const r=rpcEvListeners[e];r&&r.forEach(e=>e(t,n))}function on(e,t){if(2!==arguments.length)throw"on expects 2 arguments: \"name\" and \"cb\"";const n=rpcEvListeners[e]||new Set;n.add(t),rpcEvListeners[e]=n}function off(e,t){if(2!==arguments.length)throw"off expects 2 arguments: \"name\" and \"cb\"";const n=rpcEvListeners[e];n&&n.delete(t)}function trigger(e,t){if(1>arguments.length||2<arguments.length)throw"trigger expects 1 or 2 arguments: \"name\", and optional \"args\"";callEvent(e,t,{environment})}function triggerClient(e,t,n){switch(requireNamespace(),environment){case"client":{if(n=t,t=e,e=null,1>arguments.length||2<arguments.length||"string"!=typeof t)throw"triggerClient from the client expects 1 or 2 arguments: \"name\", and optional \"args\"";break}case"server":{if(2>arguments.length||3<arguments.length||"object"!=typeof e)throw"triggerClient from the server expects 2 or 3 arguments: \"player\", \"name\", and optional \"args\"";break}case"cef":{if(n=t,t=e,e=null,1>arguments.length||2<arguments.length||"string"!=typeof t)throw"triggerClient from the browser expects 1 or 2 arguments: \"name\", and optional \"args\"";break}}_callClient(e,getEventName(TRIGGER_EVENT),[t,n],{noRet:1})}function triggerServer(e,t){if(1>arguments.length||2<arguments.length)throw"triggerServer expects 1 or 2 arguments: \"name\", and optional \"args\"";requireNamespace(),_callServer(getEventName(TRIGGER_EVENT),[e,t],{noRet:1})}function triggerBrowsers(e,t,n){switch(environment){case"client":case"cef":if(n=t,t=e,e=null,1>arguments.length||2<arguments.length)throw"triggerBrowsers from the client or browser expects 1 or 2 arguments: \"name\", and optional \"args\"";break;case"server":if(2>arguments.length||3<arguments.length)throw"triggerBrowsers from the server expects 2 or 3 arguments: \"player\", \"name\", and optional \"args\"";}requireNamespace(),_callClient(e,getEventName(TRIGGER_EVENT_BROWSERS),[t,n],{noRet:1})}function triggerBrowser(e,t,n){if("client"!==environment)throw"callBrowser can only be used in the client environment";if(2>arguments.length||4<arguments.length)throw"callBrowser expects 2 or 3 arguments: \"browser\", \"name\", and optional \"args\"";requireNamespace(),_callBrowser(e,getEventName(TRIGGER_EVENT),[t,n],{noRet:1})}const procedurable=()=>function(e){return class extends e{constructor(...t){if(super(...t),!Reflect.getMetadata("design:procedurelist:init",e.prototype)){const t=Reflect.getMetadata("design:procedurelist",e.prototype)||[];t.forEach((e,t)=>{e=e.map(e=>{const{procedure:n,callable:r}=e,o=this[r].bind(this);if("function"!=typeof this[r])throw new Error(`Event[${t}] in ${this.constructor.name} is not callable!`);return n.forEach(e=>register(e,o)),e.func=o,e});const n=registeredProcedures.get(t)||[];registeredProcedures.set(t,[...n,...e])}),Reflect.defineMetadata("design:procedurelist:init",!0,e.prototype)}}}},procedure=e=>{e=Array.isArray(e)?e:[e];const t=e.filter((t,n)=>e.indexOf(t)===n),n={procedure:t,callable:""},r=t[0];return function(e,t,o){if(!(o.value instanceof Function))throw new Error(`Procedure[${r}] must be callable`);const a=Reflect.getMetadata("design:procedurelist",e)||new Map;n.callable=t.toString();const i=a.get(r);return a.set(r,i&&[...i,n]||[n]),Reflect.defineMetadata("design:procedurelist",a,e),o}};var index={init,addWebView,register,unregister,call,callServer,callClient,callBrowsers,callBrowser,on,off,trigger,triggerServer,triggerClient,triggerBrowsers,triggerBrowser,procedurable,procedure};exports.addWebView=addWebView,exports.call=call,exports.callBrowser=callBrowser,exports.callBrowsers=callBrowsers,exports.callClient=callClient,exports.callServer=callServer,exports.default=index,exports.init=init,exports.off=off,exports.on=on,exports.procedurable=procedurable,exports.procedure=procedure,exports.register=register,exports.trigger=trigger,exports.triggerBrowser=triggerBrowser,exports.triggerBrowsers=triggerBrowsers,exports.triggerClient=triggerClient,exports.triggerServer=triggerServer,exports.unregister=unregister;
