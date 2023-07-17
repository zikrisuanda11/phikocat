import{j as a,b as c,i as L,_ as I,r as m,k as T,e as j,c as V}from"./app-a381c4b7.js";import{S as E}from"./Stack-89673c8c.js";import{c as H,B as W,b as O,e as q,u as G}from"./ButtonBase-7db9b5bc.js";import{b as g,a as A,g as z,d as F,c as N,e as D}from"./styled-d729a487.js";import{T as U}from"./Typography-ee46d8d6.js";const J=H(a("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),K=["slots","slotProps"],Q=g(W)(({theme:e})=>c({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":c({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":c({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:L(e.palette.grey[200],.12)}:{backgroundColor:L(e.palette.grey[600],.12)})})),X=g(J)({width:24,height:16});function Y(e){const{slots:o={},slotProps:r={}}=e,t=I(e,K),s=e;return a("li",{children:a(Q,c({focusRipple:!0},t,{ownerState:s,children:a(X,c({as:o.CollapsedIcon,ownerState:s},r.collapsedIcon))}))})}function Z(e){return z("MuiBreadcrumbs",e)}const ee=A("MuiBreadcrumbs",["root","ol","li","separator"]),oe=ee,re=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],se=e=>{const{classes:o}=e;return D({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Z,o)},te=g(U,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,o)=>[{[`& .${oe.li}`]:o.li},o.root]})({}),ne=g("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ae=g("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function le(e,o,r,t){return e.reduce((s,l,i)=>(i<e.length-1?s=s.concat(l,a(ae,{"aria-hidden":!0,className:o,ownerState:t,children:r},`separator-${i}`)):s.push(l),s),[])}const ce=m.forwardRef(function(o,r){const t=F({props:o,name:"MuiBreadcrumbs"}),{children:s,className:l,component:i="nav",slots:h={},slotProps:B={},expandText:k="Show path",itemsAfterCollapse:y=1,itemsBeforeCollapse:f=1,maxItems:d=8,separator:S="/"}=t,R=I(t,re),[v,M]=m.useState(!1),p=c({},t,{component:i,expanded:v,expandText:k,itemsAfterCollapse:y,itemsBeforeCollapse:f,maxItems:d,separator:S}),b=se(p),$=O({elementType:h.CollapsedIcon,externalSlotProps:B.collapsedIcon,ownerState:p}),w=m.useRef(null),P=n=>{const x=()=>{M(!0);const u=w.current.querySelector("a[href],button,[tabindex]");u&&u.focus()};return f+y>=n.length?n:[...n.slice(0,f),a(Y,{"aria-label":k,slots:{CollapsedIcon:h.CollapsedIcon},slotProps:{collapsedIcon:$},onClick:x},"ellipsis"),...n.slice(n.length-y,n.length)]},C=m.Children.toArray(s).filter(n=>m.isValidElement(n)).map((n,x)=>a("li",{className:b.li,children:n},`child-${x}`));return a(te,c({ref:r,component:i,color:"text.secondary",className:N(b.root,l),ownerState:p},R,{children:a(ne,{className:b.ol,ref:w,ownerState:p,children:le(v||d&&C.length<=d?C:P(C),b.separator,S,p)})}))}),ie=ce;function ue(e){return z("MuiLink",e)}const de=A("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),pe=de,_={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},me=e=>_[e]||e,fe=({theme:e,ownerState:o})=>{const r=me(o.color),t=T(e,`palette.${r}`,!1)||o.color,s=T(e,`palette.${r}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:j(t,.4)},be=fe,ge=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],he=e=>{const{classes:o,component:r,focusVisible:t,underline:s}=e,l={root:["root",`underline${V(s)}`,r==="button"&&"button",t&&"focusVisible"]};return D(l,ue,o)},ye=g(U,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`underline${V(r.underline)}`],r.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>c({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&c({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:be({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pe.focusVisible}`]:{outline:"auto"}})),Ce=m.forwardRef(function(o,r){const t=F({props:o,name:"MuiLink"}),{className:s,color:l="primary",component:i="a",onBlur:h,onFocus:B,TypographyClasses:k,underline:y="always",variant:f="inherit",sx:d}=t,S=I(t,ge),{isFocusVisibleRef:R,onBlur:v,onFocus:M,ref:p}=q(),[b,$]=m.useState(!1),w=G(r,p),P=u=>{v(u),R.current===!1&&$(!1),h&&h(u)},C=u=>{M(u),R.current===!0&&$(!0),B&&B(u)},n=c({},t,{color:l,component:i,focusVisible:b,underline:y,variant:f}),x=he(n);return a(ye,c({color:l,className:N(x.root,s),classes:k,component:i,onBlur:P,onFocus:C,ref:w,ownerState:n,variant:f,sx:[...Object.keys(_).includes(l)?[]:[{color:l}],...Array.isArray(d)?d:[d]]},S))}),xe=Ce,Be=({breadcrumbs:e})=>a(E,{spacing:2,children:a(ie,{separator:"›","aria-label":"breadcrumb",fontSize:"small",children:e.map(o=>a(xe,{underline:"none",color:"inherit",href:o.href,children:o.name},o.key))})}),we=Be;export{we as B};