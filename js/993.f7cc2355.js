"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[993],{4182:function(t,s,a){a.d(s,{Z:function(){return n}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(a){return s("router-link",{key:a.name,staticClass:"btn",class:a.className&&t.active===a.className?"active":"",attrs:{tag:"div",to:"home"===a.className?"/":a.className}},[s("ion-icon",{staticClass:"btn-icon",attrs:{name:"ios"===t.$store.state.platform||"ipados"===t.$store.state.platform||"macos"===t.$store.state.platform?a.className&&t.active===a.className?a.name:`${a.name}-outline`:a.name}}),s("div",{staticClass:"btn-text"},[t._v(t._s(a.title))])],1)})),1)},i=[],c={name:"BottomNavigationMenu",props:{active:String},data:()=>({nav:[]}),mounted(){let t="ru"===sessionStorage.getItem("__sombra_gt_appLang");this.nav=[{className:"home",name:"home",title:t?"Главное":"Asosiy"},{className:"market",name:"bag-handle",title:t?"Маркет":"Market"},{className:"partners",name:"star",title:t?"Спонсоры":"Homiylar"},{className:"profile",name:"person",title:t?"Профиль":"Profil"}]}},r=c,o=a(1001),d=(0,o.Z)(r,e,i,!1,null,"b9dca2c4",null),n=d.exports},5758:function(t,s,a){a.d(s,{Z:function(){return n}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"user-menu"},[s("div",{staticClass:"user-pic"},[s("img",{attrs:{src:t.$store.state.photo?t.$store.state.photo:"https://gold-ticket.uz/tgs/avatar.png",alt:t.$store.state.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.$store.state.name))])]),s("div",{staticClass:"user-tools"},[s("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/qr-code-cashback"}},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:t.settingsIcon}})],1)],1)])},i=[],c={name:"HeaderUserBar",data:()=>({settingsIcon:null}),async mounted(){this.settingsIcon="ios"===Telegram.WebApp.platform||"ipados"===Telegram.WebApp.platform||"macos"===Telegram.WebApp.platform?"scan-circle-outline":"scan-circle"}},r=c,o=a(1001),d=(0,o.Z)(r,e,i,!1,null,"3b4ffc89",null),n=d.exports},4993:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"container"}},[s("HeaderUserBar"),t._m(0)],1)},i=[function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"give-a-dream"}},[s("div",{staticClass:"gd-title"},[t._v("Подари мечту")]),s("div",{staticClass:"gd-description"},[t._v("В частности, экономическая повестка сегодняшнего дня способствует повышению качества направлений прогрессивного развития. Рыба Текст")]),s("div",{staticClass:"gd-products"},[s("div",{staticClass:"product-item"},[s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"product-item"},[s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"product-item"},[s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"product-item"},[s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])]),s("div",{staticClass:"product-item"},[s("div",{staticClass:"gd-product-title"},[t._v("Product Title")]),s("div",{staticClass:"gd-product-desc"},[t._v("Lorem ipsum dolor sit amet, consectetur")]),s("div",{staticClass:"gd-product-price"},[t._v("15 000 шт.")]),s("div",{staticClass:"gd-product-buy-btn"},[t._v("Подарить")])])])])}],c=a(5758),r=a(4182),o={name:"GiveDream",components:{HeaderUserBar:c.Z,BottomNavigationMenu:r.Z},mounted(){document.title="Ticket Market",Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.onClick((()=>{this.$router.push("/")}))}},d=o,n=a(1001),l=(0,n.Z)(d,e,i,!1,null,"31911f9b",null),u=l.exports}}]);
//# sourceMappingURL=993.f7cc2355.js.map