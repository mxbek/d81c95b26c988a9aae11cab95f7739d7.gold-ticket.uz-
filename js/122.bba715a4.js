"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[122],{109:function(t,a,s){s.d(a,{Z:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(s){return a("router-link",{key:s.name,staticClass:"btn",class:s.className&&t.active===s.className?"active":"",attrs:{tag:"div",to:"home"===s.className?"/":s.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:s.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(s.title))])],1)})),1)},i=[],n={name:"BottomNavigationMenu",props:{active:String},data:()=>({nav:[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]})},r=n,o=s(1001),c=(0,o.Z)(r,e,i,!1,null,"92cb82b2",null),l=c.exports},8861:function(t,a,s){s.d(a,{Z:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},[a("img",{attrs:{src:t.photo,alt:t.first_name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.first_name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],n=s(6265),r=s.n(n),o={name:"HeaderUserBar",data:()=>({user_id:0,photo:"",first_name:""}),mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,r().get("https://back.sombra.uz/api/user/"+this.user_id).then((t=>{t.data.data&&(this.photo=t.data.data.photo,this.first_name=t.data.data.first_name)})).catch((t=>console.log(t)))}},c=o,l=s(1001),u=(0,l.Z)(c,e,i,!1,null,"c040d408",null),m=u.exports},7122:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),a("div",{attrs:{id:"partners"}},[a("div",{staticClass:"partners-title"},[t._v("Ticket Market")]),a("div",{staticClass:"partners-tgs"},[a("tgs-player",{attrs:{autoplay:"",loop:"",mode:"normal",src:"https://gold-ticket.uz/tgs/man_mac.tgs"}})],1),a("div",{staticClass:"market-soon"},[t._v("Скоро запусимся")])]),a("BottomNavigationMenu",{attrs:{active:"market"}})],1)},i=[],n=s(8861),r=s(109),o={name:"Market",components:{HeaderUserBar:n.Z,BottomNavigationMenu:r.Z},mounted(){document.title="Ticket Market"}},c=o,l=s(1001),u=(0,l.Z)(c,e,i,!1,null,"1a7fe8fc",null),m=u.exports}}]);
//# sourceMappingURL=122.bba715a4.js.map