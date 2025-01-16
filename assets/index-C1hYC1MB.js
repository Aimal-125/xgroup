import{j as t,r as n}from"./index-C2xFYc7i.js";import{H as d}from"./Heading-le8S-T7p.js";import{f as r}from"./formatAmount-CWLewUcu.js";class u{constructor(a){this.date=a?new Date(a):new Date}ISO8601(){return this.date.toLocaleDateString("en-CA",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\//g,"-")}}const o=({title:e,amount:a,color:s="text-green-500",icon:l})=>t.jsxs("div",{className:"bg-dark p-4 rounded-lg border border-gray-700 flex items-center justify-center flex-col gap-2",children:[t.jsx("i",{className:`uil uil-${l} text-2xl `}),t.jsxs("div",{className:"text-center",children:[t.jsx("h6",{className:"text-lg font-medium",children:e}),t.jsx("h3",{className:`text-xl font-semibold mt-2 ${s}`,children:r(a)})]})]}),m=()=>{const e={totalTradeDepositAmount:5e4,totalAutoTradeDepositAmount:5e4,totalUsers:1200,totalTradeWithdrawAmount:3e4,totalAutoTradeWithdrawAmount:3e4,totalStratUpWithdrawAmount:3e4,totalResidualWithdrawAmount:3e4,totalTradeAmount:45e3,totalAutoTradeAmount:33400};return t.jsxs("div",{className:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4",children:[t.jsx(o,{title:"Total Users",amount:e.totalUsers,icon:"users-alt"})," ",t.jsx(o,{title:"Total Trade Account Deposit",amount:e.totalTradeDepositAmount,icon:"usd-circle"}),t.jsx(o,{title:"Total Auto Trade Account Deposit",amount:e.totalAutoTradeDepositAmount,icon:"usd-circle"}),t.jsx(o,{title:"Total Trade Withdraw",amount:e.totalTradeWithdrawAmount,icon:"wallet"}),t.jsx(o,{title:"Total Auto Trade Withdraw",amount:e.totalAutoTradeWithdrawAmount,icon:"wallet"}),t.jsx(o,{title:"Total StartUp Withdraw",amount:e.totalStratUpWithdrawAmount,icon:"wallet"}),t.jsx(o,{title:"Total Residual Withdraw",amount:e.totalResidualWithdrawAmount,icon:"wallet"}),t.jsx(o,{title:"Total Trade",amount:e.totalTradeAmount,icon:"import"}),t.jsx(o,{title:"Total Win Trades",amount:e.totalTradeAmount,icon:"import"}),t.jsx(o,{title:"Total Loss Trade",amount:e.totalTradeAmount,icon:"import"}),t.jsx(o,{title:"Total Auto Trades",amount:e.totalAutoTradeAmount,icon:"import"}),t.jsx(o,{title:"Total Running Auto Trades",amount:e.totalAutoTradeAmount,icon:"import"}),t.jsx(o,{title:"Total Ended Auto Trades",amount:e.totalAutoTradeAmount,icon:"import"})]})},i=({title:e,amount:a,reqCount:s})=>t.jsxs("div",{className:"bg-dark border border-gray-700 rounded-lg text-center p-4",children:[t.jsx("p",{className:"font-bold text-3xl text-primary",children:r(a)}),t.jsx("h3",{className:"font-semibold mt-2",children:e}),t.jsxs("h6",{className:"text-sm font-semibold mt-2 text-gray-400",children:[r(s)," ",s>1?"Requests":"Request"]})]}),c=()=>{const e=[{title:"Today Approved Deposit",amount:15e3,reqCount:12},{title:"Today Approved Withdraw",amount:1e4,reqCount:8},{title:"Today Pending Withdraw",amount:0,reqCount:0},{title:"Today Total Trades",amount:1e4,reqCount:8},{title:"Today Win Trades",amount:0,reqCount:0},{title:"Today Loss Trades",amount:1e4,reqCount:8}];return t.jsxs("div",{className:"mt-6",children:[t.jsxs("h3",{className:"heading-sm flex gap-2",children:[t.jsx("span",{children:"Today Trade Account Stats"}),t.jsx("i",{className:"uil uil-analytics"})]}),t.jsx("div",{className:"mt-4 grid sm:grid-cols-2 grid-cols-1 gap-6",children:e.map((a,s)=>t.jsx(i,{title:a.title,amount:a.amount,reqCount:a.reqCount},s))})]})},x=()=>{const e=[{title:"Today Approved Deposit",amount:15e3,reqCount:12},{title:"Today Approved Withdraw",amount:1e4,reqCount:8},{title:"Today Pending Withdraw",amount:0,reqCount:0},{title:"Today Total AutoTrades",amount:1e4,reqCount:8},{title:"Today Running AutoTrades",amount:1e4,reqCount:8},{title:"Today Ended AutoTrades",amount:0,reqCount:0}];return t.jsxs("div",{className:"mt-6",children:[t.jsxs("h3",{className:"heading-sm flex gap-2",children:[t.jsx("span",{children:"Today Auto Trade Account Stats"}),t.jsx("i",{className:"uil uil-analytics"})]}),t.jsx("div",{className:"mt-4 grid sm:grid-cols-2 grid-cols-1 gap-6",children:e.map((a,s)=>t.jsx(i,{title:a.title,amount:a.amount,reqCount:a.reqCount},s))})]})},j=()=>{const[e,a]=n.useState(new u().ISO8601());return t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx(d,{title:"Hi, Admin 👋"}),t.jsx("div",{className:"w-[250px]",children:t.jsx("div",{className:"form-row",children:t.jsx("input",{type:"date",placeholder:"Select Date",onChange:s=>a(s.target.value),value:e})})})]}),t.jsxs("div",{className:"mt-6",children:[t.jsx(m,{}),t.jsx(c,{}),t.jsx(x,{})]})]})};export{j as default};