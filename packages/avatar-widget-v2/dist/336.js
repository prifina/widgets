(self.webpackChunk_prifina_widgets_avatar_widget_v2=self.webpackChunk_prifina_widgets_avatar_widget_v2||[]).push([[336],{3104:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>d});var n=r(1119),o=r(6470),a=r(513),i=(r(6781),r(5734),r(9120),r(8188),r(8233),r(7162)),u=r.n(i),c=r(7900),s=r.n(c),f=r(2734),l=r(2230),p=r(3280),v=r(433),g=r(3427);const d=function(t){var e=(0,f.usePrifina)(),r=(e.stage,e.check,e.onUpdate),i=e.API,d=e.registerDataConnector,h=(t.score,(0,c.useState)()),b=(0,a.Z)(h,2),y=b[0],m=b[1],w=function(t){var e=t;console.log("OURA SCORE PROCESSED NEW DATA",e);var r=0,n=e.length-1;do{r=e[n].split(",")[1],n--}while(r<1&&n>0);m(r)},x=function(){var t=(0,o.Z)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("UPDATE ",e),e.hasOwnProperty("data")&&e.data.hasOwnProperty("content")&&"Oura/queryReadinessSummariesAsync"===e.data.dataconnector&&e.data.content.length>1&&w(e.data.content);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(t){return[t.getFullYear(),(t.getMonth()+1).toString().padStart(2,"0"),t.getDate().toString().padStart(2,"0")].join("-")};(0,c.useEffect)((function(){function t(){return(t=(0,o.Z)(u().mark((function t(){var e,o,a,c,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(l.A,x),d(l.A,[p.Z]),e=new Date,o=e.setDate(e.getDate()-7),a=S(new Date(o)),c=(0,n.Z)({},"s3::date",(0,n.Z)({},f.Op.gte,a)),t.next=8,i[l.A].Oura.queryReadinessSummariesAsync({filter:c,fields:"summary_date,score"});case 8:s=t.sent,console.log("activityResult",s);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var O="https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/Idle.fbx",j=O,E="yellow";switch(!0){case y<=64:j="https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/AlertState.fbx",E="firebrick";break;case y>=65&&y<=69:j="https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/PayAttention.fbx",E="khaki";break;case y>=70&&y<=84:j="https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/WellRecovered.fbx",E="mediumseagreen";break;case y>=85:j="https://prifina-data-352681697435-eu-west-1.s3.eu-west-1.amazonaws.com/public/ujWBeKugg514AVaE4UyaDq/native-assets/SurperCharged.fbx",E="powderblue";break;default:j=O,E="gray"}return console.log("status",j),console.log("color",E),s().createElement(v.W,{variant:"small",style:{border:"5px solid ".concat(E),display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}},s().createElement(g.Z,{id:"canvas",cameraPosition:{x:0,y:95,z:450},url:j,backgroundColor:E,ouraScore:y}),s().createElement("div",{style:{position:"absolute",left:25,bottom:25,fontSize:32,fontWeight:800}},y))}},433:(t,e,r)=>{"use strict";r.d(e,{W:()=>a});var n=r(1195),o=r(466),a=(0,n.ZP)("div").withConfig({displayName:"Container",componentId:"sc-63a22i-0"})({boxShadow:0,padding:5,borderRadius:10},(0,o.bU)({variants:{small:{height:300,width:300},medium:{height:616,width:616},mediumVertical:{height:616,width:300},mediumHorizontal:{height:300,width:616}}}))},3427:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(7900),o=r.n(n),a=r(2955),i=(r(466),r(9776));const u=function(t){var e=t.url,r=t.backgroundColor,u=t.cameraPosition,c=(t.onError,t.onLoading,t.ouraScore),s=(0,n.useRef)(null),f=new a.Clock,l=new a.PerspectiveCamera(25,1,6,1e3),p=new a.Scene,v=new a.Color(r||16777215),g=new a.WebGLRenderer({antialias:!0}),d=[],h=function t(){if(requestAnimationFrame(t),d.length>0)for(var e=0;e<d.length;e++)d[e].update(f.getDelta());g.render(p,l)},b=function(){l.position.set(u.x,u.y,u.z),p.background=v;var t=new a.HemisphereLight(16777215,4473924);t.position.set(0,200,0),p.add(t),(t=new a.DirectionalLight(16777215)).position.set(0,200,100),t.castShadow=!0,t.shadow.camera.top=180,t.shadow.camera.bottom=-100,t.shadow.camera.left=-120,t.shadow.camera.right=120,t=new a.DirectionalLight(16777215),p.add(t),t=new a.AmbientLight(2236962),p.add(t),void 0!==e&&(new i).load(e,(function(t){t.mixer=new a.AnimationMixer(t),t.mixer&&d.push(t.mixer),t.animations[0]&&t.mixer.clipAction(t.animations[0]).play(),t.traverse((function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})),console.log("object",t),p.add(t)}),(function(t){y(t)}),(function(t){m(t)})),g.setPixelRatio(window.devicePixelRatio),g.setSize(290,290),s.current.replaceChildren(g.domElement),h()},y=function(t){},m=function(t){};return(0,n.useEffect)((function(){console.log("component mounted"),b()}),[c]),console.log("should render state",c),console.log("react visor color",r),o().createElement("div",{style:{width:290,height:290,display:"flex",justifyContent:"center",alignItems:"center"},ref:s})}},2230:(t,e,r)=>{"use strict";r.d(e,{A:()=>n});var n="q5jvWQ9MXhUnUFyotc6L2t"},7111:(t,e,r)=>{var n=r(6733),o=r(9821),a=TypeError;t.exports=function(t){if(n(t))return t;throw a(o(t)+" is not a function")}},1176:(t,e,r)=>{var n=r(5052),o=String,a=TypeError;t.exports=function(t){if(n(t))return t;throw a(o(t)+" is not an object")}},9540:(t,e,r)=>{var n=r(905),o=r(3231),a=r(9646),i=function(t){return function(e,r,i){var u,c=n(e),s=a(c),f=o(i,s);if(t&&r!=r){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},7079:(t,e,r)=>{var n=r(5968),o=n({}.toString),a=n("".slice);t.exports=function(t){return a(o(t),8,-1)}},1589:(t,e,r)=>{var n=r(1601),o=r(6733),a=r(7079),i=r(95)("toStringTag"),u=Object,c="Arguments"==a(function(){return arguments}());t.exports=n?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=u(t),i))?r:c?a(e):"Object"==(n=a(e))&&o(e.callee)?"Arguments":n}},7081:(t,e,r)=>{var n=r(8270),o=r(4826),a=r(7933),i=r(1787);t.exports=function(t,e,r){for(var u=o(e),c=i.f,s=a.f,f=0;f<u.length;f++){var l=u[f];n(t,l)||r&&n(r,l)||c(t,l,s(e,l))}}},5762:(t,e,r)=>{var n=r(7400),o=r(1787),a=r(5358);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},5358:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4768:(t,e,r)=>{var n=r(6733),o=r(1787),a=r(6039),i=r(8400);t.exports=function(t,e,r,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:e;if(n(r)&&a(r,s,u),u.global)c?t[e]=r:i(e,r);else{try{u.unsafe?t[e]&&(c=!0):delete t[e]}catch(t){}c?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},8400:(t,e,r)=>{var n=r(9859),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},7400:(t,e,r)=>{var n=r(4229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3777:t=>{var e="object"==typeof document&&document.all,r=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},2635:(t,e,r)=>{var n=r(9859),o=r(5052),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},598:(t,e,r)=>{var n=r(1333);t.exports=n("navigator","userAgent")||""},6358:(t,e,r)=>{var n,o,a=r(9859),i=r(598),u=a.process,c=a.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},3837:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:(t,e,r)=>{var n=r(9859),o=r(7933).f,a=r(5762),i=r(4768),u=r(8400),c=r(7081),s=r(6541);t.exports=function(t,e){var r,f,l,p,v,g=t.target,d=t.global,h=t.stat;if(r=d?n:h?n[g]||u(g,{}):(n[g]||{}).prototype)for(f in e){if(p=e[f],l=t.dontCallGetSet?(v=o(r,f))&&v.value:r[f],!s(d?f:g+(h?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&a(p,"sham",!0),i(r,f,p,t)}}},4229:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7188:(t,e,r)=>{var n=r(4229);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},266:(t,e,r)=>{var n=r(7188),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},1805:(t,e,r)=>{var n=r(7400),o=r(8270),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,u=o(a,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&i(a,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},5968:(t,e,r)=>{var n=r(7188),o=Function.prototype,a=o.bind,i=o.call,u=n&&a.bind(i,i);t.exports=n?function(t){return t&&u(t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},1333:(t,e,r)=>{var n=r(9859),o=r(6733),a=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t]):n[t]&&n[t][e]}},5300:(t,e,r)=>{var n=r(7111),o=r(9650);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},9859:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},8270:(t,e,r)=>{var n=r(5968),o=r(2991),a=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(o(t),e)}},5977:t=>{t.exports={}},4394:(t,e,r)=>{var n=r(7400),o=r(4229),a=r(2635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},9337:(t,e,r)=>{var n=r(5968),o=r(4229),a=r(7079),i=Object,u=n("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):i(t)}:i},8511:(t,e,r)=>{var n=r(5968),o=r(6733),a=r(5353),i=n(Function.toString);o(a.inspectSource)||(a.inspectSource=function(t){return i(t)}),t.exports=a.inspectSource},6407:(t,e,r)=>{var n,o,a,i=r(1180),u=r(9859),c=r(5968),s=r(5052),f=r(5762),l=r(8270),p=r(5353),v=r(4399),g=r(5977),d="Object already initialized",h=u.TypeError,b=u.WeakMap;if(i||p.state){var y=p.state||(p.state=new b),m=c(y.get),w=c(y.has),x=c(y.set);n=function(t,e){if(w(y,t))throw h(d);return e.facade=t,x(y,t,e),e},o=function(t){return m(y,t)||{}},a=function(t){return w(y,t)}}else{var S=v("state");g[S]=!0,n=function(t,e){if(l(t,S))throw h(d);return e.facade=t,f(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},a=function(t){return l(t,S)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return r}}}},6733:(t,e,r)=>{var n=r(3777),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},6541:(t,e,r)=>{var n=r(4229),o=r(6733),a=/#|\.prototype\./,i=function(t,e){var r=c[u(t)];return r==f||r!=s&&(o(e)?n(e):!!e)},u=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},9650:t=>{t.exports=function(t){return null==t}},5052:(t,e,r)=>{var n=r(6733),o=r(3777),a=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===a}:function(t){return"object"==typeof t?null!==t:n(t)}},4231:t=>{t.exports=!1},9395:(t,e,r)=>{var n=r(1333),o=r(6733),a=r(1321),i=r(6969),u=Object;t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&a(e.prototype,u(t))}},9646:(t,e,r)=>{var n=r(4237);t.exports=function(t){return n(t.length)}},6039:(t,e,r)=>{var n=r(4229),o=r(6733),a=r(8270),i=r(7400),u=r(1805).CONFIGURABLE,c=r(8511),s=r(6407),f=s.enforce,l=s.get,p=Object.defineProperty,v=i&&!n((function(){return 8!==p((function(){}),"length",{value:8}).length})),g=String(String).split("String"),d=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!a(t,"name")||u&&t.name!==e)&&(i?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&r&&a(r,"arity")&&t.length!==r.arity&&p(t,"length",{value:r.arity});try{r&&a(r,"constructor")&&r.constructor?i&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return a(n,"source")||(n.source=g.join("string"==typeof e?e:"")),t};Function.prototype.toString=d((function(){return o(this)&&l(this).source||c(this)}),"toString")},917:t=>{var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},1787:(t,e,r)=>{var n=r(7400),o=r(4394),a=r(7137),i=r(1176),u=r(9310),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=n?a?function(t,e,r){if(i(t),e=u(e),i(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return s(t,e,r)}:s:function(t,e,r){if(i(t),e=u(e),i(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},7933:(t,e,r)=>{var n=r(7400),o=r(266),a=r(9195),i=r(5358),u=r(905),c=r(9310),s=r(8270),f=r(4394),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=u(t),e=c(e),f)try{return l(t,e)}catch(t){}if(s(t,e))return i(!o(a.f,t,e),t[e])}},8151:(t,e,r)=>{var n=r(140),o=r(3837).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},894:(t,e)=>{e.f=Object.getOwnPropertySymbols},1321:(t,e,r)=>{var n=r(5968);t.exports=n({}.isPrototypeOf)},140:(t,e,r)=>{var n=r(5968),o=r(8270),a=r(905),i=r(9540).indexOf,u=r(5977),c=n([].push);t.exports=function(t,e){var r,n=a(t),s=0,f=[];for(r in n)!o(u,r)&&o(n,r)&&c(f,r);for(;e.length>s;)o(n,r=e[s++])&&(~i(f,r)||c(f,r));return f}},9195:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},4059:(t,e,r)=>{"use strict";var n=r(1601),o=r(1589);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2914:(t,e,r)=>{var n=r(266),o=r(6733),a=r(5052),i=TypeError;t.exports=function(t,e){var r,u;if("string"===e&&o(r=t.toString)&&!a(u=n(r,t)))return u;if(o(r=t.valueOf)&&!a(u=n(r,t)))return u;if("string"!==e&&o(r=t.toString)&&!a(u=n(r,t)))return u;throw i("Can't convert object to primitive value")}},4826:(t,e,r)=>{var n=r(1333),o=r(5968),a=r(8151),i=r(894),u=r(1176),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(u(t)),r=i.f;return r?c(e,r(t)):e}},8885:(t,e,r)=>{var n=r(9650),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},4399:(t,e,r)=>{var n=r(3036),o=r(1441),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5353:(t,e,r)=>{var n=r(9859),o=r(8400),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},3036:(t,e,r)=>{var n=r(4231),o=r(5353);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.3",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.3/LICENSE",source:"https://github.com/zloirock/core-js"})},4860:(t,e,r)=>{var n=r(6358),o=r(4229);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},3231:(t,e,r)=>{var n=r(3329),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},905:(t,e,r)=>{var n=r(9337),o=r(8885);t.exports=function(t){return n(o(t))}},3329:(t,e,r)=>{var n=r(917);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},4237:(t,e,r)=>{var n=r(3329),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},2991:(t,e,r)=>{var n=r(8885),o=Object;t.exports=function(t){return o(n(t))}},2066:(t,e,r)=>{var n=r(266),o=r(5052),a=r(9395),i=r(5300),u=r(2914),c=r(95),s=TypeError,f=c("toPrimitive");t.exports=function(t,e){if(!o(t)||a(t))return t;var r,c=i(t,f);if(c){if(void 0===e&&(e="default"),r=n(c,t,e),!o(r)||a(r))return r;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},9310:(t,e,r)=>{var n=r(2066),o=r(9395);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1601:(t,e,r)=>{var n={};n[r(95)("toStringTag")]="z",t.exports="[object z]"===String(n)},3326:(t,e,r)=>{var n=r(1589),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},9821:t=>{var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},1441:(t,e,r)=>{var n=r(5968),o=0,a=Math.random(),i=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+a,36)}},6969:(t,e,r)=>{var n=r(4860);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7137:(t,e,r)=>{var n=r(7400),o=r(4229);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1180:(t,e,r)=>{var n=r(9859),o=r(6733),a=n.WeakMap;t.exports=o(a)&&/native code/.test(String(a))},95:(t,e,r)=>{var n=r(9859),o=r(3036),a=r(8270),i=r(1441),u=r(4860),c=r(6969),s=o("wks"),f=n.Symbol,l=f&&f.for,p=c?f:f&&f.withoutSetter||i;t.exports=function(t){if(!a(s,t)||!u&&"string"!=typeof s[t]){var e="Symbol."+t;u&&a(f,t)?s[t]=f[t]:s[t]=c&&l?l(e):p(e)}return s[t]}},8188:(t,e,r)=>{var n=r(1601),o=r(4768),a=r(4059);n||o(Object.prototype,"toString",a,{unsafe:!0})}}]);