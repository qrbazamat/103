import{r as a,u as p,L as g,j as s,E as l,C as u}from"./index-KYj3JYdo.js";import{B as h}from"./Banner--p_Ffq6R.js";import{S as j}from"./SecondaryLogo-idGVqXfO.js";import{P as f}from"./index-kTl1txuJ.js";import{N as P}from"./NewsCard-NoAfAWFX.js";import{P as b}from"./index-to1JPkLC.js";import"./index-cLSWof0w.js";import"./index-xwUQ8wY4.js";import"./Button-ar1R-u7y.js";import"./index-2Qxzns-T.js";const I=a.memo(()=>{const[c,e]=p(),o=18,n=c.get("page")*1;a.useEffect(()=>{n||e(r=>(r.set("page",1),r))},[]);const x=r=>{r>0&&r<=o&&e(t=>(t.set("page",r),t))},{navbar:[,,,{links:[{text:i}],title:m}]}=a.useContext(g),d=[{label:m,link:"/axborot-xizmati"},{label:i,link:"/"}];return s.jsxs("section",{children:[s.jsx(l,{children:s.jsx(h,{items:d,text:m})}),s.jsxs(u,{className:"py-2 sm:py-4 md:py-6",children:[s.jsx(l,{children:s.jsx(j,{title:i})}),s.jsx("ul",{className:"p-3 grid min-[460px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8",children:f.map((r,t)=>s.jsx("li",{className:"shadow-xl border p-2 -m-2 rounded-2xl transition hover:scale-[103%]",children:s.jsx(P,{post:r,id:45e3+10*t})},t))}),s.jsx(b,{currentPage:n,totalPages:o,onPageChange:x})]})]})});export{I as default};
