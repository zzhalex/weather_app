(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(0),c=a.n(i),r=a(10),s=a.n(r),o=(a(84),a(27)),l=(a(85),a(144)),d=a(147),j=a(149),u=a(45),h=a(150),p=Object(l.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));var b=function(e){var t=p();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsx)(d.a,{position:"static",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(u.a,{variant:"h6",className:t.title,children:"Weather App"}),e.islogin&&Object(n.jsx)(h.a,{color:"inherit",onClick:function(){localStorage.removeItem("weatherapptoekn"),e.signAction(!1)},children:"Sign Out"})]})})})},g=a(67),m=a(159),O=a(155),x=a(63),f=a.n(x),v=a(151),w=a(152),N=a(153),y=a(154),S=Object(l.a)((function(e){return{root:{width:345,marginTop:35,paddingLeft:40,textAlign:"center"},temp:{fontSize:30,color:"#000",margin:12},content:{display:"flex"},group:{margin:12,fontSize:13,width:"100%"},title:{fontSize:24,textAlign:"center"},right:{width:"50%"}}}));var C=function(e){var t=S();return void 0===e.data.city?Object(n.jsx)("div",{}):Object(n.jsxs)(v.a,{className:t.root,children:[Object(n.jsx)(w.a,{avatar:Object(n.jsx)("img",{className:"uk-border-circle",width:"40",height:"40",alt:"icon",src:" http://openweathermap.org/img/wn/"+e.data.icon+"@2x.png"}),title:Object(n.jsx)("div",{className:t.title,children:e.data.city}),subheader:Object(n.jsxs)("div",{className:t.subheader,children:[e.data.weather,", ",e.data.tempRange]})}),Object(n.jsx)(N.a,{children:Object(n.jsxs)("div",{className:t.content,children:[Object(n.jsx)("div",{className:t.temp,children:e.data.temp}),Object(n.jsxs)("div",{className:t.right,children:[Object(n.jsx)("div",{className:t.group,children:e.data.des}),Object(n.jsxs)("div",{className:t.group,children:["humidity:",e.data.humidity]})]})]})}),Object(n.jsx)(y.a,{disableSpacing:!0})]})},k=a(44),A=a.n(k),I=Object(l.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:440,height:50},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function B(e){13===(e.charCode||e.keyCode)&&e.preventDefault()}var D=function(){var e=I(),t=Object(i.useRef)(null),a=Object(i.useState)({}),c=Object(o.a)(a,2),r=c[0],s=c[1];return Object(n.jsxs)("div",{className:"Display",children:[Object(n.jsxs)(g.a,{component:"form",className:e.root,children:[Object(n.jsx)(m.a,{className:e.input,placeholder:"City...",inputRef:t,onKeyDown:B}),Object(n.jsx)(O.a,{className:e.iconButton,"aria-label":"search",onClick:function(){var e=t.current.value;e.trim().length>0&&A.a.get("/v1/weather",{params:{city:e},headers:{Authorization:localStorage.getItem("weatherapptoekn")}}).then((function(e){s(e.data)})).catch((function(e){var t=401===e.response.status?e.response.data:"Something wrong, please try again later";alert(t)}))},children:Object(n.jsx)(f.a,{})})]}),Object(n.jsx)(C,{data:r})]})},L=a(157),z=a(160),F=a(65),P=a.n(F),R=Object(l.a)((function(e){return{root:{width:450,height:220,display:"flex",flexDirection:"column",justifyContent:"center",position:"relative","& > *":{margin:e.spacing(1)}},loginBut:{width:120,margin:"auto"},tooltip:{width:24,height:24,position:"absolute",right:110,bottom:6}}}));var T=function(e){var t=Object(i.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(i.useState)(""),l=Object(o.a)(s,2),d=l[0],j=l[1],u=R(),p=0===c.length&&0===d.length;return Object(n.jsxs)("form",{className:u.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(L.a,{id:"username",label:"Username",variant:"outlined",value:c,onChange:function(e){return r(e.target.value)}}),Object(n.jsx)(L.a,{id:"password",type:"password",label:"Password",variant:"outlined",value:d,onChange:function(e){return j(e.target.value)}}),Object(n.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){A.a.post("/auth/login",{username:c,pwd:d}).then((function(t){localStorage.setItem("weatherapptoekn",t.data),e.signAction(!0)})).catch((function(e){console.log(e.response),alert(e.response.data)}))},disabled:p,className:u.loginBut,children:"Log In"}),Object(n.jsx)(z.a,{title:"username:admin,password:123456",arrow:!0,children:Object(n.jsx)(O.a,{className:u.tooltip,color:"primary","aria-label":"",component:"span",children:Object(n.jsx)(P.a,{})})})]})};var E=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=function(e){c(e)};Object(i.useEffect)((function(){localStorage.getItem("weatherapptoekn")&&c(!0)}),[]);var s=a?Object(n.jsx)(D,{}):Object(n.jsx)(T,{signAction:r});return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)(b,{islogin:a,signAction:r})}),Object(n.jsx)("main",{className:"App-main",children:s})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),G()},84:function(e,t,a){},85:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.947e308e.chunk.js.map