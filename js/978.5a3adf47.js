"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[978],{9978:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"settings"}},[e("div",{staticClass:"user-pic"},["https://server.gold-ticket.uz/storage/app/"!==t.photo?e("img",{attrs:{src:t.photo,alt:"User Pic"},on:{click:function(t){return t.preventDefault(),this.update()}}}):e("img",{attrs:{src:"https://gold-ticket.uz/tgs/avatar.png",alt:"User Pic"},on:{click:function(t){return t.preventDefault(),this.update()}}})]),e("form",{staticClass:"settings-form",attrs:{action:""}},[e("div",{staticClass:"form-control"},["ru"===t.lang?e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Имя")]):e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Isim")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-input",attrs:{id:"name",name:"name",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"form-control"},["ru"===t.lang?e("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Телефон")]):e("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Telefon")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-input",attrs:{id:"phone",name:"phone",disabled:!!t.phone,type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])])])])},n=[],o=a(6265),i=a.n(o),r={name:"Settings",data:()=>({photo:null,lang:null,name:null,phone:null}),async mounted(){await i().get("https://server.gold-ticket.uz/api/user/5296876609").then((t=>{this.photo=t.data.data.photo,this.lang=t.data.data.lang,this.name=t.data.data.name,this.phone=t.data.data.phone})).catch((t=>console.log(t))),Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.show().onClick((()=>{this.$router.push("/")})),Telegram.WebApp.MainButton.show(),"ru"===this.lang?Telegram.WebApp.MainButton.setParams({text:"Сохранить",color:"#f2c058",text_color:"#FFF"}):Telegram.WebApp.MainButton.setParams({text:"Saqlash",color:"#f2c058",text_color:"#FFF"}),Telegram.WebApp.MainButton.onClick((()=>{Telegram.WebApp.MainButton.showProgress(),this.submit()}))},methods:{async submit(){await i().post("https://server.gold-ticket.uz/api/user/"+Telegram.WebApp.initDataUnsafe.user.id,{first_name:this.first_name,phone:this.phone}).then((t=>{Telegram.WebApp.MainButton.hideProgress(),"ru"===this.lang?Telegram.WebApp.showPopup({title:"Успешно",message:"Ваши данные успешно сохранены",buttons:[{id:"success",type:"ok",text:"Ок"}]}):Telegram.WebApp.showPopup({title:"Muvofaqiyatli!",message:"Sizning malumotlaringiz muvofatqiyatli saqlandi",buttons:[{id:"success",type:"ok",text:"Ok"}]}),this.$router.push("/")})).catch((t=>{Telegram.WebApp.showPopup(t)}))}}},l=r,p=a(1001),u=(0,p.Z)(l,s,n,!1,null,"91e6337c",null),c=u.exports}}]);
//# sourceMappingURL=978.5a3adf47.js.map