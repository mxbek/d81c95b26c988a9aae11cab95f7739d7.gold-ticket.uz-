"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[657],{109:function(t,a,s){s.d(a,{Z:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(s){return a("router-link",{key:s.name,staticClass:"btn",class:s.className&&t.active===s.className?"active":"",attrs:{tag:"div",to:"home"===s.className?"/":s.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:s.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(s.title))])],1)})),1)},i=[],n={name:"BottomNavigationMenu",props:{active:String},data:()=>({nav:[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Маркет"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]})},r=n,o=s(1001),c=(0,o.Z)(r,e,i,!1,null,"92cb82b2",null),l=c.exports},8861:function(t,a,s){s.d(a,{Z:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},[a("img",{attrs:{src:t.photo,alt:t.first_name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.first_name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],n=s(6265),r=s.n(n),o={name:"HeaderUserBar",data:()=>({user_id:0,photo:"",first_name:""}),mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,r().get("https://back.sombra.uz/api/user/"+this.user_id).then((t=>{t.data.data&&(this.photo=t.data.data.photo,this.first_name=t.data.data.first_name)})).catch((t=>console.log(t)))}},c=o,l=s(1001),d=(0,l.Z)(c,e,i,!1,null,"c040d408",null),u=d.exports},5657:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),a("div",{attrs:{id:"my-tickets"}},[a("div",{staticClass:"mt-title"},[t._v("Мои тикеты")]),a("div",{staticClass:"mt-list"},t._l(t.tickets_data,(function(s){return a("div",{staticClass:"ticket-id"},[t._v("№ "+t._s(s.code))])})),0)])],1)},i=[],n=s(8861),r=s(109),o=s(6265),c=s.n(o),l={name:"MyTickets",data:()=>({user_id:0,tickets_data:0}),components:{HeaderUserBar:n.Z,BottomNavigationMenu:r.Z},mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user,a=window.Telegram.WebApp.BackButton;a.show(),a.onClick((()=>{this.$router.push("/")})),this.user_id=t.id,c().get("https://back.sombra.uz/api/ticket/"+this.user_id).then((t=>{t.data.data&&(this.tickets_data=t.data.data)})).catch((t=>console.log(t)))}},d=l,u=s(1001),m=(0,u.Z)(d,e,i,!1,null,null,null),h=m.exports}}]);
//# sourceMappingURL=657.625c2af2.js.map