if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const o=e=>i(e,n),c={module:{uri:n},exports:u,require:o};s[n]=Promise.all(l.map((e=>c[e]||o(e)))).then((e=>(r(...e),u)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"golden-ticket"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/762.e5f0b6de.css",revision:null},{url:"/css/870.dbf2ff8e.css",revision:null},{url:"/css/918.9f6c3b62.css",revision:null},{url:"/css/app.37be050f.css",revision:null},{url:"/img/banner.2f2ac564.png",revision:null},{url:"/img/gd-default.6a91f35b.png",revision:null},{url:"/img/giv-a-dream.924c908d.svg",revision:null},{url:"/img/humans.e5315692.svg",revision:null},{url:"/img/it-park.0b0ebf21.png",revision:null},{url:"/img/participation.eae2bd2e.svg",revision:null},{url:"/img/rectangle-night.84fc0492.svg",revision:null},{url:"/img/rectangle.205b77b1.svg",revision:null},{url:"/img/service-participate.0c44863f.svg",revision:null},{url:"/img/service-partners.c54eb57a.svg",revision:null},{url:"/img/service-ticket-game.c6fbc222.svg",revision:null},{url:"/img/terms.703c663b.svg",revision:null},{url:"/index.html",revision:"fe067e16c5aa1a69b2c5d1aa237c82e1"},{url:"/js/171.c52bdb13.js",revision:null},{url:"/js/214.d79d80b5.js",revision:null},{url:"/js/27.1750c082.js",revision:null},{url:"/js/326.c60ea34b.js",revision:null},{url:"/js/33.7d0b4a3d.js",revision:null},{url:"/js/762.5eb27044.js",revision:null},{url:"/js/788.72c6bb89.js",revision:null},{url:"/js/870.849982a1.js",revision:null},{url:"/js/894.7fb9f6c2.js",revision:null},{url:"/js/918.0c16eed3.js",revision:null},{url:"/js/924.22511b92.js",revision:null},{url:"/js/app.434d9bc0.js",revision:null},{url:"/js/chunk-vendors.08a8585f.js",revision:null},{url:"/manifest.json",revision:"6e050d794f766061a3e79c8981128183"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
