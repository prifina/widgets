"use strict";(self.webpackChunk_prifina_widgets_oura_sleep_v2=self.webpackChunk_prifina_widgets_oura_sleep_v2||[]).push([[104],{3104:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(7900),n=a.n(s),o=a(4149),r=a(2734),i=a(3280),l=a(1137),c=a(7899),p=a(5289),d=a(1107),f=a(6827),u=a(8703),m=a(468);const g=o.ZP.div`
  width: ${e=>e.size&&e.size.split("x")[0]};
  height: ${e=>e.size&&e.size.split("x")[1]};
  padding: 11px 8px 8px 8px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: linear-gradient(180deg, #343434 0%, #d3bc69 149.83%);
`,w=e=>{const{stage:t,check:a,onUpdate:o,API:w,registerDataConnector:h}=(0,r.usePrifina)(),[y,D]=(0,s.useState)([]),[k,b]=(0,s.useState)([]),[O,v]=(0,s.useState)("616x616"),_=(0,s.useRef)(),x=new Date,[E,S]=(0,s.useState)({week:{dates:[],processedData:[],offset:0},month:{dates:[],processedData:[],offset:0},year:{dates:[],processedData:[],offset:0}}),A=async e=>{e.hasOwnProperty("settings")&&"object"==typeof m.settings&&e.settings.hasOwnProperty("size")&&v(e.settings.size),e.hasOwnProperty("data")&&e.data.hasOwnProperty("content")&&"Oura/querySleepSummariesAsync"===e.data.dataconnector&&e.data.content.length},z=(e,a)=>{let s=e;const n="summary_date,awake,light,rem,deep,total".split(",");let o=[];if(console.log("keys",n),"dev"===t){console.log("test",s);const e=s[0].split(","),t=s[1].split(","),r=[];n.forEach((a=>{const s=e.indexOf(a);s>-1&&r.push(t[s])}));const i={summary_date:r[0],awake:parseInt(r[1]),light:parseInt(r[2]),rem:parseInt(r[3]),deep:parseInt(r[4]),total:parseInt(r[5])};let l=new Date(i.summary_date);o.push(i);for(let e=0;e<a;e++){const e=l.setDate(l.getDate()-1);let t=Object.assign({},i);t.summary_date=new Date(e).toISOString().split("T")[0],o.push(t),l=new Date(e)}console.log("new data",o)}else s.shift(),s.forEach((e=>{const t=e.split(",");o.push({[n[0]]:t[0],[n[1]]:Number(t[1]),[n[2]]:Number(t[2]),[n[3]]:Number(t[3]),[n[4]]:Number(t[4]),[n[5]]:Number(t[5])})}));return console.log("process result",o),o};return(0,s.useEffect)((()=>{_.current||async function(){o(c.A,A),h(c.A,[i.Z]),_.current=!0}()}),[]),(0,s.useEffect)((()=>{"616x616"===O?(b([{id:1,option:"Week"},{id:2,option:"Year"},{id:3,option:"Month"}]),D([])):"300x300"===O?(b([{id:1,option:"Week"}]),D(["Year","Month"])):(b([{id:1,option:"Week"},{id:2,option:"Year"}]),D(["Month"]))}),[O]),(0,s.useEffect)((()=>{!async function(){const e=(0,l.v4)(new Date(x.setDate(x.getDate()-(x.getDay()+6)%7-7*E.week.offset))),a=(0,l.v4)(new Date(x.setDate(x.getDate()-(x.getDay()+6)%7-7*E.week.offset+6)));S((t=>({...t,week:{...t.week,dates:[e,a]}})));const s={"s3::date":{[r.Op.between]:[e,a]}},n=await w[c.A].Oura.querySleepDataAsync({filter:s,fields:"summary_date,awake,light,deep,rem,total"});"dev"===t&&S((e=>({...e,week:{...e.week,processedData:[...z(n.data.getDataObject.content,6)]}})))}()}),[E.week.offset]),(0,s.useEffect)((()=>{!async function(){const e=(0,l.v4)(new Date(x.getFullYear(),x.getMonth()-E.month.offset,1)),a=(0,l.v4)(new Date(x.getFullYear(),x.getMonth()+(0===E.month.offset?1:-E.month.offset-1),0));S((t=>({...t,month:{...t.month,dates:[e,a]}})));const s={"s3::date":{[r.Op.between]:[e,a]}},n=await w[c.A].Oura.querySleepDataAsync({filter:s,fields:"summary_date,awake,light,deep,rem,total"});"dev"===t&&S((e=>({...e,month:{...e.month,processedData:[...z(n.data.getDataObject.content,29)]}})))}()}),[E.month.offset]),(0,s.useEffect)((()=>{!async function(){const e=x.getFullYear()-E.year.offset,a=(0,l.v4)(new Date(e,0,1)),s=(0,l.v4)(new Date(e,11,31));console.log("startOfYear",a),console.log(s),S((e=>({...e,year:{...e.year,dates:[a,s]}})));const n={"s3::date":{[r.Op.between]:[a,s]}},o=await w[c.A].Oura.querySleepDataAsync({filter:n,fields:"summary_date,awake,light,deep,rem,total"});"dev"===t&&S((e=>({...e,year:{...e.year,processedData:[...z(o.data.getDataObject.content,364)]}})))}()}),[E.year.offset]),n().createElement(g,{size:O},n().createElement(f.kC,{alignItems:"center",justify:"space-between",mb:9},n().createElement(f.xv,{fontSize:16,color:"white",fontWeight:700,ml:9,mr:110},"Sleep widget"),n().createElement(u.Ee,{src:p.Z,style:{marginRight:"30px"}})),n().createElement(f.kC,{gap:8,wrap:"wrap",style:{flex:1}},n().createElement(l.FW,{widgetsData:E,setWidgetsData:S,availableOptions:y,chnageAvalibleOptions:(e,t,a)=>{let s=y.filter((e=>e!==t));s.push(a),D(s);let n=k;n[e-1].option=t,b(n)}},k.map((e=>n().createElement(d.Z,{id:e.id,selectedOption:e.option}))))))};w.displayName="OuraSleep";const h=w}}]);