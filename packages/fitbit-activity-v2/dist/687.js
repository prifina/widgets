(self.webpackChunk_prifina_widgets_fitbit_activity_v2=self.webpackChunk_prifina_widgets_fitbit_activity_v2||[]).push([[687],{7111:(t,r,e)=>{var n=e(6733),o=e(9821),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},8505:(t,r,e)=>{var n=e(6733),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},1176:(t,r,e)=>{var n=e(5052),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},9540:(t,r,e)=>{var n=e(905),o=e(3231),i=e(9646),u=function(t){return function(r,e,u){var a,c=n(r),f=i(c),p=o(u,f);if(t&&e!=e){for(;f>p;)if((a=c[p++])!=a)return!0}else for(;f>p;p++)if((t||p in c)&&c[p]===e)return t||p||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},7079:(t,r,e)=>{var n=e(5968),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},1589:(t,r,e)=>{var n=e(1601),o=e(6733),i=e(7079),u=e(95)("toStringTag"),a=Object,c="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=a(t),u))?e:c?i(r):"Object"==(n=i(r))&&o(r.callee)?"Arguments":n}},7081:(t,r,e)=>{var n=e(8270),o=e(4826),i=e(7933),u=e(1787);t.exports=function(t,r,e){for(var a=o(r),c=u.f,f=i.f,p=0;p<a.length;p++){var s=a[p];n(t,s)||e&&n(e,s)||c(t,s,f(r,s))}}},5762:(t,r,e)=>{var n=e(7400),o=e(1787),i=e(5358);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},5358:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},4768:(t,r,e)=>{var n=e(6733),o=e(1787),i=e(6039),u=e(8400);t.exports=function(t,r,e,a){a||(a={});var c=a.enumerable,f=void 0!==a.name?a.name:r;if(n(e)&&i(e,f,a),a.global)c?t[r]=e:u(r,e);else{try{a.unsafe?t[r]&&(c=!0):delete t[r]}catch(t){}c?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},8400:(t,r,e)=>{var n=e(9859),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},7400:(t,r,e)=>{var n=e(4229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3777:t=>{var r="object"==typeof document&&document.all,e=void 0===r&&void 0!==r;t.exports={all:r,IS_HTMLDDA:e}},2635:(t,r,e)=>{var n=e(9859),o=e(5052),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8801:(t,r,e)=>{var n=e(7079),o=e(9859);t.exports="process"==n(o.process)},598:(t,r,e)=>{var n=e(1333);t.exports=n("navigator","userAgent")||""},6358:(t,r,e)=>{var n,o,i=e(9859),u=e(598),a=i.process,c=i.Deno,f=a&&a.versions||c&&c.version,p=f&&f.v8;p&&(o=(n=p.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},3837:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:(t,r,e)=>{var n=e(9859),o=e(7933).f,i=e(5762),u=e(4768),a=e(8400),c=e(7081),f=e(6541);t.exports=function(t,r){var e,p,s,l,v,y=t.target,b=t.global,g=t.stat;if(e=b?n:g?n[y]||a(y,{}):(n[y]||{}).prototype)for(p in r){if(l=r[p],s=t.dontCallGetSet?(v=o(e,p))&&v.value:e[p],!f(b?p:y+(g?".":"#")+p,t.forced)&&void 0!==s){if(typeof l==typeof s)continue;c(l,s)}(t.sham||s&&s.sham)&&i(l,"sham",!0),u(e,p,l,t)}}},4229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7188:(t,r,e)=>{var n=e(4229);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},266:(t,r,e)=>{var n=e(7188),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},1805:(t,r,e)=>{var n=e(7400),o=e(8270),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,f=a&&(!n||n&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:f}},5968:(t,r,e)=>{var n=e(7188),o=Function.prototype,i=o.bind,u=o.call,a=n&&i.bind(u,u);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},1333:(t,r,e)=>{var n=e(9859),o=e(6733),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t]):n[t]&&n[t][r]}},5300:(t,r,e)=>{var n=e(7111),o=e(9650);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},9859:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},8270:(t,r,e)=>{var n=e(5968),o=e(2991),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},5977:t=>{t.exports={}},4394:(t,r,e)=>{var n=e(7400),o=e(4229),i=e(2635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:(t,r,e)=>{var n=e(5968),o=e(4229),i=e(7079),u=Object,a=n("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):u(t)}:u},8511:(t,r,e)=>{var n=e(5968),o=e(6733),i=e(5353),u=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},6407:(t,r,e)=>{var n,o,i,u=e(1180),a=e(9859),c=e(5968),f=e(5052),p=e(5762),s=e(8270),l=e(5353),v=e(4399),y=e(5977),b="Object already initialized",g=a.TypeError,h=a.WeakMap;if(u||l.state){var x=l.state||(l.state=new h),m=c(x.get),d=c(x.has),S=c(x.set);n=function(t,r){if(d(x,t))throw g(b);return r.facade=t,S(x,t,r),r},o=function(t){return m(x,t)||{}},i=function(t){return d(x,t)}}else{var O=v("state");y[O]=!0,n=function(t,r){if(s(t,O))throw g(b);return r.facade=t,p(t,O,r),r},o=function(t){return s(t,O)?t[O]:{}},i=function(t){return s(t,O)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!f(r)||(e=o(r)).type!==t)throw g("Incompatible receiver, "+t+" required");return e}}}},6733:(t,r,e)=>{var n=e(3777),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},6541:(t,r,e)=>{var n=e(4229),o=e(6733),i=/#|\.prototype\./,u=function(t,r){var e=c[a(t)];return e==p||e!=f&&(o(r)?n(r):!!r)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",p=u.POLYFILL="P";t.exports=u},9650:t=>{t.exports=function(t){return null==t}},5052:(t,r,e)=>{var n=e(6733),o=e(3777),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},4231:t=>{t.exports=!1},9395:(t,r,e)=>{var n=e(1333),o=e(6733),i=e(1321),u=e(6969),a=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,a(t))}},9646:(t,r,e)=>{var n=e(4237);t.exports=function(t){return n(t.length)}},6039:(t,r,e)=>{var n=e(4229),o=e(6733),i=e(8270),u=e(7400),a=e(1805).CONFIGURABLE,c=e(8511),f=e(6407),p=f.enforce,s=f.get,l=Object.defineProperty,v=u&&!n((function(){return 8!==l((function(){}),"length",{value:8}).length})),y=String(String).split("String"),b=t.exports=function(t,r,e){"Symbol("===String(r).slice(0,7)&&(r="["+String(r).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!i(t,"name")||a&&t.name!==r)&&(u?l(t,"name",{value:r,configurable:!0}):t.name=r),v&&e&&i(e,"arity")&&t.length!==e.arity&&l(t,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?u&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=p(t);return i(n,"source")||(n.source=y.join("string"==typeof r?r:"")),t};Function.prototype.toString=b((function(){return o(this)&&s(this).source||c(this)}),"toString")},917:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},1787:(t,r,e)=>{var n=e(7400),o=e(4394),i=e(7137),u=e(1176),a=e(9310),c=TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor;r.f=n?i?function(t,r,e){if(u(t),r=a(r),u(e),"function"==typeof t&&"prototype"===r&&"value"in e&&"writable"in e&&!e.writable){var n=p(t,r);n&&n.writable&&(t[r]=e.value,e={configurable:"configurable"in e?e.configurable:n.configurable,enumerable:"enumerable"in e?e.enumerable:n.enumerable,writable:!1})}return f(t,r,e)}:f:function(t,r,e){if(u(t),r=a(r),u(e),o)try{return f(t,r,e)}catch(t){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},7933:(t,r,e)=>{var n=e(7400),o=e(266),i=e(9195),u=e(5358),a=e(905),c=e(9310),f=e(8270),p=e(4394),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=a(t),r=c(r),p)try{return s(t,r)}catch(t){}if(f(t,r))return u(!o(i.f,t,r),t[r])}},8151:(t,r,e)=>{var n=e(140),o=e(3837).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},894:(t,r)=>{r.f=Object.getOwnPropertySymbols},1321:(t,r,e)=>{var n=e(5968);t.exports=n({}.isPrototypeOf)},140:(t,r,e)=>{var n=e(5968),o=e(8270),i=e(905),u=e(9540).indexOf,a=e(5977),c=n([].push);t.exports=function(t,r){var e,n=i(t),f=0,p=[];for(e in n)!o(a,e)&&o(n,e)&&c(p,e);for(;r.length>f;)o(n,e=r[f++])&&(~u(p,e)||c(p,e));return p}},5632:(t,r,e)=>{var n=e(140),o=e(3837);t.exports=Object.keys||function(t){return n(t,o)}},9195:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},6540:(t,r,e)=>{var n=e(5968),o=e(1176),i=e(8505);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return o(e),i(n),r?t(e,n):e.__proto__=n,e}}():void 0)},4059:(t,r,e)=>{"use strict";var n=e(1601),o=e(1589);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2914:(t,r,e)=>{var n=e(266),o=e(6733),i=e(5052),u=TypeError;t.exports=function(t,r){var e,a;if("string"===r&&o(e=t.toString)&&!i(a=n(e,t)))return a;if(o(e=t.valueOf)&&!i(a=n(e,t)))return a;if("string"!==r&&o(e=t.toString)&&!i(a=n(e,t)))return a;throw u("Can't convert object to primitive value")}},4826:(t,r,e)=>{var n=e(1333),o=e(5968),i=e(8151),u=e(894),a=e(1176),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(a(t)),e=u.f;return e?c(r,e(t)):r}},8885:(t,r,e)=>{var n=e(9650),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},4399:(t,r,e)=>{var n=e(3036),o=e(1441),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:(t,r,e)=>{var n=e(9859),o=e(8400),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},3036:(t,r,e)=>{var n=e(4231),o=e(5353);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.25.3",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE",source:"https://github.com/zloirock/core-js"})},4860:(t,r,e)=>{var n=e(6358),o=e(4229);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},3231:(t,r,e)=>{var n=e(3329),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},905:(t,r,e)=>{var n=e(9337),o=e(8885);t.exports=function(t){return n(o(t))}},3329:(t,r,e)=>{var n=e(917);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},4237:(t,r,e)=>{var n=e(3329),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},2991:(t,r,e)=>{var n=e(8885),o=Object;t.exports=function(t){return o(n(t))}},2066:(t,r,e)=>{var n=e(266),o=e(5052),i=e(9395),u=e(5300),a=e(2914),c=e(95),f=TypeError,p=c("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,c=u(t,p);if(c){if(void 0===r&&(r="default"),e=n(c,t,r),!o(e)||i(e))return e;throw f("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},9310:(t,r,e)=>{var n=e(2066),o=e(9395);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},1601:(t,r,e)=>{var n={};n[e(95)("toStringTag")]="z",t.exports="[object z]"===String(n)},3326:(t,r,e)=>{var n=e(1589),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},9821:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},1441:(t,r,e)=>{var n=e(5968),o=0,i=Math.random(),u=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},6969:(t,r,e)=>{var n=e(4860);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7137:(t,r,e)=>{var n=e(7400),o=e(4229);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1180:(t,r,e)=>{var n=e(9859),o=e(6733),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},95:(t,r,e)=>{var n=e(9859),o=e(3036),i=e(8270),u=e(1441),a=e(4860),c=e(6969),f=o("wks"),p=n.Symbol,s=p&&p.for,l=c?p:p&&p.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!a&&"string"!=typeof f[t]){var r="Symbol."+t;a&&i(p,t)?f[t]=p[t]:f[t]=c&&s?s(r):l(r)}return f[t]}},8188:(t,r,e)=>{var n=e(1601),o=e(4768),i=e(4059);n||o(Object.prototype,"toString",i,{unsafe:!0})}}]);