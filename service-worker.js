if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const o=e=>i(e,n),c={module:{uri:n},exports:u,require:o};s[n]=Promise.all(l.map((e=>c[e]||o(e)))).then((e=>(r(...e),u)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"golden-ticket"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/201.d99c2eeb.css",revision:null},{url:"/css/870.dbf2ff8e.css",revision:null},{url:"/css/918.9f6c3b62.css",revision:null},{url:"/css/app.20144eac.css",revision:null},{url:"/img/banner.2f2ac564.png",revision:null},{url:"/img/gd-default.6a91f35b.png",revision:null},{url:"/img/giv-a-dream.924c908d.svg",revision:null},{url:"/img/humans.e5315692.svg",revision:null},{url:"/img/it-park.0b0ebf21.png",revision:null},{url:"/img/participation.eae2bd2e.svg",revision:null},{url:"/img/rectangle-night.84fc0492.svg",revision:null},{url:"/img/rectangle.205b77b1.svg",revision:null},{url:"/img/service-participate.0c44863f.svg",revision:null},{url:"/img/service-partners.c54eb57a.svg",revision:null},{url:"/img/service-ticket-game.c6fbc222.svg",revision:null},{url:"/img/terms.703c663b.svg",revision:null},{url:"/index.html",revision:"51f34149f3a565af0dfdfd89eea76794"},{url:"/js/171.fe29d28b.js",revision:null},{url:"/js/201.905300d3.js",revision:null},{url:"/js/27.1750c082.js",revision:null},{url:"/js/32.76af3334.js",revision:null},{url:"/js/326.c60ea34b.js",revision:null},{url:"/js/33.493799ad.js",revision:null},{url:"/js/668.496beace.js",revision:null},{url:"/js/788.fc71423b.js",revision:null},{url:"/js/870.849982a1.js",revision:null},{url:"/js/894.76a83a31.js",revision:null},{url:"/js/918.e27d484c.js",revision:null},{url:"/js/app.faeeb287.js",revision:null},{url:"/js/chunk-vendors.08a8585f.js",revision:null},{url:"/manifest.json",revision:"6e050d794f766061a3e79c8981128183"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
