"use strict";(self.webpackChunk_prifina_widgets_fitbit_heart_v2=self.webpackChunk_prifina_widgets_fitbit_heart_v2||[]).push([[104],{3104:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(1119),a=n(6470),o=n(513),i=(n(6781),n(5734),n(9120),n(8188),n(8233),n(7162)),c=n.n(i),s=n(7900),l=n.n(s),u=n(4149),p=n(2734),d=n(2230),f=n(4565),g=n(6827),h=n(8703),b=n(8445),m=n(6656),w=n(4705),x=n(9044),E=u.ZP.div.withConfig({displayName:"App__Container",componentId:"sc-13nuhwb-0"})(["height:300px;width:300px;border-radius:10px;background:linear-gradient( 180deg,#082673 30.67%,#644bd0 75.51%,#a56adf 106.47% );padding:11px 8px 0px 8px;"]),k=function(e){var t=(0,p.usePrifina)(),n=(t.stage,t.check,t.onUpdate),i=t.API,u=t.registerDataConnector,k=(0,s.useState)({}),v=(0,o.Z)(k,2),y=v[0],D=v[1],S=(0,s.useRef)(),R=function(e){console.log("ORIGINAL PROCESS DATA",e);var t=e;console.log("newData",t),D(t)};console.log("processed data",y);var C=function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("UPDATE ",t),t.hasOwnProperty("data")&&t.data.hasOwnProperty("content")&&console.log("PAYLOAD DATA",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=(0,s.useState)(0),Z=(0,o.Z)(A,2),_=Z[0],I=Z[1],P=(0,s.useState)(),T=(0,o.Z)(P,2),F=T[0],L=T[1];(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(d.A,C),u(d.A,[f.Z]),S.current=!0;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}S.current||function(){e.apply(this,arguments)}()}),[]);var O=function(e){return[e.getFullYear(),(e.getMonth()+1).toString().padStart(2,"0"),e.getDate().toString().padStart(2,"0")].join("-")};return(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var t,n,a,o,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.setDate(t.getDate()-_),a=O(new Date(n)),L(a),console.log("datestr",a),o=(0,r.Z)({},"s3::date",(0,r.Z)({},p.Op.eq,a)),console.log("FILTER",o),e.next=9,i[d.A].Fitbit.queryActivitySummary({filter:o,fields:"restingHeartRate"});case 9:s=e.sent,console.log("RESULT",s),R(s.data.getDataObject.content);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[_]),console.log("day",_),l().createElement(E,null,l().createElement(g.kC,{alignItems:"center",mb:8},l().createElement(g.xv,{fontSize:16,color:"white",fontWeight:700,ml:9,mr:110},"Heart widget"),l().createElement(h.Ee,{src:w.Z})),l().createElement(g.xu,null,l().createElement(g.kC,{h:32,justifyContent:"space-between",alignItems:"center",bg:"#D4D7F2CC",padding:"0px 65px 0px 65px",borderTopRightRadius:8,borderTopLeftRadius:8},l().createElement(b.hU,{style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:l().createElement(m.wy,null),onClick:(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(_+1);case 1:case"end":return e.stop()}}),e)})))}),l().createElement(g.xv,null,F),l().createElement(b.hU,{disabled:0===_,style:{background:"transparent",border:0,cursor:"pointer",fontSize:19},"aria-label":"Search database",icon:l().createElement(m.XC,null),onClick:(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(_-1);case 1:case"end":return e.stop()}}),e)})))})),l().createElement(g.kC,{height:202,alignItems:"center",style:{background:"rgba(251, 242, 242, 0.3)",borderBottomLeftRadius:8,borderBottomRightRadius:8,backgroundImage:"url(".concat(x.Z,")"),backgroundRepeat:"no-repeat",backgroundPosition:"right"}},l().createElement(g.kC,{width:"100%",justifyContent:"center",style:{paddingRight:55,paddingLeft:55}},l().createElement(g.xu,{width:140,height:140,bg:"rgba(212, 215, 242, 0.2)",style:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:8,position:"relative"}},l().createElement(g.xv,{as:"b",fontSize:72,color:"#D4D7F2",lineHeight:1.1,position:"absolute",top:"5px"},void 0===y?0:y.restingHeartRate),l().createElement(g.xv,{fontSize:16,color:"#DDB7F4",position:"absolute",bottom:"5px"},"RESTING HR"))))))};k.displayName="FitbitHeart";const v=k}}]);