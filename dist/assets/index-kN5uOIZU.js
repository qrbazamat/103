import{r as b,j as r,a as e}from"./index--0GCxxO8.js";const n=({currentPage:o,totalPages:i,onPageChange:d})=>{let s=[];if(b.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[o]),i<10)for(let l=1;l<=i;l++)s.push(l);else o<6?s=[1,2,3,4,5,6,7,"...",i]:o>i-5?s=[1,"...",i-6,i-5,i-4,i-3,i-2,i-1,i]:s=[1,"...",o-2,o-1,o,o+1,o+2,"...",i];return r.jsx("nav",{"aria-label":"Page navigation",className:"flex justify-center my-6",children:r.jsxs("ul",{className:"flex flex-wrap gap-1.5 -space-x-px",children:[r.jsx("li",{children:r.jsx("button",{onClick:()=>d(o-1),disabled:o===1,className:`ml-0 px-1 py-0.5 bg-white border rounded border-gray-300 hover:bg-gray-200 ${o===1&&"cursor-not-allowed opacity-50"}`,children:r.jsx(e,{className:"h-8 rotate-90 fill-none stroke-gray-600 stroke-1"})})}),s.map((l,x)=>r.jsx("li",{children:r.jsx("button",{onClick:()=>l!=="..."&&d(l),className:`px-3 py-2 leading-tight border rounded border-gray-300 ${o===l?"text-white bg-[--MainBlueColor] border-[--MainBlueColor]":"text-gray-600 bg-white hover:bg-gray-200 hover:text-gray-700"}`,children:l})},`${x}.${l}`)),r.jsx("li",{children:r.jsx("button",{onClick:()=>{d(o+1)},disabled:o===i,className:`px-1 py-0.5 bg-white border rounded border-gray-300 hover:bg-gray-200 ${o===i&&"cursor-not-allowed opacity-50"}`,children:r.jsx(e,{className:"h-8 -rotate-90 fill-none stroke-gray-600 stroke-1"})})})]})})};export{n as P};
