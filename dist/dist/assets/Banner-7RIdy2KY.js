import{r as l,B as p,j as e,C as m,E as n,i as y}from"./index--0GCxxO8.js";import{B as h}from"./index-mr0coyZF.js";import{S as f}from"./SecondaryLogo--eQJ3J4B.js";import{A as j,B as g}from"./index-wLNtGUFG.js";const b="/assets/second-banner-video-5nIuJcNw.mp4",E=({items:c,text:i})=>{var o;const a=l.useRef(null),[r,t]=l.useState("pause"),{isBlindMode:u}=l.useContext(p),{fontSize:B,colorSchema:C,imageColor:d}=u||{},x=[{filter:"grayscale(100%)"},{}][d-1]||{};return e.jsxs("section",{className:"h-[60vh] relative",style:{backgroundImage:"linear-gradient(#1c3d81af, #1c3d81cf)"},children:[e.jsxs(m,{className:"h-full grid relative",children:[e.jsx("div",{className:"[&_*]:text-3xl lg:[&_*]:text-3xl xl:[&_*]:text-5xl grid",children:e.jsx(n,{children:e.jsx(f,{title:i,logo:!1,titleClass:"text-white"})})}),e.jsxs("div",{className:"flex absolute bottom-0 py-4 px-3 justify-between w-full",children:[e.jsx(n,{children:e.jsx(h,{items:c})}),e.jsxs("button",{className:"border-[3px] w-10 h-10 grid place-content-center relative border-[--MainFontColor] rounded-full flex-shrink-0",onClick:()=>{t(s=>(s!=="play"?a.current.play():a.current.pause(),s!=="play"?"play":"pause"))},children:[e.jsx(y,{className:"fill-[--colorGray] h-4",play:r==="play"}),e.jsx(j,{duration:(o=a==null?void 0:a.current)==null?void 0:o.duration,status:r,className:"absolute light w-11 -top-[5px] -left-[5px] -rotate-90"})]})]})]}),e.jsx("video",{ref:a,autoPlay:!0,muted:!0,playsInline:!0,poster:g,className:"w-full h-full object-cover absolute top-0 -z-10",onEnded:()=>t("end"),style:x,onLoadedData:()=>{var s;t("play"),(s=a==null?void 0:a.current)==null||s.play()},children:e.jsx("source",{src:b,className:"w-full h-full"})})]})};export{E as B};