"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[378],{8297:function(t,s,a){a.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(a){return s("router-link",{key:a.name,staticClass:"btn",class:a.className&&t.active===a.className?"active":"",attrs:{tag:"div",to:"home"===a.className?"/":a.className}},[s("ion-icon",{staticClass:"btn-icon",attrs:{name:a.name}}),s("div",{staticClass:"btn-text"},[t._v(t._s(a.title))])],1)})),1)},i=[],r=a(6265),c=a.n(r),d={name:"BottomNavigationMenu",props:{active:String},data:()=>({user:null,nav:null}),async mounted(){await c().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},l=d,o=a(1001),n=(0,o.Z)(l,e,i,!1,null,"4b507daa",null),u=n.exports},3040:function(t,s,a){a.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"user-menu"},[s("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.photo?s("img",{attrs:{src:t.photo,alt:t.name}}):s("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.name))])]),s("div",{staticClass:"user-tools"},[s("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],r=a(6265),c=a.n(r),d={name:"HeaderUserBar",data:()=>({name:null,photo:null}),mounted(){c().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.name=t.data.data.name,this.photo=t.data.data.photo})).catch((t=>console.log(t)))}},l=d,o=a(1001),n=(0,o.Z)(l,e,i,!1,null,"fb227f3e",null),u=n.exports},378:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"container"}},[s("HeaderUserBar"),t._m(0)],1)},i=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"give-a-dream"}},[s("div",{staticClass:"gd-title"},[t._v("Подари мечту")]),s("div",{staticClass:"gd-description"},[t._v("В частности, экономическая повестка сегодняшнего дня способствует повышению качества направлений прогрессивного развития. Рыба Текст")]),s("div",{staticClass:"swiper gd-products"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:a(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:a(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:a(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:a(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:a(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])])])])])}],r=a(3040),c=a(8297),d={name:"GiveDream",components:{HeaderUserBar:r.Z,BottomNavigationMenu:c.Z},mounted(){document.title="Ticket Market",new Swiper(".gd-products",{watchSlidesProgress:!0,slidesPerView:3}),Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.onClick((()=>{this.$router.push("/")}))}},l=d,o=a(1001),n=(0,o.Z)(l,e,i,!1,null,"09c8e9f1",null),u=n.exports},2786:function(t,s,a){t.exports=a.p+"img/gd-default.6a91f35b.png"}}]);
//# sourceMappingURL=378.b41d2e2a.js.map