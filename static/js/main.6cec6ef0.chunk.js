(this["webpackJsonpreact-js-template"]=this["webpackJsonpreact-js-template"]||[]).push([[0],{10:function(t,e,a){t.exports={fotoItem:"FotoItem_fotoItem__3C2Yx",fotoImg:"FotoItem_fotoImg__13K2i",heart:"FotoItem_heart__3tgdT",iconCart:"FotoItem_iconCart__2xqLs"}},16:function(t,e,a){t.exports={pageSection:"src_pageSection__oqIUv"}},22:function(t,e,a){t.exports={carritoImgItem:"Carrito_carritoImgItem__3AGG_",basura:"Carrito_basura__2y7H8"}},32:function(t,e,a){t.exports={fotoGrid:"Productos_fotoGrid__1X_JX"}},45:function(t,e,a){"use strict";a.r(e);var c,o=a(24),n=a(4),r=a(2),i=a(25),s=a(26),u=a(16),l=a.n(u),j=a(0),d="#ff5555",b=s.a.p(c||(c=Object(i.a)(["\nfont-size: 1.2em;\ncolor: ",";\n& span {\n    font-weight: bold;\n        /** Styled Components puede utilizar las props como una funci\xf3n an\xf3nima que recibe estas props en su primer par\xe1metro **/\n        color: ","\n    }\n"])),d,(function(t){return t.colorBlue?"blue":d})),h=function(){var t=Object(r.h)(),e=new URLSearchParams(t.search);return console.log(e.get("id")),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:l.a.titulo,children:"\xa1Bienvenid@ a mi homepage!"}),Object(j.jsxs)(b,{children:["Este es un ",Object(j.jsx)("span",{children:"subtitulo"})," creado con Styled Components"]})]})},f=a(9),m=a.n(f),p=function(){return Object(j.jsx)("header",{className:m.a.mainHeader,children:Object(j.jsxs)("div",{className:m.a.container,children:[Object(j.jsx)("h1",{children:Object(j.jsx)(n.b,{to:"/",children:"MiTienda"})}),Object(j.jsx)("nav",{className:m.a.navigation,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(n.c,{activeClassName:m.a.activo,to:"/productos",children:"Productos"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.c,{activeClassName:m.a.activo,to:"/nosotros",children:"Sobre Nosotros"})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.c,{to:"/carrito",activeClassName:m.a.activo,children:Object(j.jsx)("i",{className:"fas fa-shopping-cart"})})})]})})]})})},O=a(12),x=a(1),g=a(31),v=a(15),_={toggleFavoritas:"[Fotos]  A\xf1adir o quitar foto a favoritas",toggleCarrito:"[Fotos] A\xf1adir o quitar foto del carrito",fetchFotos:"[Fotos] Guardar las fotos del fetch"},C=function(t,e){switch(e.type){case _.toggleFavoritas:return t.map((function(t){return t.id===e.payload?Object(v.a)(Object(v.a)({},t),{},{esFavorita:!t.esFavorita}):t}));case _.toggleCarrito:return t.map((function(t){return t.id===e.payload?Object(v.a)(Object(v.a)({},t),{},{enCarrito:!t.enCarrito}):t}));case _.fetchFotos:return e.payload;default:return t}},N=a(21),y=a.n(N),F=a(30),I=function(){var t=Object(F.a)(y.a.mark((function t(){var e,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/Ivluengo/tienda-fotos-react-typescript/main/src/fotos-animales/listaFotos.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=[{id:0,url:"",esFavorita:!1,enCarrito:!1}],P=Object(x.createContext)(),S=function(t){var e=t.children,a=Object(x.useReducer)(C,q),c=Object(O.a)(a,2),o=c[0],n=c[1];return Object(x.useEffect)((function(){I().then((function(t){n({type:_.fetchFotos,payload:t})}))}),[]),Object(j.jsx)(P.Provider,{value:[o,n],children:e})},k=function(){return Object(x.useContext)(P)[0]},w=function(){return Object(x.useContext)(P)[1]},B=a(10),E=a.n(B),G=function(t){var e=t.foto,a=w(),c=Object(x.useState)(!1),o=Object(O.a)(c,2),n=o[0],r=o[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:E.a.fotoItem,onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:[e.esFavorita?Object(j.jsx)("i",{onClick:function(){return a({type:_.toggleFavoritas,payload:e.id})},className:"fas fa-heart ".concat(E.a.heart)}):n?Object(j.jsx)("i",{onClick:function(){return a({type:_.toggleFavoritas,payload:e.id})},className:"far fa-heart ".concat(E.a.heart)}):void 0,e.enCarrito?Object(j.jsx)("i",{onClick:function(){return a({type:_.toggleCarrito,payload:e.id})},className:"fas fa-shopping-cart ".concat(E.a.iconCart)}):n?Object(j.jsx)("i",{onClick:function(){return a({type:_.toggleCarrito,payload:e.id})},className:"fas fa-plus-circle ".concat(E.a.iconCart)}):void 0,Object(j.jsx)(g.a,{smooth:!0,to:"/productos/".concat(e.id,"#detalle"),children:Object(j.jsx)("img",{className:E.a.fotoImg,src:e.url,alt:e.url})})]})})},A=function(){var t=Object(r.i)(),e=k().find((function(e){return Number(e.id)===Number(t.productId)}));return Object(j.jsxs)("div",{id:"detalle",children:[Object(j.jsx)("h1",{children:"\xa1Producto al detalle!"}),Object(j.jsx)(G,{foto:e}),Object(j.jsx)("h4",{children:"Precio: 3,99\u20ac"})]})},T=a(32),H=a.n(T),L=function(){var t=k();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"P\xe1gina de Productos"}),Object(j.jsx)("main",{className:H.a.fotoGrid,children:t.map((function(t){return Object(j.jsx)(G,{foto:t},t.id)}))}),Object(j.jsx)(r.b,{exact:!0,path:"/productos/:productId/",children:Object(j.jsx)(A,{})})]})},J=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam in nulla nobis doloribus facilis illo accusantium officiis veniam dolorum voluptas, tempore consectetur iste ullam sequi alias modi quibusdam quod ipsa! Distinctio minima odio dicta doloremque non alias expedita, architecto fugit debitis vel consequuntur quibusdam earum laudantium. Dolores distinctio expedita dolor."})})},M=function(){var t=Object(r.g)();return console.log(t),setTimeout((function(){t.push("/")}),3e3),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Te has confundido y esta p\xe1gina no existe"}),Object(j.jsx)("h4",{children:"En unos segundos vas a ser redirigido a nuestra p\xe1gina de inicio"})]})},z=a(22),D=a.n(z),R=function(){var t=k(),e=w(),a=t.filter((function(t){return t.enCarrito})),c=Object(x.useState)(0),o=Object(O.a)(c,2),n=o[0],r=o[1];return Object(x.useEffect)((function(){r(3.99*a.length)}),[a.length]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Carrito de fotos"}),a.map((function(t){return Object(j.jsxs)("div",{className:D.a.carritoImgItem,children:[Object(j.jsx)("img",{src:t.url,alt:t.url}),Object(j.jsx)("h4",{children:"Precio: 3.99\u20ac"}),Object(j.jsx)("i",{className:"fas fa-trash ".concat(D.a.basura),onClick:function(){return e({type:_.toggleCarrito,payload:t.id})}})]},t.id)})),Object(j.jsxs)("h3",{children:["Total = ",n]})]})},U=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(S,{children:[Object(j.jsx)(p,{}),Object(j.jsx)("section",{className:l.a.pageSection,children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",children:Object(j.jsx)(h,{})}),Object(j.jsx)(r.b,{path:"/home",children:Object(j.jsx)(r.a,{to:"/"})}),Object(j.jsx)(r.b,{path:"/productos",children:Object(j.jsx)(L,{})}),Object(j.jsx)(r.b,{path:"/nosotros",children:Object(j.jsx)(J,{})}),Object(j.jsx)(r.b,{path:"/carrito",component:R}),Object(j.jsx)(r.b,{path:"*",children:Object(j.jsx)(M,{})})]})})]})})};o.render(Object(j.jsx)(n.a,{basename:"/",children:Object(j.jsx)(U,{})}),document.getElementById("root"))},9:function(t,e,a){t.exports={mainHeader:"NavBar_mainHeader__3AWcI",container:"NavBar_container__vP8q0",navigation:"NavBar_navigation__231Wr",activo:"NavBar_activo__1yg8P"}}},[[45,1,2]]]);
//# sourceMappingURL=main.6cec6ef0.chunk.js.map