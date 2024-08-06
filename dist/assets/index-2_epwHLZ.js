import{r as s,u as Y,B as j,j as e,a as H,N as b,L as $,E as p,C as R}from"./index-XMpIQS8y.js";import{A as k,S as y}from"./AccessibilityButtons-eMjhmPh2.js";import{C}from"./call-icon_white-ViWAzMhP.js";import{L as z}from"./index-qQx2Mdjl.js";function E({title:f,links:i=[],index:a}){const[x,g]=s.useState(0),n=s.useRef(null),[d]=Y(),{isBlindMode:r}=s.useContext(j),{colorSchema:c}=r,h=["stroke-black","stroke-white","stroke-lime-400"][c-1]||"stroke-white",u=["[&>div]:border-black","[&>div]:border-white","[&>div]:border-lime-400"][c-1]||"[&>div]:border-white",l=["bg-gray-300","bg-black","bg-black"][c-1]||"bg-[--colorBlue]",m=["[&.active]:bg-black [&:hover>span]:text-white [&.active]:text-white","[&.active]:bg-gray-300 [&:hover>span]:text-black [&.active]:text-black","[&.active]:bg-gray-800 [&:hover>span]:text-lime-400 [&.active]:text-lime-400"][c-1]||"[&:hover>span]:text-gray-950 [&.active]:text-gray-950";return e.jsxs("li",{className:`relative cursor-pointer [&:hover>div]:border [&:hover>div]:border-t-0 ${u} max-[1079px]:hidden`,onMouseOver:()=>{var t;return g((t=n.current)==null?void 0:t.scrollHeight)},onMouseLeave:()=>g(0),children:[e.jsxs("span",{className:"flex items-center text-nowrap relative my-item",children:[f,e.jsx(H,{className:`h-8 fill-none ${h} stroke-[1.5]`})]}),e.jsx("div",{className:`flex min-w-full flex-col justify-between transition-height duration-200 ${l} text-gray-900 rounded-b-lg absolute top-full${a===5?" right-0":""} overflow-hidden`,ref:n,style:{height:`${x}px`},children:i.map((t,v)=>e.jsx(b,{to:`${t.to}?${d.toString()}`,className:`flex py-1 px-2 [&.active]:bg-[--colorYellow] ${m} text-nowrap font-normal`,children:e.jsx("span",{children:t.text})},`${t.to}.${v}`))})]})}function I({open:f,onClick:i}){const{navbar:a,lang:x,other:g}=s.useContext($),{isBlindMode:n}=s.useContext(j),{fontSize:d,colorSchema:r}=n,c=["bg-gray-200","bg-gray-900","bg-gray-900"][r-1]||"bg-[--colorBlue]",h=["text-black","text-white","text-lime-400"][r-1]||"text-white",u=[{filter:"invert(0%) sepia(100%) saturate(2%) hue-rotate(157deg) brightness(96%) contrast(100%)"},{filter:"invert(0%) sepia(100%) saturate(2%) hue-rotate(157deg) brightness(96%) contrast(100%)"},{filter:"invert(95%) sepia(16%) saturate(1907%) hue-rotate(23deg) brightness(89%) contrast(102%)"}][r-1]||{};return e.jsx("section",{className:`${f?"h-[calc(100vh_-_58px)] min-[480px]:h-[calc(100vh_-_121px)] min-[886px]:h-[60vh]":"h-0"} absolute transition-all w-full`,children:e.jsxs("div",{className:`${c} h-full overflow-y-auto shadow-lg max-sm:pl-3`,children:[e.jsxs("div",{className:"flex items-center justify-between p-3 min-[480px]:hidden",children:[e.jsx("div",{children:e.jsx(k,{iconColor:"#FFFFFF"})}),e.jsx("div",{className:"[&_span_*]:text-white",children:e.jsx(y,{})})]}),e.jsxs("ul",{className:"min-[480px]:hidden flex gap-4 lg:gap-6 [&>*>a]:flex [&>*>a]:items-center p-3 relative z-20",children:[e.jsx("li",{children:e.jsxs("a",{href:"tel:+998 (71) 236-73-34",className:`text-white hover:text-[--colorRed] [&>span>svg]:text-white [&:hover>span>svg]:text-[--colorRed] ${d||"max-sm:text-xs"}`,children:[e.jsx("img",{width:30,src:C,alt:"call-cion"}),"+998 (71) 236-73-34"]})}),e.jsx("li",{children:e.jsxs("a",{href:"tel:103",className:`ml-2 text-white hover:text-[--colorRed] [&>span>svg]:text-white [&:hover>span>svg]:text-[--colorRed] ${d||"max-sm:text-xs"}`,children:[e.jsx("img",{width:30,src:C,alt:"call-cion"}),"103"]})})]}),e.jsx("div",{className:"-mb-10"}),e.jsxs("ul",{className:"p-3 inline-block lg:max-xl:pl-5 pb-6",children:[a.map((l,m)=>l.title&&e.jsxs("li",{className:"xl:p-3 float-left xl:mr-6 lg:mr-10 min-[886px]:mr-4 min-[886px]:w-auto sm:w-1/2 w-full mt-10 last:mr-0",children:[e.jsx("h1",{className:`${d||"text-xl"} ${h} inline-block text-nowrap has-[+ul>li>a.active]:border-b font-semibold`,children:l.title}),e.jsx("ul",{className:"list-image-[url(/favicon-16x16.png)] list-inside ml-2",children:l.links.map((t,v)=>e.jsx("li",{className:`${d||""} mt-4 font-light ${h} ${n?"":"hover:text-[--colorYellow] has-[a.active]:text-[--colorYellow]"} transition hover:scale-105`,children:e.jsx(b,{to:`${t.to}?lang=${x}`,onClick:()=>i(!1),children:t.text})},`full.bar.link.${m}.${v}`))})]},`full.bar.item.${m}`)),e.jsxs("li",{className:"text-white xl:p-3 float-left xl:mr-6 lg:mr-10 min-[886px]:mr-4 min-[886px]:w-auto sm:w-1/2 w-full mt-10 last:mr-0 md:hidden",children:[e.jsx("h1",{className:"text-xl inline-block text-nowrap has-[+ul>li>a.active]:border-b font-semibold",children:g}),e.jsx("ul",{className:"list-image-[url(/favicon-16x16.png)] list-inside ml-2",style:u,children:a.map((l,m)=>l.text&&e.jsx("li",{className:"mt-4 font-light hover:text-[--colorYellow] has-[a.active]:text-[--colorYellow] transition hover:scale-105",children:e.jsx(b,{to:`${l.to}?lang=${x}`,onClick:()=>i(!1),children:l.text})},`full.bar.link.${m}`))})]})]})]})})}const L=s.memo(function({show:i,scrollPercentage:a}){return e.jsxs("div",{className:`fixed flex flex-col justify-center items-center w-14 h-14 z-[999999] text-white font-semibold right-8 go_to_top_btn ${i?"bottom-8":"hide"} cursor-pointer rounded-full p-2 bg-[--colorRed] shadow-sm shadow-black`,onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2.8,stroke:"#FFFFFF",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"})}),a,"%"]})}),G=s.memo(function(){const[i,a]=s.useState(!1),[x,g]=s.useState(!1),[n,d]=s.useState(0),[r,c]=s.useState(!1),{navbar:h,lang:u}=s.useContext($),{isBlindMode:l}=s.useContext(j),{fontSize:m,colorSchema:t,imageColor:v}=l,F=["[&_*]:text-black","[&_*]:text-white","[&_*]:text-lime-400"][t-1]||"[&_*]:text-white",S=["[&>*]:bg-black","[&>*]:bg-white","[&>*]:bg-lime-400"][t-1]||"[&>*]:bg-white",B=["bg-slate-100","bg-black","bg-black"][t-1]||"bg-[--colorRed]",N=["#000000","#FFFFFF","#a3e635"][t-1]||"#FFFFFF",_=["my-border-black","","my-border-lime"][t-1]||"";s.useEffect(()=>{r&&a(!1)},[r]),s.useEffect(()=>{window.onscroll=()=>{const o=window.scrollY;o>160&&(o<n?r&&c(!1):r||c(!0)),window.scrollY>window.innerHeight&&o<n?x||g(!0):x&&g(!1),d(o)}});const M=n/(document.documentElement.scrollHeight-window.innerHeight)*100;return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:`${B} my-navbar ${r?"hide":l?"shadow-sm shadow-slate-500":"shadow-md shadow-slate-200"}`,children:e.jsx(p,{children:e.jsxs(R,{children:[e.jsxs("aside",{className:"flex justify-between items-center relative z-50",children:[e.jsxs("div",{className:`${i?"open ":""}flex flex-col gap-1.5 [&>*]:w-[32px] [&>*]:h-[3px] ${S} cursor-pointer [&>*]:rounded animated-hamburger-btn py-3 lg:ml-5 md:ml-3.5 sm:ml-2 ml-1`,onClick:()=>a(o=>!o),children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx(b,{to:`/?lang=${u}`,className:"flex scale-90 transition items-center py-1 min-[480px]:hidden",children:e.jsx(p,{children:e.jsx(z,{className:"border rounded-full"})})}),e.jsx("ul",{className:`hidden md:flex md:items-center gap-8 ${F} ${m} [&>*]:font-semibold [&>li]:py-3 my-menu ${_}`,children:h==null?void 0:h.map((o,w)=>o.text?e.jsx("li",{children:e.jsx(b,{to:`${o.to}?lang=${u}`,className:"p-1 inline-block relative",children:o.text})},w):e.jsx(E,{title:o.title,links:o.links,index:w},w))}),e.jsx("div",{className:"mr-2",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",className:"h-8 cursor-pointer search-animation-icon",fill:N,children:e.jsx("path",{d:"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"})})}),e.jsx("div",{className:"min-[1080px]:hidden max-[479px]:hidden",children:e.jsx(p,{children:e.jsx(k,{iconColor:N})})}),e.jsx("div",{className:"min-[1080px]:hidden max-[479px]:hidden",children:e.jsx(p,{children:e.jsx(y,{})})})]}),e.jsx("nav",{className:"relative -mx-2 sm:max-lg:-mx-3",children:e.jsx(p,{children:e.jsx(I,{open:i,onClick:a})})})]})})}),e.jsx(p,{children:e.jsx(L,{show:x,scrollPercentage:(M||0)|0})})]})});export{G as default};
