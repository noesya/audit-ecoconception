/*! DSFR v1.2.1 | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */

(function () {
	'use strict';

	/* Polyfill service v3.108.0
	 * Disable minification (remove `.min` from URL path) for more info */

	(function(self, undefined$1) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t)){ throw new TypeError(Object.prototype.toString.call(t)+"is not a function."); }return t.apply(l,n)}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a);}function Get(n,t){return n[t]}function IsCallable(n){return "function"==typeof n}function SameValueNonNumber(e,n){return e===n}function ToObject(e){if(null===e||e===undefined$1){ throw TypeError(); }return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined$1){ return undefined$1; }if(!1===IsCallable(r)){ throw new TypeError("Method not callable: "+n); }return r}function Type(e){switch(typeof e){case"undefined":return "undefined";case"boolean":return "boolean";case"number":return "number";case"string":return "string";case"symbol":return "symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t){ var e=["toString","valueOf"]; }else { e=["valueOf","toString"]; }for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o)){ return o }}}throw new TypeError("Cannot convert to primitive.")}function SameValueZero(n,e){return Type(n)===Type(e)&&("number"===Type(n)?!(!isNaN(n)||!isNaN(e))||(1/n===Infinity&&1/e==-Infinity||(1/n==-Infinity&&1/e===Infinity||n===e)):SameValueNonNumber(n,e))}function ToInteger(n){if("symbol"===Type(n)){ throw new TypeError("Cannot convert a Symbol value to a number"); }var t=Number(n);return isNaN(t)?0:1/t===Infinity||1/t==-Infinity||t===Infinity||t===-Infinity?t:(t<0?-1:1)*Math.floor(Math.abs(t))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined$1;if("object"===Type(e)){if(arguments.length<2){ var i="default"; }else { t===String?i="string":t===Number&&(i="number"); }var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):undefined$1;if(r!==undefined$1){var n=Call(r,e,[i]);if("object"!==Type(n)){ return n; }throw new TypeError("Cannot convert exotic object to primitive.")}return "default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}CreateMethodProperty(Array.prototype,"includes",function e(r){var t=ToObject(this),o=ToLength(Get(t,"length"));if(0===o){ return !1; }var n=ToInteger(arguments[1]);if(n>=0){ var a=n; }else { (a=o+n)<0&&(a=0); }for(;a<o;){var i=Get(t,ToString(a));if(SameValueZero(r,i)){ return !0; }a+=1;}return !1});!function(){function e(e,t){if(!e){ throw new Error("Not enough arguments"); }var n;if("createEvent"in document){n=document.createEvent("Event");var o=!(!t||t.bubbles===undefined$1)&&t.bubbles,i=!(!t||t.cancelable===undefined$1)&&t.cancelable;return n.initEvent(e,o,i),n}return n=document.createEventObject(),n.type=e,n.bubbles=!(!t||t.bubbles===undefined$1)&&t.bubbles,n.cancelable=!(!t||t.cancelable===undefined$1)&&t.cancelable,n}var t={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;e.NONE=0,e.CAPTURING_PHASE=1,e.AT_TARGET=2,e.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=e,n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function o(){var e=this,n=arguments[0],o=arguments[1];if(e===window&&n in t){ throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information."); }e._events||(e._events={}),e._events[n]||(e._events[n]=function(t){var n,o=e._events[t.type].list,i=o.slice(),r=-1,c=i.length;for(t.preventDefault=function a(){!1!==t.cancelable&&(t.returnValue=!1);},t.stopPropagation=function l(){t.cancelBubble=!0;},t.stopImmediatePropagation=function s(){t.cancelBubble=!0,t.cancelImmediate=!0;},t.currentTarget=e,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||e,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++r<c&&!t.cancelImmediate;){ r in i&&(n=i[r],o.includes(n)&&"function"==typeof n&&n.call(e,t)); }},e._events[n].list=[],e.attachEvent&&e.attachEvent("on"+n,e._events[n])),e._events[n].list.push(o);},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function i(){var e,t=this,n=arguments[0],o=arguments[1];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=t._events[n].list.indexOf(o))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]));},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function r(e){if(!arguments.length){ throw new Error("Not enough arguments"); }if(!e||"string"!=typeof e.type){ throw new Error("DOM Events Exception 0"); }var t=this,n=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(e){e.cancelBubble=!0,(t||window).detachEvent("on"+n,o);};this.attachEvent("on"+n,o);}this.fireEvent("on"+n,e);}catch(i){e.target=t;do{e.currentTarget=t,"_events"in t&&"function"==typeof t._events[n]&&t._events[n].call(t,e),"function"==typeof t["on"+n]&&t["on"+n].call(t,e),t=9===t.nodeType?t.parentWindow:t.parentNode;}while(t&&!e.cancelBubble)}return !0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new e("DOMContentLoaded",{bubbles:!0}));}));}}();self.CustomEvent=function e(t,n){if(!t){ throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.'); }var l;if(n=n||{bubbles:!1,cancelable:!1,detail:null},"createEvent"in document){ try{l=document.createEvent("CustomEvent"),l.initCustomEvent(t,n.bubbles,n.cancelable,n.detail);}catch(a){l=document.createEvent("Event"),l.initEvent(t,n.bubbles,n.cancelable),l.detail=n.detail;} }else { l=new Event(t,n),l.detail=n&&n.detail||null; }return l},CustomEvent.prototype=Event.prototype;})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

	/* Polyfill service v3.108.0
	 * Disable minification (remove `.min` from URL path) for more info */

	(function(self, undefined$1) {!function(e){function n(e,n){if("change"===e&&this.addListener(n),arguments[2]&&arguments[2].once){var t=this,r=function(){t.removeListener(r),t.removeListener(n);};this.addListener(r);}}function t(e,n){"change"===e&&this.removeListener(n);}var r=function(){try{var n={};return e.Object.defineProperty(n,"t",{configurable:!0,enumerable:!1,get:function(){return this._v},set:function(e){this._v=e+e;}}),n.t=1,2===n.t}catch(t){return !1}}(),i={enumerable:!0,configurable:!0,get:function(){return this._onchangeHandler||null},set:function(e){var n=this;n._onchangeListener||(n._onchangeListener=function(){"function"==typeof n._onchangeHandler&&n._onchangeHandler.call(n,arguments[0]);},n.addEventListener("change",n._onchangeListener)),n._onchangeHandler=e;}};if("MediaQueryList"in e){var a=e.MediaQueryList.prototype.addListener,o=e.MediaQueryList.prototype.removeListener;e.MediaQueryList.prototype.addListener=function c(e){var n=e;n.handleEvent&&(n=n.handleEvent),a.call(this,n);},e.MediaQueryList.prototype.removeListener=function d(e){var n=e;n.handleEvent&&(n=n.handleEvent),o.call(this,n);},e.MediaQueryList.prototype.addEventListener=n,e.MediaQueryList.prototype.removeEventListener=t,r&&e.Object.defineProperty(e.MediaQueryList.prototype,"onchange",i);}else {var s=self.matchMedia;self.matchMedia=function h(a){var o=s(a),c=o.addListener,d=o.removeListener;return o.addListener=function h(e){var n=e;n.handleEvent&&(n=n.handleEvent),c.call(this,n);},o.removeListener=function u(e){var n=e;n.handleEvent&&(n=n.handleEvent),d.call(this,n);},o.addEventListener=n,o.removeEventListener=t,r&&e.Object.defineProperty(o,"onchange",i),o};}}(self);})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

	/* Polyfill service v3.108.0
	 * Disable minification (remove `.min` from URL path) for more info */

	(function(self, undefined$1) {var _DOMTokenList=function(){var n=!0,t=function(t,e,r,o){Object.defineProperty?Object.defineProperty(t,e,{configurable:!1===n||!!o,get:r}):t.__defineGetter__(e,r);};try{t({},"support");}catch(e){n=!1;}return function(n,e){var r=this,o=[],i={},a=0,c=0,f=function(n){t(r,n,function(){return u(),o[n]},!1);},l=function(){if(a>=c){ for(;c<a;++c){ f(c); } }},u=function(){var t,r,c=arguments,f=/\s+/;if(c.length){ for(r=0;r<c.length;++r){ if(f.test(c[r])){ throw t=new SyntaxError('String "'+c[r]+'" contains an invalid character'),t.code=5,t.name="InvalidCharacterError",t; } } }for(o="object"==typeof n[e]?(""+n[e].baseVal).replace(/^\s+|\s+$/g,"").split(f):(""+n[e]).replace(/^\s+|\s+$/g,"").split(f),""===o[0]&&(o=[]),i={},r=0;r<o.length;++r){ i[o[r]]=!0; }a=o.length,l();};return u(),t(r,"length",function(){return u(),a}),r.toLocaleString=r.toString=function(){return u(),o.join(" ")},r.item=function(n){return u(),o[n]},r.contains=function(n){return u(),!!i[n]},r.add=function(){u.apply(r,t=arguments);for(var t,c,f=0,p=t.length;f<p;++f){ c=t[f],i[c]||(o.push(c),i[c]=!0); }a!==o.length&&(a=o.length>>>0,"object"==typeof n[e]?n[e].baseVal=o.join(" "):n[e]=o.join(" "),l());},r.remove=function(){u.apply(r,t=arguments);for(var t,c={},f=0,p=[];f<t.length;++f){ c[t[f]]=!0,delete i[t[f]]; }for(f=0;f<o.length;++f){ c[o[f]]||p.push(o[f]); }o=p,a=p.length>>>0,"object"==typeof n[e]?n[e].baseVal=o.join(" "):n[e]=o.join(" "),l();},r.toggle=function(n,t){return u.apply(r,[n]),undefined$1!==t?t?(r.add(n),!0):(r.remove(n),!1):i[n]?(r.remove(n),!1):(r.add(n),!0)},r.forEach=Array.prototype.forEach,r}}();!function(t){"DOMTokenList"in t&&t.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(t.DOMTokenList=_DOMTokenList),function(){var t=document.createElement("span");"classList"in t&&(t.classList.toggle("x",!1),t.classList.contains("x")&&(t.classList.constructor.prototype.toggle=function s(t){var s=arguments[1];if(s===undefined$1){var e=!this.contains(t);return this[e?"add":"remove"](t),e}return s=!!s,this[s?"add":"remove"](t),s}));}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a","b"),!t.classList.contains("b"))){var s=t.classList.constructor.prototype.add;t.classList.constructor.prototype.add=function(){for(var t=arguments,e=arguments.length,n=0;n<e;n++){ s.call(this,t[n]); }};}}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a"),t.classList.add("b"),t.classList.remove("a","b"),t.classList.contains("b"))){var s=t.classList.constructor.prototype.remove;t.classList.constructor.prototype.remove=function(){for(var t=arguments,e=arguments.length,n=0;n<e;n++){ s.call(this,t[n]); }};}}();}(self);!function(e){var t=!0,r=function(e,r,n,i){Object.defineProperty?Object.defineProperty(e,r,{configurable:!1===t||!!i,get:n}):e.__defineGetter__(r,n);};try{r({},"support");}catch(i){t=!1;}var n=function(e,i,l){r(e.prototype,i,function(){var e,c=this,s="__defineGetter__DEFINE_PROPERTY"+i;if(c[s]){ return e; }if(c[s]=!0,!1===t){for(var o,a=n.mirror||document.createElement("div"),f=a.childNodes,d=f.length,m=0;m<d;++m){ if(f[m]._R===c){o=f[m];break} }o||(o=a.appendChild(document.createElement("div"))),e=DOMTokenList.call(o,c,l);}else { e=new _DOMTokenList(c,l); }return r(c,i,function(){return e}),delete c[s],e},!0);};n(e.Element,"classList","className"),n(e.HTMLElement,"classList","className"),n(e.HTMLLinkElement,"relList","rel"),n(e.HTMLAnchorElement,"relList","rel"),n(e.HTMLAreaElement,"relList","rel");}(self);!function(t){t.DOMTokenList.prototype.forEach=t.Array.prototype.forEach;var o=document.createElement("span");o.classList&&o.classList.constructor&&o.classList.constructor.prototype&&!o.classList.constructor.prototype.forEach&&(o.classList.constructor.prototype.forEach=t.Array.prototype.forEach);}(self);NodeList.prototype.forEach=Array.prototype.forEach;})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

	/* Polyfill service v3.108.0
	 * Disable minification (remove `.min` from URL path) for more info */

	(function(self, undefined$1) {!function(){function e(e){if(!(0 in arguments)){ throw new TypeError("1 argument is required"); }do{if(this===e){ return !0 }}while(e=e&&e.parentNode);return !1}if("HTMLElement"in self&&"contains"in HTMLElement.prototype){ try{delete HTMLElement.prototype.contains;}catch(t){} }"Node"in self?Node.prototype.contains=e:document.contains=Element.prototype.contains=e;}();})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

	/* Polyfill service v3.108.0
	 * Disable minification (remove `.min` from URL path) for more info */

	(function(self, undefined$1) {Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function e(t){for(var o=this,r=(o.document||o.ownerDocument).querySelectorAll(t),c=0;r[c]&&r[c]!==o;){ ++c; }return !!r[c]};})();

})();
//# sourceMappingURL=legacy.nomodule.js.map
