"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[605],{7151:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(s){return a("router-link",{key:s.name,staticClass:"btn",class:s.className&&t.active===s.className?"active":"",attrs:{tag:"div",to:"home"===s.className?"/":s.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:"ios"===t.$store.state.platform||"ipados"===t.$store.state.platform||"macos"===t.$store.state.platform?s.className&&t.active===s.className?s.name:`${s.name}-outline`:s.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(s.title))])],1)})),1)},n=[],r={name:"BottomNavigationMenu",props:{active:String},data:()=>({nav:[]}),mounted(){let t=this.$store.state.lang;this.nav=[{className:"home",name:"home",title:t?"Главное":"Asosiy"},{className:"market",name:"bag-handle",title:t?"Маркет":"Market"},{className:"partners",name:"star",title:t?"Спонсоры":"Homiylar"},{className:"profile",name:"person",title:t?"Профиль":"Profil"}]}},i=r,o=s(1001),l=(0,o.Z)(i,e,n,!1,null,"4706555a",null),c=l.exports},5758:function(t,a,s){s.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},[a("img",{attrs:{src:t.$store.state.photo?t.$store.state.photo:"https://gold-ticket.uz/tgs/avatar.png",alt:t.$store.state.name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.$store.state.name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/qr-code-cashback"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:t.settingsIcon}})],1)],1)])},n=[],r={name:"HeaderUserBar",data:()=>({settingsIcon:null}),async mounted(){this.settingsIcon="ios"===Telegram.WebApp.platform||"ipados"===Telegram.WebApp.platform||"macos"===Telegram.WebApp.platform?"scan-circle-outline":"scan-circle"}},i=r,o=s(1001),l=(0,o.Z)(i,e,n,!1,null,"3b4ffc89",null),c=l.exports},4605:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),a("div",{attrs:{id:"partners"}},[a("div",{staticClass:"partners-title"},[t._v("Партнеры")]),a("tgs-player",{attrs:{autoplay:"",mode:"normal",src:"https://raw.githubusercontent.com/mxbek/tgs-stickers/main/4909244268977062445.tgs"}}),a("div",{staticClass:"partners-grid"},[a("div",{staticClass:"desc"},[t._v(t._s(this.$store.state.lang?"Спонсоры: ряд партнёров и спонсоров запустится 1 декабря 2022г.":"Homiylar: Bir qator hamkorlar va homiylar 2022-yil 1-dekabrda ishga tushadi."))])])],1),a("BottomNavigationMenu",{attrs:{active:"partners",lang:"ru"===t.$store.state.lang}})],1)},n=[],r=s(5758),i=s(7151),o={name:"Partners",components:{HeaderUserBar:r.Z,BottomNavigationMenu:i.Z},data:()=>({lang:null}),async mounted(){}},l=o,c=s(1001),m=(0,c.Z)(l,e,n,!1,null,"6236fe5c",null),u=m.exports}}]);
//# sourceMappingURL=605.1b855c25.js.map