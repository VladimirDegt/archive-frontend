(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[66],{1011:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var r,i=n(1053),a=n(168),s=n(225),o=n(4567),c=(0,s.Z)(o.Z)(r||(r=(0,a.Z)(["\n  @media (max-width: 375px) {\n    font-size: 12px;\n  }\n"]))),l=n(184),u=n(8646).Box,d=function(){return(0,l.jsx)("footer",{children:(0,l.jsxs)(u,{sx:{backgroundColor:"rgb(48, 56, 70)",paddingTop:3,paddingBottom:3,paddingLeft:1,paddingRight:1,display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)(u,{sx:{width:30,height:30,borderRadius:"50%",overflow:"hidden",marginRight:2},children:(0,l.jsx)("a",{href:"http://www.infocity.kharkov.ua/",target:"_blank",rel:"noopener noreferrer",style:{marginRight:16},children:(0,l.jsx)("img",{src:i,alt:"Logo",width:"30",height:"30"})})}),(0,l.jsx)(c,{paragraph:!0,align:"center",color:"#FAFAFA",sx:{marginBottom:0},children:'Copyright \xa9 2023 \u041a\u041f "\u041c\u0406\u0426". Created by Volodymyr Dehtiarev'})]})})}},5359:function(e,t,n){"use strict";n.d(t,{K:function(){return o}});var r=n(3433),i=n(266),a=n(5239),s=n(184),o=function(e){var t=e.totalRow;return(0,s.jsxs)(i.Z,{maxWidth:"xl",sx:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:2,marginTop:2,marginBottom:2},children:[(0,s.jsx)(a.Z,{animation:"wave",variant:"rounded",sx:{minWidth:300,width:"100%"},height:30}),(0,r.Z)(Array(t)).map((function(e,t){return(0,s.jsx)(a.Z,{variant:"rounded",animation:"wave",sx:{minWidth:300,width:"100%"},height:73},t)})),(0,s.jsx)(a.Z,{animation:"wave",variant:"rounded",sx:{minWidth:300,width:"100%"},height:30})]})}},5066:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return be}});var r,i=n(9439),a=n(2791),s=n(1011),o=n(5861),c=n(4687),l=n.n(c),u=n(5256),d=n(9464),h=n(4554),x=n(4567),f=n(5849),p=n(220),g=n(977),Z=n(5048),m=n(7689),v=n(5574),j=n(5661),A=n(4899),y=n(2861),b=n(3006),C=n(7386),w=n(3433),S=n(266),k=n(5239),D=n(184),R=function(e){var t=e.totalRow;return(0,D.jsxs)(S.Z,{maxWidth:"xl",sx:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:2,marginTop:2,marginBottom:2},children:[(0,D.jsx)(k.Z,{animation:"wave",variant:"rounded",sx:{minWidth:300,width:"100%"},height:30}),(0,D.jsx)(k.Z,{variant:"circular",width:55,height:55,animation:"wave"}),(0,w.Z)(Array(t)).map((function(e,t){return(0,D.jsx)(k.Z,{variant:"rounded",animation:"wave",sx:{minWidth:300,width:"100%"},height:73},t)}))]})},F=n(1686),z=n(5566),B=n(7990),W=n(2123),M=function(e){var t=e.isOpen,n=e.handleClose,r=(e.user,(0,a.useState)(!1)),s=(0,i.Z)(r,2),c=s[0],u=s[1],d=(0,Z.v9)(B.SL),h=(0,Z.I0)(),x=(0,W.Rq)(),g=(0,i.Z)(x,1)[0],m=(0,a.useState)(""),w=(0,i.Z)(m,2),S=w[0],k=w[1],M=function(){var e=(0,o.Z)(l().mark((function e(t){var r,i,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),S){e.next=4;break}return F.Notify.warning("Please choose a file",{position:"center-top",distance:"10px"}),e.abrupt("return");case 4:return(r=new FormData).append("avatar",S),e.prev=6,u(!0),e.next=10,g(r);case 10:if(i=e.sent,u(!1),!i.error){e.next=15;break}return F.Notify.failure(i.error.data.message,{position:"center-top",distance:"10px"}),e.abrupt("return");case 15:F.Notify.success("Avatar is update",{position:"center-top",distance:"10px"}),k(""),n(),a="http://localhost:3001/".concat(i.data),h((0,z.t9)(a)),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),console.log("error",e.t0.message);case 25:case"end":return e.stop()}}),e,null,[[6,22]])})));return function(t){return e.apply(this,arguments)}}();return(0,D.jsx)(v.Z,{open:t,onClose:n,"aria-labelledby":"registration",sx:{position:"absolute",top:"-50%"},children:c?(0,D.jsx)(R,{totalRow:1}):(0,D.jsxs)("form",{onSubmit:M,children:[(0,D.jsx)(j.Z,{id:"registration",sx:{textAlign:"center"},children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443"}),(0,D.jsx)(p.Z,{alt:"avatar",src:d,sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginBottom:2,marginTop:2}}),(0,D.jsxs)(A.Z,{children:[(0,D.jsx)(y.Z,{htmlFor:"file-upload",children:"\u0412\u0438\u0431\u0456\u0440\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443"}),(0,D.jsx)(b.Z,{autoFocus:!0,margin:"dense",name:"avatar",id:"file-upload",type:"file",fullWidth:!0,onChange:function(e){var t=e.target.files[0];k(t)}})]}),(0,D.jsxs)(C.Z,{sx:{paddingRight:3,paddingLeft:3,justifyContent:"center"},children:[(0,D.jsx)(f.Z,{onClick:n,children:"Cancel"}),(0,D.jsx)(f.Z,{type:"submit",children:"\u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})})},H=n(1053),I=n(6488),O=n(6346),E=n(1727),V=n(585),L=n(7031),N=n(1413),U=n(4701),P=n(2626),T=n(6314),K=n(5359),Q=function(e){var t=e.isOpen,n=e.handleClose,r=e.searchDocument,s=e.changeMaxPageAfterFilter,c=(0,a.useState)(!1),u=(0,i.Z)(c,2),d=u[0],h=u[1],x=(0,a.useState)(""),p=(0,i.Z)(x,2),g=p[0],Z=p[1],m=(0,a.useState)(""),S=(0,i.Z)(m,2),k=S[0],R=S[1],z=(0,a.useState)(""),B=(0,i.Z)(z,2),M=B[0],H=B[1],I=(0,a.useState)(!1),O=(0,i.Z)(I,2),E=O[0],V=O[1],L=(0,a.useState)(""),Q=(0,i.Z)(L,2),Y=Q[0],G=Q[1],J=(0,a.useState)(""),X=(0,i.Z)(J,2),q=X[0],_=X[1],$=(0,W.l3)(),ee=(0,i.Z)($,1)[0],te=(0,W.YC)(),ne=(0,i.Z)(te,1)[0],re=(0,W.nE)(),ie=(0,i.Z)(re,1)[0],ae=(0,W.Z3)().data;(0,a.useEffect)((function(){if(ae){G([].concat((0,w.Z)(ae.allNames),[""]));var e=(0,w.Z)(ae.allNumbers),t=e.findIndex((function(e){return"null"===e}));-1!==t&&(e[t]=0);var n=e.sort((function(e,t){return e-t})).map((function(e){return String(e)}));_([].concat((0,w.Z)(n),[""]))}}),[ae]);var se=function(){V(!0)},oe=function(){V(!1)},ce=function(){var e=(0,o.Z)(l().mark((function e(t){var i,a,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"name"!==g){e.next=11;break}if(k){e.next=5;break}return F.Notify.failure("\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0437\u0430\u043c\u043e\u0432\u043d\u0438\u043a\u0430",{position:"center-right",distance:"10px"}),e.abrupt("return");case 5:return h(!0),e.next=8,ee(k);case 8:i=e.sent,h(!1),r(i.data);case 11:if("numberDog"!==g){e.next=22;break}if(M){e.next=15;break}return F.Notify.failure("\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440",{position:"center-right",distance:"10px"}),e.abrupt("return");case 15:return h(!0),e.next=18,ne(M);case 18:a=e.sent,h(!1),0===a.data.length&&F.Notify.failure("\u0414\u043e\u0433\u043e\u0432\u0456\u0440 \u0437 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e",{position:"center-right",distance:"10px"}),r(a.data);case 22:if("numberAct"!==g){e.next=33;break}if(M){e.next=26;break}return F.Notify.failure("\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440",{position:"center-right",distance:"10px"}),e.abrupt("return");case 26:return h(!0),e.next=29,ie(M);case 29:o=e.sent,h(!1),0===o.data.length&&F.Notify.failure("\u0410\u043a\u0442 \u0437 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e",{position:"center-right",distance:"10px"}),r(o.data);case 33:Z(""),R(""),H(""),s(),n();case 38:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,D.jsx)(v.Z,{open:t,onClose:n,"aria-labelledby":"search",sx:{position:"absolute",top:"-50%"},children:d?(0,D.jsx)(K.K,{totalRow:2}):(0,D.jsxs)("form",{onSubmit:ce,children:[(0,D.jsx)(j.Z,{id:"search",sx:{textAlign:"center",minWidth:380},children:"\u041f\u043e\u0448\u0443\u043a"}),(0,D.jsxs)(A.Z,{sx:{height:E?400:"auto"},children:[(0,D.jsx)(y.Z,{id:"option-search",children:"\u0429\u043e \u0448\u0443\u043a\u0430\u0454\u043c\u043e"}),(0,D.jsxs)(U.Z,{labelId:"option-search",value:g,margin:"dense",name:"fieldSearch",type:"text",fullWidth:!0,onChange:function(e){var t=e.target;Z(t.value)},required:!0,children:[(0,D.jsx)(P.Z,{value:"name",children:"\u0417\u0430\u043c\u043e\u0432\u043d\u0438\u043a\u0430"}),(0,D.jsx)(P.Z,{value:"numberDog",children:"\u0414\u043e\u0433\u043e\u0432\u0456\u0440"}),(0,D.jsx)(P.Z,{value:"numberAct",children:"\u0410\u043a\u0442 \u0434\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443"})]}),"name"===g&&(0,D.jsx)(T.Z,{disablePortal:!0,value:k,options:Y,margin:"dense",fullWidth:!0,renderInput:function(e){return(0,D.jsx)(b.Z,(0,N.Z)((0,N.Z)({},e),{},{label:"\u0412\u043b\u0430\u0441\u043d\u0438\u043a"}))},onChange:function(e,t){t&&(R(t),V(!1))},onFocus:se,onBlur:oe,sx:{marginTop:3},required:!0}),("numberDog"===g||"numberAct"===g)&&(0,D.jsx)(T.Z,{disablePortal:!0,value:M,options:q,margin:"dense",fullWidth:!0,renderInput:function(e){return(0,D.jsx)(b.Z,(0,N.Z)((0,N.Z)({},e),{},{label:"\u041d\u043e\u043c\u0435\u0440"}))},onChange:function(e,t){t&&(H(t),V(!1))},onFocus:se,onBlur:oe,sx:{marginTop:3},required:!0})]}),(0,D.jsxs)(C.Z,{sx:{paddingRight:3,paddingLeft:3,justifyContent:"center"},children:[(0,D.jsx)(f.Z,{onClick:n,children:"Cancel"}),(0,D.jsx)(f.Z,{type:"submit",children:"Search"})]})]})})},Y=n(2460),G=n(5705),J=n(6727),X=J.Ry().shape({idFile:J.Z_().min(2,"\u0414\u043e\u0432\u0436\u0438\u043d\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 \u0434\u0432\u043e\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f")}),q=n(168),_=n(225).Z.span(r||(r=(0,q.Z)(["\n  font-size: 12px;\n  color: #1976d2;\n"]))),$={idFile:""},ee=function(e){var t=e.handleClose,n=e.isOpen,r=(0,a.useState)(!1),s=(0,i.Z)(r,2),c=s[0],u=s[1],d=(0,W.nA)(),h=(0,i.Z)(d,1)[0],p=function(){var e=(0,o.Z)(l().mark((function e(n,r){var i,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.idFile,a=r.resetForm,e.prev=2,u(!0),e.next=6,h(i);case 6:u(!1),F.Notify.success("\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d",{position:"center-top",distance:"10px"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message),F.Notify.failure("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0443",{position:"center-top",distance:"10px"});case 14:return e.prev=14,a(),t(),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[2,10,14,18]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,D.jsx)(v.Z,{open:n,onClose:t,"aria-labelledby":"registration",children:c?(0,D.jsx)(K.K,{totalRow:2,sx:{minWidth:444}}):(0,D.jsx)(G.J9,{initialValues:$,onSubmit:p,validationSchema:X,children:function(e){var n=e.errors,r=e.touched;return(0,D.jsxs)(G.l0,{children:[(0,D.jsx)(j.Z,{id:"registration",sx:{textAlign:"center",minWidth:444},children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430"}),(0,D.jsx)(x.Z,{paragraph:!0,sx:{textAlign:"left",fontSize:12,paddingLeft:3,paddingRight:3,margin:0},children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c ID \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0437 \u0440\u044f\u0434\u043a\u0430, \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434:"}),(0,D.jsxs)(x.Z,{paragraph:!0,sx:{textAlign:"left",fontSize:10,paddingLeft:3,paddingRight:3,margin:0},children:["https://edo.vchasno.ua/app/documents/",(0,D.jsx)(_,{children:"46940461-ab53-476e-b320-d7e46cfe5e85"})]}),(0,D.jsxs)(A.Z,{children:[(0,D.jsx)(G.gN,{autoFocus:!0,as:b.Z,name:"idFile",label:"ID file",type:"idFile",fullWidth:!0}),n.idFile&&r.idFile?(0,D.jsx)(x.Z,{paragraph:!0,sx:{color:Y.Z[500],minWidth:444},children:n.idFile}):null]}),(0,D.jsxs)(C.Z,{sx:{paddingRight:3,paddingLeft:3,justifyContent:"center"},children:[(0,D.jsx)(f.Z,{onClick:t,children:"Cancel"}),(0,D.jsx)(f.Z,{type:"submit",children:"Load"})]})]})}})})},te=function(e){var t=e.isOpen,n=e.handleClose,r=e.getDocumentAfterLoadCSV,s=(0,a.useState)(!1),c=(0,i.Z)(s,2),u=c[0],d=c[1],h=(0,a.useState)(""),x=(0,i.Z)(h,2),p=x[0],g=x[1],Z=(0,W.NI)(),m=(0,i.Z)(Z,1)[0],w=(0,W.fq)(),S=(0,i.Z)(w,1)[0],k=function(){var e=(0,o.Z)(l().mark((function e(t){var i,a,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p){e.next=4;break}return F.Notify.warning("Please choose a file",{position:"center-top",distance:"10px"}),e.abrupt("return");case 4:return(i=new FormData).append("csv",p),e.prev=6,d(!0),e.next=10,m(i);case 10:if(a=e.sent,d(!1),!a.error){e.next=15;break}return F.Notify.failure(a.error.data.message,{position:"center-top",distance:"10px"}),e.abrupt("return");case 15:return F.Notify.success("\u0414\u0430\u043d\u0456 \u0437 \u0444\u0430\u0439\u043b\u0443 .csv \u0434\u043e\u0434\u0430\u043d\u0456 \u0434\u043e \u0411\u0414",{position:"center-top",distance:"10px"}),e.next=18,S();case 18:s=e.sent,r(s.data.getFiles),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),console.log("error",e.t0);case 25:return e.prev=25,g(""),n(),e.finish(25);case 29:case"end":return e.stop()}}),e,null,[[6,22,25,29]])})));return function(t){return e.apply(this,arguments)}}();return(0,D.jsx)(v.Z,{open:t,onClose:n,"aria-labelledby":"registration",sx:{position:"absolute",top:"-50%"},children:u?(0,D.jsx)(K.K,{totalRow:1}):(0,D.jsxs)("form",{onSubmit:k,children:[(0,D.jsx)(j.Z,{id:"registration",sx:{textAlign:"center"},children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043b .csv"}),(0,D.jsxs)(A.Z,{children:[(0,D.jsx)(y.Z,{htmlFor:"file-upload",children:"\u0412\u0438\u0431\u0456\u0440\u0438\u0442\u044c \u0444\u0430\u0439\u043b .csv"}),(0,D.jsx)(b.Z,{autoFocus:!0,margin:"dense",name:"file",id:"file-upload",type:"file",fullWidth:!0,onChange:function(e){var t=e.target.files[0];t.name.endsWith(".csv")?g(t):F.Notify.warning("\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0444\u0430\u0439\u043b \u0437 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f\u043c .csv",{position:"center-top",distance:"10px"})}})]}),(0,D.jsxs)(C.Z,{sx:{paddingRight:3,paddingLeft:3,justifyContent:"center"},children:[(0,D.jsx)(f.Z,{onClick:n,children:"Cancel"}),(0,D.jsx)(f.Z,{type:"submit",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})})},ne=n(4721),re=function(e){var t=e.handleClose,n=e.isOpen,r=(0,a.useState)(!1),s=(0,i.Z)(r,2),c=s[0],u=s[1],d=(0,a.useState)([]),p=(0,i.Z)(d,2),g=p[0],Z=p[1],m=(0,a.useState)(""),j=(0,i.Z)(m,2),y=j[0],b=j[1],C=(0,W.m_)(),w=(0,i.Z)(C,1)[0],k=function(){var e=(0,o.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,w();case 3:t=e.sent,u(!1),Z(t.data),n=t.data.reduce((function(e,t){return e+t.count}),0),b(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,D.jsx)(v.Z,{open:n,onClose:t,"aria-labelledby":"copyURL",sx:{position:"absolute",top:"-45%"},children:c?(0,D.jsx)(K.K,{totalRow:3,sx:{minWidth:400}}):(0,D.jsxs)(A.Z,{id:"registration",sx:{textAlign:"center",minWidth:400},children:[(0,D.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,D.jsx)(x.Z,{variant:"h5",align:"center",sx:{marginBottom:2},children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432"}),(0,D.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,D.jsx)(x.Z,{variant:"h6",children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c:"}),(0,D.jsx)(x.Z,{variant:"h6",color:"secondary",children:y})]}),(0,D.jsx)(ne.Z,{sx:{marginBottom:1}}),g.map((function(e){return(0,D.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,D.jsx)(x.Z,{variant:"h6",children:e._id||"\u0422\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043d\u0435 \u0432\u043a\u0430\u0437\u0430\u043d\u043e"}),(0,D.jsx)(x.Z,{variant:"h6",color:"secondary",children:e.count})]},e._id)}))]}),(0,D.jsx)(f.Z,{onClick:function(){t()},sx:{marginTop:2},children:"Cancel"}),(0,D.jsx)(f.Z,{onClick:k,sx:{marginTop:2},children:"\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438"})]})})},ie=function(e){var t=e.getDocumentAfterLoadCSV,n=e.searchDocument,r=e.changeMaxPageAfterFilter,s=(0,Z.I0)(),c=(0,a.useState)(!1),v=(0,i.Z)(c,2),j=v[0],A=v[1],y=(0,a.useState)(!1),b=(0,i.Z)(y,2),C=b[0],w=b[1],S=(0,a.useState)(!1),k=(0,i.Z)(S,2),R=k[0],F=k[1],N=(0,a.useState)(!1),U=(0,i.Z)(N,2),P=U[0],T=U[1],K=(0,a.useState)(!1),Y=(0,i.Z)(K,2),G=Y[0],J=Y[1],X=(0,Z.v9)(B.rK).token,q=(0,Z.v9)(B.SL),_=(0,Z.v9)(B.FB),$=(0,m.s0)(),ne=(0,W._y)(),ie=(0,i.Z)(ne,1)[0],ae=function(){A(!1),w(!1),F(!1),T(!1),J(!1)},se=function(){var e=(0,o.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:e.sent.data||(s((0,z.pQ)()),$("/",{replace:!0})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u.Z,{children:(0,D.jsxs)(d.Z,{children:[(0,D.jsx)(h.Z,{sx:{width:30,height:30,borderRadius:"50%",overflow:"hidden",marginRight:2},children:(0,D.jsx)("a",{href:"http://www.infocity.kharkov.ua/",target:"_blank",rel:"noopener noreferrer",style:{marginRight:16},children:(0,D.jsx)("img",{src:H,alt:"Logo",width:"30",height:"30"})})}),X&&(0,D.jsxs)(x.Z,{variant:"h6",children:["Hi and welcome, ",_,"!"]}),X&&(0,D.jsx)(f.Z,{color:"inherit",onClick:function(){A(!0)},children:(0,D.jsx)(p.Z,{alt:"avatar",src:q,sx:{width:30,height:30}})}),(0,D.jsxs)(h.Z,{sx:{marginLeft:"auto",marginRight:"auto"},children:[X&&(0,D.jsx)(g.Z,{color:"inherit","aria-label":".csv",onClick:function(){T(!0)},sx:{marginLeft:2},children:(0,D.jsx)(O.Z,{fontSize:"large"})}),X&&(0,D.jsx)(g.Z,{color:"inherit","aria-label":"add file",onClick:function(){F(!0)},sx:{marginLeft:2},children:(0,D.jsx)(V.Z,{fontSize:"large"})}),X&&(0,D.jsx)(g.Z,{color:"inherit","aria-label":"reload",onClick:function(){window.location.reload()},sx:{marginLeft:2},children:(0,D.jsx)(L.Z,{fontSize:"large"})}),X&&(0,D.jsx)(g.Z,{color:"inherit","aria-label":"reload",onClick:function(){J(!0)},sx:{marginLeft:2},children:(0,D.jsx)(E.Z,{fontSize:"large"})})]}),X&&(0,D.jsx)(g.Z,{color:"inherit",onClick:se,sx:{marginLeft:"auto"},children:(0,D.jsx)(I.Z,{fontSize:"large"})})]})}),j&&(0,D.jsx)(M,{handleClose:ae,isOpen:j}),R&&(0,D.jsx)(Q,{handleClose:ae,isOpen:R,searchDocument:n,changeMaxPageAfterFilter:r}),C&&(0,D.jsx)(ee,{handleClose:ae,isOpen:C}),P&&(0,D.jsx)(te,{handleClose:ae,isOpen:P,getDocumentAfterLoadCSV:t}),G&&(0,D.jsx)(re,{handleClose:ae,isOpen:G})]})},ae=(0,n(5950).Z)(),se=n(5261),oe=n(4841),ce=n(5416),le=n(2041),ue=n(9195),de=n(8745),he=n(2155),xe=n(3746),fe=n(5560),pe=n(2007),ge=n(194),Ze=function(e){var t=e.handleClose,n=e.isOpen,r=e.viewURLFile;return(0,D.jsx)(v.Z,{open:n,onClose:t,"aria-labelledby":"copyURL",children:(0,D.jsxs)(A.Z,{id:"registration",sx:{textAlign:"center"},children:[(0,D.jsxs)(S.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,D.jsx)(x.Z,{sx:{fontSize:12},align:"left",children:r}),(0,D.jsx)(g.Z,{onClick:function(){navigator.clipboard.writeText(r),t()},children:(0,D.jsx)(ge.Z,{color:"primary"})})]}),(0,D.jsx)(f.Z,{onClick:function(){t()},children:"Cancel"})]})})},me=function(e){if(e){var t=new Date(e);return n(t.getDate())+"-"+n(t.getMonth()+1)+"-"+t.getFullYear()}function n(e){return e<10?"0"+e:e}},ve=function(e){var t=e.searchDocumentDB,n=e.pageContent,r=(0,a.useState)([]),s=(0,i.Z)(r,2),c=s[0],u=s[1],d=(0,a.useState)(!1),h=(0,i.Z)(d,2),x=h[0],f=h[1],p=(0,a.useState)(""),Z=(0,i.Z)(p,2),m=Z[0],v=Z[1],j=(0,a.useState)(!1),A=(0,i.Z)(j,2),y=A[0],b=A[1],C=(0,W.nA)(),w=(0,i.Z)(C,1)[0],S=(0,W.fq)(),k=(0,i.Z)(S,1)[0];(0,a.useEffect)((function(){0!==n.length&&u(n)}),[n]),(0,a.useEffect)((function(){t&&u(t)}),[t]);var R=function(e,t){v(e),e&&b(!0)},z=function(){var e=(0,o.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,w(t);case 3:return f(!1),F.Notify.success("\u0424\u0430\u0439\u043b\u044b \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u0456 \u0443 \u0431\u0430\u0437\u0443",{position:"center-top",distance:"10px"}),e.next=7,k(1);case 7:n=e.sent,u(n.data.getFiles);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,D.jsxs)("main",{style:{flexGrow:1},children:[(0,D.jsx)("section",{children:x?(0,D.jsx)(K.K,{totalRow:10}):(0,D.jsx)(ae,{maxWidth:"xl",sx:{paddingTop:10,minWidth:"100%"},children:(0,D.jsx)(se.Z,{component:oe.Z,children:(0,D.jsxs)(ce.Z,{sx:{minWidth:650},size:"small",children:[(0,D.jsx)(le.Z,{children:(0,D.jsxs)(ue.Z,{children:[(0,D.jsx)(de.Z,{style:{fontWeight:"bold",fontSize:"20px"},children:"\u0417\u0430\u043c\u043e\u0432\u043d\u0438\u043a"}),(0,D.jsx)(de.Z,{align:"left",style:{fontWeight:"bold",fontSize:"20px"},children:"\u0422\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430"}),(0,D.jsx)(de.Z,{align:"left",style:{fontWeight:"bold",fontSize:"20px"},children:"\u0406\u043c'\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430"}),(0,D.jsx)(de.Z,{align:"left",style:{fontWeight:"bold",fontSize:"20px"},children:"\u0414\u043e\u0433\u043e\u0432\u0456\u0440"}),(0,D.jsx)(de.Z,{align:"center",style:{fontWeight:"bold",fontSize:"20px"},children:"\u0414\u0430\u0442\u0430"}),(0,D.jsx)(de.Z,{align:"center",style:{fontWeight:"bold",fontSize:"20px"},children:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 PDF"}),(0,D.jsx)(de.Z,{align:"center",style:{fontWeight:"bold",fontSize:"20px"},children:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 ZIP"}),(0,D.jsx)(de.Z,{align:"left",style:{fontWeight:"bold",fontSize:"20px"},children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0434\u043e \u0430\u0440\u0445\u0456\u0432\u0443"})]})}),(0,D.jsx)(he.Z,{children:null===c||void 0===c?void 0:c.map((function(e){var t=e.idDocument,n=(e.dateCreate,e.nameDocument),r=e.typeDocument,i=(e.emailCustomer,e.nameCustomer),a=e.fileURLPDF,s=e.fileURLZIP,o=e.numberDogovir,c=e.contractStartDate;e.owner;return(0,D.jsxs)(ue.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,D.jsx)(de.Z,{component:"th",scope:"row",children:i}),(0,D.jsx)(de.Z,{align:"left",children:r}),(0,D.jsx)(de.Z,{align:"left",children:n}),(0,D.jsx)(de.Z,{align:"center",children:o}),(0,D.jsx)(de.Z,{align:"center",children:me(c)}),(0,D.jsx)(de.Z,{align:"center",children:(0,D.jsx)(g.Z,{color:""===a?"disabled":"secondary",onClick:function(){return R(a)},children:(0,D.jsx)(xe.Z,{})})}),(0,D.jsx)(de.Z,{align:"center",children:(0,D.jsx)(g.Z,{color:""===s?"disabled":"secondary",onClick:function(){return R(s)},children:(0,D.jsx)(fe.Z,{})})}),(0,D.jsx)(de.Z,{align:"center",children:(0,D.jsx)(g.Z,{color:""===a?"primary":"disabled",disabled:""!==a,onClick:function(){return z(t)},children:(0,D.jsx)(pe.Z,{})})})]},t)}))})]})})})}),y&&(0,D.jsx)(Ze,{handleClose:function(){b(!1)},isOpen:y,viewURLFile:m})]})},je=n(1703),Ae=n(3565),ye=function(e){var t=e.getDocumentCurrentPage,n=e.isFilterOn,r=(0,a.useState)(1),s=(0,i.Z)(r,2),c=s[0],u=s[1],d=(0,a.useState)(1),f=(0,i.Z)(d,2),p=f[0],g=f[1],Z=(0,a.useState)([]),m=(0,i.Z)(Z,2),v=m[0],j=m[1],A=(0,a.useState)(""),y=(0,i.Z)(A,2),b=y[0],C=y[1],w=(0,a.useState)(!1),S=(0,i.Z)(w,2),k=S[0],R=S[1],F=(0,W.fq)(),z=(0,i.Z)(F,1)[0];(0,a.useEffect)((function(){b&&g(Math.ceil(b/12))}),[b]),(0,a.useEffect)((function(){function e(){return(e=(0,o.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(c,12);case 3:t=e.sent,R(!1),j(t.data.getFiles),C(t.data.total),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),R(!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,z]),(0,a.useEffect)((function(){t(v)}),[v,t]),(0,a.useEffect)((function(){n&&g(1)}),[n]);var B=function(){var e=(0,o.Z)(l().mark((function e(t,n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(n);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,D.jsxs)("section",{children:[k&&(0,D.jsx)(x.Z,{paragraph:!0,align:"center",sx:{color:Y.Z[500]},children:"\u0423\u0443\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"}),(0,D.jsx)(h.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,D.jsx)(Ae.Z,{spacing:2,sx:{marginTop:3,marginBottom:3},children:(0,D.jsx)(je.Z,{count:p,color:"primary",page:c,onChange:B})})})]})},be=function(){var e=(0,a.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],o=(0,a.useState)(),c=(0,i.Z)(o,2),l=c[0],u=c[1],d=(0,a.useState)(!1),h=(0,i.Z)(d,2),x=h[0],f=h[1];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(ie,{getDocumentAfterLoadCSV:function(e){r(e)},searchDocument:function(e){u(e)},changeMaxPageAfterFilter:function(){f(!0)}}),(0,D.jsx)(ve,{pageContent:n,searchDocumentDB:l}),(0,D.jsx)(ye,{getDocumentCurrentPage:function(e){r(e)},isFilterOn:x}),(0,D.jsx)(s.$,{})]})}},1727:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"}),"Analytics");t.Z=s},2007:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");t.Z=s},194:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=s},5560:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"FileDownload");t.Z=s},585:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");t.Z=s},7031:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M19.79 5.61C20.3 4.95 19.83 4 19 4H6.83l7.97 7.97 4.99-6.36zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z"}),"FilterAltOff");t.Z=s},6488:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}),"Logout");t.Z=s},6346:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt");t.Z=s},3746:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var i=r(n(5649)),a=n(184),s=(0,i.default)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=s},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(8610)},1053:function(e){"use strict";e.exports="data:image/png;base64,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"},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=66.854e31c0.chunk.js.map