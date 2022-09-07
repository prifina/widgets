"use strict";(self.webpackChunk_prifina_widgets_dataTest_v2=self.webpackChunk_prifina_widgets_dataTest_v2||[]).push([[48],{48:(e,r,t)=>{function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.r(r),t.d(r,{Op:()=>g,PrifinaContext:()=>E,PrifinaProvider:()=>w,_fn:()=>O,buildFilter:()=>S,usePrifina:()=>x});var l=t(941),s=t.n(l),f=function(e){if("object"!==a(e)||null===e||e instanceof Array)return console.log("WRONG OBJ TYPE ",a(e)),d(e);var r=Object.getOwnPropertySymbols(e),t=Object.keys(e);return r.length>0?"{"+r.map((function(r){return"symbol"===a(r)?'"'+r.toString()+'":'+d(e[r]):null})).filter((function(e){return e}))+"}":t.length>0?"{"+t.map((function(r){return"function"==typeof e[r]?null:'"'+r+'":'+d(e[r])})).filter((function(e){return e}))+"}":void 0},d=function e(r){switch(a(r)){case"string":return'"'+r.replace(/\\/g,"\\\\").replace('"','\\"')+'"';case"number":case"boolean":return""+r;case"function":return"null";case"symbol":return r.toString();case"object":return r instanceof Date?'"'+r.toISOString()+'"':r instanceof Array?"["+r.map(e).join(",")+"]":null===r?"null":f(r)}},b=function(){return Math.random().toString(36).slice(-10)},p=t(719),g={eq:Symbol.for("="),ne:Symbol.for("!="),gte:Symbol.for(">="),gt:Symbol.for(">"),lte:Symbol.for("<="),lt:Symbol.for("<"),and:Symbol.for(" and "),or:Symbol.for(" or "),not:Symbol.for(" not "),like:Symbol.for(" like "),in:Symbol.for(" in "),between:Symbol.for(" between ")};function y(e,r,t){if(console.log("CHECK ",t),[g.in,g.between].indexOf(r)>-1)e+=Symbol.keyFor(r),g.in===r&&(e+="("+t+")"),g.between===r&&(e+=t[0]+" and "+t[1]);else if(null===t)if(g.eq===r)e+=" IS NULL";else{if(g.ne!==r)throw new Error("ONLY eq,ne allowed with null");e+=" IS NOT NULL"}else e+=Symbol.keyFor(r)+t;return e}var v=["bool","int","integer","string","float","decimal","numeric","timestamp"],m=["year","month","day","hour","minute","second","timezone_hour","timezone_minute"];function O(e,r,t){if("CAST"===e){if("string"!=typeof t||-1===v.indexOf(t))throw new Error("Datatype error, only (",v.join(",")+") allowed");return"CAST(".concat(r," as ").concat(t,")")}if("CHAR_LENGTH"===e||"CHARACTER_LENGTH"===e||"UPPER"===e||"LOWER"===e)return"".concat(e,"(").concat(r,")");if("TRIM"===e){var n="BOTH";if(void 0===t||"string"==typeof t&&-1!==["LEADING","TRAILING"].indexOf(t))return void 0!==t&&(n=t),"".concat(e,"(").concat(n," FROM ").concat(r,")");throw new Error("Trim option error, only (LEADING,TRAILING or BOTH) allowed ")}if("SUBSTRING"===e){if("object"!==a(t)||0===t.length)throw new Error("Substring option error, [start, length]");return 2===t.length?"".concat(e,"(").concat(r," ,").concat(t[0],",").concat(t[1],")"):"".concat(e,"(").concat(r," ,").concat(t[0],")")}if(["AVG","MAX","MIN","SUM","COUNT"].indexOf(e)>-1)return"".concat(e,"(").concat(r,")");if("UTCNOW"===e)return"".concat(e,"()");if(["TO_TIMESTAMP"].indexOf(e)>-1)return"".concat(e,"(").concat(r,")");if("DATE_ADD"===e){if("object"!==a(t)||2!=t.length)throw new Error("DATE_ADD option error, [date_part, value]");return"".concat(e,"(").concat(t[0],",").concat(t[1],", ").concat(r,")")}if("DATE_DIFF"===e){if("object"!==a(t)||2!=t.length)throw new Error("DATE_DIFF option error, [date_part, timestamp]");return"".concat(e,"(").concat(t[0],", ").concat(r,", ").concat(t[1],")")}if("TO_STRING"===e){if(void 0!==t&&"string"!=typeof t)throw new Error("TO_STRING option error, time format pattern is missing");return"".concat(e,"(").concat(r," ,").concat(t,")")}if("EXTRACT"===e){if(void 0!==t&&"string"!=typeof t&&-1===m.indexOf(t))throw new Error("EXTRACT option error, date part value is missing or invalid");return"".concat(e,"(").concat(t," FROM ").concat(r,")")}return"YEAR"===e?"EXTRACT(year from TO_TIMESTAMP(".concat(r,"))"):"MONTH"===e?"EXTRACT(month from TO_TIMESTAMP(".concat(r,"))"):"DAY"===e?"EXTRACT(day from TO_TIMESTAMP(".concat(r,"))"):"HOUR"===e?"EXTRACT(hour from TO_TIMESTAMP(".concat(r,"))"):void 0}function S(e){var r="",t=Object.getOwnPropertySymbols(e);if(t.length>0){var n=t[0];Object.keys(e[n]).forEach((function(t,o){Object.getOwnPropertySymbols(e[n][t]).forEach((function(a,i){r=y(r+=o>0?Symbol.keyFor(n)+t:t,a,e[n][t][a])}))}))}else Object.keys(e).forEach((function(t){r+=t,Object.getOwnPropertySymbols(e[t]).forEach((function(n,o){if([g.and,g.or,g.not].indexOf(n)>-1){var a=n;Object.getOwnPropertySymbols(e[t][n]).forEach((function(o,i){i>0&&(r+=Symbol.keyFor(a)+t),r=y(r,o,e[t][n][o])}))}else{if(o>0)throw new Error("Logical opertor error");r=y(r,n,e[t][n])}}))}));return r}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={},t=Object.getOwnPropertySymbols(e);return t.length>0?t.forEach((function(t){var n=Symbol.keyFor(t).trim();r[n]={},Object.keys(e[t]).forEach((function(o,a){r[n][[o]]={},Object.getOwnPropertySymbols(e[t][o]).forEach((function(i,c){r[n][[o]][[Symbol.keyFor(i).trim()]]=e[t][o][i],console.log("II ",a)}))}))})):Object.keys(e).length>0&&Object.keys(e).forEach((function(t,n){r[[t]]={},Object.getOwnPropertySymbols(e[t]).forEach((function(n,o){r[t][[Symbol.keyFor(n).trim()]]=e[t][n],console.log("ONE COND ",o)}))})),JSON.stringify(r)}var I=["activeApp","activeUser","Context","stage","children"],h=["appHandler"],E=(0,l.createContext)({}),w=function(e){var r,t,n=e.activeApp,d=e.activeUser,g=e.Context,y=e.stage,v=void 0===y?"dev":y,m=e.children,O=c(e,I),S=(0,l.useRef)(o({stage:v},O)),E=(0,l.useRef)({}),w=(0,l.useRef)({}),x=(0,l.useRef)({}),A=(0,l.useRef)({}),P=(r=(0,l.useState)(d||{name:"Test",uuid:"Testing-uuid",endpoint:"https://endpoint.xxx",region:"us-east-1"}),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(r,t)||function(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),j=P[0];P[1];var R=(0,l.useCallback)((function(){return console.log("Prifina current",S.current),{init:S.current.init,callbacks:L(),API:G()}}),[]),C=function(e){var r,t;if(console.log("SUBSCRIPTION OPTS ",e),null!==(r=E.current)&&void 0!==r&&r.sandbox){var n=Object.assign({},e);E.current.sandbox[0](i({},n.name,n))}return null!==(t=E.current)&&void 0!==t&&t.sandbox&&E.current.sandbox[0]({mutationRequest:{appID:e.appId,variables:e.variables}}),new Promise((function(r,t){var n,a=e.variables,u=a.appHandler,l=c(a,h),s=x.current.user.subscribe({query:(0,p.ZP)(e.mutation),variables:o(o({},l),{},{dataconnector:e.name,userId:j.uuid,appId:e.appId,execId:b(),stage:S.current.init.stage})}).subscribe({next:function(r){console.log("NOTIFICATION SUBS RESULTS3 ",r,u);var t=S.current.init.apps[e.appId];console.log("APP INDEX ARRAY ",t);var n=0;t.length>1&&(n=t.findIndex((function(e){return e===u}))),E.current[e.appId][n](r.data)},error:function(r){console.warn(r),E.current[e.appId][0]({error:r})}});console.log("SUBS HANDLER ",s),null!==(n=w.current)&&void 0!==n&&n[e.appId]?w.current[e.appId][u]=s:w.current[e.appId]=i({},u,s),r(!0)}))},N=function(e){var r,t;if(console.log("MUTATION OPTS ",e),null!==(r=E.current)&&void 0!==r&&r.sandbox){var n=Object.assign({},e);E.current.sandbox[0](i({},n.name,n))}return null!==(t=E.current)&&void 0!==t&&t.sandbox&&E.current.sandbox[0]({mutationRequest:{appID:e.appId,variables:e.variables}}),new Promise((function(r,t){e.name.split("/"),x.current.user.mutate({mutation:(0,p.ZP)(e.mutation),variables:{input:o(o({},e.variables),{},{dataconnector:e.name,userId:j.uuid,appId:e.appId,execId:b(),stage:S.current.init.stage})}}).then((function(e){var t,n,o;console.log("MUTATION RES ",e);var a,c=Object.keys(e.data)[0];console.log("KEY ",c),a=null!==(t=e.data[c])&&void 0!==t&&t.result&&null!==(n=e.data[c].result)&&void 0!==n&&n.result?JSON.parse(e.data[c].result.result):e.data[c],null!==(o=E.current)&&void 0!==o&&o.sandbox&&E.current.sandbox[0]({mutationResult:{data:i({},c,a)}}),r({data:i({},c,a)})})).catch((function(e){console.log("MUTATION ERROR ",e),t(e)}))}))},k=function(e){var r,t;if(console.log("OPTS ",e),null!==(r=E.current)&&void 0!==r&&r.sandbox){var n=null!=e&&e.filter?f(e.filter):"",o=Object.assign({},e);o.filter=n,E.current.sandbox[0](i({},o.name,o))}e.name.split("/");var a=[];if(e.fields&&e.fieldsList){a=e.fields.split(","),console.log(a,e.fieldsList);var c,u="";if(a.some((function(r){return u=r,-1===e.fieldsList.indexOf(r)})))return null!==(c=E.current)&&void 0!==c&&c[sandbox]&&E.current.sandbox[0]({fieldsError:{fieldsList,invalidField:u}}),Promise.reject("INVALID_FIELD ("+u+")")}return null!==(t=E.current)&&void 0!==t&&t.sandbox&&E.current.sandbox[0]({queryRequest:{appID:e.appId,fields:a,filter:null!=e&&e.filter?T(e.filter):"",next:e.next}}),new Promise((function(r,t){x.current.user.query({query:(0,p.ZP)(e.query),variables:{input:{dataconnector:e.name,userId:j.uuid,fields:a,filter:null!=e&&e.filter?T(e.filter):"",next:e.next,appId:e.appId,execId:b(),stage:S.current.init.stage}}}).then((function(e){var t;if(console.log("RES ",e),null!==(t=e.data)&&void 0!==t&&t.getDataObject){var n,o=JSON.parse(e.data.getDataObject.result);null!==(n=E.current)&&void 0!==n&&n.sandbox&&E.current.sandbox[0]({queryResult:{data:{getDataObject:o}}}),r({data:{getDataObject:o}})}else{var a;console.log("NOT S3 DATA OBJECT");var c=Object.keys(e.data)[0],u=JSON.parse(e.data[c].result);null!==(a=E.current)&&void 0!==a&&a.sandbox&&E.current.sandbox[0]({queryResult:{data:i({},c,u)}}),r({data:i({},c,u)})}})).catch((function(e){var r;null!==(r=E.current)&&void 0!==r&&r.sandbox&&E.current.sandbox[0]({queryError:JSON.stringify(e)}),console.log("QUERY ERROR ",e),t(e)}))}))},D=(0,l.useCallback)((function(e,r){r.length>0&&(A.current[e]={},r.forEach((function(r,t){var n,o=r.getModuleName(),i=r.getInfo();null!==(n=E.current)&&void 0!==n&&n.sandbox&&E.current.sandbox[0]({registerConnector:o});var c={};console.log("LIST ",a(i),i),i.forEach((function(t){if(console.log("REGISTER new ",t),t.startsWith("query"))c[t]=function(n){var a,i=n.fields,c=n.filter,u=n.next;console.log("INIT ",S.current.init);var l=S.current.init.stage,s=[];return void 0!==r.getFields&&(s=r.getFields(t)),null!==(a=E.current)&&void 0!==a&&a.sandbox&&E.current.sandbox[0]({connector:o+"/"+t}),r[t]({stage:l,appID:e,name:o+"/"+t,createQuery:k,fields:i,filter:c,next:u,fieldsList:s,uuid:j.uuid})};else if(t.startsWith("subscribe"))c[t]=function(n){var a,i=n.variables;console.log("INIT MUTATION",S.current.init);var c=S.current.init.stage;return null!==(a=E.current)&&void 0!==a&&a.sandbox&&E.current.sandbox[0]({connector:o+"/"+t}),r[t]({stage:c,appID:e,name:o+"/"+t,createSubscription:C,uuid:j.uuid,variables:i})};else{if(!t.startsWith("mutation"))throw new Error("Oh no!");c[t]=function(n){var a,i=n.variables;console.log("INIT MUTATION",S.current.init);var c=S.current.init.stage;return null!==(a=E.current)&&void 0!==a&&a.sandbox&&E.current.sandbox[0]({connector:o+"/"+t}),r[t]({stage:c,appID:e,name:o+"/"+t,createMutation:N,uuid:j.uuid,callbacks:L,variables:i})}}})),A.current[e][o]=c})))}),[]),_=(0,l.useCallback)((function(e){x.current.user=e[0],x.current.prifina=e[1],x.current.s3=e[2]}),[]),M=(0,l.useCallback)((function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"WIDGET";if(console.log("UPDATE SET ",e,E),"string"!=typeof e)throw new Error("onUpdate, appID is not string");var o=b();if(E.current){var a,i,c;if(null!==(a=S.current.init.apps)&&void 0!==a&&a[e]?S.current.init.apps[e].push(o):S.current.init.apps[e]=[o],null!==(i=S.current.init.users)&&void 0!==i&&i[j.uuid]&&(S.current.init.users[j.uuid]=""),S.current.init.users[j.uuid]=n,0===Object.keys(E.current).length&&(E.current={}),null!==(c=E.current)&&void 0!==c&&c[e])E.current[e].push(r);else if("WIDGET"===t){var u;null!==(u=E.current)&&void 0!==u&&u[e]||(E.current[e]=[]),E.current[e].push(r)}else E.current[e]=r;return console.log("UPDATE SET ",E.current),o}}),[]),U=(0,l.useCallback)((function(){return w.current}),[]),L=(0,l.useCallback)((function(){return E.current}),[]),F=(0,l.useCallback)((function(){return E.current={},!0}),[]),q=(0,l.useCallback)((function(e,r){return E.current[e].length>1?E.current[e].splice(r,1):delete E.current[e],!0}),[]),G=(0,l.useCallback)((function(){return A.current}),[]),H=(0,l.useCallback)((function(){var e=JSON.parse(localStorage.getItem("PrifinaAppLocalization"));return null===e&&(e={calendar:"gregory",country:"FI",day:"2-digit",desktop:!0,language:"en-US,en;q=0.9",locale:"en-GB",mobile:!1,month:"2-digit",numberingSystem:"latn",smarttv:!1,tablet:!1,timeZone:"Europe/Helsinki",timeZoneOffset:-120,year:"numeric"}),e}),[]);return S.current={stage:v,check:R,onUpdate:M,getAppSubscriptions:U,getCallbacks:L,removeCallbacks:F,deleteCallback:q,currentUser:j,getLocalization:H,registerClient:_,registerDataConnector:D,API:A.current},void 0===S.current.init&&(S.current.init={stage:v,apps:{},users:{}}),m?s().createElement(g.Provider,{value:S},m):null},x=function(){var e=(0,l.useContext)(E);return(0,l.useMemo)((function(){return e.current}),[e])};w.__docgenInfo={description:"",methods:[],displayName:"PrifinaContextProvider"}}}]);