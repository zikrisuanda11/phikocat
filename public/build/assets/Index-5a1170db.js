import{r as c,R as j,j as I,a as X,F as ge}from"./app-a381c4b7.js";import{o as p,S as ee,D as E,y as k,T as me,u as C,l as H,h as he,g as Oe,p as G,e as Re,c as Se,a as ye,R as Le,X as N,I as q,i as Ie,s as $e,b as g,r as Te,d as W,f as De}from"./use-flags-761c4fb4.js";import{H as we,c as Pe,d as V,i as ne,s as Ce,C as Fe,u as Ee,a as y,x as ke,b as Ne,$ as Ae,e as Me}from"./ChevronUpDownIcon-432aa38d.js";let te=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function re(e){var n,o;let r=(n=e.innerText)!=null?n:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return r;let l=!1;for(let s of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),l=!0;let t=l?(o=a.innerText)!=null?o:"":r;return te.test(t)&&(t=t.replace(te,"")),t}function Be(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let o=e.getAttribute("aria-labelledby");if(o){let r=o.split(" ").map(a=>{let l=document.getElementById(a);if(l){let t=l.getAttribute("aria-label");return typeof t=="string"?t.trim():re(l).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return re(e).trim()}function Qe(e){let n=c.useRef(""),o=c.useRef("");return p(()=>{let r=e.current;if(!r)return"";let a=r.innerText;if(n.current===a)return o.current;let l=Be(r).trim().toLowerCase();return n.current=a,o.current=l,l})}var Ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ue||{}),je=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(je||{}),ze=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ze||{}),He=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(He||{});function J(e,n=o=>o){let o=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=De(n(e.options.slice()),l=>l.dataRef.current.domRef.current),a=o?r.indexOf(o):null;return a===-1&&(a=null),{options:r,activeOptionIndex:a}}let Ge={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,r=e.options.findIndex(a=>o(a.dataRef.current.value));return r!==-1&&(n=r),{...e,listboxState:0,activeOptionIndex:n}},[2](e,n){var o;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=J(e),a=ke(n,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:a,activationTrigger:(o=n.trigger)!=null?o:1}},[3]:(e,n)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let o=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+o).concat(e.options.slice(0,e.activeOptionIndex+o)):e.options).find(t=>{var s;return!t.dataRef.current.disabled&&((s=t.dataRef.current.textValue)==null?void 0:s.startsWith(r))}),l=a?e.options.indexOf(a):-1;return l===-1||l===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:l,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,n)=>{let o={id:n.id,dataRef:n.dataRef},r=J(e,a=>[...a,o]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(n.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(o)),{...e,...r}},[6]:(e,n)=>{let o=J(e,r=>{let a=r.findIndex(l=>l.id===n.id);return a!==-1&&r.splice(a,1),r});return{...e,...o,activationTrigger:1}},[7]:(e,n)=>({...e,labelId:n.id})},Y=c.createContext(null);Y.displayName="ListboxActionsContext";function A(e){let n=c.useContext(Y);if(n===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,A),o}return n}let Z=c.createContext(null);Z.displayName="ListboxDataContext";function M(e){let n=c.useContext(Z);if(n===null){let o=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,M),o}return n}function Ve(e,n){return C(n.type,Ge,e,n)}let qe=c.Fragment;function Ke(e,n){let{value:o,defaultValue:r,form:a,name:l,onChange:t,by:s=(u,d)=>u===d,disabled:v=!1,horizontal:m=!1,multiple:h=!1,...L}=e;const w=m?"horizontal":"vertical";let T=k(n),[O=h?[]:void 0,$]=me(o,t,r),[x,i]=c.useReducer(Ve,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),f=c.useRef({static:!1,hold:!1}),P=c.useRef(null),B=c.useRef(null),K=c.useRef(null),R=p(typeof s=="string"?(u,d)=>{let S=s;return(u==null?void 0:u[S])===(d==null?void 0:d[S])}:s),D=c.useCallback(u=>C(b.mode,{[1]:()=>O.some(d=>R(d,u)),[0]:()=>R(O,u)}),[O]),b=c.useMemo(()=>({...x,value:O,disabled:v,mode:h?1:0,orientation:w,compare:R,isSelected:D,optionsPropsRef:f,labelRef:P,buttonRef:B,optionsRef:K}),[O,v,h,x]);H(()=>{x.dataRef.current=b},[b]),we([b.buttonRef,b.optionsRef],(u,d)=>{var S;i({type:1}),he(d,Oe.Loose)||(u.preventDefault(),(S=b.buttonRef.current)==null||S.focus())},b.listboxState===0);let oe=c.useMemo(()=>({open:b.listboxState===0,disabled:v,value:O}),[b,v,O]),ae=p(u=>{let d=b.options.find(S=>S.id===u);d&&F(d.dataRef.current.value)}),ie=p(()=>{if(b.activeOptionIndex!==null){let{dataRef:u,id:d}=b.options[b.activeOptionIndex];F(u.current.value),i({type:2,focus:y.Specific,id:d})}}),le=p(()=>i({type:0})),se=p(()=>i({type:1})),ue=p((u,d,S)=>u===y.Specific?i({type:2,focus:y.Specific,id:d,trigger:S}):i({type:2,focus:u,trigger:S})),ce=p((u,d)=>(i({type:5,id:u,dataRef:d}),()=>i({type:6,id:u}))),de=p(u=>(i({type:7,id:u}),()=>i({type:7,id:null}))),F=p(u=>C(b.mode,{[0](){return $==null?void 0:$(u)},[1](){let d=b.value.slice(),S=d.findIndex(U=>R(U,u));return S===-1?d.push(u):d.splice(S,1),$==null?void 0:$(d)}})),pe=p(u=>i({type:3,value:u})),fe=p(()=>i({type:4})),be=c.useMemo(()=>({onChange:F,registerOption:ce,registerLabel:de,goToOption:ue,closeListbox:se,openListbox:le,selectActiveOption:ie,selectOption:ae,search:pe,clearSearch:fe}),[]),ve={ref:T},Q=c.useRef(null),xe=G();return c.useEffect(()=>{Q.current&&r!==void 0&&xe.addEventListener(Q.current,"reset",()=>{F(r)})},[Q,F]),j.createElement(Y.Provider,{value:be},j.createElement(Z.Provider,{value:b},j.createElement(Pe,{value:C(b.listboxState,{[0]:V.Open,[1]:V.Closed})},l!=null&&O!=null&&Re({[l]:O}).map(([u,d],S)=>j.createElement(Se,{features:ye.Hidden,ref:S===0?U=>{var _;Q.current=(_=U==null?void 0:U.closest("form"))!=null?_:null}:void 0,...Le({key:u,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,name:u,value:d})})),N({ourProps:ve,theirProps:L,slot:oe,defaultTag:qe,name:"Listbox"}))))}let Xe="button";function Je(e,n){var o;let r=q(),{id:a=`headlessui-listbox-button-${r}`,...l}=e,t=M("Listbox.Button"),s=A("Listbox.Button"),v=k(t.buttonRef,n),m=G(),h=p(x=>{switch(x.key){case g.Space:case g.Enter:case g.ArrowDown:x.preventDefault(),s.openListbox(),m.nextFrame(()=>{t.value||s.goToOption(y.First)});break;case g.ArrowUp:x.preventDefault(),s.openListbox(),m.nextFrame(()=>{t.value||s.goToOption(y.Last)});break}}),L=p(x=>{switch(x.key){case g.Space:x.preventDefault();break}}),w=p(x=>{if(Te(x.currentTarget))return x.preventDefault();t.listboxState===0?(s.closeListbox(),m.nextFrame(()=>{var i;return(i=t.buttonRef.current)==null?void 0:i.focus({preventScroll:!0})})):(x.preventDefault(),s.openListbox())}),T=ne(()=>{if(t.labelId)return[t.labelId,a].join(" ")},[t.labelId,a]),O=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),$={ref:v,id:a,type:Ce(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(o=t.optionsRef.current)==null?void 0:o.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":T,disabled:t.disabled,onKeyDown:h,onKeyUp:L,onClick:w};return N({ourProps:$,theirProps:l,slot:O,defaultTag:Xe,name:"Listbox.Button"})}let We="label";function Ye(e,n){let o=q(),{id:r=`headlessui-listbox-label-${o}`,...a}=e,l=M("Listbox.Label"),t=A("Listbox.Label"),s=k(l.labelRef,n);H(()=>t.registerLabel(r),[r]);let v=p(()=>{var h;return(h=l.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})}),m=c.useMemo(()=>({open:l.listboxState===0,disabled:l.disabled}),[l]);return N({ourProps:{ref:s,id:r,onClick:v},theirProps:a,slot:m,defaultTag:We,name:"Listbox.Label"})}let Ze="ul",_e=ee.RenderStrategy|ee.Static;function et(e,n){var o;let r=q(),{id:a=`headlessui-listbox-options-${r}`,...l}=e,t=M("Listbox.Options"),s=A("Listbox.Options"),v=k(t.optionsRef,n),m=G(),h=G(),L=Fe(),w=(()=>L!==null?(L&V.Open)===V.Open:t.listboxState===0)();c.useEffect(()=>{var i;let f=t.optionsRef.current;f&&t.listboxState===0&&f!==((i=Ie(f))==null?void 0:i.activeElement)&&f.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let T=p(i=>{switch(h.dispose(),i.key){case g.Space:if(t.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),s.search(i.key);case g.Enter:if(i.preventDefault(),i.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:f}=t.options[t.activeOptionIndex];s.onChange(f.current.value)}t.mode===0&&(s.closeListbox(),W().nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}));break;case C(t.orientation,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return i.preventDefault(),i.stopPropagation(),s.goToOption(y.Next);case C(t.orientation,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return i.preventDefault(),i.stopPropagation(),s.goToOption(y.Previous);case g.Home:case g.PageUp:return i.preventDefault(),i.stopPropagation(),s.goToOption(y.First);case g.End:case g.PageDown:return i.preventDefault(),i.stopPropagation(),s.goToOption(y.Last);case g.Escape:return i.preventDefault(),i.stopPropagation(),s.closeListbox(),m.nextFrame(()=>{var f;return(f=t.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})});case g.Tab:i.preventDefault(),i.stopPropagation();break;default:i.key.length===1&&(s.search(i.key),h.setTimeout(()=>s.clearSearch(),350));break}}),O=ne(()=>{var i,f,P;return(P=(i=t.labelRef.current)==null?void 0:i.id)!=null?P:(f=t.buttonRef.current)==null?void 0:f.id},[t.labelRef.current,t.buttonRef.current]),$=c.useMemo(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(o=t.options[t.activeOptionIndex])==null?void 0:o.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":O,"aria-orientation":t.orientation,id:a,onKeyDown:T,role:"listbox",tabIndex:0,ref:v};return N({ourProps:x,theirProps:l,slot:$,defaultTag:Ze,features:_e,visible:w,name:"Listbox.Options"})}let tt="li";function rt(e,n){let o=q(),{id:r=`headlessui-listbox-option-${o}`,disabled:a=!1,value:l,...t}=e,s=M("Listbox.Option"),v=A("Listbox.Option"),m=s.activeOptionIndex!==null?s.options[s.activeOptionIndex].id===r:!1,h=s.isSelected(l),L=c.useRef(null),w=Qe(L),T=$e({disabled:a,value:l,domRef:L,get textValue(){return w()}}),O=k(n,L);H(()=>{if(s.listboxState!==0||!m||s.activationTrigger===0)return;let R=W();return R.requestAnimationFrame(()=>{var D,b;(b=(D=L.current)==null?void 0:D.scrollIntoView)==null||b.call(D,{block:"nearest"})}),R.dispose},[L,m,s.listboxState,s.activationTrigger,s.activeOptionIndex]),H(()=>v.registerOption(r,T),[T,r]);let $=p(R=>{if(a)return R.preventDefault();v.onChange(l),s.mode===0&&(v.closeListbox(),W().nextFrame(()=>{var D;return(D=s.buttonRef.current)==null?void 0:D.focus({preventScroll:!0})}))}),x=p(()=>{if(a)return v.goToOption(y.Nothing);v.goToOption(y.Specific,r)}),i=Ee(),f=p(R=>i.update(R)),P=p(R=>{i.wasMoved(R)&&(a||m||v.goToOption(y.Specific,r,0))}),B=p(R=>{i.wasMoved(R)&&(a||m&&v.goToOption(y.Nothing))}),K=c.useMemo(()=>({active:m,selected:h,disabled:a}),[m,h,a]);return N({ourProps:{id:r,ref:O,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":h,disabled:void 0,onClick:$,onFocus:x,onPointerEnter:f,onMouseEnter:f,onPointerMove:P,onMouseMove:P,onPointerLeave:B,onMouseLeave:B},theirProps:t,slot:K,defaultTag:tt,name:"Listbox.Option"})}let nt=E(Ke),ot=E(Je),at=E(Ye),it=E(et),lt=E(rt),z=Object.assign(nt,{Button:ot,Label:at,Options:it,Option:lt});function dt({datas:e,selected:n,setSelected:o}){return I("div",{className:"relative w-full mb-5 z-10",children:I(z,{value:n,onChange:o,children:X("div",{className:"relative mt-1",children:[X(z.Button,{className:"relative w-full cursor-default rounded-lg border-gray-200 border-2 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:ring2 focus:ring-blue-500 ",children:[I("span",{className:"block truncate",children:n.name}),I("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:I(Ne,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),I(Ae,{as:c.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:I(z.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:e.map((r,a)=>I(z.Option,{className:({active:l})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${l?"bg-teal-600 text-white":"text-gray-900"}`,value:r,children:({selected:l})=>X(ge,{children:[I("span",{className:`block truncate ${l?"font-medium":"font-normal"}`,children:r.name}),l?I("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600",children:I(Me,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},a))})})]})})})}export{dt as S};