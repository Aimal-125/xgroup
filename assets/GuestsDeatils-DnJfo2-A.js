import{j as e,L as n}from"./index-DSEsrcg-.js";import{H as o}from"./Heading-BI3kDaw8.js";import{B as d}from"./BackBtn-BA5ve5ZU.js";import{S as c}from"./Status-CpuWaOGX.js";import{F as m,a as u}from"./Input-C-qAahBU.js";import{c as x,a as i,e as p}from"./index.esm-CUPn6-XP.js";import{F as r}from"./FormControl-GHTY33Dx.js";import{d as f}from"./deposits.constants-CP3vsYzy.js";import"./react-tooltip.min-D7Xg-x51.js";import"./index-LvzHWtTh.js";import"./index-Chjiymov.js";const j=({label:a,value:t,to:s,isLast:l})=>e.jsxs("div",{className:`flex items-center justify-between gap-4 p-4 pb-5 ${l?"":"border-b border-b-gray-700"}`,children:[e.jsx("h6",{children:a}),s?e.jsx(n,{to:s,className:"text-grayText underline",children:t}):e.jsx("p",{className:"text-grayText",children:t})]}),b=()=>{const a=[{label:"Rank",value:"1"},{label:"Country	",value:"Russia"},{label:"Members",value:"100 k"},{label:"Status",value:e.jsx(c,{status:"pending"})}];return e.jsx("div",{children:a.map((t,s)=>e.jsx(j,{label:t.label,value:t.value,isLast:s===a.length-1},s))})},h=x().shape({status:i().oneOf(["pending","approved","declined"],"Invalid status").required("Status is required."),transferAmount:p().required("Amount is required.").positive("Amount must be positive."),description:i()}),g=()=>{const a={status:"pending",description:""},t=()=>{};return e.jsx("div",{children:e.jsx(m,{initialValues:a,validationSchema:h,onSubmit:t,enableReinitialize:!0,children:s=>e.jsxs(u,{autoComplete:"off",className:"flex flex-col gap-4",children:[e.jsx(r,{control:"select",label:"Status",name:"status",options:f,formik:s}),e.jsx(r,{control:"textarea",label:"Description",placeholder:"Write here...",name:"description",formik:s,maxLength:100}),e.jsx("div",{className:"mt-6 flex items-end justify-end",children:e.jsx("button",{className:"btn-primary py-2 px-12",disabled:!s.isValid,children:"Save"})})]})})})},$=()=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(o,{title:"Guests Details"}),e.jsx(d,{})]}),e.jsxs("div",{className:"flex lg:gap-6 gap-4 lg:flex-row flex-col mt-6",children:[e.jsx("div",{className:"lg:flex-[0.7] bg-dark rounded-lg",children:e.jsx(b,{})}),e.jsx("div",{className:"flex-[0.3] h-fit bg-dark p-4 rounded-lg flex flex-col gap04",children:e.jsx(g,{})})]})]});export{$ as default};
