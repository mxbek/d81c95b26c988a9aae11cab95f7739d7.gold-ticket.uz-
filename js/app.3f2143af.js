(function(){"use strict";var e={1425:function(e,n,t){var o=t(6369),r=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(t(6265),{name:"App",mounted(){document.title="Golden Tickets";const e=window.Telegram.WebApp,n=e.initDataUnsafe,t=e.themeParams;0===Object.keys(n).length||"undefined"===typeof n.user?window.location.href="https://gold-ticket.uz":(e.expand(),"dark"===e.colorScheme?(e.backgroundColor="#1c1c1c",t.button_color="#e5ab34"):(e.backgroundColor="#e2e2e2",t.button_color="#e5ab34"))}}),c=a,u=t(1001),f=(0,u.Z)(c,r,i,!1,null,"3a0e3330",null),l=f.exports,s=t(9907);(0,s.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=t(2631);o.ZP.use(d.ZP);const p=[{path:"/",name:"Home",component:()=>t.e(214).then(t.bind(t,6214))},{path:"/participation",name:"Participation",component:()=>t.e(129).then(t.bind(t,2129))},{path:"/qr-code-cashback",name:"QrCodeCashBack",component:()=>t.e(27).then(t.bind(t,3027))},{path:"/partners",name:"Partners",component:()=>t.e(33).then(t.bind(t,4033))},{path:"/market",name:"Ticket Market",component:()=>t.e(788).then(t.bind(t,6788))},{path:"/partner/:alias",name:"PartnerView",component:()=>t.e(326).then(t.bind(t,9326))},{path:"/profile",name:"Profile",component:()=>t.e(632).then(t.bind(t,5033))},{path:"/my-tickets",name:"MyTickets",component:()=>t.e(894).then(t.bind(t,7894))},{path:"/give-a-dream",name:"Give a Dream",component:()=>t.e(171).then(t.bind(t,6171))},{path:"/settings",name:"Settings",component:()=>t.e(870).then(t.bind(t,6870))},{path:"/terms",name:"Terms",component:()=>t.e(924).then(t.bind(t,924))},{path:"/policy",name:"Policy",component:()=>t.e(924).then(t.bind(t,924))}],h=new d.ZP({mode:"history",base:"/",routes:p});var m=h;o.ZP.config.productionTip=!1,new o.ZP({router:m,render:e=>e(l)}).$mount("#app"),$(document).keydown((function(e){1!=e.ctrlKey||"61"!=e.which&&"107"!=e.which&&"173"!=e.which&&"109"!=e.which&&"187"!=e.which&&"189"!=e.which||e.preventDefault()})),$(window).bind("mousewheel DOMMouseScroll",(function(e){1==e.ctrlKey&&e.preventDefault()}))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{27:"1750c082",33:"7d0b4a3d",129:"2d4f1a9d",171:"c52bdb13",214:"d79d80b5",326:"c60ea34b",632:"f2206f7b",788:"72c6bb89",870:"849982a1",894:"7fb9f6c2",924:"22511b92"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{129:"20bb7283",632:"8b0b5c42",870:"dbf2ff8e"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="golden-ticket:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+i){c=s;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),c=t.p+a;if(n(a,c))return r();e(o,c,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={129:1,632:1,870:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],u=o[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var l=u(t)}for(n&&n(o);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1425)}));o=t.O(o)})();
//# sourceMappingURL=app.3f2143af.js.map