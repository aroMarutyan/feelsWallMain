(this["webpackJsonponly-farts-website"]=this["webpackJsonponly-farts-website"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),c=n(35),i=n.n(c),s=(n(120),n(22)),o=n(9),l=(n(121),n(55)),d=n(30),m={apiKey:"AIzaSyDjgyLNtnol6-PggLgIqUKuHOfWpxX6Q-g",authDomain:"sendamessageof.firebaseapp.com",projectId:"sendamessageof",storageBucket:"sendamessageof.appspot.com",messagingSenderId:"705239841314",appId:"1:705239841314:web:c4661d098d4d1af1ece87b"},u=(Object(l.a)(m),Object(d.b)()),f=n(57),h=[320,640,768,1440],b=window.innerWidth>h[1],j=Object(f.a)({media:{bp0:"(min-width: ".concat(h[0],"px)"),bp1:"(min-width: ".concat(h[1],"px)"),bp2:"(min-width: ".concat(h[2],"px)"),bp3:"(min-width: ".concat(h[3],"px)")}}),g=(j.styled,j.css),p=function(e,t){return e+(t-e)*((window.innerWidth-h[0])/16/((h[3]-h[0])/16))},x=(window.innerWidth-320)/1120,O=function(e,t,n){return[(e*n-Math.pow(t,2))/(e-2*t+n),Math.pow(t-e,2)/(e-2*t+n),2*Math.log((n-t)/(t-e))]},v=function(e,t,n,a){return e+t*Math.exp(n*a)},w=O(0,5,14),y=v(w[0],w[1],w[2],x),k=O(135,223.5,310),C=v(k[0],k[1],k[2],x),S=n(56),M=n(13),V=n(14),N=n(31),I=new Map;I.set("sad","rgb(29, 32, 222)").set("happy","green").set("disgusted","purple").set("love","rgb(230, 24, 119)").set("surprised","orange").set("afraid","rgb(206, 217, 17)").set("angry","red").set("indifferent","gray");var R=n(11),T=function(e){var t=e.messages,n=p(1.8,4.6),r=p(1.3,2.2),c=p(1.3,2.6),i=g({height:"95vh",width:"95vw",display:"grid",variants:{variant:{mobile:{gridTemplateColumns:"1fr",gridTemplateRows:"1fr 1fr 1fr"},desktop:{gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr"}}}}),s=g({variants:{variant:{desktop:{gridRow:"1 /span 2"}}}}),o=g({fontSize:"clamp(".concat(1.8,"rem, ").concat(n,"rem, ").concat(4.6,"rem)"),color:"black"}),l=g({fontSize:"clamp(".concat(1.3,"rem, ").concat(c,"rem, ").concat(2.6,"rem)"),color:"black",listStyle:"none",placeSelf:"center"}),d=2*C+50+50,m=2*C+50+50;Object(a.useEffect)((function(){!function(){N.c("#pie-container").select("svg").remove();var e=N.c("#pie-container").append("svg").attr("width",d).attr("height",m).append("g").attr("transform","translate(".concat(d/2,", ").concat(m/2,")")),t=N.a().innerRadius(0).outerRadius(C),n=N.b().padAngle(0).value((function(e){return e[1]})),a=e.selectAll().data(n(h)).enter();a.append("path").attr("d",t).style("fill",(function(e){return I.get(e.data[0])})).style("stroke","#ffffff").style("stroke-width",0),a.append("text").attr("text-anchor","middle").attr("alignment-baseline","middle").text((function(e){return e.data[0]})).style("fill","white").style("text-anchor","middle").style("font-size","clamp(".concat(1.3,"rem, ").concat(r,"rem, ").concat(2.2,"rem)")).attr("transform",(function(e){return"translate(".concat(t.centroid(e),")")}))}()}),[t]);var u,f,h=function(e){var t=e.map((function(e){return e.emotion}));return Object(V.a)(new Set(t)).map((function(e){return[e,t.filter((function(t){return t===e})).length]})).sort()}(t),j=document.getElementById("breakdown-list");return h&&(u=h,f=j,null!==j&&function(e){for(;e.firstChild;)e.firstChild.remove()}(j),u.forEach((function(e){var t=document.createElement("li");t.innerHTML="".concat(e[1]," ").concat(e[1]>1?"people are":"person is"," ").concat("love"===e[0]?"in":""," ").concat(e[0]),f.appendChild(t)}))),Object(R.jsxs)("div",{className:i({variant:b?"desktop":"mobile"}),children:[Object(R.jsx)("div",{id:"pie-container",className:s({variant:b&&"desktop"})}),Object(R.jsxs)("h1",{className:o(),children:["Feelings Shared: ",t.length]}),Object(R.jsx)("ul",{className:l(),id:"breakdown-list"})]})},E=function(e){var t=e.message,n=e.isVisible,r=p(1.6,2.8),c=Object(a.useState)(m(30)),i=Object(o.a)(c,2),s=i[0],l=i[1],d=g({color:I.get(t.emotion),width:"75%",fontSize:"clamp(".concat(1.6,"rem, ").concat(r,"rem, ").concat(2.8,"rem)"),transform:"rotate(".concat(s,"deg)")});function m(e){return"".concat(Math.random()>=.5?"+":"-").concat(Math.random()*e)}return Object(a.useEffect)((function(){n&&l(m(30))}),[n]),Object(R.jsx)(R.Fragment,{children:Object(R.jsx)("h3",{className:d(),children:t.message})})},z=(n(52),n(43)),D=function(e){var t=e.messages,n=e.xCorrectionValue,r=e.yCorrectionValue,c=e.tension,i=window.innerWidth,s=Object(a.useState)(!0),l=Object(o.a)(s,2),d=l[0],m=l[1],u=Object(a.useState)(""),f=Object(o.a)(u,2),b=f[0],j=f[1],g=Object(a.useState)(M(y)),p=Object(o.a)(g,2),x=p[0],O=p[1],v=Object(a.useState)(V(Math.random()>=.5?"+":"-",y)),w=Object(o.a)(v,2),k=w[0],C=w[1],S=Object(z.useTransition)(d,{from:{x:x,y:k,opacity:0,filter:"blur(0.5px)"},enter:{x:x,y:k,opacity:1},leave:{opacity:0},config:{mass:1,tension:c,friction:30},onRest:function(){return m(!d)}});function M(e){var t=function(e){return e+Math.floor(Math.random()*n)+"%"};return t(i<=h[0]?1:i>=h[3]?15:e)}function V(e,t){return function(e,t){return e+(t+Math.floor(Math.random()*r))+"%"}(e,t)}return Object(a.useEffect)((function(){d&&(j(t[Math.floor(Math.random()*t.length)]),O(M(y)),C(V(Math.random()>=.5?"+":"-",y)))}),[d]),Object(R.jsx)("div",{className:"containerr",style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:S((function(e,t){return t?Object(R.jsx)(z.animated.div,{style:e,children:Object(R.jsx)(E,{message:b,isVisible:d})}):""}))})},W=function(e){var t=e.messages,n=g({height:"88vh",width:"95vw",display:"grid",gridGap:"1rem",placeItems:"center",variants:{variant:{mobile:{gridTemplateColumns:"1fr",gridTemplateRows:"1fr 1fr 1fr"},desktop:{gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr"}}}});return Object(R.jsxs)("div",{className:n({variant:b?"desktop":"mobile"}),children:[t.length&&b&&Object(R.jsx)(D,{messages:t,tension:"33",xCorrectionValue:25,yCorrectionValue:40}),t.length&&b&&Object(R.jsx)(D,{messages:t,tension:"27",xCorrectionValue:25,yCorrectionValue:40}),t.length&&b&&Object(R.jsx)(D,{messages:t,tension:"48",xCorrectionValue:25,yCorrectionValue:40}),t.length&&Object(R.jsx)(D,{messages:t,tension:"36",xCorrectionValue:25,yCorrectionValue:40}),t.length&&Object(R.jsx)(D,{messages:t,tension:"41",xCorrectionValue:25,yCorrectionValue:40}),t.length&&Object(R.jsx)(D,{messages:t,tension:"53",xCorrectionValue:25,yCorrectionValue:40})]})};var A=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=g({textAlign:"center"}),i=g({backgroundImage:'url("img/background_wals_white_generated.jpg")',backgroundSize:"auto",minHeight:"90vh",fontFamily:"blankRiver",fontSize:"16px",color:"white"}),l=g({display:"flex",alignItems:"center",color:"black",backgroundColor:"transparent",minHeight:"1vh"}),m=g({marginLeft:"2rem",marginRight:"1rem",textDecoration:"none"}),f=g({marginTop:"0.4rem",marginRight:"1rem",textDecoration:"none"});return Object(a.useEffect)((function(){return Object(d.c)(Object(d.a)(u,"messages"),(function(e){return r(e.docs.map((function(e){return Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(R.jsxs)("div",{className:c(),children:[Object(R.jsx)("nav",{children:Object(R.jsxs)("div",{className:l(),children:[Object(R.jsx)("h1",{className:m(),children:Object(R.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/",children:"FeelsWall"})}),Object(R.jsx)("span",{className:f(),children:Object(R.jsx)("a",{style:{textDecoration:"none",color:"black"},href:"/stats",children:"Statistics"})})]})}),Object(R.jsx)("main",{className:i(),children:Object(R.jsx)(S.a,{children:Object(R.jsxs)(M.c,{children:[Object(R.jsx)(M.a,{path:"/",exact:!0,element:Object(R.jsx)(W,{messages:n})}),Object(R.jsx)(M.a,{path:"/stats",exact:!0,element:Object(R.jsx)(T,{messages:n})})]})})})]})};i.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(A,{})}),document.getElementById("root"))},52:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.3a011aa8.chunk.js.map