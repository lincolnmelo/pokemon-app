(this["webpackJsonpmeu-app"]=this["webpackJsonpmeu-app"]||[]).push([[0],{57:function(e,a,t){e.exports=t(74)},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t.n(o),i=(t(62),t(63),t(31)),l=t(108),s=t(109),u=t(110),m=t(105),p=t(111),d=t(99),f=t(10),h=t(49),g=t.n(h),v=t(50),E=t.n(v),b=t(101),w=t(41),k=t(43),y=t(27),j=t.n(y),O=t(102),N=t(103),x=t(106),I=t(104),B=t(107),R=t(48),S=t.n(R),W=(t(64),t(35)),C=t(113),G=Object(d.a)((function(e){return{root:{width:"80%","& > * + *":{marginTop:e.spacing(2)}}}}));function M(){var e=G(),a=r.a.useState(0),t=Object(W.a)(a,2),n=t[0],o=t[1],c=r.a.useState(10),i=Object(W.a)(c,2),l=i[0],s=i[1],u=r.a.useRef((function(){}));return r.a.useEffect((function(){u.current=function(){if(n>100)o(0),s(10);else{var e=10*Math.random(),a=10*Math.random();o(n+e),s(n+e+a)}}})),r.a.useEffect((function(){var e=setInterval((function(){u.current()}),500);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{variant:"buffer",value:n,valueBuffer:l}),r.a.createElement(C.a,{variant:"buffer",value:n,valueBuffer:l,color:"secondary"}))}function J(){var e=Object(w.a)(["\n  {\n    pokemons(first: 10){\n      id\n      name\n      image\n      types\n      evolutions {\n        name\n        image\n      }\n      attacks{\n        fast{\n          name\n          damage\n        }\n        special{\n          name\n          damage\n        }\n      }\n    }\n  }\n"]);return J=function(){return e},e}var L=Object(d.a)({grid:{padding:5},card:{maxWidth:345}}),P=j()(J());function T(){var e=L(),a=Object(k.a)(P),t=a.loading,n=a.error,o=a.data;return t?r.a.createElement(M,null):n?r.a.createElement("p",null,"Error ..."):o.pokemons.map((function(a){return r.a.createElement(b.a,{className:e.grid},r.a.createElement(O.a,{key:a.name,className:e.card},r.a.createElement(N.a,null,r.a.createElement("img",{className:"img",src:a.image,alt:""}),r.a.createElement(I.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.name),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},"Tipo: ",a.types))),r.a.createElement(x.a,null,r.a.createElement(B.a,{size:"small",color:"primary"},r.a.createElement(S.a,{edge:"start",className:e.menuButton,color:"primary","aria-label":"Mais"})))))}))}var q=Object(d.a)((function(e){return{root:{flexGrow:1,padding:10},paper:{padding:e.spacing(3),textAlign:"center",color:e.palette.text.secondary}}}));function z(){var e=q();return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(T,null)))}var A=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(i.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(i.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(i.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}}));function $(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(g.a,null)),r.a.createElement(m.a,{className:e.title,variant:"h6",noWrap:!0},"Pokemons"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(E.a,null)),r.a.createElement(p.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})))),r.a.createElement(z,null))}var D=function(){return r.a.createElement($,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=t(51),H=t(14),K=new F.a({uri:"https://graphql-pokemon.now.sh/"}),Q=r.a.createElement(H.a,{client:K},r.a.createElement(D,null));c.a.render(Q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.9eee1733.chunk.js.map