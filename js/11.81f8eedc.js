"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[11],{8297:function(t,a,s){s.d(a,{Z:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(s){return a("router-link",{key:s.name,staticClass:"btn",class:s.className&&t.active===s.className?"active":"",attrs:{tag:"div",to:"home"===s.className?"/":s.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:s.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(s.title))])],1)})),1)},i=[],r=s(6265),n=s.n(r),o={name:"BottomNavigationMenu",props:{active:String},data:()=>({user:null,nav:null}),async mounted(){await n().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},l=o,c=s(1001),u=(0,c.Z)(l,e,i,!1,null,"4b507daa",null),d=u.exports},8668:function(t,a,s){s.d(a,{Z:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?a("img",{attrs:{src:t.user.name,alt:t.user.name}}):a("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],r=s(6265),n=s.n(r),o={name:"HeaderUserBar",data:()=>({user:null}),mounted(){n().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},l=o,c=s(1001),u=(0,c.Z)(l,e,i,!1,null,"08153e11",null),d=u.exports},7011:function(t,a,s){s.r(a),s.d(a,{default:function(){return v}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("div",{attrs:{id:"profile"}},[a("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?a("img",{attrs:{src:t.user.photo,alt:t.user.name}}):a("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))]),a("div",{staticClass:"user-tickets-count"},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"ticket-outline"}}),t._v(" "+t._s(t.tickets_total)+" ")],1),"ru"===t.user.lang?a("div",{staticClass:"user-btn-tools"},[a("router-link",{staticClass:"user-tickets-btn btn",attrs:{to:"/my-tickets",tag:"div"}},[t._v("Мои тикеты "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),a("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/participation",tag:"div"}},[t._v("Повысить шансы "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),a("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/terms",tag:"div"}},[t._v("Условия использования "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),a("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/policy",tag:"div"}},[t._v("Оферта "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1)],1):a("div",{staticClass:"user-btn-tools"},[a("router-link",{staticClass:"user-tickets-btn btn",attrs:{to:"/my-tickets",tag:"div"}},[t._v("Mening ticketlarim "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),a("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/participation",tag:"div"}},[t._v("Imkoniyatni oshirish "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),a("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/terms",tag:"div"}},[t._v("Foydalanish shartlari "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),a("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/policy",tag:"div"}},[t._v("Oferta "),a("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1)],1)]),a("BottomNavigationMenu",{attrs:{active:"profile"}})],1)},i=[],r=s(8668),n=s(8297),o=s(6265),l=s.n(o),c={name:"Profile",data:()=>({user:null,tickets_total:0}),components:{HeaderUserBar:r.Z,BottomNavigationMenu:n.Z},async mounted(){await l().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),l().get("https://server.gold-ticket.uz/api/ticket/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{t.data.data&&(this.tickets_total=t.data.total)})).catch((t=>console.log(t)))}},u=c,d=s(1001),m=(0,d.Z)(u,e,i,!1,null,"457703c2",null),v=m.exports}}]);
//# sourceMappingURL=11.81f8eedc.js.map