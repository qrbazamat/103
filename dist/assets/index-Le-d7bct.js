import{i as c,R as rt}from"./index-KYj3JYdo.js";function ht(){return c.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))}function lt(){return c.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))}const N=(n,t)=>{var e,o;return n===((o=(e=t==null?void 0:t.tagName)==null?void 0:e.toUpperCase)==null?void 0:o.call(e))},Z=n=>N("DIV",n)||N("SPAN",n),T=n=>N("IMG",n),X=n=>n.complete&&n.naturalHeight!==0,M=n=>N("SVG",n),q=({height:n,offset:t,width:e})=>Math.min((window.innerWidth-t*2)/e,(window.innerHeight-t*2)/n),ct=({containerHeight:n,containerWidth:t,offset:e,targetHeight:o,targetWidth:s})=>{const a=q({height:o,offset:e,width:s}),h=s>o?s/t:o/n;return a>1?h:a*h},S=({containerHeight:n,containerWidth:t,hasScalableSrc:e,offset:o,targetHeight:s,targetWidth:a})=>!n||!t?1:!e&&s&&a?ct({containerHeight:n,containerWidth:t,offset:o,targetHeight:s,targetWidth:a}):q({height:n,offset:o,width:t}),dt=/url(?:\(['"]?)(.*?)(?:['"]?\))/,P=n=>{var t;if(n){if(T(n))return n.currentSrc;if(Z(n)){const e=window.getComputedStyle(n).backgroundImage;if(e)return(t=dt.exec(e))==null?void 0:t[1]}}},mt=n=>{if(n)return T(n)?n.alt??void 0:n.getAttribute("aria-label")??void 0},ut=({containerHeight:n,containerLeft:t,containerTop:e,containerWidth:o,hasScalableSrc:s,offset:a,targetHeight:h,targetWidth:d})=>{const r=S({containerHeight:n,containerWidth:o,hasScalableSrc:s,offset:a,targetHeight:h,targetWidth:d});return{top:e,left:t,width:o*r,height:n*r,transform:`translate(0,0) scale(${1/r})`}},g=({position:n,relativeNum:t})=>{const e=parseFloat(n);return n.endsWith("%")?t*e/100:e},ft=({containerHeight:n,containerLeft:t,containerTop:e,containerWidth:o,hasScalableSrc:s,objectFit:a,objectPosition:h,offset:d,targetHeight:r,targetWidth:i})=>{if(a==="scale-down"&&(i<=o&&r<=n?a="none":a="contain"),a==="cover"||a==="contain"){const m=o/i,u=n/r,l=a==="cover"?Math.max(m,u):Math.min(m,u),[w="50%",p="50%"]=h.split(" "),L=g({position:w,relativeNum:o-i*l}),f=g({position:p,relativeNum:n-r*l}),v=S({containerHeight:r*l,containerWidth:i*l,hasScalableSrc:s,offset:d,targetHeight:r,targetWidth:i});return{top:e+f,left:t+L,width:i*l*v,height:r*l*v,transform:`translate(0,0) scale(${1/v})`}}else if(a==="none"){const[m="50%",u="50%"]=h.split(" "),l=g({position:m,relativeNum:o-i}),w=g({position:u,relativeNum:n-r}),p=S({containerHeight:r,containerWidth:i,hasScalableSrc:s,offset:d,targetHeight:r,targetWidth:i});return{top:e+w,left:t+l,width:i*p,height:r*p,transform:`translate(0,0) scale(${1/p})`}}else if(a==="fill"){const m=o/i,u=n/r,l=Math.max(m,u),w=S({containerHeight:r*l,containerWidth:i*l,hasScalableSrc:s,offset:d,targetHeight:r,targetWidth:i});return{width:o*w,height:n*w,transform:`translate(0,0) scale(${1/w})`}}else return{}},pt=({backgroundPosition:n,backgroundSize:t,containerHeight:e,containerLeft:o,containerTop:s,containerWidth:a,hasScalableSrc:h,offset:d,targetHeight:r,targetWidth:i})=>{if(t==="cover"||t==="contain"){const m=a/i,u=e/r,l=t==="cover"?Math.max(m,u):Math.min(m,u),[w="50%",p="50%"]=n.split(" "),L=g({position:w,relativeNum:a-i*l}),f=g({position:p,relativeNum:e-r*l}),v=S({containerHeight:r*l,containerWidth:i*l,hasScalableSrc:h,offset:d,targetHeight:r,targetWidth:i});return{top:s+f,left:o+L,width:i*l*v,height:r*l*v,transform:`translate(0,0) scale(${1/v})`}}else if(t==="auto"){const[m="50%",u="50%"]=n.split(" "),l=g({position:m,relativeNum:a-i}),w=g({position:u,relativeNum:e-r}),p=S({containerHeight:r,containerWidth:i,hasScalableSrc:h,offset:d,targetHeight:r,targetWidth:i});return{top:s+w,left:o+l,width:i*p,height:r*p,transform:`translate(0,0) scale(${1/p})`}}else{const[m="50%",u="50%"]=t.split(" "),l=g({position:m,relativeNum:a}),w=g({position:u,relativeNum:e}),p=l/i,L=w/r,f=Math.min(p,L),[v="50%",C="50%"]=n.split(" "),D=g({position:v,relativeNum:a-i*f}),z=g({position:C,relativeNum:e-r*f}),E=S({containerHeight:r*f,containerWidth:i*f,hasScalableSrc:h,offset:d,targetHeight:r,targetWidth:i});return{top:s+z,left:o+D,width:i*f*E,height:r*f*E,transform:`translate(0,0) scale(${1/E})`}}},wt=/\.svg$/i,vt=({hasZoomImg:n,imgSrc:t,isSvg:e,isZoomed:o,loadedImgEl:s,offset:a,shouldRefresh:h,targetEl:d})=>{var v;const r=e||((v=t==null?void 0:t.slice)==null?void 0:v.call(t,0,18))==="data:image/svg+xml"||n||!!(t&&wt.test(t)),i=d.getBoundingClientRect(),m=window.getComputedStyle(d),u=s!=null&&Z(d),l=s!=null&&!u,w=ut({containerHeight:i.height,containerLeft:i.left,containerTop:i.top,containerWidth:i.width,hasScalableSrc:r,offset:a,targetHeight:(s==null?void 0:s.naturalHeight)||i.height,targetWidth:(s==null?void 0:s.naturalWidth)||i.width}),p=l?ft({containerHeight:i.height,containerLeft:i.left,containerTop:i.top,containerWidth:i.width,hasScalableSrc:r,objectFit:m.objectFit,objectPosition:m.objectPosition,offset:a,targetHeight:(s==null?void 0:s.naturalHeight)||i.height,targetWidth:(s==null?void 0:s.naturalWidth)||i.width}):void 0,L=u?pt({backgroundPosition:m.backgroundPosition,backgroundSize:m.backgroundSize,containerHeight:i.height,containerLeft:i.left,containerTop:i.top,containerWidth:i.width,hasScalableSrc:r,offset:a,targetHeight:(s==null?void 0:s.naturalHeight)||i.height,targetWidth:(s==null?void 0:s.naturalWidth)||i.width}):void 0,f=Object.assign({},w,p,L);if(o){const C=window.innerWidth/2,D=window.innerHeight/2,z=parseFloat(String(f.left||0))+parseFloat(String(f.width||0))/2,E=parseFloat(String(f.top||0))+parseFloat(String(f.height||0))/2,A=C-z,I=D-E;h&&(f.transitionDuration="0.01ms"),f.transform=`translate(${A}px,${I}px) scale(1)`}return f},R=n=>{if(!n)return{};if(M(n)){const t=n.parentElement,e=n.getBoundingClientRect();if(t){const o=t.getBoundingClientRect();return{height:e.height,left:o.left-e.left,top:o.top-e.top,width:e.width}}else return{height:e.height,left:e.left,width:e.width,top:e.top}}else return{height:n.offsetHeight,left:n.offsetLeft,width:n.offsetWidth,top:n.offsetTop}},gt=n=>{const t="-zoom",e=["clip-path","fill","mask","marker-start","marker-mid","marker-end"],o=new Map;if(n.hasAttribute("id")){const s=n.id,a=s+t;o.set(s,a),n.id=a}n.querySelectorAll("[id]").forEach(s=>{const a=s.id,h=a+t;o.set(a,h),s.id=h}),o.forEach((s,a)=>{const h=`url(#${a})`,d=`url(#${s})`,r=e.map(i=>`[${i}="${h}"]`).join(", ");n.querySelectorAll(r).forEach(i=>{e.forEach(m=>{i.getAttribute(m)===h&&i.setAttribute(m,d)})})}),n.querySelectorAll("style").forEach(s=>{o.forEach((a,h)=>{s.textContent&&(s.textContent=s.textContent.replaceAll(`#${h}`,`#${a}`))})})},Lt=["img","svg",'[role="img"]',"[data-zoom]"].map(n=>`${n}:not([aria-hidden="true"])`).join(","),_={overflow:"",width:""};function Et(n){return c.createElement(K,{...n})}class K extends c.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1,styleGhost:{}},this.refContent=c.createRef(),this.refDialog=c.createRef(),this.refModalContent=c.createRef(),this.refModalImg=c.createRef(),this.refWrap=c.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=_,this.styleModalImg={},this.handleModalStateChange=t=>{var o,s,a,h;const{modalState:e}=this.state;t!=="LOADING"&&e==="LOADING"?(this.loadZoomImg(),window.addEventListener("resize",this.handleResize,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0)):t!=="LOADED"&&e==="LOADED"?window.addEventListener("wheel",this.handleWheel,{passive:!0}):t!=="UNLOADING"&&e==="UNLOADING"?(this.ensureImgTransitionEnd(),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0)):t!=="UNLOADED"&&e==="UNLOADED"&&(this.bodyScrollEnable(),window.removeEventListener("resize",this.handleResize),(s=(o=this.refModalImg.current)==null?void 0:o.removeEventListener)==null||s.call(o,"transitionend",this.handleImgTransitionEnd),(h=(a=this.refDialog.current)==null?void 0:a.close)==null||h.call(a))},this.getDialogContainer=()=>{let t=document.querySelector("[data-rmiz-portal]");return t==null&&(t=document.createElement("div"),t.setAttribute("data-rmiz-portal",""),document.body.appendChild(t)),t},this.setId=()=>{const t=()=>Math.random().toString(16).slice(-4);this.setState({id:t()+t()+t()})},this.setAndTrackImg=()=>{var e,o;const t=this.refContent.current;t&&(this.imgEl=t.querySelector(Lt),this.imgEl?((o=(e=this.contentNotFoundChangeObserver)==null?void 0:e.disconnect)==null||o.call(e),this.imgEl.addEventListener("load",this.handleImgLoad),this.imgEl.addEventListener("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElResizeObserver=new ResizeObserver(s=>{const a=s[0];a!=null&&a.target&&(this.imgEl=a.target,this.setState({styleGhost:R(this.imgEl)}))}),this.imgElResizeObserver.observe(this.imgEl),this.contentChangeObserver||(this.contentChangeObserver=new MutationObserver(()=>{this.setState({styleGhost:R(this.imgEl)})}),this.contentChangeObserver.observe(t,{attributes:!0,childList:!0,subtree:!0}))):this.contentNotFoundChangeObserver||(this.contentNotFoundChangeObserver=new MutationObserver(this.setAndTrackImg),this.contentNotFoundChangeObserver.observe(t,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=t=>{const{isZoomed:e}=this.props;!t&&e?this.zoom():t&&!e&&this.unzoom()},this.handleImgLoad=()=>{const t=P(this.imgEl);if(!t)return;const e=new Image;T(this.imgEl)&&(e.sizes=this.imgEl.sizes,e.srcset=this.imgEl.srcset),e.src=t;const o=()=>{this.setState({loadedImgEl:e,styleGhost:R(this.imgEl)})};e.decode().then(o).catch(()=>{if(X(e)){o();return}e.onload=o})},this.handleZoom=()=>{var t,e;this.hasImage()&&((e=(t=this.props).onZoomChange)==null||e.call(t,!0))},this.handleUnzoom=()=>{var t,e;(e=(t=this.props).onZoomChange)==null||e.call(t,!1)},this.handleBtnUnzoomClick=t=>{t.preventDefault(),t.stopPropagation(),this.handleUnzoom()},this.handleDialogCancel=t=>{t.preventDefault()},this.handleDialogClick=t=>{(t.target===this.refModalContent.current||t.target===this.refModalImg.current)&&(t.stopPropagation(),this.handleUnzoom())},this.handleKeyDown=t=>{(t.key==="Escape"||t.keyCode===27)&&(t.preventDefault(),t.stopPropagation(),this.handleUnzoom())},this.handleWheel=t=>{t.ctrlKey||(t.stopPropagation(),queueMicrotask(()=>{this.handleUnzoom()}))},this.handleTouchStart=t=>{if(t.touches.length>1){this.isScaling=!0;return}t.changedTouches.length===1&&t.changedTouches[0]&&(this.touchYStart=t.changedTouches[0].screenY)},this.handleTouchMove=t=>{var o;const e=((o=window.visualViewport)==null?void 0:o.scale)??1;if(this.props.canSwipeToUnzoom&&!this.isScaling&&e<=1&&this.touchYStart!=null&&t.changedTouches[0]){this.touchYEnd=t.changedTouches[0].screenY;const s=Math.max(this.touchYStart,this.touchYEnd),a=Math.min(this.touchYStart,this.touchYEnd);Math.abs(s-a)>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.hasImage=()=>this.imgEl&&(this.state.loadedImgEl||M(this.imgEl))&&window.getComputedStyle(this.imgEl).display!=="none",this.zoom=()=>{var t,e,o,s;this.bodyScrollDisable(),(e=(t=this.refDialog.current)==null?void 0:t.showModal)==null||e.call(t),(s=(o=this.refModalImg.current)==null?void 0:o.addEventListener)==null||s.call(o,"transitionend",this.handleImgTransitionEnd),this.setState({modalState:"LOADING"})},this.unzoom=()=>{this.setState({modalState:"UNLOADING"})},this.handleImgTransitionEnd=()=>{clearTimeout(this.timeoutTransitionEnd),this.state.modalState==="LOADING"?this.setState({modalState:"LOADED"}):this.state.modalState==="UNLOADING"&&this.setState({shouldRefresh:!1,modalState:"UNLOADED"})},this.ensureImgTransitionEnd=()=>{if(this.refModalImg.current){const t=window.getComputedStyle(this.refModalImg.current).transitionDuration,e=parseFloat(t);if(e){const o=e*(t.endsWith("ms")?1:1e3)+50;this.timeoutTransitionEnd=setTimeout(this.handleImgTransitionEnd,o)}}},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const t=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${t}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=_},this.loadZoomImg=()=>{const{props:{zoomImg:t}}=this,e=t==null?void 0:t.src;if(e){const o=new Image;o.sizes=(t==null?void 0:t.sizes)??"",o.srcset=(t==null?void 0:t.srcSet)??"",o.src=e;const s=()=>{this.setState({isZoomImgLoaded:!0})};o.decode().then(s).catch(()=>{if(X(o)){s();return}o.onload=s})}},this.UNSAFE_handleSvg=()=>{var s,a,h,d,r;const{imgEl:t,refModalImg:e,styleModalImg:o}=this;if(M(t)){const i=t.cloneNode(!0);gt(i),i.style.width=`${o.width||0}px`,i.style.height=`${o.height||0}px`,i.addEventListener("click",this.handleUnzoom),(h=(a=(s=e.current)==null?void 0:s.firstChild)==null?void 0:a.remove)==null||h.call(a),(r=(d=e.current)==null?void 0:d.appendChild)==null||r.call(d,i)}}}render(){const{handleBtnUnzoomClick:t,handleDialogCancel:e,handleDialogClick:o,handleUnzoom:s,handleZoom:a,imgEl:h,props:{a11yNameButtonUnzoom:d,a11yNameButtonZoom:r,children:i,classDialog:m,IconUnzoom:u,IconZoom:l,isZoomed:w,wrapElement:p,ZoomContent:L,zoomImg:f,zoomMargin:v},refContent:C,refDialog:D,refModalContent:z,refModalImg:E,refWrap:A,state:{id:I,isZoomImgLoaded:V,loadedImgEl:j,modalState:y,shouldRefresh:Q,styleGhost:J}}=this,x=`rmiz-modal-${I}`,Y=`rmiz-modal-img-${I}`,W=Z(h),O=T(h),$=M(h),U=mt(h),k=P(h),H=O?h.sizes:void 0,tt=O?h.srcset:void 0,et=!!(f!=null&&f.src),b=this.hasImage(),nt=U?`${r}: ${U}`:r,ot=y==="LOADING"||y==="LOADED",st=b?"found":"not-found",it=y==="UNLOADED"||y==="UNLOADING"?"hidden":"visible",at={visibility:y==="UNLOADED"?"visible":"hidden"};this.styleModalImg=b?vt({hasZoomImg:et,imgSrc:k,isSvg:$,isZoomed:w&&ot,loadedImgEl:j,offset:v,shouldRefresh:Q,targetEl:h}):{};let G=null;if(b){const B=O||W?c.createElement("img",{alt:U,sizes:H,src:k,srcSet:tt,...V&&y==="LOADED"?f:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:Y,ref:E,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):$?c.createElement("div",{"data-rmiz-modal-img":!0,ref:E,style:this.styleModalImg}):null,F=c.createElement("button",{"aria-label":d,"data-rmiz-btn-unzoom":"",onClick:t,type:"button"},c.createElement(u,null));G=L?c.createElement(L,{buttonUnzoom:F,modalState:y,img:B,onUnzoom:s}):c.createElement(c.Fragment,null,B,F)}return c.createElement(p,{"aria-owns":x,"data-rmiz":"",ref:A},c.createElement(p,{"data-rmiz-content":st,ref:C,style:at},i),b&&c.createElement(p,{"data-rmiz-ghost":"",style:J},c.createElement("button",{"aria-label":nt,"data-rmiz-btn-zoom":"",onClick:a,type:"button"},c.createElement(l,null))),b&&rt.createPortal(c.createElement("dialog",{"aria-labelledby":Y,"aria-modal":"true",className:m,"data-rmiz-modal":"",id:x,onClick:o,onClose:s,onCancel:e,ref:D,role:"dialog"},c.createElement("div",{"data-rmiz-modal-overlay":it}),c.createElement("div",{"data-rmiz-modal-content":"",ref:z},G)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){var t,e,o,s,a,h,d,r,i,m,u,l;this.state.modalState!=="UNLOADED"&&this.bodyScrollEnable(),(e=(t=this.contentChangeObserver)==null?void 0:t.disconnect)==null||e.call(t),(s=(o=this.contentNotFoundChangeObserver)==null?void 0:o.disconnect)==null||s.call(o),(h=(a=this.imgElResizeObserver)==null?void 0:a.disconnect)==null||h.call(a),(r=(d=this.imgEl)==null?void 0:d.removeEventListener)==null||r.call(d,"load",this.handleImgLoad),(m=(i=this.imgEl)==null?void 0:i.removeEventListener)==null||m.call(i,"click",this.handleZoom),(l=(u=this.refModalImg.current)==null?void 0:u.removeEventListener)==null||l.call(u,"transitionend",this.handleImgTransitionEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(t,e){this.handleModalStateChange(e.modalState),this.UNSAFE_handleSvg(),this.handleIfZoomChanged(t.isZoomed)}}K.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:ht,IconZoom:lt,swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0};function St(n){const[t,e]=c.useState(!1);return c.createElement(Et,{...n,isZoomed:t,onZoomChange:e})}export{St as U};
