import{j as e}from"./index-Da2ePf2G.js";import{F as s,a as m}from"./Input-Dy304rkR.js";import{B as d}from"./BackBtn-CypY0mDM.js";import{H as u}from"./Heading-Bp8qkMw4.js";import{F as o}from"./FormControl-BTjv_duV.js";import{c as p,a as r}from"./index.esm-Br8EAM3e.js";import"./react-tooltip.min-B-yG7w3T.js";import"./index-LvzHWtTh.js";import"./index-Chjiymov.js";function q(){const c=async(a,{setSubmitting:i})=>{console.log(a);try{await new Promise(t=>setTimeout(t,2e3))}catch(t){console.log(t)}finally{i(!1)}},n=p().shape({bankName:r().required("Required"),accountHolder:r().required("Required"),accountNo:r().required("Required")}),l={bankName:"",accountHolder:"",accountNo:""};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(u,{title:"Withdrawal Accounts Edit"}),e.jsx(d,{})]}),e.jsx("div",{className:"mt-10",children:e.jsx(s,{initialValues:l,validationSchema:n,onSubmit:c,children:a=>e.jsxs(m,{className:"flex bg-dark rounded-lg p-5 flex-col gap-5",children:[e.jsxs("div",{className:"flex gap-4 md:flex-row flex-col",children:[e.jsx(o,{label:"Account Holder",control:"input",placeholder:"Enter account holder name",name:"accountHolder",formik:a}),e.jsx(o,{label:"Account Number",control:"input",placeholder:"Enter account number",name:"accountNo",formik:a})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"btn-primary w-[200px] max-[600px]:w-full py-2 px-4 block ml-auto",disabled:a.isSubmitting,children:"Save"})})]})})})]})}export{q as default};