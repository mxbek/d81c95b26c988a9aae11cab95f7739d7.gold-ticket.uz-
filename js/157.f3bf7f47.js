"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[157],{7151:function(t,s,e){e.d(s,{Z:function(){return l}});var a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(e){return s("router-link",{key:e.name,staticClass:"btn",class:e.className&&t.active===e.className?"active":"",attrs:{tag:"div",to:"home"===e.className?"/":e.className}},[s("ion-icon",{staticClass:"btn-icon",attrs:{name:"ios"===t.$store.state.platform||"ipados"===t.$store.state.platform||"macos"===t.$store.state.platform?e.className&&t.active===e.className?e.name:`${e.name}-outline`:e.name}}),s("div",{staticClass:"btn-text"},[t._v(t._s(e.title))])],1)})),1)},i=[],r={name:"BottomNavigationMenu",props:{active:String},data:()=>({nav:[]}),mounted(){let t=this.$store.state.lang;this.nav=[{className:"home",name:"home",title:t?"Главное":"Asosiy"},{className:"market",name:"bag-handle",title:t?"Маркет":"Market"},{className:"partners",name:"star",title:t?"Спонсоры":"Homiylar"},{className:"profile",name:"person",title:t?"Профиль":"Profil"}]}},n=r,o=e(1001),c=(0,o.Z)(n,a,i,!1,null,"4706555a",null),l=c.exports},5758:function(t,s,e){e.d(s,{Z:function(){return l}});var a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"user-menu"},[s("div",{staticClass:"user-pic"},[s("img",{attrs:{src:t.$store.state.photo?t.$store.state.photo:"https://gold-ticket.uz/tgs/avatar.png",alt:t.$store.state.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.$store.state.name))])]),s("div",{staticClass:"user-tools"},[s("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/qr-code-cashback"}},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:t.settingsIcon}})],1)],1)])},i=[],r={name:"HeaderUserBar",data:()=>({settingsIcon:null}),async mounted(){this.settingsIcon="ios"===Telegram.WebApp.platform||"ipados"===Telegram.WebApp.platform||"macos"===Telegram.WebApp.platform?"scan-circle-outline":"scan-circle"}},n=r,o=e(1001),c=(0,o.Z)(n,a,i,!1,null,"3b4ffc89",null),l=c.exports},3157:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"container"}},[s("div",{staticClass:"error",class:t.$store.state.premium_class,attrs:{id:"alert"}},[s("ion-icon",{staticClass:"icon",attrs:{name:"warning"}}),s("div",{staticClass:"title"},[t._v(t._s("ru"===t.$store.state.lang?"Вы не оформили подписку!":"Obunani sotib olmagansiz!"))]),s("div",{staticClass:"pay-btn",on:{click:function(s){return t.subscripInvoice()}}},[t._v(t._s("ru"===t.$store.state.lang?"Оформить":"Bajarish"))])],1),s("HeaderUserBar"),s("div",{attrs:{id:"banner"}},[s("div",{staticClass:"banner-collage swiper"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},["ru"===t.$store.state.lang?s("img",{attrs:{src:e(6590),alt:""}}):s("img",{attrs:{src:e(5974),alt:""}})]),s("div",{staticClass:"swiper-slide"},["ru"===t.$store.state.lang?s("img",{attrs:{src:e(7533),alt:""}}):s("img",{attrs:{src:e(1704),alt:""}})])])])]),s("div",{attrs:{id:"service"}},[s("div",{staticClass:"service-title"},[t._v(t._s("ru"===t.$store.state.lang?"Другие сервисы":"Boshqa servislar"))]),s("div",{staticClass:"swiper service-cards"},[s("div",{staticClass:"swiper-wrapper"},[s("router-link",{staticClass:"service-card swiper-slide",attrs:{tag:"div",to:"/qr-code-cashback"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(1542),alt:"Service Partners"}})]),s("div",{staticClass:"service-title"},[t._v(t._s("ru"===t.$store.state.lang?"Кешбэк":"Keshbek"))])]),t._m(0),s("router-link",{staticClass:"service-card swiper-slide",attrs:{tag:"div",to:"/participation"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(3622),alt:"Service Partners"}})]),s("div",{staticClass:"service-title"},[t._v(t._s("ru"===t.$store.state.lang?"Учавствовать":"Qatnashish"))])]),s("router-link",{staticClass:"service-card swiper-slide",attrs:{tag:"div",to:"/give-a-dream"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(9299),alt:"Give a dream"}})]),s("div",{staticClass:"service-title"},[t._v(t._s("ru"===t.$store.state.lang?"Подари мечту":"Orzu ulash"))])])],1)])]),s("BottomNavigationMenu",{attrs:{active:"home",lang:"ru"===t.$store.state.lang}})],1)},i=[function(){var t=this,s=t._self._c;return s("a",{staticClass:"service-card swiper-slide",attrs:{href:"https://prizes.gamee.com/game-bot/karatekid2"}},[s("div",{staticClass:"service-pic"},[s("img",{attrs:{src:e(4381),alt:"Service Partners"}})]),s("div",{staticClass:"service-title"},[t._v("Ticket Game")])])}],r=e(7151),n=e(5758),o=e(6265),c=e.n(o),l={name:"Home",components:{HeaderUserBar:n.Z,BottomNavigationMenu:r.Z},async mounted(){new Swiper(".banner-collage",{effect:"cards",grabCursor:!0,autoplay:{delay:2500},slidesPerView:"auto",loop:!0}),new Swiper(".service-cards",{watchSlidesProgress:!0,slidesPerView:2.65}),Telegram.WebApp.MainButton.hideProgress(),Telegram.WebApp.MainButton.hide(),Telegram.WebApp.BackButton.hide()},methods:{async subscripInvoice(){await c().post(`https://server.gold-ticket.uz/api/invoice/${this.$store.state.user_id}`,{lang:this.$store.state.lang}).then((t=>{t.data.ok?("ru"===this.$store.state.lang?Telegram.WebApp.showPopup({title:"✅ Успешно",message:"Бот вам отпрвил счёт для оплаты",buttons:[{id:"success",type:"ok",text:"Продолжить"}]}):Telegram.WebApp.showPopup({title:"✅ Muvofaqiyatli",message:"Bot sizga tolov uchun hisob yubordi",buttons:[{id:"success",type:"ok",text:"Davom etish"}]}),Telegram.WebApp.onEvent("success",Telegram.WebApp.close())):"ru"===this.$store.state.lang?Telegram.WebApp.showPopup({title:"⚠️Ошибка!",message:"Произошло ошибка притязания счета оплаты\n\nПовторите попытку больше ",buttons:[{id:"success",type:"ok",text:"Повторить"}]}):Telegram.WebApp.showPopup({title:"⚠️Xato!",message:"Tolov hisibi yaratishda hatolik yuz berdi!\n\nKeyinroq qayta urunib koring",buttons:[{id:"success",type:"ok",text:"Davom etish"}]})}))}}},u=l,p=e(1001),v=(0,p.Z)(u,a,i,!1,null,null,null),d=v.exports},3622:function(t,s,e){t.exports=e.p+"img/buy_tickets.c65e33b8.svg"},1542:function(t,s,e){t.exports=e.p+"img/cashback.190bde35.svg"},4381:function(t,s,e){t.exports=e.p+"img/game.298ce898.svg"},9299:function(t,s,e){t.exports=e.p+"img/give_a_dream.e68bf14b.svg"},6590:function(t,s,e){t.exports=e.p+"img/slider_1_ru.b262bb93.svg"},5974:function(t,s,e){t.exports=e.p+"img/slider_1_uz.ad3417f0.svg"},7533:function(t,s,e){t.exports=e.p+"img/slider_2_ru.54ad4189.svg"},1704:function(t,s,e){t.exports=e.p+"img/slider_2_uz.c261b606.svg"}}]);
//# sourceMappingURL=157.f3bf7f47.js.map