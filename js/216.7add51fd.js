"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[216],{9216:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("div",{class:t.$store.state.premium?" premium":null,attrs:{id:"take-part"}},[e("div",{staticClass:"tp-bg"}),"ru"===t.$store.state.lang?e("div",{staticClass:"tp-title"},[t._v("Покупка тикетов")]):e("div",{staticClass:"tp-title"},[t._v("Ticketlar sotib olish")]),t._m(0),"ru"===t.$store.state.lang?e("div",{staticClass:"tp-desc"},[t._v("В своём стремлении"),e("br"),t._v("улучшить пользовательский..")]):e("div",{staticClass:"tp-desc"},[t._v("O'z harakatingizbilan"),e("br"),t._v("Imkoniyatni oshiring")]),e("div",{staticClass:"tp-form"},[e("div",{staticClass:"btn tp-ticket-rm",attrs:{id:"removeTicket"},on:{click:function(e){e.preventDefault(),t.ticketCount<3||t.ticketCount--}}},[e("ion-icon",{attrs:{name:"remove"}})],1),e("div",{staticClass:"tp-ticket-count",attrs:{id:"countTicket"}},[t._v("2")]),e("div",{staticClass:"btn tp-ticket-add",attrs:{id:"addTicket"},on:{click:function(e){e.preventDefault(),t.ticketCount++}}},[e("ion-icon",{attrs:{name:"add"}})],1)])])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tp-pic"},[e("img",{attrs:{src:i(7102),alt:"Take Part"}})])}],n=i(6265),o=i.n(n),c={name:"Participation",data:()=>({ticketCount:2}),async mounted(){let t;document.title="Принять участие",Telegram.WebApp.BackButton.show(),Telegram.WebApp.BackButton.onClick((()=>this.$router.push("/"))),t="ru"===this.$store.state.lang?"Участвовать":"Qatnashish",Telegram.WebApp.MainButton.show(),Telegram.WebApp.MainButton.text=t,Telegram.WebApp.MainButton.textColor="#FFF",Telegram.WebApp.MainButton.color="#f2c058",Telegram.WebApp.MainButton.setParams({color:"#f2c058"}),Telegram.WebApp.onEvent("mainButtonClicked",(()=>{this.buyTicket(),Telegram.WebApp.offEvent("mainButtonClicked",(()=>this.buyTicket()))}))},methods:{async buyTicket(){let t;t="ru"===this.$store.state.lang?"тикеты, купить чтобы увеличивающие шансы на выигрыш":"ticketlar, imkoniyatni oshirish uchun sotib olish",await o().post("https://server.gold-ticket.uz/api/invoice",{payload:this.ticketCount,description:t}).then((t=>{window.Telegram.WebApp.openInvoice(t.data.result)})).catch((t=>{"ru"===this.$store.state.lang?Telegram.WebApp.showPopup({title:"⚠️Ошибка!",message:"Произошла ошибка, повторите попытку больше ",buttons:[{id:"success",type:"ok",text:"Повторить"}]}):Telegram.WebApp.showPopup({title:"⚠️Xato!",message:"Tolov hisibi yaratishda hatolik yuz berdi!\n\n Keyinroq qayta urunib koring",buttons:[{id:"success",type:"ok",text:"Davom etish"}]}),Telegram.WebApp.HapticFeedback.notificationOccurred("error")}))}},watch:{ticketCount(){document.getElementById("countTicket").innerText=this.ticketCount}}},r=c,l=i(1001),u=(0,l.Z)(r,a,s,!1,null,"5b316836",null),p=u.exports},7102:function(t,e,i){t.exports=i.p+"img/participation.309cd640.svg"}}]);
//# sourceMappingURL=216.7add51fd.js.map