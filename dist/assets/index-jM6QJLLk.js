import{r as l,L as h,B as g,j as e,A as y,C as f,o as j}from"./index-aiToVYxB.js";import{A as v,B as w}from"./index-nE-tKaZ0.js";import{L as N}from"./axios-VhRKQKmJ.js";/* empty css              */const b={poster:w};function S({banner:t,status:o}){var d;const s=l.useRef(null),[i,a]=l.useState("start");l.useContext(h);const{isBlindMode:r}=l.useContext(g),{fontSize:C,colorSchema:c,imageColor:m}=r||{},u=r?"drop-shadow-[0_8px_8px_black]":"drop-shadow-[0_8px_8px_var(--colorBlue)]",n=["text-black","text-white","text-lime-400"][c-1]||"text-white",p=[{filter:"grayscale(100%)"},{}][m-1]||{};return e.jsxs("header",{className:"hero-height relative",children:[e.jsx("div",{className:"hero-height overflow-hidden hero-item",children:o==="loading"?null:e.jsxs("video",{ref:s,muted:!0,playsInline:!0,autoPlay:!0,poster:b.poster,className:"w-full h-full object-cover object-right",style:p,onWaiting:()=>a("pause"),onPlaying:()=>a("play"),onEnded:()=>a("end"),children:[e.jsx("source",{src:`${y}${t==null?void 0:t.video}`,className:"w-full h-full"}),"Sizning brauzeringiz videoni ko'rsatishni qo'llab-quvvatlamaydi."]})}),e.jsx("div",{className:"absolute inset-0 my-header-linear"}),e.jsx("div",{className:`absolute inset-0 header-content${r?" color-schema-"+c:""}`,children:e.jsxs(f,{className:"flex items-center justify-between h-full relative",children:[o==="loading"?e.jsx("div",{className:"bg-black p-24 bg-opacity-30 rounded-2xl backdrop-blur-[8px] max-w-[860px] min-w-[60%] animate-pulse"}):e.jsxs("div",{className:"bg-black p-6 sm:10 md:p-20 bg-opacity-30 rounded-2xl backdrop-blur-[8px] max-w-[860px] min-w-[75%] sm:min-w-[60%]",children:[e.jsx("h1",{className:`xl:text-6xl md:text-5xl max-[480px]:text-3xl text-4xl mb-10 font-bold ${n} ${u}`,children:t==null?void 0:t.name}),e.jsx("p",{className:`sm:text-xl text-lg leading-8 ${n}`,children:t==null?void 0:t.description})]}),o==="loading"||i==="start"?e.jsx("div",{className:"absolute right-5 bottom-20",children:e.jsx(N,{dark:!1})}):e.jsxs("button",{className:"border-2 w-10 h-10 grid place-content-center border-[--colorGray] rounded-full absolute right-5 bottom-20",onClick:()=>{a(x=>(x!=="play"?s.current.play():s.current.pause(),x!=="play"?"play":"pause"))},children:[e.jsx(j,{className:"fill-[--MainFontColor] h-4 relative",play:i==="play"}),e.jsx(v,{duration:(d=s==null?void 0:s.current)==null?void 0:d.duration,status:i,className:"absolute w-11 -top-1 -left-1 -rotate-90"})]})]})})]})}export{S as default};