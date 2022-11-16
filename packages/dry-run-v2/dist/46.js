"use strict";(self.webpackChunk_prifina_widgets_dry_run=self.webpackChunk_prifina_widgets_dry_run||[]).push([[46],{6046:(e,t,n)=>{n.r(t);var a=n(1119),r=n(6470),o=n(929),c=n(513),i=n(7162),s=n.n(i),l=(n(9120),n(6781),n(3105),n(5713),n(8695),n(8188),n(1939),n(5734),n(8233),n(8995),n(8178),n(3450),n(4769),n(2501),n(3430),n(3108),n(7900)),u=n.n(l),f=n(2734),d=n(3280),p=n(4033),m=n(8703),h=n(3854),y=n(3258),g=n(3276),x=n(5556),v=n(3131),F=n(2655),D=n(5484),w=n(4908),E=n(3004),S=n(840);n(3439);var k="e72f4e2b049a4ca7918223846212007",_="http://api.weatherapi.com",b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],C=["Sun","Mon","Thu","Wed","Thu","Fri","Sat"],A=["January","February","March","April","May","June","July","August","September","October","November","December"],O="x3LSdcSs1kcPskBWBJvqGto",I={width:"300px",height:"300px",background:"linear-gradient(180deg, #0D3D4D 0%, rgba(0, 44, 69, 0.04) 100%), #071833",borderRadius:"10px",boxShadow:"0px 2px 8px rgba(91, 92, 91, 0.2)",padding:8,flexDirection:"column"};const P=function(e){var t=(0,f.usePrifina)(),n=t.stage,i=t.onUpdate,P=t.API,T=t.registerDataConnector,j=e.city,Z=e.data,z=(0,l.useState)({}),M=(0,c.Z)(z,2),R=M[0],W=M[1],q=(0,l.useState)(0),B=(0,c.Z)(q,2),L=B[0],U=B[1],J=function(e){console.log("DATA",e);var t=[];if("dev"===n){var a=e.split(","),r={day_start:a[2],class_5min:a[28]};console.log(r);var o=new Date(r.day_start);t.push(["day_start","class_5min"].join(","));for(var c=0;c<7;c++){var i=o.setDate(o.getDate()-1),s=Object.assign({},r);s.day_start=new Date(i).toISOString(),t.push([s.day_start,s.class_5min].join(",")),o=new Date(i)}}else t=e;t.shift(),console.log("PROCESS ",t);var l={};t.forEach((function(e){console.log("DD ",e);var t=e.split(",");console.log("PARTS ",t);var n=new Date(t[0]).getTime();t[1].split("").forEach((function(e,t){var a=new Date(n+5*t*60*1e3),r=a.getDay(),o=a.getHours().toString().padStart(2,"0")+":00";l.hasOwnProperty(r)||(l[r]={}),l[r].hasOwnProperty(o)||(l[r][o]=0),parseInt(e)>2&&l[r][o]++}))})),console.log(l),W(l)},K=j||"london";void 0!==Z&&Z.hasOwnProperty("settings")&&"object"===(0,o.Z)(Z.settings)&&Z.settings.hasOwnProperty("city")&&Z.settings.city.length>0&&(K=Z.settings.city),console.log("DEFAULT CITY ",K);var N=(0,l.useState)(K),Y=(0,c.Z)(N,2),G=Y[0],H=Y[1],$=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("UPDATE ",t),t.hasOwnProperty("settings")&&"object"===(0,o.Z)(t.settings)&&t.settings.hasOwnProperty("city")&&(H(t.settings.city),ne("".concat(_,"/v1/forecast.json?key=").concat(k,"&q=").concat(G,"&days=7&aqi=no&alerts=no"))),t.hasOwnProperty("data")&&t.data.hasOwnProperty("content")&&"Oura/queryActivitySummariesAsync"===t.data.dataconnector&&t.data.content.length>1&&J(t.data.content);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){return[e.getFullYear(),(e.getMonth()+1).toString().padStart(2,"0"),e.getDate().toString().padStart(2,"0")].join("-")};(0,l.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t,r,o,c,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(O,$),T(O,[d.Z]),t=new Date,r=t.setDate(t.getDate()-14),o=Q(new Date(r)),c=(0,a.Z)({},"s3::date",(0,a.Z)({},f.Op.gte,o)),e.next=8,P[O].Oura.queryActivitySummariesAsync({filter:c,fields:"day_start,class_5min"});case 8:l=e.sent,console.log(l),"dev"===n&&J(l.data.getDataObject.content[1]);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(e){var t=(0,l.useState)(null),n=(0,c.Z)(t,2),a=n[0],r=n[1],o=(0,l.useState)(null),i=(0,c.Z)(o,2),s=i[0],u=i[1],f=(0,l.useState)(null),d=(0,c.Z)(f,2),p=d[0],m=d[1],h=(0,l.useState)(e),y=(0,c.Z)(h,2),g=y[0],x=y[1];return(0,l.useEffect)((function(){g&&(m(!0),r(null),u(null),fetch(g).then((function(e){return e.json()})).then((function(e){m(!1),e.cod>=400?u(e.message):r(e)})).catch((function(e){m(!1),u(e)})))}),[g]),{weatherData:a,error:s,isLoading:p,setUrl:x}}("".concat(_,"/v1/forecast.json?key=").concat(k,"&q=").concat(G,"&days=7&aqi=no&alerts=no")),X=V.weatherData,ee=V.error,te=V.isLoading,ne=V.setUrl;if(ee)return u().createElement("h2",null,"Error when fetching: ",ee);if(!X&&te)return u().createElement("h2",null,"LOADING...");if(!X)return null;var ae=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=e.split(":"),r=parseInt(a[0]);return r>0&&r<12?r+(-1===t?":"+a[1]:"")+(n?"AM":""):r>12&&r<24?r-12+(-1===t?":"+a[1]:"")+(n?"PM":""):12===r?r+(-1===t?":"+a[1]:"")+(n?"PM":""):24===r||0===r?"12"+(-1===t?":"+a[1]:"")+(n?"AM":""):void 0},re=X.forecast.forecastday[L],oe=new Date(re.date).getDay(),ce=-1,ie=[];R.hasOwnProperty(oe)&&(ie=Object.keys(R[oe]).map((function(e){var t={};return t[e]=R[oe][e],t})).sort((function(e,t){var n=Object.keys(e)[0],a=Object.keys(t)[0];return e[n]<t[a]?1:e[n]>t[a]?-1:0})).slice(0,3));var se=100;if(ie.length>0){console.log(ie);for(var le=0;le<X.forecast.forecastday[L].hour.length;le++)for(var ue=0,fe=0;fe<ie.length;fe++){var de=Object.keys(ie[fe])[0],pe=X.forecast.forecastday[L].hour[le],me=pe.time.split(" ")[1];me===de&&(console.log(me,de,ie[fe][de],ue),pe.chance_of_rain+pe.chance_of_snow<=se&&ie[fe][de]>ue&&(ue=ie[fe][de],ce=parseInt(de),se=pe.chance_of_rain+pe.chance_of_snow))}console.log("RAIN % ",se)}if(-1===ce||se>20){var he=X.forecast.forecastday[L].hour.slice(6,20).reduce((function(e,t){return e.chance_of_rain<t.chance_of_rain+t.chance_of_snow?e:t})).time;ce=new Date(he).getHours()}return u().createElement(u().Fragment,null,u().createElement(p.kC,{alt:"container",style:I,flex:1},u().createElement(p.xv,{fontSize:"16px",color:"#FFFFFF",fontWeight:"bold",textTransform:"uppercase"},"//Dry run//"),u().createElement(h.II,{h:"28px",marginTop:"12px",focusBorderColor:"transparent",bg:"#07263E",borderWidth:0,color:"#90CDF4",fontSize:"18px",textTransform:"uppercase",fontWeight:"bold",fontStyle:"italic",borderRadius:"2px",value:G,readOnly:!0}),function(){var e=X.forecast.forecastday.map((function(e){return{icon:e.day.condition.icon,date:e.date}})),t=new Date(e[L].date);return u().createElement(p.kC,{flexDirection:"column"},u().createElement(p.kC,{justifyContent:"center"},e.map((function(e,t){return u().createElement(p.kC,{key:"w-"+t,flexDirection:"column",alignItems:"center","data-weather-day":t,onClick:function(e){return t=e,n=parseInt(t.currentTarget.dataset.weatherDay),void(L!=n?U(n):t.preventDefault());var t,n},style:{cursor:"pointer"}},u().createElement(m.Ee,{src:e.icon,boxSize:"40px"}),u().createElement(p.xv,{color:"#FFF500",fontWeight:"700",fontSize:"12px"},C[new Date(e.date).getDay()]))}))),u().createElement(p.xv,{fontSize:"18px",textTransform:"uppercase",fontWeight:"bold",fontStyle:"italic",color:"#FFFFFF"},b[t.getDay()],", ",t.getDate()," ",A[t.getMonth()]))}(),u().createElement(p.kC,{alt:"bottomContainer",flexDirection:"column"},function(){var e=X.forecast.forecastday[L],t=new Date(e.date).getDay();console.log("FORECAST DAY",t);var n=0,a=e.hour.map((function(e){var a=e.time.split(" ")[1],r=0;return R.hasOwnProperty(t)&&R[t].hasOwnProperty(a)&&(r=R[t][a]),n=Math.max(n,r),{hour:e.time.split(" ")[1],chance_of_rain:(e.chance_of_rain+e.chance_of_snow)/2,activity:r}}));return u().createElement(y.h,{width:"99%",aspect:3},u().createElement(g.c,{data:a,borderWidth:0,margin:{left:-55,right:-55,top:10}},u().createElement(x.K,{stroke:"#90CDF4",dataKey:"hour",fontSize:"12px",tickFormatter:ae,tick:{fontSize:10}}),u().createElement(v.B,{yAxisId:"left",orientation:"left",tick:!1,domain:[0,100]}),u().createElement(v.B,{yAxisId:"right",orientation:"right",tick:!1,domain:[0,n]}),u().createElement(F.u,null),u().createElement(D.q,{stroke:"#f5f5f5"}),u().createElement(w.$,{dataKey:"chance_of_rain",yAxisId:"left",name:"Chance of rain",barSize:3,fill:"#90CDF4",radius:3,maxBarSize:4}),u().createElement(E.x,{yAxisId:"right",type:"step",dataKey:"activity",name:"Activity",stroke:"#FFF500",dot:!1}),u().createElement(S.d,{yAxisId:"left",x:"06:00",stroke:"#808080"}),u().createElement(S.d,{yAxisId:"left",x:"12:00",stroke:"#808080"}),u().createElement(S.d,{yAxisId:"left",x:"18:00",stroke:"#808080"})))}(),u().createElement(p.kC,{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},u().createElement(p.kC,{flexDirection:"column"},u().createElement(p.kC,{alignItems:"center"},u().createElement(p.kC,{w:"7px",h:"7px",background:"#90CDF4",borderRadius:999,marginRight:"4px"}),u().createElement(p.xv,{color:"#FFFFFF",fontSize:10,textTransform:"uppercase"},"Chance of rain")),u().createElement(p.kC,{alignItems:"center"},u().createElement(p.kC,{w:"7px",h:"7px",background:"#FFF500",borderRadius:999,marginRight:"4px"}),u().createElement(p.xv,{color:"#FFFFFF",fontSize:10,textTransform:"uppercase"},"Activity history"))),u().createElement(p.kC,{flexDirection:"column",alignItems:"center"},u().createElement(p.xv,{fontSize:"18px",color:"#FFFFFF",fontWeight:"700"},"".concat(ae(ce+":00",-1,!1)," - ").concat(ae(ce+1+":00",-1,!0))),u().createElement(p.xv,{textTransform:"uppercase",color:"#FFF500",fontSize:10},"Optimal workout time"))))))};var T=n(953),j=document.getElementById("root");(0,T.createRoot)(j).render(u().createElement(P,null))}}]);