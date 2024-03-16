(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e=e||self,t(e.rpc={}))})(this,function(e){'use strict';function t(){const e=0|46656*Math.random(),t=0|46656*Math.random(),n=("000"+e.toString(36)).slice(-3),r=("000"+t.toString(36)).slice(-3);return n+r}function n(){if(!alt.Player)return"cef";return alt.Player.local?"client":alt.Player?"server":void 0}function r(e){const t=n();return JSON.stringify(e,(e,n)=>("client"===t||"server"===t)&&n instanceof alt.Entity?{__i:n.id}:n)}function o(t){const r=n();try{return JSON.parse(t,(e,t)=>("client"===r||"server"===r)&&t&&"object"==typeof t&&"number"==typeof t.__i&&1===Object.keys(t).length?alt.Entity.getByRemoteID(t.__i):t)}catch(n){l(`Failed to parse event arguments: ${n.message}`,!0),l(t,!0)}}function a(e,t){return"number"==typeof t?Promise.race([new Promise((e,n)=>{A(()=>n("TIMEOUT"),t)}),e]):e}function i(e){const t="__rpc:namespaces",n=(e,t)=>{if(!e.includes(t))return e.push(t),!0};if(N){const r=N[t]||[];if(!n(r,e))return!1;N[t]=r}else{const r=alt.Player.local;if(r){const o=r.getMeta(t),a=o?JSON.parse(o):[];if(!n(a,e))return!1;r.setMeta(t,JSON.stringify(a))}}return!0}function l(e,t=!1){const r=n();(t||!1)&&(alt.log||console.log)(`RPC (${r}): ${e}`)}function s(e){return e.match(/.{1,10000}/g)}function d(e){if(Z)throw"Already initialized.";if(!e)throw"Must specify a namespace.";if(!i(e))throw`Namespace "${e}" is already in use.`;l(`Initialized with namespace "${e}"`),Z=e;const t=c(Q),n=c(L);alt.on(t,g),"server"===K&&alt.onClient(t,(e,t)=>g(t,e)),"client"===K&&(alt.onServer(t,g),_("__rpc:callServer",([e,t,n],r)=>v(e,t,{fenv:r.environment,noRet:n})),_("__rpc:callBrowsers",([e,t,n],r)=>x(null,e,t,{fenv:r.environment,noRet:n})),_(c(W),([e,t],r)=>{H.forEach(o=>{E(o,n,[e,t],{fenv:r.environment,noRet:1})})})),_(n,([e,t],n)=>O(e,t,n))}function c(e){return`${e}::${Z}`}function p(){if(!Z)throw new Error(`You must first call rpc.init() with a namespace.`)}function g(e,t,n){l(`Processing Event: ${e.id} (${e.part}/${e.total})${t?" from player":""}${n?" from cef":""}`);const r=q[e.id]||{recv:0,total:e.total};if("undefined"!=typeof e.args&&(!r.args&&(r.args=""),r.args+=e.args),r.recv++,q[e.id]=r,r.recv<r.total)return;delete q[e.id],l(`Stringified Args: ${r.args}`);const a="undefined"==typeof r.args?void 0:o(r.args),i=c(Q);if(e.type===D.REQUEST){const r={id:e.id,environment:e.fenv||e.env,player:t};let o,l=!0;switch(K){case"server":o=e=>alt.emitClient(t,i,e);break;case"client":{"server"===e.env?o=e=>alt.emitServer(i,e):"cef"===e.env&&(r.browser=n,o=e=>n&&n.valid&&n.emit(i,e));break}case"cef":o=e=>alt.emit(Q,e),l=!1;}if(o){const t=u(e.name,a,r);if(!e.noRet){let n,r=D.RESPONSE_SUCCESS;t.then(e=>{n=e}).catch(e=>{r=D.RESPONSE_ERROR,n=e}).finally(()=>{y({type:r,id:e.id,env:K},n,o,l)})}}}else{const n=Y[e.id];if("server"===K&&n.player!==t)return;n&&(n.resolve(e.type===D.RESPONSE_SUCCESS?a:Promise.reject(a)),delete Y[e.id])}}async function u(e,t,n){const r=F[e];if(!r)throw`${V} (${e})`;return r(t,n)}function y(e,t,n,o=!0){const a=(t,r,o)=>n({...e,part:t,total:r,args:o});if("undefined"!=typeof t){const e=r(t),n=o?s(e):[e];n.forEach((e,t)=>{a(t+1,n.length,e)})}else a(1,1)}function f(e){if(p(),"client"!==K)throw"addWebView can only be used on the client";H.includes(e)||(e.on(Q,t=>g(t,void 0,e)),e.on(z,t=>{J[t]=e}),H.push(e))}function _(e,t){if(2!==arguments.length)throw"register expects 2 arguments: \"name\" and \"cb\"";l(`Registered procedure "${e}"`),"cef"===K&&alt.emit(z,e),F[e]=t}function m(e){if(1!==arguments.length)throw"unregister expects 1 argument: \"name\"";F[e]=void 0}function h(e,t,n={}){return 1>arguments.length||3<arguments.length?Promise.reject("call expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\""):a(u(e,t,{environment:K}),n.timeout)}function v(e,n,r={}){switch(p(),K){case"server":return h(e,n);case"client":{const o=t();return new Promise(t=>{r.noRet||(Y[o]={resolve:t}),y({type:D.REQUEST,id:o,name:e,env:K,...r},n,e=>alt.emitServer(c(Q),e))})}case"cef":return b("__rpc:callServer",[e,n,+r.noRet]);}}function R(e,t,n={}){if(p(),1>arguments.length||3<arguments.length)return Promise.reject("callServer expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");let r={};return n.noRet&&(r.noRet=1),a(v(e,t,r),n.timeout)}function S(e,n,r,o={}){switch(p(),K){case"client":return h(n,r);case"server":{const a=t();return new Promise(t=>{o.noRet||(Y[a]={resolve:t,player:e}),y({type:D.REQUEST,id:a,name:n,env:K,...o},r,t=>alt.emitClient(e,c(Q),t))})}case"cef":{const e=t();return new Promise(t=>{o.noRet||(Y[e]={resolve:t}),y({type:D.REQUEST,id:e,name:n,env:K,...o},r,e=>alt.emit(Q,e),!1)})}}}function b(e,t,n,r={}){switch(p(),K){case"client":{if(r=n||{},n=t,t=e,e=null,1>arguments.length||3<arguments.length||"string"!=typeof t)return Promise.reject("callClient from the client expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");break}case"server":{if(2>arguments.length||4<arguments.length||"object"!=typeof e)return Promise.reject("callClient from the server expects 2 to 4 arguments: \"player\", \"name\", optional \"args\", and optional \"options\"");break}case"cef":{if(r=n||{},n=t,t=e,e=null,1>arguments.length||3<arguments.length||"string"!=typeof t)return Promise.reject("callClient from the browser expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");break}}let o={};return r.noRet&&(o.noRet=1),a(S(e,t,n,o),r.timeout)}function E(e,n,r,o={}){return e&&e.valid?(p(),new Promise(a=>{const i=t();o.noRet||(Y[i]={resolve:a}),y({type:D.REQUEST,id:i,name:n,env:K,...o},r,t=>e.emit(c(Q),t),!1)})):Promise.reject("INVALID_BROWSER")}function x(e,t,n,r={}){switch(p(),K){case"client":const o=J[t];return o&&o.valid?E(o,t,n,r):Promise.reject(`${V} (${t})`);case"server":return S(e,"__rpc:callBrowsers",[t,n,+r.noRet],r);case"cef":return S(null,"__rpc:callBrowsers",[t,n,+r.noRet],r);}}function k(e,t,n,r={}){p();let o,i={};switch(K){case"client":case"cef":if(r=n||{},n=t,t=e,1>arguments.length||3<arguments.length)return Promise.reject("callBrowsers from the client or browser expects 1 to 3 arguments: \"name\", optional \"args\", and optional \"options\"");r.noRet&&(i.noRet=1),o=x(null,t,n,i);break;case"server":if(2>arguments.length||4<arguments.length)return Promise.reject("callBrowsers from the server expects 2 to 4 arguments: \"player\", \"name\", optional \"args\", and optional \"options\"");r.noRet&&(i.noRet=1),o=x(e,t,n,i);}if(o)return a(o,r.timeout)}function w(e,t,n,r={}){if("client"!==K)return Promise.reject("callBrowser can only be used in the client environment");if(2>arguments.length||4<arguments.length)return Promise.reject("callBrowser expects 2 to 4 arguments: \"browser\", \"name\", optional \"args\", and optional \"options\"");p();let o={};return r.noRet&&(o.noRet=1),a(E(e,t,n,o),r.timeout)}function O(e,t,n){const r=G[e];r&&r.forEach(e=>e(t,n))}function P(e,t){if(2!==arguments.length)throw"on expects 2 arguments: \"name\" and \"cb\"";const n=G[e]||new Set;n.add(t),G[e]=n}function j(e,t){if(2!==arguments.length)throw"off expects 2 arguments: \"name\" and \"cb\"";const n=G[e];n&&n.delete(t)}function C(e,t){if(1>arguments.length||2<arguments.length)throw"trigger expects 1 or 2 arguments: \"name\", and optional \"args\"";O(e,t,{environment:K})}function B(e,t,n){switch(p(),K){case"client":{if(n=t,t=e,e=null,1>arguments.length||2<arguments.length||"string"!=typeof t)throw"triggerClient from the client expects 1 or 2 arguments: \"name\", and optional \"args\"";break}case"server":{if(2>arguments.length||3<arguments.length||"object"!=typeof e)throw"triggerClient from the server expects 2 or 3 arguments: \"player\", \"name\", and optional \"args\"";break}case"cef":{if(n=t,t=e,e=null,1>arguments.length||2<arguments.length||"string"!=typeof t)throw"triggerClient from the browser expects 1 or 2 arguments: \"name\", and optional \"args\"";break}}S(e,c(L),[t,n],{noRet:1})}function M(e,t){if(1>arguments.length||2<arguments.length)throw"triggerServer expects 1 or 2 arguments: \"name\", and optional \"args\"";p(),v(c(L),[e,t],{noRet:1})}function T(e,t,n){switch(K){case"client":case"cef":if(n=t,t=e,e=null,1>arguments.length||2<arguments.length)throw"triggerBrowsers from the client or browser expects 1 or 2 arguments: \"name\", and optional \"args\"";break;case"server":if(2>arguments.length||3<arguments.length)throw"triggerBrowsers from the server expects 2 or 3 arguments: \"player\", \"name\", and optional \"args\"";}p(),S(e,c(W),[t,n],{noRet:1})}function U(e,t,n){if("client"!==K)throw"callBrowser can only be used in the client environment";if(2>arguments.length||4<arguments.length)throw"callBrowser expects 2 or 3 arguments: \"browser\", \"name\", and optional \"args\"";p(),E(e,c(L),[t,n],{noRet:1})}var I;(function(e){(function(t){function n(e,t){return function(n,r){"function"!=typeof e[n]&&Object.defineProperty(e,n,{configurable:!0,writable:!0,value:r}),t&&t(n,r)}}var r="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=n(e);"undefined"==typeof r.Reflect?r.Reflect=e:o=n(r.Reflect,o),t(o)})(function(e){function t(e,t){for(var n=e.length-1;0<=n;--n){var r=e[n],o=r(t);if(!g(o)&&!u(o)){if(!E(o))throw new TypeError;t=o}}return t}function n(e,t,n,r){for(var o=e.length-1;0<=o;--o){var a=e[o],l=a(t,n,r);if(!g(l)&&!u(l)){if(!f(l))throw new TypeError;r=l}}return r}function r(e,t,n){var r=F.get(e);if(g(r)){if(!n)return;r=new L,F.set(e,r)}var o=r.get(t);if(g(o)){if(!n)return;o=new L,r.set(t,o)}return o}function o(e,t,n){var r=a(e,t,n);if(r)return!0;var i=C(t);return!u(i)&&o(e,i,n)}function a(e,t,n){var o=r(t,n,!1);return!g(o)&&h(o.has(e))}function i(e,t,n){var r=a(e,t,n);if(r)return l(e,t,n);var o=C(t);return u(o)?void 0:i(e,o,n)}function l(e,t,n){var o=r(t,n,!1);return g(o)?void 0:o.get(e)}function s(e,t,n,o){var a=r(n,o,!0);a.set(e,t)}function d(e,t){var n=c(e,t),r=C(e);if(null===r)return n;var o=d(r,t);if(0>=o.length)return n;if(0>=n.length)return o;for(var a=new W,i=[],l=0,s=n;l<s.length;l++){var p=s[l],g=a.has(p);g||(a.add(p),i.push(p))}for(var u=0,y=o;u<y.length;u++){var p=y[u],g=a.has(p);g||(a.add(p),i.push(p))}return i}function c(e,t){var n=[],o=r(e,t,!1);if(g(o))return n;for(var a=o.keys(),i=w(a),l=0;;){var s=P(i);if(!s)return n.length=l,n;var d=O(s);try{n[l]=d}catch(t){try{j(i)}finally{throw t}}l++}}function p(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6;}}function g(e){return e===void 0}function u(e){return null===e}function y(e){return"symbol"==typeof e}function f(e){return"object"==typeof e?null!==e:"function"==typeof e}function _(e,t){switch(p(e)){case 0:return e;case 1:return e;case 2:return e;case 3:return e;case 4:return e;case 5:return e;}var n=3===t?"string":5===t?"number":"default",r=k(e,U);if(r!==void 0){var o=r.call(e,n);if(f(o))throw new TypeError;return o}return m(e,"default"==n?"number":n)}function m(e,t){if("string"===t){var n=e.toString;if(b(n)){var r=n.call(e);if(!f(r))return r}var o=e.valueOf;if(b(o)){var r=o.call(e);if(!f(r))return r}}else{var o=e.valueOf;if(b(o)){var r=o.call(e);if(!f(r))return r}var a=e.toString;if(b(a)){var r=a.call(e);if(!f(r))return r}}throw new TypeError}function h(e){return!!e}function v(e){return""+e}function R(e){var t=_(e,3);return y(t)?t:v(t)}function S(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function b(e){return"function"==typeof e}function E(e){return"function"==typeof e}function x(e){switch(p(e)){case 3:return!0;case 4:return!0;default:return!1;}}function k(e,t){var n=e[t];if(void 0!==n&&null!==n){if(!b(n))throw new TypeError;return n}}function w(e){var t=k(e,I);if(!b(t))throw new TypeError;var n=t.call(e);if(!f(n))throw new TypeError;return n}function O(e){return e.value}function P(e){var t=e.next();return!t.done&&t}function j(e){var t=e["return"];t&&t.call(e)}function C(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===Q)return t;if(t!==Q)return t;var n=e.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return t;var o=r.constructor;return"function"==typeof o?o===e?t:o:t}function B(e){return e.__=void 0,delete e.__,e}var M=Object.prototype.hasOwnProperty,T="function"==typeof Symbol,U=T&&"undefined"!=typeof Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",I=T&&"undefined"!=typeof Symbol.iterator?Symbol.iterator:"@@iterator",N="function"==typeof Object.create,A={__proto__:[]}instanceof Array,K=!N&&!A,V={create:N?function(){return B(Object.create(null))}:A?function(){return B({__proto__:null})}:function(){return B({})},has:K?function(e,t){return M.call(e,t)}:function(e,t){return t in e},get:K?function(e,t){return M.call(e,t)?e[t]:void 0}:function(e,t){return e[t]}},Q=Object.getPrototypeOf(Function),z="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,L=z||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){function e(e){return e}function t(e,t){return t}function n(e,t){return[e,t]}var r={},o=[],a=function(){function e(e,t,n){this._index=0,this._keys=e,this._values=t,this._selector=n}return e.prototype["@@iterator"]=function(){return this},e.prototype[I]=function(){return this},e.prototype.next=function(){var e=this._index;if(0<=e&&e<this._keys.length){var t=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=o,this._values=o):this._index++,{value:t,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw 0<=this._index&&(this._index=-1,this._keys=o,this._values=o),e},e.prototype.return=function(e){return 0<=this._index&&(this._index=-1,this._keys=o,this._values=o),{value:e,done:!0}},e}();return function(){function o(){this._keys=[],this._values=[],this._cacheKey=r,this._cacheIndex=-2}return Object.defineProperty(o.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),o.prototype.has=function(e){return 0<=this._find(e,!1)},o.prototype.get=function(e){var t=this._find(e,!1);return 0<=t?this._values[t]:void 0},o.prototype.set=function(e,t){var n=this._find(e,!0);return this._values[n]=t,this},o.prototype.delete=function(e){var t=this._find(e,!1);if(0<=t){for(var n=this._keys.length,o=t+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=r,this._cacheIndex=-2),!0}return!1},o.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=r,this._cacheIndex=-2},o.prototype.keys=function(){return new a(this._keys,this._values,e)},o.prototype.values=function(){return new a(this._keys,this._values,t)},o.prototype.entries=function(){return new a(this._keys,this._values,n)},o.prototype["@@iterator"]=function(){return this.entries()},o.prototype[I]=function(){return this.entries()},o.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),0>this._cacheIndex&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},o}()}():Map,W=z||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){return function(){function e(){this._map=new L}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[I]=function(){return this.keys()},e}()}():Set,D=z||"function"!=typeof WeakMap?function(){function e(){var e;do e="@@WeakMap@@"+o();while(V.has(a,e));return a[e]=!0,e}function t(e,t){if(!M.call(e,i)){if(!t)return;Object.defineProperty(e,i,{value:V.create()})}return e[i]}function n(e,t){for(var n=0;n<t;++n)e[n]=0|255*Math.random();return e}function r(e){return"function"==typeof Uint8Array?"undefined"==typeof crypto?"undefined"==typeof msCrypto?n(new Uint8Array(e),e):msCrypto.getRandomValues(new Uint8Array(e)):crypto.getRandomValues(new Uint8Array(e)):n(Array(e),e)}function o(){var e=r(16);e[6]=64|79&e[6],e[8]=128|191&e[8];for(var t,n="",o=0;o<16;++o)t=e[o],(4==o||6===o||8===o)&&(n+="-"),16>t&&(n+="0"),n+=t.toString(16).toLowerCase();return n}var a=V.create(),i=e();return function(){function n(){this._key=e()}return n.prototype.has=function(e){var n=t(e,!1);return void 0!==n&&V.has(n,this._key)},n.prototype.get=function(e){var n=t(e,!1);return void 0===n?void 0:V.get(n,this._key)},n.prototype.set=function(e,n){var r=t(e,!0);return r[this._key]=n,this},n.prototype.delete=function(e){var n=t(e,!1);return void 0!==n&&delete n[this._key]},n.prototype.clear=function(){this._key=e()},n}()}():WeakMap,F=new D;e("decorate",function(e,r,o,a){if(!g(o)){if(!S(e))throw new TypeError;if(!f(r))throw new TypeError;if(!f(a)&&!g(a)&&!u(a))throw new TypeError;return u(a)&&(a=void 0),o=R(o),n(e,r,o,a)}if(!S(e))throw new TypeError;if(!E(r))throw new TypeError;return t(e,r)}),e("metadata",function(e,t){return function(n,r){if(!f(n))throw new TypeError;if(!g(r)&&!x(r))throw new TypeError;s(e,t,n,r)}}),e("defineMetadata",function(e,t,n,r){if(!f(n))throw new TypeError;return g(r)||(r=R(r)),s(e,t,n,r)}),e("hasMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),o(e,t,n)}),e("hasOwnMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),a(e,t,n)}),e("getMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),i(e,t,n)}),e("getOwnMetadata",function(e,t,n){if(!f(t))throw new TypeError;return g(n)||(n=R(n)),l(e,t,n)}),e("getMetadataKeys",function(e,t){if(!f(e))throw new TypeError;return g(t)||(t=R(t)),d(e,t)}),e("getOwnMetadataKeys",function(e,t){if(!f(e))throw new TypeError;return g(t)||(t=R(t)),c(e,t)}),e("deleteMetadata",function(e,t,n){if(!f(t))throw new TypeError;g(n)||(n=R(n));var o=r(t,n,!1);if(g(o))return!1;if(!o.delete(e))return!1;if(0<o.size)return!0;var a=F.get(t);return!(a.delete(n),!(0<a.size))||(F.delete(t),!0)})})})(I||(I={}));const N=function(){if("undefined"!=typeof global)return global;return"undefined"==typeof window?void 0:window}(),A=alt.setTimeout||N.setTimeout,K=n();if(!K)throw"Unknown alt:V environment";const V="EVENT NOT FOUND",Q="__rpc:process",z="__rpc:browserRegister",L="__rpc:triggerEvent",W="__rpc:triggerEventBrowsers";var D;(function(e){e[e.REQUEST=0]="REQUEST",e[e.RESPONSE_SUCCESS=1]="RESPONSE_SUCCESS",e[e.RESPONSE_ERROR=2]="RESPONSE_ERROR"})(D||(D={}));const F={},Y={},q={},G={},H=[],J={},X=new Map;let Z="";const $=()=>function(e){return class extends e{constructor(...t){if(super(...t),!Reflect.getMetadata("design:procedurelist:init",e.prototype)){const t=Reflect.getMetadata("design:procedurelist",e.prototype)||[];t.forEach((e,t)=>{e=e.map(e=>{const{procedure:n,callable:r}=e,o=this[r].bind(this);if("function"!=typeof this[r])throw new Error(`Event[${t}] in ${this.constructor.name} is not callable!`);return n.forEach(e=>_(e,o)),e.func=o,e});const n=X.get(t)||[];X.set(t,[...n,...e])}),Reflect.defineMetadata("design:procedurelist:init",!0,e.prototype)}}}},ee=e=>{e=Array.isArray(e)?e:[e];const t=e.filter((t,n)=>e.indexOf(t)===n),n={procedure:t,callable:""},r=t[0];return function(e,t,o){if(!(o.value instanceof Function))throw new Error(`Procedure[${r}] must be callable`);const a=Reflect.getMetadata("design:procedurelist",e)||new Map;n.callable=t.toString();const i=a.get(r);return a.set(r,i&&[...i,n]||[n]),Reflect.defineMetadata("design:procedurelist",a,e),o}};e.addWebView=f,e.call=h,e.callBrowser=w,e.callBrowsers=k,e.callClient=b,e.callServer=R,e.default={init:d,addWebView:f,register:_,unregister:m,call:h,callServer:R,callClient:b,callBrowsers:k,callBrowser:w,on:P,off:j,trigger:C,triggerServer:M,triggerClient:B,triggerBrowsers:T,triggerBrowser:U,procedurable:$,procedure:ee},e.init=d,e.off=j,e.on=P,e.procedurable=$,e.procedure=ee,e.register=_,e.trigger=C,e.triggerBrowser=U,e.triggerBrowsers=T,e.triggerClient=B,e.triggerServer=M,e.unregister=m,Object.defineProperty(e,"__esModule",{value:!0})});
