"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[269],{2525:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"settings"}},[e("div",{staticClass:"user-pic"},[e("img",{attrs:{src:t.$store.state.photo?t.$store.state.photo:"https://gold-ticket.uz/tgs/avatar.png",alt:t.$store.state.name}})]),e("form",{staticClass:"settings-form",attrs:{action:""}},[e("div",{staticClass:"form-control"},["ru"===t.$store.state.lang?e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Имя")]):e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Isim")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-input",attrs:{id:"name",name:"name",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"form-control"},["ru"===t.$store.state.lang?e("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Телефон")]):e("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Telefon")]),e("input",{directives:[{name:"mask",rawName:"v-mask",value:"+998 (##) ###-##-##",expression:"'+998 (##) ###-##-##'"},{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-input",attrs:{id:"phone",name:"phone",disabled:!!t.$store.state.phone,type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])])])},o=[],n={name:"Settings",data:()=>({name:"",phone:""}),components:{},async mounted(){this.name=this.$store.state.name,this.phone=this.$store.state.phone,Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.onClick((()=>{Telegram.WebApp.MainButton.hide(),this.$router.push("/profile")})),Telegram.WebApp.MainButton.show(),"ru"===this.$store.state.lang?Telegram.WebApp.MainButton.setParams({text:"Сохранить",color:"#f2c058",text_color:"#FFF"}):Telegram.WebApp.MainButton.setParams({text:"Saqlash",color:"#f2c058",text_color:"#FFF"}),Telegram.WebApp.MainButton.onClick((async()=>{Telegram.WebApp.MainButton.showProgress(),await this.$store.dispatch("updateUser",{user_id:Telegram.WebApp.initDataUnsafe.user.id,data:{name:this.name,phone:this.phone}})}))}},r=n,i=a(1001),l=(0,i.Z)(r,s,o,!1,null,"7e36a2cb",null),p=l.exports}}]);
//# sourceMappingURL=269.d85ab3a1.js.map