"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[283],{1408:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(s){return a("router-link",{key:s.name,staticClass:"btn",class:s.className&&t.active===s.className?"active":"",attrs:{tag:"div",to:"home"===s.className?"/":s.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:s.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(s.title))])],1)})),1)},n=[],i={name:"BottomNavigationMenu",props:{active:String},data:()=>({nav:null}),async mounted(){"ru"===this.$store.state.lang?this.nav=[{className:"home",name:"home",title:"Главное"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]:this.nav=[{className:"home",name:"home",title:"Asosiy"},{className:"market",name:"bag-handle",title:"Market"},{className:"partners",name:"star-half-outline",title:"Homiylar"},{className:"profile",name:"person",title:"Profil"}]}},r=i,l=s(1001),o=(0,l.Z)(r,e,n,!1,null,"8d5ee576",null),c=o.exports},8525:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.$store.state.photo?a("img",{attrs:{src:t.$store.state.photo,alt:t.$store.state.name}}):a("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:t.$store.state.name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.$store.state.name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},n=[],i={name:"HeaderUserBar",async mounted(){}},r=i,l=s(1001),o=(0,l.Z)(r,e,n,!1,null,"6f6cf638",null),c=o.exports},283:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),a("div",{attrs:{id:"partners"}},[a("div",{staticClass:"partners-title"},[t._v("Партнеры")]),a("tgs-player",{attrs:{autoplay:"",mode:"normal",src:"https://raw.githubusercontent.com/mxbek/tgs-stickers/main/4909244268977062445.tgs"}}),a("div",{staticClass:"partners-grid"},["ru"===t.lang?a("div",{staticClass:"desc"},[t._v("Спонсоры: ряд партнёров и спонсоров запустится 1 декабря 2022г.")]):a("div",{staticClass:"desc"},[t._v("Homiylar: Bir qator hamkorlar va homiylar 2022-yil 1-dekabrda ishga tushadi.")])])],1),a("BottomNavigationMenu",{attrs:{active:"partners"}})],1)},n=[],i=s(8525),r=s(1408),l={name:"Partners",components:{HeaderUserBar:i.Z,BottomNavigationMenu:r.Z},data:()=>({lang:null}),async mounted(){}},o=l,c=s(1001),m=(0,c.Z)(o,e,n,!1,null,"3c847b58",null),u=m.exports}}]);
//# sourceMappingURL=283.c85873f5.js.map