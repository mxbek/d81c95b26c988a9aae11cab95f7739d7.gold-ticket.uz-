"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[378],{8297:function(t,s,e){e.d(s,{Z:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(e){return s("router-link",{key:e.name,staticClass:"btn",class:e.className&&t.active===e.className?"active":"",attrs:{tag:"div",to:"home"===e.className?"/":e.className}},[s("ion-icon",{staticClass:"btn-icon",attrs:{name:e.name}}),s("div",{staticClass:"btn-text"},[t._v(t._s(e.title))])],1)})),1)},i=[],r=e(6265),c=e.n(r),d={name:"BottomNavigationMenu",props:{active:String},data:()=>({user:null,nav:null}),async mounted(){await c().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},l=d,o=e(1001),n=(0,o.Z)(l,a,i,!1,null,"4b507daa",null),u=n.exports},8668:function(t,s,e){e.d(s,{Z:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"user-menu"},[s("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?s("img",{attrs:{src:t.user.name,alt:t.user.name}}):s("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),s("div",{staticClass:"user-tools"},[s("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],r=e(6265),c=e.n(r),d={name:"HeaderUserBar",data:()=>({user:null}),mounted(){c().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},l=d,o=e(1001),n=(0,o.Z)(l,a,i,!1,null,"08153e11",null),u=n.exports},378:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"container"}},[s("HeaderUserBar"),t._m(0)],1)},i=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"give-a-dream"}},[s("div",{staticClass:"gd-title"},[t._v("Подари мечту")]),s("div",{staticClass:"gd-description"},[t._v("В частности, экономическая повестка сегодняшнего дня способствует повышению качества направлений прогрессивного развития. Рыба Текст")]),s("div",{staticClass:"swiper gd-products"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:e(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:e(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:e(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:e(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:e(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])])])])])}],r=e(8668),c=e(8297),d={name:"GiveDream",components:{HeaderUserBar:r.Z,BottomNavigationMenu:c.Z},mounted(){document.title="Ticket Market",new Swiper(".gd-products",{watchSlidesProgress:!0,slidesPerView:3}),Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.onClick((()=>{this.$router.push("/")}))}},l=d,o=e(1001),n=(0,o.Z)(l,a,i,!1,null,"09c8e9f1",null),u=n.exports},2786:function(t,s,e){t.exports=e.p+"img/gd-default.6a91f35b.png"}}]);
//# sourceMappingURL=378.0d7180e2.js.map