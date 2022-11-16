(function(){"use strict";var e={8069:function(e,n,t){var r=t(6369),o=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={name:"App",mounted(){document.title="Golden Tickets",0===Object.keys(Telegram.WebApp.initDataUnsafe).length||"undefined"===typeof Telegram.WebApp.initDataUnsafe.user?window.location.href="https://gold-ticket.uz":(Telegram.WebApp.expand(),"dark"===Telegram.WebApp.colorScheme?(Telegram.WebApp.backgroundColor="#1c1c1c",Telegram.WebApp.themeParams.button_color="#e5ab34"):(Telegram.WebApp.backgroundColor="#e2e2e2",Telegram.WebApp.themeParams.button_color="#e5ab34"))}},c=i,u=t(1001),s=(0,u.Z)(c,o,a,!1,null,"333ac601",null),l=s.exports,p=t(5431);(0,p.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=t(2631);r.ZP.use(d.ZP);const f=[{path:"/",name:"Home",component:()=>t.e(295).then(t.bind(t,4295))},{path:"/participation",name:"Participation",component:()=>t.e(102).then(t.bind(t,102))},{path:"/qr-code-cashback",name:"QrCodeCashBack",component:()=>t.e(73).then(t.bind(t,4073))},{path:"/partners",name:"Partners",component:()=>t.e(837).then(t.bind(t,9837))},{path:"/market",name:"Ticket Market",component:()=>t.e(788).then(t.bind(t,6788))},{path:"/partner/:alias",name:"PartnerView",component:()=>t.e(326).then(t.bind(t,9326))},{path:"/profile",name:"Profile",component:()=>t.e(11).then(t.bind(t,7011))},{path:"/my-tickets",name:"MyTickets",component:()=>t.e(927).then(t.bind(t,1927))},{path:"/give-a-dream",name:"Give a Dream",component:()=>t.e(424).then(t.bind(t,3424))},{path:"/settings",name:"Settings",component:()=>t.e(947).then(t.bind(t,1947))},{path:"/terms",name:"Terms",component:()=>t.e(852).then(t.bind(t,5852))},{path:"/policy",name:"Policy",component:()=>t.e(989).then(t.bind(t,7989))}],m=new d.ZP({mode:"history",base:"/",routes:f});var h=m,g=t(7139),b=t(6265),v=t.n(b);const k="https://server.gold-ticket.uz/api";r.ZP.use(g.ZP);var y=new g.ZP.Store({state:{agreed:null,lang:null,name:null,phone:null,photo:null,premium:null,username:null,tickets:null,tickets_count:null},getters:{},mutations:{setUser(e,n){e.agreed=n.agreed,e.lang=n.lang,e.name=n.name,e.phone=n.phone,e.photo=n.photo,e.premium=n.premium,e.username=n.username},setTickets(e,n){e.tickets=n.tickets_data,e.tickets_count=n.tickets_total}},actions:{async getUser({commit:e},n){try{const n=await v().post(`${k}/user/1821252109`);e("setUser",n.data)}catch(t){throw e("error",t.response.data),t}},async updateUser(){},async getTickets(){}}});r.ZP.config.productionTip=!1,new r.ZP({router:h,store:y,render:e=>e(l)}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{11:"2aa45115",73:"fbe19395",102:"f4c22eb7",295:"c0752cd9",326:"c60ea34b",424:"721bd649",788:"c6c43697",837:"44e351c5",852:"fe856820",927:"44167679",947:"8c848c04",989:"1c3e419a"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{11:"5e6cf6e8",102:"18fc0db9",947:"89bae8c4"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="golden-ticket:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==n+a){c=p;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={11:1,102:1,947:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var l=u(t)}for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8069)}));r=t.O(r)})();
//# sourceMappingURL=app.5f9d6278.js.map