import{j as e}from"./index-Da2ePf2G.js";import{B as d}from"./BackBtn-CypY0mDM.js";import{H as m}from"./Heading-Bp8qkMw4.js";import{P as n}from"./plus-icon-D0YV3CIV.js";function h(){const r=[{data:[{mainHeading:"",heading1:"Total Team Members, 10000",headings:["Level 1 Team Members, 10000","Level 2 Team Members, 10000","Level 3 Team Members, 10000"]}]},{data:[{mainHeading:"Team Trade Account Portfolio",heading1:"Total Portfolio, 1000",headings:["Level 1 Portfolio, 1000","Level 2 Portfolio, 1000","Level 3 Portfolio, 1000"]}]},{data:[{mainHeading:"Team Auto Trade Account Portfolio",heading1:"Total Portfolio, 1000",headings:["Level 1 Portfolio, 1000","Level 2 Portfolio, 1000","Level 3 Portfolio, 1000"]}]}];return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(m,{title:"My Team Portfolio"}),e.jsx(d,{})]}),e.jsx("div",{className:"mt-10 flex flex-col gap-5",children:r==null?void 0:r.map((o,t)=>e.jsx("div",{className:"border border-gray-400 bg-dark rounded",children:o.data.map((s,l)=>e.jsxs("div",{children:[e.jsx("p",{className:`${s.mainHeading?"p-5 border-b border-b-gray-400":"p-0 border-none"} text-center text-yellow-300 font-bold`,children:s.mainHeading}),e.jsxs("p",{className:"flex items-center justify-between p-5 border-b border-b-gray-400 ",children:[e.jsx("span",{children:s.heading1.split(",")[0]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:s.mainHeading?"":"hidden",children:e.jsx("img",{src:n,alt:"plus icon"})}),e.jsx("span",{children:s.heading1.split(",")[1]})]})]}),s.headings.map((a,i)=>e.jsxs("p",{className:`${s.headings.length-1===i?"border-none":"border-b border-b-gray-400"} flex items-center justify-between p-5`,children:[e.jsx("span",{children:a.split(",")[0]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:s.mainHeading?"":"hidden",children:e.jsx("img",{src:n,alt:"plus icon"})}),e.jsx("span",{children:a.split(",")[1]})]})]},i))]},l))},t))})]})})}export{h as default};
