(()=>{var t={7162:(t,e,r)=>{t.exports=r(5047)},3819:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1176:(t,e,r)=>{var n=r(5052);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},6570:(t,e,r)=>{"use strict";var n=r(9996).forEach,o=r(6038)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},9540:(t,e,r)=>{var n=r(905),o=r(4237),i=r(3231),a=function(t){return function(e,r,a){var u,c=n(e),s=o(c.length),l=i(a,s);if(t&&r!=r){for(;s>l;)if((u=c[l++])!=u)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},9996:(t,e,r)=>{var n=r(7636),o=r(9337),i=r(2991),a=r(4237),u=r(7501),c=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,l=4==t,f=6==t,p=7==t,h=5==t||f;return function(d,y,v,m){for(var g,b,x=i(d),w=o(x),S=n(y,v,3),E=a(w.length),O=0,_=m||u,j=e?_(d,E):r||p?_(d,0):void 0;E>O;O++)if((h||O in w)&&(b=S(g=w[O],O,x),t))if(e)j[O]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:c.call(j,g)}else switch(t){case 4:return!1;case 7:c.call(j,g)}return f?-1:s||l?l:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},1460:(t,e,r)=>{var n=r(4229),o=r(95),i=r(6358),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},6038:(t,e,r)=>{"use strict";var n=r(4229);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},7501:(t,e,r)=>{var n=r(5052),o=r(3718),i=r(95)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7079:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},7081:(t,e,r)=>{var n=r(816),o=r(4826),i=r(7933),a=r(1787);t.exports=function(t,e){for(var r=o(e),u=a.f,c=i.f,s=0;s<r.length;s++){var l=r[s];n(t,l)||u(t,l,c(e,l))}}},5762:(t,e,r)=>{var n=r(7400),o=r(1787),i=r(5358);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},5358:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2324:(t,e,r)=>{"use strict";var n=r(2066),o=r(1787),i=r(5358);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},7400:(t,e,r)=>{var n=r(4229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:(t,e,r)=>{var n=r(9859),o=r(5052),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},5694:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8801:(t,e,r)=>{var n=r(7079),o=r(9859);t.exports="process"==n(o.process)},598:(t,e,r)=>{var n=r(1333);t.exports=n("navigator","userAgent")||""},6358:(t,e,r)=>{var n,o,i=r(9859),a=r(598),u=i.process,c=u&&u.versions,s=c&&c.v8;s?o=(n=s.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},3837:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:(t,e,r)=>{var n=r(9859),o=r(7933).f,i=r(5762),a=r(7487),u=r(2079),c=r(7081),s=r(6541);t.exports=function(t,e){var r,l,f,p,h,d=t.target,y=t.global,v=t.stat;if(r=y?n:v?n[d]||u(d,{}):(n[d]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(h=o(r,l))&&h.value:r[l],!s(y?l:d+(v?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},4229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7636:(t,e,r)=>{var n=r(3819);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},1333:(t,e,r)=>{var n=r(9276),o=r(9859),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},9859:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},816:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},5977:t=>{t.exports={}},4394:(t,e,r)=>{var n=r(7400),o=r(4229),i=r(2635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:(t,e,r)=>{var n=r(4229),o=r(7079),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},8511:(t,e,r)=>{var n=r(5353),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},6407:(t,e,r)=>{var n,o,i,a=r(8694),u=r(9859),c=r(5052),s=r(5762),l=r(816),f=r(5353),p=r(4399),h=r(5977),d=u.WeakMap;if(a){var y=f.state||(f.state=new d),v=y.get,m=y.has,g=y.set;n=function(t,e){return e.facade=t,g.call(y,t,e),e},o=function(t){return v.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var b=p("state");h[b]=!0,n=function(t,e){return e.facade=t,s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3718:(t,e,r)=>{var n=r(7079);t.exports=Array.isArray||function(t){return"Array"==n(t)}},6541:(t,e,r)=>{var n=r(4229),o=/#|\.prototype\./,i=function(t,e){var r=u[a(t)];return r==s||r!=c&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},5052:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4231:t=>{t.exports=!1},3839:(t,e,r)=>{var n=r(8801),o=r(6358),i=r(4229);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},8694:(t,e,r)=>{var n=r(9859),o=r(8511),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},1787:(t,e,r)=>{var n=r(7400),o=r(4394),i=r(1176),a=r(2066),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},7933:(t,e,r)=>{var n=r(7400),o=r(9195),i=r(5358),a=r(905),u=r(2066),c=r(816),s=r(4394),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=u(e,!0),s)try{return l(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},8151:(t,e,r)=>{var n=r(140),o=r(3837).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},894:(t,e)=>{e.f=Object.getOwnPropertySymbols},140:(t,e,r)=>{var n=r(816),o=r(905),i=r(9540).indexOf,a=r(5977);t.exports=function(t,e){var r,u=o(t),c=0,s=[];for(r in u)!n(a,r)&&n(u,r)&&s.push(r);for(;e.length>c;)n(u,r=e[c++])&&(~i(s,r)||s.push(r));return s}},5632:(t,e,r)=>{var n=r(140),o=r(3837);t.exports=Object.keys||function(t){return n(t,o)}},9195:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},4826:(t,e,r)=>{var n=r(1333),o=r(8151),i=r(894),a=r(1176);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},9276:(t,e,r)=>{var n=r(9859);t.exports=n},7487:(t,e,r)=>{var n=r(9859),o=r(5762),i=r(816),a=r(2079),u=r(8511),c=r(6407),s=c.get,l=c.enforce,f=String(String).split("String");(t.exports=function(t,e,r,u){var c,s=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,h=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(c=l(r)).source||(c.source=f.join("string"==typeof e?e:""))),t!==n?(s?!h&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},8885:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},2079:(t,e,r)=>{var n=r(9859),o=r(5762);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},4399:(t,e,r)=>{var n=r(3036),o=r(1441),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:(t,e,r)=>{var n=r(9859),o=r(2079),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},3036:(t,e,r)=>{var n=r(4231),o=r(5353);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},3231:(t,e,r)=>{var n=r(6051),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},905:(t,e,r)=>{var n=r(9337),o=r(8885);t.exports=function(t){return n(o(t))}},6051:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},4237:(t,e,r)=>{var n=r(6051),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},2991:(t,e,r)=>{var n=r(8885);t.exports=function(t){return Object(n(t))}},2066:(t,e,r)=>{var n=r(5052);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1441:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},6969:(t,e,r)=>{var n=r(3839);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},95:(t,e,r)=>{var n=r(9859),o=r(3036),i=r(816),a=r(1441),u=r(3839),c=r(6969),s=o("wks"),l=n.Symbol,f=c?l:l&&l.withoutSetter||a;t.exports=function(t){return i(s,t)&&(u||"string"==typeof s[t])||(u&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},8178:(t,e,r)=>{"use strict";var n=r(3103),o=r(4229),i=r(3718),a=r(5052),u=r(2991),c=r(4237),s=r(2324),l=r(7501),f=r(1460),p=r(95),h=r(6358),d=p("isConcatSpreadable"),y=9007199254740991,v="Maximum allowed index exceeded",m=h>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),g=f("concat"),b=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!m||!g},{concat:function(t){var e,r,n,o,i,a=u(this),f=l(a,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(b(i=-1===e?a:arguments[e])){if(p+(o=c(i.length))>y)throw TypeError(v);for(r=0;r<o;r++,p++)r in i&&s(f,p,i[r])}else{if(p>=y)throw TypeError(v);s(f,p++,i)}return f.length=p,f}})},8695:(t,e,r)=>{"use strict";var n=r(3103),o=r(6570);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},3450:(t,e,r)=>{"use strict";var n=r(3103),o=r(9996).map;n({target:"Array",proto:!0,forced:!r(1460)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},6936:(t,e,r)=>{var n=r(7400),o=r(1787).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&o(i,c,{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},4769:(t,e,r)=>{var n=r(3103),o=r(2991),i=r(5632);n({target:"Object",stat:!0,forced:r(4229)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},1939:(t,e,r)=>{var n=r(9859),o=r(5694),i=r(6570),a=r(5762);for(var u in o){var c=n[u],s=c&&c.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},2874:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=r(9297),a=r(4665),u=r(9732),c=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.renderGroup=function(t,e){var r=this.props,n=r.bubblesCentered,o=r.bubbleStyles,c=r.showSenderName,s=r.chatBubble,l=r.senderName,f=s||a.default,p=t[0],h=t.map((function(t,e){return i.createElement(f,{key:e,message:t,bubblesCentered:n,bubbleStyles:o})}));return i.createElement("div",{style:u.default.chatbubbleWrapper},c&&""!==(l||p.senderName)&&0!==p.id&&i.createElement("h5",{style:u.default.bubbleGroupHeader},l||p.senderName),h)},e.prototype.render=function(){var t=this.props,e=t.messages,r=t.id;return this.renderGroup(e,r)},e}(i.Component);e.default=c},9732:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={chatbubbleWrapper:{marginTop:10,marginBottom:10,overflow:"auto",position:"relative"},bubbleGroupHeader:{margin:0,fontSize:14,fontWeight:"400",color:"#999"}}},4665:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=r(9297),u=r(5006),c={userBubble:{},chatbubble:{},text:{}},s=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.render=function(){var t=this.props.bubblesCentered,e=this.props.bubbleStyles,r=(e=e||c).userBubble,n=e.chatbubble,o=e.text,s=0===this.props.message.id?i({},u.default.chatbubble,t?{}:u.default.chatbubbleOrientationNormal,n,r):i({},u.default.chatbubble,u.default.recipientChatbubble,t?{}:u.default.recipientChatbubbleOrientationNormal,r,n);return a.createElement("div",{style:i({},u.default.chatbubbleWrapper)},a.createElement("div",{style:s},a.createElement("p",{style:i({},u.default.p,o)},this.props.message.message)))},e}(a.Component);e.default=s},5006:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={chatbubbleWrapper:{overflow:"auto"},chatbubble:{backgroundColor:"#0084FF",borderRadius:20,marginTop:1,marginRight:"auto",marginBottom:1,marginLeft:"auto",maxWidth:425,paddingTop:8,paddingBottom:8,paddingLeft:14,paddingRight:14,width:"-webkit-fit-content"},chatbubbleOrientationNormal:{float:"right"},recipientChatbubble:{backgroundColor:"#ccc"},recipientChatbubbleOrientationNormal:{float:"left"},p:{color:"#FFFFFF",fontSize:16,fontWeight:"300",margin:0}}},5432:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=r(9297),u=r(2874),c=r(4665),s=r(6008),l=r(7681),f=r(722),p=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.componentDidMount=function(){this.scrollToBottom()},e.prototype.componentDidUpdate=function(){this.scrollToBottom()},e.prototype.scrollToBottom=function(){var t=this.chat.scrollHeight-this.chat.clientHeight;this.chat.scrollTop=t>0?t:0},e.prototype.renderMessages=function(t){var e=this.props,r=e.isTyping,n=e.bubbleStyles,o=e.chatBubble,s=e.showSenderName,p=o||c.default,h=[],d=t.map((function(e,r){if(h.push(e),r===t.length-1||t[r+1].id!==e.id){var o=h;return h=[],a.createElement(u.default,{key:r,messages:o,id:e.id,showSenderName:s,chatBubble:p,bubbleStyles:n})}return null}));return r&&d.push(a.createElement("div",{key:"isTyping",style:i({},f.default.chatbubbleWrapper)},a.createElement(p,{message:new l.default({id:1,message:"...",senderName:""}),bubbleStyles:n}))),d},e.prototype.render=function(){var t=this,e=this.props.hasInputField&&a.createElement(s.default,null),r=this.props.maxHeight;return a.createElement("div",{id:"chat-panel",style:f.default.chatPanel},a.createElement("div",{ref:function(e){t.chat=e},className:"chat-history",style:i({},f.default.chatHistory,{maxHeight:r})},a.createElement("div",{className:"chat-messages"},this.renderMessages(this.props.messages))),e)},e}(a.Component);e.default=p},722:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={chatPanel:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},chatHistory:{overflow:"auto"},chatbubbleWrapper:{marginTop:10,marginBottom:10,overflow:"auto",position:"relative"},img:{borderRadius:100,bottom:0,left:0,position:"absolute",width:36,zIndex:100}}},6008:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(9297),o={chatInput:{flex:1},inputStyle:{border:"none",borderTopWidth:"1",borderTopStyle:"solid",borderTopColor:"#ddd",fontSize:"16",outline:"none",padding:"30",width:"100%"}};e.default=function(t){var e=t.inputStyles,r=t.inputPlaceholder;return n.default.createElement("div",{className:"chat-input",style:o.chatInput},n.default.createElement("input",{type:"text",style:e||o.inputStyle,placeholder:r}))}},7681:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){this.id=t.id,this.message=t.message,this.senderName=t.senderName||void 0};e.default=r},2877:(t,e,r)=>{"use strict";r(4665).default,r(2874).default;var n=r(5432);e.qk=n.default,r(6008).default;var o=r(7681);e.v0=o.default},5047:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=_(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function m(){}function g(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(P([])));w&&w!==r&&n.call(w,i)&&(b=w);var S=g.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return m.prototype=S.constructor=g,g.constructor=m,m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},E(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(S),c(S,u,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},9297:t=>{"use strict";t.exports=require("react")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>_});var t=r(9297),e=r.n(t);function o(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)}))}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function c(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=r(7162),f=r.n(l);r(8178),r(8695),r(1939),r(6936),r(3450),r(4769);const p=require("styled-components");var h=r.n(p);const d=function(t){var r=t.onCreate,n=s(e().useState(""),2),o=n[0],i=n[1];return e().createElement("div",{style:{position:"absolute",bottom:0,left:0,right:"60px"}},e().createElement("input",{name:"msg",placeholder:"your message",onChange:function(t){return i(t.target.value)},defaultValue:o,onKeyDown:function(t){"Enter"===t.key&&(console.log("SEND MESSAGE",o),r(o))},className:"message-input",style:{border:"none",borderTop:"1px solid #ddd",fontSize:"16px",padding:"10px",width:"100%"}}))};var y=r(2877);const v=function(t){var r=t.messages,n=t.sender,o=t.senderName,i=t.receiverName;return e().createElement(y.qk,{maxHeight:window.innerHeight-80,messages:r.map((function(t){return new y.v0({id:t.sender===n?0:t.messageId,senderName:t.sender===n?o:i,message:t.body})})),isTyping:!1,showSenderName:!0,bubblesCentered:!1})},m=require("@prifina/hooks");var g=h().div.withConfig({displayName:"Container__StyledWrapper",componentId:"cg8pc3-0"})(["width:400px;display:flex;justify-content:flex-end;flex-direction:row;"]),b=h().div.withConfig({displayName:"Container__StyledClose",componentId:"cg8pc3-1"})(['width:32px;height:32px;opacity:0.3;&:hover{opacity:1;cursor:pointer;}::before,::after{position:absolute;top:6px;content:" ";height:33px;width:2px;background-color:#333;}::before{transform:rotate(45deg);}::after{transform:rotate(-45deg);}']),x=h().div.withConfig({displayName:"Container__StyledBox",componentId:"cg8pc3-2"})(["width:400px;height:600px;position:relative;top:0px;"]),w=h().div.withConfig({displayName:"Container__MessageBox",componentId:"cg8pc3-3"})(["padding:5px;overflow-y:scroll;overflow-x:hidden;height:calc(600px - 79px);"]),S=h().div.withConfig({displayName:"Container__AddressBook",componentId:"cg8pc3-4"})(["width:400px;height:600px;overflow-y:scroll;overflow-x:hidden;"]),E="chatWidget",O=function(){var r=(0,m.usePrifina)(),n=r.Prifina,o=(r.registerHooks,r.onUpdate),a=r.currentUser,u=(r.subscriptionTest,r.unSubscribe,new n({appId:E})),l=s((0,t.useState)(!0),2),p=l[0],h=l[1],y=s((0,t.useState)([]),2),O=y[0],_=y[1],j=s((0,t.useState)([]),2),L=j[0],T=j[1],P=s((0,t.useState)(-1),2),C=P[0],N=P[1],M=(0,t.useRef)(),k=(0,t.useRef)({}),A=function(t){console.log("UPDATE TEST ",t),t.hasOwnProperty("data")?t.data.hasOwnProperty("addMessage")&&(-1===C?(k.current[t.data.addMessage.sender]++,_((function(e){return[].concat(c(e),[t.data.addMessage])}))):_((function(e){return[].concat(c(e),[t.data.addMessage])})),console.log("MESSAGE COUNT ",k.current)):_((function(e){return[].concat(c(e),[t])}))};(0,t.useEffect)(i(f().mark((function t(){var e,r,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M.current=o(E,A),t.next=3,u.core.queries.getAddressBook();case 3:return e=t.sent,console.log("ADDRESSBOOK ",e),"string"==typeof e.data.getUserAddressBook.addressBook?(r=JSON.parse(e.data.getUserAddressBook.addressBook),T(r),r.forEach((function(t){k.current[t]=0}))):(n=e.data.getUserAddressBook,T(n),n.forEach((function(t){k.current[t]=0}))),t.next=8,u.core.subscriptions.addMessage(M.current);case 8:console.log(u);case 9:case"end":return t.stop()}}),t)}))),[]);var I=(0,t.useCallback)((function(t){console.log("CLICK ",t,L,M),N(t),h(!1)}),[L]),F=function(){var t=i(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("MSG ",e),console.log("CONTACT ",L[C].name),t.next=4,u.core.mutations.createMessage({body:e,sender:a.uuid,receiver:L[C].uuid});case 4:_((function(t){return[].concat(c(t),[{body:e,sender:a.uuid,receiver:L[C].uuid}])}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return e().createElement(e().Fragment,null,p&&L.length>0&&e().createElement(S,null,e().createElement("h3",{style:{textAlign:"center"}},"Contacts"),e().createElement("hr",null),e().createElement("ul",null,L.map((function(t,r){return e().createElement("li",{style:{cursor:"pointer"},onClick:function(){return I(r)},key:"contact-"+r},t.name," ",Object.keys(k.current).length>0&&k.current[t.uuid]>0&&k.current[uuid])})))),!p&&e().createElement(x,null,e().createElement(g,null,e().createElement(b,{onClick:function(){N(-1),h(!0),_([])}})),e().createElement(w,null,O.length>0&&e().createElement(v,{messages:O,sender:a.uuid,senderName:a.name,receiverName:L[C].name})),e().createElement(d,{onCreate:F})))};const _=function(t){return e().createElement("div",{className:"App"},e().createElement(O,null))}})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();