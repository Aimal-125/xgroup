import{e as d,f as c,g as x,j as s,G as p}from"./index-Da2ePf2G.js";import{F as u,a as h}from"./Input-Dy304rkR.js";import{A as g}from"./Alert-BNuF4SG2.js";import{c as f,a as t}from"./index.esm-Br8EAM3e.js";import{F as l}from"./FormControl-BTjv_duV.js";import{L as j}from"./LoadingBtn-D0zaY1Hn.js";import"./react-tooltip.min-B-yG7w3T.js";import"./index-LvzHWtTh.js";import"./index-Chjiymov.js";import"./ClipLoader-BI8tAI14.js";const w=f({identifier:t().email("Please enter valid email address").required("Email is required."),password:t().min(8,"Password should have at least 8 characters").required("Password is required")}),b={identifier:"",password:""},A=()=>{const r=d(),o=c(),{loading:i,errors:a}=x(e=>e.auth),n=(e,{resetForm:m})=>{r(p(e,o,m))};return s.jsx("div",{className:"bg-dark w-full min-h-screen flex items-center justify-center text-pure",children:s.jsxs("div",{className:"bg-stroke p-12 rounded-lg xl:w-[40%] lg:w-1/2 md:w-[75%] w-full mx-auto ",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"md:text-3xl text-2xl font-semibold",children:"Login"}),s.jsxs("p",{className:"sm:text-base text-sm text-grayText",children:["Login to access your"," ",s.jsxs("span",{className:"font-medium",children:[s.jsx("span",{className:"text-primary",children:"X"}),"GROUP"]})," ","account"]})]}),s.jsx(u,{initialValues:b,validationSchema:w,onSubmit:n,children:e=>s.jsxs(h,{className:"mt-6 flex flex-col gap-4",children:[(a==null?void 0:a.login)&&s.jsx(g,{message:a==null?void 0:a.login}),s.jsx(l,{control:"input",label:"Email",placeholder:"Enter your email ",name:"identifier",formik:e}),s.jsx(l,{control:"password",label:"Password",placeholder:"Ex : ******** ",name:"password",formik:e}),s.jsx("div",{className:"mt-2",children:s.jsx("button",{type:"submit",className:"btn-primary py-3 sm:px-12 px-6 w-full",disabled:i||!e.isValid,children:i?s.jsx(j,{}):"Sign in"})})]})})]})})};export{A as default};