import{f as c,j as e}from"./index-C2xFYc7i.js";import{H as l}from"./Heading-le8S-T7p.js";import"./Loader-BbvMvMfl.js";import"./DisplayError-BiDo3jdO.js";import{T as m,a as d,b as n,c as t,d as p,e as s,P as x}from"./index-Cn40Z5-E.js";import{M as u}from"./react-tooltip.min-BKMyztyo.js";import{I as h}from"./test.constants-D4XVrKvG.js";import"./LoadingBtn-cMEELRIl.js";import"./ClipLoader-ZD7HpgKP.js";import"./useWindowSize-C3inz4sW.js";import"./index-LvzHWtTh.js";const f=()=>{const a=c();return e.jsx("div",{className:"bg-secondary rounded-lg p-2 overflow-x-auto",children:e.jsxs("div",{className:"bg-dark  p-2 rounded-lg overflow-container  custom-scrollbar",children:[e.jsxs(m,{className:"sm:text-base text-sm table-auto  ",children:[e.jsx(d,{className:"bg-secondary text-left rounded-lg",children:e.jsxs(n,{children:[e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Sr"}),e.jsx(t,{scope:"col",className:"font-medium px-6 py-4 text-center",children:"Title"}),e.jsx(t,{scope:"col",className:"font-medium px-6 py-4 text-center",children:"Description"}),e.jsx(t,{scope:"col",className:"font-medium px-6 py-4 text-center",children:"Action"})]})}),e.jsx(p,{children:h.map((r,i)=>e.jsxs(n,{className:"text-grayText sm:hover:bg-stroke hover:text-pure border-b border-b-gray-700",children:[e.jsx(s,{className:"  px-6 py-4 whitespace-nowrap sm:text-center text-right",children:r.id}),e.jsx(s,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:r.title}),e.jsx(s,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:r.description}),e.jsx(s,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:e.jsxs("button",{onClick:()=>a(`/app/Information/details/${i+1}`),className:"text-primary","data-tooltip-id":"view-user-details","data-tooltip-content":"View Details",children:[e.jsx("i",{className:"uil uil-eye"}),e.jsx(u,{id:"view-user-details",style:{fontSize:15}})]})})]},i))})]}),e.jsx(x,{totalPages:3,currentPage:1,setCurrentPage:()=>{}})]})})},H=()=>{const a=c(),o=()=>{a("/app/Information/Create")};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{title:"Information"}),e.jsx("button",{onClick:o,className:"flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400",children:"Create New Information"})]}),e.jsx("div",{className:"mt-6",children:e.jsx(f,{})})]})};export{H as default};