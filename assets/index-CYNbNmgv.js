import{e as l,g as x,r as g,v as j,j as s,w as h,A as D}from"./index-Da2ePf2G.js";import{u as y}from"./useQuery-MS8Qgvv_.js";import{D as E}from"./DepositsTable-Dbl3bDrW.js";import{H as v}from"./Heading-Bp8qkMw4.js";import{B as C}from"./BackBtn-CypY0mDM.js";import{L as N}from"./Loader-DVHevoE9.js";import{D as q}from"./DisplayError-DhKK7mwD.js";import{I as w}from"./ItemNotFound-BFV-yDfQ.js";import"./index-DrUJ33os.js";import"./img1-OtdAMueF.js";import"./test.constants-D4XVrKvG.js";import"./LoadingBtn-D0zaY1Hn.js";import"./ClipLoader-BI8tAI14.js";import"./useWindowSize-C_6j95zo.js";const Q=()=>{const r=l(),{docs:t,currentPage:a,docsCount:i}=x(o=>o.deposit),n=["fetch-all-pending-deposits",a],{isLoading:p,data:e,isError:m,error:d}=y({queryKey:n,queryFn:()=>D(`/deposit?status=pending&page=${a}`),refetchOnWindowFocus:!1});return g.useEffect(()=>{if(e){const{data:{data:{docs:o,pages:c,docsCount:u,page:f}}}=e;r(j({docs:o,pages:c,docsCount:u,page:f}))}},[e,r]),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(v,{title:"Deposits",docsCount:i}),s.jsx(C,{})]}),s.jsx("div",{className:"mt-6",children:p?s.jsx(N,{}):m?s.jsx(q,{message:h(d)}):(t==null?void 0:t.length)>0?s.jsx(E,{}):s.jsx(w,{message:"Not deposit found."})})]})};export{Q as default};