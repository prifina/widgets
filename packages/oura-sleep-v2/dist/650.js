"use strict";(self.webpackChunk_prifina_widgets_oura_sleep_v2=self.webpackChunk_prifina_widgets_oura_sleep_v2||[]).push([[650],{5650:(e,a,t)=>{t.r(a);var M=t(7900),r=t.n(M),l=t(4149),g=t(2734),i=t(3280);const N={Small:"300x300",MediusWide:"616x300",MediumTall:"300x616",Large:"616x616"},m=e=>(console.log(e),r().createElement(r().Fragment,null,r().Children.map(e.children,(a=>{if(a)return r().cloneElement(a,{...e})})))),D="pj76FaW92nAwfxEfSHjEcwR";var u=t(6656),d=t(6827),y=t(8445),o=t(3258),j=t(4912),s=t(5484),z=t(5556),n=t(3131),I=t(2655),c=t(2418);const A=({id:e,date:a,day:t,setDay:M,selectedOption:l,availableOptions:g,chnageAvalibleOptions:i,monthlyProcessedData:N,yearlyProcessedData:m,weeklyProcessedData:D})=>{let A={};switch(l){case"Month":A=N;break;case"Year":A=m;break;case"Week":A=D}return console.log(A),r().createElement(d.xu,{style:{background:"rgba(251, 242, 242, 0.3)",borderRadius:10,minWidth:284,flex:"1 1"}},r().createElement(d.kC,{h:32,justifyContent:"space-between",alignItems:"center",bg:"none",padding:"0px 15px 0px 15px",borderTopRightRadius:8,borderTopLeftRadius:8},0===g.length?r().createElement(r().Fragment,null):r().createElement("select",{onChange:a=>{console.log("change"),i(e,a.target.value,l)},value:l,style:{background:"#FFA654",border:0,borderRadius:5,padding:3,outline:"none"}},r().createElement("option",{value:l,disabled:!0},l),g.map((e=>r().createElement("option",{value:e},e)))),r().createElement(d.kC,null,r().createElement(y.hU,{style:{background:"transparent",border:0,cursor:"pointer",fontSize:19,color:"#fff"},"aria-label":"Search database",icon:r().createElement(u.wy,null),onClick:async()=>{M(t+1)}}),r().createElement(d.xv,{color:"#fff"},a),r().createElement(y.hU,{disabled:1===t,style:{background:"transparent",border:0,cursor:"pointer",fontSize:19,color:"#fff"},"aria-label":"Search database",icon:r().createElement(u.XC,null),onClick:async()=>{M(t-1)}}))),r().createElement(d.xu,{height:202},r().createElement(o.h,{width:"100%",height:"100%"},r().createElement(j.v,{width:200,height:202,data:A,margin:{top:20,right:30,left:0,bottom:0},style:{cursor:"pointer"}},r().createElement(s.q,{strokeDasharray:"none",vertical:!1,stroke:"rgba(0, 0, 0, 0.12)"}),r().createElement(z.K,{tickLine:!1,dataKey:"0",stroke:"rgba(0, 0, 0, 0.12)",label:{value:"STAGES",position:"bottom",offset:-20,stroke:"white",fontSize:10}}),r().createElement(n.B,{axisLine:!1,tickLine:!1,label:{value:"HOURS ASLEEP",angle:-90,stroke:"white",fontSize:10},allowDecimals:!1,type:"number",tickFormatter:e=>Math.floor(e/3600),domain:[0,"dataMax + 3600"],stroke:"white",dataKey:"total"}),r().createElement(I.u,null),r().createElement(c.$,{barSize:45,stackId:"a",name:"Awake",dataKey:"awake",fill:"#f3f3c2"}),r().createElement(c.$,{barSize:45,stackId:"a",name:"Light",dataKey:"light",fill:"#FFA654"}),r().createElement(c.$,{barSize:45,stackId:"a",name:"Deep",dataKey:"deep",fill:"#B96314"}),r().createElement(c.$,{barSize:45,stackId:"a",name:"REM",dataKey:"rem",fill:"#6D3D10"})))))};var w=t(8703);const k=JSON.parse('{"Wm":[{"summary_date":"2023-01-23","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-24","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-25","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-26","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-27","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-28","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-29","awake":0,"light":0,"rem":0,"deep":0,"total":0}],"wY":[{"summary_date":"2023-01-01","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-02","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-03","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-04","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-05","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-06","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-07","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-08","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-09","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-10","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-11","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-12","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-13","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-14","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-15","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-16","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-17","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-18","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-19","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-20","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-21","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-22","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-23","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-24","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-25","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"2023-01-26","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-27","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-28","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-29","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-30","awake":0,"light":0,"rem":0,"deep":0,"total":0},{"summary_date":"2023-01-31","awake":0,"light":0,"rem":0,"deep":0,"total":0}],"bK":[{"summary_date":"January","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"February","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"March","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"Aprill","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"May","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"June","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"July","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"August","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"September","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"October","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"November","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310},{"summary_date":"December","awake":1230,"light":10260,"rem":7140,"deep":2910,"total":20310}]}'),E=l.ZP.div`
  width: ${e=>e.size?e.size.split("x")[0]:"300px"};
  height: ${e=>e.size?e.size.split("x")[1]:"300px"};
  padding: 11px 8px 8px 8px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
`,p=e=>{const{stage:a,check:t,onUpdate:l,API:u,registerDataConnector:y}=(0,g.usePrifina)(),[o,j]=(0,M.useState)({}),[s,z]=(0,M.useState)({}),[n,I]=(0,M.useState)({}),[c,p]=(0,M.useState)("Small"),L=(0,M.useRef)(),T=new Date,[h,x]=(0,M.useState)(["Year","Month"]),[O,S]=(0,M.useState)([{id:1,option:"Week"}]),U=async e=>{console.log("UPDATE ",e),e.hasOwnProperty("settings")&&"object"==typeof k.settings&&e.settings.hasOwnProperty("size"),e.hasOwnProperty("data")&&e.data.hasOwnProperty("content")&&console.log("PAYLOAD DATA",e)};(0,M.useEffect)((()=>{L.current||async function(){l(D,U),y(D,[i.Z]),L.current=!0}()}),[]);const[C,Q]=(0,M.useState)(1),[b,_]=(0,M.useState)("1");return(0,M.useEffect)((()=>{!async function(){const e=(e=>[e.getFullYear(),(e.getMonth()+1).toString().padStart(2,"0"),e.getDate().toString().padStart(2,"0")].join("-"))(new Date(T.setDate(T.getDate()-365)));_(e);const t={"s3::date":{[g.Op.gte]:e}};await u[D].Oura.querySleepData({filter:t,fields:"summary_date,awake,light,deep,rem"}),"dev"===a&&(j([...k.Wm]),z([...k.wY]),I([...k.bK]))}()}),[C]),console.log(a),r().createElement(E,{size:N[c]},r().createElement(d.kC,{alignItems:"center",justify:"space-between",mb:9},r().createElement(d.xv,{fontSize:16,color:"white",fontWeight:700,ml:9,mr:110},"Sleep widget"),r().createElement(w.Ee,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAzOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yLjg3NSAxLjI1NDI3QzIuODc1IDEuNzAzOTggMy40IDEuODE2NDEgNS4zMTI1IDEuODE2NDFDNy4yMjUgMS44MTY0MSA3Ljc1IDEuNzAzOTggNy43NSAxLjI1NDI3QzcuNzUgMC44MDQ1NTYgNy4yMjUgMC42OTIxMjggNS4zMTI1IDAuNjkyMTI4QzMuNCAwLjY5MjEyOCAyLjg3NSAwLjgwNDU1NiAyLjg3NSAxLjI1NDI3WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yLjgwMDM3IDMuNTM5NzlDLTAuMDg3MTM0OCA1LjA3NjMxIC0wLjAxMjEzNDggOS44NzMyMyAyLjg3NTM3IDExLjM3MjNDNC4zMDAzNyAxMi4xMjE4IDYuNzc1MzcgMTIuMDg0MyA3Ljk3NTM3IDExLjMzNDhDMTAuNzEyOSA5LjQ5ODQ3IDEwLjYwMDQgNC45NjM4OCA3Ljc1MDM3IDMuNTAyMzJDNi4zNjI4NyAyLjc5MDI3IDQuMTEyODcgMi43OTAyNyAyLjgwMDM3IDMuNTM5NzlaTTcuMDAwMzcgNC4yNTE4M0M4LjM1MDM3IDQuOTYzODggOC44NzUzNyA1Ljg2MzMgOC44NzUzNyA3LjUxMjI0QzguODc1MzcgOS4wODYyMyA4LjEyNTM3IDEwLjIxMDUgNi42NjI4NyAxMC44MTAxQzQuMzM3ODcgMTEuNzQ3IDEuNzUwMzcgMTAuMDYwNiAxLjc1MDM3IDcuNjI0NjdDMS43NTAzNyA1LjkwMDc4IDIuMjM3ODcgNC45NjM4OCAzLjU1MDM3IDQuMjg5MzFDNC44NjI4NyAzLjU3NzI3IDUuNjUwMzcgMy41Mzk3OSA3LjAwMDM3IDQuMjUxODNaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTEwLjc1IDUuNTYzNjZDMTAuNzUgMTAuMDYwOCAxMi4wNjI1IDExLjkzNDYgMTUuMjUgMTEuOTM0NkMxNi42NzUgMTEuOTM0NiAxNy4xNjI1IDExLjc0NzIgMTguMDI1IDEwLjg0NzhDMTkgOS44MzU5MiAxOS4xMTI1IDkuNDIzNjggMTkuMyA2LjM1MDY2QzE5LjQ1IDMuMzUyNTggMTkuNDEyNSAyLjk0MDM0IDE4Ljg1IDIuOTQwMzRDMTguMzYyNSAyLjk0MDM0IDE4LjI1IDMuMzkwMDYgMTguMjUgNS43NTEwNEMxOC4yNSA4Ljg5OTAyIDE3LjggMTAuMTczMiAxNi40ODc1IDEwLjc3MjhDMTUuMDI1IDExLjQ0NzQgMTQuMTI1IDExLjI2IDEyLjk2MjUgMTAuMDk4MkMxMS45NSA5LjA0ODkyIDExLjg3NSA4LjgyNDA3IDExLjg3NSA1Ljk3NTlDMTEuODc1IDMuNTM5OTYgMTEuNzYyNSAyLjk0MDM0IDExLjMxMjUgMi45NDAzNEMxMC44NjI1IDIuOTQwMzQgMTAuNzUgMy40NjUwMSAxMC43NSA1LjU2MzY2WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yMC4xMjUgNy40Mzc0NkMyMC4xMjUgMTEuMTg1MSAyMC4yMzc1IDExLjkzNDYgMjAuNjg3NSAxMS45MzQ2QzIxLjEgMTEuOTM0NiAyMS4yNSAxMS40ODQ5IDIxLjI1IDEwLjA2MDhWOC4xODY5OEgyMi45Mzc1QzI0LjU4NzUgOC4xODY5OCAyNC42NjI1IDguMjYxOTMgMjUuNjc1IDEwLjA2MDhDMjYuMjM3NSAxMS4wNzI2IDI2LjkxMjUgMTEuOTM0NiAyNy4xNzUgMTEuOTM0NkMyNy44MTI1IDExLjkzNDYgMjcuNzc1IDExLjc0NzIgMjYuNjUgOS44MzU5MkwyNS42NzUgOC4xODY5OEwyNi40NjI1IDcuNTEyNDFDMjcuNzM3NSA2LjQyNTYxIDI3Ljg1IDUuMDAxNTIgMjYuNzI1IDMuOTE0NzJDMjUuOSAzLjA1Mjc3IDI1LjQ4NzUgMi45NDAzNCAyMi45Mzc1IDIuOTQwMzRIMjAuMTI1VjcuNDM3NDZaTTI1LjY3NSA0LjI4OTQ4QzI2LjU3NSA0LjkyNjU3IDI2Ljc2MjUgNS45MDA5NCAyNi4wNSA2LjYxMjk5QzI1Ljc4NzUgNi44NzUzMiAyNC42MjUgNy4wNjI3IDIzLjQyNSA3LjA2MjdIMjEuMjVWNS4zNzYyOFYzLjY4OTg2SDIzLjA1QzI0LjA2MjUgMy42ODk4NiAyNS4xODc1IDMuOTUyMiAyNS42NzUgNC4yODk0OFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMzAuNDM3NiA3LjEzNzU4QzI5LjQyNTEgOS40MjM2MSAyOC41MjUxIDExLjQ0NzMgMjguNDUwMSAxMS42MzQ3QzI4LjM3NTEgMTEuNzg0NiAyOC41NjI2IDExLjkzNDUgMjguODYyNiAxMS45MzQ1QzI5LjE2MjYgMTEuOTM0NSAyOS42MTI2IDExLjQ0NzMgMjkuODc1MSAxMC44MTAyQzMwLjMyNTEgOS43MjM0MiAzMC40MDAxIDkuNjg1OTQgMzIuODc1MSA5LjY4NTk0QzM1LjM1MDEgOS42ODU5NCAzNS40MjUxIDkuNzIzNDIgMzUuODc1MSAxMC44MTAyQzM2LjEzNzYgMTEuNDQ3MyAzNi41ODc2IDExLjkzNDUgMzYuODg3NiAxMS45MzQ1QzM3LjUyNTEgMTEuOTM0NSAzNy42Mzc2IDEyLjMwOTMgMzUuMzEyNiA3LjEwMDFDMzQuMTUwMSA0LjUxNDI3IDMzLjIxMjYgMi45NDAyOCAzMi44NzUxIDIuOTQwMjhDMzIuNTM3NiAyLjk0MDI4IDMxLjYwMDEgNC41MTQyNyAzMC40Mzc2IDcuMTM3NThaTTMzLjkyNTEgNi40MjU1NEMzNC4zNzUxIDcuNTEyMzQgMzQuNzUwMSA4LjUyNDE5IDM0Ljc1MDEgOC42NzQwOUMzNC43NTAxIDguODI0IDMzLjkyNTEgOC45MzY0MyAzMi44NzUxIDguOTM2NDNDMzEuODYyNiA4LjkzNjQzIDMxLjAwMDEgOC44MjQgMzEuMDAwMSA4LjY3NDA5QzMxLjAwMDEgOC4xNDk0MyAzMi42NTAxIDQuNDM5MzEgMzIuODc1MSA0LjQzOTMxQzMyLjk4NzYgNC40MzkzMSAzMy40NzUxIDUuMzM4NzQgMzMuOTI1MSA2LjQyNTU0WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K",style:{marginRight:"30px"}})),r().createElement(d.kC,{gap:8,wrap:"wrap",style:{flex:1}},r().createElement(m,{date:b,day:C,weeklyProcessedData:o,monthlyProcessedData:s,yearlyProcessedData:n,setDay:Q,availableOptions:h,chnageAvalibleOptions:(e,a,t)=>{let M=h.filter((e=>e!==a));M.push(t),x(M);let r=O;r[e-1].option=a,S(r)}},O.map((e=>r().createElement(A,{id:e.id,selectedOption:e.option}))))))};p.displayName="OuraSleep";const L=p;var T=t(953);const h=document.getElementById("root");(0,T.createRoot)(h).render(r().createElement(L,null))}}]);