"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[498],{9963:function(t,a,s){s.d(a,{Z:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"bottom-navigation"}},t._l(t.nav,(function(s){return a("router-link",{key:s.name,staticClass:"btn",class:s.className&&t.active===s.className?"active":"",attrs:{tag:"div",to:"home"===s.className?"/":s.className}},[a("ion-icon",{staticClass:"btn-icon",attrs:{name:s.name}}),a("div",{staticClass:"btn-text"},[t._v(t._s(s.title))])],1)})),1)},i=[],r={name:"BottomNavigationMenu",props:{active:String},data:()=>({nav:[{className:"home",name:"home",title:"Главное"},{className:"participation",name:"ticket",title:"Участие"},{className:"market",name:"bag-handle",title:"Корзинка"},{className:"partners",name:"star-half-outline",title:"Спонсоры"},{className:"profile",name:"person",title:"Профиль"}]})},n=r,c=s(1001),o=(0,c.Z)(n,e,i,!1,null,"d3285f7c",null),l=o.exports},8861:function(t,a,s){s.d(a,{Z:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"user-menu"},[a("div",{staticClass:"user-pic"},[a("img",{attrs:{src:t.photo,alt:t.first_name}})]),a("div",{staticClass:"user-name"},[t._v(t._s(this.first_name))])]),a("div",{staticClass:"user-tools"},[a("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/settings"}},[a("ion-icon",{staticClass:"ai-icon",attrs:{name:"cog-outline"}})],1)],1)])},i=[],r=s(6265),n=s.n(r),c={name:"HeaderUserBar",data:()=>({user_id:0,photo:"",first_name:""}),mounted(){const t=window.Telegram.WebApp.initDataUnsafe.user;this.user_id=t.id,n().get("https://back.sombra.uz/api/user/"+this.user_id).then((t=>{t.data.data&&(this.photo=t.data.data.photo,this.first_name=t.data.data.first_name)})).catch((t=>console.log(t)))}},o=c,l=s(1001),d=(0,l.Z)(o,e,i,!1,null,"c040d408",null),m=d.exports},6498:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"container"}},[a("HeaderUserBar"),t._m(0),a("BottomNavigationMenu",{attrs:{active:"market"}})],1)},i=[function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"partners"}},[a("div",{staticClass:"partners-title"},[t._v("Ticket Market")]),a("div",{staticClass:"partners-grid"},[a("div",{staticClass:"partners-card"},[a("img",{attrs:{src:s(5832),alt:"Partner #1"}})]),a("div",{staticClass:"partners-card"},[a("img",{attrs:{src:s(1691),alt:"Partner #2"}})]),a("div",{staticClass:"partners-card"},[a("img",{attrs:{src:s(7153),alt:"Partner #3"}})]),a("div",{staticClass:"partners-card"},[a("img",{attrs:{src:s(5916),alt:"Partner #4"}})]),a("div",{staticClass:"partners-card"},[a("img",{attrs:{src:s(2740),alt:"Partner #5"}})]),a("div",{staticClass:"partners-card"},[a("img",{attrs:{src:s(9068),alt:"Partner #6"}})])])])}],r=s(8861),n=s(9963),c={name:"Market",components:{HeaderUserBar:r.Z,BottomNavigationMenu:n.Z},mounted(){document.title="Ticket Market"}},o=c,l=s(1001),d=(0,l.Z)(o,e,i,!1,null,"59b72710",null),m=d.exports},5832:function(t,a,s){t.exports=s.p+"img/grid1.02ede2e6.png"},1691:function(t,a,s){t.exports=s.p+"img/grid2.e1b8ab1c.png"},7153:function(t,a,s){t.exports=s.p+"img/grid3.a09ff574.png"},5916:function(t,a,s){t.exports=s.p+"img/grid4.83aa18d6.png"},2740:function(t,a,s){t.exports=s.p+"img/grid5.4645fc8b.png"},9068:function(t,a,s){t.exports=s.p+"img/grid6.0ca8afa1.png"}}]);
//# sourceMappingURL=498.222514af.js.map