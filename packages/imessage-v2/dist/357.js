/*! For license information please see 357.js.LICENSE.txt */
"use strict";(self.webpackChunk_prifina_widgets_imessage_app_v2=self.webpackChunk_prifina_widgets_imessage_app_v2||[]).push([[357],{2230:(e,t,n)=>{n.d(t,{A:()=>r});var r="xxxIM"},1626:(e,t,n)=>{n.d(t,{qH:()=>X,g3:()=>L});var r=n(362),a=n.n(r),o=n(988),s=n(8804),i=n(9494),c=n(8071),u=n(3434),l=n(6911),d=n(4842),f=n(5352),g=n(2543),p=n(1853),h=n(5366);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(){v=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),s=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=M(s,n);if(i){if(i===l)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,s),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function d(){}function f(){}function g(){}var p={};i(p,a,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(_([])));y&&y!==t&&n.call(y,a)&&(p=y);var b=g.prototype=d.prototype=Object.create(p);function S(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(a,o,s,i){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==m(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,i)}),(function(e){r("throw",e,s,i)})):t.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,i)}))}i(c.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function M(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,M(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return f.prototype=g,i(b,"constructor",g),i(g,"constructor",f),f.displayName=i(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,i(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},S(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var s=new E(c(t,n,r,a),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},S(b),i(b,s,"Generator"),i(b,a,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return s.type="throw",s.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}function y(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){y(o,r,a,s,i,"next",e)}function i(e){y(o,r,a,s,i,"throw",e)}s(void 0)}))}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function M(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}var N=[{name:"Name 1",uuid:"13625638c207ed2fcd5a7b7cfb2364a04661"},{name:"Name 2",uuid:"tero"},{name:"Name 3",uuid:"0cc3bc47d8a60c8a0f6f35a9134c689e0a8c"}],C="mutation newMessage($input:MessageInput!) {\n    createMessage(input: $input) {\n     messageId\n     chatId\n     createdAt \n     result\n     receiver\n    }\n  }";function T(){for(var e="qwertyuiopasdfghjklzxcvbnm",t="",n=0;n<3;n++){var r=Math.floor(Math.random()*e.length);t+=e.substring(r,r+1)}e="1234567890";for(var a=0;a<3;a++){var o=Math.floor(Math.random()*e.length);t+=e.substring(o,o+1)}return t}var O,k={getModuleName:function(){return"Messaging"},getInfo:function(){return["queryUserAddressBook","mutationCreateMessage","subscribeMessagingStatus","subscribeMessagingData","mutationCreateTestMessage","queryGetUnreadMessages","queryGetMessages","mutationUpdateMessageStatus"]},getFields:function(e){return[]},queryUserAddressBook:function(e){var t=e.stage,n=e.appID,r=e.name,a=e.createQuery,o=e.fields,s=e.filter,i=e.next,c=e.fieldsList;return"dev"===t?Promise.resolve({data:{getAddressBook:N}}):a({query:"query getAddressBook($input:DataObjectInput!) {\n  getAddressBook(input:$input) {\n    result\n  }\n}",name:r,fields:o,filter:s,next:i,appId:n,fieldsList:c})},mutationCreateMessage:function(e){var t=e.stage,n=e.appID,r=e.name,a=e.createMutation,o=e.callbacks,s=e.uuid,i=e.variables;if(console.log("CREATE MSG ",t),console.log("CREATE MSG ",n),console.log("CREATE MSG ",s),console.log("CREATE MSG ",o),console.log("CREATE MSG ",i),"dev"===t){var c={messageId:T(),body:i.body,chatId:i.chatId,sender:s,receiver:i.receiver,createdAt:(new Date).getTime()},u=[c],l=localStorage.getItem("prifinaMessaging");null!==l&&(console.log("MSG STORAGE ",l),u=u.concat(JSON.parse(l))),localStorage.setItem("prifinaMessaging",JSON.stringify(u));var d=localStorage.getItem("prifinaMessagingStatuses"),f=[{uuid:i.receiver,messageId:c.messageId,status:0}];return null!==d&&(console.log("MSG STORAGE ",l),f=f.concat(JSON.parse(d))),localStorage.setItem("prifinaMessagingStatuses",JSON.stringify(f)),Promise.resolve({data:{createMessage:c}})}return i.sender=s,a({name:r,mutation:C,variables:{content:i},appId:n})},subscribeMessagingStatus:function(e){var t=e.stage,n=e.appID,r=e.name,a=e.createSubscription,o=e.variables,s=e.uuid;if("dev"===t){var i=localStorage.getItem("prifinaMessagingStatus"),c={};return null!==i&&(c=JSON.parse(i)),c[o.receiver]=!0,localStorage.setItem("prifinaMessagingStatus",JSON.stringify(c)),Promise.resolve(!0)}return console.log("SUBS "),a({name:r,mutation:"subscription MySubscription($receiver: String!) {\n    addMessage(receiver: $receiver) {\n      messageId\n      chatId\n      receiver\n      result\n    }\n  }",variables:{receiver:s},appId:n})},subscribeMessagingData:function(e){var t=e.stage;if(e.appID,e.name,e.createSubscription,e.variables,e.uuid,"dev"===t)return localStorage.setItem("prifinaMessagingStatus",!1),Promise.resolve(!0);console.log("SUBS ")},mutationCreateTestMessage:function(e){var t=e.stage,n=e.appID,r=e.name,a=e.createMutation,o=e.callbacks,s=e.uuid,i=e.variables;if(console.log("CREATE MSG ",t),console.log("CREATE MSG ",n),console.log("CREATE MSG ",s),console.log("CREATE MSG ",o),console.log("CREATE MSG ",i),"dev"===t){var c=o(),u=localStorage.getItem("prifinaMessaging"),l={messageId:T(),body:i.body,chatId:i.chatId,sender:i.sender,receiver:s,createdAt:(new Date).getTime()},d=[l];null!==u&&(console.log("MSG STORAGE ",u),d=d.concat(JSON.parse(u))),localStorage.setItem("prifinaMessaging",JSON.stringify(d));var f=localStorage.getItem("prifinaMessagingStatuses"),g=[{uuid:s,messageId:l.messageId,status:0}];null!==f&&(console.log("MSG STORAGE ",u),g=g.concat(JSON.parse(f))),localStorage.setItem("prifinaMessagingStatuses",JSON.stringify(g));var p=localStorage.getItem("prifinaMessagingStatus");if(null!==p){var h=JSON.parse(p);if(h.hasOwnProperty(s)&&h[s]){var m=g.filter((function(e){return e.uuid===s}));c[n][0]({messagingStatus:{cnt:m.length,lastMessage:new Date(l.createdAt).toISOString()}})}}return Promise.resolve({data:{createMessage:l}})}return i.receiver=s,a({name:r,mutation:C,variables:{content:i},appId:n})},queryGetUnreadMessages:function(e){var t=e.stage,n=e.appID,r=e.name,a=e.createQuery,o=e.fields,s=e.filter,i=e.next,c=e.fieldsList,u=e.uuid;if("dev"!==t)return a({query:"query unreadMsgs($input:DataObjectInput!) {\n  getUnreadMsgs(input:$input) {\n    result\n  }\n}",name:r,fields:o,filter:s,next:i,appId:n,fieldsList:c});var l=function(){var e=localStorage.getItem("prifinaMessagingStatuses"),t=[];if(null!==e){var n=JSON.parse(e);t=n.filter((function(e){return e.uuid===u&&0===e.status}))}var r=[];if(t.length>0){var a=localStorage.getItem("prifinaMessaging");if(null!==a)for(var o=JSON.parse(a),i=function(e){var n=o.findIndex((function(n){return n.messageId===t[e].messageId}));r.push(o[n])},c=0;c<t.length;c++)i(c)}var l;return l=void 0!==s&&Object.keys(s).length>0?r.filter((function(e){var t=!1;return Object.keys(s).forEach((function(n){console.log("UNREAD FILTER MATCH ",n),console.log("UNREAD FILTER MATCH ",e.hasOwnProperty(n)),t=!(!e.hasOwnProperty(n)||e[n]!==s[n])})),t})):r,{v:Promise.resolve({data:{getUnreadMsgs:l}})}}();return"object"===A(l)?l.v:void 0},queryGetMessages:function(e){var t=e.stage,n=e.appID,r=e.name,a=e.createQuery,o=e.fields,s=e.filter,i=e.next,c=e.fieldsList,u=e.uuid;if("dev"===t){var l=localStorage.getItem("prifinaMessaging"),d=[];return null!==l&&(d=JSON.parse(l).filter((function(e){if(void 0!==s&&Object.keys(s).length>0){var t=!1;return Object.keys(s).forEach((function(n){console.log("UNREAD FILTER MATCH ",n),console.log("UNREAD FILTER MATCH ",e.hasOwnProperty(n)),t=!(!e.hasOwnProperty(n)||e[n]!==s[n])})),t}return e.receiver===u}))),Promise.resolve({data:{getMsgs:d.reverse()}})}return a({query:"query getMsgs($input:DataObjectInput!) {\n  getMsgs(input:$input) {\n    result\n  }\n}",name:r,fields:o,filter:s,next:i,appId:n,fieldsList:c})},mutationUpdateMessageStatus:function(e){var t=e.stage,n=e.appID,r=e.name,a=e.createMutation,o=e.callbacks,s=e.uuid,i=e.variables;if(console.log("UPD MSG STATUS ",t),console.log("UPD MSG STATUS ",n),console.log("UPD MSG STATUS ",s),console.log("UPD MSG STATUS ",o),console.log("UPD MSG STATUS ",i),"dev"===t){var c=localStorage.getItem("prifinaMessagingStatuses");if(i.messageId,i.status,null!==c){var u=JSON.parse(c),l=u.findIndex((function(e){return e.messageId===i.messageId}));u[l].status=i.status,localStorage.setItem("prifinaMessagingStatuses",JSON.stringify(u))}return Promise.resolve({data:{updateMessage:!0}})}return a({name:r,mutation:"mutation updateMessage($input:DataObjectInput!) {\n  updateMessageStatus(input: $input) \n  }",variables:{options:{input:JSON.stringify({uuid:s,messageId:i.messageId})}},appId:n})}},U=(0,i.Z)(null),P=U.Provider,G=U.useStore,L=function(e){var t=e.componentProps,n=e.children,o=(0,c.usePrifina)(),i=o.currentUser,u=o.onUpdate,l=o.API,d=o.registerDataConnector;o.unSubscribe;var f=o.check;console.log("PRIFINA HOOK USER ",i);var g=(0,r.useRef)(null);return a().createElement(P,{createStore:function(){return(0,s.ZP)((function(e,n){return{mode:0,appType:"",appId:"",currentUser:i,loading:!0,onUpdateID:"",chatInfo:{},chats:[],newChats:0,currentChat:{},messages:[],changeMode:function(){e({mode:2})},notify:function(e){g.current=e},createMessage:(h=b(v().mark((function t(r){var a,o,s,i,c,u;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().appId,o=n().currentUser.uuid,s=n().currentChat.chatId,i=n().currentChat.chatId,t.next=6,l[a].Messaging.mutationCreateMessage({variables:{body:JSON.stringify(r),receiver:s,sender:o,chatId:i,owner:o}});case 6:c=t.sent,console.log("NEW MSG ",c),(u=n().messages).push({id:c.data.createMessage.messageId,data:{timestamp:c.data.createMessage.createdAt,message:JSON.stringify(r),receiver:s,sender:o,chatId:i}}),e({messages:u});case 11:case"end":return t.stop()}}),t)}))),function(e){return h.apply(this,arguments)}),createTestMessage:(p=b(v().mark((function t(r,a,o,s){var i,c,u,d,f,g;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n().appId,c=a||n().currentUser.uuid,u=o||n().currentChat.chatId,d=s||n().currentChat.chatId,t.next=6,l[i].Messaging.mutationCreateTestMessage({variables:{body:JSON.stringify(r),receiver:u,sender:c,chatId:d,owner:c}});case 6:f=t.sent,console.log("NEW TEST MSG ",f),(g=n().messages).push({id:f.data.createMessage.messageId,data:{timestamp:f.data.createMessage.createdAt,message:JSON.stringify(r),receiver:u,sender:c,chatId:d}}),e({messages:g});case 11:case"end":return t.stop()}}),t)}))),function(e,t,n,r){return p.apply(this,arguments)}),initChat:(s=b(v().mark((function t(r){var a,o,s,i,u,d;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().newChats,console.log("CHAT ",r,a),o=n().appId,n().currentUser.uuid,s=S({},"chatId",S({},c.Op.eq,r.chatId)),t.next=7,l[o].Messaging.queryGetMessages({filter:s});case 7:i=t.sent,console.log("MSGS ",i),u=[],i.data.getMsgs.sort((function(e,t){return e.createdAt>t.createdAt?1:-1})).forEach((function(e){u.push({id:e.messageId,data:{timestamp:e.createdAt,message:e.body,receiver:e.receiver,sender:e.sender,chatId:e.chatId,owner:e.owner}})})),d="widget"===n().appType?3:1,e({mode:d,messages:u,currentChat:r,newChats:a+1});case 14:case"end":return t.stop()}}),t)}))),function(e){return s.apply(this,arguments)}),check:function(){console.log("CHECK ",f())},getUnreadMessages:(o=b(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n().appId,l[t].Messaging.queryGetUnreadMessages({}).then((function(e){console.log("UNREAD ",e)}));case 2:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)}),getMessages:(a=b(v().mark((function e(t){var r,a,o,s;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().appId,console.log("CHAT SELECTED...",t),o=S({},c.Op.and,(S(r={},"receiver",S({},c.Op.eq,t.chatId)),S(r,"sender",S({},c.Op.eq,n().APIcurrentUser.uuid)),r)),e.next=5,l[a].Messaging.queryGetMessages({filter:o});case 5:s=e.sent,console.log("MSGS ",s);case 7:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)}),updateMsgStatus:(r=b(v().mark((function e(t){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().appId,e.next=3,l[r].Messaging.mutationUpdateMessageStatus({variables:{messageId:t,status:1}});case 3:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),update:function(e){console.log("UPDATE STORE ",e);var t=n().appId;null!=e&&e.addMessage&&JSON.parse(e.addMessage.result).cnt>0&&l[t].Messaging.queryGetUnreadMessages({}).then((function(e){console.log("UNREAD ",e),g.current&&(console.log("UPDATE SUBS"),g.current(e.data))}))},init:function(r){var a=t.appId;console.log(a,r),console.log(i);var o=u(a,n().update);d(a,[k]);var s=[];s.push(l[a].Messaging.subscribeMessagingStatus({variables:{receiver:i.uuid}})),s.push(l[a].Messaging.queryUserAddressBook({})),s.push(l[a].Messaging.queryGetUnreadMessages({filter:{}})),Promise.all(s).then((function(t){var n=t[1],s=t[2],i={};s.data.getUnreadMsgs.forEach((function(e){null!=i&&i[e.sender]||(i[e.sender]=[]),i[e.sender].push({message:e.body,timestamp:e.createdAt})}));var c=n.data.getAddressBook.map((function(e){return{chatId:e.uuid,name:e.name}}));e({appType:r,mode:"widget"===r?2:1,appId:a,onUpdateID:o,loading:!1,chatInfo:i,chats:c})}))}};var r,a,o,s,p,h}))}},n)},D=o.ZP.div(O||(O=M(["\n  /* */\n  .message {\n    display: flex;\n    align-items: center;\n    position: relative;\n    width: fit-content;\n    justify-content: space-between;\n    margin: 15px;\n  }\n  .message > p {\n    background-color: #f3f3f5;\n    font-size: medium;\n    padding: 15px;\n    border-radius: 20px;\n    margin: 10px;\n    margin-right: auto;\n  }\n  .message > small {\n    color: gray;\n    position: absolute;\n    font-size: 8px;\n    bottom: -7px;\n    right: 0;\n  }\n  .message__sender {\n    margin-left: auto;\n  }\n\n  .message__sender > .message__photo {\n    order: 1;\n    margin: 15px;\n  }\n\n  .message__photo {\n    order: 0;\n  }\n\n  .message__sender > p {\n    background-color: #3cabfa;\n    color: white;\n  }\n"])));function R(e){var t=e.user,n=e.chat,r=e.contents,o=r.timestamp,s=r.message,i=r.sender,c=r.photo,l=r.chatId;return console.log("CHAT ",t,n,i,s,l),console.log("CHAT ",t.uuid===i),a().createElement(D,null,a().createElement("div",{className:"message ".concat(t.uuid===i?"message__sender":"")},t.uuid!==i&&a().createElement(u.Z,{className:"message__photo",src:c}),a().createElement("p",null,JSON.parse(s)),a().createElement("small",null,new Date(o).toLocaleString())))}var j,q,J,H,Z,F,B=function(e,t){return console.log("PROPS HERE ",e),e.chat===e.contents.chatId||e.contents.sender===e.chat&&e.contents.receiver===e.user.uuid||e.contents.receiver===e.chat&&e.contents.sender===e.user.uuid?a().createElement(R,E({},e,{ref:t})):null},$=(0,r.forwardRef)(B),z=o.ZP.div(j||(j=M(["\n  /* */\n  width: ",";\n"])),(function(e){return e.width})),W=(0,o.ZP)((function(e){e.newChats;var t,n=e.className,o=G((function(e){return{mode:e.mode,changeMode:e.changeMode,messages:e.messages,notify:e.notify,updateMsgStatus:e.updateMsgStatus,currentUser:e.currentUser,currentChat:e.currentChat,createMessage:e.createMessage}}),g.Z),s=o.mode,i=o.changeMode,c=o.currentUser,u=o.currentChat,p=o.messages,h=o.createMessage,m=o.updateMsgStatus,y=o.notify,S=w((0,r.useState)([]),2),E=S[0],M=S[1],x=w((0,r.useState)(""),2),_=x[0],A=x[1];y((function(e){console.log("TESTING ",e);var t=[];null!=e&&e.getUnreadMsgs&&(t=e.getUnreadMsgs.map((function(e){return{id:e.messageId,data:{timestamp:e.createdAt,message:e.body,receiver:e.receiver,sender:e.sender,chatId:e.chatId}}}))),M(I(E),I(t))})),t=(0,r.useRef)(null),(0,r.useEffect)((function(){return t.current=!0,function(){return t.current=!1}})),(0,r.useEffect)((function(){var e=null,t=[],n=document.getElementsByClassName("chat"),r=document.getElementsByClassName("chat__messages");if(r.length>0){e=setTimeout((function(){r[0].scrollTop=n[0].scrollHeight}),200);var a=[];p.forEach((function(e){e.data.receiver===c.uuid&&e.data.sender===u.chatId&&a.push(e)})),console.log("UPDATE MSG STATUS ",a),t=a.map((function(e){return setTimeout(b(v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e.id);case 2:case"end":return t.stop()}}),t)}))),500)}))}return M(p),function(){null!==e&&(clearTimeout(e),t.forEach((function(e){clearTimeout(e)})))}}));var N=function(){var e=b(v().mark((function e(t){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SAVE MSG ",_,c,u),t.preventDefault(),e.next=4,h(_);case 4:A("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("MSGS ",p),a().createElement(z,{width:1===s?"60%":"100%"},a().createElement("div",{className:n},a().createElement("div",{className:"chat"},a().createElement("div",{className:"chat__nav"},3===s&&a().createElement(l.Z,{onClick:i},a().createElement(f.Z,{className:"nav__icon"}))),a().createElement("div",{className:"chat__header"},a().createElement("h4",null,"To: ",a().createElement("span",{className:"chat__name"},null==u?void 0:u.name)),a().createElement("strong",null,"Details")),a().createElement("div",{className:"chat__messages"},E.map((function(e){return console.log("EXTRA ",u,e),a().createElement($,{key:e.id,user:c,chat:u.chatId,contents:e.data})}))),void 0!==(null==u?void 0:u.chatId)&&a().createElement("div",{className:"chat__input"},a().createElement("form",null,a().createElement("input",{value:_,onChange:function(e){return A(e.target.value)},placeholder:"iMessage",type:"text"}),a().createElement("button",{onClick:N},"Send Message")),a().createElement(l.Z,{onClick:N},a().createElement(d.Z,{className:"chat__send"}))))))}))(q||(q=M(["\n  .chat {\n    display: flex;\n    flex-direction: column;\n    flex: 0.65;\n    height: 100vh;\n    background-color: white;\n  }\n  .chat__nav {\n    height:20px;\n    background-color: #f5f5f5;\n  }\n  .nav__icon {\n    padding:0px;\n  }\n  .chat__header {\n    padding: 10px;\n    padding-top:0px;\n    padding-bottom:0px;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid lightgray;\n    background-color: #f5f5f5;\n  }\n\n  .chat__header > h4 {\n    font-weight: 500;\n    color: gray;\n  }\n\n  .chat__name {\n    color: black;\n  }\n\n  .chat__input {\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    border-top: 1px solid lightgray;\n    background-color: #f5f5f5;\n  }\n\n  .chat__input > form {\n    flex: 1;\n  }\n\n  .chat__messages {\n    flex: 1;\n    overflow: scroll;\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .chat__messages::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .chat__messages {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n  .chat__input > form > input {\n    width: 98%;\n    outline-width: 0;\n    border: 1px solid lightgray;\n    border-radius: 999px;\n    padding: 5px;\n  }\n\n  .chat__input > form > button {\n    display: none;\n  }\n"]))),K=(0,o.ZP)((function(e){var t,n,r,o,s=e.id,i=e.chatName,c=e.info,l=e.className;return a().createElement("div",{className:l},a().createElement("div",{className:"sidebarChat","data-chatid":s},a().createElement(u.Z,{src:null===(t=c[0])||void 0===t?void 0:t.photo}),a().createElement("div",{className:"sidebarChat__info"},a().createElement("h3",null,i),c.length>0&&void 0!==(null===(n=c[0])||void 0===n?void 0:n.message)&&a().createElement(a().Fragment,null,a().createElement("p",null,null===(r=c[0])||void 0===r?void 0:r.message),a().createElement("small",null,h.WU(new Date(null===(o=c[0])||void 0===o?void 0:o.timestamp)))))))}))(J||(J=M(["\n  .sidebarChat {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    border-bottom: 1px solid lightgray;\n    cursor: pointer;\n  }\n\n  .sidebarChat:hover {\n    background-color: #3e93fd;\n    color: white;\n  }\n\n  .sidebarChat__info {\n    margin-left: 15px;\n    position: relative;\n    width: 100%;\n  }\n\n  .sidebarChat__info > small {\n    position: absolute;\n    top: 5px;\n    right: 0;\n  }\n"]))),Q=o.ZP.div(H||(H=M(["\n  /* */\n  width: ",";\n"])),(function(e){return e.width})),Y=(0,o.ZP)((function(e){var t=e.className,n=G((function(e){return{mode:e.mode,currentUser:e.currentUser,chats:e.chats,chatInfo:e.chatInfo,initChat:e.initChat}}),g.Z),r=n.mode,o=n.currentUser,s=n.chats,i=n.chatInfo,c=n.initChat;return console.log("SIDEBAR ",s,i),a().createElement(Q,{width:1===r?"40%":"100%"},a().createElement("div",{className:t},a().createElement("div",{className:"sidebar"},a().createElement("div",{className:"sidebar__header"},a().createElement(u.Z,{src:(null==o?void 0:o.image)||"",className:"sidebar__avatar"}),a().createElement("div",{className:"sidebar__input"},a().createElement(p.Z,null),a().createElement("input",{placeholder:"Search"}))),a().createElement("div",{className:"sidebar__chats"},s.map((function(e){var t=e.chatId,n=e.name;return a().createElement("div",{key:t,onClick:b(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({chatId:t,name:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},a().createElement(K,{id:t,info:i[t]||[],chatName:n}))}))))))}))(Z||(Z=M(["\n  .sidebar {\n    flex: 0.35;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    border-right: 1px solid lightgray;\n  }\n\n  .sidebar__header {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    height: 50px;\n  }\n\n  .sidebar__avatar {\n    cursor: pointer;\n    margin: 10px;\n  }\n\n  .sidebar__input {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    background-color: #e1e1e1;\n    color: gray;\n    border-radius: 5px;\n  }\n\n  .sidebar__input > input {\n    border: none;\n    background: transparent;\n    outline-width: 0;\n  }\n\n  .sidebar__chats {\n    overflow: scroll;\n  }\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .sidebar__chats::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .sidebar__chats {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n"]))),V=o.ZP.div(F||(F=M(["\n  /* */\n  display: flex;\n"]))),X=function(e){var t=e.data,n=e.appType;console.log("DATA PROPS ",t,n);var o=G((function(e){return{mode:e.mode,currentUser:e.currentUser,createTestMessage:e.createTestMessage,currentChat:e.currentChat,loading:e.loading,init:e.init,check:e.check,chats:e.chats,newChats:e.newChats}}),g.Z),s=o.mode,i=o.loading,c=o.init,u=o.check,l=o.chats,d=o.newChats,f=o.currentChat,p=o.createTestMessage,h=o.currentUser,m=(0,r.useRef)(!1);(0,r.useEffect)((function(){console.log("Strict mode RENDERING twice..."),m.current||c(n),m.current=!0}),[]),(0,r.useEffect)((function(){i||(console.log("CALL CHECK ",u()),console.log("CHATS ",l))}),[i]),(0,r.useEffect)((function(){console.log("NEW CHATS ",d)}),[d]);var y=function(){var e=b(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null==f?void 0:f.chatId)){e.next=6;break}if(null===(t=prompt("Please enter msg"))||""===t){e.next=6;break}return console.log("MSG ",t),e.next=6,p(t,f.chatId,h.uuid,f.chatId);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=b(v().mark((function e(){var t,n,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=prompt("Please enter msg"))||""===t){e.next=7;break}return n=document.querySelectorAll("div[data-chatId]"),console.log("MSG2 ",n,t),r=n[3].dataset.chatid,e.next=7,p(t,r,h.uuid,r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a().createElement(a().Fragment,null,!i&&a().createElement(V,null,a().createElement("div",null,a().createElement("button",{onClick:y},"New Message"),a().createElement("button",{onClick:S},"New Message2")),(1===s||2===s)&&a().createElement(Y,null),(1===s||3===s)&&a().createElement(W,{newChats:d})),i&&a().createElement("div",null,"Loading"))};X.displayName="IMessage"}}]);