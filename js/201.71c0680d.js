"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[201],{2086:function(t,e,a){a.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(a){return e("router-link",{key:a.name,staticClass:"btn",class:a.className&&t.active===a.className?"active":"",attrs:{tag:"div",to:"home"===a.className?"/":a.className}},[e("ion-icon",{staticClass:"btn-icon",attrs:{name:a.name}}),e("div",{staticClass:"btn-text"},[t._v(t._s(a.title))])],1)})),1)},s=[],n=a(6265),o=a.n(n),r={name:"BottomNavigationMenu",props:{active:String},data:()=>({user_id:null,user:null,nav:null}),async mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,await o().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"participation",name:"ticket",title:"Qatnashish"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},c=r,l=a(1001),u=(0,l.Z)(c,i,s,!1,null,"1dca933b",null),d=u.exports},6734:function(t,e,a){a.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"header"}},[e("div",{staticClass:"user-menu"},[e("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?e("img",{attrs:{src:t.user.name,alt:t.user.name}}):e("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),e("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),e("div",{staticClass:"user-tools"},[e("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[e("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},s=[],n=a(6265),o=a.n(n),r={name:"HeaderUserBar",data:()=>({user_id:0,user:null}),mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,o().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},c=r,l=a(1001),u=(0,l.Z)(c,i,s,!1,null,"0ace4b88",null),d=u.exports},7201:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"take-part"}},[e("div",{staticClass:"tp-bg"}),"ru"===t.user.lang?e("div",{staticClass:"tp-title"},[t._v("Принять участие")]):e("div",{staticClass:"tp-title"},[t._v("Ishtrok etish")]),t._m(0),"ru"===t.user.lang?e("div",{staticClass:"tp-desc"},[t._v("В своём стремлении"),e("br"),t._v("улучшить пользовательский..")]):e("div",{staticClass:"tp-desc"},[t._v("O'z harakatingizbilan"),e("br"),t._v("Imkoniyatni oshiring")]),e("div",{staticClass:"tp-form"},[e("div",{staticClass:"btn tp-ticket-rm",attrs:{id:"removeTicket"},on:{click:function(e){e.preventDefault(),t.ticketCount<3||t.ticketCount--}}},[e("ion-icon",{attrs:{name:"remove"}})],1),e("div",{staticClass:"tp-ticket-count",attrs:{id:"countTicket"}},[t._v("2")]),e("div",{staticClass:"btn tp-ticket-add",attrs:{id:"addTicket"},on:{click:function(e){e.preventDefault(),t.ticketCount++}}},[e("ion-icon",{attrs:{name:"add"}})],1)])]),e("BottomNavigationMenu",{attrs:{active:"participation"}})],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tp-pic"},[e("img",{attrs:{src:a(7102),alt:"Take Part"}})])}],n=(a(2801),a(6734)),o=a(2086),r=a(6265),c=a.n(r),l={name:"Participation",data:()=>({user_id:0,user:null,buy_tickeet:null,ticketCount:2}),components:{HeaderUserBar:n.Z,BottomNavigationMenu:o.Z},async mounted(){document.title="Принять участие";const t=window.Telegram.WebApp,e=t.initDataUnsafe.user,a=t.MainButton;a.show(),a.setParams({text:this.buy_tickeet,color:"#f2c058",text_color:"#FFF"}),a.onClick((()=>{let t;t="ru"===this.user.lang?"5,000 УЗС/мес. - Месячное подписка для использовании тикетов":"5,000 UZS/oy - Ticketlardan foydalanish uchun oylik obuna";let e=decodeURIComponent(escape(window.atob("Ym90NTU1Njc3MjY0NjpBQUZGdXlQVVpuYjg4REd0Sm1vUHJPOUJXNUpFZjFyVGpMYw=="))),a=decodeURIComponent(escape(window.atob("Mzg3MDI2Njk2OkxJVkU6NjM2Y2Y5YjU3NGExMjNkNzA3MWVlNDk4")));c().post(`https://api.telegram.org/${e}/createInvoiceLink`,{title:"Gold Ticket Premium",description:t,payload:this.user_id,provider_token:a,currency:"UZS",max_tip_amount:1e9,prices:[{label:"Gold Ticket Premium",amount:25e4*this.ticketCount}],photo_url:"https://gold-ticket.uz/bot/files/payment.jpg",photo_width:640,photo_height:360,need_phone_number:!0}).then((t=>{window.Telegram.WebApp.openInvoice(t.data.result)})).catch((t=>{const e=window.Telegram.WebApp;"ru"===this.user.lang?e.showPopup({title:"Учавствовать",message:"Произошла ошибка, повторите попытку больше ",buttons:[{id:"success",type:"ok",text:"Повторить"}]}):e.showPopup({title:"Qatnashish",message:"Tolo hisibi yaratishda hatolik yuz berdi!\n\n Keyinroq qayta urunib koring",buttons:[{id:"success",type:"ok",text:"Davom etish"}]})}))})),this.user_id=e.id,await c().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.buy_tickeet="Участвовать":this.buy_tickeet="Qatnashish"},watch:{ticketCount(){document.getElementById("countTicket").innerText=this.ticketCount}}},u=l,d=a(1001),p=(0,d.Z)(u,i,s,!1,null,"7793363c",null),m=p.exports},7102:function(t,e,a){t.exports=a.p+"img/participation.eae2bd2e.svg"}}]);
//# sourceMappingURL=201.71c0680d.js.map