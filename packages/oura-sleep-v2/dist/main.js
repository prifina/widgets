(()=>{var e,r,t,n,o,a,i,l,u,s,f,p,d,c,h,v,g,m={7620:(e,r,t)=>{Promise.all([t.e(316),t.e(67),t.e(900),t.e(734),t.e(807)]).then(t.bind(t,4807))}},b={};function y(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return m[e].call(t.exports,t,t.exports,y),t.loaded=!0,t.exports}y.m=m,y.c=b,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>e+".js",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@prifina-widgets/oura-sleep-v2:",y.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,y.nc&&i.setAttribute("nonce",y.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},y.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{y.S={};var e={},r={};y.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];y.o(y.S,t)||(y.S[t]={});var a=y.S[t],i="@prifina-widgets/oura-sleep-v2",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@prifina/hooks-v2","0.0.4",(()=>Promise.all([y.e(990),y.e(900)]).then((()=>()=>y(8990))))),l("react-dom/client","18.2.0",(()=>Promise.all([y.e(316),y.e(900),y.e(29)]).then((()=>()=>y(7029))))),l("react","18.2.0",(()=>y.e(784).then((()=>()=>y(2784)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;y.g.importScripts&&(e=y.g.location+"");var r=y.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,p=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!u||("u"==p?l>n&&!o:""==p!=o);if("u"==f){if(!u||"u"!=p)return!1}else if(u)if(p==f)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=p&&"n"!=p){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||f<p!=o)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,l--)}}var d=[],c=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(l(e,t,o,n)),f(e[t][o])},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},f=e=>(e.loaded=1,e.get()),d=(p=e=>function(r,t,n,o){var a=y.I(r);return a&&a.then?a.then(e.bind(e,r,y.S[r],t,n,o)):e(r,y.S[r],t,n,o)})(((e,r,t,n,o)=>r&&y.o(r,t)?u(r,0,t,n):o())),c=p(((e,r,t,n,o)=>{var a=r&&y.o(r,t)&&s(r,t,n);return a?f(a):o()})),h={},v={7900:()=>d("default","react",[1,18,2,0],(()=>y.e(784).then((()=>()=>y(2784))))),2734:()=>c("default","@prifina/hooks-v2",[3,0,0,4],(()=>y.e(990).then((()=>()=>y(8990))))),953:()=>d("default","react-dom/client",[1,18,2,0],(()=>y.e(354).then((()=>()=>y(7029)))))},g={734:[2734],807:[953],900:[7900]},y.f.consumes=(e,r)=>{y.o(g,e)&&g[e].forEach((e=>{if(y.o(h,e))return r.push(h[e]);var t=r=>{h[e]=0,y.m[e]=t=>{delete y.c[e],t.exports=r()}},n=r=>{delete h[e],y.m[e]=t=>{throw delete y.c[e],r}};try{var o=v[e]();o.then?r.push(h[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={179:0};y.f.j=(r,t)=>{var n=y.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(734|900)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=y.p+y.u(r),i=new Error;y.l(a,(t=>{if(y.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)y.o(i,n)&&(y.m[n]=i[n]);l&&l(y)}for(r&&r(t);u<a.length;u++)o=a[u],y.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0},t=self.webpackChunk_prifina_widgets_oura_sleep_v2=self.webpackChunk_prifina_widgets_oura_sleep_v2||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),y(7620)})();