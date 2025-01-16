import{e as w,g as y,r as o,j as e,A as k,a as R,k as _,t as F,d as P,f as V}from"./index-C2xFYc7i.js";import{F as C,a as L}from"./Input-DGenKjhr.js";import{c as B,a as t}from"./index.esm-yJKASu2N.js";import{F as r}from"./FormControl-kGCE0uvm.js";import{C as U}from"./ClipLoader-ZD7HpgKP.js";import{u as M,a as O}from"./userActions-B5LNlwhD.js";import{H as W}from"./Heading-le8S-T7p.js";import{B as A}from"./BackBtn-uZorzSMf.js";import{L as H}from"./LoadingBtn-cMEELRIl.js";import"./react-tooltip.min-BKMyztyo.js";import"./index-LvzHWtTh.js";import"./index-Chjiymov.js";const I=()=>{const d=w(),{docDetails:n}=y(l=>l.user),[u,a]=o.useState(!1),[c,x]=o.useState(!1),[p,s]=o.useState(""),[m,v]=o.useState(""),[f,g]=o.useState(""),E=async l=>{const i=document.getElementById("startTime"),N=document.getElementById("endTime"),j=document.getElementById("winBank");let h;if(c){if(!i.value)return s("Required");if(!N.value)return v("Required");if(!j.value||j.value==="Select...")return g("Required");h={...l,startTime:i.value,endTime:N.value,winBank:j.value,doorOpeningType:"Manual"}}else h=l;console.log(h),a(!0);try{const{data:{data:{doc:b,message:S}}}=await k.put(`/wallet/update-withdraw-details/${n==null?void 0:n._id}`,h);d(R({...n,wallet:b})),_.success(S),a(!1)}catch(b){a(!1),F(b)}},T=B().shape({tradeDepositBonus:t().required("Required"),referralCommissionLevel1:t().required("Required"),referralCommissionLevel2:t().required("Required"),referralCommissionLevel3:t().required("Required"),auto_trade_deposit_bonus:t().required("Required"),rideCommissionLevel1:t().required("Required"),rideCommissionLevel2:t().required("Required"),rideCommissionLevel3:t().required("Required")}),q={tradeDepositBonus:"",referralCommissionLevel1:"",referralCommissionLevel2:"",referralCommissionLevel3:"",auto_trade_deposit_bonus:"",rideCommissionLevel1:"",rideCommissionLevel2:"",rideCommissionLevel3:"",doorOpeningType:"By Comparison"};return e.jsx("div",{children:e.jsx(C,{initialValues:q,validationSchema:T,onSubmit:E,children:l=>e.jsxs(L,{className:"flex flex-col gap-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Trade Deposit Commission"}),e.jsxs("div",{className:"bg-dark p-4 rounded-lg",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(r,{control:"input",type:"number",label:"Trade Deposit Bonus %",name:"tradeDepositBonus",placeholder:"Ex : 4%",formik:l}),e.jsx(r,{control:"input",type:"number",label:"Level One Profit %",name:"referralCommissionLevel1",placeholder:"Ex : 5%",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4 mt-4",children:[e.jsx(r,{control:"input",type:"number",label:"Level Two Profit %",name:"referralCommissionLevel2",placeholder:"Ex : 4%",formik:l}),e.jsx(r,{control:"input",type:"number",label:"Level Three Profit %",name:"referralCommissionLevel3",placeholder:"Ex : 3%",formik:l})]})]}),e.jsx("h2",{className:"text-xl font-bold",children:"Auto Trade Profit Share"}),e.jsxs("div",{className:"bg-dark p-4 rounded-lg",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(r,{control:"input",type:"number",label:"Auto Trade Deposit Bonus %",name:"auto_trade_deposit_bonus",placeholder:"Ex : 4%",formik:l}),e.jsx(r,{control:"input",type:"number",label:"Level One Profit %",name:"rideCommissionLevel1",placeholder:"Ex : 5%",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4 mt-4",children:[e.jsx(r,{control:"input",type:"number",label:"Level Two Profit %",name:"rideCommissionLevel2",placeholder:"Ex : 4%",formik:l}),e.jsx(r,{control:"input",type:"number",label:"Level Three Profit %",name:"rideCommissionLevel3",placeholder:"Ex : 3%",formik:l})]})]}),e.jsx("h2",{className:"text-xl font-bold",children:"Trade Door Working"}),e.jsxs("div",{className:"bg-dark p-4 rounded-lg flex flex-col gap-5 ",children:[e.jsxs("div",{className:"flex max-[450px]:flex-col max-[450px]:items-start justify-center items-center gap-5",children:[e.jsxs("div",{className:"flex items-center gap-3 relative",children:[e.jsx("input",{className:"radio-btn",type:"radio",name:"radio-button",id:"byComparison",value:"By Comparison",onChange:()=>{x(!1)},defaultChecked:!0,hidden:!0}),e.jsx("span",{className:"custom-radio"}),e.jsx("label",{className:"text-xl font-bold radio-label",htmlFor:"byComparison",children:"By Comparison"})]}),e.jsxs("div",{className:"flex items-center gap-3 relative",children:[e.jsx("input",{className:"radio-btn",type:"radio",name:"radio-button",id:"manual",value:"Manual",onChange:()=>{x(!0)},hidden:!0}),e.jsx("span",{className:"custom-radio"}),e.jsx("label",{className:"text-xl font-bold radio-label",htmlFor:"manual",children:"Manual"})]})]}),c&&e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"font-bold",htmlFor:"winBank",children:"Win Bank"}),e.jsxs("select",{name:"winBank",id:"winBank",defaultValue:"Select...",className:"w-full bg-transparent text-inherit border border-[#374151] rounded p-3",onChange:()=>g(""),children:[e.jsx("option",{value:"Select...",disabled:!0,hidden:!0,children:"Select..."}),e.jsx("option",{value:"State Bank",children:"State Bank"}),e.jsx("option",{value:"World Bank",children:"World Bank"})]})]}),f&&e.jsx("p",{className:"text-red-600",children:f}),e.jsxs("div",{className:"flex max-[600px]:flex-col justify-between gap-5",children:[e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-inherit font-bold",children:"Start Time"}),e.jsx("input",{className:"p-3 rounded bg-dark border border-gray-700",type:"time",name:"startTime",id:"startTime",onChange:()=>s(""),onFocus:i=>i.target.showPicker()})]}),p&&e.jsx("p",{className:"text-red-600",children:p})]}),e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-inherit font-bold",children:"End Time"}),e.jsx("input",{className:"p-3 rounded bg-dark border border-gray-700",type:"time",name:"endTime",id:"endTime",onChange:()=>v(""),onFocus:i=>i.target.showPicker()})]}),m&&e.jsx("p",{className:"text-red-600",children:m})]})]})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",className:"btn-primary py-3 px-12",disabled:u,children:u?e.jsx(U,{size:20,color:"white"}):"Save"})})]})})})},$=B().shape({username:t().required("Username is required.")}),le=()=>{const{id:d}=P(),n=w(),u=V(),{docDetails:a,updateLoading:c}=y(s=>s.user),x={username:(a==null?void 0:a.username)||"",status:(a==null?void 0:a.status)||"",blockReason:(a==null?void 0:a.blockReason)||"",password:""};o.useEffect(()=>{a||n(M(d))},[a,n,d]);const p=async s=>{s==null||delete s.image,s!=null&&s.password||s==null||delete s.password,n(O(d,s,u))};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(W,{title:"Edit User",icon:"pen-alt"}),e.jsx(A,{})]}),e.jsx("div",{className:"bg-dark rounded-lg p-4 mt-6",children:e.jsx(C,{initialValues:x,validationSchema:$,enableReinitialize:!0,onSubmit:p,children:s=>{var m;return e.jsxs(L,{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4 sm:flex-row flex-col",children:[e.jsx(r,{label:"Username",control:"input",placeholder:"Enter username",name:"username",formik:s}),e.jsx(r,{label:"Password",control:"password",placeholder:"Enter password",name:"password",formik:s})]}),e.jsxs("div",{className:" flex flex-col gap-6",children:[e.jsx(r,{label:"Blocked",control:"toggle",name:"status",checkedValue:"blocked",uncheckValue:"active",formik:s}),((m=s==null?void 0:s.values)==null?void 0:m.status)==="blocked"&&e.jsx(r,{label:"Block Reason",control:"input",placeholder:"Enter block reason",name:"blockReason",formik:s})]}),e.jsx("div",{className:"mt-2 mb-4",children:e.jsx("button",{type:"submit",className:"btn-primary py-3 px-10",disabled:c||!s.isValid,children:c?e.jsx(H,{}):"Update"})})]})}})}),e.jsx("div",{className:"mt-6",children:e.jsx("div",{className:"rounded-lg mt-2",children:e.jsx(I,{})})})]})};export{le as default};
