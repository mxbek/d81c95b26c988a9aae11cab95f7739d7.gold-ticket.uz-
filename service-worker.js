if(!self.define){let s,l={};const i=(i,e)=>(i=new URL(i+".js",e).href,l[i]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=l,document.head.appendChild(s)}else s=i,importScripts(i),l()})).then((()=>{let s=l[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(e,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let u={};const c=s=>i(s,n),o={module:{uri:n},exports:u,require:c};l[n]=Promise.all(e.map((s=>o[s]||c(s)))).then((s=>(r(...s),u)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"golden-ticket"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/197.a6b6ab60.css",revision:null},{url:"/css/283.900d6e40.css",revision:null},{url:"/css/56.1f5455db.css",revision:null},{url:"/css/738.5c10d619.css",revision:null},{url:"/css/866.21308492.css",revision:null},{url:"/css/app.538431cd.css",revision:null},{url:"/img/buy_tickets.c65e33b8.svg",revision:null},{url:"/img/cashback.190bde35.svg",revision:null},{url:"/img/game.298ce898.svg",revision:null},{url:"/img/gd-default.6a91f35b.png",revision:null},{url:"/img/give_a_dream.e68bf14b.svg",revision:null},{url:"/img/it-park.0b0ebf21.png",revision:null},{url:"/img/participation.eae2bd2e.svg",revision:null},{url:"/img/rectangle-night.84fc0492.svg",revision:null},{url:"/img/rectangle-premium.374ee6c6.svg",revision:null},{url:"/img/rectangle.205b77b1.svg",revision:null},{url:"/img/slider_1_ru.b262bb93.svg",revision:null},{url:"/img/slider_1_uz.ad3417f0.svg",revision:null},{url:"/img/terms.703c663b.svg",revision:null},{url:"/index.html",revision:"7f63572e82a2cdc25c60c87894ffc3b0"},{url:"/js/197.5375a91f.js",revision:null},{url:"/js/203.0c58d1ab.js",revision:null},{url:"/js/283.c85873f5.js",revision:null},{url:"/js/326.c60ea34b.js",revision:null},{url:"/js/378.ad0cc402.js",revision:null},{url:"/js/453.1c7f9c67.js",revision:null},{url:"/js/490.eabbf795.js",revision:null},{url:"/js/525.2327a239.js",revision:null},{url:"/js/56.6c8c108e.js",revision:null},{url:"/js/624.61b29c1f.js",revision:null},{url:"/js/738.6b17c798.js",revision:null},{url:"/js/866.cc60d9b5.js",revision:null},{url:"/js/893.9988daa6.js",revision:null},{url:"/js/app.8b249314.js",revision:null},{url:"/js/chunk-vendors.e6a7fe2b.js",revision:null},{url:"/manifest.json",revision:"6e050d794f766061a3e79c8981128183"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
