(self.webpackChunk=self.webpackChunk||[]).push([[7887],{58638:function(le,X,r){"use strict";r.d(X,{Z:function(){return O}});var o=r(87462),C=r(67294),x={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z"}}]},name:"export",theme:"outlined"},z=x,N=r(84089),A=function(y,i){return C.createElement(N.Z,(0,o.Z)({},y,{ref:i,icon:z}))},D=C.forwardRef(A),O=D},87784:function(le,X,r){"use strict";r.d(X,{Z:function(){return O}});var o=r(87462),C=r(67294),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},z=x,N=r(84089),A=function(y,i){return C.createElement(N.Z,(0,o.Z)({},y,{ref:i,icon:z}))},D=C.forwardRef(A),O=D},5966:function(le,X,r){"use strict";var o=r(97685),C=r(1413),x=r(45987),z=r(21770),N=r(72723),A=r(55241),D=r(97435),O=r(67294),F=r(73552),y=r(85893),i=["fieldProps","proFieldProps"],d=["fieldProps","proFieldProps"],E="text",u=function(b){var p=b.fieldProps,M=b.proFieldProps,Z=(0,x.Z)(b,i);return(0,y.jsx)(F.Z,(0,C.Z)({valueType:E,fieldProps:p,filedConfig:{valueType:E},proFieldProps:M},Z))},S=function(b){var p=(0,z.Z)(b.open||!1,{value:b.open,onChange:b.onOpenChange}),M=(0,o.Z)(p,2),Z=M[0],ce=M[1];return(0,y.jsx)(N.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(q){var W,re=q.getFieldValue(b.name||[]);return(0,y.jsx)(A.Z,(0,C.Z)((0,C.Z)({getPopupContainer:function(j){return j&&j.parentNode?j.parentNode:j},onOpenChange:function(j){return ce(j)},content:(0,y.jsxs)("div",{style:{padding:"4px 0"},children:[(W=b.statusRender)===null||W===void 0?void 0:W.call(b,re),b.strengthText?(0,y.jsx)("div",{style:{marginTop:10},children:(0,y.jsx)("span",{children:b.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},b.popoverProps),{},{open:Z,children:b.children}))}})},Y=function(b){var p=b.fieldProps,M=b.proFieldProps,Z=(0,x.Z)(b,d),ce=(0,O.useState)(!1),J=(0,o.Z)(ce,2),q=J[0],W=J[1];return p!=null&&p.statusRender&&Z.name?(0,y.jsx)(S,{name:Z.name,statusRender:p==null?void 0:p.statusRender,popoverProps:p==null?void 0:p.popoverProps,strengthText:p==null?void 0:p.strengthText,open:q,onOpenChange:W,children:(0,y.jsx)("div",{children:(0,y.jsx)(F.Z,(0,C.Z)({valueType:"password",fieldProps:(0,C.Z)((0,C.Z)({},(0,D.Z)(p,["statusRender","popoverProps","strengthText"])),{},{onBlur:function($){var j;p==null||(j=p.onBlur)===null||j===void 0||j.call(p,$),W(!1)},onClick:function($){var j;p==null||(j=p.onClick)===null||j===void 0||j.call(p,$),W(!0)}}),proFieldProps:M,filedConfig:{valueType:E}},Z))})}):(0,y.jsx)(F.Z,(0,C.Z)({valueType:"password",fieldProps:p,proFieldProps:M,filedConfig:{valueType:E}},Z))},H=u;H.Password=Y,H.displayName="ProFormComponent",X.Z=H},26412:function(le,X,r){"use strict";r.d(X,{Z:function(){return I}});var o=r(67294),C=r(93967),x=r.n(C),z=r(74443),N=r(53124),A=r(98675),D=r(25378),F={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},i=o.createContext({}),d=r(50344),E=function(e,n){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(s[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(s[l[a]]=e[l[a]]);return s};const u=e=>(0,d.Z)(e).map(n=>Object.assign(Object.assign({},n==null?void 0:n.props),{key:n.key}));function S(e,n,s){const l=o.useMemo(()=>n||u(s),[n,s]);return o.useMemo(()=>l.map(m=>{var{span:g}=m,w=E(m,["span"]);return Object.assign(Object.assign({},w),{span:typeof g=="number"?g:(0,z.m9)(e,g)})}),[l,e])}function Y(e,n,s){let l=e,a=!1;return(s===void 0||s>n)&&(l=Object.assign(Object.assign({},e),{span:n}),a=s!==void 0),[l,a]}function H(e,n){const s=[];let l=[],a=n,m=!1;return e.filter(g=>g).forEach((g,w)=>{const T=g==null?void 0:g.span,B=T||1;if(w===e.length-1){const[P,K]=Y(g,a,T);m=m||K,l.push(P),s.push(l);return}if(B<a)a-=B,l.push(g);else{const[P,K]=Y(g,a,B);m=m||K,l.push(P),s.push(l),a=n,l=[]}}),[s,m]}var b=(e,n)=>{const[s,l]=(0,o.useMemo)(()=>H(n,e),[n,e]);return s},M=e=>{let{children:n}=e;return n};function Z(e){return e!=null}var J=e=>{const{itemPrefixCls:n,component:s,span:l,className:a,style:m,labelStyle:g,contentStyle:w,bordered:T,label:B,content:P,colon:K,type:_}=e,V=s;return T?o.createElement(V,{className:x()({[`${n}-item-label`]:_==="label",[`${n}-item-content`]:_==="content"},a),style:m,colSpan:l},Z(B)&&o.createElement("span",{style:g},B),Z(P)&&o.createElement("span",{style:w},P)):o.createElement(V,{className:x()(`${n}-item`,a),style:m,colSpan:l},o.createElement("div",{className:`${n}-item-container`},(B||B===0)&&o.createElement("span",{className:x()(`${n}-item-label`,{[`${n}-item-no-colon`]:!K}),style:g},B),(P||P===0)&&o.createElement("span",{className:x()(`${n}-item-content`),style:w},P)))};function q(e,n,s){let{colon:l,prefixCls:a,bordered:m}=n,{component:g,type:w,showLabel:T,showContent:B,labelStyle:P,contentStyle:K}=s;return e.map((_,V)=>{let{label:k,children:de,prefixCls:R=a,className:ae,style:se,labelStyle:G,contentStyle:L,span:ee=1,key:ie}=_;return typeof g=="string"?o.createElement(J,{key:`${w}-${ie||V}`,className:ae,style:se,labelStyle:Object.assign(Object.assign({},P),G),contentStyle:Object.assign(Object.assign({},K),L),span:ee,colon:l,component:g,itemPrefixCls:R,bordered:m,label:T?k:null,content:B?de:null,type:w}):[o.createElement(J,{key:`label-${ie||V}`,className:ae,style:Object.assign(Object.assign(Object.assign({},P),se),G),span:1,colon:l,component:g[0],itemPrefixCls:R,bordered:m,label:k,type:"label"}),o.createElement(J,{key:`content-${ie||V}`,className:ae,style:Object.assign(Object.assign(Object.assign({},K),se),L),span:ee*2-1,component:g[1],itemPrefixCls:R,bordered:m,content:de,type:"content"})]})}var re=e=>{const n=o.useContext(i),{prefixCls:s,vertical:l,row:a,index:m,bordered:g}=e;return l?o.createElement(o.Fragment,null,o.createElement("tr",{key:`label-${m}`,className:`${s}-row`},q(a,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),o.createElement("tr",{key:`content-${m}`,className:`${s}-row`},q(a,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):o.createElement("tr",{key:m,className:`${s}-row`},q(a,e,Object.assign({component:g?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},$=r(11568),j=r(14747),fe=r(83559),ge=r(83262);const t=e=>{const{componentCls:n,labelBg:s}=e;return{[`&${n}-bordered`]:{[`> ${n}-view`]:{border:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto"},[`${n}-row`]:{borderBottom:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,$.bf)(e.padding)} ${(0,$.bf)(e.paddingLG)}`,borderInlineEnd:`${(0,$.bf)(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${n}-item-label`]:{color:e.colorTextSecondary,backgroundColor:s,"&::after":{display:"none"}}}},[`&${n}-middle`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,$.bf)(e.paddingSM)} ${(0,$.bf)(e.paddingLG)}`}}},[`&${n}-small`]:{[`${n}-row`]:{[`> ${n}-item-label, > ${n}-item-content`]:{padding:`${(0,$.bf)(e.paddingXS)} ${(0,$.bf)(e.padding)}`}}}}}},v=e=>{const{componentCls:n,extraColor:s,itemPaddingBottom:l,itemPaddingEnd:a,colonMarginRight:m,colonMarginLeft:g,titleMarginBottom:w}=e;return{[n]:Object.assign(Object.assign(Object.assign({},(0,j.Wf)(e)),t(e)),{"&-rtl":{direction:"rtl"},[`${n}-header`]:{display:"flex",alignItems:"center",marginBottom:w},[`${n}-title`]:Object.assign(Object.assign({},j.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${n}-extra`]:{marginInlineStart:"auto",color:s,fontSize:e.fontSize},[`${n}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}},[`${n}-row`]:{"> th, > td":{paddingBottom:l,paddingInlineEnd:a},"> th:last-child, > td:last-child":{paddingInlineEnd:0},"&:last-child":{borderBottom:"none","> th, > td":{paddingBottom:0}}},[`${n}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${(0,$.bf)(g)} ${(0,$.bf)(m)}`},[`&${n}-item-no-colon::after`]:{content:'""'}},[`${n}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${n}-item-content`]:{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${n}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${n}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${n}-item-content`]:{display:"inline-flex",alignItems:"baseline",minWidth:"1em"}}},"&-middle":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${n}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},h=e=>({labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,itemPaddingEnd:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText});var c=(0,fe.I$)("Descriptions",e=>{const n=(0,ge.IX)(e,{});return v(n)},h),f=function(e,n){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(s[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(s[l[a]]=e[l[a]]);return s};const U=e=>{const{prefixCls:n,title:s,extra:l,column:a,colon:m=!0,bordered:g,layout:w,children:T,className:B,rootClassName:P,style:K,size:_,labelStyle:V,contentStyle:k,items:de}=e,R=f(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:ae,direction:se,descriptions:G}=o.useContext(N.E_),L=ae("descriptions",n),ee=(0,D.Z)(),ie=o.useMemo(()=>{var oe;return typeof a=="number"?a:(oe=(0,z.m9)(ee,Object.assign(Object.assign({},F),a)))!==null&&oe!==void 0?oe:3},[ee,a]),ve=S(ee,de,T),ue=(0,A.Z)(_),be=b(ie,ve),[me,ne,ye]=c(L),te=o.useMemo(()=>({labelStyle:V,contentStyle:k}),[V,k]);return me(o.createElement(i.Provider,{value:te},o.createElement("div",Object.assign({className:x()(L,G==null?void 0:G.className,{[`${L}-${ue}`]:ue&&ue!=="default",[`${L}-bordered`]:!!g,[`${L}-rtl`]:se==="rtl"},B,P,ne,ye),style:Object.assign(Object.assign({},G==null?void 0:G.style),K)},R),(s||l)&&o.createElement("div",{className:`${L}-header`},s&&o.createElement("div",{className:`${L}-title`},s),l&&o.createElement("div",{className:`${L}-extra`},l)),o.createElement("div",{className:`${L}-view`},o.createElement("table",null,o.createElement("tbody",null,be.map((oe,pe)=>o.createElement(re,{key:pe,index:pe,colon:m,prefixCls:L,vertical:w==="vertical",bordered:g,row:oe}))))))))};U.Item=M;var I=U},66309:function(le,X,r){"use strict";r.d(X,{Z:function(){return ge}});var o=r(67294),C=r(93967),x=r.n(C),z=r(98423),N=r(98787),A=r(69760),D=r(96159),O=r(45353),F=r(53124),y=r(11568),i=r(10274),d=r(14747),E=r(83262),u=r(83559);const S=t=>{const{paddingXXS:v,lineWidth:h,tagPaddingHorizontal:c,componentCls:f,calc:U}=t,I=U(c).sub(h).equal(),e=U(v).sub(h).equal();return{[f]:Object.assign(Object.assign({},(0,d.Wf)(t)),{display:"inline-block",height:"auto",marginInlineEnd:t.marginXS,paddingInline:I,fontSize:t.tagFontSize,lineHeight:t.tagLineHeight,whiteSpace:"nowrap",background:t.defaultBg,border:`${(0,y.bf)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,opacity:1,transition:`all ${t.motionDurationMid}`,textAlign:"start",position:"relative",[`&${f}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:t.defaultColor},[`${f}-close-icon`]:{marginInlineStart:e,fontSize:t.tagIconSize,color:t.colorTextDescription,cursor:"pointer",transition:`all ${t.motionDurationMid}`,"&:hover":{color:t.colorTextHeading}},[`&${f}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${t.iconCls}-close, ${t.iconCls}-close:hover`]:{color:t.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${f}-checkable-checked):hover`]:{color:t.colorPrimary,backgroundColor:t.colorFillSecondary},"&:active, &-checked":{color:t.colorTextLightSolid},"&-checked":{backgroundColor:t.colorPrimary,"&:hover":{backgroundColor:t.colorPrimaryHover}},"&:active":{backgroundColor:t.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${t.iconCls} + span, > span + ${t.iconCls}`]:{marginInlineStart:I}}),[`${f}-borderless`]:{borderColor:"transparent",background:t.tagBorderlessBg}}},Y=t=>{const{lineWidth:v,fontSizeIcon:h,calc:c}=t,f=t.fontSizeSM;return(0,E.IX)(t,{tagFontSize:f,tagLineHeight:(0,y.bf)(c(t.lineHeightSM).mul(f).equal()),tagIconSize:c(h).sub(c(v).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:t.defaultBg})},H=t=>({defaultBg:new i.C(t.colorFillQuaternary).onBackground(t.colorBgContainer).toHexString(),defaultColor:t.colorText});var Q=(0,u.I$)("Tag",t=>{const v=Y(t);return S(v)},H),b=function(t,v){var h={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&v.indexOf(c)<0&&(h[c]=t[c]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,c=Object.getOwnPropertySymbols(t);f<c.length;f++)v.indexOf(c[f])<0&&Object.prototype.propertyIsEnumerable.call(t,c[f])&&(h[c[f]]=t[c[f]]);return h},M=o.forwardRef((t,v)=>{const{prefixCls:h,style:c,className:f,checked:U,onChange:I,onClick:e}=t,n=b(t,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:s,tag:l}=o.useContext(F.E_),a=P=>{I==null||I(!U),e==null||e(P)},m=s("tag",h),[g,w,T]=Q(m),B=x()(m,`${m}-checkable`,{[`${m}-checkable-checked`]:U},l==null?void 0:l.className,f,w,T);return g(o.createElement("span",Object.assign({},n,{ref:v,style:Object.assign(Object.assign({},c),l==null?void 0:l.style),className:B,onClick:a})))}),Z=r(98719);const ce=t=>(0,Z.Z)(t,(v,h)=>{let{textColor:c,lightBorderColor:f,lightColor:U,darkColor:I}=h;return{[`${t.componentCls}${t.componentCls}-${v}`]:{color:c,background:U,borderColor:f,"&-inverse":{color:t.colorTextLightSolid,background:I,borderColor:I},[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}});var J=(0,u.bk)(["Tag","preset"],t=>{const v=Y(t);return ce(v)},H);function q(t){return typeof t!="string"?t:t.charAt(0).toUpperCase()+t.slice(1)}const W=(t,v,h)=>{const c=q(h);return{[`${t.componentCls}${t.componentCls}-${v}`]:{color:t[`color${h}`],background:t[`color${c}Bg`],borderColor:t[`color${c}Border`],[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}};var re=(0,u.bk)(["Tag","status"],t=>{const v=Y(t);return[W(v,"success","Success"),W(v,"processing","Info"),W(v,"error","Error"),W(v,"warning","Warning")]},H),$=function(t,v){var h={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&v.indexOf(c)<0&&(h[c]=t[c]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,c=Object.getOwnPropertySymbols(t);f<c.length;f++)v.indexOf(c[f])<0&&Object.prototype.propertyIsEnumerable.call(t,c[f])&&(h[c[f]]=t[c[f]]);return h};const fe=o.forwardRef((t,v)=>{const{prefixCls:h,className:c,rootClassName:f,style:U,children:I,icon:e,color:n,onClose:s,bordered:l=!0,visible:a}=t,m=$(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:g,direction:w,tag:T}=o.useContext(F.E_),[B,P]=o.useState(!0),K=(0,z.Z)(m,["closeIcon","closable"]);o.useEffect(()=>{a!==void 0&&P(a)},[a]);const _=(0,N.o2)(n),V=(0,N.yT)(n),k=_||V,de=Object.assign(Object.assign({backgroundColor:n&&!k?n:void 0},T==null?void 0:T.style),U),R=g("tag",h),[ae,se,G]=Q(R),L=x()(R,T==null?void 0:T.className,{[`${R}-${n}`]:k,[`${R}-has-color`]:n&&!k,[`${R}-hidden`]:!B,[`${R}-rtl`]:w==="rtl",[`${R}-borderless`]:!l},c,f,se,G),ee=ne=>{ne.stopPropagation(),s==null||s(ne),!ne.defaultPrevented&&P(!1)},[,ie]=(0,A.Z)((0,A.w)(t),(0,A.w)(T),{closable:!1,closeIconRender:ne=>{const ye=o.createElement("span",{className:`${R}-close-icon`,onClick:ee},ne);return(0,D.wm)(ne,ye,te=>({onClick:oe=>{var pe;(pe=te==null?void 0:te.onClick)===null||pe===void 0||pe.call(te,oe),ee(oe)},className:x()(te==null?void 0:te.className,`${R}-close-icon`)}))}}),ve=typeof m.onClick=="function"||I&&I.type==="a",ue=e||null,be=ue?o.createElement(o.Fragment,null,ue,I&&o.createElement("span",null,I)):I,me=o.createElement("span",Object.assign({},K,{ref:v,className:L,style:de}),be,ie,_&&o.createElement(J,{key:"preset",prefixCls:R}),V&&o.createElement(re,{key:"status",prefixCls:R}));return ae(ve?o.createElement(O.Z,{component:"Tag"},me):me)});fe.CheckableTag=M;var ge=fe},93162:function(le,X,r){var o,C,x;(function(z,N){C=[],o=N,x=typeof o=="function"?o.apply(X,C):o,x!==void 0&&(le.exports=x)})(this,function(){"use strict";function z(i,d){return typeof d=="undefined"?d={autoBom:!1}:typeof d!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),d={autoBom:!d}),d.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\uFEFF",i],{type:i.type}):i}function N(i,d,E){var u=new XMLHttpRequest;u.open("GET",i),u.responseType="blob",u.onload=function(){y(u.response,d,E)},u.onerror=function(){console.error("could not download file")},u.send()}function A(i){var d=new XMLHttpRequest;d.open("HEAD",i,!1);try{d.send()}catch(E){}return 200<=d.status&&299>=d.status}function D(i){try{i.dispatchEvent(new MouseEvent("click"))}catch(E){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(d)}}var O=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof r.g=="object"&&r.g.global===r.g?r.g:void 0,F=O.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),y=O.saveAs||(typeof window!="object"||window!==O?function(){}:"download"in HTMLAnchorElement.prototype&&!F?function(i,d,E){var u=O.URL||O.webkitURL,S=document.createElement("a");d=d||i.name||"download",S.download=d,S.rel="noopener",typeof i=="string"?(S.href=i,S.origin===location.origin?D(S):A(S.href)?N(i,d,E):D(S,S.target="_blank")):(S.href=u.createObjectURL(i),setTimeout(function(){u.revokeObjectURL(S.href)},4e4),setTimeout(function(){D(S)},0))}:"msSaveOrOpenBlob"in navigator?function(i,d,E){if(d=d||i.name||"download",typeof i!="string")navigator.msSaveOrOpenBlob(z(i,E),d);else if(A(i))N(i,d,E);else{var u=document.createElement("a");u.href=i,u.target="_blank",setTimeout(function(){D(u)})}}:function(i,d,E,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof i=="string")return N(i,d,E);var S=i.type==="application/octet-stream",Y=/constructor/i.test(O.HTMLElement)||O.safari,H=/CriOS\/[\d]+/.test(navigator.userAgent);if((H||S&&Y||F)&&typeof FileReader!="undefined"){var Q=new FileReader;Q.onloadend=function(){var M=Q.result;M=H?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=M:location=M,u=null},Q.readAsDataURL(i)}else{var b=O.URL||O.webkitURL,p=b.createObjectURL(i);u?u.location=p:location.href=p,u=null,setTimeout(function(){b.revokeObjectURL(p)},4e4)}});O.saveAs=y.saveAs=y,le.exports=y})}}]);