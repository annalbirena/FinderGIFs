(this.webpackJsonpgifos=this.webpackJsonpgifos||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),s=c.n(r),i=(c(11),c(2)),o=c(0),u=Object(n.createContext)(),j=function(e){var t=e.children,c=Object(n.useState)(!1),a=Object(i.a)(c,2),r=a[0],s=a[1];return Object(o.jsx)(u.Provider,{value:{darkTheme:r,setDarkTheme:s},children:t})},l=Object(n.createContext)(),d=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1],u=Object(n.useState)(!1),j=Object(i.a)(u,2),d=j[0],h=j[1];return Object(o.jsx)(l.Provider,{value:{gifs:r,setGifs:s,loading:d,setLoading:h},children:t})},h=(c(13),c.p+"static/media/logo-desktop.2f122678.svg"),b=c.p+"static/media/logo-mobile-modo-noct.47e214b1.svg";var f=function(){var e=Object(n.useContext)(u),t=e.darkTheme,c=e.setDarkTheme;return Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"bar"}),Object(o.jsxs)("div",{className:"header-container",children:[Object(o.jsx)("figure",{children:Object(o.jsx)("img",{src:t?b:h,alt:"Logo"})}),Object(o.jsx)("button",{className:"btn",onClick:function(){return c(!t)},children:"MODO ".concat(t?"LIGHT":"DARK")})]})]})},O=c(3),g=c.n(O),x=c(4),m=(c(15),c.p+"static/media/ilustra_header.9d4669b1.svg"),v=c.p+"static/media/icon-search.657bf939.svg",p=c.p+"static/media/icon-search-mod-noc.ecc2b197.svg",k="https://api.giphy.com/v1/gifs",N="y9ipSTqAhw2gWIahsIfPSdTOTM9WA8eP",y="/search",S="/search/tags",T="/trending",C="".concat(k).concat(y,"?api_key=").concat(N),w="".concat(k).concat(S,"?api_key=").concat(N),A="".concat(k).concat(T,"?api_key=").concat(N);var _=function(){return{getFetchSearch:function(e,t){return fetch("".concat(C,"&q=").concat(e,"&limit=").concat(t))},getFetchAutocomplete:function(e,t){return fetch("".concat(w,"&q=").concat(e,"&limit=").concat(t))},getFetchTrending:function(e){return fetch("".concat(A,"&limit=").concat(e))}}};var F=function(){var e=Object(n.useContext)(u).darkTheme,t=Object(n.useContext)(l),c=t.setGifs,a=t.setLoading,r=Object(n.useState)(""),s=Object(i.a)(r,2),j=s[0],d=s[1],h=Object(n.useState)([]),b=Object(i.a)(h,2),f=b[0],O=b[1],k=Object(n.useState)(""),N=Object(i.a)(k,2),y=N[0],S=N[1],T=_(),C=T.getFetchSearch,w=T.getFetchAutocomplete,A=function(e){S(e.target.innerText),d(""),O([])};return Object(n.useEffect)((function(){if(j.length>0){var e=function(){var e=Object(x.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(j,5);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,O(c.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Algo salio mal: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[j]),Object(n.useEffect)((function(){if(y.length>0){var e=function(){var e=Object(x.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,C(y,15);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,c(n.data),a(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Algo salio mal: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}}),[y]),Object(o.jsxs)("div",{className:"section-search",children:[Object(o.jsxs)("h1",{children:["\xa1Inspirate y busca los mejores ",Object(o.jsx)("span",{children:"GIFS"}),"!"]}),Object(o.jsx)("figure",{children:Object(o.jsx)("img",{className:"img-header",src:m,alt:"Imagen de personas saludando"})}),Object(o.jsxs)("div",{className:"form",children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S(j),d(""),O([])},className:"input-container",children:[Object(o.jsx)("input",{type:"text",placeholder:"Busca gifs",onChange:function(e){d(e.target.value)},value:j}),Object(o.jsx)("button",{className:"btn-search",children:Object(o.jsx)("img",{src:e?v:p,alt:"searchicon"})})]}),f.length>0&&Object(o.jsx)("div",{className:"suggestion-list",children:Object(o.jsx)("ul",{children:f.map((function(t){return Object(o.jsxs)("li",{onClick:A,children:[Object(o.jsx)("img",{className:"search-icon",src:e?p:v,alt:"searchicon"}),t.name]})}))})})]})]})},I=(c(16),c(17),c.p+"static/media/oval.3b24a6b9.svg");var D=function(){return Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)("figure",{children:Object(o.jsx)("img",{className:"loader-img",src:I,alt:""})})})};c(18);var G=function(){return Object(o.jsx)("div",{className:"alert",children:Object(o.jsx)("span",{children:"Oops! No hay gifs de esa categoria"})})};var L=function(){var e=Object(n.useContext)(l),t=e.gifs,c=e.setGifs,a=e.loading,r=e.setLoading,s=_().getFetchTrending;return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,s(15);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,c(n.data),r(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Algo salio mal: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(o.jsx)("div",{className:"gifs-section",children:a?Object(o.jsx)(D,{}):t.length?Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Resultados de la Busqueda"}),Object(o.jsx)("div",{className:"grid-gifs",children:t.map((function(e){return Object(o.jsx)("figure",{children:Object(o.jsx)("a",{href:e.bitly_gif_url,target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:e.images.fixed_height.url,alt:e.title})})},e.id)}))})]}):Object(o.jsx)(G,{})})};var q=function(){var e=Object(n.useContext)(u).darkTheme;return Object(o.jsxs)("div",{className:"App","data-theme":e?"dark":"",children:[Object(o.jsx)(f,{}),Object(o.jsxs)(d,{children:[Object(o.jsx)(F,{}),Object(o.jsx)(L,{})]})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{children:Object(o.jsx)(q,{})})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.562ffc72.chunk.js.map