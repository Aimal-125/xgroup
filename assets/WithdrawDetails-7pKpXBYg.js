import{j as e,L as c}from"./index-DSEsrcg-.js";import{F as m,a as u}from"./Input-C-qAahBU.js";import{c as x,a as d,e as p}from"./index.esm-CUPn6-XP.js";import{F as i}from"./FormControl-GHTY33Dx.js";import{d as j}from"./deposits.constants-CP3vsYzy.js";import{S as h}from"./Status-CpuWaOGX.js";import{f as l}from"./formatAmount-CWLewUcu.js";import{P as n}from"./plus-icon-D0YV3CIV.js";import{h as f}from"./moment-C5S46NFB.js";import{B as b}from"./BackBtn-BA5ve5ZU.js";import{H as v}from"./Heading-BI3kDaw8.js";import"./react-tooltip.min-D7Xg-x51.js";import"./index-LvzHWtTh.js";import"./index-Chjiymov.js";const g=x().shape({status:d().oneOf(["pending","approved","declined"],"Invalid status").required("Status is required."),transferAmount:p().required("Amount is required.").positive("Amount must be positive."),description:d()}),N=()=>{const r={status:"pending",transferAmount:100,description:""},t=()=>{};return e.jsx("div",{children:e.jsx(m,{initialValues:r,validationSchema:g,onSubmit:t,enableReinitialize:!0,children:a=>e.jsxs(u,{autoComplete:"off",className:"flex flex-col gap-4",children:[e.jsx(i,{control:"select",label:"Status",name:"status",options:j,formik:a}),e.jsx(i,{control:"input",type:"number",label:"Amount To Transfer",name:"transferAmount",formik:a,readOnly:!0}),e.jsx(i,{control:"textarea",label:"Description",placeholder:"Write here...",name:"description",formik:a,maxLength:100}),e.jsx("div",{className:"mt-6 flex items-end justify-end",children:e.jsx("button",{className:"btn-primary py-2 px-12",disabled:!a.isValid,children:"Save"})})]})})})},s=({label:r,value:t,to:a})=>e.jsxs("div",{className:"flex items-center justify-between gap-4 border-b border-b-gray-700 p-4",children:[e.jsx("h6",{children:r}),a?e.jsx(c,{to:a,className:"text-grayText underline",children:t}):e.jsx("p",{className:"text-grayText",children:t})]}),o=({label:r,value:t,icon:a})=>e.jsxs("div",{className:"flex items-center justify-between gap-4 border-b border-b-gray-700 p-4",children:[e.jsx("h6",{children:r}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{children:e.jsx("img",{src:a,alt:"plus icon"})}),e.jsx("span",{children:t})]})]}),y=()=>e.jsxs("div",{children:[e.jsx(s,{label:"Full Name",value:"John Doe"}),e.jsx(s,{label:"Username",value:"John Doe",to:"/app/users/details/2344"}),e.jsx(s,{label:"Email",value:"test@gmail.com"}),e.jsx(s,{label:"Phone",value:"+92311635152"}),e.jsx(s,{label:"Order Id",value:"1"}),e.jsx(o,{label:"Withdraw Coins",value:l(1e3),icon:n}),e.jsx(o,{label:"Service Charges",value:l(50),icon:n}),e.jsx(o,{label:"Coins Received",value:l(950),icon:n}),e.jsx(s,{label:"Received Amount",value:`PKR ${l(2e3)}`}),e.jsx(s,{label:"Withdraw By",value:"Easy Paisa"}),e.jsx(s,{label:"Account Holder",value:"Shah Nawaz"}),e.jsx(s,{label:"Account Number",value:"12345"}),e.jsx(s,{label:"Date & Time",value:f().format("DD MMM YYYY hh:mm A")}),e.jsx(s,{label:"Status",value:e.jsx(h,{status:"pending"})})]}),Y=()=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(v,{title:"Withdraw Details"}),e.jsx(b,{})]}),e.jsxs("div",{className:"flex lg:gap-6 gap-4 lg:flex-row flex-col mt-6",children:[e.jsx("div",{className:"lg:flex-[0.7] bg-dark rounded-lg",children:e.jsx(y,{})}),e.jsx("div",{className:"flex-[0.3] h-fit bg-dark p-4 rounded-lg flex flex-col gap04",children:e.jsx(N,{})})]})]});export{Y as default};