"use strict";(self["webpackChunkgolden_ticket"]=self["webpackChunkgolden_ticket"]||[]).push([[242],{1863:function(t,s,a){a.d(s,{Z:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"bottom-navigation"}},t._l(t.$store.state.bottomNavigationMenu,(function(a){return s("router-link",{key:a.name,staticClass:"btn",class:a.className&&t.active===a.className?"active":"",attrs:{tag:"div",to:"home"===a.className?"/":a.className}},[s("ion-icon",{staticClass:"btn-icon",attrs:{name:"ios"===t.$store.state.platform||"ipados"===t.$store.state.platform||"macos"===t.$store.state.platform?a.className&&t.active===a.className?a.name:`${a.name}-outline`:a.name}}),s("div",{staticClass:"btn-text"},[t._v(t._s(a.title))])],1)})),1)},i=[],r={name:"BottomNavigationMenu",props:{active:String}},o=r,n=a(1001),c=(0,n.Z)(o,e,i,!1,null,"5a0d344a",null),l=c.exports},5758:function(t,s,a){a.d(s,{Z:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"user-menu"},[s("div",{staticClass:"user-pic"},[s("img",{attrs:{src:t.$store.state.photo?t.$store.state.photo:"https://gold-ticket.uz/tgs/avatar.png",alt:t.$store.state.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.$store.state.name))])]),s("div",{staticClass:"user-tools"},[s("router-link",{staticClass:"btn-icon settings",attrs:{tag:"div",to:"/qr-code-cashback"}},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:t.settingsIcon}})],1)],1)])},i=[],r={name:"HeaderUserBar",data:()=>({settingsIcon:null}),async mounted(){this.settingsIcon="ios"===Telegram.WebApp.platform||"ipados"===Telegram.WebApp.platform||"macos"===Telegram.WebApp.platform?"scan-circle-outline":"scan-circle"}},o=r,n=a(1001),c=(0,n.Z)(o,e,i,!1,null,"3b4ffc89",null),l=c.exports},7242:function(t,s,a){a.r(s),a.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"profile"}},[s("div",{staticClass:"user-pic"},[s("img",{attrs:{src:t.$store.state.photo?t.$store.state.photo:"https://gold-ticket.uz/tgs/avatar.png",alt:t.$store.state.name}})]),s("div",{staticClass:"user-name"},[t._v(t._s(this.$store.state.name)+" "),t.$store.state.premium?s("svg",{attrs:{width:"25",height:"23",viewBox:"0 0 25 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M24.9305 18.4431C24.9826 18.4251 25 18.3892 25 18.3534V18.2637C25 18.2098 24.9653 18.1739 24.9131 18.1739H20.205C19.3711 18.1739 18.6762 17.4743 18.6762 16.5952V14.0655C18.6762 14.0117 18.7109 13.9758 18.763 13.9758H21.2822C21.3343 13.9758 21.369 13.9399 21.369 13.8861V13.7426C21.369 13.6888 21.3343 13.6529 21.2995 13.6529C21.1432 13.617 21.0389 13.4735 21.0389 13.312C21.0389 13.1505 21.1606 13.007 21.2995 12.9711C21.3517 12.9532 21.369 12.9173 21.369 12.8814V12.8635C21.369 12.8097 21.3343 12.7738 21.2995 12.7738C21.1432 12.7379 21.0389 12.5944 21.0389 12.4329C21.0389 12.2715 21.1606 12.1279 21.2995 12.092C21.3517 12.0741 21.369 12.0382 21.369 12.0023V11.9844C21.369 11.9306 21.3343 11.8947 21.2995 11.8947C21.1432 11.8588 21.0389 11.7153 21.0389 11.5538C21.0389 11.3924 21.1606 11.2488 21.2995 11.2129C21.3517 11.195 21.369 11.1591 21.369 11.1232V11.0515C21.369 10.9977 21.3343 10.9618 21.2995 10.9618C21.1432 10.9259 21.0389 10.7824 21.0389 10.6209C21.0389 10.4594 21.1606 10.3159 21.2995 10.28C21.3517 10.2621 21.369 10.2262 21.369 10.1903V10.1544C21.369 10.1006 21.3343 10.0647 21.2995 10.0647C21.1432 10.0289 21.0389 9.88534 21.0389 9.72387C21.0389 9.5624 21.1606 9.41888 21.2995 9.383C21.3517 9.36506 21.369 9.32918 21.369 9.29329V9.23947C21.369 9.18565 21.3343 9.14977 21.2822 9.14977H14.1244V9.81357H13.8638V9.14977H6.98401V13.9758H9.34678V18.1739H7.69633C6.0285 18.1739 4.67337 16.7746 4.67337 15.0523V4.84399C4.67337 4.84399 4.67339 4.82605 4.69076 4.82605H8.70398C9.05145 4.82605 9.34678 5.13105 9.34678 5.48986V7.23011H13.8638V6.42278H14.1244V7.23011H18.6936V0H14.1244V0.807332H13.8638V0H3.85684C1.71994 0 0 1.77613 0 3.98284V17.0796C0 20.3448 2.57123 23 5.73315 23H8.91245C11.3794 23 13.4295 21.188 13.8986 18.7839H13.8638V17.6537H14.1244V18.7839H14.0897C14.5587 21.188 16.6261 23 19.0758 23H24.8784C24.9305 23 24.9653 22.9641 24.9653 22.9103V22.8206C24.9653 22.7668 24.9305 22.7309 24.8958 22.7309C24.7394 22.695 24.6352 22.5515 24.6352 22.39C24.6352 22.2286 24.7568 22.085 24.8958 22.0491C24.9479 22.0312 24.9653 21.9953 24.9653 21.9594V21.9415C24.9653 21.8877 24.9305 21.8518 24.8958 21.8518C24.7394 21.8159 24.6352 21.6724 24.6352 21.5109C24.6352 21.3495 24.7568 21.2059 24.8958 21.17C24.9479 21.1521 24.9653 21.1162 24.9653 21.0803V21.0624C24.9653 21.0086 24.9305 20.9727 24.8958 20.9727C24.7394 20.9368 24.6352 20.7933 24.6352 20.6318C24.6352 20.4704 24.7568 20.3268 24.8958 20.291C24.9479 20.273 24.9653 20.2371 24.9653 20.2012V20.1833C24.9653 20.1295 24.9305 20.0936 24.8958 20.0936C24.7394 20.0577 24.6352 19.9142 24.6352 19.7527C24.6352 19.5913 24.7568 19.4477 24.8958 19.4119C24.9479 19.3939 24.9653 19.358 24.9653 19.3222V19.3042C24.9653 19.2504 24.9305 19.2145 24.8958 19.2145C24.7394 19.1786 24.6352 19.0351 24.6352 18.8736C24.6526 18.6225 24.7742 18.4789 24.9305 18.4431ZM13.8812 1.91966H14.1418V3.04992H13.8812V1.91966ZM13.8812 4.16225H14.1418V5.29251H13.8812V4.16225ZM14.1244 16.5234H13.8638V15.3931H14.1244V16.5234ZM14.1244 14.2808H13.8638V13.1505H14.1244V14.2808ZM14.1244 12.0203H13.8638V10.89H14.1244V12.0203Z",fill:"#FACA21"}})]):t._e()]),s("div",{staticClass:"user-tickets-count"},[s("ion-icon",{staticClass:"ai-icon",attrs:{name:"ios"===t.$store.state.platform||"macos"===t.$store.state.platform?"ticket-outline":"ticket"}}),t._v(" "+t._s(t.$store.state.tickets_count)+" ")],1),s("div",{staticClass:"user-btn-tools"},[s("div",{staticClass:"btn-group"},[s("router-link",{staticClass:"user-tickets-btn btn",attrs:{to:"/settings",tag:"div"}},[t._v(" "+t._s("ru"===t.$store.state.lang?"Персональные данные":"Shaxsiy malumotlar")+" "),s("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),s("router-link",{staticClass:"user-tickets-btn btn",attrs:{to:"/my-tickets",tag:"div"}},[t._v(" "+t._s("ru"===t.$store.state.lang?"Мои тикеты":"Mening ticketlarim")+" "),s("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),s("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/participation",tag:"div"}},[t._v(" "+t._s("ru"===t.$store.state.lang?"Повысить шансы":"Imkoniyatni oshirish")+" "),s("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1)],1),s("div",{staticClass:"btn-group"},[s("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/terms",tag:"div"}},[t._v(" "+t._s("ru"===t.$store.state.lang?"Условия использования":"Foydalanish shartlari")+" "),s("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1),s("router-link",{staticClass:"offers-for-user btn",attrs:{to:"/policy",tag:"div"}},[t._v(" "+t._s("ru"===t.$store.state.lang?"Оферта":"Oferta")+" "),s("ion-icon",{staticClass:"arrow-right-icon",attrs:{name:"chevron-forward-outline"}})],1)],1)])]),s("BottomNavigationMenu",{attrs:{active:"profile",lang:"ru"===t.$store.state.lang}})],1)},i=[],r=a(5758),o=a(1863),n={name:"Profile",components:{HeaderUserBar:r.Z,BottomNavigationMenu:o.Z},async mounted(){await this.$store.dispatch("getTickets",Telegram.WebApp.initDataUnsafe.user.id),Telegram.WebApp.BackButton.hide()}},c=n,l=a(1001),C=(0,l.Z)(c,e,i,!1,null,"020eda14",null),u=C.exports}}]);
//# sourceMappingURL=242.ea4ba806.js.map