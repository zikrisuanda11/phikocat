import{r as p,R as oe,j as h,a as M,F as ve}from"./app-a381c4b7.js";import{H as xe,c as ge,d as ne,i as ie,s as Re,C as Oe,u as he,a as I,x as Ce,b as Ie,$ as Se,e as Te}from"./ChevronUpDownIcon-432aa38d.js";import{o as R,S as de,D as j,T as we,u as V,l as L,p as le,e as ye,c as Pe,a as Ee,R as Ne,X as U,I as z,y as J,s as Fe,b as w,r as De,d as pe,f as ke}from"./use-flags-761c4fb4.js";import{F as Ae}from"./use-tree-walker-1218e650.js";import{B as Me,a as Le}from"./index.esm-b21b6290.js";function be(e,n){let i=p.useRef([]),t=R(e);p.useEffect(()=>{let s=[...i.current];for(let[u,o]of n.entries())if(i.current[u]!==o){let m=t(n,s);return i.current=n,m}},[t,...n])}function $e(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function _e(){return/Android/gi.test(window.navigator.userAgent)}function Be(){return $e()||_e()}var Ve=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ve||{}),je=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(je||{}),Ue=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ue||{}),Ke=(e=>(e[e.OpenCombobox=0]="OpenCombobox",e[e.CloseCombobox=1]="CloseCombobox",e[e.GoToOption=2]="GoToOption",e[e.RegisterOption=3]="RegisterOption",e[e.UnregisterOption=4]="UnregisterOption",e[e.RegisterLabel=5]="RegisterLabel",e))(Ke||{});function ae(e,n=i=>i){let i=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=ke(n(e.options.slice()),u=>u.dataRef.current.domRef.current),s=i?t.indexOf(i):null;return s===-1&&(s=null),{options:t,activeOptionIndex:s}}let Xe={[1](e){var n;return(n=e.dataRef.current)!=null&&n.disabled||e.comboboxState===1?e:{...e,activeOptionIndex:null,comboboxState:1}},[0](e){var n;if((n=e.dataRef.current)!=null&&n.disabled||e.comboboxState===0)return e;let i=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,s=e.options.findIndex(u=>t(u.dataRef.current.value));s!==-1&&(i=s)}return{...e,comboboxState:0,activeOptionIndex:i}},[2](e,n){var i,t,s,u;if((i=e.dataRef.current)!=null&&i.disabled||(t=e.dataRef.current)!=null&&t.optionsRef.current&&!((s=e.dataRef.current)!=null&&s.optionsPropsRef.current.static)&&e.comboboxState===1)return e;let o=ae(e);if(o.activeOptionIndex===null){let v=o.options.findIndex(c=>!c.dataRef.current.disabled);v!==-1&&(o.activeOptionIndex=v)}let m=Ce(n,{resolveItems:()=>o.options,resolveActiveIndex:()=>o.activeOptionIndex,resolveId:v=>v.id,resolveDisabled:v=>v.dataRef.current.disabled});return{...e,...o,activeOptionIndex:m,activationTrigger:(u=n.trigger)!=null?u:1}},[3]:(e,n)=>{var i,t;let s={id:n.id,dataRef:n.dataRef},u=ae(e,m=>[...m,s]);e.activeOptionIndex===null&&(i=e.dataRef.current)!=null&&i.isSelected(n.dataRef.current.value)&&(u.activeOptionIndex=u.options.indexOf(s));let o={...e,...u,activationTrigger:1};return(t=e.dataRef.current)!=null&&t.__demoMode&&e.dataRef.current.value===void 0&&(o.activeOptionIndex=0),o},[4]:(e,n)=>{let i=ae(e,t=>{let s=t.findIndex(u=>u.id===n.id);return s!==-1&&t.splice(s,1),t});return{...e,...i,activationTrigger:1}},[5]:(e,n)=>({...e,labelId:n.id})},ue=p.createContext(null);ue.displayName="ComboboxActionsContext";function Y(e){let n=p.useContext(ue);if(n===null){let i=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Y),i}return n}let se=p.createContext(null);se.displayName="ComboboxDataContext";function K(e){let n=p.useContext(se);if(n===null){let i=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,K),i}return n}function qe(e,n){return V(n.type,Xe,e,n)}let Ge=p.Fragment;function He(e,n){let{value:i,defaultValue:t,onChange:s,form:u,name:o,by:m=(f,g)=>f===g,disabled:v=!1,__demoMode:c=!1,nullable:O=!1,multiple:C=!1,...r}=e,[a=C?[]:void 0,T]=we(i,s,t),[d,x]=p.useReducer(qe,{dataRef:p.createRef(),comboboxState:c?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),E=p.useRef(!1),F=p.useRef({static:!1,hold:!1}),D=p.useRef(null),k=p.useRef(null),$=p.useRef(null),_=p.useRef(null),N=R(typeof m=="string"?(f,g)=>{let S=m;return(f==null?void 0:f[S])===(g==null?void 0:g[S])}:m),X=p.useCallback(f=>V(l.mode,{[1]:()=>a.some(g=>N(g,f)),[0]:()=>N(a,f)}),[a]),l=p.useMemo(()=>({...d,optionsPropsRef:F,labelRef:D,inputRef:k,buttonRef:$,optionsRef:_,value:a,defaultValue:t,disabled:v,mode:C?1:0,get activeOptionIndex(){if(E.current&&d.activeOptionIndex===null&&d.options.length>0){let f=d.options.findIndex(g=>!g.dataRef.current.disabled);if(f!==-1)return f}return d.activeOptionIndex},compare:N,isSelected:X,nullable:O,__demoMode:c}),[a,t,v,C,O,c,d]),y=p.useRef(l.activeOptionIndex!==null?l.options[l.activeOptionIndex]:null);p.useEffect(()=>{let f=l.activeOptionIndex!==null?l.options[l.activeOptionIndex]:null;y.current!==f&&(y.current=f)}),L(()=>{d.dataRef.current=l},[l]),xe([l.buttonRef,l.inputRef,l.optionsRef],()=>re.closeCombobox(),l.comboboxState===0);let B=p.useMemo(()=>({open:l.comboboxState===0,disabled:v,activeIndex:l.activeOptionIndex,activeOption:l.activeOptionIndex===null?null:l.options[l.activeOptionIndex].dataRef.current.value,value:a}),[l,v,a]),b=R(f=>{let g=l.options.find(S=>S.id===f);g&&G(g.dataRef.current.value)}),A=R(()=>{if(l.activeOptionIndex!==null){let{dataRef:f,id:g}=l.options[l.activeOptionIndex];G(f.current.value),re.goToOption(I.Specific,g)}}),P=R(()=>{x({type:0}),E.current=!0}),q=R(()=>{x({type:1}),E.current=!1}),Z=R((f,g,S)=>(E.current=!1,f===I.Specific?x({type:2,focus:I.Specific,id:g,trigger:S}):x({type:2,focus:f,trigger:S}))),Q=R((f,g)=>(x({type:3,id:f,dataRef:g}),()=>{var S;((S=y.current)==null?void 0:S.id)===f&&(E.current=!0),x({type:4,id:f})})),W=R(f=>(x({type:5,id:f}),()=>x({type:5,id:null}))),G=R(f=>V(l.mode,{[0](){return T==null?void 0:T(f)},[1](){let g=l.value.slice(),S=g.findIndex(te=>N(te,f));return S===-1?g.push(f):g.splice(S,1),T==null?void 0:T(g)}})),re=p.useMemo(()=>({onChange:G,registerOption:Q,registerLabel:W,goToOption:Z,closeCombobox:q,openCombobox:P,selectActiveOption:A,selectOption:b}),[]),fe=n===null?{}:{ref:n},ee=p.useRef(null),me=le();return p.useEffect(()=>{ee.current&&t!==void 0&&me.addEventListener(ee.current,"reset",()=>{G(t)})},[ee,G]),oe.createElement(ue.Provider,{value:re},oe.createElement(se.Provider,{value:l},oe.createElement(ge,{value:V(l.comboboxState,{[0]:ne.Open,[1]:ne.Closed})},o!=null&&a!=null&&ye({[o]:a}).map(([f,g],S)=>oe.createElement(Pe,{features:Ee.Hidden,ref:S===0?te=>{var ce;ee.current=(ce=te==null?void 0:te.closest("form"))!=null?ce:null}:void 0,...Ne({key:f,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:u,name:f,value:g})})),U({ourProps:fe,theirProps:r,slot:B,defaultTag:Ge,name:"Combobox"}))))}let ze="input";function Je(e,n){var i,t,s,u;let o=z(),{id:m=`headlessui-combobox-input-${o}`,onChange:v,displayValue:c,type:O="text",...C}=e,r=K("Combobox.Input"),a=Y("Combobox.Input"),T=J(r.inputRef,n),d=p.useRef(!1),x=le(),E=function(){var b;return typeof c=="function"&&r.value!==void 0?(b=c(r.value))!=null?b:"":typeof r.value=="string"?r.value:""}();be(([b,A],[P,q])=>{d.current||r.inputRef.current&&(q===0&&A===1||b!==P)&&(r.inputRef.current.value=b)},[E,r.comboboxState]),be(([b],[A])=>{if(b===0&&A===1){let P=r.inputRef.current;if(!P)return;let q=P.value,{selectionStart:Z,selectionEnd:Q,selectionDirection:W}=P;P.value="",P.value=q,W!==null?P.setSelectionRange(Z,Q,W):P.setSelectionRange(Z,Q)}},[r.comboboxState]);let F=p.useRef(!1),D=p.useRef(null),k=R(()=>{F.current=!0}),$=R(()=>{x.nextFrame(()=>{F.current=!1,D.current&&(a.openCombobox(),v==null||v(D.current),D.current=null)})}),_=R(b=>{switch(d.current=!0,b.key){case w.Backspace:case w.Delete:if(r.mode!==0||!r.nullable)return;let A=b.currentTarget;x.requestAnimationFrame(()=>{A.value===""&&(a.onChange(null),r.optionsRef.current&&(r.optionsRef.current.scrollTop=0),a.goToOption(I.Nothing))});break;case w.Enter:if(d.current=!1,r.comboboxState!==0||F.current)return;if(b.preventDefault(),b.stopPropagation(),r.activeOptionIndex===null){a.closeCombobox();return}a.selectActiveOption(),r.mode===0&&a.closeCombobox();break;case w.ArrowDown:return d.current=!1,b.preventDefault(),b.stopPropagation(),V(r.comboboxState,{[0]:()=>{a.goToOption(I.Next)},[1]:()=>{a.openCombobox()}});case w.ArrowUp:return d.current=!1,b.preventDefault(),b.stopPropagation(),V(r.comboboxState,{[0]:()=>{a.goToOption(I.Previous)},[1]:()=>{a.openCombobox(),x.nextFrame(()=>{r.value||a.goToOption(I.Last)})}});case w.Home:if(b.shiftKey)break;return d.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.First);case w.PageUp:return d.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.First);case w.End:if(b.shiftKey)break;return d.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.Last);case w.PageDown:return d.current=!1,b.preventDefault(),b.stopPropagation(),a.goToOption(I.Last);case w.Escape:return d.current=!1,r.comboboxState!==0?void 0:(b.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&b.stopPropagation(),a.closeCombobox());case w.Tab:if(d.current=!1,r.comboboxState!==0)return;r.mode===0&&a.selectActiveOption(),a.closeCombobox();break}}),N=R(b=>{if(F.current){D.current=b;return}a.openCombobox(),v==null||v(b)}),X=R(()=>{d.current=!1}),l=ie(()=>{if(r.labelId)return[r.labelId].join(" ")},[r.labelId]),y=p.useMemo(()=>({open:r.comboboxState===0,disabled:r.disabled}),[r]),B={ref:T,id:m,role:"combobox",type:O,"aria-controls":(i=r.optionsRef.current)==null?void 0:i.id,"aria-expanded":r.disabled?void 0:r.comboboxState===0,"aria-activedescendant":r.activeOptionIndex===null||(t=r.options[r.activeOptionIndex])==null?void 0:t.id,"aria-labelledby":l,"aria-autocomplete":"list",defaultValue:(u=(s=e.defaultValue)!=null?s:r.defaultValue!==void 0?c==null?void 0:c(r.defaultValue):null)!=null?u:r.defaultValue,disabled:r.disabled,onCompositionStart:k,onCompositionEnd:$,onKeyDown:_,onChange:N,onBlur:X};return U({ourProps:B,theirProps:C,slot:y,defaultTag:ze,name:"Combobox.Input"})}let Ye="button";function Ze(e,n){var i;let t=K("Combobox.Button"),s=Y("Combobox.Button"),u=J(t.buttonRef,n),o=z(),{id:m=`headlessui-combobox-button-${o}`,...v}=e,c=le(),O=R(d=>{switch(d.key){case w.ArrowDown:return d.preventDefault(),d.stopPropagation(),t.comboboxState===1&&s.openCombobox(),c.nextFrame(()=>{var x;return(x=t.inputRef.current)==null?void 0:x.focus({preventScroll:!0})});case w.ArrowUp:return d.preventDefault(),d.stopPropagation(),t.comboboxState===1&&(s.openCombobox(),c.nextFrame(()=>{t.value||s.goToOption(I.Last)})),c.nextFrame(()=>{var x;return(x=t.inputRef.current)==null?void 0:x.focus({preventScroll:!0})});case w.Escape:return t.comboboxState!==0?void 0:(d.preventDefault(),t.optionsRef.current&&!t.optionsPropsRef.current.static&&d.stopPropagation(),s.closeCombobox(),c.nextFrame(()=>{var x;return(x=t.inputRef.current)==null?void 0:x.focus({preventScroll:!0})}));default:return}}),C=R(d=>{if(De(d.currentTarget))return d.preventDefault();t.comboboxState===0?s.closeCombobox():(d.preventDefault(),s.openCombobox()),c.nextFrame(()=>{var x;return(x=t.inputRef.current)==null?void 0:x.focus({preventScroll:!0})})}),r=ie(()=>{if(t.labelId)return[t.labelId,m].join(" ")},[t.labelId,m]),a=p.useMemo(()=>({open:t.comboboxState===0,disabled:t.disabled,value:t.value}),[t]),T={ref:u,id:m,type:Re(e,t.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(i=t.optionsRef.current)==null?void 0:i.id,"aria-expanded":t.disabled?void 0:t.comboboxState===0,"aria-labelledby":r,disabled:t.disabled,onClick:C,onKeyDown:O};return U({ourProps:T,theirProps:v,slot:a,defaultTag:Ye,name:"Combobox.Button"})}let Qe="label";function We(e,n){let i=z(),{id:t=`headlessui-combobox-label-${i}`,...s}=e,u=K("Combobox.Label"),o=Y("Combobox.Label"),m=J(u.labelRef,n);L(()=>o.registerLabel(t),[t]);let v=R(()=>{var O;return(O=u.inputRef.current)==null?void 0:O.focus({preventScroll:!0})}),c=p.useMemo(()=>({open:u.comboboxState===0,disabled:u.disabled}),[u]);return U({ourProps:{ref:m,id:t,onClick:v},theirProps:s,slot:c,defaultTag:Qe,name:"Combobox.Label"})}let et="ul",tt=de.RenderStrategy|de.Static;function ot(e,n){let i=z(),{id:t=`headlessui-combobox-options-${i}`,hold:s=!1,...u}=e,o=K("Combobox.Options"),m=J(o.optionsRef,n),v=Oe(),c=(()=>v!==null?(v&ne.Open)===ne.Open:o.comboboxState===0)();L(()=>{var a;o.optionsPropsRef.current.static=(a=e.static)!=null?a:!1},[o.optionsPropsRef,e.static]),L(()=>{o.optionsPropsRef.current.hold=s},[o.optionsPropsRef,s]),Ae({container:o.optionsRef.current,enabled:o.comboboxState===0,accept(a){return a.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let O=ie(()=>{var a,T;return(T=o.labelId)!=null?T:(a=o.buttonRef.current)==null?void 0:a.id},[o.labelId,o.buttonRef.current]),C=p.useMemo(()=>({open:o.comboboxState===0}),[o]),r={"aria-labelledby":O,role:"listbox","aria-multiselectable":o.mode===1?!0:void 0,id:t,ref:m};return U({ourProps:r,theirProps:u,slot:C,defaultTag:et,features:tt,visible:c,name:"Combobox.Options"})}let nt="li";function rt(e,n){var i,t;let s=z(),{id:u=`headlessui-combobox-option-${s}`,disabled:o=!1,value:m,...v}=e,c=K("Combobox.Option"),O=Y("Combobox.Option"),C=c.activeOptionIndex!==null?c.options[c.activeOptionIndex].id===u:!1,r=c.isSelected(m),a=p.useRef(null),T=Fe({disabled:o,value:m,domRef:a,textValue:(t=(i=a.current)==null?void 0:i.textContent)==null?void 0:t.toLowerCase()}),d=J(n,a),x=R(()=>O.selectOption(u));L(()=>O.registerOption(u,T),[T,u]);let E=p.useRef(!c.__demoMode);L(()=>{if(!c.__demoMode)return;let l=pe();return l.requestAnimationFrame(()=>{E.current=!0}),l.dispose},[]),L(()=>{if(c.comboboxState!==0||!C||!E.current||c.activationTrigger===0)return;let l=pe();return l.requestAnimationFrame(()=>{var y,B;(B=(y=a.current)==null?void 0:y.scrollIntoView)==null||B.call(y,{block:"nearest"})}),l.dispose},[a,C,c.comboboxState,c.activationTrigger,c.activeOptionIndex]);let F=R(l=>{if(o)return l.preventDefault();x(),c.mode===0&&O.closeCombobox(),Be()||requestAnimationFrame(()=>{var y;return(y=c.inputRef.current)==null?void 0:y.focus()})}),D=R(()=>{if(o)return O.goToOption(I.Nothing);O.goToOption(I.Specific,u)}),k=he(),$=R(l=>k.update(l)),_=R(l=>{k.wasMoved(l)&&(o||C||O.goToOption(I.Specific,u,0))}),N=R(l=>{k.wasMoved(l)&&(o||C&&(c.optionsPropsRef.current.hold||O.goToOption(I.Nothing)))}),X=p.useMemo(()=>({active:C,selected:r,disabled:o}),[C,r,o]);return U({ourProps:{id:u,ref:d,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":r,disabled:void 0,onClick:F,onFocus:D,onPointerEnter:$,onMouseEnter:$,onPointerMove:_,onMouseMove:_,onPointerLeave:N,onMouseLeave:N},theirProps:v,slot:X,defaultTag:nt,name:"Combobox.Option"})}let at=j(He),it=j(Ze),lt=j(Je),ut=j(We),st=j(ot),ct=j(rt),H=Object.assign(at,{Input:lt,Button:it,Label:ut,Options:st,Option:ct});function vt({items:e,selected:n,setSelected:i,query:t,setQuery:s}){const u=t===""?e:e.filter(o=>o.name.toLowerCase().replace(/\s+/g,"").includes(t.toLowerCase().replace(/\s+/g,"")));return h("div",{className:"w-full top-16",children:h(H,{value:n,onChange:i,children:M("div",{className:"relative mt-1",children:[M("div",{className:"w-full shadow-sm rounded-md bg-white text-left focus:ring2 focus:ring-blue-500",children:[h(H.Input,{className:"w-full rounded-md border-1 border-gray-200",displayValue:o=>o.name,onChange:o=>s(o.target.value)}),h(H.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2",children:h(Ie,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),h(Se,{as:p.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>s(""),children:h(H.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:u.length===0&&t!==""?h("div",{className:"relative cursor-default select-none py-2 px-4 text-gray-700",children:"Nothing found."}):u.map(o=>h(H.Option,{className:({active:m})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${m?"bg-teal-600 text-white":"text-gray-900"}`,value:o,children:({selected:m,active:v})=>M(ve,{children:[h("span",{className:`block truncate ${m?"font-medium":"font-normal"}`,children:o.name}),m?h("span",{className:`absolute inset-y-0 left-0 flex items-center pl-3 ${v?"text-white":"text-teal-600"}`,children:h(Te,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},o.id))})})]})})})}function xt({id:e,value:n,onChange:i,customClass:t}){return M("div",{className:`w-full ${t}`,children:[h("input",{onChange:i,id:e,type:"file",className:"hidden appearance-none"}),M("label",{htmlFor:e,className:"cursor-pointer border py-2 px-4 rounded flex gap-2",children:[h(Me,{size:22}),"Upload File",n&&M("span",{className:"text-gray-500",children:[" ",n.name]})]})]})}function gt({message:e,customClass:n}){return h("div",{className:`rounded-md bg-red-50 p-2.5 my-1 full-width ${n}`,children:M("div",{className:"flex",children:[h("div",{className:"flex-shrink-0",children:h(Le,{className:"h-5 w-5 text-red-400","aria-hidden":"true"})}),h("div",{className:"ml-3",children:h("h3",{className:"text-xs font-medium text-red-800 pt-0.5",children:e})})]})})}export{gt as A,xt as F,vt as I};