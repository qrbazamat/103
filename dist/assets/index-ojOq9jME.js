import{r as a,L as b,u as E,j as e,E as N,C as P,S,A as C}from"./index-aiToVYxB.js";import{B as I}from"./Banner-q2aHT_zl.js";import{I as $}from"./Item-Lz9FGlE_.js";import{S as L}from"./SecondaryLogo-hOelgVcb.js";import{P as k}from"./index-PvytoHy6.js";import{L as w,a as y}from"./axios-VhRKQKmJ.js";import{E as B}from"./Error--wgnwUXC.js";import{N as z}from"./NoData-P1jQB6lr.js";import"./index-Nop-sfen.js";import"./index-nE-tKaZ0.js";/* empty css              */import"./formatFunctions-qHelEa9W.js";const K=()=>{var p;const{navbar:[{title:u,links:[,,,,,{text:i}]}],lang:o}=a.useContext(b),[t,d]=a.useState([]),[l,n]=a.useState("loading"),[f,m]=E(),x=Math.ceil((t==null?void 0:t.total)/(t==null?void 0:t.per_page)),r=f.get("page")*1,h=[{label:u,link:"/markaz-haqida"},{label:i,link:""}],c=()=>{n("loading"),y.get(`${C}api/vacancies?lang=${o}&page=${r}`).then(s=>{d(s.data.data),n(!1)}).catch(s=>{d([]),n(s.message)})};a.useEffect(()=>{c()},[o,r]),a.useEffect(()=>{r||m(s=>(s.set("page",1),s))},[]),a.useEffect(()=>{r||m(s=>(s.set("page",1),s))},[]);const j=s=>{s>0&&s<=x&&m(g=>(g.set("page",s),g))};return e.jsxs("section",{children:[e.jsx(N,{children:e.jsx(I,{items:h,text:i})}),e.jsx("div",{children:e.jsxs(P,{className:"py-2 sm:py-4 md:py-6",children:[e.jsx(L,{title:{uz:`Vakansiyalar soni: ${t==null?void 0:t.total}`,cr:`Вакансиялар сони: ${t==null?void 0:t.total}`,ru:`Количество вакансий: ${t==null?void 0:t.total}`,en:`Number of vacancies: ${t==null?void 0:t.total}`}[o]}),l==="loading"?e.jsx(w,{}):l?e.jsx(B,{message:l}):((p=t==null?void 0:t.data)==null?void 0:p.length)===0?e.jsx(z,{lang:o}):e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"max-w-screen-md mx-auto my-4 p-2",children:e.jsxs("label",{className:"mt-1.5 rounded-lg flex pl-3 border-2 border-gray-300 focus-within:border-[--MainBlueColor] overflow-hidden",children:[e.jsx(S,{className:"w-6 text-[--MainFontColor] opacity-50"}),e.jsx("input",{type:"text",name:"search",placeholder:"Izlash...",className:"p-2.5 w-full outline-none"})]})}),e.jsx("div",{className:"grid sm:grid-cols-2 min-[820px]:grid-cols-3 xl:grid-cols-4 px-2 *:mx-auto gap-4 sm:gap-5 mx-auto min-[1400px]:mt-6",children:t.map(s=>e.jsx($,{vacancy:s},s==null?void 0:s.id))}),e.jsx(k,{currentPage:r,totalPages:x,onPageChange:j})]})]})})]})};export{K as default};
