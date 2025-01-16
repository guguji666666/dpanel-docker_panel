"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7667],{33160:function(z,B,e){e.d(B,{Z:function(){return M}});var O=e(87462),h=e(67294),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},v=y,F=e(84089),C=function(u,E){return h.createElement(F.Z,(0,O.Z)({},u,{ref:E,icon:v}))},R=h.forwardRef(C),M=R},99861:function(z,B,e){var O=e(15009),h=e.n(O),y=e(64599),v=e.n(y),F=e(99289),C=e.n(F),R=e(5574),M=e.n(R),m=e(42119),u=e(67294),E=e(92754),a=e(3393),I=e(184),n=e(38345),r=e(85893),A=(0,u.forwardRef)(function(f,x){(0,u.useImperativeHandle)(x,function(){return{start:function(){return H(!0),ee()},finish:function(){H(!1)}}});var j=(0,u.useState)(0),P=M()(j,2),d=P[0],c=P[1],i=(0,u.useRef)(),Z=(0,u.useState)(!1),T=M()(Z,2),X=T[0],H=T[1],ee=function(){var W=C()(h()().mark(function w(){var Y,J,S,U,ae,re,ce;return h()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:J=0,S=v()(f.image),p.prev=2,S.s();case 4:if((U=S.n()).done){p.next=14;break}return re=U.value,c(J),(ae=i.current)===null||ae===void 0||ae.setStart(re),p.next=10,(0,a.Gb)({tag:re,type:"pull"});case 10:ce=p.sent,J++;case 12:p.next=4;break;case 14:p.next=19;break;case 16:p.prev=16,p.t0=p.catch(2),S.e(p.t0);case 19:return p.prev=19,S.f(),p.finish(19);case 22:(Y=i.current)===null||Y===void 0||Y.setFinish(),c(J);case 24:case"end":return p.stop()}},w,null,[[2,16,19,22]])}));return function(){return W.apply(this,arguments)}}();return(0,r.jsxs)(I.a,{trigger:f.trigger,width:800,open:X,submitter:!1,title:"\u4E00\u952E\u62C9\u53D6\u955C\u50CF",onOpenChange:function(){var W=C()(h()().mark(function w(Y){return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:H(Y),Y&&f.trigger&&ee();case 2:case"end":return S.stop()}},w)}));return function(w){return W.apply(this,arguments)}}(),drawerProps:{forceRender:!0},children:[(0,r.jsx)(n.Z,{children:(0,r.jsx)(m.Z,{current:d,items:f.image.map(function(W,w){return{title:W,key:w}})})}),(0,r.jsx)(n.Z,{children:(0,r.jsx)(E.Z,{ref:i})})]})});B.Z=A},57165:function(z,B,e){e.d(B,{Z:function(){return M}});var O=e(5574),h=e.n(O),y=e(89035),v=e(63713),F=e(83062),C=e(67294),R=e(85893);function M(m){var u=(0,C.useState)({height:800,width:1024}),E=h()(u,2),a=E[0],I=E[1],n=function(){var f=window.innerWidth,x=window.innerHeight;I({height:x,width:f})};(0,C.useEffect)(function(){window.addEventListener("resize",function(){n()}),n()},[m]);var r=m.query?Object.keys(m.query).map(function(A){return"".concat(A,"=").concat(m.query[A])}):[];return(0,R.jsx)(v.Link,{target:"_blank",to:"/console/"+m.container+"?width=".concat(a.width,"&height=").concat(a.height,"&").concat(r.join("&")),children:(0,R.jsxs)(F.Z,{title:m.tips?m.tips:"\u7EC8\u7AEF",children:[(0,R.jsx)(y.Z,{})," ",m.content]})})}},80821:function(z,B,e){e.d(B,{Z:function(){return m}});var O=e(5574),h=e.n(O),y=e(24963),v=e(86738),F=e(28036),C=e(83062),R=e(67294),M=e(85893);function m(u){var E=(0,R.useState)(!1),a=h()(E,2),I=a[0],n=a[1],r=(0,R.useContext)(y.Z),A=r.lang,f=r.notice,x=r.message,j=function(){n(!0),u.action().then(function(d){if(n(!1),typeof u.onSuccess=="function"&&u.onSuccess(d),u.messageSuccess){var c="";typeof u.messageSuccess=="function"?c=u.messageSuccess(d):c=u.messageSuccess,c=A("notification.finish"),u.asynced?x.info(c):x.success(c)}}).catch(function(d){n(!1),typeof u.onError=="function"&&u.onError(d)})};return u.confirm?(0,M.jsx)(v.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:A("notification.title.tip"),description:u.confirm,onConfirm:j,okText:"Yes",cancelText:"No",children:(0,M.jsx)(F.ZP,{disabled:u.disabled,icon:u.icon,loading:I,danger:u.danger,type:u.type,children:u.children})}):(0,M.jsx)(C.Z,{title:u.tips,children:(0,M.jsx)(F.ZP,{disabled:u.disabled,icon:u.icon,loading:I,onClick:j,danger:u.danger,type:u.type,children:u.children})})}},37413:function(z,B,e){e.d(B,{Z:function(){return I}});var O=e(19632),h=e.n(O),y=e(27496),v=e(35995),F=e(99611),C=e(29158),R=e(38345),M=e(55241),m=e(42075),u=e(66309),E=e(67294),a=e(85893);function I(n){return(0,a.jsx)(M.Z,{placement:"right",content:(0,a.jsxs)(R.Z,{direction:"column",style:{width:500},ghost:!0,children:[(0,a.jsx)(R.Z,{title:"\u7AEF\u53E3",children:[].concat(h()(n.publicPort),h()(n.privatePort)).map(function(r,A){var f=n.serverIp;if(f!=""&&f.indexOf("http")===-1&&f.indexOf(":")>-1&&(f="[".concat(f,"]")),f==""){var x=document.location.protocol+"//"+document.location.hostname;f=x}return f==""&&(f=r.IP),(0,a.jsx)(m.Z,{size:"large",wrap:!0,children:(0,a.jsx)(u.Z,{color:r.PublicPort?"#2db7f5":"warning",icon:r.PublicPort?(0,a.jsx)(y.Z,{}):"",style:{marginBottom:5,width:210},children:r.PublicPort?(0,a.jsx)("a",{href:"".concat(f.indexOf("http")===0?f:"http://"+f,":").concat(r.PublicPort),target:"_blank",children:"".concat(r.PublicPort?r.IP+":"+r.PublicPort+" -> ":"").concat(r.PrivatePort,"/").concat(r.Type)},"link".concat(A)):"".concat(r.PrivatePort,"/").concat(r.Type)})},"space".concat(A))})}),n.domain.length>0&&(0,a.jsx)(R.Z,{title:"\u57DF\u540D",children:(0,a.jsx)(m.Z,{direction:"vertical",style:{textAlign:"left"},children:n.domain.map(function(r,A){return(0,a.jsx)(u.Z,{color:"blue",icon:(0,a.jsx)(y.Z,{}),children:(0,a.jsx)("a",{href:r,target:"_blank",children:r})},"domain".concat(A))})})})]}),children:(0,a.jsxs)(m.Z,{direction:"vertical",children:[n.privatePort.length>0&&(0,a.jsxs)(u.Z,{color:"warning",icon:(0,a.jsx)(v.Z,{}),children:["\u5185\u90E8\u7AEF\u53E3: ",n.privatePort.length]}),n.publicPort.length>0&&(0,a.jsxs)(u.Z,{color:"#2db7f5",icon:(0,a.jsx)(F.Z,{}),children:["\u5BF9\u5916\u7AEF\u53E3: ",n.publicPort.length]}),n.domain.length>0&&(0,a.jsxs)(u.Z,{color:"blue",icon:(0,a.jsx)(C.Z,{}),children:["\u7ED1\u5B9A\u57DF\u540D: ",n.domain.length]})]})})}},94359:function(z,B,e){e.d(B,{Z:function(){return I}});var O=e(67294),h=e(3089),y=e(98165),v=e(18429),F=e(8751),C=e(14313),R=e(30159),M=e(87740),m=e(66309),u=e(83062),E=e(63713),a=e(85893);function I(n){var r=(0,a.jsx)(a.Fragment,{});if(n.status=="0"&&(r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(h.Z,{}),color:"default",children:"waiting"})),n.status=="10"&&(r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(y.Z,{spin:!0}),color:"processing",children:"processing"})),n.status=="20"&&(r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(v.Z,{}),color:"error",children:"error"})),n.status=="30"&&(r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(F.Z,{}),color:"success",children:"success"})),n.status=="running"||n.status=="healthy"){var A,f;r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(C.Z,{}),color:"success",children:(A=n.message)!==null&&A!==void 0&&A.showInTag?(f=n.message)===null||f===void 0?void 0:f.content:n.status})}if(n.status=="paused"){var x,j;r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(R.Z,{}),children:(x=n.message)!==null&&x!==void 0&&x.showInTag?(j=n.message)===null||j===void 0?void 0:j.content:n.status})}if(n.status=="waiting"||n.status=="starting"){var P,d;r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(M.Z,{}),children:(P=n.message)!==null&&P!==void 0&&P.showInTag?(d=n.message)===null||d===void 0?void 0:d.content:n.status})}if(n.status=="exited"||n.status=="dead"||n.status=="removing"||n.status=="restarting"||n.status=="unhealthy"||n.status=="created"){var c,i;r=(0,a.jsx)(m.Z,{icon:(0,a.jsx)(v.Z,{}),color:"warning",children:(c=n.message)!==null&&c!==void 0&&c.showInTag?(i=n.message)===null||i===void 0?void 0:i.content:n.status})}if(n.link&&(r=(0,a.jsx)(E.Link,{to:n.link,children:r})),n.message){var Z;r=(0,a.jsx)(u.Z,{placement:(Z=n.message.placement)!==null&&Z!==void 0?Z:"top",title:n.message.content,children:r})}return(0,a.jsx)(a.Fragment,{children:r})}},92754:function(z,B,e){var O=e(5574),h=e.n(O),y=e(67294),v=e(63713),F=e(38703),C=e(85893),R=(0,y.forwardRef)(function(M,m){var u=(0,y.useState)(""),E=h()(u,2),a=E[0],I=E[1];(0,y.useImperativeHandle)(m,function(){return{setFinish:function(){x({finish:{downloading:100,extracting:100}})},setStart:function(P){P&&I(P),x({start:{downloading:0,extracting:0}})}}});var n=(0,v.useModel)("subscriber");n.addDataHandler("image:pull:"+a,function(j){x(j.data)});var r=(0,y.useState)(),A=h()(r,2),f=A[0],x=A[1];return(0,y.useEffect)(function(){x({start:{downloading:0,extracting:0}})},[]),(0,C.jsx)(C.Fragment,{children:f&&Object.keys(f).map(function(j){return(0,C.jsx)(F.Z,{percent:f[j].downloading,success:{percent:f[j].extracting}},j)})})});B.Z=R},78451:function(z,B,e){e.d(B,{Z:function(){return y}});var O=e(67294),h=e(85893);function y(v){return(0,h.jsx)("span",{style:{width:v.width?v.width:"auto",wordBreak:"break-word"},children:v.content})}},54964:function(z,B,e){e.d(B,{a:function(){return u}});var O=e(78267),h=e.n(O),y=e(75458),v=e.n(y),F=e(67294),C=e(12320),R=e.n(C),M=e(89629),m=e(85893),u={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},E=new C.Terminal(u),a=new y.SearchAddon,I=new O.FitAddon,n=(0,F.forwardRef)(function(r,A){return(0,F.useEffect)(function(){window.addEventListener("resize",function(){r.showInModal||I.fit()}),r.style&&r.style.fontSize&&(E.options.fontSize=r.style.fontSize),E.loadAddon(I),E.loadAddon(a),E.open(document.getElementById("terminal-container")),r.showInModal||I.fit()},[]),(0,F.useImperativeHandle)(A,function(){return{write:function(x){E.write(x)},clear:function(){E.clear()},getTerminal:function(){return E},findNext:function(x){a.findNext(x)},findPrev:function(x){a.findPrevious(x)},fit:function(){I.fit()},onData:function(x){E.onData(x)}}}),(0,m.jsx)("div",{id:"terminal-container",style:{width:r.width?r.width:"100%",height:r.height?r.height:"500px"}})});B.Z=n},9740:function(z,B,e){e.r(B),e.d(B,{default:function(){return Ve}});var O=e(19632),h=e.n(O),y=e(15009),v=e.n(y),F=e(99289),C=e.n(F),R=e(5574),M=e.n(R),m=e(80821),u=e(54964),E=e(90098),a=e(43425),I=e(74842),n=e(48689),r=e(33160),A=e(87784),f=e(30159),x=e(86548),j=e(89035),P=e(45742),d=e(90078),c=e(38345),i=e(97269),Z=e(62370),T=e(63713),X=e(28036),H=e(42075),ee=e(25593),W=e(84567),w=e(96074),Y=e(63490),J=e(83062),S=e(92398),U=e(67294),ae=e(99861),re=e(95089),ce=e(95213),le=e(24963),p=e(91058),Be=e(12320),nt=e(89629),Le=e(78267),t=e(85893),me=new Be.Terminal(u.a),he=new Le.FitAddon;function pe(se){var oe=(0,T.useModel)("subscriber");return oe.addDataHandler("compose:log:"+se.id,function(fe){me.write(fe.data)}),(0,U.useEffect)(function(){return window.addEventListener("resize",function(){he.fit()}),me.options.fontSize=12,me.loadAddon(he),me.open(document.getElementById("terminal-log")),he.fit(),me.clear(),function(){oe.progress.close("compose:log:"+se.id)}},[se.id]),(0,t.jsx)("div",{id:"terminal-log",style:{width:"100%",height:"500px"}})}var Se=e(37413),Ue=e(87662),We=e(94359),Ke=e(57165),be=e(79245),De=e(78451);function Ve(){var se,oe,fe,Ee=(0,U.useContext)(le.Z),ge=Ee.loading,$e=Ee.lang,at=Ee.notice,_e=(0,T.useParams)(),je=(0,T.useNavigate)(),Ne=(0,U.useState)(),Oe=M()(Ne,2),s=Oe[0],we=Oe[1],k=(0,U.useRef)(),Ge=(0,U.useState)(0),xe=M()(Ge,2),q=xe[0],te=xe[1],ze=(0,U.useState)("default"),Fe=M()(ze,2),He=Fe[0],ue=Fe[1],G=(0,U.useRef)(),Ce=(0,T.useModel)("subscriber"),Ye=(0,U.useState)(""),ye=M()(Ye,2),Qe=ye[0],Je=ye[1],ve=(0,U.useRef)(),de=(0,U.useRef)(),Pe=(0,U.useRef)(),Xe=(0,U.useState)(!1),Me=M()(Xe,2),ke=Me[0],Ae=Me[1],qe=(0,T.useSearchParams)(),Re=M()(qe,2),et=Re[0],tt=Re[1];Ce.addDataHandler("compose:"+_e.id,function(g){var o;(o=k.current)===null||o===void 0||o.write(g.data)});var Ze=function(){var g=C()(v()().mark(function o(l){var _,D,K;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(ue("deploy"),(_=k.current)===null||_===void 0||_.clear(),!l.pullImageUseDPanel){b.next=6;break}return b.next=5,(D=Pe.current)===null||D===void 0?void 0:D.start();case 5:(K=Pe.current)===null||K===void 0||K.finish();case 6:return b.next=8,(0,E.Oh)(l);case 8:te(q+1);case 9:case"end":return b.stop()}},o)}));return function(l){return g.apply(this,arguments)}}();return(0,U.useEffect)(function(){return ge.show(),Ae(!1),(0,E.Pn)({id:_e.id}).then(function(){var g=C()(v()().mark(function o(l){var _,D,K,L,b,$,ne;return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(_=l.data.detail,_.setting.status&&_.setting.status.indexOf("running")>-1&&(_.isRunning=!0),_.setting.status&&_.setting.status.indexOf("paused")>-1&&(_.isPaused=!0),_.setting.status&&_.setting.status.indexOf("exited")>-1&&(_.isExited=!0),_.setting.status&&_.setting.status=="waiting"?_.isDeploy=!1:_.isDeploy=!0,_.setting.status&&_.setting.status.indexOf("created")>-1&&(_.isCreated=!0,_.isDeploy=!1),l.data.project&&(_.imageList=h()(new Set(Object.keys(l.data.project.services).map(function(N){var Q;return(Q=l.data.project.services[N].image)!==null&&Q!==void 0?Q:""})))),D=l.data.project,(!l.data.containerList||l.data.containerList.length==0)&&D&&D.services&&(l.data.containerList=Object.keys(D.services).map(function(N){return{name:"-",service:N,publishers:D.services[N].ports?D.services[N].ports.map(function(Q){var ie;return{url:"",targetPort:Q.target,publishedPort:parseInt(Q.published),protocol:(ie=Q.protocol)!==null&&ie!==void 0?ie:""}}):[],state:"waiting",status:""}})),l.data.containerList&&((0,Ue.EH)().then(function(N){Je(N.data.ip)}),_.containerList=l.data.containerList,(K=G.current)===null||K===void 0||K.setFieldValue("deployServiceName",l.data.detail.setting.deployServiceName)),_.yamlList=l.data.yaml,we(_),D!=null&&D.services&&Object.keys(D.services).map(function(N){var Q=[];if(D.services&&D.services[N]&&(D.services[N].environment&&Object.keys(D.services[N].environment).map(function(Te){D.services[N].environment&&Q.push({name:Te,value:D.services[N].environment[Te]})}),Q.length!=0)){var ie;(ie=G.current)===null||ie===void 0||ie.setFieldValue(["environmentService",N],Q)}}),l.data.detail.setting.environment?(L=G.current)===null||L===void 0||L.setFieldValue("environment",l.data.detail.setting.environment):($=(0,be.m)(l.data.yaml[0]),(b=G.current)===null||b===void 0||b.setFieldValue("environment",$)),_.isDeploy&&(0,E.VN)({id:_e.id}),et.get("op")!="deploy"){V.next=22;break}return ne={id:_.id||_.name,pullImageUseDPanel:!0,environment:_.setting.environment,deployServiceName:[],createPath:!0,removeOrphans:!0},ge.show(),V.next=20,Ze(ne);case 20:te(q+1),tt("");case 22:case"end":return V.stop()}},o)}));return function(o){return g.apply(this,arguments)}}()).catch(function(g){je("/compose/list")}).finally(function(){ge.destroy()}),function(){Ce.progress.close("compose:log:"+_e.id)}},[q]),(0,t.jsx)(d._z,{header:{extra:[(0,t.jsx)(T.Link,{to:"/compose/create",reloadDocument:location.search.length>0,children:(0,t.jsx)(X.ZP,{type:"primary",children:"\u521B\u5EFA\u4EFB\u52A1"},"createCompose")},"create")]},children:(0,t.jsxs)(c.Z,{direction:"column",ghost:!0,gutter:[10,10],children:[(0,t.jsx)(c.Z,{title:(0,t.jsx)(a.Z,{}),subTitle:"\u64CD\u4F5C - "+(s==null?void 0:s.name),bordered:!0,extra:(0,t.jsx)(t.Fragment,{children:s&&s.imageList&&s.imageList.length>0&&(0,t.jsx)(ae.Z,{ref:Pe,image:s.imageList})}),headerBordered:!0,children:s&&(0,t.jsxs)(H.Z,{wrap:!0,children:[(0,t.jsx)(m.Z,{icon:(0,t.jsx)(I.Z,{}),type:"primary",confirm:(0,t.jsxs)(H.Z,{style:{width:300},direction:"vertical",children:[(0,t.jsx)(ee.Z.Text,{children:"\u91CD\u65B0\u521B\u5EFA\u8BE5\u4EFB\u52A1\u4E0B\u7684\u5BB9\u5668\uFF1F"}),(0,t.jsxs)(i.A,{name:"createForm",formRef:de,layout:"inline",submitter:!1,children:[(0,t.jsx)(Z.Z,{initialValue:!1,name:"pullImageUseCommand",valuePropName:"checked",children:(0,t.jsx)(W.Z,{children:"\u4F7F\u7528\u547D\u4EE4\u62C9\u53D6\u955C\u50CF\uFF08\u9700\u914D\u7F6E\u547D\u4EE4\u4EE3\u7406\uFF09\uFF1F"})}),(0,t.jsx)(Z.Z,{initialValue:!0,name:"pullImageUseDPanel",valuePropName:"checked",children:(0,t.jsx)(W.Z,{defaultChecked:!0,children:"\u4F7F\u7528\u9762\u677F\u62C9\u53D6\u955C\u50CF\uFF08\u9700\u914D\u7F6E\u4ED3\u5E93\u52A0\u901F\uFF09\uFF1F"})}),(0,t.jsx)(Z.Z,{initialValue:!0,name:"createPath",valuePropName:"checked",children:(0,t.jsx)(W.Z,{defaultChecked:!0,children:"\u521B\u5EFA\u6302\u8F7D\u76EE\u5F55\uFF08\u4EC5\u9762\u677F\u975E\u5BB9\u5668\u90E8\u7F72\u751F\u6548\uFF09\uFF1F"})}),(0,t.jsx)(Z.Z,{initialValue:!0,name:"removeOrphans",valuePropName:"checked",children:(0,t.jsx)(W.Z,{defaultChecked:!0,children:"\u6E05\u9664\u5DF2\u91CD\u547D\u540D\u6216\u662F\u88AB\u5220\u9664\u7684\u670D\u52A1\uFF1F"})})]})]}),action:C()(v()().mark(function g(){var o,l,_,D,K,L,b,$,ne;return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if($={id:s.id||s.name},(o=de.current)!==null&&o!==void 0&&o.getFieldValue&&de.current.getFieldValue("pullImageUseDPanel")&&($.pullImageUseDPanel=!0),$.environment=(l=G.current)===null||l===void 0?void 0:l.getFieldValue("environment"),$.deployServiceName=(_=G.current)===null||_===void 0?void 0:_.getFieldValue("deployServiceName"),$.createPath=(D=(K=de.current)===null||K===void 0?void 0:K.getFieldValue("createPath"))!==null&&D!==void 0?D:!0,$.removeOrphans=(L=(b=de.current)===null||b===void 0?void 0:b.getFieldValue("removeOrphans"))!==null&&L!==void 0?L:!0,!(s!=null&&s.isDeploy)){V.next=10;break}if(!((ne=de.current)!==null&&ne!==void 0&&ne.getFieldValue("pullImageUseCommand"))){V.next=10;break}return V.next=10,(0,E.GG)({id:s.id||s.name,op:"pull"});case 10:Ze($);case 11:case"end":return V.stop()}},g)})),children:s.isDeploy?"\u66F4\u65B0":"\u542F\u52A8"},"create"),(s.isDeploy||s.isCreated)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.Z,{action:function(){var o;return(o=k.current)===null||o===void 0||o.clear(),ue("destory"),(0,E.mg)({id:s.id||s.name,deleteImage:!1,deleteData:!1,deleteVolume:!1,deletePath:!1})},onSuccess:function(){te(q+1)},confirm:"\u4FDD\u7559\u5F53\u524D\u4EFB\u52A1\u53EA\u5220\u9664\u5BB9\u5668\uFF0C\u786E\u5B9A\u5417\uFF1F",type:"primary",danger:!0,messageSuccess:"delete",icon:(0,t.jsx)(n.Z,{}),children:"\u5220\u9664\u5BB9\u5668"}),(0,t.jsx)(w.Z,{type:"vertical"})]}),s.isDeploy&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.Z,{icon:(0,t.jsx)(r.Z,{}),action:C()(v()().mark(function g(){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return ue("crtl"),l.next=3,(0,E.GG)({id:s.id||s.name,op:"restart"});case 3:te(q+1);case 4:case"end":return l.stop()}},g)})),children:"\u91CD\u542F"},"restart"),(0,t.jsx)(m.Z,{action:function(){var o;return(o=k.current)===null||o===void 0||o.clear(),ue("crtl"),(0,E.GG)({id:s.id||s.name,op:"stop"})},messageSuccess:"stop",icon:(0,t.jsx)(A.Z,{}),disabled:s.isExited,onSuccess:function(){te(q+1)},children:"\u505C\u6B62"}),s.isPaused&&(0,t.jsx)(m.Z,{action:function(){var o;return ue("crtl"),(o=k.current)===null||o===void 0||o.clear(),(0,E.GG)({id:s.id||s.name,op:"unpause"})},messageSuccess:"resume",onSuccess:function(){te(q+1)},icon:(0,t.jsx)(I.Z,{}),children:"\u6062\u590D"}),!s.isPaused&&(0,t.jsx)(m.Z,{action:function(){var o;return ue("crtl"),(o=k.current)===null||o===void 0||o.clear(),(0,E.GG)({id:s.id||s.name,op:"pause"})},onSuccess:function(){te(q+1)},messageSuccess:"pause",icon:(0,t.jsx)(f.Z,{}),disabled:!s.isRunning,children:"\u6682\u505C"})]}),(0,t.jsx)(w.Z,{type:"vertical"}),(0,t.jsx)(T.Link,{to:"/compose/create?id="+(s.id||s.name),children:(0,t.jsx)(X.ZP,{icon:(0,t.jsx)(x.Z,{}),children:"\u7F16\u8F91\u4EFB\u52A1"})}),s.isDeploy&&s.id>0&&(0,t.jsx)(m.Z,{type:"primary",action:C()(v()().mark(function g(){var o,l,_,D,K,L,b,$,ne;return v()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return(o=k.current)===null||o===void 0||o.clear(),ue("destory"),V.next=4,(0,E.mg)({id:(l=s==null?void 0:s.id)!==null&&l!==void 0?l:0,deleteImage:(_=(D=ve.current)===null||D===void 0?void 0:D.getFieldValue("deleteImage"))!==null&&_!==void 0?_:!1,deleteData:!0,deleteVolume:(K=(L=ve.current)===null||L===void 0?void 0:L.getFieldValue("deleteVolume"))!==null&&K!==void 0?K:!1,deletePath:(b=($=ve.current)===null||$===void 0?void 0:$.getFieldValue("deletePath"))!==null&&b!==void 0?b:!1});case 4:ne=V.sent;case 5:case"end":return V.stop()}},g)})),danger:!0,onSuccess:function(){je("/compose/list")},confirm:(0,t.jsxs)(H.Z,{style:{width:200},direction:"vertical",children:[(0,t.jsx)(ee.Z.Text,{children:"\u4F1A\u540C\u65F6\u5220\u9664\u5BB9\u5668\u53CA\u90E8\u7F72\u76F8\u5173\u6570\u636E\uFF0C\u672A\u52FE\u9009\u5220\u9664 compose \u6587\u4EF6\u65F6 yaml \u6587\u4EF6\u5C06\u4F1A\u4FDD\u7559\uFF0C\u786E\u8BA4\u5417\uFF1F"}),(0,t.jsxs)(i.A,{formRef:ve,layout:"inline",submitter:!1,children:[(0,t.jsx)(Z.Z,{initialValue:!1,name:"deleteImage",valuePropName:"checked",children:(0,t.jsx)(W.Z,{children:"\u5220\u9664\u955C\u50CF\uFF1F"})}),(0,t.jsx)(Z.Z,{initialValue:!1,name:"deleteVolume",valuePropName:"checked",children:(0,t.jsx)(W.Z,{children:"\u5220\u9664\u5B58\u50A8\u5377\uFF1F"})}),(0,t.jsx)(Z.Z,{initialValue:!1,name:"deletePath",valuePropName:"checked",children:(0,t.jsx)(W.Z,{children:"\u5220\u9664 Compose \u6587\u4EF6\u548C\u4EFB\u52A1\u76EE\u5F55\uFF1F"})})]})]}),children:"\u5220\u9664\u4EFB\u52A1"})]})},"operator"),(0,t.jsxs)(c.Z,{split:"vertical",children:[(0,t.jsxs)(c.Z,{colSpan:"45%",direction:"column",split:"horizontal",title:"\u542F\u52A8\u914D\u7F6E",subTitle:"\u7F16\u8F91\u540E\u53EA\u5F71\u54CD\u672C\u6B21\u90E8\u7F72",extra:[s&&!s.isDeploy&&(0,t.jsx)(W.Z,{onChange:function(o){Ae(o.target.checked)},children:"\u81EA\u5B9A\u4E49\u90E8\u7F72\u5BB9\u5668\u670D\u52A1\uFF1F"},"selectService")],children:[He!="default"&&(0,t.jsx)(c.Z,{title:(0,t.jsx)(j.Z,{}),subTitle:"\u63A7\u5236\u53F0",extra:(0,t.jsx)(H.Z,{children:(0,t.jsx)(m.Z,{action:function(){var o;return(o=k.current)===null||o===void 0||o.clear(),(0,E.U_)({})},icon:(0,t.jsx)(n.Z,{}),danger:!0,onSuccess:function(){te(q+1)},children:"\u4E2D\u6B62\u6267\u884C"},"kill")}),children:(0,t.jsx)(u.Z,{height:"300px",style:{fontSize:12},ref:k})}),s&&(0,t.jsx)(c.Z,{children:(0,t.jsx)(Y.Z,{scroll:{x:"max-content"},rowKey:"service",pagination:!1,columns:[{title:"\u5BB9\u5668\u540D",dataIndex:"name",width:170,render:function(o,l,_){return(0,t.jsx)(De.Z,{content:l.name})}},{title:"\u670D\u52A1\u540D",dataIndex:"service",width:100,render:function(o,l,_){return(0,t.jsx)(De.Z,{content:l.service})}},{title:"\u7AEF\u53E3",render:function(o,l,_){var D=[],K=[];return l.publishers&&l.publishers.map(function(L){L.publishedPort?D.push({PrivatePort:L.targetPort,Type:L.protocol,IP:L.url,PublicPort:L.publishedPort}):L.publishedPort&&K.push({PrivatePort:L.targetPort,Type:L.protocol,IP:L.url,PublicPort:L.publishedPort})}),(0,t.jsx)(Se.Z,{publicPort:D,privatePort:K,domain:[],serverIp:Qe})}},{title:"\u72B6\u6001",render:function(o,l,_){return(0,t.jsx)(We.Z,{status:l.state,message:{content:$e("container.status.".concat(l.state)),placement:"top",showInTag:!0}},l.name)}},{title:"\u64CD\u4F5C",render:function(o,l,_){return(0,t.jsxs)(H.Z,{split:(0,t.jsx)(w.Z,{type:"vertical"}),children:[(0,t.jsx)(T.Link,{to:"/app/detail/edit/"+l.name,target:"_blank",children:(0,t.jsx)(J.Z,{title:"\u7BA1\u7406\u5BB9\u5668",children:(0,t.jsx)(a.Z,{})})},"edit"),l.state=="running"&&(0,t.jsx)(Ke.Z,{container:l.name},"console")]})}}],dataSource:s.containerList,rowSelection:ke&&s.containerList?{defaultSelectedRowKeys:s.containerList.map(function(g){return g.service}),onChange:function(o,l,_){var D;(D=G.current)===null||D===void 0||D.setFieldValue("deployServiceName",o)}}:void 0})}),(0,t.jsxs)(i.A,{formRef:G,submitter:!1,children:[(0,t.jsx)(Z.Z,{name:"deployServiceName",hidden:!0}),!(s!=null&&s.isDeploy)&&(0,t.jsx)(c.Z,{title:"\u73AF\u5883\u53D8\u91CF",subTitle:"\u9762\u677F\u751F\u6210 .dpanel.env \u6587\u4EF6\uFF0C\u540C\u65F6\u4F1A\u52A0\u8F7D .env",children:(0,t.jsx)(p.Z,{showCardGhost:!0,name:"environment",showDisableName:!0,showInDrawer:!0,requireValue:!0})}),!(s!=null&&s.isDeploy)&&(0,t.jsx)(c.Z,{title:"\u670D\u52A1\u73AF\u5883\u53D8\u91CF",tooltip:"\u4FEE\u6539\u670D\u52A1\u4E2D\u7684\u73AF\u5883\u53D8\u91CF\u65F6\uFF0C\u8BF7\u5728 yaml \u4E2D\u5C06\u503C\u5148\u6620\u5C04\u6210\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF\u540D",children:(0,t.jsx)(S.Z,{indicator:{align:"center"},items:G&&G.current&&((se=G.current)===null||se===void 0?void 0:se.getFieldValue("environmentService"))&&Object.keys((oe=G.current)===null||oe===void 0?void 0:oe.getFieldValue("environmentService")).map(function(g){return{label:g,key:g,children:(0,t.jsx)(p.Z,{showCardGhost:!0,name:["environmentService",g],showDisableName:!0,showDisableValue:!0,showInDrawer:!0,requireValue:!0})}})})})]})]}),s&&!s.isDeploy&&(0,t.jsx)(c.Z,{colSpan:"55%",children:(0,t.jsx)(S.Z,{items:s.yamlList&&s.yamlList.map(function(g,o){var l=[{label:"Yaml \u6587\u4EF6",key:"yaml"},{label:"\u8986\u76D6 Yaml \u6587\u4EF6",key:"yamlOverride"}];return{label:l[o].label,key:l[o].key,disabled:g=="",children:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(re.ZP,{theme:"dark",minHeight:"550px",value:g,readOnly:!0,extensions:[ce.RI.yaml()]})})}})})}),s&&s.isDeploy&&(0,t.jsx)(c.Z,{title:(0,t.jsx)(P.Z,{}),subTitle:"\u65E5\u5FD7",colSpan:"55%",children:(0,t.jsx)(pe,{id:(fe=_e.id)!==null&&fe!==void 0?fe:""})})]})]})})}},3393:function(z,B,e){e.d(B,{Gb:function(){return M},Pn:function(){return a},Rb:function(){return n},YU:function(){return C},ZQ:function(){return x},_U:function(){return u},cd:function(){return A}});var O=e(15009),h=e.n(O),y=e(99289),v=e.n(y),F=e(63713);function C(P){return R.apply(this,arguments)}function R(){return R=v()(h()().mark(function P(d){return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.request)("/api/app/image/get-detail",{method:"POST",data:d}));case 1:case"end":return i.stop()}},P)})),R.apply(this,arguments)}function M(P){return m.apply(this,arguments)}function m(){return m=v()(h()().mark(function P(d){return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.request)("/api/app/image/tag-remote",{method:"POST",data:d}));case 1:case"end":return i.stop()}},P)})),m.apply(this,arguments)}function u(P){return E.apply(this,arguments)}function E(){return E=v()(h()().mark(function P(d){return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.request)("/api/app/image/tag-add",{method:"POST",data:d}));case 1:case"end":return i.stop()}},P)})),E.apply(this,arguments)}function a(P){return I.apply(this,arguments)}function I(){return I=v()(h()().mark(function P(d){return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.request)("/api/app/image/tag-delete",{method:"POST",data:d}));case 1:case"end":return i.stop()}},P)})),I.apply(this,arguments)}function n(P){return r.apply(this,arguments)}function r(){return r=v()(h()().mark(function P(d){return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.request)("/api/app/image/export",{method:"POST",data:d,responseType:"blob"}));case 1:case"end":return i.stop()}},P)})),r.apply(this,arguments)}function A(P){return f.apply(this,arguments)}function f(){return f=v()(h()().mark(function P(d){return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.request)("/api/pro/image/get-remote-tag",{method:"POST",data:d}));case 1:case"end":return i.stop()}},P)})),f.apply(this,arguments)}function x(P){return j.apply(this,arguments)}function j(){return j=v()(h()().mark(function P(d){return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,F.request)("/api/app/image/check-upgrade",{method:"POST",data:d}));case 1:case"end":return i.stop()}},P)})),j.apply(this,arguments)}},85576:function(z,B,e){e.d(B,{Z:function(){return P}});var O=e(56080),h=e(38657),y=e(56745),v=e(67294),F=e(93967),C=e.n(F),R=e(40974),M=e(8745),m=e(53124),u=e(35792),E=e(32409),a=e(4941),I=e(71194),n=function(d,c){var i={};for(var Z in d)Object.prototype.hasOwnProperty.call(d,Z)&&c.indexOf(Z)<0&&(i[Z]=d[Z]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,Z=Object.getOwnPropertySymbols(d);T<Z.length;T++)c.indexOf(Z[T])<0&&Object.prototype.propertyIsEnumerable.call(d,Z[T])&&(i[Z[T]]=d[Z[T]]);return i};const r=d=>{const{prefixCls:c,className:i,closeIcon:Z,closable:T,type:X,title:H,children:ee,footer:W}=d,w=n(d,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:Y}=v.useContext(m.E_),J=Y(),S=c||Y("modal"),U=(0,u.Z)(J),[ae,re,ce]=(0,I.ZP)(S,U),le=`${S}-confirm`;let p={};return X?p={closable:T!=null?T:!1,title:"",footer:"",children:v.createElement(E.O,Object.assign({},d,{prefixCls:S,confirmPrefixCls:le,rootPrefixCls:J,content:ee}))}:p={closable:T!=null?T:!0,title:H,footer:W!==null&&v.createElement(a.$,Object.assign({},d)),children:ee},ae(v.createElement(R.s,Object.assign({prefixCls:S,className:C()(re,`${S}-pure-panel`,X&&le,X&&`${le}-${X}`,i,ce,U)},w,{closeIcon:(0,a.b)(S,Z),closable:T},p)))};var A=(0,M.i)(r),f=e(94423);function x(d){return(0,O.ZP)((0,O.uW)(d))}const j=y.Z;j.useModal=f.Z,j.info=function(c){return(0,O.ZP)((0,O.cw)(c))},j.success=function(c){return(0,O.ZP)((0,O.vq)(c))},j.error=function(c){return(0,O.ZP)((0,O.AQ)(c))},j.warning=x,j.warn=x,j.confirm=function(c){return(0,O.ZP)((0,O.Au)(c))},j.destroyAll=function(){for(;h.Z.length;){const c=h.Z.pop();c&&c()}},j.config=O.ai,j._InternalPanelDoNotUseOrYouWillBeFired=A;var P=j}}]);