"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[171],{3911:function(t,s,i){i.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(i){return s("router-link",{key:i.name,staticClass:"btn",class:i.className&&t.active===i.className?"active":"",attrs:{tag:"div",to:"home"===i.className?"/":i.className}},[s("ion-icon",{staticClass:"btn-icon",attrs:{name:i.name}}),s("div",{staticClass:"btn-text"},[t._v(t._s(i.title))])],1)})),1)},a=[],r=i(6265),c=i.n(r),d={name:"BottomNavigationMenu",props:{active:String},data:()=>({user_id:null,user:null,nav:null}),async mounted(){this.user_id=5296876609,await c().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),"ru"===this.user.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"participation",name:"ticket",title:"Qatnashish"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},l=d,o=i(1001),n=(0,o.Z)(l,e,a,!1,null,"edcbd0fe",null),u=n.exports},7078:function(t,s,i){i.d(s,{Z:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"user-menu"},[s("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?s("img",{attrs:{src:t.user.photo,alt:t.user.name}}):s("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.user.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.user.name))])]),s("div",{staticClass:"user-tools"},[s("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},a=[],r=i(6265),c=i.n(r),d={name:"HeaderUserBar",data:()=>({user_id:0,user:null}),mounted(){window.Telegram.WebApp.initDataUnsafe.user;this.user_id=5296876609,c().get("https://server.gold-ticket.uz/api/user/"+this.user_id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t)))}},l=d,o=i(1001),n=(0,o.Z)(l,e,a,!1,null,"e1a2861a",null),u=n.exports},6171:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"container"}},[s("HeaderUserBar"),t._m(0)],1)},a=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"give-a-dream"}},[s("div",{staticClass:"gd-title"},[t._v("Подари мечту")]),s("div",{staticClass:"gd-icon"},[s("img",{attrs:{src:i(7050),alt:""}})]),s("div",{staticClass:"gd-description"},[t._v("В частности, экономическая повестка сегодняшнего дня способствует повышению качества направлений прогрессивного развития. Рыба Текст")]),s("div",{staticClass:"swiper gd-products"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:i(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:i(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:i(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:i(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"swiper-slide product-item"},[s("img",{attrs:{src:i(2786),alt:"Prodi=uct iTem"}}),s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])])])])])}],r=i(7078),c=i(3911),d={name:"GiveDream",components:{HeaderUserBar:r.Z,BottomNavigationMenu:c.Z},mounted(){document.title="Ticket Market",new Swiper(".gd-products",{watchSlidesProgress:!0,slidesPerView:3});const t=window.Telegram.WebApp.BackButton;t.show(),t.onClick((()=>{this.$router.push("/")}))}},l=d,o=i(1001),n=(0,o.Z)(l,e,a,!1,null,"a9a139ee",null),u=n.exports},7050:function(t,s,i){t.exports=i.p+"img/giv-a-dream.924c908d.svg"},2786:function(t,s,i){t.exports=i.p+"img/gd-default.6a91f35b.png"}}]);
//# sourceMappingURL=171.377119b0.js.map