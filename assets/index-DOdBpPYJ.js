import{e as v,f as k,g as m,r as b,j as s,D as P,l as S,E as T,L as C,A as D}from"./index-DSEsrcg-.js";import{u as E}from"./useQuery-CWHZ13y1.js";import{B as I}from"./BackBtn-BA5ve5ZU.js";import{H as w}from"./Heading-BI3kDaw8.js";import{L as A}from"./Loader-CiVfVMa3.js";import{I as y}from"./ItemNotFound-YqYPFhM5.js";import{h as L}from"./moment-C5S46NFB.js";import{T as Y,a as $,b as N,c as t,d as H,e as r,P as M}from"./index-VR1RC-xB.js";import{M as f}from"./react-tooltip.min-D7Xg-x51.js";import{S as _}from"./Status-CpuWaOGX.js";import{f as g}from"./formatAmount-CWLewUcu.js";import{b as B}from"./inventoryActions--D901hbr.js";import{c as R}from"./confirmBox-Drty6Vws.js";import{C as q}from"./ClipLoader-BNNw6Au1.js";import"./LoadingBtn-D4Ooyov9.js";import"./useWindowSize-ilm-1l2s.js";import"./index-LvzHWtTh.js";import"./index-Chjiymov.js";const z=()=>{const c=v(),l=k(),{docs:a,currentPage:x,pages:i,deleteLoading:p}=m(e=>e.inventory),[o,h]=b.useState(null),j=(e,n)=>{h(e);const u=`Are you sure? You want to ${n} this inventory?`;R({message:u,onYesClick:()=>{c(B(e,{status:n}))}})},d=e=>{c(S(e)),l(`/app/inventory/edit/${e==null?void 0:e._id}`)};return s.jsx("div",{className:"bg-secondary rounded-lg p-2",children:s.jsxs("div",{className:"bg-dark p-2 rounded-lg",children:[s.jsxs(Y,{className:"sm:text-base text-sm",children:[s.jsx($,{className:"bg-secondary text-left rounded-lg",children:s.jsxs(N,{className:"",children:[s.jsx(t,{className:"py-4 text-center sm:pl-10",children:"Name"}),s.jsx(t,{className:"py-4 text-center",children:"Price"}),s.jsx(t,{className:"py-4 text-center",children:"Duration"}),s.jsx(t,{className:"py-4 text-center",children:"Total Rides"}),s.jsx(t,{className:"py-4 text-center",children:"Profit"}),s.jsx(t,{className:"py-4 text-center",children:"Sold"}),s.jsx(t,{className:"py-4 text-center",children:"Created"}),s.jsx(t,{className:"py-4 text-center",children:"Status"}),s.jsx(t,{className:"py-4 text-center",children:"Actions"})]})}),s.jsx(H,{children:a==null?void 0:a.map((e,n)=>s.jsxs(N,{className:`
                                    text-grayText sm:hover:bg-stroke hover:text-pure
                                    ${n===(a==null?void 0:a.length)-1?"":"border-b border-b-gray-700"}
                                `,children:[s.jsx(r,{className:"sm:pl-10 py-4 text-center",children:e==null?void 0:e.name}),s.jsx(r,{className:"py-4 text-center",children:g(e==null?void 0:e.price)}),s.jsxs(r,{className:"py-4 text-center",children:[e==null?void 0:e.duration," ",(e==null?void 0:e.duration)>1?"days":"day"]}),s.jsx(r,{className:"py-4 text-center",children:e==null?void 0:e.totalRides}),s.jsx(r,{className:"py-4 text-center",children:g(e==null?void 0:e.totalProfit)}),s.jsx(r,{className:"py-4 text-center",children:e==null?void 0:e.totalSold}),s.jsx(r,{className:"py-4 text-center",children:L(e==null?void 0:e.createdAt).format("DD MMM YYYY")}),s.jsx(r,{className:"py-4 text-center",children:s.jsx("div",{className:"flex items-center sm:justify-center",children:s.jsx(_,{status:e==null?void 0:e.status})})}),s.jsx(r,{className:"py-4 text-center",children:p&&(e==null?void 0:e._id)===o?s.jsx(q,{size:20,color:"white"}):s.jsxs("div",{className:"flex items-center sm:justify-center gap-4 text-xl ",children:[s.jsxs("button",{className:"text-green-500","data-tooltip-id":"edit-vehicle","data-tooltip-content":"Edit Vehicle",onClick:()=>d(e),children:[s.jsx("i",{className:"uil uil-edit-alt"}),s.jsx(f,{id:"edit-vehicle"})]}),s.jsxs("button",{className:"text-red-500","data-tooltip-id":"delete-vehicle","data-tooltip-content":(e==null?void 0:e.status)==="deleted"?"Undo delete":"Delete user",onClick:()=>j(e==null?void 0:e._id,e.status==="deleted"?"published":"deleted"),children:[s.jsx("i",{className:"uil uil-trash"}),s.jsx(f,{id:"delete-vehicle",style:{fontSize:15}})]})]})})]},e==null?void 0:e._id))})]}),s.jsx(M,{totalPages:i,currentPage:x,setCurrentPage:P})]})})},oe=()=>{const c=v(),{docs:l,currentPage:a,keyword:x}=m(d=>d.inventory),i=["fetch-all-inventories",a,x],{isLoading:p,data:o,isError:h,error:j}=E({queryKey:i,queryFn:()=>D(`/inventory/all?keyword=${x}&page=${a}`)});return b.useEffect(()=>{if(o){const{data:{data:{docs:d,docsCount:e,page:n,pages:u}}}=o;c(T({docs:d,docsCount:e,page:n,pages:u}))}},[o,c]),s.jsxs("div",{children:[s.jsx(I,{}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(w,{title:"Inventories"}),s.jsxs(C,{to:"/app/inventory/add-new",className:"btn-primary py-2 px-4 flex items-center gap-2",children:[s.jsx("i",{className:"uil uil-plus text-xl"}),s.jsx("span",{children:"Add New"})]})]}),s.jsx("div",{className:"mt-6",children:p?s.jsx(A,{}):h?s.jsx(y,{message:`Error: ${returnErrorMsg(j)}`}):(l==null?void 0:l.length)>0?s.jsx(z,{}):s.jsx(y,{message:"No user found."})})]})};export{oe as default};
