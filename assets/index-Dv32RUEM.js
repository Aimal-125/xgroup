import{r as t,j as e}from"./index-C2xFYc7i.js";import{F as w,a as N}from"./Input-DGenKjhr.js";import{H as T}from"./Heading-le8S-T7p.js";import{B as y}from"./BackBtn-uZorzSMf.js";import"./Loader-BbvMvMfl.js";import"./DisplayError-BiDo3jdO.js";import{F as a}from"./FormControl-kGCE0uvm.js";import{c as m,e as s,a as i}from"./index.esm-yJKASu2N.js";import"./react-tooltip.min-BKMyztyo.js";import"./index-LvzHWtTh.js";import"./LoadingBtn-cMEELRIl.js";import"./ClipLoader-ZD7HpgKP.js";import"./useWindowSize-C3inz4sW.js";import"./index-Chjiymov.js";const E=m().shape({minimumDeposit:s().min(0,"Minimum deposit must be at least 0").required("Minimum deposit is required"),minimumWithdraw:s().min(0,"Minimum withdraw must be at least 0").required("Minimum withdraw is required"),withdrawStartTime:i().required("Withdraw start time is required"),withdrawEndTime:i().required("Withdraw end time is required"),platformFee:s().min(0,"Platform fee must be at least 0").required("Platform fee is required"),rideCommission:m().shape({level1:s().min(0,"Level 1 commission must be at least 0").required("Level 1 commission is required"),level2:s().min(0,"Level 2 commission must be at least 0").required("Level 2 commission is required"),level3:s().min(0,"Level 3 commission must be at least 0").required("Level 3 commission is required")}),referralCommission:m().shape({level1:s().min(0,"Level 1 referral commission must be at least 0").required("Level 1 referral commission is required"),level2:s().min(0,"Level 2 referral commission must be at least 0").required("Level 2 referral commission is required"),level3:s().min(0,"Level 3 referral commission must be at least 0").required("Level 3 referral commission is required")}),whatsAppGroupLink:i().url("Must be a valid URL").required("WhatsApp group link is required"),whatsappSupport:i().required("WhatsApp support contact is required"),contactEmail:i().email("Must be a valid email address").required("Contact email is required")}),G=()=>{const[d,c]=t.useState(!1),[p,u]=t.useState(""),[x,h]=t.useState(""),[f,b]=t.useState(""),v=async l=>{const r=document.getElementById("startTime"),j=document.getElementById("endTime"),n=document.getElementById("winBank");let o;if(d){if(!r.value)return u("Required");if(!j.value)return h("Required");if(!n.value||n.value==="Select...")return b("Required");o={...l,startTime:r.value,endTime:j.value,winBank:n.value,doorOpeningType:"Manual"}}else o=l;console.log("Form Submitted with values:",o)},g={minimumDeposit:"",minimumWithdraw:"",withdrawStartTime:"",withdrawEndTime:"",carsTaskCommission:"",bikesTaskCommission:"",taskThreshold:"",platformFee:"",whatsAppGroupLink:"",whatsappSupport:"",contactEmail:"",referralCommission:{level1:"",level2:"",level3:""},rideCommission:{level1:"",level2:"",level3:""},doorOpeningType:"By Comparison"};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(T,{title:"Settings"}),e.jsx(y,{})]}),e.jsx("div",{className:" mt-6",children:e.jsx(w,{initialValues:g,validationSchema:E,onSubmit:v,enableReinitialize:!0,children:l=>e.jsxs(N,{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"bg-dark p-4 rounded-lg flex flex-col gap-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",type:"number",label:"1 USD To PKR",name:"usdToPKR",placeholder:"Enter PKR amount",formik:l}),e.jsx(a,{control:"input",type:"number",label:"1 Coins to PKR",name:"coinsToPKR",placeholder:"Enter PKR amount",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",type:"number",label:"Minimum Deposit Coins",name:"minimumDeposit",placeholder:"Enter min deposit coins",formik:l}),e.jsx(a,{control:"input",type:"number",label:"Minimum Withdraw Coins",name:"minimumWithdraw",placeholder:"Enter min withdraw coins",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",type:"time",label:"Withdraw Start Time",name:"withdrawStartTime",formik:l}),e.jsx(a,{control:"input",type:"time",label:"Withdraw End Time",name:"withdrawEndTime",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",type:"number",label:"State Bank Percentage % ",name:"carsTaskCommission",placeholder:"Ex: 5%",formik:l}),e.jsx(a,{control:"input",label:"Word Bank Percentage % ",name:"bikesTaskCommission",placeholder:"Ex: 2%",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",label:"Auto Trade Daily Percentage %",name:"autoTradeDailyPercentage",placeholder:"Ex: 5%",formik:l}),e.jsx(a,{control:"input",type:"number",label:"Platform Fee %",name:"platformFee",placeholder:"Enter platform fee percentage",formik:l})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-4",children:e.jsx(a,{control:"input",label:"Trade Door Open Time (Seconds)",name:"doorOpenTime",placeholder:"Ex: 15 seconds",formik:l})}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",label:"whatsApp Group Link",name:"whatsAppGroupLink",placeholder:"Enter whatsApp Group Link",formik:l}),e.jsx(a,{control:"input",label:"Whatsapp Support",name:"whatsappSupport",placeholder:"Enter whatsapp support number",formik:l})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-4",children:e.jsx(a,{control:"input",label:"Contact Email",name:"contactEmail",placeholder:"Ex: support@gmail.com",formik:l})})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Trade Door Working"}),e.jsxs("div",{className:"bg-dark p-4 rounded-lg flex flex-col gap-5 ",children:[e.jsxs("div",{className:"flex max-[450px]:flex-col max-[450px]:items-start justify-center items-center gap-5",children:[e.jsxs("div",{className:"flex items-center gap-3 relative",children:[e.jsx("input",{className:"radio-btn",type:"radio",name:"radio-button",id:"byComparison",value:"By Comparison",onChange:()=>{c(!1)},defaultChecked:!0,hidden:!0}),e.jsx("span",{className:"custom-radio"}),e.jsx("label",{className:"text-xl font-bold radio-label",htmlFor:"byComparison",children:"By Comparison"})]}),e.jsxs("div",{className:"flex items-center gap-3 relative",children:[e.jsx("input",{className:"radio-btn",type:"radio",name:"radio-button",id:"manual",value:"Manual",onChange:()=>{c(!0)},hidden:!0}),e.jsx("span",{className:"custom-radio"}),e.jsx("label",{className:"text-xl font-bold radio-label",htmlFor:"manual",children:"Manual"})]})]}),d&&e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"font-bold",htmlFor:"winBank",children:"Win Bank"}),e.jsxs("select",{name:"winBank",id:"winBank",defaultValue:"Select...",className:"w-full bg-transparent text-inherit border border-[#374151] rounded p-3",onChange:()=>b(""),children:[e.jsx("option",{value:"Select...",disabled:!0,hidden:!0,children:"Select..."}),e.jsx("option",{value:"State Bank",children:"State Bank"}),e.jsx("option",{value:"World Bank",children:"World Bank"})]})]}),f&&e.jsx("p",{className:"text-red-600",children:f}),e.jsxs("div",{className:"flex max-[600px]:flex-col justify-between gap-5",children:[e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-inherit font-bold",children:"Start Time"}),e.jsx("input",{className:"p-3 rounded bg-dark border border-gray-700",type:"time",name:"startTime",id:"startTime",onChange:()=>u(""),onFocus:r=>r.target.showPicker()})]}),p&&e.jsx("p",{className:"text-red-600",children:p})]}),e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{className:"text-inherit font-bold",children:"End Time"}),e.jsx("input",{className:"p-3 rounded bg-dark border border-gray-700",type:"time",name:"endTime",id:"endTime",onChange:()=>h(""),onFocus:r=>r.target.showPicker()})]}),x&&e.jsx("p",{className:"text-red-600",children:x})]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"heading-sm mb-2",children:"Trade Deposit Commission"}),e.jsxs("div",{className:"bg-dark p-4 rounded-lg",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",type:"number",label:"Trade Deposit Bonus %",name:"tradeDepositBonus",placeholder:"Ex : 4%",formik:l}),e.jsx(a,{control:"input",type:"number",label:"Level One Profit %",name:"referralCommission.level1",placeholder:"Ex : 5%",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4 mt-4",children:[e.jsx(a,{control:"input",type:"number",label:"Level Two Profit %",name:"referralCommission.level2",placeholder:"Ex : 4%",formik:l}),e.jsx(a,{control:"input",type:"number",label:"Level Three Profit %",name:"referralCommission.level3",placeholder:"Ex : 3%",formik:l})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"heading-sm mb-2",children:"Auto Trade Profit Share"}),e.jsxs("div",{className:"bg-dark p-4 rounded-lg",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-4",children:[e.jsx(a,{control:"input",type:"number",label:"Auto Trade Deposit Bonus %",name:"auto_trade_deposit_bonus",placeholder:"Ex : 4%",formik:l}),e.jsx(a,{control:"input",type:"number",label:"Level One Profit %",name:"rideCommission.level1",placeholder:"Ex : 5%",formik:l})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-4 mt-4",children:[e.jsx(a,{control:"input",type:"number",label:"Level Two Profit %",name:"rideCommission.level2",placeholder:"Ex : 4%",formik:l}),e.jsx(a,{control:"input",type:"number",label:"Level Three Profit %",name:"rideCommission.level3",placeholder:"Ex : 3%",formik:l})]})]})]}),e.jsx("div",{className:"mt-4",children:e.jsx("button",{type:"submit",className:"btn-primary py-2 px-12",children:"Save"})})]})})})]})};export{G as default};
