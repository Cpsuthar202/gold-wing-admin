import{r as c,y as q,A as B,z as J,C as M,j as O,_ as m,x as Q,aN as U,F as A}from"./index-DMW1FIza.js";const V=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function x(l){return`scale(${l}, ${l**2})`}const X={entering:{opacity:1,transform:x(1)},entered:{opacity:1,transform:"none"}},h=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Y=c.forwardRef(function(p,L){const{addEndListener:y,appear:_=!0,children:E,easing:T,in:R,onEnter:j,onEntered:w,onEntering:C,onExit:v,onExited:D,onExiting:F,style:f,timeout:o="auto",TransitionComponent:H=Q}=p,G=q(p,V),P=B(),g=c.useRef(),r=J(),d=c.useRef(null),b=M(d,E.ref,L),s=t=>e=>{if(t){const i=d.current;e===void 0?t(i):t(i,e)}},z=s(C),S=s((t,e)=>{U(t);const{duration:i,delay:u,easing:n}=A({style:f,timeout:o,easing:T},{mode:"enter"});let a;o==="auto"?(a=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=a):a=i,t.style.transition=[r.transitions.create("opacity",{duration:a,delay:u}),r.transitions.create("transform",{duration:h?a:a*.666,delay:u,easing:n})].join(","),j&&j(t,e)}),W=s(w),$=s(F),K=s(t=>{const{duration:e,delay:i,easing:u}=A({style:f,timeout:o,easing:T},{mode:"exit"});let n;o==="auto"?(n=r.transitions.getAutoHeightDuration(t.clientHeight),g.current=n):n=e,t.style.transition=[r.transitions.create("opacity",{duration:n,delay:i}),r.transitions.create("transform",{duration:h?n:n*.666,delay:h?i:i||n*.333,easing:u})].join(","),t.style.opacity=0,t.style.transform=x(.75),v&&v(t)}),N=s(D),k=t=>{o==="auto"&&P.start(g.current||0,t),y&&y(d.current,t)};return O.jsx(H,m({appear:_,in:R,nodeRef:d,onEnter:S,onEntered:W,onEntering:z,onExit:K,onExited:N,onExiting:$,addEndListener:k,timeout:o==="auto"?null:o},G,{children:(t,e)=>c.cloneElement(E,m({style:m({opacity:0,transform:x(.75),visibility:t==="exited"&&!R?"hidden":void 0},X[t],f,E.props.style),ref:b},e))}))});Y.muiSupportAuto=!0;export{Y as G};
