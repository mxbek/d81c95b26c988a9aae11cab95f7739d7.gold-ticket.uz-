"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[318],{2505:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(a){return e("router-link",{key:a.name,staticClass:"btn",class:a.className&&t.active===a.className?"active":"",attrs:{tag:"div",to:"home"===a.className?"/":a.className}},[e("ion-icon",{staticClass:"btn-icon",attrs:{name:a.name}}),e("div",{staticClass:"btn-text"},[t._v(t._s(a.title))])],1)})),1)},i=[],n=a(6265),r=a.n(n),c={name:"BottomNavigationMenu",props:{active:String},data:()=>({user_id:null,user:null,nav:null}),async mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,await r().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"participation",name:"ticket",title:"Qatnashish"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},o=c,u=a(1001),l=(0,u.Z)(o,s,i,!1,null,"fc155260",null),d=l.exports},9203:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"header"}},[e("div",{staticClass:"user-menu"},[e("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?e("img",{attrs:{src:t.user.photo,alt:t.user.name}}):e("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),e("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),e("div",{staticClass:"user-tools"},[e("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[e("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],n=a(6265),r=a.n(n),c={name:"HeaderUserBar",data:()=>({user_id:0,user:null}),mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,r().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},o=c,u=a(1001),l=(0,u.Z)(o,s,i,!1,null,"e4eaf92a",null),d=l.exports},6773:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"take-part"}},[e("div",{staticClass:"tp-bg"}),"ru"===t.user.lang?e("div",{staticClass:"tp-title"},[t._v("Принять участие")]):e("div",{staticClass:"tp-title"},[t._v("Ishtrok etish")]),t._m(0),"ru"===t.user.lang?e("div",{staticClass:"tp-desc"},[t._v("В своём стремлении"),e("br"),t._v("улучшить пользовательский..")]):e("div",{staticClass:"tp-desc"},[t._v("O'z harakatingizbilan"),e("br"),t._v("Imkoniyatni oshiring")]),e("div",{staticClass:"tp-form"},[e("div",{staticClass:"btn tp-ticket-rm",attrs:{id:"removeTicket"},on:{click:function(e){e.preventDefault(),t.ticketCount<3||t.ticketCount--}}},[e("ion-icon",{attrs:{name:"remove"}})],1),e("div",{staticClass:"tp-ticket-count",attrs:{id:"countTicket"}},[t._v("2")]),e("div",{staticClass:"btn tp-ticket-add",attrs:{id:"addTicket"},on:{click:function(e){e.preventDefault(),t.ticketCount++}}},[e("ion-icon",{attrs:{name:"add"}})],1)]),"ru"===t.user.lang?e("div",{staticClass:"ticket-buy-btn",on:{click:t.buyTicket}},[t._v("Участвовать")]):e("div",{staticClass:"ticket-buy-btn",on:{click:t.buyTicket}},[t._v("Qatnashish")])]),e("BottomNavigationMenu",{attrs:{active:"participation"}})],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tp-pic"},[e("img",{attrs:{src:a(7102),alt:"Take Part"}})])}],n=a(9203),r=a(2505),c=a(6265),o=a.n(c),u={name:"Participation",data:()=>({user_id:0,user:null,ticketCount:2}),components:{HeaderUserBar:n.Z,BottomNavigationMenu:r.Z},async mounted(){document.title="Принять участие";const t=window.Telegram.WebApp,e=t.initDataUnsafe.user;this.user_id=e.id,await o().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))},methods:{buyTicket(){window.Telegram.WebApp.sendData({buy:this.ticketCount})},async createTicket(){const t=window.Telegram.WebApp;await o().post("https://server.gold-ticket.uz/api/ticket/"+this.user_id,{tickets_count:this.ticketCount}).then((e=>{"ru"===this.user.lang?"success"===e.data.status&&0!==this.ticketCount?t.showPopup({title:"Участие",message:`Вам успешно начислили ${this.ticketCount} тикетов`,buttons:[{id:"success",type:"ok",text:"Продолжить"}]}):t.showPopup({title:"Участие",message:"Произлашло ошибка, повторите позже",buttons:[{id:"error",type:"ok",text:"Повторить"}]}):"success"===e.data.status&&0!==this.ticketCount?t.showPopup({title:"Qatnashish",message:`Sizga ${this.ticketCount} ticketlar taqdim etildi\n\nBotga /pay komandasini berib ticketlar uchun to'lovni amalga oshiring`,buttons:[{id:"success",type:"ok",text:"Davom etish"}]}):t.showPopup({title:"Qatnashish",message:"xatolik yuz berdi iltimos keynroq qayta urunib ko'ring",buttons:[{id:"error",type:"ok",text:"Qayta takrorlash"}]}),this.ticketCount=0})).catch((()=>{this.ticketCount=0}))}},watch:{ticketCount(){document.getElementById("countTicket").innerText=this.ticketCount}}},l=u,d=a(1001),m=(0,d.Z)(l,s,i,!1,null,"12f6e0f4",null),p=m.exports},7102:function(t,e,a){t.exports=a.p+"img/participation.eae2bd2e.svg"}}]);
//# sourceMappingURL=318.56fd44b3.js.map