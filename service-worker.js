if(!self.define){let s,i={};const e=(e,l)=>(e=new URL(e+".js",l).href,i[e]||new Promise((i=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=i,document.head.appendChild(s)}else s=e,importScripts(e),i()})).then((()=>{let s=i[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let u={};const o=s=>e(s,n),c={module:{uri:n},exports:u,require:o};i[n]=Promise.all(l.map((s=>c[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"golden-ticket"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/129.20bb7283.css",revision:null},{url:"/css/632.8b0b5c42.css",revision:null},{url:"/css/870.dbf2ff8e.css",revision:null},{url:"/css/app.37be050f.css",revision:null},{url:"/img/banner.2f2ac564.png",revision:null},{url:"/img/gd-default.6a91f35b.png",revision:null},{url:"/img/giv-a-dream.924c908d.svg",revision:null},{url:"/img/humans.e5315692.svg",revision:null},{url:"/img/it-park.0b0ebf21.png",revision:null},{url:"/img/participation.eae2bd2e.svg",revision:null},{url:"/img/rectangle-night.84fc0492.svg",revision:null},{url:"/img/rectangle.205b77b1.svg",revision:null},{url:"/img/service-participate.0c44863f.svg",revision:null},{url:"/img/service-partners.c54eb57a.svg",revision:null},{url:"/img/service-ticket-game.c6fbc222.svg",revision:null},{url:"/img/terms.703c663b.svg",revision:null},{url:"/index.html",revision:"14bb5cb36c1a38721d6eca15a994dca6"},{url:"/js/129.2d4f1a9d.js",revision:null},{url:"/js/171.c52bdb13.js",revision:null},{url:"/js/27.1750c082.js",revision:null},{url:"/js/306.525d0347.js",revision:null},{url:"/js/326.c60ea34b.js",revision:null},{url:"/js/33.7d0b4a3d.js",revision:null},{url:"/js/632.f2206f7b.js",revision:null},{url:"/js/788.72c6bb89.js",revision:null},{url:"/js/870.849982a1.js",revision:null},{url:"/js/894.7fb9f6c2.js",revision:null},{url:"/js/924.22511b92.js",revision:null},{url:"/js/app.48ca4e8e.js",revision:null},{url:"/js/chunk-vendors.08a8585f.js",revision:null},{url:"/manifest.json",revision:"6e050d794f766061a3e79c8981128183"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
