import{r as s,u as S,B as y,j as e,N as b,a as k,L as M,E as j,F as R,I as Y,T as H,Y as E,b as B,C as L,S as D}from"./index-KYj3JYdo.js";import{A as I,S as z}from"./AccessibilityButtons-DK5m3-uG.js";import{C as F}from"./call-icon_white-ViWAzMhP.js";import{L as O}from"./index-ecnTJg05.js";import{L as P}from"./index-K6qJzjgp.js";function A({title:w,to:r,links:d=[]}){const[i,c]=s.useState(0),p=s.useRef(null),[g]=S(),n=g.get("lang"),h=n?`lang=${n}`:"",{isBlindMode:u}=s.useContext(y),{colorSchema:m}=u||{},t=["stroke-black","stroke-white","stroke-lime-400"][m-1]||"stroke-white",l=["[&>div]:border-black","[&>div]:border-white","[&>div]:border-lime-400"][m-1]||"[&>div]:border-white",a=["bg-gray-300","bg-black","bg-black"][m-1]||"bg-[--colorBlue]",v=["[&.active]:bg-black [&:hover>span]:text-white [&.active]:text-white","[&.active]:bg-gray-300 [&:hover>span]:text-black [&.active]:text-black","[&.active]:bg-gray-800 [&:hover>span]:text-lime-400 [&.active]:text-lime-400"][m-1]||"[&:hover>span]:text-white [&.active]:text-white";return e.jsxs("div",{className:`relative cursor-pointer [&:hover>div]:border [&:hover>span>*]:rotate-0 ${l} sub-dropdown`,onMouseOver:()=>{var f;return c((f=p.current)==null?void 0:f.scrollHeight)},onMouseLeave:()=>c(0),children:[e.jsxs(b,{to:`${r}?${h}`,className:"flex py-2 px-2 justify-between items-center text-gray-600 text-nowrap font-normal relative",children:[w,e.jsx(k,{className:`h-8 fill-none ${t} stroke-[1.5] transition-transform -rotate-90`})]}),e.jsx("div",{className:`flex min-w-full flex-col justify-between transition-height duration-200 ${a} text-gray-900 rounded-se-lg rounded-b-lg absolute top-[-1px] left-full overflow-hidden`,ref:p,style:{height:`${i}px`},children:d.map((f,x)=>e.jsx(b,{to:`${f.to}?${h}`,className:`flex py-3 px-2 ${v} text-nowrap font-normal`,children:e.jsx("span",{children:f.text})},`${f.to}.${x}`))})]})}function G({title:w,to:r,links:d=[],index:i}){const[c,p]=s.useState(0),g=s.useRef(null),[n]=S(),h=n.get("lang"),u=h?`lang=${h}`:"",{isBlindMode:m}=s.useContext(y),{colorSchema:t}=m||{},l=["stroke-black","stroke-white","stroke-lime-400"][t-1]||"stroke-white",a=["[&>div]:border-black","[&>div]:border-white","[&>div]:border-lime-400"][t-1]||"[&>div]:border-white",v=["bg-gray-300","bg-black","bg-black"][t-1]||"bg-[--colorBlue]",f=["[&.active]:bg-black [&:hover>span]:text-white [&.active]:text-white","[&.active]:bg-gray-300 [&:hover>span]:text-black [&.active]:text-black","[&.active]:bg-gray-800 [&:hover>span]:text-lime-400 [&.active]:text-lime-400"][t-1]||"[&:hover>span]:text-white [&.active]:text-white";return e.jsxs("li",{className:`relative cursor-pointer [&:hover>div]:border [&:hover>div]:border-t-0 ${a}`,onMouseOver:()=>{var x;c===0&&p((x=g.current)==null?void 0:x.scrollHeight)},onMouseLeave:()=>p(0),children:[e.jsxs(b,{to:`${r}?${u}`,className:"flex items-center text-nowrap relative my-item",children:[w,e.jsx(k,{className:`h-8 fill-none ${l} stroke-[1.5]`})]}),e.jsx("div",{className:`flex min-w-full overflow-hidden has-[.sub-dropdown:hover]:overflow-visible flex-col justify-between transition-height duration-200 ${v} text-gray-900 rounded-b-lg absolute top-full${i===5?" right-0":""}`,ref:g,style:{height:`${c}px`},children:d.map((x,N)=>x.text?e.jsx(b,{to:`${x.to}?${u}`,className:`flex py-3 px-2 [&.active]:bg-[--colorDarkBlue] ${f} text-gray-600 text-nowrap font-normal`,children:e.jsx("span",{children:x.text})},`${x.to}.${N}`):e.jsx(A,{title:x.title,links:x.links,index:N,to:x.to},N))})]})}const W=[{icon:()=>e.jsx(R,{className:"h-8 transition hover:scale-125 fill-white"}),title:"Facebook",link:"http://uz103.uz"},{icon:()=>e.jsx(Y,{className:"h-8 transition hover:scale-125 fill-white"}),title:"Instagram",link:"http://uz103.uz"},{icon:()=>e.jsx(H,{className:"h-8 transition hover:scale-125 fill-white"}),title:"Telegram",link:"http://uz103.uz"},{icon:()=>e.jsx(E,{className:"h-10 transition hover:scale-125 fill-white"}),title:"Youtube",link:"http://uz103.uz"}];function q({open:w}){const[r,d]=s.useState(null),{navbar:i,lang:c,other:p}=s.useContext(M),{isBlindMode:g}=s.useContext(y),{fontSize:n,colorSchema:h}=g||{},u=["bg-gray-200","bg-gray-900","bg-gray-900"][h-1]||"bg-[--colorDarkBlue]",m=["text-black","text-white","text-lime-400"][h-1]||"text-white";return e.jsx("section",{className:`${w?"h-[calc(100vh_-_58px)] min-[480px]:h-[calc(100vh_-_121px)] md:h-[40vh]":"h-0"} absolute transition-all w-full`,children:e.jsxs("div",{className:`${u} h-full overflow-y-auto shadow-lg1 max-sm:pl-3`,children:[e.jsxs("section",{className:"mt-4 *:justify-between",children:[e.jsxs("ul",{className:"min-[480px]:hidden flex lg:gap-6 [&>*>a]:flex [&>*>a]:items-center relative z-20 mb-2",children:[e.jsx("li",{children:e.jsxs("a",{href:"tel:+998 (71) 236-73-34",className:`text-white hover:text-[--colorRed] [&>span>svg]:text-white [&:hover>span>svg]:text-[--colorRed] ${n||"max-sm:text-xs"}`,children:[e.jsx("img",{width:30,src:F,alt:"call-cion"}),"+998 (71) 236-73-34"]})}),e.jsx("li",{children:e.jsx("div",{className:"flex justify-end mr-2.5 scale-[0.8]",children:e.jsx(I,{iconColor:"#FFFFFF"})})})]}),e.jsxs("div",{className:"flex items-end min-[480px]:hidden",children:[e.jsxs("a",{href:"tel:103",className:`text-white flex items-center hover:text-[--colorRed] [&>span>svg]:text-white [&:hover>span>svg]:text-[--colorRed] ${n||"max-sm:text-xs"}`,children:[e.jsx("img",{width:30,src:F,alt:"call-cion"}),"103"]}),e.jsx("div",{className:"[&_span_*]:text-white scale-90 -mr-1",children:e.jsx(z,{})})]})]}),e.jsx("div",{className:"-mb-8"}),e.jsx("ul",{className:"p-3 gap-x-12 xl:grid-cols-4 md:grid-cols-3 hidden min-[586px]:grid min-[586px]:grid-cols-2 grid-flow-dense grid-rows-[40px] lg:max-xl:pl-5 pb-6",children:i.map((t,l)=>t.text?e.jsx("li",{className:"xl:p-3 w-full mt-8 last:mr-0",style:{gridRow:"span 1"},children:e.jsx(b,{className:`${n||"text-xl"} ${m} inline-block text-nowrap has-[+ul>li>a.active]:border-b font-semibold`,to:`${t.to}?lang=${c}`,children:t.text})},`full.bar.item.${l}`):t.title&&e.jsxs("li",{className:"xl:p-3 w-full mt-8 last:mr-0",style:{gridRow:`span ${t.links.length+1}`},children:[e.jsx("h1",{className:`${n||"text-xl"} ${m} inline-block text-nowrap has-[+ul>li>a.active]:border-b font-semibold`,children:t.title}),e.jsx("ul",{children:t.links.map((a,v)=>e.jsx("li",{className:`${n||""} mt-4 relative pl-6 before:content-['—'] before:absolute before:left-0 font-light ${m} ${g?"":"hover:text-[--colorYellow] has-[a.active]:text-[--colorYellow]"} transition hover:scale-105`,children:e.jsx(b,{to:`${a.to}?lang=${c}`,children:a.text||a.title})},`full.bar.link.${l}.${v}`))})]},`full.bar.item.${l}`))}),e.jsxs("section",{className:"min-[586px]:hidden overflow-hidden text-white mt-10 mr-2",children:[e.jsx(O,{}),e.jsxs("div",{className:`flex *:flex-shrink-0 *:w-full transition-transform duration-300 ${r===null?"":"-translate-x-full"}`,children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-center text-lg mt-2 p-3",children:{uz:"Menyu",cr:"Меню",en:"Menu",ru:"Меню"}[c]}),e.jsx("ul",{className:"py-2 first:*:border-t",children:i.map((t,l)=>t.text?e.jsx("li",{children:e.jsx(b,{to:`${t.to}?lang=${c}`,className:"py-3 border-b border-slate-500 flex justify-between items-center cursor-pointer",children:t.text||t.title},l)},l):e.jsxs("li",{className:"py-3 border-b border-slate-500 flex justify-between items-center cursor-pointer",onClick:()=>d(l),children:[t.title||t.text,e.jsx(k,{className:"transition-transform -rotate-90 h-8 fill-none stroke-[1.5] stroke-white"})]},l))}),e.jsx("ul",{className:"mt-4 flex gap-3 justify-center items-center",children:W.map(({icon:t,title:l,link:a},v)=>e.jsx("li",{title:l,children:e.jsx("a",{href:a,target:"_top",children:e.jsx(j,{children:e.jsx(t,{})})})},v))})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-center text-lg mt-2 p-3 relative",children:[e.jsx("button",{className:"absolute left-0",onClick:()=>d(null),children:e.jsx(k,{className:"transition-transform rotate-90 h-8 fill-none stroke-[1.5] stroke-white"})}),r===null?"Menu item":i[r].title]}),r===null?null:e.jsx("div",{className:"py-2 first:*:border-t",children:i[r].links.map((t,l)=>e.jsx(b,{to:`${t.to}?lang=${c}`,className:"py-3 border-b border-slate-500 flex justify-between items-center cursor-pointer",children:t.text||t.title},l))})]})]})]})]})})}const J=s.memo(function({show:r,setIsHideNavbar:d}){const{pathname:i}=B();return s.useEffect(()=>{d(!1),window.scrollTo(0,0)},[i]),e.jsx("div",{className:`fixed flex flex-col justify-center items-center w-14 h-14 z-[999999] text-white font-semibold right-8 go_to_top_btn ${r?"bottom-8":"hide"} cursor-pointer rounded-full p-2 bg-[--colorRed] shadow-sm shadow-black`,onClick:()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2.8,stroke:"#FFFFFF",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"})})})}),Z=s.memo(function(){const[r,d]=s.useState(!1),[i,c]=s.useState(!1),[p,g]=s.useState(0),[n,h]=s.useState(!1),{navbar:u,lang:m}=s.useContext(M),{isBlindMode:t}=s.useContext(y),{fontSize:l,colorSchema:a,imageColor:v}=t||{},f=["[&_*]:text-black","[&_*]:text-white","[&_*]:text-lime-400"][a-1]||"[&_*]:text-white",x=["[&>*]:bg-black","[&>*]:bg-white","[&>*]:bg-lime-400"][a-1]||"[&>*]:bg-white",N=["bg-slate-100","bg-black","bg-black"][a-1]||"bg-[--colorRed]",C=["#000000","#FFFFFF","#a3e635"][a-1]||"#FFFFFF",_=["my-border-black","","my-border-lime"][a-1]||"",{pathname:T}=B();return s.useEffect(()=>{n&&d(!1)},[n]),s.useEffect(()=>{r&&d(!1)},[T]),s.useEffect(()=>{r?(h(!1),document.body.className="max-md:overflow-hidden"):document.body.className="",window.onkeydown=o=>{(o==null?void 0:o.keyCode)===27&&d($=>!$)},window.onscroll=()=>{const o=window.scrollY;o>160&&(o<p?n&&h(!1):n||h(!0)),window.scrollY>window.innerHeight&&o<p?i||c(!0):i&&c(!1),g(o)}}),e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:`${N} my-navbar ${n?"hide":t?"shadow-sm":"shadow-md"}`,children:e.jsx(j,{children:e.jsxs(L,{children:[e.jsxs("aside",{className:"flex justify-between items-center relative z-50",children:[e.jsxs("div",{className:`${r?"open ":""}flex flex-col gap-1.5 [&>*]:w-[32px] [&>*]:h-[3px] ${x} cursor-pointer [&>*]:rounded animated-hamburger-btn py-3 lg:ml-5 md:ml-3.5 sm:ml-2 ml-1`,onClick:()=>d(o=>!o),children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx(b,{to:`/?lang=${m}`,className:"flex scale-90 transition items-center py-1 min-[480px]:hidden",children:e.jsx(j,{children:e.jsx(P,{className:"border rounded-full"})})}),e.jsx("ul",{className:`max-[1079px]:hidden flex items-center gap-8 ${f} ${l} [&>*]:font-medium [&>li]:py-3 my-menu ${_}`,children:u==null?void 0:u.map((o,$)=>o.text?e.jsx("li",{children:e.jsx(b,{to:`${o.to}?lang=${m}`,className:"p-1 inline-block relative",children:o.text})},$):e.jsx(G,{title:o.title,links:o.links,index:$,to:o.to},$))}),e.jsx("div",{className:"mr-2",style:{color:C},children:e.jsx(D,{className:"h-7 cursor-pointer search-animation-icon"})}),e.jsxs("div",{className:"flex items-center gap-3 min-[1080px]:hidden max-[479px]:hidden",children:[e.jsx("div",{children:e.jsx(j,{children:e.jsx(I,{iconColor:C})})}),e.jsx("div",{children:e.jsx(j,{children:e.jsx(z,{color:"text-white"})})})]})]}),e.jsx("nav",{className:"relative -mx-2 sm:max-lg:-mx-3",children:e.jsx(j,{children:e.jsx(q,{open:r})})})]})})}),e.jsx(j,{children:e.jsx(J,{show:i,setIsHideNavbar:h})})]})});export{Z as default};
