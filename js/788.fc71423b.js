"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[788],{3530:function(t,a,e){e.d(a,{Z:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(e){return a("router-link",{key:e.name,staticClass:"btn",class:e.className&&t.active===e.className?"active":"",attrs:{tag:"div",to:"home"===e.className?"/":e.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:e.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(e.title))])],1)})),1)},i=[],n=e(6265),r=e.n(n),l={name:"BottomNavigationMenu",props:{active:String},data:()=>({user_id:null,user:null,nav:null}),async mounted(){window.Telegram.WebApp.initDataUnsafe.user;this.user_id=5296876609,await r().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"participation",name:"ticket",title:"Qatnashish"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},o=l,c=e(1001),u=(0,c.Z)(o,s,i,!1,null,"77209f05",null),m=u.exports},7774:function(t,a,e){e.d(a,{Z:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?a("img",{attrs:{src:t.user.name,alt:t.user.name}}):a("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],n=e(6265),r=e.n(n),l={name:"HeaderUserBar",data:()=>({user_id:0,user:null}),mounted(){window.Telegram.WebApp.initDataUnsafe.user;this.user_id=5296876609,r().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},o=l,c=e(1001),u=(0,c.Z)(o,s,i,!1,null,"0c728510",null),m=u.exports},6788:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),a("div",{attrs:{id:"market"}},[a("div",{staticClass:"mt-title"},[t._v("Ticket Market")]),a("div",{staticClass:"mt-tgs"},[a("ion-icon",{attrs:{name:"time"}})],1),a("div",{staticClass:"mt-soon"},[t._v("Coming Soon")])]),a("BottomNavigationMenu",{attrs:{active:"market"}})],1)},i=[],n=e(7774),r=e(3530),l={name:"Market",components:{HeaderUserBar:n.Z,BottomNavigationMenu:r.Z},mounted(){document.title="Ticket Market"}},o=l,c=e(1001),u=(0,c.Z)(o,s,i,!1,null,null,null),m=u.exports}}]);
//# sourceMappingURL=788.fc71423b.js.map