"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[894],{2086:function(t,a,e){e.d(a,{Z:function(){return d}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(e){return a("router-link",{key:e.name,staticClass:"btn",class:e.className&&t.active===e.className?"active":"",attrs:{tag:"div",to:"home"===e.className?"/":e.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:e.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(e.title))])],1)})),1)},i=[],n=e(6265),r=e.n(n),l={name:"BottomNavigationMenu",props:{active:String},data:()=>({user_id:null,user:null,nav:null}),async mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,await r().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"participation",name:"ticket",title:"Qatnashish"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},c=l,o=e(1001),u=(0,o.Z)(c,s,i,!1,null,"1dca933b",null),d=u.exports},6734:function(t,a,e){e.d(a,{Z:function(){return d}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?a("img",{attrs:{src:t.user.name,alt:t.user.name}}):a("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],n=e(6265),r=e.n(n),l={name:"HeaderUserBar",data:()=>({user_id:0,user:null}),mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,r().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},c=l,o=e(1001),u=(0,o.Z)(c,s,i,!1,null,"0ace4b88",null),d=u.exports},7894:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),a("div",{attrs:{id:"my-tickets"}},[a("div",{staticClass:"mt-title"},[t._v("Мои тикеты")]),t.tickets_total?a("div",{staticClass:"mt-list"},t._l(t.tickets_data,(function(e){return a("div",{staticClass:"ticket-id"},[a("span",{class:e.status},[t._v("№ "+t._s(e.code))])])})),0):a("div",{staticClass:"mt-no-ticket"},[t._v("Тикетоа пока нет!")])])],1)},i=[],n=e(6734),r=e(2086),l=e(6265),c=e.n(l),o={name:"MyTickets",data:()=>({user_id:0,tickets_data:0,tickets_total:0}),components:{HeaderUserBar:n.Z,BottomNavigationMenu:r.Z},async mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user,a=window.Telegram.WebApp.BackButton;a.show(),a.onClick((()=>{this.$router.push("/")})),this.user_id=t.id,await c().get("https://server.gold-ticket.uz/api/ticket/"+this.user_id).then((t=>{t.data.data&&(this.tickets_data=t.data.data,this.tickets_total=t.data.total)})).catch((t=>console.log(t)))}},u=o,d=e(1001),m=(0,d.Z)(u,s,i,!1,null,null,null),h=m.exports}}]);
//# sourceMappingURL=894.7fb9f6c2.js.map