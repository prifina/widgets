(()=>{var t={3819:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1176:(t,e,r)=>{var n=r(5052);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},9540:(t,e,r)=>{var n=r(905),o=r(4237),i=r(3231),a=function(t){return function(e,r,a){var s,u=n(e),c=o(u.length),f=i(a,c);if(t&&r!=r){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},9996:(t,e,r)=>{var n=r(7636),o=r(9337),i=r(2991),a=r(4237),s=r(7501),u=[].push,c=function(t){var e=1==t,r=2==t,c=3==t,f=4==t,p=6==t,l=7==t,d=5==t||p;return function(h,v,g,y){for(var m,x,b=i(h),w=o(b),S=n(v,g,3),I=a(w.length),E=0,O=y||s,T=e?O(h,I):r||l?O(h,0):void 0;I>E;E++)if((d||E in w)&&(x=S(m=w[E],E,b),t))if(e)T[E]=x;else if(x)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:u.call(T,m)}else switch(t){case 4:return!1;case 7:u.call(T,m)}return p?-1:c||f?f:T}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},1460:(t,e,r)=>{var n=r(4229),o=r(95),i=r(6358),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},7501:(t,e,r)=>{var n=r(5052),o=r(3718),i=r(95)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},7079:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},7081:(t,e,r)=>{var n=r(816),o=r(4826),i=r(7933),a=r(1787);t.exports=function(t,e){for(var r=o(e),s=a.f,u=i.f,c=0;c<r.length;c++){var f=r[c];n(t,f)||s(t,f,u(e,f))}}},5762:(t,e,r)=>{var n=r(7400),o=r(1787),i=r(5358);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},5358:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2324:(t,e,r)=>{"use strict";var n=r(2066),o=r(1787),i=r(5358);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},7400:(t,e,r)=>{var n=r(4229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:(t,e,r)=>{var n=r(9859),o=r(5052),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8801:(t,e,r)=>{var n=r(7079),o=r(9859);t.exports="process"==n(o.process)},598:(t,e,r)=>{var n=r(1333);t.exports=n("navigator","userAgent")||""},6358:(t,e,r)=>{var n,o,i=r(9859),a=r(598),s=i.process,u=s&&s.versions,c=u&&u.v8;c?o=(n=c.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},3837:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:(t,e,r)=>{var n=r(9859),o=r(7933).f,i=r(5762),a=r(7487),s=r(2079),u=r(7081),c=r(6541);t.exports=function(t,e){var r,f,p,l,d,h=t.target,v=t.global,g=t.stat;if(r=v?n:g?n[h]||s(h,{}):(n[h]||{}).prototype)for(f in e){if(l=e[f],p=t.noTargetGet?(d=o(r,f))&&d.value:r[f],!c(v?f:h+(g?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;u(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(r,f,l,t)}}},4229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7636:(t,e,r)=>{var n=r(3819);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},1333:(t,e,r)=>{var n=r(9276),o=r(9859),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},9859:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},816:t=>{var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},5977:t=>{t.exports={}},4394:(t,e,r)=>{var n=r(7400),o=r(4229),i=r(2635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:(t,e,r)=>{var n=r(4229),o=r(7079),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},8511:(t,e,r)=>{var n=r(5353),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},6407:(t,e,r)=>{var n,o,i,a=r(8694),s=r(9859),u=r(5052),c=r(5762),f=r(816),p=r(5353),l=r(4399),d=r(5977),h=s.WeakMap;if(a){var v=p.state||(p.state=new h),g=v.get,y=v.has,m=v.set;n=function(t,e){return e.facade=t,m.call(v,t,e),e},o=function(t){return g.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var x=l("state");d[x]=!0,n=function(t,e){return e.facade=t,c(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3718:(t,e,r)=>{var n=r(7079);t.exports=Array.isArray||function(t){return"Array"==n(t)}},6541:(t,e,r)=>{var n=r(4229),o=/#|\.prototype\./,i=function(t,e){var r=s[a(t)];return r==c||r!=u&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},5052:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4231:t=>{t.exports=!1},3839:(t,e,r)=>{var n=r(8801),o=r(6358),i=r(4229);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},8694:(t,e,r)=>{var n=r(9859),o=r(8511),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},6596:(t,e,r)=>{var n=r(9859),o=r(1017).trim,i=r(1647),a=n.parseInt,s=/^[+-]?0[Xx]/,u=8!==a(i+"08")||22!==a(i+"0x16");t.exports=u?function(t,e){var r=o(String(t));return a(r,e>>>0||(s.test(r)?16:10))}:a},1787:(t,e,r)=>{var n=r(7400),o=r(4394),i=r(1176),a=r(2066),s=Object.defineProperty;e.f=n?s:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},7933:(t,e,r)=>{var n=r(7400),o=r(9195),i=r(5358),a=r(905),s=r(2066),u=r(816),c=r(4394),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=s(e,!0),c)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},8151:(t,e,r)=>{var n=r(140),o=r(3837).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},894:(t,e)=>{e.f=Object.getOwnPropertySymbols},140:(t,e,r)=>{var n=r(816),o=r(905),i=r(9540).indexOf,a=r(5977);t.exports=function(t,e){var r,s=o(t),u=0,c=[];for(r in s)!n(a,r)&&n(s,r)&&c.push(r);for(;e.length>u;)n(s,r=e[u++])&&(~i(c,r)||c.push(r));return c}},9195:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},4826:(t,e,r)=>{var n=r(1333),o=r(8151),i=r(894),a=r(1176);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},9276:(t,e,r)=>{var n=r(9859);t.exports=n},7487:(t,e,r)=>{var n=r(9859),o=r(5762),i=r(816),a=r(2079),s=r(8511),u=r(6407),c=u.get,f=u.enforce,p=String(String).split("String");(t.exports=function(t,e,r,s){var u,c=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(u=f(r)).source||(u.source=p.join("string"==typeof e?e:""))),t!==n?(c?!d&&t[e]&&(l=!0):delete t[e],l?t[e]=r:o(t,e,r)):l?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},8885:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},2079:(t,e,r)=>{var n=r(9859),o=r(5762);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},4399:(t,e,r)=>{var n=r(3036),o=r(1441),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:(t,e,r)=>{var n=r(9859),o=r(2079),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},3036:(t,e,r)=>{var n=r(4231),o=r(5353);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1017:(t,e,r)=>{var n=r(8885),o="["+r(1647)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},3231:(t,e,r)=>{var n=r(6051),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},905:(t,e,r)=>{var n=r(9337),o=r(8885);t.exports=function(t){return n(o(t))}},6051:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},4237:(t,e,r)=>{var n=r(6051),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},2991:(t,e,r)=>{var n=r(8885);t.exports=function(t){return Object(n(t))}},2066:(t,e,r)=>{var n=r(5052);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1441:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},6969:(t,e,r)=>{var n=r(3839);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},95:(t,e,r)=>{var n=r(9859),o=r(3036),i=r(816),a=r(1441),s=r(3839),u=r(6969),c=o("wks"),f=n.Symbol,p=u?f:f&&f.withoutSetter||a;t.exports=function(t){return i(c,t)&&(s||"string"==typeof c[t])||(s&&i(f,t)?c[t]=f[t]:c[t]=p("Symbol."+t)),c[t]}},1647:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},8178:(t,e,r)=>{"use strict";var n=r(3103),o=r(4229),i=r(3718),a=r(5052),s=r(2991),u=r(4237),c=r(2324),f=r(7501),p=r(1460),l=r(95),d=r(6358),h=l("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",y=d>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=p("concat"),x=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!y||!m},{concat:function(t){var e,r,n,o,i,a=s(this),p=f(a,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(x(i=-1===e?a:arguments[e])){if(l+(o=u(i.length))>v)throw TypeError(g);for(r=0;r<o;r++,l++)r in i&&c(p,l,i[r])}else{if(l>=v)throw TypeError(g);c(p,l++,i)}return p.length=l,p}})},3450:(t,e,r)=>{"use strict";var n=r(3103),o=r(9996).map;n({target:"Array",proto:!0,forced:!r(1460)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},9120:(t,e,r)=>{var n=r(7487),o=Date.prototype,i="Invalid Date",a="toString",s=o.toString,u=o.getTime;new Date(NaN)+""!=i&&n(o,a,(function(){var t=u.call(this);return t==t?s.call(this):i}))},8995:(t,e,r)=>{var n=r(3103),o=r(6596);n({global:!0,forced:parseInt!=o},{parseInt:o})},4226:(t,e,r)=>{var n=r(3103),o=r(9859),i=r(598),a=[].slice,s=function(t){return function(e,r){var n=arguments.length>2,o=n?a.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,r)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:s(o.setTimeout),setInterval:s(o.setInterval)})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function o(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||e(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(t,r)||e(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(n),r.d(n,{default:()=>O});r(8995),r(8178),r(9120),r(4226),r(3450);const s=require("react");var u=r.n(s);const c=require("styled-components");var f=r.n(c);const p=require("@prifina/hooks"),l=require("moment");var d=r.n(l);require("moment-timezone");var h=f().div.withConfig({displayName:"Watch__TzText",componentId:"sc-1lwyqrm-0"})(["font-size:12px;text-align:center;padding:5px;"]),v=f().div.withConfig({displayName:"Watch__Container",componentId:"sc-1lwyqrm-1"})(["padding:10px;height:200px;font-size:10px;width:200px;"]),g=f().div.withConfig({displayName:"Watch__Clock",componentId:"sc-1lwyqrm-2"})(["border-radius:50%;width:",";height:",";display:flex;position:relative;margin-left:5%;margin-right:5%;box-shadow:inset 0 0 20px gray;border:4px solid black;.hours-hand{box-shadow:1px 1px 1px 1px gray;border-radius:40% 40% 20% 20%;position:absolute;border:2px solid black;background-color:white;width:3px;}.minutes-hand{box-shadow:1px 1px 1px 1px gray;position:absolute;border-radius:40% 40% 20% 20%;background-color:white;border:1px solid black;width:2px;}.seconds-hand{box-shadow:1px 1px 1px 0px red;position:absolute;border-radius:30%;background-color:red;width:1px;}.hand-pivot{box-shadow:0 0 2px 2px red;border:3px solid white;border-radius:50%;height:0px;width:0px;position:absolute;}.dial-hour{text-shadow:1px 1px 4px;position:absolute;}.dial-hour.hour-main{color:black;font-size:1.6em;font-weight:500;}"],(function(t){return t.size}),(function(t){return t.size})),y=f().span.withConfig({displayName:"Watch__Hour",componentId:"sc-1lwyqrm-3"})(["top:","px;left:","px;"],(function(t){return t.pos?t.pos.top:0}),(function(t){return t.pos?t.pos.left:0})),m=f().span.withConfig({displayName:"Watch__Pivot",componentId:"sc-1lwyqrm-4"})(["top:","px;left:","px;"],(function(t){return t.pos?t.pos.top:0}),(function(t){return t.pos?t.pos.left:0})),x=f().div.withConfig({displayName:"Watch__HoursHand",componentId:"sc-1lwyqrm-5"})(["position:absolute;top:","px;left:","px;height:","px;transform-origin:",";"],(function(t){return t.pos?t.pos.top:0}),(function(t){return t.pos?t.pos.left:0}),(function(t){return t.pos?t.pos.height:0}),(function(t){return t.pos?t.pos.origin:0})),b=f().div.withConfig({displayName:"Watch__MinutesHand",componentId:"sc-1lwyqrm-6"})(["top:","px;left:","px;height:","px;transform-origin:","px;"],(function(t){return t.pos?t.pos.top:0}),(function(t){return t.pos?t.pos.left:0}),(function(t){return t.pos?t.pos.height:0}),(function(t){return t.pos?t.pos.origin:0})),w=f().div.withConfig({displayName:"Watch__SecondsHand",componentId:"sc-1lwyqrm-7"})(["top:","px;left:","px;height:","px;transform-origin:","px;"],(function(t){return t.pos?t.pos.top:0}),(function(t){return t.pos?t.pos.left:0}),(function(t){return t.pos?t.pos.height:0}),(function(t){return t.pos?t.pos.origin:0})),S=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=window.getComputedStyle(t);return{height:t.offsetHeight+(e?-parseInt(n.borderTopWidth,10)-parseInt(n.borderBottomWidth,10):0)+(r?-parseInt(n.paddingTop,10)-parseInt(n.paddingBottom,10):0),width:t.offsetWidth+(e?-parseInt(n.borderLeftWidth,10)-parseInt(n.borderRightWidth,10):0)+(r?-parseInt(n.paddingLeft,10)-parseInt(n.paddingRight,10):0)}};var I="watchWidget",E=function(t){console.log("WATCH PROPS ",t);var e=t.offset,r=t.tz,n=t.data,c=(0,p.usePrifina)(),f=c.onUpdate,l=(new(0,c.Prifina)({appId:I}),d().tz.guess()),E=d().tz(l).utcOffset(),O={offset:-1===e?E:e,tz:""===r?l:r};void 0!==n&&n.hasOwnProperty("settings")&&n.settings.hasOwnProperty("tz")&&""!==n.settings.tz&&(O={offset:parseInt(n.settings.offset),tz:n.settings.tz},console.log("NEW DEFAULT, SETTINGS UPDATED ",O));var T=function(){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){return t.current=!0,function(){return t.current=!1}})),t}(),j=a((0,s.useState)(O),2),P=j[0],_=j[1],M=a((0,s.useState)("90%"),2),z=M[0],A=M[1],N=a((0,s.useState)([]),2),W=N[0],C=N[1],k=a((0,s.useState)({top:0,left:0}),2),H=k[0],q=k[1],D=a((0,s.useState)({top:0,left:0,height:0,origin:0}),2),B=D[0],F=D[1],L=a((0,s.useState)({top:0,left:0,height:0,origin:0}),2),R=L[0],U=L[1],G=a((0,s.useState)({top:0,left:0,height:0,origin:0}),2),Z=G[0],$=G[1];(0,s.useEffect)((function(){var t,e,r,n,o,i,a,s,u=null,c=null;if(T.current){var f=document.getElementById("clock"),p=S(f,!1,!1),l=p.height,h=p.width,v=Math.min(l,h);A(v+"px");for(var g=S(f),y=g.height,m=g.width,x=document.getElementsByClassName("dial-hour"),b=x[11].offsetHeight/10,w=0,I=-y/2+x[11].offsetHeight/2,E={x:0,y:0},O=W,j=1;j<=12;++j){var _=(e=30,n=void 0,o=void 0,i=void 0,a=void 0,s=void 0,n=(r={x:w,y:I}).x-(t=E).x,o=r.y-t.y,i=Math.sin(e*Math.PI/180),a=Math.cos(e*Math.PI/180),s=n*i+o*a,{x:n*a-o*i+t.x,y:s+t.y});w=Math.round(_.x),I=Math.round(_.y),_.x=Math.round(_.x-x[j-1].offsetWidth/2+m/2),_.y=Math.round(_.y-x[j-1].offsetHeight/2+y/2+b),O.push({top:_.y,left:_.x})}C(O);var M=document.getElementById("hand-pivot"),z=S(M,!1,!1);q({top:y/2-z.height/2,left:m/2-z.width/2});var N=document.getElementById("hours-hand"),k=document.getElementById("minutes-hand"),H=document.getElementById("seconds-hand"),D=.05*y,B=S(N,!1,!1),L=S(k,!1,!1),R=S(H,!1,!1),G=y/2-1.6*x[11].offsetHeight;F({top:1.6*x[11].offsetHeight,left:m/2-B.width/2,height:G+D,origin:"".concat(B.width/2,"px ").concat(G,"px")});var Z=y/2-1.2*x[11].offsetHeight;U({top:1.2*x[11].offsetHeight,left:m/2-L.width/2,height:Z+D,origin:"".concat(L.width/2,"px ").concat(Z)});var K=y/2-x[11].offsetHeight;$({top:x[11].offsetHeight,left:m/2-R.width/2,height:K+D,origin:"".concat(R.width/2,"px ").concat(K)});var V=new Date,X=V.getSeconds(),Y=V.getMinutes(),J=V.getHours(),Q=d().tz(d().tz.guess()).utcOffset();if(P.offset!==Q){var tt=P.offset-Q,et=tt%60;0!==et&&(Y+=et),J+=(tt-et)/60,console.log("TZ ",Q,tt,P.tz,V),console.log("TZ ",J,Y)}var rt=Y+X/60,nt=function(t,e){t.style.transform="rotate(".concat(e,"deg)")},ot=360*(J%12+rt/60)/12,it=360*rt/60,at=360*X/60;nt(N,ot),nt(k,it),nt(H,at),u=setTimeout((function(){return H.style.transition="transform 1s linear"}),0),c=setInterval((function(){it+=.1,at+=6,nt(N,ot+=360/43200),nt(k,it),nt(H,at)}),1e3)}return function(){clearTimeout(u),clearInterval(c)}}),[T,P]);var K=function(t){console.log("WATCH WIDGET UPDATE ",t),t.hasOwnProperty("settings")&&"object"===i(t.settings)&&_({offset:t.settings.offset,tz:t.settings.tz})};return(0,s.useEffect)((function(){f(I,K)}),[]),u().createElement(v,null,u().createElement(g,{id:"clock",size:z},u().createElement(x,{pos:B,className:"hours-hand",id:"hours-hand"}),u().createElement(b,{pos:R,className:"minutes-hand",id:"minutes-hand"}),u().createElement(w,{pos:Z,className:"seconds-hand",id:"seconds-hand"}),u().createElement(m,{pos:H,className:"hand-pivot",id:"hand-pivot"}),o(Array(12)).map((function(t,e){return(e+1)%3==0?u().createElement(y,{pos:W[e],key:"hour-"+e,className:"dial-hour hour-main"},e+1):u().createElement(y,{pos:W[e],key:"hour-"+e,className:"dial-hour"},e+1)}))),u().createElement(h,null,P.tz))};E.defaultProps={offset:-1,tz:""},E.displayName="Watch";const O=E})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();