import{j as e,L as n}from"./index-DSEsrcg-.js";import{B as l}from"./BackBtn-BA5ve5ZU.js";import{H as o}from"./Heading-BI3kDaw8.js";import{T as i,a as p,b as r,c as t,d as x,e as a,P as m}from"./index-VR1RC-xB.js";import{M as d}from"./react-tooltip.min-D7Xg-x51.js";import{a as h}from"./test.constants-D4XVrKvG.js";import"./index-LvzHWtTh.js";function v(){return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(o,{title:"Trade Real Time Stats"}),e.jsx(l,{})]}),e.jsx("div",{className:"bg-secondary rounded-lg p-2 mt-10 overflow-x-auto",children:e.jsxs("div",{className:"bg-dark  p-2 rounded-lg overflow-auto  custom-scrollbar",children:[e.jsxs(i,{className:"sm:text-base text-sm table-auto  ",children:[e.jsx(p,{className:"bg-secondary text-left rounded-lg",children:e.jsxs(r,{className:"",children:[e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Sr"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Session Id"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Coins On State Bank"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Coins On World Bank"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Trade Door Open Time (seconds)"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Start Time"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Completion Time"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Win Bank"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Date"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Status"}),e.jsx(t,{scope:"col",className:" font-medium px-6 py-4 text-center",children:"Action"})]})}),e.jsx(x,{children:h.map((s,c)=>e.jsxs(r,{className:"text-grayText sm:hover:bg-stroke hover:text-pure border-b border-b-gray-700",children:[e.jsx(a,{className:"  px-6 py-4 whitespace-nowrap sm:text-center text-right",children:c+1}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.sessionId}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.coinsOnStateBank}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.coinsOnWorldBank}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.tradeOpenDoorTime}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.startTime}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.completionTime}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.status==="completed"?s.winBank:"..."}),e.jsx(a,{className:"px-6 py-4 whitespace-nowrap sm:text-center ",children:s.date}),e.jsx(a,{className:`className='px-6 py-4 whitespace-nowrap sm:text-center ' ${s.status==="completed"&&"text-green-500"||s.status==="running"&&"text-yellow-500"}`,children:s.status}),e.jsx(a,{className:"py-4",children:e.jsx("div",{className:"flex items-center justify-center gap-4 text-xl",children:e.jsxs(n,{to:`/app/trade/real-time-stats/details/${c+1}`,className:"text-primary","data-tooltip-id":"view-trade-details","data-tooltip-content":"View Details",children:[e.jsx("i",{className:"uil uil-eye"}),e.jsx(d,{id:"view-trade-details",style:{fontSize:15}})]})})})]},c))})]}),e.jsx(m,{totalPages:3,currentPage:1,setCurrentPage:()=>{}})]})})]})})}export{v as default};