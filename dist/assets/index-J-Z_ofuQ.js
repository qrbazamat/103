import{r as s,L as y,B as f,j as e,C as j,k as N}from"./index-2uTXfPTM.js";import{A as _,B as v}from"./index-vvkx9mxp.js";/* empty css              */const w="/assets/video1-J6XQUGrJ.webm",d={type:"video",poster:v,url:w};function P(){var c;const t=s.useRef(null),[o,a]=s.useState("pause"),{header_title:x,header_title_second_line:u,header_second_title:m}=s.useContext(y),{isBlindMode:l}=s.useContext(f),{fontSize:g,colorSchema:r,imageColor:p}=l||{},h=l?"drop-shadow-[0_8px_8px_black]":"drop-shadow-[0_8px_8px_var(--colorBlue)]",n=["text-black","text-white","text-lime-400"][r-1]||"text-white",b=[{filter:"grayscale(100%)"},{}][p-1]||{};return e.jsxs("header",{className:"hero-height relative",children:[e.jsx("div",{className:"hero-height overflow-hidden hero-item",children:e.jsx("video",{ref:t,muted:!0,playsInline:!0,autoPlay:!0,poster:d.poster,className:"w-full h-full object-cover",onEnded:()=>a("end"),style:b,onLoadedData:()=>{a("play"),t.current.play()},children:e.jsx("source",{src:d.url,className:"w-full h-full"})})}),e.jsx("div",{className:"absolute inset-0 my-header-linear"}),e.jsx("div",{className:`absolute inset-0 header-content${l?" color-schema-"+r:""}`,children:e.jsxs(j,{className:"flex items-center justify-between h-full relative",children:[e.jsxs("div",{className:"bg-black p-6 sm:10 md:p-20 bg-opacity-20 rounded-2xl backdrop-blur-[8px] max-w-[860px]",children:[e.jsxs("h1",{className:`xl:text-6xl md:text-5xl max-[480px]:text-3xl text-4xl mb-10 font-bold ${n} ${h}`,children:[x," ",e.jsx("br",{})," ",u]}),e.jsx("p",{className:`sm:text-xl text-lg leading-8 ${n}`,children:m})]}),e.jsxs("button",{className:"border-2 w-10 h-10 grid place-content-center border-[--colorGray] rounded-full absolute right-5 bottom-20",onClick:()=>{a(i=>(i!=="play"?t.current.play():t.current.pause(),i!=="play"?"play":"pause"))},children:[e.jsx(N,{className:"fill-[--MainFontColor] h-4 relative",play:o==="play"}),e.jsx(_,{duration:(c=t==null?void 0:t.current)==null?void 0:c.duration,status:o,className:"absolute w-11 -top-1 -left-1 -rotate-90"})]})]})})]})}export{P as default};
