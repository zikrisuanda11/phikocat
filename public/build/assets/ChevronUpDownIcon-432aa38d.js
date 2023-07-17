import{r as l,R as x}from"./app-a381c4b7.js";import{s as $,l as D,h as me,g as he,u as R,d as K,j as re,p as ne,S as ge,D as Y,y as le,k as L,m as ie,n as be,o as F,q as Ee,X as ue}from"./use-flags-761c4fb4.js";function Xe(e,t){let[r,n]=l.useState(e),a=$(e);return D(()=>n(a.current),[a,n,...t]),r}function W(e,t,r){let n=$(t);l.useEffect(()=>{function a(f){n.current(f)}return document.addEventListener(e,a,r),()=>document.removeEventListener(e,a,r)},[e,r])}function we(e,t,r){let n=$(t);l.useEffect(()=>{function a(f){n.current(f)}return window.addEventListener(e,a,r),()=>window.removeEventListener(e,a,r)},[e,r])}function Ge(e,t,r=!0){let n=l.useRef(!1);l.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function a(i,s){if(!n.current||i.defaultPrevented)return;let o=s(i);if(o===null||!o.getRootNode().contains(o))return;let c=function d(v){return typeof v=="function"?d(v()):Array.isArray(v)||v instanceof Set?v:[v]}(e);for(let d of c){if(d===null)continue;let v=d instanceof HTMLElement?d:d.current;if(v!=null&&v.contains(o)||i.composed&&i.composedPath().includes(v))return}return!me(o,he.Loose)&&o.tabIndex!==-1&&i.preventDefault(),t(i,o)}let f=l.useRef(null);W("mousedown",i=>{var s,o;n.current&&(f.current=((o=(s=i.composedPath)==null?void 0:s.call(i))==null?void 0:o[0])||i.target)},!0),W("click",i=>{f.current&&(a(i,()=>f.current),f.current=null)},!0),we("blur",i=>a(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Z(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Je(e,t){let[r,n]=l.useState(()=>Z(e));return D(()=>{n(Z(e))},[e.type,e.as]),D(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[r,t]),r}function xe(e){throw new Error("Unexpected object: "+e)}var Ce=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Ce||{});function Ke(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),a=n??-1,f=(()=>{switch(e.focus){case 0:return r.findIndex(i=>!t.resolveDisabled(i));case 1:{let i=r.slice().reverse().findIndex((s,o,c)=>a!==-1&&c.length-o-1>=a?!1:!t.resolveDisabled(s));return i===-1?i:r.length-1-i}case 2:return r.findIndex((i,s)=>s<=a?!1:!t.resolveDisabled(i));case 3:{let i=r.slice().reverse().findIndex(s=>!t.resolveDisabled(s));return i===-1?i:r.length-1-i}case 4:return r.findIndex(i=>t.resolveId(i)===e.id);case 5:return null;default:xe(e)}})();return f===-1?n:f}let _=l.createContext(null);_.displayName="OpenClosedContext";var C=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(C||{});function oe(){return l.useContext(_)}function Te({value:e,children:t}){return x.createElement(_.Provider,{value:e},t)}function ee(e){return[e.screenX,e.screenY]}function Ye(){let e=l.useRef([-1,-1]);return{wasMoved(t){let r=ee(t);return e.current[0]===r[0]&&e.current[1]===r[1]?!1:(e.current=r,!0)},update(t){e.current=ee(t)}}}function Re(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function X(e,...t){e&&t.length>0&&e.classList.add(...t)}function G(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Le(e,t){let r=K();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[f,i]=[n,a].map(o=>{let[c=0]=o.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,v)=>v-d);return c}),s=f+i;if(s!==0){r.group(c=>{c.setTimeout(()=>{t(),c.dispose()},s),c.addEventListener(e,"transitionrun",d=>{d.target===d.currentTarget&&c.dispose()})});let o=r.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),o())})}else t();return r.add(()=>t()),r.dispose}function Fe(e,t,r,n){let a=r?"enter":"leave",f=K(),i=n!==void 0?Re(n):()=>{};a==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=R(a,{enter:()=>t.enter,leave:()=>t.leave}),o=R(a,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=R(a,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return G(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),X(e,...s,...c),f.nextFrame(()=>{G(e,...c),X(e,...o),Le(e,()=>(G(e,...s),X(e,...t.entered),i()))}),f.dispose}function $e({container:e,direction:t,classes:r,onStart:n,onStop:a}){let f=re(),i=ne(),s=$(t);D(()=>{let o=K();i.add(o.dispose);let c=e.current;if(c&&s.current!=="idle"&&f.current)return o.dispose(),n.current(s.current),o.add(Fe(c,r.current,s.current==="enter",()=>{o.dispose(),a.current(s.current)})),o.dispose},[t])}function y(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let A=l.createContext(null);A.displayName="TransitionContext";var ye=(e=>(e.Visible="visible",e.Hidden="hidden",e))(ye||{});function Pe(){let e=l.useContext(A);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Se(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=l.createContext(null);M.displayName="NestingContext";function j(e){return"children"in e?j(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ae(e,t){let r=$(e),n=l.useRef([]),a=re(),f=ne(),i=F((m,u=L.Hidden)=>{let h=n.current.findIndex(({el:p})=>p===m);h!==-1&&(R(u,{[L.Unmount](){n.current.splice(h,1)},[L.Hidden](){n.current[h].state="hidden"}}),f.microTask(()=>{var p;!j(n)&&a.current&&((p=r.current)==null||p.call(r))}))}),s=F(m=>{let u=n.current.find(({el:h})=>h===m);return u?u.state!=="visible"&&(u.state="visible"):n.current.push({el:m,state:"visible"}),()=>i(m,L.Unmount)}),o=l.useRef([]),c=l.useRef(Promise.resolve()),d=l.useRef({enter:[],leave:[],idle:[]}),v=F((m,u,h)=>{o.current.splice(0),t&&(t.chains.current[u]=t.chains.current[u].filter(([p])=>p!==m)),t==null||t.chains.current[u].push([m,new Promise(p=>{o.current.push(p)})]),t==null||t.chains.current[u].push([m,new Promise(p=>{Promise.all(d.current[u].map(([g,P])=>P)).then(()=>p())})]),u==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(u)):h(u)}),w=F((m,u,h)=>{Promise.all(d.current[u].splice(0).map(([p,g])=>g)).then(()=>{var p;(p=o.current.shift())==null||p()}).then(()=>h(u))});return l.useMemo(()=>({children:n,register:s,unregister:i,onStart:v,onStop:w,wait:c,chains:d}),[s,i,n,v,w,d,c])}function De(){}let Ne=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function te(e){var t;let r={};for(let n of Ne)r[n]=(t=e[n])!=null?t:De;return r}function Oe(e){let t=l.useRef(te(e));return l.useEffect(()=>{t.current=te(e)},[e]),t}let He="div",se=ge.RenderStrategy;function Ie(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:a,afterLeave:f,enter:i,enterFrom:s,enterTo:o,entered:c,leave:d,leaveFrom:v,leaveTo:w,...m}=e,u=l.useRef(null),h=le(u,t),p=m.unmount?L.Unmount:L.Hidden,{show:g,appear:P,initial:E}=Pe(),[b,U]=l.useState(g?"visible":"hidden"),Q=Se(),{register:N,unregister:O}=Q,k=l.useRef(null);l.useEffect(()=>N(u),[N,u]),l.useEffect(()=>{if(p===L.Hidden&&u.current){if(g&&b!=="visible"){U("visible");return}return R(b,{hidden:()=>O(u),visible:()=>N(u)})}},[b,u,N,O,g,p]);let B=$({enter:y(i),enterFrom:y(s),enterTo:y(o),entered:y(c),leave:y(d),leaveFrom:y(v),leaveTo:y(w)}),H=Oe({beforeEnter:r,afterEnter:n,beforeLeave:a,afterLeave:f}),z=ie();l.useEffect(()=>{if(z&&b==="visible"&&u.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[u,b,z]);let q=E&&!P,de=(()=>!z||q||k.current===g?"idle":g?"enter":"leave")(),S=be(0),fe=F(T=>R(T,{enter:()=>{S.addFlag(C.Opening),H.current.beforeEnter()},leave:()=>{S.addFlag(C.Closing),H.current.beforeLeave()},idle:()=>{}})),ve=F(T=>R(T,{enter:()=>{S.removeFlag(C.Opening),H.current.afterEnter()},leave:()=>{S.removeFlag(C.Closing),H.current.afterLeave()},idle:()=>{}})),I=ae(()=>{U("hidden"),O(u)},Q);$e({container:u,classes:B,direction:de,onStart:$(T=>{I.onStart(u,T,fe)}),onStop:$(T=>{I.onStop(u,T,ve),T==="leave"&&!j(I)&&(U("hidden"),O(u))})}),l.useEffect(()=>{q&&(p===L.Hidden?k.current=null:k.current=g)},[g,q,b]);let V=m,pe={ref:h};return P&&g&&E&&(V={...V,className:Ee(m.className,...B.current.enter,...B.current.enterFrom)}),x.createElement(M.Provider,{value:I},x.createElement(Te,{value:R(b,{visible:C.Open,hidden:C.Closed})|S.flags},ue({ourProps:pe,theirProps:V,defaultTag:He,features:se,visible:b==="visible",name:"Transition.Child"})))}function Ae(e,t){let{show:r,appear:n=!1,unmount:a,...f}=e,i=l.useRef(null),s=le(i,t);ie();let o=oe();if(r===void 0&&o!==null&&(r=(o&C.Open)===C.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=l.useState(r?"visible":"hidden"),v=ae(()=>{d("hidden")}),[w,m]=l.useState(!0),u=l.useRef([r]);D(()=>{w!==!1&&u.current[u.current.length-1]!==r&&(u.current.push(r),m(!1))},[u,r]);let h=l.useMemo(()=>({show:r,appear:n,initial:w}),[r,n,w]);l.useEffect(()=>{if(r)d("visible");else if(!j(v))d("hidden");else{let E=i.current;if(!E)return;let b=E.getBoundingClientRect();b.x===0&&b.y===0&&b.width===0&&b.height===0&&d("hidden")}},[r,v]);let p={unmount:a},g=F(()=>{var E;w&&m(!1),(E=e.beforeEnter)==null||E.call(e)}),P=F(()=>{var E;w&&m(!1),(E=e.beforeLeave)==null||E.call(e)});return x.createElement(M.Provider,{value:v},x.createElement(A.Provider,{value:h},ue({ourProps:{...p,as:l.Fragment,children:x.createElement(ce,{ref:s,...p,...f,beforeEnter:g,beforeLeave:P})},theirProps:{},defaultTag:l.Fragment,features:se,visible:c==="visible",name:"Transition"})))}function Me(e,t){let r=l.useContext(A)!==null,n=oe()!==null;return x.createElement(x.Fragment,null,!r&&n?x.createElement(J,{ref:t,...e}):x.createElement(ce,{ref:t,...e}))}let J=Y(Ae),ce=Y(Ie),je=Y(Me),_e=Object.assign(J,{Child:je,Root:J});function Ue({title:e,titleId:t,...r},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?l.createElement("title",{id:t},e):null,l.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",clipRule:"evenodd"}))}const ke=l.forwardRef(Ue),Qe=ke;function Be({title:e,titleId:t,...r},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?l.createElement("title",{id:t},e):null,l.createElement("path",{fillRule:"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",clipRule:"evenodd"}))}const ze=l.forwardRef(Be),We=ze;export{_e as $,oe as C,Ge as H,Ce as a,We as b,Te as c,C as d,Qe as e,Xe as i,Je as s,Ye as u,Ke as x};