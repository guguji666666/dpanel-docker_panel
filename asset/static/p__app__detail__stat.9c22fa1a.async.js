"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7745],{16664:function(A,h,e){e.d(h,{Z:function(){return m}});var F=e(87462),i=e(67294),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"},s=E,t=e(84089),c=function(b,x){return i.createElement(t.Z,(0,F.Z)({},b,{ref:x,icon:s}))},d=i.forwardRef(c),m=d},27619:function(A,h,e){e.d(h,{Z:function(){return T}});var F=e(97857),i=e.n(F),E=e(19632),s=e.n(E),t=e(5574),c=e.n(t),d=e(64183),m=e(54006),f=e(9361),b=e(67294),x=e(85893);function T(o){var j,R=(0,b.useState)("academy"),M=c()(R,2),y=M[0],C=M[1],I=Math.max.apply(Math,s()(o.data.map(function(O){var l;return(l=O[o.yField])!==null&&l!==void 0?l:0}))),D=(0,m.useAntdConfig)(),u={xField:o.xField,yField:o.yField,height:200,axis:{y:{line:!0},x:{line:!0,grid:{visable:!0},labelAutoRotate:!0}},style:{opacity:.4},tooltip:{channel:"y",valueFormatter:o.yLabelFormatter},scale:{y:{domainMin:(j=o.yDomainMin)!==null&&j!==void 0?j:0,domainMax:o.yDomainMax?o.yDomainMax:o.yDomainMaxCallback?o.yDomainMaxCallback(I):I}},data:o.data};return o.yLabelFormatter&&(u.axis.y.labelFormatter=o.yLabelFormatter),o.colorField&&(u.colorField=o.colorField),(0,b.useEffect)(function(){var O=D.theme.algorithm;O.includes(f.Z.darkAlgorithm)?C("classicDark"):C("academy")},[D]),(0,x.jsx)(d.Z,i()({theme:y},u))}},71890:function(A,h,e){var F=e(15009),i=e.n(F),E=e(99289),s=e.n(E),t=e(67294);function c(d){var m=d.reqFunction,f=d.interval,b=d.maxPolling,x=d.pollingStatus,T=d.inPath,o=(0,t.useRef)(null),j=0,R=function y(){o.current=window.setTimeout(s()(i()().mark(function C(){var I;return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(!(j++>=b)){u.next=3;break}return M(),u.abrupt("return");case 3:if(u.prev=3,!(T&&window.location.href.indexOf(T)==-1)){u.next=7;break}return M(),u.abrupt("return");case 7:return u.next=9,m();case 9:I=u.sent,y(),u.next=17;break;case 13:u.prev=13,u.t0=u.catch(3),M(),console.error("\u8F6E\u8BE2\u53D1\u751F\u9519\u8BEF\uFF1A",u.t0);case 17:case"end":return u.stop()}},C,null,[[3,13]])})),f)},M=function(){console.log("end polling"),o.current&&window.clearTimeout(o.current)};return(0,t.useEffect)(function(){return console.log((x?"start":"waiting")+" polling, max "+b),x&&R(),function(){M()}},[f,b,x]),{endPolling:M}}h.Z=c},24963:function(A,h,e){var F=e(67294),i=(0,F.createContext)({});h.Z=i},42223:function(A,h,e){e.r(h),e.d(h,{default:function(){return $}});var F=e(15009),i=e.n(F),E=e(99289),s=e.n(E),t=e(5574),c=e.n(t),d=e(19632),m=e.n(d),f=e(27619),b=e(71890),x=e(24963),T=e(54006);function o(L){return j.apply(this,arguments)}function j(){return j=s()(i()().mark(function L(W){return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,T.request)("/api/app/container/get-stat-info",{method:"POST",data:W}));case 1:case"end":return v.stop()}},L)})),j.apply(this,arguments)}function R(L){return M.apply(this,arguments)}function M(){return M=s()(i()().mark(function L(W){return i()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,T.request)("/api/app/container/get-process-info",{method:"POST",data:W}));case 1:case"end":return v.stop()}},L)})),M.apply(this,arguments)}var y=e(5251),C=e(12122),I=e(16664),D=e(38345),u=e(63490),O=e(67294),l=e(85893),U=new Date().toLocaleTimeString(),z={total:0,memory:[{date:U,usage:0,source:{usage:0,limit:0}}],cpu:[{date:U,usage:0}],network:[{usage:0,type:"rx",date:U,source:{usage:0}},{usage:0,type:"tx",date:U,source:{usage:0}}],io:[{usage:0,type:"read",date:U,source:{usage:0}},{usage:0,type:"write",date:U,source:{usage:0}}]};function $(){var L=function(r,a){switch(a.type){case"update":var p=new Date(a.payload.read).toLocaleTimeString(),_=a.payload.cpu_stats.cpu_usage.total_usage-a.payload.precpu_stats.cpu_usage.total_usage,k=a.payload.cpu_stats.system_cpu_usage-a.payload.precpu_stats.system_cpu_usage,P={total:r.total+1,memory:[],cpu:[].concat(m()(r.cpu),[{date:p,usage:_/k*a.payload.cpu_stats.online_cpus*100}]),io:[],network:[]};return a.payload.memory_stats&&a.payload.memory_stats.limit&&a.payload.memory_stats.usage&&(P.memory=[].concat(m()(r.memory),[{date:p,usage:Math.round(a.payload.memory_stats.usage),source:{usage:a.payload.memory_stats.usage,limit:a.payload.memory_stats.limit}}])),a.payload.networks&&(P.network=[].concat(m()(r.network),[{date:p,usage:parseFloat(a.payload.networks.eth0.rx_bytes.toFixed(2)),type:"rx",source:{usage:a.payload.networks.eth0.rx_bytes}},{date:p,usage:parseFloat(a.payload.networks.eth0.tx_bytes.toFixed(2)),type:"tx",source:{usage:a.payload.networks.eth0.tx_bytes}}])),a.payload.blkio_stats&&a.payload.blkio_stats.io_service_bytes_recursive&&a.payload.blkio_stats.io_service_bytes_recursive.length>0&&(P.io=[].concat(m()(r.io),[{date:p,usage:parseFloat(a.payload.blkio_stats.io_service_bytes_recursive[0].value.toFixed(2)),type:a.payload.blkio_stats.io_service_bytes_recursive[0].op,source:{usage:a.payload.blkio_stats.io_service_bytes_recursive[0].value}},{date:p,usage:parseFloat(a.payload.blkio_stats.io_service_bytes_recursive[1].value.toFixed(2)),type:a.payload.blkio_stats.io_service_bytes_recursive[1].op,source:{usage:a.payload.blkio_stats.io_service_bytes_recursive[1].value}}])),P}},W=(0,O.useContext)(x.Z),Z=W.loading,v=(0,T.useParams)(),H=(0,O.useReducer)(L,z),B=c()(H,2),n=B[0],G=B[1],Y=(0,O.useState)(0),K=c()(Y,2),N=K[0],J=K[1],Q=(0,O.useState)(),w=c()(Q,2),S=w[0],V=w[1],X=(0,b.Z)({reqFunction:function(){var g=s()(i()().mark(function a(){var p,_;return i()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,o({id:(p=v.id)!==null&&p!==void 0?p:""});case 2:_=P.sent,Z.destroy(),G({type:"update",payload:_});case 5:case"end":return P.stop()}},a)}));function r(){return g.apply(this,arguments)}return r}(),interval:3e3,maxPolling:999,pollingStatus:N!=0,inPath:"tab=stat"});return(0,O.useEffect)(function(){var g,r;Z.show(),o({id:(g=v.id)!==null&&g!==void 0?g:""}).then(function(a){return J(Math.round(a.memory_stats.limit)),!0}),R({id:(r=v.id)!==null&&r!==void 0?r:""}).then(function(a){var p={columns:[],data:[]};a.data.list.Titles.map(function(_){p.columns.push({title:_,label:_,dataIndex:_})}),a.data.list.Processes.map(function(_,k){p.data.push({UID:_[0],PID:_[1],PPID:_[2],C:_[3],STIME:_[4],TTY:_[5],TIME:_[6],CMD:_[7]})}),V(p)})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(D.Z,{direction:"row",wrap:!0,gutter:[20,20],children:[n.memory&&n.memory.length>0&&(0,l.jsx)(D.Z,{colSpan:12,title:(0,l.jsx)(C.Z,{}),subTitle:"Memory usage: ".concat((0,y.FI)(n.memory[n.memory.length-1].source.usage)," / ").concat((0,y.FI)(n.memory[n.memory.length-1].source.limit)),headerBordered:!0,bordered:!0,children:(0,l.jsx)(f.Z,{yField:"usage",xField:"date",data:n.memory,yDomainMaxCallback:function(r){return r*2},yLabelFormatter:function(r){return(0,y.FI)(parseFloat(r))}})}),(0,l.jsx)(D.Z,{colSpan:12,title:(0,l.jsx)(C.Z,{}),subTitle:"Cpu usage: ".concat(n.cpu[n.cpu.length-1].usage.toFixed(2),"%"),headerBordered:!0,bordered:!0,children:(0,l.jsx)(f.Z,{yField:"usage",xField:"date",data:n.cpu,yDomainMaxCallback:function(r){return r*1.5},yLabelFormatter:function(r){return"".concat(r,"%")}})}),n.io&&n.io.length>0&&(0,l.jsx)(D.Z,{colSpan:12,title:(0,l.jsx)(C.Z,{}),subTitle:"I/O: ".concat((0,y.FI)(n.io[n.io.length-1].source.usage)," / ").concat((0,y.FI)(n.io[n.io.length-2].source.usage)),headerBordered:!0,bordered:!0,children:(0,l.jsx)(f.Z,{yField:"usage",xField:"date",colorField:"type",data:n.io,yDomainMaxCallback:function(r){return r*2},yLabelFormatter:function(r){return(0,y.FI)(parseFloat(r))}})}),n.network&&n.network.length>0&&(0,l.jsx)(D.Z,{colSpan:12,title:(0,l.jsx)(C.Z,{}),subTitle:"Network: ".concat((0,y.FI)(n.network[n.network.length-1].source.usage)," / ").concat((0,y.FI)(n.network[n.network.length-2].source.usage)),headerBordered:!0,bordered:!0,children:(0,l.jsx)(f.Z,{yField:"usage",xField:"date",colorField:"type",data:n.network,yDomainMaxCallback:function(r){return r*2},yLabelFormatter:function(r){return(0,y.FI)(parseFloat(r))}})})]}),(0,l.jsx)(D.Z,{title:(0,l.jsx)(I.Z,{}),subTitle:"Progress",children:(0,l.jsx)(u.Z,{scroll:{x:"max-content"},rowKey:"PID",columns:S==null?void 0:S.columns,dataSource:S==null?void 0:S.data,pagination:{pageSize:10}})})]})}},5251:function(A,h,e){e.d(h,{FI:function(){return i},ZM:function(){return E}});function F(s){return s.trim()}function i(s){var t="";s<.1*1024?t=s.toFixed(2)+"B":s<.1*1024*1024?t=(s/1024).toFixed(2)+"KB":s<1*1024*1024*1024?t=(s/(1024*1024)).toFixed(2)+"MB":t=(s/(1024*1024*1024)).toFixed(2)+"GB";var c=t+"",d=c.indexOf("."),m=c.substring(d+1,d+3);return m=="00"?c.substring(0,d)+c.substr(d+3,2):t}function E(s){if(s){var t=new Date(s),c=t.getFullYear()+"-",d=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",m=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",f=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",b=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",x=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return c+d+m+f+b+x}}}}]);