"use strict";(self.webpackChunk_prifina_widgets_fitbit_effort_v2=self.webpackChunk_prifina_widgets_fitbit_effort_v2||[]).push([[870],{5870:(e,t,n)=>{n.r(t);var r=n(1119),a=n(6470),o=n(513),i=(n(9120),n(5713),n(7162)),c=n.n(i),l=n(7900),s=n.n(l),u=n(4149),f=n(2734),d=n(2230),p=n(4565),m=n(6827),g=n(8703),h=n(8445),b=n(6656),y=n(4705),E=n(3258),v=n(4912),w=n(5484),k=n(5556),x=n(3131),S=n(2655),A=n(2418),D=u.ZP.div.withConfig({displayName:"App__Container",componentId:"sc-56mex5-0"})(["height:300px;width:300px;border-radius:10px;background:linear-gradient( 180deg,#082673 30.67%,#644bd0 75.51%,#a56adf 106.47% );padding:11px 8px 0px 8px;"]),C=function(e){var t=(0,f.usePrifina)(),n=(t.stage,t.check,t.onUpdate),i=t.API,u=t.registerDataConnector,C=(0,l.useState)({}),R=(0,o.Z)(C,2),Z=R[0],I=R[1],L=(0,l.useRef)(),M=function(e){console.log("ORIGINAL PROCESS DATA",e);var t=[e];console.log("newData",t),I(t),console.log("new 17")};console.log("processed data",Z);var _=function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("UPDATE ",t),t.hasOwnProperty("data")&&t.data.hasOwnProperty("content")&&console.log("PAYLOAD DATA",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=(0,l.useState)(1),T=(0,o.Z)(z,2),O=T[0],F=T[1],P=(0,l.useState)(),B=(0,o.Z)(P,2),K=B[0],U=B[1];return(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(d.A,_),u(d.A,[p.Z]),L.current=!0;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}L.current||function(){e.apply(this,arguments)}()}),[]),(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var t,n,a,o,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.setDate(t.getDate()-O),a=new Date(n).toISOString().split("T")[0],U(a),console.log("datestr",a),o=(0,r.Z)({},"s3::date",(0,r.Z)({},f.Op.eq,a)),console.log("FILTER",o),e.next=9,i[d.A].Fitbit.queryActivitySummary({filter:o,fields:"sedentaryMinutes,lightlyActiveMinutes,fairlyActiveMinutes,veryActiveMinutes"});case 9:l=e.sent,console.log("THE NEW BUILD result",l),M(l.data.getDataObject.content);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[O]),console.log("day",O),s().createElement(D,null,s().createElement(m.kC,{alignItems:"center",mb:8},s().createElement(m.xv,{fontSize:16,color:"white",fontWeight:700,ml:9,mr:110},"Effort widget"),s().createElement(g.Ee,{src:y.Z})),s().createElement(m.xu,null,s().createElement(m.kC,{h:32,justifyContent:"space-between",alignItems:"center",bg:"#D4D7F2CC",padding:"0px 65px 0px 65px",borderTopRightRadius:8,borderTopLeftRadius:8},s().createElement(h.hU,{style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:s().createElement(b.wy,null),onClick:(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(O+1);case 1:case"end":return e.stop()}}),e)})))}),s().createElement(m.xv,null,K),s().createElement(h.hU,{disabled:1===O,style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:s().createElement(b.XC,null),onClick:(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(O-1);case 1:case"end":return e.stop()}}),e)})))})),s().createElement(m.xu,{height:202,style:{background:"rgba(251, 242, 242, 0.3)",borderBottomLeftRadius:10,borderBottomRightRadius:10}},s().createElement(E.h,{width:"100%",height:"100%"},s().createElement(v.v,{width:200,height:202,data:Z,margin:{top:20,right:30,left:0,bottom:0},style:{cursor:"pointer"}},s().createElement(w.q,{strokeDasharray:"none",vertical:!1,stroke:"rgba(0, 0, 0, 0.12)"}),s().createElement(k.K,{tickLine:!1,dataKey:"0",stroke:"rgba(0, 0, 0, 0.12)",label:{value:"ACTIVITY LEVEL",position:"bottom",offset:-20,stroke:"white",fontSize:10}}),s().createElement(x.B,{axisLine:!1,tickLine:!1,label:{value:"HOURS",angle:-90,stroke:"white",fontSize:10},allowDecimals:!1,type:"number",tickFormatter:function(e){return Math.floor(e/60)},stroke:"white",domain:["0","dataMax+60"]}),s().createElement(S.u,{cursor:{fill:"transparent"},contentStyle:{background:"rgba(128, 128, 255, 0.9)",padding:5,border:"none",borderRadius:8},itemStyle:{fontSize:14},formatter:function(e){return n=(t=e)%60,Math.floor(t/60)+"h "+Math.floor(n)+"m";var t,n}}),s().createElement(A.$,{barSize:45,name:"Sedentary",dataKey:"sedentaryMinutes",fill:"#D4D7F2CC"}),s().createElement(A.$,{barSize:45,name:"Light",dataKey:"lightlyActiveMinutes",fill:"#DDB7F4"}),s().createElement(A.$,{barSize:45,name:"Fairly",dataKey:"fairlyActiveMinutes",fill:"#2A2E9C"}),s().createElement(A.$,{barSize:45,name:"Very Active",dataKey:"veryActiveMinutes",fill:"#222671"}))))))};C.displayName="FitbitEffort";const R=C;var Z=n(953),I=document.getElementById("root");(0,Z.createRoot)(I).render(s().createElement(R,null))}}]);