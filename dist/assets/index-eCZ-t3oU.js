import{r as i,j as e,L as c,E as h,C as x,a as d}from"./index-NfMdCpNb.js";import{B as b}from"./Banner-GDZDSWvx.js";import{L as p}from"./Leader-yR3vXke6.js";import{S as v}from"./SecondaryLogo-9I4BT7fF.js";import"./index-M5WcMQVF.js";import"./index-VBU4GEjg.js";const j=({isActive:o,persons:l})=>{const[s,r]=i.useState(0),n=i.useRef(null);return i.useEffect(()=>{var t;r(o?(t=n.current)==null?void 0:t.scrollHeight:0)},[o]),e.jsx("div",{ref:n,className:"transition-height duration-300 overflow-hidden",style:{height:`${s}px`},children:l.map((t,m)=>e.jsx(p,{person:t},m))})},B=()=>{const[o,l]=i.useState(null),{navbar:[{title:s,links:[,,{text:r}]}]}=i.useContext(c),n=[{label:s,link:"/markaz-haqida"},{label:r,link:""}],t=[{name:"Fotima Matvaliyevna Abdurashidova"},{name:"Musayeva Gulborno"},{name:"Tadjibayeva Mohira"}];return e.jsxs("section",{children:[e.jsx(h,{children:e.jsx(b,{items:n,text:s})}),e.jsxs(x,{className:"py-2 sm:py-4 md:py-6 shadow-2xl",children:[e.jsx(h,{children:e.jsx(v,{title:r})}),e.jsx("ul",{children:["Kotibiyat bo'limi","Yuridik bo'lim","Buxgalteriya hisobi va hisoboti bo'limi","Devonxona bo'limi","Sifat nazorati va monitoringi bo'limi","Xalqaro hamkorlik bo'limi","Transport bo'limi","Korrupsiyaga qarshi kurashish bo'limi","Yagona muvofiqlashtirish bo'limi","Murojaatlar bilan ishlash bo'limi","AKT boshqarmasi"].map((m,a)=>e.jsxs("li",{className:"my-3",children:[e.jsxs("div",{className:`transition duration-200 hover:bg-[--MainBlueColor]${o===a?" bg-[--MainBlueColor] text-white *:stroke-white":""} hover:text-white [&:hover>*]:stroke-white shadow max-w-[90%] md:max-w-[80%] mx-auto p-3 rounded-md cursor-pointer bg-[--GreyColor] uppercase font-semibold text-lg text-[--MainBlueColor] flex items-center justify-between select-none`,onClick:()=>l(u=>u===a?null:a),children:[m,e.jsx(d,{className:`transition duration-200 h-8 fill-none stroke-2 stroke-[--MainBlueColor]${a===o?" -rotate-90":""}`})]}),e.jsx(j,{isActive:o===a,persons:t})]},a))})]})]})};export{B as default};
