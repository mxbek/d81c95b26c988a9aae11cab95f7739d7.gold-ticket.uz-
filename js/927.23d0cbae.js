"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[927],{8297:function(t,a,e){e.d(a,{Z:function(){return d}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(e){return a("router-link",{key:e.name,staticClass:"btn",class:e.className&&t.active===e.className?"active":"",attrs:{tag:"div",to:"home"===e.className?"/":e.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:e.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(e.title))])],1)})),1)},i=[],n=e(6265),l=e.n(n),r={name:"BottomNavigationMenu",props:{active:String},data:()=>({user:null,nav:null}),async mounted(){await l().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},o=r,c=e(1001),u=(0,c.Z)(o,s,i,!1,null,"4b507daa",null),d=u.exports},6074:function(t,a,e){e.d(a,{Z:function(){return d}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.photo?a("img",{attrs:{src:t.photo,alt:t.name}}):a("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],n=e(6265),l=e.n(n),r={name:"HeaderUserBar",data:()=>({name:null,photo:null}),mounted(){l().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.name=t.data.data.name,this.photo=t.data.data.photo})).catch((t=>console.log(t)))}},o=r,c=e(1001),u=(0,c.Z)(o,s,i,!1,null,"3a53aff0",null),d=u.exports},1927:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),a("div",{attrs:{id:"my-tickets"}},[a("div",{staticClass:"mt-title"},[t._v("Мои тикеты")]),t.tickets_total?a("div",{staticClass:"mt-list"},t._l(t.tickets_data,(function(e){return a("div",{staticClass:"ticket-id"},[a("span",{class:e.status},[t._v("№ "+t._s(e.code))])])})),0):a("div",{staticClass:"mt-no-ticket"},[t._v("Тикетоа пока нет!")])])],1)},i=[],n=e(6074),l=e(8297),r=e(6265),o=e.n(r),c={name:"MyTickets",data:()=>({tickets_data:0,tickets_total:0}),components:{HeaderUserBar:n.Z,BottomNavigationMenu:l.Z},async mounted(){Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.onClick((()=>this.$router.push("/"))),await o().get("https://server.gold-ticket.uz/api/ticket/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{t.data.data&&(this.tickets_data=t.data.data,this.tickets_total=t.data.total)})).catch((t=>console.log(t)))}},u=c,d=e(1001),m=(0,d.Z)(u,s,i,!1,null,null,null),h=m.exports}}]);
//# sourceMappingURL=927.23d0cbae.js.map