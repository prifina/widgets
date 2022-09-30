"use strict";(self.webpackChunk_prifina_widgets_fitbit_sleep_v2=self.webpackChunk_prifina_widgets_fitbit_sleep_v2||[]).push([[870],{5870:(e,t,n)=>{n.r(t);var a=n(1119),r=n(6470),o=n(513),i=(n(9120),n(5713),n(7162)),l=n.n(i),c=n(7900),s=n.n(c),u=n(4149),p=n(2734),d=n(2230),f=n(4565),m=n(6827),g=n(8703),h=n(8445),b=n(6656),E=n(4705),w=n(3258),k=n(4912),S=n(5484),y=n(5556),v=n(3131),x=n(2655),D=n(2418),A=u.ZP.div.withConfig({displayName:"App__Container",componentId:"sc-1b0v9qa-0"})(["height:300px;width:300px;border-radius:10px;background:linear-gradient( 180deg,#082673 30.67%,#644bd0 75.51%,#a56adf 106.47% );padding:11px 8px 0px 8px;"]),C=function(e){var t=(0,p.usePrifina)(),n=(t.stage,t.check,t.onUpdate),i=t.API,u=t.registerDataConnector,C=(0,c.useState)({}),R=(0,o.Z)(C,2),Z=R[0],_=R[1],z=(0,c.useRef)(),L=function(e){console.log("ORIGINAL PROCESS DATA",e);var t=[e];console.log("newData",t),_(t),console.log("new 17")};console.log("processed data",Z);var I=function(){var e=(0,r.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("UPDATE ",t),t.hasOwnProperty("data")&&t.data.hasOwnProperty("content")&&console.log("PAYLOAD DATA",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=(0,c.useState)(1),O=(0,o.Z)(T,2),P=O[0],F=O[1],B=(0,c.useState)(),K=(0,o.Z)(B,2),U=K[0],M=K[1];return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(d.A,I),u(d.A,[f.Z]),z.current=!0;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}z.current||function(){e.apply(this,arguments)}()}),[]),(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(l().mark((function e(){var t,n,r,o,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.setDate(t.getDate()-P),r=new Date(n).toISOString().split("T")[0],M(r),console.log("datestr",r),o=(0,a.Z)({},"s3::date",(0,a.Z)({},p.Op.eq,r)),console.log("FILTER",o),e.next=9,i[d.A].Fitbit.querySleepSummary({filter:o});case 9:c=e.sent,console.log("THE NEW BUILD result",c),L(c.data.getDataObject.content);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[P]),console.log("day",P),s().createElement(A,null,s().createElement(m.kC,{alignItems:"center",mb:8},s().createElement(m.xv,{fontSize:16,color:"white",fontWeight:700,ml:9,mr:110},"Sleep widget"),s().createElement(g.Ee,{src:E.Z})),s().createElement(m.xu,null,s().createElement(m.kC,{h:32,justifyContent:"space-between",alignItems:"center",bg:"#D4D7F2CC",padding:"0px 65px 0px 65px",borderTopRightRadius:8,borderTopLeftRadius:8},s().createElement(h.hU,{style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:s().createElement(b.wy,null),onClick:(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(P+1);case 1:case"end":return e.stop()}}),e)})))}),s().createElement(m.xv,null,U),s().createElement(h.hU,{disabled:1===P,style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:s().createElement(b.XC,null),onClick:(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(P-1);case 1:case"end":return e.stop()}}),e)})))})),s().createElement(m.xu,{height:202,style:{background:"rgba(251, 242, 242, 0.3)",borderBottomLeftRadius:10,borderBottomRightRadius:10}},s().createElement(w.h,{width:"100%",height:"100%"},s().createElement(k.v,{width:200,height:202,data:Z,margin:{top:20,right:30,left:0,bottom:0},style:{cursor:"pointer"}},s().createElement(S.q,{strokeDasharray:"none",vertical:!1,stroke:"rgba(0, 0, 0, 0.12)"}),s().createElement(y.K,{tickLine:!1,dataKey:"0",stroke:"rgba(0, 0, 0, 0.12)",label:{value:"STAGES",position:"bottom",offset:-20,stroke:"white",fontSize:10}}),s().createElement(v.B,{axisLine:!1,tickLine:!1,label:{value:"HOURS ASLEEP",angle:-90,stroke:"white",fontSize:10},allowDecimals:!1,type:"number",tickFormatter:function(e){return Math.floor(e/60)},domain:[0,"dataMax + 60"],stroke:"white"}),s().createElement(x.u,{cursor:{fill:"transparent"},contentStyle:{background:"rgba(0, 0, 0, 0.9)",padding:5,border:0},itemStyle:{fontSize:14},formatter:function(e){return n=(t=e)%3600,Math.floor(t/60)+"h "+Math.floor(n/60)+"m";var t,n}}),s().createElement(D.$,{barSize:45,name:"Total sleep",dataKey:"minutesAsleep",fill:"#FFE9D5"}),s().createElement(D.$,{barSize:45,name:"Awake",dataKey:"wake.minutes",fill:"#DDB7F4"}),s().createElement(D.$,{barSize:45,name:"Light",dataKey:"light.minutes",fill:"#294BC1"}),s().createElement(D.$,{barSize:45,name:"Deep",dataKey:"deep.minutes",fill:"#2A2E9C"}),s().createElement(D.$,{barSize:45,name:"REM",dataKey:"rem.minutes",fill:"#222671"}))))))};C.displayName="FitbitSleep";const R=C;var Z=n(953),_=document.getElementById("root");(0,Z.createRoot)(_).render(s().createElement(R,null))}}]);