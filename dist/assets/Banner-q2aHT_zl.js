import{r as t,L as b,B as v,j as e,C,E as x,o as S,A as m}from"./index-aiToVYxB.js";import{B}from"./index-Nop-sfen.js";import{S as N}from"./SecondaryLogo-hOelgVcb.js";import{A as w,B as P}from"./index-nE-tKaZ0.js";import{L as E,a as L}from"./axios-VhRKQKmJ.js";const R=({items:p,text:h})=>{var d;const a=t.useRef(null),[n,l]=t.useState("start"),[o,i]=t.useState(null),[c,r]=t.useState("loading"),{lang:u}=t.useContext(b),{isBlindMode:f}=t.useContext(v),{fontSize:z,colorSchema:_,imageColor:g}=f||{},y=[{filter:"grayscale(100%)"},{}][g-1]||{},j=()=>{r("loading"),L.get(`${m}api/secondary-banner?lang=${u}`).then(s=>{i(s.data.data),r(!1)}).catch(s=>{i(null),r(s.message)})};return t.useEffect(()=>{j()},[u]),e.jsxs("section",{className:"h-[60vh] min-h-80 relative my-header-linear",children:[e.jsxs(C,{className:"h-full grid relative",children:[e.jsx("div",{className:"[&_*]:text-3xl lg:[&_*]:text-3xl xl:[&_*]:text-5xl grid",children:e.jsx(x,{children:e.jsx(N,{title:h,logo:!1,titleClass:"text-white"})})}),e.jsxs("div",{className:"flex absolute bottom-0 py-4 px-3 justify-between w-full",children:[e.jsx(x,{children:e.jsx(B,{items:p})}),c==="loading"||n==="start"?e.jsx("div",{children:e.jsx(E,{dark:!1})}):e.jsxs("button",{className:"border-[3px] w-10 h-10 grid place-content-center relative border-[--MainFontColor] rounded-full flex-shrink-0",onClick:()=>{l(s=>(s!=="play"?a.current.play():a.current.pause(),s!=="play"?"play":"pause"))},children:[e.jsx(S,{className:"fill-[--colorGray] h-4",play:n==="play"}),e.jsx(w,{duration:(d=a==null?void 0:a.current)==null?void 0:d.duration,status:n,className:"absolute light w-11 -top-[5px] -left-[5px] -rotate-90"})]})]})]}),c==="loading"?null:e.jsxs("video",{ref:a,autoPlay:!0,muted:!0,playsInline:!0,poster:P,className:"w-full h-full object-cover object-right absolute top-0 -z-10",style:y,onWaiting:()=>l("pause"),onPlaying:()=>l("play"),onEnded:()=>{l("end"),a.current.currentTime=0},children:[e.jsx("source",{src:`${m}${o==null?void 0:o.video}`,className:"w-full h-full"}),"Sizning brauzeringiz videoni ko'rsatishni qo'llab-quvvatlamaydi."]})]})};export{R as B};
