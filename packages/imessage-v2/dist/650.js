/*! For license information please see 650.js.LICENSE.txt */
"use strict";(self.webpackChunk_prifina_widgets_imessage_v2=self.webpackChunk_prifina_widgets_imessage_v2||[]).push([[650],{2230:(e,t,n)=>{n.d(t,{AF:()=>r,Ji:()=>a});var r="cw9aphqcofZkv8pCE9nE181",a="0.0.1"},1626:(e,t,n)=>{n.d(t,{qH:()=>Y,g3:()=>O});var r=n(7900),a=n.n(r),o=n(1195),i=n(9716),s=n(3430),c=n(2734),u=n(9105),l=n(3434),d=n(4081),f=n(4842),h=n(5352),p=n(7616),m=n(1853),g=n(5366);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(){y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new I(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=_(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function d(){}function f(){}function h(){}var p={};s(p,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==t&&n.call(g,a)&&(p=g);var b=h.prototype=d.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,o,i,s){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==v(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function _(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function M(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=h,s(b,"constructor",h),s(h,"constructor",f),f.displayName=s(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),s(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),s(b,i,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:M(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}function b(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,s,"next",e)}function s(e){b(o,r,a,i,s,"throw",e)}i(void 0)}))}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(e,t)||M(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k,N=(0,s.Z)(null),A=N.Provider,T=N.useStore,O=function(e){var t=e.componentProps,n=e.children,o=(0,c.usePrifina)(),s=o.currentUser,l=o.onUpdate,d=o.API,f=o.registerDataConnector;o.unSubscribe;var h=o.check;console.log("PRIFINA HOOK USER ",s);var p=(0,r.useRef)(null);return a().createElement(A,{createStore:function(){return(0,i.ZP)((function(e,n){return{mode:0,appType:"",appId:"",currentUser:s,loading:!0,onUpdateID:"",chatInfo:{},chats:[],newChats:0,currentChat:{},messages:[],changeMode:function(){e({mode:2})},notify:function(e){p.current=e},createMessage:(g=w(y().mark((function t(r){var a,o,i,s,c,u;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().appId,o=n().currentUser.uuid,i=n().currentChat.chatId,s=n().currentChat.chatId,t.next=6,d[a].Messaging.mutationCreateMessage({variables:{body:JSON.stringify(r),receiver:i,sender:o,chatId:s,owner:o}});case 6:c=t.sent,console.log("NEW MSG ",c),(u=n().messages).push({id:c.data.createMessage.messageId,data:{timestamp:c.data.createMessage.createdAt,message:JSON.stringify(r),receiver:i,sender:o,chatId:s}}),e({messages:u});case 11:case"end":return t.stop()}}),t)}))),function(e){return g.apply(this,arguments)}),createTestMessage:(m=w(y().mark((function t(r,a,o,i){var s,c,u,l,f,h;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n().appId,c=a||n().currentUser.uuid,u=o||n().currentChat.chatId,l=i||n().currentChat.chatId,t.next=6,d[s].Messaging.mutationCreateTestMessage({variables:{body:JSON.stringify(r),receiver:u,sender:c,chatId:l,owner:c}});case 6:f=t.sent,console.log("NEW TEST MSG ",f),(h=n().messages).push({id:f.data.createMessage.messageId,data:{timestamp:f.data.createMessage.createdAt,message:JSON.stringify(r),receiver:u,sender:c,chatId:l}}),e({messages:h});case 11:case"end":return t.stop()}}),t)}))),function(e,t,n,r){return m.apply(this,arguments)}),initChat:(i=w(y().mark((function t(r){var a,o,i,s,u,l;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().newChats,console.log("CHAT ",r,a),o=n().appId,n().currentUser.uuid,i=E({},"chatId",E({},c.Op.eq,r.chatId)),t.next=7,d[o].Messaging.queryGetMessages({filter:i});case 7:s=t.sent,console.log("MSGS ",s),u=[],s.data.getMsgs.sort((function(e,t){return e.createdAt>t.createdAt?1:-1})).forEach((function(e){u.push({id:e.messageId,data:{timestamp:e.createdAt,message:e.body,receiver:e.receiver,sender:e.sender,chatId:e.chatId,owner:e.owner}})})),l="widget"===n().appType?3:1,e({mode:l,messages:u,currentChat:r,newChats:a+1});case 14:case"end":return t.stop()}}),t)}))),function(e){return i.apply(this,arguments)}),check:function(){console.log("CHECK ",h())},getUnreadMessages:(o=w(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n().appId,d[t].Messaging.queryGetUnreadMessages({}).then((function(e){console.log("UNREAD ",e)}));case 2:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)}),getMessages:(a=w(y().mark((function e(t){var r,a,o,i;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().appId,console.log("CHAT SELECTED...",t),o=E({},c.Op.and,(E(r={},"receiver",E({},c.Op.eq,t.chatId)),E(r,"sender",E({},c.Op.eq,n().APIcurrentUser.uuid)),r)),e.next=5,d[a].Messaging.queryGetMessages({filter:o});case 5:i=e.sent,console.log("MSGS ",i);case 7:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)}),updateMsgStatus:(r=w(y().mark((function e(t){var r;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().appId,e.next=3,d[r].Messaging.mutationUpdateMessageStatus({variables:{messageId:t,status:1}});case 3:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),update:function(e){console.log("UPDATE STORE ",e);var t=n().appId;null!=e&&e.addMessage&&JSON.parse(e.addMessage.result).cnt>0&&d[t].Messaging.queryGetUnreadMessages({}).then((function(e){console.log("UNREAD ",e),p.current&&(console.log("UPDATE SUBS"),p.current(e.data))}))},init:function(r){var a=t.appId;console.log(a,r),console.log(s);var o=l(a,n().update);f(a,[u.Z]);var i=[];i.push(d[a].Messaging.subscribeMessagingStatus({variables:{receiver:s.uuid}})),i.push(d[a].Messaging.queryUserAddressBook({})),i.push(d[a].Messaging.queryGetUnreadMessages({filter:{}})),Promise.all(i).then((function(t){var n=t[1],i=t[2],s={};i.data.getUnreadMsgs.forEach((function(e){null!=s&&s[e.sender]||(s[e.sender]=[]),s[e.sender].push({message:e.body,timestamp:e.createdAt})}));var c=n.data.getAddressBook.map((function(e){return{chatId:e.uuid,name:e.name}}));e({appType:r,mode:"widget"===r?2:1,appId:a,onUpdateID:o,loading:!1,chatInfo:s,chats:c})}))}};var r,a,o,i,m,g}))}},n)},U=o.ZP.div(k||(k=x(["\n  /* */\n  .message {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: fit-content;\n    justify-content: space-between;\n    margin: 15px;\n  }\n  .message > p {\n    background-color: #f3f3f5;\n    font-size: medium;\n    padding: 15px;\n    border-radius: 20px;\n    margin: 10px;\n    margin-right: auto;\n  }\n  .message > small {\n    color: gray;\n    position: absolute;\n    font-size: 8px;\n    bottom: -7px;\n    right: 0;\n  }\n  .message__sender {\n    margin-left: auto;\n  }\n\n  .message__sender > .message__photo {\n    order: 1;\n    margin: 15px;\n  }\n\n  .message__photo {\n    order: 0;\n  }\n\n  .message__sender > p {\n    background-color: #3cabfa;\n    color: white;\n  }\n"])));function P(e){var t=e.user,n=e.chat,r=e.contents,o=r.timestamp,i=r.message,s=r.sender,c=r.photo,u=r.chatId;return console.log("CHAT ",t,n,s,i,u),console.log("CHAT ",t.uuid===s),a().createElement(U,null,a().createElement("div",{className:"message ".concat(t.uuid===s?"message__sender":"")},t.uuid!==s&&a().createElement(l.Z,{className:"message__photo",src:c}),a().createElement("p",null,JSON.parse(i)),a().createElement("small",null,new Date(o).toLocaleString())))}var L,j,G,Z,D,H,R=function(e,t){return console.log("PROPS HERE ",e),e.chat===e.contents.chatId||e.contents.sender===e.chat&&e.contents.receiver===e.user.uuid||e.contents.receiver===e.chat&&e.contents.sender===e.user.uuid?a().createElement(P,_({},e,{ref:t})):null},F=(0,r.forwardRef)(R),q=o.ZP.div(L||(L=x(["\n  /* */\n  width: ",";\n"])),(function(e){return e.width})),J=(0,o.ZP)((function(e){e.newChats;var t,n=e.className,o=T((function(e){return{mode:e.mode,changeMode:e.changeMode,messages:e.messages,notify:e.notify,updateMsgStatus:e.updateMsgStatus,currentUser:e.currentUser,currentChat:e.currentChat,createMessage:e.createMessage}}),p.Z),i=o.mode,s=o.changeMode,c=o.currentUser,u=o.currentChat,l=o.messages,m=o.createMessage,g=o.updateMsgStatus,v=o.notify,b=S((0,r.useState)([]),2),E=b[0],_=b[1],x=S((0,r.useState)(""),2),M=x[0],C=x[1];v((function(e){console.log("TESTING ",e);var t=[];null!=e&&e.getUnreadMsgs&&(t=e.getUnreadMsgs.map((function(e){return{id:e.messageId,data:{timestamp:e.createdAt,message:e.body,receiver:e.receiver,sender:e.sender,chatId:e.chatId}}}))),_(I(E),I(t))})),t=(0,r.useRef)(null),(0,r.useEffect)((function(){return t.current=!0,function(){return t.current=!1}})),(0,r.useEffect)((function(){var e=null,t=[],n=document.getElementsByClassName("chat"),r=document.getElementsByClassName("chat__messages");if(r.length>0){e=setTimeout((function(){r[0].scrollTop=n[0].scrollHeight}),200);var a=[];l.forEach((function(e){e.data.receiver===c.uuid&&e.data.sender===u.chatId&&a.push(e)})),console.log("UPDATE MSG STATUS ",a),t=a.map((function(e){return setTimeout(w(y().mark((function t(){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e.id);case 2:case"end":return t.stop()}}),t)}))),500)}))}return _(l),function(){null!==e&&(clearTimeout(e),t.forEach((function(e){clearTimeout(e)})))}}));var k=function(){var e=w(y().mark((function e(t){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SAVE MSG ",M,c,u),t.preventDefault(),e.next=4,m(M);case 4:C("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("MSGS ",l),a().createElement(q,{width:1===i?"60%":"100%"},a().createElement("div",{className:n},a().createElement("div",{className:"chat"},a().createElement("div",{className:"chat__nav"},3===i&&a().createElement(d.Z,{onClick:s},a().createElement(h.Z,{className:"nav__icon"}))),a().createElement("div",{className:"chat__header"},a().createElement("h4",null,"To: ",a().createElement("span",{className:"chat__name"},null==u?void 0:u.name)),a().createElement("strong",null,"Details")),a().createElement("div",{className:"chat__messages"},E.map((function(e){return console.log("EXTRA ",u,e),a().createElement(F,{key:e.id,user:c,chat:u.chatId,contents:e.data})}))),void 0!==(null==u?void 0:u.chatId)&&a().createElement("div",{className:"chat__input"},a().createElement("form",null,a().createElement("input",{value:M,onChange:function(e){return C(e.target.value)},placeholder:"iMessage",type:"text"}),a().createElement("button",{onClick:k},"Send Message")),a().createElement(d.Z,{onClick:k},a().createElement(f.Z,{className:"chat__send"}))))))}))(j||(j=x(["\n  .chat {\n    display: flex;\n    flex-direction: column;\n    flex: 0.65;\n    /* height: 100vh; */\n    height:100%;\n    background-color: white;\n  }\n  .chat__nav {\n    height:20px;\n    background-color: #f5f5f5;\n  }\n  .nav__icon {\n    padding:0px;\n  }\n  .chat__header {\n    padding: 10px;\n    padding-top:0px;\n    padding-bottom:0px;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid lightgray;\n    background-color: #f5f5f5;\n  }\n\n  .chat__header > h4 {\n    font-weight: 500;\n    color: gray;\n  }\n\n  .chat__name {\n    color: black;\n  }\n\n  .chat__input {\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    border-top: 1px solid lightgray;\n    background-color: #f5f5f5;\n  }\n\n  .chat__input > form {\n    flex: 1;\n  }\n\n  .chat__messages {\n    flex: 1;\n    overflow: scroll;\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .chat__messages::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .chat__messages {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n  .chat__input > form > input {\n    width: 98%;\n    outline-width: 0;\n    border: 1px solid lightgray;\n    border-radius: 999px;\n    padding: 5px;\n  }\n\n  .chat__input > form > button {\n    display: none;\n  }\n"]))),B=(0,o.ZP)((function(e){var t,n,r,o,i=e.id,s=e.chatName,c=e.info,u=e.className;return a().createElement("div",{className:u},a().createElement("div",{className:"sidebarChat","data-chatid":i},a().createElement(l.Z,{src:null===(t=c[0])||void 0===t?void 0:t.photo}),a().createElement("div",{className:"sidebarChat__info"},a().createElement("h3",null,s),c.length>0&&void 0!==(null===(n=c[0])||void 0===n?void 0:n.message)&&a().createElement(a().Fragment,null,a().createElement("p",null,null===(r=c[0])||void 0===r?void 0:r.message),a().createElement("small",null,g.WU(new Date(null===(o=c[0])||void 0===o?void 0:o.timestamp)))))))}))(G||(G=x(["\n  .sidebarChat {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    border-bottom: 1px solid lightgray;\n    cursor: pointer;\n  }\n\n  .sidebarChat:hover {\n    background-color: #3e93fd;\n    color: white;\n  }\n\n  .sidebarChat__info {\n    margin-left: 15px;\n    position: relative;\n    width: 100%;\n  }\n\n  .sidebarChat__info > small {\n    position: absolute;\n    top: 5px;\n    right: 0;\n  }\n"]))),z=o.ZP.div(Z||(Z=x(["\n  /* */\n  width: ",";\n"])),(function(e){return e.width})),W=(0,o.ZP)((function(e){var t=e.className,n=T((function(e){return{mode:e.mode,currentUser:e.currentUser,chats:e.chats,chatInfo:e.chatInfo,initChat:e.initChat}}),p.Z),r=n.mode,o=n.currentUser,i=n.chats,s=n.chatInfo,c=n.initChat;return console.log("SIDEBAR 1",i,s),a().createElement(z,{width:1===r?"40%":"100%"},a().createElement("div",{className:t},a().createElement("div",{className:"sidebar"},a().createElement("div",{className:"sidebar__header"},a().createElement(l.Z,{src:(null==o?void 0:o.image)||"",className:"sidebar__avatar"}),a().createElement("div",{className:"sidebar__input"},a().createElement(m.Z,null),a().createElement("input",{placeholder:"Search"}))),a().createElement("div",{className:"sidebar__chats"},i.map((function(e){var t=e.chatId,n=e.name;return a().createElement("div",{key:t,onClick:w(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({chatId:t,name:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},a().createElement(B,{id:t,info:s[t]||[],chatName:n}))}))))))}))(D||(D=x(["\nheight:100;\n\n  .sidebar {\n    flex: 0.35;\n    /* height: 100vh; */\n    height:100%;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    border-right: 1px solid lightgray;\n  }\n\n  .sidebar__header {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    height: 50px;\n  }\n\n  .sidebar__avatar {\n    cursor: pointer;\n    margin: 10px;\n  }\n\n  .sidebar__input {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    background-color: #e1e1e1;\n    color: gray;\n    border-radius: 5px;\n  }\n\n  .sidebar__input > input {\n    border: none;\n    background: transparent;\n    outline-width: 0;\n  }\n\n  .sidebar__chats {\n    overflow: scroll;\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .sidebar__chats::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .sidebar__chats {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n"]))),K=o.ZP.div(H||(H=x(["\n  /* */\n  display: flex;\n  height:100%;\n"]))),Y=function(e){var t=e.data,n=e.appType;console.log("DATA PROPS ",t,n);var o=T((function(e){return{mode:e.mode,currentUser:e.currentUser,createTestMessage:e.createTestMessage,currentChat:e.currentChat,loading:e.loading,init:e.init,check:e.check,chats:e.chats,newChats:e.newChats}}),p.Z),i=o.mode,s=o.loading,c=o.init,u=o.check,l=o.chats,d=o.newChats,f=o.currentChat,h=o.createTestMessage,m=o.currentUser,g=(0,r.useRef)(!1);(0,r.useEffect)((function(){console.log("Strict mode RENDERING twice..."),g.current||c(n),g.current=!0}),[]),(0,r.useEffect)((function(){s||(console.log("CALL CHECK ",u()),console.log("CHATS ",l))}),[s]),(0,r.useEffect)((function(){console.log("NEW CHATS ",d)}),[d]);var v=function(){var e=w(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null==f?void 0:f.chatId)){e.next=6;break}if(null===(t=prompt("Please enter msg"))||""===t){e.next=6;break}return console.log("MSG ",t),e.next=6,h(t,f.chatId,m.uuid,f.chatId);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=w(y().mark((function e(){var t,n,r;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=prompt("Please enter msg"))||""===t){e.next=7;break}return n=document.querySelectorAll("div[data-chatId]"),console.log("MSG2 ",n,t),r=n[3].dataset.chatid,e.next=7,h(t,r,m.uuid,r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a().createElement(a().Fragment,null,!s&&a().createElement(K,null,a().createElement("div",null,a().createElement("button",{onClick:v},"New Message"),a().createElement("button",{onClick:b},"New Message2")),(1===i||2===i)&&a().createElement(W,null),(1===i||3===i)&&a().createElement(J,{newChats:d})),s&&a().createElement("div",null,"Loading"))};Y.displayName="IMessage"}}]);