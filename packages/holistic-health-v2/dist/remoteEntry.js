var sCUiMz2m9JsRSnRJ5favnP;(()=>{"use strict";var e,r,t,n,o,i,a,l,u,s,f,d,h,p,c,v,g,m={4070:(e,r,t)=>{var n={"./App":()=>Promise.all([t.e(316),t.e(903),t.e(101),t.e(900),t.e(734),t.e(104)]).then((()=>()=>t(3104)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},b={};function y(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return m[e].call(t.exports,t,t.exports,y),t.loaded=!0,t.exports}y.m=m,y.c=b,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>e+".js",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@prifina-widgets/holistic-health:",y.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,y.nc&&a.setAttribute("nonce",y.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},y.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{y.S={};var e={},r={};y.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];y.o(y.S,t)||(y.S[t]={});var i=y.S[t],a="@prifina-widgets/holistic-health",l=(e,r,t,n)=>{var o=i[e]=i[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:a>l.from))&&(o[r]={get:t,from:a,eager:!!n})},u=[];return"default"===t&&(l("@prifina/hooks-v2","0.0.4",(()=>Promise.all([y.e(990),y.e(900)]).then((()=>()=>y(8990))))),l("react-dom/client","18.2.0",(()=>Promise.all([y.e(316),y.e(900),y.e(354)]).then((()=>()=>y(7029))))),l("react","18.2.0",(()=>y.e(784).then((()=>()=>y(2784)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;y.g.importScripts&&(e=y.g.location+"");var r=y.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],l=(typeof a)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(l=e[i]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(i=1;i<e.length;i++){var l=e[i];a.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?a.pop()+" "+a.pop():o(l))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,l=1,u=!0;;l++,a++){var s,f,d=l<e.length?(typeof e[l])[0]:"";if(a>=r.length||"o"==(f=(typeof(s=r[a]))[0]))return!u||("u"==d?l>n&&!o:""==d!=o);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||f<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var h=[],p=h.pop.bind(h);for(a=1;a<e.length;a++){var c=e[a];h.push(1==c?p()|p():2==c?p()&p():c?i(c,r):!p())}return!!p()},a=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=a(e,t);return i(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,o,n)),f(e[t][o])},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!i(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},f=e=>(e.loaded=1,e.get()),h=(d=e=>function(r,t,n,o){var i=y.I(r);return i&&i.then?i.then(e.bind(e,r,y.S[r],t,n,o)):e(r,y.S[r],t,n,o)})(((e,r,t,n,o)=>r&&y.o(r,t)?u(r,0,t,n):o())),p=d(((e,r,t,n,o)=>{var i=r&&y.o(r,t)&&s(r,t,n);return i?f(i):o()})),c={},v={7900:()=>h("default","react",[1,18,2,0],(()=>y.e(784).then((()=>()=>y(2784))))),2734:()=>p("default","@prifina/hooks-v2",[3,0,0,4],(()=>y.e(990).then((()=>()=>y(8990)))))},g={734:[2734],900:[7900]},y.f.consumes=(e,r)=>{y.o(g,e)&&g[e].forEach((e=>{if(y.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,y.m[e]=t=>{delete y.c[e],t.exports=r()}},n=r=>{delete c[e],y.m[e]=t=>{throw delete y.c[e],r}};try{var o=v[e]();o.then?r.push(c[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={968:0};y.f.j=(r,t)=>{var n=y.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(734|900)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=y.p+y.u(r),a=new Error;y.l(i,(t=>{if(y.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,a,l]=t,u=0;if(i.some((r=>0!==e[r]))){for(n in a)y.o(a,n)&&(y.m[n]=a[n]);l&&l(y)}for(r&&r(t);u<i.length;u++)o=i[u],y.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0},t=self.webpackChunk_prifina_widgets_holistic_health=self.webpackChunk_prifina_widgets_holistic_health||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var w=y(4070);sCUiMz2m9JsRSnRJ5favnP=w})();