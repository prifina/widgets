"use strict";(self.webpackChunk_prifina_widgets_fitbit_activity_v2=self.webpackChunk_prifina_widgets_fitbit_activity_v2||[]).push([[870],{5870:(e,t,n)=>{n.r(t);var a=n(1119),r=n(6470),o=n(513),c=n(7162),i=n.n(c),s=(n(3108),n(8188),n(1657),n(3105),n(1245),n(6781),n(5734),n(9120),n(8233),n(7900)),l=n.n(s),d=n(4149),u=n(2734),p=n(2230),m=n(4565),f=n(4033),g=n(8703),h=n(8445),E=n(6656),b=n(4705),y=n(7284),v=n(3258),w=n(4912),x=n(5484),k=n(5556),S=n(3131),C=n(2655),D=n(2418),A=d.ZP.div.withConfig({displayName:"App__Container",componentId:"sc-1ywd52f-0"})(["height:300px;width:300px;border-radius:10px;background:linear-gradient( 180deg,#082673 30.67%,#644bd0 75.51%,#a56adf 106.47% );padding:11px 8px 0px 8px;"]),Z=function(e){var t=(0,u.usePrifina)(),n=(t.stage,t.check,t.onUpdate),c=t.API,d=t.registerDataConnector,Z=(0,s.useState)([]),R=(0,o.Z)(Z,2),_=R[0],I=R[1],O=(0,s.useState)(),F=(0,o.Z)(O,2),P=F[0],T=F[1],z=(0,s.useState)(),B=(0,o.Z)(z,2),L=B[0],j=B[1],K=(0,s.useRef)(),U=function(e){console.log("ORIGINAL PROCESS DATA",e);var t=e;console.log("newData",t);var n=t.distances.reduce((function(e,t){return e+t.distance}),0);T(t),j(1e3*n.toFixed(4)),Object.assign(t,{distance:Number(1e3*n.toFixed(4))}),I([t])};console.log("processed display data",_),console.log("processed data",P);var q=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("UPDATE ",t),t.hasOwnProperty("data")&&t.data.hasOwnProperty("content")&&console.log("PAYLOAD DATA",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=(0,s.useState)(0),Y=(0,o.Z)(N,2),$=Y[0],W=Y[1],G=(0,s.useState)(),M=(0,o.Z)(G,2),X=M[0],H=M[1];(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(p.A,q),d(p.A,[m.Z]),K.current=!0;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}K.current||function(){e.apply(this,arguments)}()}),[]);var J=function(e){return[e.getFullYear(),(e.getMonth()+1).toString().padStart(2,"0"),e.getDate().toString().padStart(2,"0")].join("-")};return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t,n,r,o,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.setDate(t.getDate()-$),r=J(new Date(n)),H(r),console.log("datestr",r),o=(0,a.Z)({},"s3::date",(0,a.Z)({},u.Op.eq,r)),console.log("FILTER",o),e.next=9,c[p.A].Fitbit.queryActivitySummary({filter:o,fields:"caloriesOut,steps,distances"});case 9:s=e.sent,console.log("RESULT",s),U(s.data.getDataObject.content);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[$]),console.log("day",$),console.log("day",_),l().createElement(A,null,l().createElement(f.kC,{alignItems:"center",mb:21},l().createElement(f.xv,{fontSize:16,color:"white",fontWeight:700,ml:9,mr:95},"Activity widget"),l().createElement(g.Ee,{src:b.Z})),l().createElement(f.xu,null,l().createElement(f.kC,{h:32,justifyContent:"space-between",alignItems:"center",bg:"#D4D7F2CC",padding:"0px 65px 0px 65px",borderTopRightRadius:8,borderTopLeftRadius:8},l().createElement(h.hU,{style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:l().createElement(E.wy,null),onClick:(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W($+1);case 1:case"end":return e.stop()}}),e)})))}),l().createElement(f.xv,null,X),l().createElement(h.hU,{disabled:1===$,style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:l().createElement(E.XC,null),onClick:(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W($-1);case 1:case"end":return e.stop()}}),e)})))})),l().createElement(f.xu,{height:190,style:{background:"rgba(251, 242, 242, 0.3)",borderBottomLeftRadius:8,borderBottomRightRadius:8,paddingTop:10}},l().createElement(f.kC,{width:"100%",justifyContent:"space-between",style:{paddingRight:55,paddingLeft:55}},l().createElement(f.kC,{alignItems:"center"},l().createElement(y.Yq,{color:"#222671"}),l().createElement(f.xv,{ml:3,color:"#222671"},void 0===P?0:P.caloriesOut)),l().createElement(f.kC,{alignItems:"center"},l().createElement(y.W9,{color:"#DDB7F4"}),l().createElement(f.xv,{ml:3,color:"#DDB7F4"},void 0===P?0:P.steps)),l().createElement(f.kC,{alignItems:"center"},l().createElement(y.hu,{color:"#2A2E9C"}),l().createElement(f.xv,{ml:3,color:"#2A2E9C"},void 0===P?0:L))),l().createElement(v.h,{width:"100%",height:"100%"},l().createElement(w.v,{style:{cursor:"pointer"},data:_,margin:{top:5,right:0,left:0,bottom:30}},l().createElement(x.q,{strokeDasharray:"none",stroke:"null"}),l().createElement(k.K,{hide:!0,dataKey:"name"}),l().createElement(S.B,{hide:!0}),l().createElement(C.u,{cursor:{fill:"transparent"},contentStyle:{background:"rgba(255, 255, 255, 0.9)",padding:5,border:0,borderRadius:8},itemStyle:{fontSize:14}}),l().createElement(D.$,{barSize:45,name:"Calories",dataKey:"caloriesOut",fill:"#222671"}),l().createElement(D.$,{barSize:45,name:"Steps",dataKey:"steps",fill:"#DDB7F4"}),l().createElement(D.$,{barSize:45,name:"Distance (m)",dataKey:"distance",fill:"#2A2E9C"}))))))};Z.displayName="FitbitActivity";const R=Z;var _=n(953),I=document.getElementById("root");(0,_.createRoot)(I).render(l().createElement(R,null))}}]);