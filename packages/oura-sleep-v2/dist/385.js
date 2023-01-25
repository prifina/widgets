"use strict";(self.webpackChunk_prifina_widgets_oura_sleep_v2=self.webpackChunk_prifina_widgets_oura_sleep_v2||[]).push([[385],{6385:(e,M,t)=>{t.r(M);var a=t(7900),N=t.n(a),D=t(4149),g=t(2734),n=t(3280);const j=(e,M)=>{const t={summary_date:e.summary_date,awake:e.awake,light:e.light,rem:e.rem,deep:e.deep,total:e.total};let a=[],N=new Date(e.summary_date);for(let e=0;e<M;e++){const e=N.setDate(N.getDate()-1);let M=Object.assign({},t);M.summary_date=new Date(e).toISOString().split("T")[0],a.push(M),N=new Date(e)}return a},i={Small:"300x300",MediusWide:"616x300",MediumTall:"300x616",Large:"616x616"},r=e=>(console.log(e),N().createElement(N().Fragment,null,N().Children.map(e.children,(M=>{if(M)return N().cloneElement(M,{...e})})))),z="pj76FaW92nAwfxEfSHjEcwR";var c=t(6656),I=t(6827),l=t(8445),u=t(3258),o=t(4912),y=t(5484),s=t(5556),A=t(3131),E=t(2655),L=t(2418);const T=({id:e,date:M,day:t,setDay:a,selectedOption:D,availableOptions:g,chnageAvalibleOptions:n,monthlyProcessedData:j,yearlyProcessedData:i,weeklyProcessedData:r})=>{let z={};switch(D){case"Month":z=j;break;case"Year":z=i;break;case"Week":z=r}return console.log(z),N().createElement(I.xu,{style:{background:"rgba(251, 242, 242, 0.3)",borderRadius:10,minWidth:284,flex:"1 1"}},N().createElement(I.kC,{h:32,justifyContent:"space-between",alignItems:"center",bg:"none",padding:"0px 15px 0px 15px",borderTopRightRadius:8,borderTopLeftRadius:8},0===g.length?N().createElement(N().Fragment,null):N().createElement("select",{onChange:M=>{console.log("change"),n(e,M.target.value,D)},value:D,style:{background:"#FFA654",border:0,borderRadius:5,padding:3,outline:"none"}},N().createElement("option",{value:D,disabled:!0},D),g.map((e=>N().createElement("option",{value:e},e)))),N().createElement(I.kC,null,N().createElement(l.hU,{style:{background:"transparent",border:0,cursor:"pointer",fontSize:19,color:"#fff"},"aria-label":"Search database",icon:N().createElement(c.wy,null),onClick:async()=>{a(t+1)}}),N().createElement(I.xv,{color:"#fff"},M),N().createElement(l.hU,{disabled:1===t,style:{background:"transparent",border:0,cursor:"pointer",fontSize:19,color:"#fff"},"aria-label":"Search database",icon:N().createElement(c.XC,null),onClick:async()=>{a(t-1)}}))),N().createElement(I.xu,{height:202},N().createElement(u.h,{width:"100%",height:"100%"},N().createElement(o.v,{width:200,height:202,data:z,margin:{top:20,right:30,left:0,bottom:0},style:{cursor:"pointer"}},N().createElement(y.q,{strokeDasharray:"none",vertical:!1,stroke:"rgba(0, 0, 0, 0.12)"}),N().createElement(s.K,{tickLine:!1,dataKey:"0",stroke:"rgba(0, 0, 0, 0.12)",label:{value:"STAGES",position:"bottom",offset:-20,stroke:"white",fontSize:10}}),N().createElement(A.B,{axisLine:!1,tickLine:!1,label:{value:"HOURS ASLEEP",angle:-90,stroke:"white",fontSize:10},allowDecimals:!1,type:"number",tickFormatter:e=>Math.floor(e/3600),domain:[0,"dataMax + 3600"],stroke:"white",dataKey:"total"}),N().createElement(E.u,{cursor:{fill:"transparent"},contentStyle:{background:"rgba(0, 0, 0, 0.9)",padding:5,border:0},itemStyle:{fontSize:14},formatter:e=>(e=>{const M=e%3600;return Math.floor(e/3600)+"h "+Math.floor(M/60)+"m"})(e)}),N().createElement(L.$,{barSize:45,stackId:"a",name:"Awake",dataKey:"awake",fill:"#f3f3c2"}),N().createElement(L.$,{barSize:45,stackId:"a",name:"Light",dataKey:"light",fill:"#FFA654"}),N().createElement(L.$,{barSize:45,stackId:"a",name:"Deep",dataKey:"deep",fill:"#B96314"}),N().createElement(L.$,{barSize:45,stackId:"a",name:"REM",dataKey:"rem",fill:"#6D3D10"})))))};var d=t(8703);const O=D.ZP.div`
  width: ${e=>e.size?e.size.split("x")[0]:"300px"};
  height: ${e=>e.size?e.size.split("x")[1]:"300px"};
  padding: 11px 8px 8px 8px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
`,x=e=>{const{stage:M,check:t,onUpdate:D,API:c,registerDataConnector:l}=(0,g.usePrifina)(),[u,o]=(0,a.useState)({}),[y,s]=(0,a.useState)({}),[A,E]=(0,a.useState)({}),[L,x]=(0,a.useState)("Small"),S=(0,a.useRef)(),m=new Date,[w,k]=(0,a.useState)(["Year","Month"]),[p,U]=(0,a.useState)([{id:1,option:"Week"}]),h=async e=>{console.log("UPDATE ",e),e.hasOwnProperty("settings")&&"object"==typeof data.settings&&e.settings.hasOwnProperty("size"),e.hasOwnProperty("data")&&e.data.hasOwnProperty("content")&&console.log("PAYLOAD DATA",e)};(0,a.useEffect)((()=>{S.current||async function(){D(z,h),l(z,[n.Z]),S.current=!0}()}),[]);const[C,Q]=(0,a.useState)(1),[b,f]=(0,a.useState)("1");return(0,a.useEffect)((()=>{!async function(){const e=(e=>[e.getFullYear(),(e.getMonth()+1).toString().padStart(2,"0"),e.getDate().toString().padStart(2,"0")].join("-"))(new Date(m.setDate(m.getDate()-365)));f(e);const M={"s3::date":{[g.Op.gte]:e}},t=await c[z].Oura.querySleepData({filter:M,fields:"summary_date,awake,light,deep,rem"});o(j(t.data.getDataObject.content,7)),s(j(t.data.getDataObject.content,30)),E(j(t.data.getDataObject.content,365))}()}),[C]),N().createElement(O,{size:i[L]},N().createElement(I.kC,{alignItems:"center",justify:"space-between",mb:9},N().createElement(I.xv,{fontSize:16,color:"white",fontWeight:700,ml:9,mr:110},"Sleep widget"),N().createElement(d.Ee,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAzOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yLjg3NSAxLjI1NDI3QzIuODc1IDEuNzAzOTggMy40IDEuODE2NDEgNS4zMTI1IDEuODE2NDFDNy4yMjUgMS44MTY0MSA3Ljc1IDEuNzAzOTggNy43NSAxLjI1NDI3QzcuNzUgMC44MDQ1NTYgNy4yMjUgMC42OTIxMjggNS4zMTI1IDAuNjkyMTI4QzMuNCAwLjY5MjEyOCAyLjg3NSAwLjgwNDU1NiAyLjg3NSAxLjI1NDI3WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yLjgwMDM3IDMuNTM5NzlDLTAuMDg3MTM0OCA1LjA3NjMxIC0wLjAxMjEzNDggOS44NzMyMyAyLjg3NTM3IDExLjM3MjNDNC4zMDAzNyAxMi4xMjE4IDYuNzc1MzcgMTIuMDg0MyA3Ljk3NTM3IDExLjMzNDhDMTAuNzEyOSA5LjQ5ODQ3IDEwLjYwMDQgNC45NjM4OCA3Ljc1MDM3IDMuNTAyMzJDNi4zNjI4NyAyLjc5MDI3IDQuMTEyODcgMi43OTAyNyAyLjgwMDM3IDMuNTM5NzlaTTcuMDAwMzcgNC4yNTE4M0M4LjM1MDM3IDQuOTYzODggOC44NzUzNyA1Ljg2MzMgOC44NzUzNyA3LjUxMjI0QzguODc1MzcgOS4wODYyMyA4LjEyNTM3IDEwLjIxMDUgNi42NjI4NyAxMC44MTAxQzQuMzM3ODcgMTEuNzQ3IDEuNzUwMzcgMTAuMDYwNiAxLjc1MDM3IDcuNjI0NjdDMS43NTAzNyA1LjkwMDc4IDIuMjM3ODcgNC45NjM4OCAzLjU1MDM3IDQuMjg5MzFDNC44NjI4NyAzLjU3NzI3IDUuNjUwMzcgMy41Mzk3OSA3LjAwMDM3IDQuMjUxODNaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTEwLjc1IDUuNTYzNjZDMTAuNzUgMTAuMDYwOCAxMi4wNjI1IDExLjkzNDYgMTUuMjUgMTEuOTM0NkMxNi42NzUgMTEuOTM0NiAxNy4xNjI1IDExLjc0NzIgMTguMDI1IDEwLjg0NzhDMTkgOS44MzU5MiAxOS4xMTI1IDkuNDIzNjggMTkuMyA2LjM1MDY2QzE5LjQ1IDMuMzUyNTggMTkuNDEyNSAyLjk0MDM0IDE4Ljg1IDIuOTQwMzRDMTguMzYyNSAyLjk0MDM0IDE4LjI1IDMuMzkwMDYgMTguMjUgNS43NTEwNEMxOC4yNSA4Ljg5OTAyIDE3LjggMTAuMTczMiAxNi40ODc1IDEwLjc3MjhDMTUuMDI1IDExLjQ0NzQgMTQuMTI1IDExLjI2IDEyLjk2MjUgMTAuMDk4MkMxMS45NSA5LjA0ODkyIDExLjg3NSA4LjgyNDA3IDExLjg3NSA1Ljk3NTlDMTEuODc1IDMuNTM5OTYgMTEuNzYyNSAyLjk0MDM0IDExLjMxMjUgMi45NDAzNEMxMC44NjI1IDIuOTQwMzQgMTAuNzUgMy40NjUwMSAxMC43NSA1LjU2MzY2WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yMC4xMjUgNy40Mzc0NkMyMC4xMjUgMTEuMTg1MSAyMC4yMzc1IDExLjkzNDYgMjAuNjg3NSAxMS45MzQ2QzIxLjEgMTEuOTM0NiAyMS4yNSAxMS40ODQ5IDIxLjI1IDEwLjA2MDhWOC4xODY5OEgyMi45Mzc1QzI0LjU4NzUgOC4xODY5OCAyNC42NjI1IDguMjYxOTMgMjUuNjc1IDEwLjA2MDhDMjYuMjM3NSAxMS4wNzI2IDI2LjkxMjUgMTEuOTM0NiAyNy4xNzUgMTEuOTM0NkMyNy44MTI1IDExLjkzNDYgMjcuNzc1IDExLjc0NzIgMjYuNjUgOS44MzU5MkwyNS42NzUgOC4xODY5OEwyNi40NjI1IDcuNTEyNDFDMjcuNzM3NSA2LjQyNTYxIDI3Ljg1IDUuMDAxNTIgMjYuNzI1IDMuOTE0NzJDMjUuOSAzLjA1Mjc3IDI1LjQ4NzUgMi45NDAzNCAyMi45Mzc1IDIuOTQwMzRIMjAuMTI1VjcuNDM3NDZaTTI1LjY3NSA0LjI4OTQ4QzI2LjU3NSA0LjkyNjU3IDI2Ljc2MjUgNS45MDA5NCAyNi4wNSA2LjYxMjk5QzI1Ljc4NzUgNi44NzUzMiAyNC42MjUgNy4wNjI3IDIzLjQyNSA3LjA2MjdIMjEuMjVWNS4zNzYyOFYzLjY4OTg2SDIzLjA1QzI0LjA2MjUgMy42ODk4NiAyNS4xODc1IDMuOTUyMiAyNS42NzUgNC4yODk0OFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMzAuNDM3NiA3LjEzNzU4QzI5LjQyNTEgOS40MjM2MSAyOC41MjUxIDExLjQ0NzMgMjguNDUwMSAxMS42MzQ3QzI4LjM3NTEgMTEuNzg0NiAyOC41NjI2IDExLjkzNDUgMjguODYyNiAxMS45MzQ1QzI5LjE2MjYgMTEuOTM0NSAyOS42MTI2IDExLjQ0NzMgMjkuODc1MSAxMC44MTAyQzMwLjMyNTEgOS43MjM0MiAzMC40MDAxIDkuNjg1OTQgMzIuODc1MSA5LjY4NTk0QzM1LjM1MDEgOS42ODU5NCAzNS40MjUxIDkuNzIzNDIgMzUuODc1MSAxMC44MTAyQzM2LjEzNzYgMTEuNDQ3MyAzNi41ODc2IDExLjkzNDUgMzYuODg3NiAxMS45MzQ1QzM3LjUyNTEgMTEuOTM0NSAzNy42Mzc2IDEyLjMwOTMgMzUuMzEyNiA3LjEwMDFDMzQuMTUwMSA0LjUxNDI3IDMzLjIxMjYgMi45NDAyOCAzMi44NzUxIDIuOTQwMjhDMzIuNTM3NiAyLjk0MDI4IDMxLjYwMDEgNC41MTQyNyAzMC40Mzc2IDcuMTM3NThaTTMzLjkyNTEgNi40MjU1NEMzNC4zNzUxIDcuNTEyMzQgMzQuNzUwMSA4LjUyNDE5IDM0Ljc1MDEgOC42NzQwOUMzNC43NTAxIDguODI0IDMzLjkyNTEgOC45MzY0MyAzMi44NzUxIDguOTM2NDNDMzEuODYyNiA4LjkzNjQzIDMxLjAwMDEgOC44MjQgMzEuMDAwMSA4LjY3NDA5QzMxLjAwMDEgOC4xNDk0MyAzMi42NTAxIDQuNDM5MzEgMzIuODc1MSA0LjQzOTMxQzMyLjk4NzYgNC40MzkzMSAzMy40NzUxIDUuMzM4NzQgMzMuOTI1MSA2LjQyNTU0WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K",style:{marginRight:"30px"}})),N().createElement(I.kC,{gap:8,wrap:"wrap",style:{flex:1}},N().createElement(r,{date:b,day:C,weeklyProcessedData:u,monthlyProcessedData:y,yearlyProcessedData:A,setDay:Q,availableOptions:w,chnageAvalibleOptions:(e,M,t)=>{let a=w.filter((e=>e!==M));a.push(t),k(a);let N=p;N[e-1].option=M,U(N)}},p.map((e=>N().createElement(T,{id:e.id,selectedOption:e.option}))))))};x.displayName="OuraSleep";const S=x;var m=t(953);const w=document.getElementById("root");(0,m.createRoot)(w).render(N().createElement(S,null))}}]);