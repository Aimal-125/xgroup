import{j as e,L as o}from"./index-DSEsrcg-.js";import{B as m}from"./BackBtn-BA5ve5ZU.js";import{H as p}from"./Heading-BI3kDaw8.js";import{P as x}from"./plus-icon-D0YV3CIV.js";import{S as j}from"./Status-CpuWaOGX.js";import{M as h}from"./react-tooltip.min-D7Xg-x51.js";import{T as u,a as f,b as d,c as t,d as N,e as r,P as y}from"./index-VR1RC-xB.js";import{t as b}from"./test.constants-D4XVrKvG.js";import"./index-LvzHWtTh.js";function O(){const s=({label:a,value:l,to:n,icon:c,status:i})=>e.jsxs("div",{className:"flex items-center justify-between gap-4 border-b last-of-type:border-none border-b-gray-700 p-4",children:[e.jsx("h6",{children:a}),n?e.jsx(o,{to:n,className:"text-grayText underline",children:l}):e.jsxs("p",{className:"text-grayText flex items-center gap-1",children:[c?e.jsx("span",{children:e.jsx("img",{src:c,alt:"icon"})}):"",e.jsx("span",{children:l})]}),i||""]});return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(p,{title:"Trade Real Time Stats Details"}),e.jsx(m,{})]}),e.jsxs("div",{className:"flex flex-col gap-5 mt-6",children:[e.jsxs("div",{className:"bg-dark rounded-lg",children:[e.jsx(s,{label:"Sr",value:"1"}),e.jsx(s,{label:"Session Id",value:"123"}),e.jsx(s,{label:"Coins On State Bank",value:"1000",icon:x}),e.jsx(s,{label:"Coins On World Bank",value:"1000",icon:x}),e.jsx(s,{label:"Trade Door Open Time",value:"10s"}),e.jsx(s,{label:"Start Time",value:"1:00 PM"}),e.jsx(s,{label:"Completion Time",value:"2:00 PM"}),e.jsx(s,{label:"Win Bank",value:"State Bank"}),e.jsx(s,{label:"Date",value:"2025-01-01"}),e.jsx(s,{label:"Status",status:e.jsx(j,{status:"running"})})]}),e.jsx("div",{className:"bg-secondary rounded-lg p-2 overflow-x-auto",children:e.jsxs("div",{className:"bg-dark  p-2 rounded-lg overflow-container  custom-scrollbar",children:[e.jsxs(u,{className:"sm:text-base text-sm table-auto  ",children:[e.jsx(f,{className:"bg-secondary text-left rounded-lg",children:e.jsxs(d,{className:"",children:[e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Sr"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"OrderID"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Trade Bank"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Time"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Completion Time"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Trade Coin"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Win Bank"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Status"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Action"})]})}),e.jsx(N,{children:b.map((a,l)=>e.jsxs(d,{className:"text-grayText sm:hover:bg-stroke hover:text-pure border-b border-b-gray-700",children:[e.jsx(r,{className:"  px-6 py-4 whitespace-nowrap sm:text-center text-right",children:l+1}),e.jsx(r,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.orderID}),e.jsx(r,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.tradeBank}),e.jsx(r,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.time}),e.jsx(r,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.completionTime}),e.jsx(r,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.tradeCoin}),e.jsx(r,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:a.winBank}),e.jsx(r,{className:`className='px-6 py-4 whitespace-nowrap sm:text-center ' ${parseInt(a.status)>=0?"text-green-500":"text-red-500"}`,children:a.status}),e.jsx(r,{className:"py-4",children:e.jsx("div",{className:"flex items-center justify-center gap-4 text-xl",children:e.jsxs(o,{to:`/app/trade/details/${l+1}`,className:"text-primary","data-tooltip-id":"view-user-details","data-tooltip-content":"View Details",children:[e.jsx("i",{className:"uil uil-eye"}),e.jsx(h,{id:"view-user-details",style:{fontSize:15}})]})})})]},l))})]}),e.jsx(y,{totalPages:3,currentPage:1,setCurrentPage:()=>{}})]})})]})]})})}export{O as default};
