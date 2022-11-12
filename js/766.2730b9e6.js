"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[766],{2086:function(t,s,e){e.d(s,{Z:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(e){return s("router-link",{key:e.name,staticClass:"btn",class:e.className&&t.active===e.className?"active":"",attrs:{tag:"div",to:"home"===e.className?"/":e.className}},[s("ion-icon",{staticClass:"btn-icon",attrs:{name:e.name}}),s("div",{staticClass:"btn-text"},[t._v(t._s(e.title))])],1)})),1)},a=[],r=e(6265),n=e.n(r),c={name:"BottomNavigationMenu",props:{active:String},data:()=>({user_id:null,user:null,nav:null}),async mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,await n().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"participation",name:"ticket",title:"Qatnashish"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},l=c,o=e(1001),d=(0,o.Z)(l,i,a,!1,null,"1dca933b",null),u=d.exports},6734:function(t,s,e){e.d(s,{Z:function(){return u}});var i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"user-menu"},[s("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?s("img",{attrs:{src:t.user.name,alt:t.user.name}}):s("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),s("div",{staticClass:"user-tools"},[s("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},a=[],r=e(6265),n=e.n(r),c={name:"HeaderUserBar",data:()=>({user_id:0,user:null}),mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,n().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},l=c,o=e(1001),d=(0,o.Z)(l,i,a,!1,null,"0ace4b88",null),u=d.exports},6766:function(t,s,e){e.r(s),e.d(s,{default:function(){return v}});var i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"container"}},[s("div",{staticClass:"error",class:t.user.subscription?"":"active",attrs:{id:"alert"}},[s("ion-icon",{staticClass:"icon",attrs:{name:"warning"}}),s("div",{staticClass:"title"},[t._v("Вы не оформили подписку!")]),s("div",{staticClass:"pay-btn",on:{click:t.subscription}},[t._v("Оформить")])],1),s("HeaderUserBar"),s("div",{attrs:{id:"banner"}},[s("div",{staticClass:"swiper banner-collage"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:e(3235),alt:""}}),s("div",{staticClass:"item-gradient"}),s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-title"},[t._v(t._s(t.title_1))]),s("div",{staticClass:"item-price"},[t._v("5000")]),s("div",{staticClass:"item-currency"},[t._v(t._s(t.desc_1))])])])])])]),s("div",{attrs:{id:"service"}},[s("div",{staticClass:"service-title"},[t._v(t._s(t.service))]),s("div",{staticClass:"swiper service-cards"},[s("div",{staticClass:"swiper-wrapper"},[s("router-link",{staticClass:"service-card swiper-slide",attrs:{tag:"div",to:"/qr-code-cashback"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(9844),alt:"Service Partners"}})]),s("div",{staticClass:"service-title"},[t._v(t._s(t.cashback))])]),s("router-link",{staticClass:"service-card swiper-slide",attrs:{tag:"div",to:"https://prizes.gamee.com/game-bot/karatekid2"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(1665),alt:"Service Partners"}})]),s("div",{staticClass:"service-title"},[t._v("Ticket Game")])]),s("router-link",{staticClass:"service-card swiper-slide",attrs:{tag:"div",to:"/participation"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(85),alt:"Service Partners"}})]),s("div",{staticClass:"service-title"},[t._v(t._s(t.participation))])]),s("router-link",{staticClass:"service-card swiper-slide",attrs:{tag:"div",to:"/give-a-dream"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(8663),alt:"Give a dream"}})]),s("div",{staticClass:"service-title"},[t._v(t._s(t.give_a_dream))])]),s("router-link",{staticClass:"service-card swiper-slide",staticStyle:{visibility:"hidden",opacity:"0"},attrs:{tag:"div",to:"/give-a-dream"}})],1)])]),s("BottomNavigationMenu",{attrs:{active:"home"}})],1)},a=[],r=(e(2801),e(6265)),n=e.n(r),c=e(2086),l=e(6734),o={name:"Home",data:()=>({user_id:0,user:null,title_1:null,desc_1:null,title_2:null,desc_2:null,service:null,cashback:null,participation:null,give_a_dream:null}),components:{HeaderUserBar:l.Z,BottomNavigationMenu:c.Z},async mounted(){const t=window.Telegram.WebApp,s=t.initDataUnsafe.user;t.MainButton,t.BackButton;this.user_id=s.id,new Swiper(".banner-collage",{effect:"cards",grabCursor:!0,autoplay:{delay:2500},slidesPerView:"auto",loop:!0}),new Swiper(".service-cards",{watchSlidesProgress:!0,slidesPerView:3}),await n().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),this.user.agreed||this.$router.push("/terms"),"ru"===this.user.lang?(this.title_1="Квартира за",this.desc_1="сум",this.service="Другие сервисы",this.cashback="Кешбек",this.participation="Участвовать",this.give_a_dream="Подри мечту"):(this.title_1="Kvartira",this.desc_1="so'm evaziga",this.service="Boshqa servislar",this.cashback="Keshbek",this.participation="Qatnashish",this.give_a_dream="Orzu ulash")},methods:{async subscription(){let t;t="ru"===this.user.lang?"5,000 УЗС/мес. - Месячное подписка для использовании тикетов":"5,000 UZS/oy - Ticketlardan foydalanish uchun oylik obuna";let s=decodeURIComponent(escape(window.atob("Ym90NTU1Njc3MjY0NjpBQUZGdXlQVVpuYjg4REd0Sm1vUHJPOUJXNUpFZjFyVGpMYw=="))),e=decodeURIComponent(escape(window.atob("Mzg3MDI2Njk2OkxJVkU6NjM2Y2Y5YjU3NGExMjNkNzA3MWVlNDk4")));await n().post(`https://api.telegram.org/${s}/sendInvoice`,{chat_id:this.user_id,title:"Gold Ticket Premium",description:t,payload:this.user_id,provider_token:e,currency:"UZS",max_tip_amount:1e9,prices:[{label:"Gold Ticket Premium",amount:5e5}],photo_url:"https://gold-ticket.uz/bot/files/payment.jpg",photo_width:640,photo_height:360,need_phone_number:!0}).then((t=>{const s=window.Telegram.WebApp;"ru"===this.user.lang?s.showPopup({title:"Успешно",message:"Бот вам отпрвил счёт для оплаты",buttons:[{id:"success",type:"ok",text:"Продолжить"}]}):s.showPopup({title:"Muvofaqiyatli",message:"Bot sizga tolov uchun hisob yubordi",buttons:[{id:"success",type:"ok",text:"Davom etish"}]})})).catch((t=>{if(!t.data.ok){const t=window.Telegram.WebApp;"ru"===this.user.lang?t.showPopup({title:"Ошибка!",message:"Произошла ошибка, повторите попытку больше ",buttons:[{id:"success",type:"ok",text:"Повторить"}]}):t.showPopup({title:"Xato!",message:"Tolo hisibi yaratishda hatolik yuz berdi!\n\n Keyinroq qayta urunib koring",buttons:[{id:"success",type:"ok",text:"Davom etish"}]})}}))}}},d=o,u=e(1001),p=(0,u.Z)(d,i,a,!1,null,null,null),v=p.exports},8663:function(t,s,e){t.exports=e.p+"img/humans.e5315692.svg"},85:function(t,s,e){t.exports=e.p+"img/service-participate.0c44863f.svg"},9844:function(t,s,e){t.exports=e.p+"img/service-partners.c54eb57a.svg"},1665:function(t,s,e){t.exports=e.p+"img/service-ticket-game.c6fbc222.svg"},3235:function(t,s,e){t.exports=e.p+"img/banner.2f2ac564.png"}}]);
//# sourceMappingURL=766.2730b9e6.js.map