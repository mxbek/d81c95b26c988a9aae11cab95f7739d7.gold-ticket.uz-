"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[715],{3715:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"settings"}},[e("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.user.photo?e("img",{attrs:{src:t.user.photo,alt:"User Pic"},on:{click:function(t){return t.preventDefault(),this.update()}}}):e("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:"User Pic"},on:{click:function(t){return t.preventDefault(),this.update()}}})]),e("form",{staticClass:"settings-form",attrs:{action:""}},[e("div",{staticClass:"form-control"},["ru"===t.user.lang?e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Имя")]):e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Isim")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-input",attrs:{id:"name",name:"name",type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),e("div",{staticClass:"form-control"},["ru"===t.user.lang?e("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Телефон")]):e("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Telefon")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-input",attrs:{id:"phone",name:"phone",disabled:"",type:"text"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})])])])])},r=[],n=a(6265),o=a.n(n),i={name:"Settings",data:()=>({user:null,name:"",phone:""}),async mounted(){await o().get("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id).then((t=>{this.user=t.data.data})).catch((t=>console.log(t))),Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.show().onClick((()=>{this.$router.push("/")})),Telegram.WebApp.MainButton.show(),"ru"===this.user.local?Telegram.WebApp.MainButton.setParams({text:"Сохранить",color:"#f2c058",text_color:"#FFF"}):Telegram.WebApp.MainButton.setParams({text:"Saqlash",color:"#f2c058",text_color:"#FFF"}),Telegram.WebApp.MainButton.onClick((()=>{Telegram.WebApp.MainButton.showProgress(),o().post("https://server.gold-tiket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id,{first_name:this.first_name,last_name:this.last_name,email:this.email}).then((t=>{this.$router.push("/")})).catch((t=>{Telegram.WebApp.showPopup(t)}))}))}},l=i,u=a(1001),p=(0,u.Z)(l,s,r,!1,null,"1d6a90cc",null),c=p.exports}}]);
//# sourceMappingURL=715.f679f6ea.js.map