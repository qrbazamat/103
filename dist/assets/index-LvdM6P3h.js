import{r as o,u as C,B as j,j as e,a as k,N as w,L as y,b as L,E as v,C as R}from"./index-6s3_BJbE.js";import{A as F,S}from"./AccessibilityButtons-C8VcSl7o.js";import{C as N}from"./call-icon_white-ViWAzMhP.js";import{L as Y}from"./index-O_i7-KOJ.js";function T({title:f,links:c=[],index:a}){const[n,h]=o.useState(0),x=o.useRef(null),[m]=C(),{isBlindMode:i}=o.useContext(j),{colorSchema:l}=i||{},u=["stroke-black","stroke-white","stroke-lime-400"][l-1]||"stroke-white",r=["[&>div]:border-black","[&>div]:border-white","[&>div]:border-lime-400"][l-1]||"[&>div]:border-white",d=["bg-gray-300","bg-black","bg-black"][l-1]||"bg-[--colorBlue]",b=["[&.active]:bg-black [&:hover>span]:text-white [&.active]:text-white","[&.active]:bg-gray-300 [&:hover>span]:text-black [&.active]:text-black","[&.active]:bg-gray-800 [&:hover>span]:text-lime-400 [&.active]:text-lime-400"][l-1]||"[&:hover>span]:text-white [&.active]:text-white";return e.jsxs("div",{className:`relative cursor-pointer [&:hover>div]:border [&:hover>span>*]:rotate-0 ${r} sub-dropdown`,onMouseOver:()=>{var t;return h((t=x.current)==null?void 0:t.scrollHeight)},onMouseLeave:()=>h(0),children:[e.jsxs("span",{className:"flex py-2 px-2 justify-between items-center text-nowrap relative",children:[f,e.jsx(k,{className:`h-8 fill-none ${u} stroke-[1.5] transition-transform -rotate-90`})]}),e.jsx("div",{className:`flex min-w-full flex-col justify-between transition-height duration-200 ${d} text-gray-900 rounded-se-lg rounded-b-lg absolute top-[-1px] left-full overflow-hidden`,ref:x,style:{height:`${n}px`},children:c.map((t,p)=>e.jsx(w,{to:`${t.to}?${m.toString()}`,className:`flex py-3 px-2 ${b} text-nowrap font-normal`,children:e.jsx("span",{children:t.text})},`${t.to}.${p}`))})]})}function z({title:f,links:c=[],index:a}){const[n,h]=o.useState(0),x=o.useRef(null),[m]=C(),{isBlindMode:i}=o.useContext(j),{colorSchema:l}=i||{},u=["stroke-black","stroke-white","stroke-lime-400"][l-1]||"stroke-white",r=["[&>div]:border-black","[&>div]:border-white","[&>div]:border-lime-400"][l-1]||"[&>div]:border-white",d=["bg-gray-300","bg-black","bg-black"][l-1]||"bg-[--colorBlue]",b=["[&.active]:bg-black [&:hover>span]:text-white [&.active]:text-white","[&.active]:bg-gray-300 [&:hover>span]:text-black [&.active]:text-black","[&.active]:bg-gray-800 [&:hover>span]:text-lime-400 [&.active]:text-lime-400"][l-1]||"[&:hover>span]:text-white [&.active]:text-white";return e.jsxs("li",{className:`relative cursor-pointer [&:hover>div]:border [&:hover>div]:border-t-0 ${r} max-[1079px]:hidden`,onMouseOver:()=>{var t;n===0&&h((t=x.current)==null?void 0:t.scrollHeight)},onMouseLeave:()=>h(0),children:[e.jsxs("span",{className:"flex items-center text-nowrap relative my-item",children:[f,e.jsx(k,{className:`h-8 fill-none ${u} stroke-[1.5]`})]}),e.jsx("div",{className:`flex min-w-full overflow-hidden has-[.sub-dropdown:hover]:overflow-visible flex-col justify-between transition-height duration-200 ${d} text-gray-900 rounded-b-lg absolute top-full${a===5?" right-0":""}`,ref:x,style:{height:`${n}px`},children:c.map((t,p)=>t.text?e.jsx(w,{to:`${t.to}?${m.toString()}`,className:`flex py-3 px-2 [&.active]:bg-[--colorDarkBlue] ${b} text-gray-600 text-nowrap font-normal`,children:e.jsx("span",{children:t.text})},`${t.to}.${p}`):e.jsx(T,{title:t.title,links:t.links,index:p},p))})]})}function E({open:f,onClick:c}){const{navbar:a,lang:n,other:h}=o.useContext(y),{isBlindMode:x}=o.useContext(j),{fontSize:m,colorSchema:i}=x||{},l=["bg-gray-200","bg-gray-900","bg-gray-900"][i-1]||"bg-[--colorDarkBlue]",u=["text-black","text-white","text-lime-400"][i-1]||"text-white";return e.jsx("section",{className:`${f?"h-[calc(100vh_-_58px)] min-[480px]:h-[calc(100vh_-_121px)] min-[886px]:h-[60vh]":"h-0"} absolute transition-all w-full`,children:e.jsxs("div",{className:`${l} h-full overflow-y-auto shadow-lg max-sm:pl-3`,children:[e.jsxs("div",{className:"flex items-center justify-between p-3 min-[480px]:hidden",children:[e.jsx("div",{children:e.jsx(F,{iconColor:"#FFFFFF"})}),e.jsx("div",{className:"[&_span_*]:text-white",children:e.jsx(S,{})})]}),e.jsxs("ul",{className:"min-[480px]:hidden flex gap-4 lg:gap-6 [&>*>a]:flex [&>*>a]:items-center p-3 relative z-20",children:[e.jsx("li",{children:e.jsxs("a",{href:"tel:+998 (71) 236-73-34",className:`text-white hover:text-[--colorRed] [&>span>svg]:text-white [&:hover>span>svg]:text-[--colorRed] ${m||"max-sm:text-xs"}`,children:[e.jsx("img",{width:30,src:N,alt:"call-cion"}),"+998 (71) 236-73-34"]})}),e.jsx("li",{children:e.jsxs("a",{href:"tel:103",className:`ml-2 text-white hover:text-[--colorRed] [&>span>svg]:text-white [&:hover>span>svg]:text-[--colorRed] ${m||"max-sm:text-xs"}`,children:[e.jsx("img",{width:30,src:N,alt:"call-cion"}),"103"]})})]}),e.jsx("div",{className:"-mb-10"}),e.jsxs("ul",{className:"p-3 inline-block lg:max-xl:pl-5 pb-6",children:[a.map((r,d)=>r.title&&e.jsxs("li",{className:"xl:p-3 float-left xl:mr-6 lg:mr-10 min-[886px]:mr-4 min-[886px]:w-auto sm:w-1/2 w-full mt-10 last:mr-0",children:[e.jsx("h1",{className:`${m||"text-xl"} ${u} inline-block text-nowrap has-[+ul>li>a.active]:border-b font-semibold`,children:r.title}),e.jsx("ul",{children:r.links.map((b,t)=>e.jsx("li",{className:`${m||""} mt-4 relative pl-6 before:content-['—'] before:absolute before:left-0 font-light ${u} ${x?"":"hover:text-[--colorYellow] has-[a.active]:text-[--colorYellow]"} transition hover:scale-105`,children:e.jsx(w,{to:`${b.to}?lang=${n}`,onClick:()=>c(!1),children:b.text})},`full.bar.link.${d}.${t}`))})]},`full.bar.item.${d}`)),e.jsxs("li",{className:"text-white xl:p-3 float-left xl:mr-6 lg:mr-10 min-[886px]:mr-4 min-[886px]:w-auto sm:w-1/2 w-full mt-10 last:mr-0 md:hidden",children:[e.jsx("h1",{className:"text-xl inline-block text-nowrap has-[+ul>li>a.active]:border-b font-semibold",children:h}),e.jsx("ul",{children:a.map((r,d)=>r.text&&e.jsx("li",{className:"mt-4 relative pl-6 before:content-['—'] before:absolute before:left-0 font-light hover:text-[--colorYellow] has-[a.active]:text-[--colorYellow] transition hover:scale-105 text-xl",children:e.jsx(w,{to:`${r.to}?lang=${n}`,onClick:()=>c(!1),children:r.text})},`full.bar.link.${d}`))})]})]})]})})}const I=o.memo(function({show:c,setIsHideNavbar:a}){const{pathname:n}=L();return o.useEffect(()=>{a(!1),window.scrollTo(0,0)},[n]),e.jsx("div",{className:`fixed flex flex-col justify-center items-center w-14 h-14 z-[999999] text-white font-semibold right-8 go_to_top_btn ${c?"bottom-8":"hide"} cursor-pointer rounded-full p-2 bg-[--colorRed] shadow-sm shadow-black`,onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2.8,stroke:"#FFFFFF",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"})})})}),P=o.memo(function(){const[c,a]=o.useState(!1),[n,h]=o.useState(!1),[x,m]=o.useState(0),[i,l]=o.useState(!1),{navbar:u,lang:r}=o.useContext(y),{isBlindMode:d}=o.useContext(j),{fontSize:b,colorSchema:t,imageColor:p}=d||{},B=["[&_*]:text-black","[&_*]:text-white","[&_*]:text-lime-400"][t-1]||"[&_*]:text-white",M=["[&>*]:bg-black","[&>*]:bg-white","[&>*]:bg-lime-400"][t-1]||"[&>*]:bg-white",_=["bg-slate-100","bg-black","bg-black"][t-1]||"bg-[--colorRed]",$=["#000000","#FFFFFF","#a3e635"][t-1]||"#FFFFFF",H=["my-border-black","","my-border-lime"][t-1]||"";return o.useEffect(()=>{i&&a(!1)},[i]),o.useEffect(()=>{window.onkeydown=s=>{(s==null?void 0:s.keyCode)===27&&a(g=>!g)},window.onscroll=()=>{const s=window.scrollY;s>160&&(s<x?i&&l(!1):i||l(!0)),window.scrollY>window.innerHeight&&s<x?n||h(!0):n&&h(!1),m(s)}}),e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:`${_} my-navbar ${i?"hide":d?"shadow-sm":"shadow-md"}`,children:e.jsx(v,{children:e.jsxs(R,{children:[e.jsxs("aside",{className:"flex justify-between items-center relative z-50",children:[e.jsxs("div",{className:`${c?"open ":""}flex flex-col gap-1.5 [&>*]:w-[32px] [&>*]:h-[3px] ${M} cursor-pointer [&>*]:rounded animated-hamburger-btn py-3 lg:ml-5 md:ml-3.5 sm:ml-2 ml-1`,onClick:()=>a(s=>!s),children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx(w,{to:`/?lang=${r}`,className:"flex scale-90 transition items-center py-1 min-[480px]:hidden",children:e.jsx(v,{children:e.jsx(Y,{className:"border rounded-full"})})}),e.jsx("ul",{className:`hidden md:flex md:items-center gap-8 ${B} ${b} [&>*]:font-medium [&>li]:py-3 my-menu ${H}`,children:u==null?void 0:u.map((s,g)=>s.text?e.jsx("li",{children:e.jsx(w,{to:`${s.to}?lang=${r}`,className:"p-1 inline-block relative",children:s.text})},g):e.jsx(z,{title:s.title,links:s.links,index:g},g))}),e.jsx("div",{className:"mr-2",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",className:"h-8 cursor-pointer search-animation-icon",fill:$,children:e.jsx("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"})})}),e.jsx("div",{className:"min-[1080px]:hidden max-[479px]:hidden",children:e.jsx(v,{children:e.jsx(F,{iconColor:$})})}),e.jsx("div",{className:"min-[1080px]:hidden max-[479px]:hidden",children:e.jsx(v,{children:e.jsx(S,{color:"text-white"})})})]}),e.jsx("nav",{className:"relative -mx-2 sm:max-lg:-mx-3",children:e.jsx(v,{children:e.jsx(E,{open:c,onClick:a})})})]})})}),e.jsx(v,{children:e.jsx(I,{show:n,setIsHideNavbar:l})})]})});export{P as default};