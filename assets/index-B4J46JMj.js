import{g as p,j as e,e as m,U as h,V as u,f as j,W as f}from"./index-DSEsrcg-.js";import{H as N}from"./Heading-BI3kDaw8.js";import{B as g}from"./BackBtn-BA5ve5ZU.js";import{S as y}from"./Search-rq4o3j-2.js";import{T as v,a as b,b as x,c as r,d as w,e as o,P as k}from"./index-VR1RC-xB.js";import{M as n}from"./react-tooltip.min-D7Xg-x51.js";import{I as U}from"./img1-OtdAMueF.js";import{u as T}from"./test.constants-D4XVrKvG.js";import"./index-LvzHWtTh.js";function S(s=0){const l=["","k","M","B","T"];if(s===0)return 0;if(s<1e3)return s==null?void 0:s.toFixed();if(s>=1e15)return"∞";const c=Math.floor(Math.log10(s)),a=Math.floor(c/3),i=l[a];return`${(s/Math.pow(10,a*3)).toFixed(1)}${i}`}const d=({title:s,amount:l=0})=>e.jsxs("div",{className:"bg-dark rounded-lg border border-gray-700 text-center p-4",children:[e.jsx("p",{className:"font-bold text-3xl text-primary",children:S(l)}),e.jsx("h3",{className:"font-semibold mt-2",children:s})]}),P=()=>{const{totalUsers:s,todayJoined:l,yesterdayJoined:t}=p(c=>c.user);return e.jsxs("div",{className:"mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6",children:[e.jsx(d,{title:"Total Users",amount:s}),e.jsx(d,{title:"Today Joined",amount:l}),e.jsx(d,{title:"Yesterday Joined",amount:t})]})},C=[{label:"High Deposit",value:"-totalDepositAmount"},{label:"Low Deposit",value:"totalDepositAmount"}],D=()=>{const s=m(),l=t=>{s(u(t))};return e.jsx("div",{className:"bg-dark p-4 rounded-lg mt-6 pb-6 ",children:e.jsxs("div",{className:"flex items-center gap-4 sm:flex-row flex-col",children:[e.jsx("div",{className:"flex-1",children:e.jsx(y,{label:"Search User",placeholder:"Username , Email , Phone",fetcher:l,onClick:t=>t.stopPropagation()})}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{children:"Sort"}),e.jsxs("select",{onClick:t=>{t.stopPropagation()},onChange:t=>s(h(t.target.value)),children:[e.jsx("option",{value:"",children:"All"}),C.map(t=>e.jsx("option",{value:t.value,className:"capitalize",children:t.label},t.value))]})]})]})})},A=()=>{var c;const s=j();return e.jsx("div",{className:"bg-secondary rounded-lg p-2 overflow-x-auto",children:e.jsxs("div",{className:"bg-dark  p-2 rounded-lg overflow-auto  custom-scrollbar",children:[e.jsxs(v,{className:"sm:text-base text-sm table-auto  ",children:[e.jsx(b,{className:"bg-secondary text-left rounded-lg",children:e.jsxs(x,{className:"",children:[e.jsx(r,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Username"}),e.jsx(r,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Email"}),e.jsx(r,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Phone"}),e.jsx(r,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Joined"}),e.jsx(r,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Status"}),e.jsx(r,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Total Deposit"}),e.jsx(r,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Actions"})]})}),e.jsx(w,{children:(c=T)==null?void 0:c.map((a,i)=>e.jsxs(x,{className:"text-grayText sm:hover:bg-stroke hover:text-pure border-b border-b-gray-700",children:[e.jsxs(o,{className:"  px-6 lg:pl-16  lg:px-0 py-4 whitespace-nowrap sm:text-center  flex  flex-col  sm:flex-row  gap-4 items-center   ",children:[e.jsx("img",{src:U,alt:a.userName,className:"w-8 h-8 rounded-full"}),e.jsx("span",{className:"underline",children:a.name})]}),e.jsx(o,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.email}),e.jsx(o,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.phone}),e.jsx(o,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.joined}),e.jsx(o,{className:`px-6 py-4 whitespace-nowrap sm:text-center  ${a.status==="Active"?"text-green-500":"text-red-500"}`,children:a.status}),e.jsx(o,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.wallet}),e.jsx(o,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:e.jsxs("div",{className:"flex items-center gap-4 text-xl",children:[e.jsxs("button",{onClick:()=>s(`/app/users/details/${i+1}`),className:"text-primary","data-tooltip-id":"view-user-details","data-tooltip-content":"View Details",children:[e.jsx("i",{className:"uil uil-eye"}),e.jsx(n,{id:"view-user-details",style:{fontSize:15}})]}),e.jsxs("button",{onClick:()=>s(`/app/users/edit/${a==null?void 0:a.id}`),className:"text-green-500","data-tooltip-id":"edit-user","data-tooltip-content":"Edit User",children:[e.jsx("i",{className:"uil uil-edit-alt"}),e.jsx(n,{id:"edit-user",style:{fontSize:15}})]}),e.jsxs("button",{onClick:()=>alert("Block User"),className:"text-pink-500","data-tooltip-id":"block-user","data-tooltip-content":"Block User",children:[e.jsx("i",{className:"uil uil-ban"}),e.jsx(n,{id:"block-user",style:{fontSize:15}})]}),e.jsxs("button",{onClick:()=>alert("Delete User"),className:"text-red-500","data-tooltip-id":"delete-user","data-tooltip-content":"Delete User",children:[e.jsx("i",{className:"uil uil-trash"}),e.jsx(n,{id:"delete-user",style:{fontSize:15}})]})]})})]},i))})]}),e.jsx(k,{totalPages:3,currentPage:1,setCurrentPage:f})]})})},W=()=>e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(N,{title:"All Users"}),e.jsx(g,{})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx(P,{}),e.jsx(D,{}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"heading-sm mb-3",children:"Users"}),e.jsx("div",{children:e.jsx(A,{})})]})]})]});export{W as default};
