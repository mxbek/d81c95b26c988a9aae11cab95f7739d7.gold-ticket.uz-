if(!self.define){let s,l={};const i=(i,e)=>(i=new URL(i+".js",e).href,l[i]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=l,document.head.appendChild(s)}else s=i,importScripts(i),l()})).then((()=>{let s=l[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(e,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const o=s=>i(s,r),c={module:{uri:r},exports:u,require:o};l[r]=Promise.all(e.map((s=>c[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"golden-ticket"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/126.82563b92.css",revision:null},{url:"/css/242.51da52b2.css",revision:null},{url:"/css/279.425dd6ab.css",revision:null},{url:"/css/332.82563b92.css",revision:null},{url:"/css/498.8f8dff27.css",revision:null},{url:"/css/52.517e47ea.css",revision:null},{url:"/css/540.ea571a38.css",revision:null},{url:"/css/593.fcc37aa8.css",revision:null},{url:"/css/657.18398eda.css",revision:null},{url:"/css/701.67881cbd.css",revision:null},{url:"/css/741.b8815cc5.css",revision:null},{url:"/css/746.65ed85da.css",revision:null},{url:"/css/893.522ac016.css",revision:null},{url:"/css/app.805de3bc.css",revision:null},{url:"/img/it-park.0b0ebf21.png",revision:null},{url:"/img/loveis_1.84bca536.webp",revision:null},{url:"/img/loveis_1.976bc73b.webp",revision:null},{url:"/img/loveis_2.7d693ad1.webp",revision:null},{url:"/img/loveis_2.c434eb10.webp",revision:null},{url:"/img/loveis_3.0816af2d.webp",revision:null},{url:"/img/loveis_3.581a0df4.webp",revision:null},{url:"/img/loveis_content.49658564.webp",revision:null},{url:"/img/loveis_content.f37839e0.webp",revision:null},{url:"/img/participation.309cd640.svg",revision:null},{url:"/img/rectangle.ddc67825.svg",revision:null},{url:"/img/terms.703c663b.svg",revision:null},{url:"/index.html",revision:"42af3637c0f51bd8bdc268f18e4ecea3"},{url:"/js/126.a5ff9fe3.js",revision:null},{url:"/js/215.9aaa7dd7.js",revision:null},{url:"/js/242.ea4ba806.js",revision:null},{url:"/js/279.e20620d0.js",revision:null},{url:"/js/326.c60ea34b.js",revision:null},{url:"/js/332.aede793f.js",revision:null},{url:"/js/498.a09c7bbf.js",revision:null},{url:"/js/52.5285207c.js",revision:null},{url:"/js/540.5ddce5f5.js",revision:null},{url:"/js/593.897fddff.js",revision:null},{url:"/js/657.1af2bd69.js",revision:null},{url:"/js/701.f4b1ecea.js",revision:null},{url:"/js/741.b325b2dd.js",revision:null},{url:"/js/746.c0942fdf.js",revision:null},{url:"/js/893.436ff307.js",revision:null},{url:"/js/app.ecd35367.js",revision:null},{url:"/js/chunk-vendors.c0b4fa2c.js",revision:null},{url:"/manifest.json",revision:"6e050d794f766061a3e79c8981128183"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
