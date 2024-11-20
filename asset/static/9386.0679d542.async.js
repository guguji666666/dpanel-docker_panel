"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9386],{44771:function(U,E,r){r.d(E,{Z:function(){return l}});var g=r(34041),a=r(25449),O=r(67294),u=r(85893);function l(P){return(0,u.jsx)(a.Z,{label:P.label,name:"restart",initialValue:P.defaultValue?P.defaultValue:"on-failure",children:(0,u.jsx)(g.Z,{options:[{value:"no",label:"\u4E0D\u91CD\u542F"},{value:"on-failure",label:"\u5931\u8D25\u540E\u91CD\u542F\uFF08\u9ED8\u8BA45\u6B21\uFF09"},{value:"unless-stopped",label:"\u672A\u624B\u52A8\u505C\u6B62\u5219\u91CD\u542F"},{value:"always",label:"\u4E00\u76F4\u91CD\u542F"}]})})}},4798:function(U,E,r){var g=r(15009),a=r.n(g),O=r(99289),u=r.n(O),l=r(5574),P=r.n(l),i=r(24963),I=r(14946),d=r(64789),C=r(38345),p=r(17186),m=r(24739),c=r(5966),_=r(62370),D=r(10641),A=r(31418),M=r(25593),W=r(85576),v=r(66309),L=r(42075),b=r(14726),t=r(67294),n=r(85893),o=(0,t.forwardRef)(function(e,S){var N=(0,t.useContext)(i.Z),$=N.notice,Z=(0,t.useState)(!1),K=P()(Z,2),G=K[0],y=K[1],k=(0,t.useRef)(),x=A.Z.useApp();(0,t.useImperativeHandle)(S,function(){return{}});var F=function(f){var s,T,R=!1,w=(s=(T=k.current)===null||T===void 0?void 0:T.getList())!==null&&s!==void 0?s:[];if(w.map(function(h){h.name==f.name&&(R=!0)}),!R){var B;(B=k.current)===null||B===void 0||B.add(f)}};return(0,n.jsxs)(C.Z,{title:"\u5173\u8054\u7F51\u7EDC",headerBordered:!0,children:[(0,n.jsx)(p.u,{name:"network",actionRef:k,creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u7F51\u7EDC"},actionGuard:{beforeAddRow:function(f,s){return!e.siteName||e.siteName==""||typeof e.siteName=="undefined"?($.error("\u8BF7\u8F93\u5165\u7AD9\u70B9\u6807\u8BC6"),!1):(y(!0),!1)}},copyIconProps:!1,min:0,itemRender:function(f,s){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.UW,{children:[(0,n.jsx)(c.Z,{label:"\u7F51\u7EDC\u540D\u79F0",name:"name",width:"md",disabled:!0,fieldProps:{value:s.record.name}}),(0,n.jsx)(_.Z,{label:"\u8BBF\u95EEHostname",name:"alise",children:s.record.alise!=""&&(0,n.jsx)(M.Z.Text,{code:!0,copyable:!0,children:s.record.alise})}),(0,n.jsx)(_.Z,{label:" ",children:f.action})]}),(0,n.jsx)(m.UW,{children:(0,n.jsx)(c.Z,{label:"\u6307\u5B9AIpV4",name:"ipV4",width:"md",fieldProps:{addonAfter:s.record.subnet}})})]})}}),(0,n.jsx)(W.Z,{title:"\u9009\u62E9\u7F51\u7EDC",width:1024,footer:!1,open:G,onCancel:function(){return y(!1)},children:(0,n.jsx)(D.Z,{rowKey:"Name",toolBarRender:!1,columns:[{title:"\u540D\u79F0",dataIndex:"Name",render:function(f,s,T,R,w){return s.Name=="none"||s.Name=="bridge"||s.Name=="host"?(0,n.jsxs)(n.Fragment,{children:[s.Name," ",(0,n.jsx)(v.Z,{color:"blue",children:"System"})]}):(0,n.jsx)(n.Fragment,{children:f})}},{title:"\u7C7B\u578B",ellipsis:!0,width:80,dataIndex:"Driver",search:!1},{title:"IPAM Driver",ellipsis:!0,width:120,search:!1,dataIndex:["IPAM","Driver"]},{title:"IPV4 IPAM Network",search:!1,dataIndex:["IPAM","Config",0,"Subnet"],render:function(f,s,T,R,w){return(0,n.jsxs)(L.Z,{children:[s.IPAM.Config&&s.IPAM.Config[0]&&"".concat(s.IPAM.Config[0].Subnet," - ").concat(s.IPAM.Config[0].Gateway),s.IPAM.Config&&s.IPAM.Config[1]&&"".concat(s.IPAM.Config[1].Subnet," - ").concat(s.IPAM.Config[1].Gateway)]})}},{title:"\u64CD\u4F5C",width:100,search:!1,render:function(f,s,T,R,w){return[(0,n.jsx)(b.ZP,{type:"link",onClick:function(){var h;F({name:s.Name,alise:[((h=e.siteName)!==null&&h!==void 0?h:"")+".pod.dpanel.local"],subnet:s.IPAM.Config[0].Subnet}),y(!1)},children:(0,n.jsx)(d.Z,{})},s.Id)]}}],request:function(){var j=u()(a()().mark(function f(s,T,R){var w;return a()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,I.jR)({name:s.Name});case 2:return w=h.sent,h.abrupt("return",{data:w.data.list,success:!0,total:w.data.list.length});case 4:case"end":return h.stop()}},f)}));return function(f,s,T){return j.apply(this,arguments)}}(),pagination:{pageSize:10}})})]})});E.Z=o},78451:function(U,E,r){r.d(E,{Z:function(){return O}});var g=r(67294),a=r(85893);function O(u){return(0,a.jsx)("span",{style:{wordBreak:"break-word"},children:u.content})}},62597:function(U,E,r){r.d(E,{$G:function(){return P},Ct:function(){return A},Tb:function(){return C},XH:function(){return m},cl:function(){return I},iE:function(){return _},lK:function(){return L},xb:function(){return W}});var g=r(15009),a=r.n(g),O=r(99289),u=r.n(O),l=r(54006);function P(t){return i.apply(this,arguments)}function i(){return i=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/site/create-by-image",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),i.apply(this,arguments)}function I(t){return d.apply(this,arguments)}function d(){return d=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/site/get-list",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function C(t){return p.apply(this,arguments)}function p(){return p=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.download=!1,e.next=3,(0,l.request)("/api/app/log/run",{method:"POST",data:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},t)})),p.apply(this,arguments)}function m(t){return c.apply(this,arguments)}function c(){return c=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.download=!0,e.next=3,(0,l.request)("/api/app/log/run",{method:"POST",data:n,responseType:"blob"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},t)})),c.apply(this,arguments)}function _(t){return D.apply(this,arguments)}function D(){return D=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/site/get-detail",{data:n,method:"POST"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function A(t){return M.apply(this,arguments)}function M(){return M=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/container/delete",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),M.apply(this,arguments)}function W(t){return v.apply(this,arguments)}function v(){return v=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/site/delete",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),v.apply(this,arguments)}function L(t){return b.apply(this,arguments)}function b(){return b=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/site/update-title",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),b.apply(this,arguments)}},2831:function(U,E,r){r.d(E,{Ll:function(){return I},aF:function(){return P},d6:function(){return C}});var g=r(15009),a=r.n(g),O=r(99289),u=r.n(O),l=r(54006);function P(){return i.apply(this,arguments)}function i(){return i=u()(a()().mark(function m(){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,l.request)("/api/common/home/info",{method:"POST"});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},m)})),i.apply(this,arguments)}function I(){return d.apply(this,arguments)}function d(){return d=u()(a()().mark(function m(){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,l.request)("/api/common/home/usage",{method:"POST"});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},m)})),d.apply(this,arguments)}function C(){return p.apply(this,arguments)}function p(){return p=u()(a()().mark(function m(){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,(0,l.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return _.abrupt("return",_.sent);case 3:case"end":return _.stop()}},m)})),p.apply(this,arguments)}},14946:function(U,E,r){r.d(E,{CI:function(){return C},HY:function(){return W},IS:function(){return P},XY:function(){return _},_3:function(){return L},_x:function(){return m},jR:function(){return I},t9:function(){return A}});var g=r(15009),a=r.n(g),O=r(99289),u=r.n(O),l=r(54006);function P(t){return i.apply(this,arguments)}function i(){return i=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/network/get-detail",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),i.apply(this,arguments)}function I(t){return d.apply(this,arguments)}function d(){return d=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/network/get-list",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),d.apply(this,arguments)}function C(){return p.apply(this,arguments)}function p(){return p=u()(a()().mark(function t(){return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,l.request)("/api/app/network/prune",{method:"POST"});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},t)})),p.apply(this,arguments)}function m(t){return c.apply(this,arguments)}function c(){return c=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/network/delete",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),c.apply(this,arguments)}function _(t){return D.apply(this,arguments)}function D(){return D=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/network/create",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function A(t){return M.apply(this,arguments)}function M(){return M=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/network/disconnect",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),M.apply(this,arguments)}function W(t){return v.apply(this,arguments)}function v(){return v=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.request)("/api/app/network/connect",{method:"POST",data:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},t)})),v.apply(this,arguments)}function L(t){return b.apply(this,arguments)}function b(){return b=u()(a()().mark(function t(n){return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.request)("/api/app/network/get-container-list",{method:"POST",data:n}));case 1:case"end":return e.stop()}},t)})),b.apply(this,arguments)}}}]);