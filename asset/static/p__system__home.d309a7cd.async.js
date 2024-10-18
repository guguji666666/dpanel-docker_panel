"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2548],{80821:function(W,b,t){t.d(b,{Z:function(){return c}});var O=t(5574),s=t.n(O),S=t(24963),o=t(86738),r=t(14726),j=t(83062),f=t(67294),x=t(85893);function c(i){var P=(0,f.useState)(!1),v=s()(P,2),C=v[0],E=v[1],e=(0,f.useContext)(S.Z),U=e.lang,A=e.notice,$=e.message,Z=function(){E(!0),i.action().then(function(h){if(E(!1),typeof i.onSuccess=="function"&&i.onSuccess(h),i.messageSuccess){var R="";typeof i.messageSuccess=="function"?R=i.messageSuccess(h):R=i.messageSuccess,R.indexOf(".")>-1&&(R=U(R)),i.asynced?$.info(R):$.success(R)}}).catch(function(h){E(!1),typeof i.onError=="function"&&i.onError(h)})};return i.confirm?(0,x.jsx)(o.Z,{style:{width:500},title:U("notification.title.tip"),description:i.confirm,onConfirm:Z,okText:"Yes",cancelText:"No",children:(0,x.jsx)(r.ZP,{disabled:i.disabled,icon:i.icon,loading:C,danger:i.danger,type:i.type,children:i.children})}):(0,x.jsx)(j.Z,{title:i.tips,children:(0,x.jsx)(r.ZP,{disabled:i.disabled,icon:i.icon,loading:C,onClick:Z,danger:i.danger,type:i.type,children:i.children})})}},27619:function(W,b,t){t.d(b,{Z:function(){return x}});var O=t(97857),s=t.n(O),S=t(19632),o=t.n(S),r=t(64183),j=t(67294),f=t(85893);function x(c){var i,P=Math.max.apply(Math,o()(c.data.map(function(C){var E;return(E=C[c.yField])!==null&&E!==void 0?E:0}))),v={theme:"academy",xField:c.xField,yField:c.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:c.yLabelFormatter},scale:{y:{domainMin:(i=c.yDomainMin)!==null&&i!==void 0?i:0,domainMax:c.yDomainMax?c.yDomainMax:c.yDomainMaxCallback?c.yDomainMaxCallback(P):P}},data:c.data};return c.yLabelFormatter&&(v.axis.y.labelFormatter=c.yLabelFormatter),c.colorField&&(v.colorField=c.colorField),(0,f.jsx)(r.Z,s()({},v))}},71890:function(W,b,t){var O=t(15009),s=t.n(O),S=t(99289),o=t.n(S),r=t(67294);function j(f){var x=f.reqFunction,c=f.interval,i=f.maxPolling,P=f.pollingStatus,v=f.inPath,C=(0,r.useRef)(null),E=0,e=function A(){C.current=window.setTimeout(o()(s()().mark(function $(){var Z;return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!(E++>=i)){h.next=3;break}return U(),h.abrupt("return");case 3:if(h.prev=3,!(v&&window.location.href.indexOf(v)==-1)){h.next=7;break}return U(),h.abrupt("return");case 7:return h.next=9,x();case 9:Z=h.sent,A(),h.next=17;break;case 13:h.prev=13,h.t0=h.catch(3),U(),console.error("\u8F6E\u8BE2\u53D1\u751F\u9519\u8BEF\uFF1A",h.t0);case 17:case"end":return h.stop()}},$,null,[[3,13]])})),c)},U=function(){console.log("end polling"),C.current&&window.clearTimeout(C.current)};return(0,r.useEffect)(function(){return console.log((P?"start":"waiting")+" polling, max "+i),P&&e(),function(){U()}},[c,i,P]),{endPolling:U}}b.Z=j},24963:function(W,b,t){var O=t(67294),s=(0,O.createContext)({});b.Z=s},76214:function(W,b,t){t.r(b),t.d(b,{default:function(){return Ce}});var O=t(15009),s=t.n(O),S=t(99289),o=t.n(S),r=t(5574),j=t.n(r),f=t(19632),x=t.n(f),c=t(80821),i=t(27619),P=t(97857),v=t.n(P),C=t(28413),E=t(67294),e=t(85893);function U(L){var K=(0,E.useState)(),w=j()(K,2),z=w[0],Y=w[1],X={colorField:"value",valueField:"value",scale:{color:{range:["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]}},legend:!1};return L.data?(0,e.jsx)(C.Z,v()(v()({},X),{},{height:500,data:{name:"root",children:L.data}})):(0,e.jsx)(e.Fragment,{})}var A=t(55241),$=t(71230),Z=t(15746),N=t(38703),h=(0,E.forwardRef)(function(L,K){return(0,E.useImperativeHandle)(K,function(){return{}}),(0,e.jsxs)(A.Z,{placement:"left",children:[(0,e.jsx)($.Z,{justify:"center",children:(0,e.jsx)(Z.Z,{children:(0,e.jsx)(N.Z,{percent:L.showPercent,type:"dashboard",format:function(z,Y){return"".concat(z,"%")},size:150,status:L.showPercent>=100?"exception":"normal"})})}),(0,e.jsx)($.Z,{justify:"center",children:(0,e.jsxs)(Z.Z,{style:{marginTop:"10px"},children:[L.showLabel,": ",L.showUse," / ",L.showTotal]})})]})}),R=h,V=t(71890),q=t(87662),H=t(2831),_=t(18148),d=t(5251),g=t(45605),a=t(1210),De=t(38123),Q=t(12122),D=t(38345),Te=t(184),T=t(74273),k=t(54006),B=t(26412),J=t(42075),Fe=t(83062),Ie=t(60922),Me=t(63490),Oe=t(86250);function Ce(){var L,K,w,z,Y,X,ee,ne,te,ae,re,ie,se,le,ue,oe,de,ce,me,_e,ve,fe,he,Ze=function(u,l){switch(l.type){case"update":var m=new Date().toLocaleTimeString(),M=0,y=0,ge=0,pe=0,je=0,ye=0;l.payload.map(function(G){M+=G.cpu,y+=G.memory.in,ge+=G.networkIO.in,pe+=G.networkIO.out,je+=G.blockIO.in,ye+=G.blockIO.out});var Ae={list:l.payload,cpu:M,memory:y,network:[].concat(x()(u.network),[{date:m,usage:pe,type:"\u4E0A\u884C",source:{usage:pe}},{date:m,type:"\u4E0B\u884C",usage:ge,source:{usage:ge}}]),io:[].concat(x()(u.io),[{date:m,usage:ye,type:"\u8BFB\u53D6",source:{usage:ye}},{date:m,type:"\u5199\u5165",usage:je,source:{usage:je}}])};return Ae}},Se=(0,E.useState)(),Ee=j()(Se,2),n=Ee[0],Be=Ee[1],Ue=(0,E.useState)(),xe=j()(Ue,2),p=xe[0],Re=xe[1],Le=(0,E.useReducer)(Ze,{cpu:0,memory:0,network:[],io:[],list:[]}),Pe=j()(Le,2),F=Pe[0],$e=Pe[1],We=(0,V.Z)({reqFunction:function(){var I=o()(s()().mark(function l(){var m;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,q.Cz)();case 2:m=y.sent,$e({type:"update",payload:m.data.list});case 4:case"end":return y.stop()}},l)}));function u(){return I.apply(this,arguments)}return u}(),interval:1e3,maxPolling:999,pollingStatus:!!n,inPath:"/home"}),be=function(){(0,H.a)().then(function(u){Be(u.data);var l={total:0,container:0,volume:0,image:0,cache:0,item:[]};u.data.usage.Containers&&u.data.usage.Containers.map(function(m){var M,y;l.container+=m.SizeRootFs+((M=m.SizeRw)!==null&&M!==void 0?M:0),l.item.push({name:m.Names[0],value:parseFloat(((m.SizeRootFs+((y=m.SizeRw)!==null&&y!==void 0?y:0))/1024/1024).toFixed(2))})}),u.data.usage.Volumes&&u.data.usage.Volumes.map(function(m){l.volume+=m.UsageData.Size,l.item.push({name:m.Name,value:parseFloat((m.UsageData.Size/1024/1024).toFixed(2))})}),u.data.usage.Images&&u.data.usage.Images.map(function(m){var M,y;l.image+=m.Size-((M=m.Sharedsize)!==null&&M!==void 0?M:0),l.item.push({name:m.RepoTags&&m.RepoTags.length>0?m.RepoTags[0]:m.Id,value:parseFloat(((m.Size-((y=m.Sharedsize)!==null&&y!==void 0?y:0))/1024/1024).toFixed(2))})}),u.data.usage.BuildCache&&u.data.usage.BuildCache.map(function(m){l.cache+=m.Size}),!u.data.usage.Containers&&!u.data.usage.Images&&!u.data.usage.Volumes&&l.item.push({name:"docker\u7248\u672C\u592A\u4F4E\u6216\u662F\u83B7\u53D6\u8D85\u65F6 (\u7CFB\u7EDF/\u57FA\u7840\u8BBE\u7F6E\u8C03\u6574\u8D85\u65F6\u65F6\u95F4)",value:100}),l.total=u.data.usage.LayersSize,Re(l)})};return(0,E.useEffect)(function(){be()},[]),(0,e.jsxs)(D.Z,{direction:"column",gutter:[0,10],ghost:!0,children:[(0,e.jsxs)(D.Z,{bordered:!0,split:"vertical",children:[(0,e.jsx)(D.Z,{colSpan:"40%",headerBordered:!0,title:(0,e.jsx)(g.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",children:(0,e.jsxs)(B.Z,{column:1,labelStyle:{width:100,justifyContent:"flex-end"},children:[(0,e.jsx)(B.Z.Item,{label:"\u9762\u677F\u4FE1\u606F",children:(0,e.jsxs)(J.Z,{direction:"horizontal",children:[(0,e.jsxs)("span",{children:["DPanel - ",n==null?void 0:n.dpanel.version," - ",n==null?void 0:n.dpanel.family]}),(0,e.jsx)("a",{target:"_blank",href:"https://github.com/donknap/dpanel",children:(0,e.jsx)(a.Z,{})}),(0,e.jsx)(Fe.Z,{title:"\u5B98\u65B9\u4EA4\u6D41\u7FA4\uFF1A837583876",children:(0,e.jsx)("a",{target:"_blank",href:"https://qm.qq.com/q/NC0z7keAiy",children:(0,e.jsx)(De.Z,{})})})]})}),(0,e.jsx)(B.Z.Item,{label:"Docker Host",children:n==null?void 0:n.info.Name}),(0,e.jsx)(B.Z.Item,{label:"Docker \u7248\u672C",children:"".concat(n==null?void 0:n.info.OperatingSystem," - ").concat(n==null?void 0:n.info.ServerVersion," - ").concat(n==null?void 0:n.sdkVersion)}),(0,e.jsx)(B.Z.Item,{label:"\u6587\u4EF6\u5B58\u50A8\u9A71\u52A8",children:"".concat(n==null?void 0:n.info.Driver)}),(0,e.jsx)(B.Z.Item,{label:"\u65E5\u5FD7\u9A71\u52A8",children:"".concat(n==null?void 0:n.info.LoggingDriver)}),(0,e.jsx)(B.Z.Item,{label:"\u7CFB\u7EDF\u67B6\u6784",children:"".concat(n==null?void 0:n.info.KernelVersion," - ").concat(n==null?void 0:n.info.Architecture)}),(0,e.jsxs)(B.Z.Item,{label:"Cpu",children:[n==null?void 0:n.info.NCPU," \u6838"]}),(0,e.jsx)(B.Z.Item,{label:"Memory",children:(0,d.FI)((L=n==null?void 0:n.info.MemTotal)!==null&&L!==void 0?L:0)}),(0,e.jsx)(B.Z.Item,{label:"\u6839\u76EE\u5F55",children:n==null?void 0:n.info.DockerRootDir}),(0,e.jsx)(B.Z.Item,{label:"\u5B58\u50A8\u5377\u63D2\u4EF6",children:(0,e.jsx)(J.Z,{children:n==null?void 0:n.info.Plugins.Volume})}),(0,e.jsx)(B.Z.Item,{label:"\u7F51\u7EDC\u63D2\u4EF6",children:(0,e.jsx)(J.Z,{children:n==null?void 0:n.info.Plugins.Network})}),(0,e.jsx)(B.Z.Item,{label:"\u7CFB\u7EDF\u65F6\u95F4",children:new Date((K=n==null?void 0:n.info.SystemTime)!==null&&K!==void 0?K:"").toLocaleString()})]})}),(0,e.jsxs)(D.Z,{headerBordered:!0,title:(0,e.jsx)(Q.Z,{}),subTitle:"\u5BB9\u5668\u8FD0\u884C\u7EDF\u8BA1",split:"horizontal",extra:(0,e.jsx)(Te.a,{title:"\u5BB9\u5668\u72B6\u6001\u6570\u636E",submitter:!1,trigger:(0,e.jsx)(Ie.Z.Link,{children:"\u8BE6\u60C5\u6570\u636E"}),children:(0,e.jsx)(Me.Z,{pagination:!1,dataSource:F.list,rowKey:"name",columns:[{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"name"},{title:"Cpu",dataIndex:"cpu",sorter:function(u,l){return u.cpu-l.cpu},render:function(u,l,m){return"".concat(l.cpu.toFixed(2),"%")}},{title:"\u5185\u5B58",dataIndex:"memory",sorter:function(u,l){return u.memory.in-l.memory.in},render:function(u,l,m){var M,y;return"".concat((0,d.FI)((M=l==null?void 0:l.memory.in)!==null&&M!==void 0?M:0)," / ").concat((0,d.FI)((y=l==null?void 0:l.memory.out)!==null&&y!==void 0?y:0))}},{title:"\u7F51\u7EDC I/O",dataIndex:"networkIO",render:function(u,l,m){return"".concat((0,d.FI)(l.networkIO.in)," / ").concat((0,d.FI)(l.networkIO.out))}},{title:"\u78C1\u76D8 I/O",dataIndex:"blockIO",render:function(u,l,m){return"".concat((0,d.FI)(l.blockIO.in)," / ").concat((0,d.FI)(l.blockIO.out))}}]})}),children:[(0,e.jsx)(D.Z,{children:(0,e.jsxs)(Oe.Z,{gap:200,align:"center",justify:"center",children:[(0,e.jsx)(R,{showPercent:parseFloat(((w=F==null?void 0:F.cpu)!==null&&w!==void 0?w:0).toFixed(2)),showLabel:"Cpu",showUse:"".concat((((z=F==null?void 0:F.cpu)!==null&&z!==void 0?z:0)/100*((Y=n==null?void 0:n.info.NCPU)!==null&&Y!==void 0?Y:0)).toFixed(2)),showTotal:"".concat((X=n==null?void 0:n.info.NCPU)!==null&&X!==void 0?X:0," \u6838")}),(0,e.jsx)(R,{showPercent:parseFloat((((ee=F==null?void 0:F.memory)!==null&&ee!==void 0?ee:0)/((ne=n==null?void 0:n.info.MemTotal)!==null&&ne!==void 0?ne:0)*100).toFixed(2)),showLabel:"\u5185\u5B58",showUse:(0,d.FI)((te=F==null?void 0:F.memory)!==null&&te!==void 0?te:0),showTotal:"".concat((0,d.FI)((ae=n==null?void 0:n.info.MemTotal)!==null&&ae!==void 0?ae:0))})]})}),(0,e.jsxs)(D.Z,{split:"vertical",wrap:!0,children:[(0,e.jsx)(D.Z,{colSpan:12,title:(0,e.jsx)(Q.Z,{}),subTitle:"\u7F51\u7EDC",headerBordered:!0,children:(0,e.jsx)(i.Z,{yField:"usage",xField:"date",colorField:"type",data:F.network,yLabelFormatter:function(u){return(0,d.FI)(parseFloat(u))},yDomainMaxCallback:function(u){return u*1.5}})}),(0,e.jsx)(D.Z,{colSpan:12,title:(0,e.jsx)(Q.Z,{}),subTitle:"\u78C1\u76D8",headerBordered:!0,children:(0,e.jsx)(i.Z,{yField:"usage",xField:"date",colorField:"type",data:F.io,yLabelFormatter:function(u){return(0,d.FI)(parseFloat(u))},yDomainMaxCallback:function(u){return u*1.5}})})]})]})]}),(0,e.jsx)(D.Z,{bordered:!0,headerBordered:!0,title:(0,e.jsx)(Q.Z,{}),subTitle:"\u7528\u91CF\u7EDF\u8BA1",children:(0,e.jsxs)($.Z,{children:[(0,e.jsx)(Z.Z,{span:"11",children:(p==null?void 0:p.item)&&(p==null?void 0:p.item.length)>0&&(0,e.jsx)(U,{data:(re=p==null?void 0:p.item)!==null&&re!==void 0?re:[]})}),(0,e.jsx)(Z.Z,{span:"5",children:(0,e.jsxs)(D.Z,{split:"horizontal",children:[(0,e.jsx)(T.Z,{statistic:{title:"\u5BB9\u5668",value:(0,d.FI)((ie=p==null?void 0:p.container)!==null&&ie!==void 0?ie:0),description:"\u5305\u542B\u7CFB\u7EDF\u5360\u7528\u53CA\u5BB9\u5668\u8FD0\u884C\u5199\u5165\u6570\u636E"}}),(0,e.jsx)(T.Z,{statistic:{title:"\u955C\u50CF",value:(0,d.FI)((se=p==null?void 0:p.image)!==null&&se!==void 0?se:0),description:"\u5305\u542B\u4E2D\u95F4\u955C\u50CF"}}),(0,e.jsx)(T.Z,{statistic:{title:"\u5B58\u50A8",value:(0,d.FI)((le=p==null?void 0:p.volume)!==null&&le!==void 0?le:0),description:"\u53EA\u5305\u542B\u5B58\u50A8\u5377,\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55"}}),(0,e.jsx)(T.Z,{statistic:{title:(0,e.jsxs)(J.Z,{children:[(0,e.jsx)("span",{children:"\u6784\u5EFA\u7F13\u5B58"}),(0,e.jsx)(c.Z,{action:function(){return(0,_.c5)()},type:"link",messageSuccess:"\u6E05\u9664\u6210\u529F",onSuccess:function(){be()},children:"\u6E05\u9664"})]}),value:(0,d.FI)((ue=p==null?void 0:p.cache)!==null&&ue!==void 0?ue:0)}})]})}),(0,e.jsx)(Z.Z,{span:"8",children:(0,e.jsxs)(D.Z,{split:"horizontal",children:[(0,e.jsx)(D.Z,{ghost:!0,children:(0,e.jsxs)(T.Z.Group,{children:[(0,e.jsx)(T.Z,{statistic:{title:"\u5BB9\u5668",value:(oe=n==null?void 0:n.info.Containers)!==null&&oe!==void 0?oe:0,description:(0,e.jsx)(k.Link,{to:"/app/list",children:"\u67E5\u770B"})}}),(0,e.jsx)(T.Z.Divider,{}),(0,e.jsx)(T.Z,{statistic:{title:"\u8FD0\u884C\u4E2D",value:(de=n==null?void 0:n.info.ContainersRunning)!==null&&de!==void 0?de:0,status:"success"}}),(0,e.jsx)(T.Z,{statistic:{title:"\u505C\u6B62",value:((ce=n==null?void 0:n.info.ContainersPaused)!==null&&ce!==void 0?ce:0)+((me=n==null?void 0:n.info.ContainersStopped)!==null&&me!==void 0?me:0),status:"error"}}),(0,e.jsx)(T.Z,{statistic:{title:"\u56DE\u6536\u7AD9",value:(_e=n==null?void 0:n.total.containerTask)!==null&&_e!==void 0?_e:0,status:"default",description:(0,e.jsx)(k.Link,{to:"/app/list/recycle",children:"\u67E5\u770B"})}})]})}),(0,e.jsxs)(D.Z,{ghost:!0,children:[(0,e.jsx)(T.Z,{statistic:{title:"\u955C\u50CF",value:"".concat((ve=(n==null?void 0:n.usage.Images)&&n.usage.Images.length)!==null&&ve!==void 0?ve:0),status:"default",description:(0,e.jsx)(k.Link,{to:"/image/list",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(T.Z,{statistic:{title:"\u4EFB\u52A1",value:(fe=n==null?void 0:n.total.imageTask)!==null&&fe!==void 0?fe:0,status:"default",description:(0,e.jsx)(k.Link,{to:"/image/list/build",children:"\u67E5\u770B"})},chartPlacement:"left"})]}),(0,e.jsx)(D.Z,{ghost:!0,children:(0,e.jsx)(T.Z,{statistic:{title:"\u7F51\u7EDC",value:n==null?void 0:n.total.network,status:"default",description:(0,e.jsx)(k.Link,{to:"/docker/network",children:"\u67E5\u770B"})},chartPlacement:"left"})}),(0,e.jsxs)(D.Z,{ghost:!0,children:[(0,e.jsx)(T.Z,{statistic:{title:"\u5B58\u50A8\u5377",value:(he=(n==null?void 0:n.usage.Volumes)&&(n==null?void 0:n.usage.Volumes.length))!==null&&he!==void 0?he:0,status:"default",description:(0,e.jsx)(k.Link,{to:"/docker/volume",children:"\u67E5\u770B"})},chartPlacement:"left"}),(0,e.jsx)(T.Z,{statistic:{title:"\u5907\u4EFD",value:n==null?void 0:n.total.backup,status:"default",description:(0,e.jsx)(k.Link,{to:"/app/backup",children:"\u67E5\u770B"})},chartPlacement:"left"})]})]})})]})})]})}},2831:function(W,b,t){t.d(b,{a:function(){return j},d:function(){return x}});var O=t(15009),s=t.n(O),S=t(99289),o=t.n(S),r=t(54006);function j(){return f.apply(this,arguments)}function f(){return f=o()(s()().mark(function i(){return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,r.request)("/api/common/home/info",{method:"POST"});case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},i)})),f.apply(this,arguments)}function x(){return c.apply(this,arguments)}function c(){return c=o()(s()().mark(function i(){return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,r.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return v.abrupt("return",v.sent);case 3:case"end":return v.stop()}},i)})),c.apply(this,arguments)}},18148:function(W,b,t){t.d(b,{$q:function(){return E},Fj:function(){return R},KG:function(){return j},KX:function(){return q},T8:function(){return v},Xn:function(){return i},ao:function(){return U},c5:function(){return N},c7:function(){return $}});var O=t(15009),s=t.n(O),S=t(99289),o=t.n(S),r=t(54006);function j(_){return f.apply(this,arguments)}function f(){return f=o()(s()().mark(function _(d){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,r.request)("/api/app/image/get-list",{method:"POST",data:d}));case 1:case"end":return a.stop()}},_)})),f.apply(this,arguments)}function x(_){return c.apply(this,arguments)}function c(){return c=_asyncToGenerator(_regeneratorRuntime().mark(function _(d){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,request("/api/app/log/image-build",{method:"POST",data:d});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},_)})),c.apply(this,arguments)}function i(_){return P.apply(this,arguments)}function P(){return P=o()(s()().mark(function _(d){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,r.request)("/api/app/image/get-list-build",{method:"POST",data:d}));case 1:case"end":return a.stop()}},_)})),P.apply(this,arguments)}function v(_){return C.apply(this,arguments)}function C(){return C=o()(s()().mark(function _(d){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/get-build-task",{method:"POST",data:d});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},_)})),C.apply(this,arguments)}function E(_){return e.apply(this,arguments)}function e(){return e=o()(s()().mark(function _(d){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/delete-build-task",{method:"POST",data:d});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},_)})),e.apply(this,arguments)}function U(_){return A.apply(this,arguments)}function A(){return A=o()(s()().mark(function _(d){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/image-delete",{method:"POST",data:d});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},_)})),A.apply(this,arguments)}function $(){return Z.apply(this,arguments)}function Z(){return Z=o()(s()().mark(function _(){return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,r.request)("/api/app/image/image-prune",{method:"POST"});case 2:return g.abrupt("return",g.sent);case 3:case"end":return g.stop()}},_)})),Z.apply(this,arguments)}function N(){return h.apply(this,arguments)}function h(){return h=o()(s()().mark(function _(){return s()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,r.request)("/api/app/image/build-prune",{method:"POST"});case 2:return g.abrupt("return",g.sent);case 3:case"end":return g.stop()}},_)})),h.apply(this,arguments)}function R(_){return V.apply(this,arguments)}function V(){return V=o()(s()().mark(function _(d){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,r.request)("/api/app/image/update-title",{method:"POST",data:d});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},_)})),V.apply(this,arguments)}function q(_){return H.apply(this,arguments)}function H(){return H=o()(s()().mark(function _(d){return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,r.request)("/api/app/image/tag-sync",{method:"POST",data:d}));case 1:case"end":return a.stop()}},_)})),H.apply(this,arguments)}},5251:function(W,b,t){t.d(b,{FI:function(){return s},ZM:function(){return S}});function O(o){return o.trim()}function s(o){var r="";o<.1*1024?r=o.toFixed(2)+"B":o<.1*1024*1024?r=(o/1024).toFixed(2)+"KB":o<1*1024*1024*1024?r=(o/(1024*1024)).toFixed(2)+"MB":r=(o/(1024*1024*1024)).toFixed(2)+"GB";var j=r+"",f=j.indexOf("."),x=j.substr(f+1,2);return x=="00"?j.substring(0,f)+j.substr(f+3,2):r}function S(o){if(o){var r=new Date(o),j=r.getFullYear()+"-",f=(r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1)+"-",x=(r.getDate()<10?"0"+r.getDate():r.getDate())+" ",c=(r.getHours()<10?"0"+r.getHours():r.getHours())+":",i=(r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes())+":",P=r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds();return j+f+x+c+i+P}}}}]);