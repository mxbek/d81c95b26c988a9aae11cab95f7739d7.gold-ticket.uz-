if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const o=e=>l(e,n),c={module:{uri:n},exports:u,require:o};s[n]=Promise.all(i.map((e=>c[e]||o(e)))).then((e=>(r(...e),u)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"golden-ticket"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/759.17c373fb.css",revision:null},{url:"/css/884.6109bc10.css",revision:null},{url:"/css/app.346f77db.css",revision:null},{url:"/img/buy_tickets.c65e33b8.svg",revision:null},{url:"/img/cashback.190bde35.svg",revision:null},{url:"/img/game.298ce898.svg",revision:null},{url:"/img/gd-default.6a91f35b.png",revision:null},{url:"/img/give_a_dream.e68bf14b.svg",revision:null},{url:"/img/it-park.0b0ebf21.png",revision:null},{url:"/img/participation.eae2bd2e.svg",revision:null},{url:"/img/rectangle-night.84fc0492.svg",revision:null},{url:"/img/rectangle-premium.374ee6c6.svg",revision:null},{url:"/img/rectangle.205b77b1.svg",revision:null},{url:"/img/slider_1_ru.b262bb93.svg",revision:null},{url:"/img/slider_1_uz.ad3417f0.svg",revision:null},{url:"/img/terms.703c663b.svg",revision:null},{url:"/index.html",revision:"c6788c8753c8488fd76d1f4ece5027cb"},{url:"/js/275.fb8e7512.js",revision:null},{url:"/js/326.c60ea34b.js",revision:null},{url:"/js/378.0d7180e2.js",revision:null},{url:"/js/587.840297e7.js",revision:null},{url:"/js/73.fbe19395.js",revision:null},{url:"/js/759.12ec7ae3.js",revision:null},{url:"/js/788.c6c43697.js",revision:null},{url:"/js/837.44e351c5.js",revision:null},{url:"/js/852.fe856820.js",revision:null},{url:"/js/884.99682f25.js",revision:null},{url:"/js/927.44167679.js",revision:null},{url:"/js/989.1c3e419a.js",revision:null},{url:"/js/app.00662402.js",revision:null},{url:"/js/chunk-vendors.ed26d2ad.js",revision:null},{url:"/manifest.json",revision:"6e050d794f766061a3e79c8981128183"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
