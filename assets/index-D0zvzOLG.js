import{f as t,j as e,L as a}from"./index-DSEsrcg-.js";import{I as c}from"./img1-OtdAMueF.js";import{S as o}from"./Search-rq4o3j-2.js";import{S as n}from"./test.constants-D4XVrKvG.js";import{B as d}from"./BackBtn-BA5ve5ZU.js";import"./DisplayError-keEdrNsB.js";import{H as x}from"./Heading-BI3kDaw8.js";import"./Loader-CiVfVMa3.js";import"./useWindowSize-ilm-1l2s.js";import"./LoadingBtn-D4Ooyov9.js";import"./ClipLoader-BNNw6Au1.js";const p=()=>{const r=t(),l=s=>{r(`/app/support/${s}`)};return e.jsxs("div",{className:"flex flex-col space-y-4 w-full mt-6",children:[e.jsx("div",{className:"bg-dark p-4 rounded-lg  pb-6 ",children:e.jsx("div",{className:"flex items-center gap-4 sm:flex-row flex-col",children:e.jsx("div",{className:"flex-1",children:e.jsx(o,{label:"Search User",placeholder:"Username , Email , Phone"})})})}),e.jsx("div",{className:"flex flex-col   w-full  space-y-0 bg-dark  rounded-lg  pb-6",children:n.map((s,i)=>e.jsxs("div",{className:"flex flex-row justify-between items-center  text-grayText hover:bg-stroke hover:text-pure border-b border-b-gray-700 py-4   px-3 cursor-pointer ",children:[e.jsxs("div",{className:"flex   flex-row items-center gap-3",children:[e.jsx("div",{children:e.jsx("img",{src:c,className:"w-[50px] h-[50px] rounded-full object-cover",alt:"img"})}),e.jsxs("div",{className:"flex flex-col space-y-1 text-md",children:[e.jsx("div",{className:"underline",children:e.jsx(a,{to:`/app/users/details/${i+1}`,children:e.jsx("p",{children:s.name})})}),e.jsx("div",{children:e.jsx("p",{children:s.email})})]})]}),e.jsx("div",{className:"px-3",children:e.jsxs("button",{onClick:()=>l(s.id),className:"flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400",children:[e.jsx("i",{className:"uil uil-comments text-white",style:{fontSize:"20px"}})," ","Start Chat"]})})]},s.id))})]})},S=()=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx(x,{title:"Support"}),e.jsx(d,{})]}),e.jsx("div",{className:"mt-6",children:e.jsx(p,{})})]});export{S as default};
