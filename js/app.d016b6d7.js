(function(){"use strict";var e={3310:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i={name:"App",async mounted(){if(document.title="Golden Tickets",0===Object.keys(Telegram.WebApp.initDataUnsafe).length||"undefined"===typeof Telegram.WebApp.initDataUnsafe.user)window.location.href="https://gold-ticket.uz";else{if(document.body.setAttribute("app-color-scheme",Telegram.WebApp.colorScheme),Telegram.WebApp.onEvent("themeChanged",(function(){document.body.setAttribute("app-color-scheme",Telegram.WebApp.colorScheme)})),!sessionStorage.getItem("__sombra_gt_appLang")){const e=new URLSearchParams(window.location.search);sessionStorage.setItem("__sombra_gt_appLang",e.get("lang"))}Telegram.WebApp.expand(),document.body.classList.add(Telegram.WebApp.platform),"dark"===Telegram.WebApp.colorScheme?(Telegram.WebApp.setBackgroundColor="#1c1c1c",Telegram.WebApp.themeParams.button_color="#e5ab34"):(Telegram.WebApp.setBackgroundColor="#e2e2e2",Telegram.WebApp.themeParams.button_color="#e5ab34"),await this.$store.dispatch("getUser",Telegram.WebApp.initDataUnsafe.user.id),this.$store.state.agreed||this.$router.push("/terms")}}},s=i,c=n(1001),u=(0,c.Z)(s,o,a,!1,null,"f93535be",null),l=u.exports,p=n(5431);(0,p.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n(3822),m=n(6265),f=n.n(m),h=n(2631);let g;r.ZP.use(h.ZP),g="tdesktop"===Telegram.WebApp.platform||"webz"===Telegram.WebApp.platform?n.e(56).then(n.bind(n,8056)):n.e(157).then(n.bind(n,3157));const b=[{path:"/",name:"Home",component:()=>g},{path:"/participation",name:"Participation",component:()=>n.e(60).then(n.bind(n,6060))},{path:"/qr-code-cashback",name:"QrCodeCashBack",component:()=>n.e(525).then(n.bind(n,5525))},{path:"/partners",name:"Partners",component:()=>n.e(605).then(n.bind(n,4605))},{path:"/market",name:"Ticket Market",component:()=>n.e(727).then(n.bind(n,4727))},{path:"/partner/:alias",name:"PartnerView",component:()=>n.e(326).then(n.bind(n,9326))},{path:"/profile",name:"Profile",component:()=>n.e(434).then(n.bind(n,6434))},{path:"/my-tickets",name:"MyTickets",component:()=>n.e(533).then(n.bind(n,4533))},{path:"/give-a-dream",name:"Give a Dream",component:()=>n.e(993).then(n.bind(n,4993))},{path:"/settings",name:"Settings",component:()=>n.e(529).then(n.bind(n,2529))},{path:"/terms",name:"Terms",component:()=>n.e(831).then(n.bind(n,5831))},{path:"/policy",name:"Policy",component:()=>n.e(323).then(n.bind(n,3323))}],v=new h.ZP({mode:"history",base:"/",routes:b});var y=v;const k="https://server.gold-ticket.uz/api";r.ZP.use(d.ZP);var w=new d.ZP.Store({state:{user_id:null,agreed:null,lang:null,name:null,phone:null,photo:null,premium:null,premium_class:null,username:null,tickets:null,tickets_count:0,errors:null,error:null,platform:Telegram.WebApp.platform},getters:{},mutations:{setUser(e,t){e.user_id=t.user_id,e.agreed=t.agreed,e.lang=t.lang,e.name=t.name,e.phone=t.phone,e.photo=t.photo,e.premium_class=t.subscription?"":"active",e.premium=t.subscription,e.username=t.username},setTickets(e,t){e.tickets=t.data,e.tickets_count=t.total},userUpdateProfile(e,t){!0===t?(Telegram.WebApp.MainButton.hideProgress(),"ru"===e.lang?Telegram.WebApp.showPopup({title:"Успешно",message:"Ваши данные успешно сохранены",buttons:[{id:"success",type:"ok",text:"Ок"}]}):Telegram.WebApp.showPopup({title:"Muvofaqiyatli!",message:"Sizning malumotlaringiz muvofatqiyatli saqlandi",buttons:[{id:"success",type:"ok",text:"Ok"}]}),Telegram.WebApp.MainButton.hide(),y.push("/")):Telegram.WebApp.showPopup(t)},userAgreedAccess(e,t){!0===t&&(e.agreed=!0,y.push("/"))},error(e){e.errors?Telegram.WebApp.showPopup=e.errors:Telegram.WebApp.showPopup=e.error}},actions:{async getUser({commit:e},t){try{const n=await f().get(`${k}/user/${t}`);n.data.data.user_id=t,e("setUser",n.data.data)}catch(n){throw e("error",n.response.data),n}},async updateUser({commit:e},t){try{await f().post(`${k}/user/${t.user_id}`,t.data),e("userUpdateProfile",!0)}catch(n){e("userUpdateProfile",t)}},async userAgreed({commit:e},t){try{await f().post(`${k}/user/${t.user_id}`,t.data),e("userAgreedAccess",!0)}catch(n){e("error",!1)}},async getTickets({commit:e},t){try{const n=await f().get(`${k}/ticket/${t}`);e("setTickets",n.data)}catch(n){e("error",n.response.data)}}}}),A=(n(2371),n(2904));r.ZP.directive("mask",A.e9),r.ZP.config.productionTip=!1,new r.ZP({store:w,router:y,render:e=>e(l)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{56:"6c8c108e",60:"c1bb2817",157:"c6d2dcde",323:"258effec",326:"c60ea34b",434:"c5d84718",525:"2327a239",529:"efe86527",533:"354e117d",605:"96d410f0",727:"32a7ad1e",831:"c3c5d58e",993:"f7cc2355"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{56:"1f5455db",434:"fcaf9a0f",529:"db3a1c8c",605:"d872ab5f",727:"97c050c7"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="golden-ticket:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={56:1,434:1,529:1,605:1,727:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3310)}));r=n.O(r)})();
//# sourceMappingURL=app.d016b6d7.js.map