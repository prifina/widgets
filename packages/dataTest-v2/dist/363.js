/*! For license information please see 363.js.LICENSE.txt */
"use strict";(self.webpackChunk_prifina_widgets_dataTest_v2=self.webpackChunk_prifina_widgets_dataTest_v2||[]).push([[363],{363:(t,e,n)=>{n.r(e);var r=n(900),o=n.n(r),i=n(195),a=n(734),c=n(573),u=n(280),l=n(944),s=n(806),f="x866fscSq5Ae7bPgUtb6ffB";function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function p(){}function y(){}var v={};c(v,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==e&&n.call(g,o)&&(v=g);var b=y.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==d(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=y,c(b,"constructor",y),c(y,"constructor",p),p.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),c(b,a,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))}}function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n(47);var b=i.ZP.div.withConfig({displayName:"App__Container",componentId:"sc-1k2b6g5-0"})(["height:300px;font-size:14px;width:300px;padding:5px;"]),w=function(t){t.data,console.log("WIDGET V2 ",a.usePrifina,d(a.usePrifina),a.PrifinaContext),console.log("WIDGET V2.. ",(0,a.usePrifina)());var e=(0,a.usePrifina)(),n=e.check,i=e.onUpdate,y=e.API,g=e.registerDataConnector,w=m((0,r.useState)([]),2),E=w[0],x=w[1],S=m((0,r.useState)(""),2),O=S[0],k=S[1],L=m((0,r.useState)("eq"),2),_=L[0],T=L[1],P=m((0,r.useState)(""),2),j=P[0],A=P[1],F=m((0,r.useState)(""),2),C=F[0],G=F[1],N=function(t){var e=m((0,r.useState)(null),2),n=e[0],o=e[1],i=m((0,r.useState)(null),2),a=i[0],c=i[1],u=m((0,r.useState)(null),2),l=u[0],s=u[1],f=m((0,r.useState)(null),2),h=f[0],p=f[1];return(0,r.useEffect)((function(){h&&(s(!0),o(null),c(null),fetch(h).then((function(t){return t.text()})).then((function(t){s(!1),t.code>=400?c(t.message):o(t)})).catch((function(t){s(!1),c(t)})))}),[h]),{s3Data:n,error:a,isLoading:l,setUrl:p}}(),I=N.s3Data,D=(N.error,N.isLoading),U=N.setUrl,Z=function(t){console.log("WIDGET UPDATE ",(new Date).getTime(),t),console.log(" UPDATE ",Object.keys(t)),t.data.hasOwnProperty("content")&&t.data.content.hasOwnProperty("s3Url")&&(console.log("GET ",t.data.content.s3Url),U(t.data.content.s3Url))};return(0,r.useEffect)((function(){if(console.log("NEW DATA ",D,I),!D&&I){var t=I.replace(/\"/g,"").split("\n");console.log(t)}}),[D,I]),(0,r.useEffect)((function(){console.log("CONNECTORS ",u.Z),console.log("CHECK ",n()),i(f,Z),g(f,[c.Z,u.Z,l.Z,s.Z]);var t=Object.keys(y[f].Fitbit).map((function(t){return"Fitbit."+t})),e=Object.keys(y[f].Oura).map((function(t){return"Oura."+t})),r=Object.keys(y[f].Garmin).map((function(t){return"Garmin."+t})),o=Object.keys(y[f].GoogleTimeline).map((function(t){return"GoogleTimeline."+t}));x(E.concat(t,e,r,o))}),[]),o().createElement(b,null,o().createElement("div",null,"Testing 2"),o().createElement("div",null,o().createElement("select",{onChange:function(t){return k(t.target.value)},defaultValue:O},E.map((function(t,e){return o().createElement("option",{key:"f-"+e,value:t},t)})))),o().createElement("div",null,o().createElement("select",{onChange:function(t){return T(t.target.value)},defaultValue:_},o().createElement("option",{value:"eq"},Symbol.keyFor(a.Op.eq)),o().createElement("option",{value:"ne"},Symbol.keyFor(a.Op.ne)),o().createElement("option",{value:"gte"},Symbol.keyFor(a.Op.gte)),o().createElement("option",{value:"gt"},Symbol.keyFor(a.Op.gt)),o().createElement("option",{value:"lte"},Symbol.keyFor(a.Op.lte)),o().createElement("option",{value:"lt"},Symbol.keyFor(a.Op.lt)),o().createElement("option",{value:"like"},Symbol.keyFor(a.Op.like)),o().createElement("option",{value:"in"},Symbol.keyFor(a.Op.in)),o().createElement("option",{value:"between"},Symbol.keyFor(a.Op.between)))),o().createElement("div",null,o().createElement("input",{type:"text",onChange:function(t){return A(t.target.value)}})),o().createElement("div",null,o().createElement("input",{type:"text",onChange:function(t){return G(t.target.value)}})),o().createElement("div",null,o().createElement("button",{onClick:v(h().mark((function t(){var e,n,r,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p({},"s3::date",p({},a.Op[_],j)),console.log("FILTER",e),n=null,""!==C&&(n=C),r=O.split("."),console.log(r),t.next=8,y[f][r[0]][r[1]]({filter:e,fields:n});case 8:o=t.sent,console.log("DATA ",(new Date).getTime(),o);case 10:case"end":return t.stop()}}),t)})))},"RUN")))};w.displayName="App",w.__docgenInfo={description:"",methods:[],displayName:"App"};const E=w;var x=n(953),S=document.getElementById("root");(0,x.createRoot)(S).render(o().createElement(E,null))}}]);