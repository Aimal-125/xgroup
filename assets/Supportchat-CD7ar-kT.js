import{a8 as l,r as g,j as s}from"./index-C2xFYc7i.js";import{I as j}from"./img1-Dr1yV29J.js";import{B as v}from"./BackBtn-uZorzSMf.js";import{H as b}from"./Heading-le8S-T7p.js";var x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m=l.createContext&&l.createContext(x),y=["attr","size","title"];function w(e,t){if(e==null)return{};var r=O(e,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(n){N(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function N(e,t,r){return t=P(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){var t=S(e,"string");return typeof t=="symbol"?t:t+""}function S(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function p(e){return e&&e.map((t,r)=>l.createElement(t.tag,u({key:r},t.attr),p(t.child)))}function C(e){return t=>l.createElement(E,c({attr:u({},e.attr)},t),p(e.child))}function E(e){var t=r=>{var{attr:n,size:a,title:i}=e,h=w(e,y),d=a||r.size||"1em",o;return r.className&&(o=r.className),e.className&&(o=(o?o+" ":"")+e.className),l.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,h,{className:o,style:u(u({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return m!==void 0?l.createElement(m.Consumer,null,r=>t(r)):t(x)}function z(e){return C({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"},child:[]}]})(e)}const I=()=>{const[e,t]=g.useState(""),r=a=>{t(a.target.value)},n=()=>{console.log("Sent message:",e),t("")};return s.jsxs("div",{className:"bg-dark min-h-screen w-full rounded-md flex flex-col space-y-3 p-4",children:[s.jsxs("div",{className:"flex flex-row items-center w-full gap-3",children:[s.jsx("div",{children:s.jsx("img",{src:j,alt:"User",className:"w-[70px] h-[70px] rounded-full object-cover"})}),s.jsxs("div",{className:"flex flex-col space-y-1 text-lg",children:[s.jsx("p",{className:"font-semibold text-white",children:"John Doe"}),s.jsx("p",{className:"text-gray-400",children:"johndoe@example.com"})]})]}),s.jsxs("div",{className:"h-[700px] w-full flex flex-col space-y-3",children:[s.jsxs("div",{className:"h-[80%] w-full bg-stroke rounded-md flex flex-col space-y-2 p-3 overflow-y-auto",children:[s.jsx("div",{className:"flex justify-start",children:s.jsx("div",{className:"max-w-[70%] bg-gray-800 text-white p-2 rounded-md",children:"Hello, how can I assist you today?"})}),s.jsx("div",{className:"flex justify-end",children:s.jsx("div",{className:"max-w-[70%] bg-blue-500 text-white p-2 rounded-md",children:"I need some help with my account."})})]}),s.jsxs("div",{className:"h-[20%] w-full flex items-center bg-gray-800 rounded-md px-2",children:[s.jsx("div",{className:"flex justify-center items-center px-3",children:s.jsx(z,{className:"text-yellow-400 text-2xl"})}),s.jsx("input",{type:"text",value:e,onChange:r,className:"flex-1 bg-gray-700 text-white p-2 rounded-l-md focus:outline-none",placeholder:"Type your message..."}),s.jsx("button",{onClick:n,className:"bg-blue-500 p-2 rounded-r-md text-white hover:bg-blue-600 focus:outline-none",children:"Send"})]})]})]})},H=()=>s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx(b,{title:"Support Chat"}),s.jsx(v,{})]}),s.jsx("div",{className:"mt-6",children:s.jsx(I,{})})]});export{H as default};
