(window.webpackJsonp=window.webpackJsonp||[]).push([[1,9,15,16,17],{334:function(e,t,r){e.exports=r.p+"img/edit.2c345f6.svg"},352:function(e,t,r){var content=r(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(96).default)("be878f8c",content,!0,{sourceMap:!1})},353:function(e,t,r){var content=r(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(96).default)("17c09ce9",content,!0,{sourceMap:!1})},355:function(e,t,r){e.exports=r.p+"img/close.361ad9a.png"},356:function(e,t,r){var content=r(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(96).default)("98b6a2d2",content,!0,{sourceMap:!1})},362:function(e,t,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(96).default)("96e521f8",content,!0,{sourceMap:!1})},373:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(45),r(11),r(39),{data:function(){return{dates:{start:"",end:""},alreadyDates:[],disabledDates:[],isPosted:!1}},props:{targetedUser:{}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/planning",{headers:{user_1:e.$auth.user.id,user_2:e.targetedUser.id}});case 2:(r=t.sent)&&r.forEach((function(t){e.alreadyDates.push({highlight:{start:{color:"red",fillMode:"solid"},base:{color:"red",fillMode:"light"},end:{color:"red",fillMode:"solid"}},dates:{start:new Date(t.start),end:new Date(t.end)}}),e.disabledDates.push({start:t.start,end:t.end})}));case 4:case"end":return t.stop()}}),t)})))()},methods:{closeHost:function(){this.$emit("close-host")},showDate:function(){console.log(this.dates)},postDemand:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return body={by:e.$auth.user.id,with:e.targetedUser.id,start:e.dates.start,end:e.dates.end},t.next=3,e.$axios.$post("/planning",body,{headers:{Authorization:e.$auth.$storage._state["_token.local"]}});case 3:201===t.sent&&(e.isPosted=!e.isPosted);case 5:case"end":return t.stop()}}),t)})))()},moveToSettings:function(){this.$store.commit("change","settings")}}}),c=r(44),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-white p-[30px] shadow shadow-gray-800 rounded-[10px] max-w-md"},[n("img",{staticClass:"absolute top-2 right-2 w-5 cursor-pointer",attrs:{src:r(355)},on:{click:e.closeHost}}),e._v(" "),!0===e.targetedUser.verified&&!0===this.$auth.user.verified?n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isPosted,expression:"!isPosted"}]},[n("p",{staticClass:"font-bold text-center text-lg"},[e._v("Faire une demande d'hôte")]),e._v(" "),n("form",{staticClass:"flex flex-col",on:{submit:function(t){return t.preventDefault(),e.postDemand.apply(null,arguments)}}},[n("label",{staticClass:"my-2 font-medium",attrs:{for:"planning"}},[e._v("De quand à quand?")]),e._v(" "),n("v-date-picker",{attrs:{attributes:e.alreadyDates,"min-date":new Date,"disabled-dates":e.disabledDates,"is-range":""},on:{dayclick:e.showDate},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}}),e._v(" "),n("button",[e._v("Envoyer")])],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isPosted,expression:"isPosted"}]},[n("p",[e._v("Votre demande à bien été prise en compte")])])]):e._e(),e._v(" "),!1===this.$auth.user.verified?n("div",[n("p",[e._v("Vous n'avez pas le statut vérifié. Pour obtenir ce statut, merci de transmettre les documents demandé.")]),e._v(" "),n("button",{on:{click:e.moveToSettings}},[e._v("Demander à être vérifié")])]):e._e(),e._v(" "),!1===e.targetedUser.verified&&!0===this.$auth.user.verified?n("div",[n("p",[e._v("Le correspondant ne possède pas le statut vérifié, vous ne pouvez pas encore effectuer de demandes d'hôte avec lui.")])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},375:function(e,t,r){e.exports=r.p+"img/chat.d6da2a2.png"},376:function(e,t,r){e.exports=r.p+"img/swipe.0517e11.png"},377:function(e,t,r){"use strict";r(352)},378:function(e,t,r){var n=r(95)((function(i){return i[1]}));n.push([e.i,".sidebar[data-v-c46c13e0]{height:calc(100vh - 100px)}.active[data-v-c46c13e0],.sidebar-shadow[data-v-c46c13e0]{box-shadow:5px 0 10px -4px #e2e2e2}.active[data-v-c46c13e0]{background-color:#fff}",""]),n.locals={},e.exports=n},379:function(e,t,r){e.exports=r.p+"img/swipe-arrow.0beda3d.png"},380:function(e,t,r){e.exports=r.p+"img/x-button.5cc943d.png"},381:function(e,t,r){e.exports=r.p+"img/checked.6f298cc.png"},382:function(e,t,r){"use strict";r(353)},383:function(e,t,r){var n=r(95)((function(i){return i[1]}));n.push([e.i,".vue-tinder[data-v-edcb5af4]{width:335px;height:447px;position:relative}.imgContainer[data-v-edcb5af4]{width:100%;height:100%;background-size:cover}.imgContainer>img[data-v-edcb5af4]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.like-pointer[data-v-edcb5af4],.nope-pointer[data-v-edcb5af4]{width:64px;height:64px}.show[data-v-edcb5af4]{max-height:1000px!important}.turn_arrow[data-v-edcb5af4]{transform:rotate(180deg)}",""]),n.locals={},e.exports=n},384:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTEyLjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iI0Y2QzcyQiIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTE2NyA1MTA2IGMtMjAgLTggLTQzIC0xOSAtNTEgLTI1IC0yNiAtMjIgLTQ2IC03OSAtNDYgLTEzMCAwIC00Mgo0MjEgLTE5NTYgNDMyIC0xOTY2IDMgLTMgMjA0MyAtMzU3IDIyOTEgLTM5OCA3MCAtMTIgMTI3IC0yNCAxMjcgLTI3IDAgLTMKLTU3IC0xNSAtMTI3IC0yNyAtMjQ5IC00MSAtMjI4OCAtMzk1IC0yMjkxIC0zOTggLTExIC0xMCAtNDMyIC0xOTI0IC00MzIKLTE5NjYgMCAtMTE4IDg4IC0xODkgMTk5IC0xNTkgNTEgMTQgNDY5OCAyMzk1IDQ3MjkgMjQyNCAzNyAzMyA1MiA3MCA1MiAxMjYKMCA1NiAtMTUgOTMgLTUyIDEyNiAtMjkgMjcgLTQ2NzUgMjQxMCAtNDcyNiAyNDI0IC00NyAxMyAtNTggMTIgLTEwNSAtNHoiLz4KPC9nPgo8L3N2Zz4K"},386:function(e,t,r){"use strict";r(356)},387:function(e,t,r){var n=r(95)((function(i){return i[1]}));n.push([e.i,".reverse[data-v-40c7d6bd]{display:flex;flex-direction:row-reverse}.hide-scrollbar[data-v-40c7d6bd]::-webkit-scrollbar{display:none}.hide-scrollbar[data-v-40c7d6bd]{-ms-overflow-style:none;scrollbar-width:none}",""]),n.locals={},e.exports=n},411:function(e,t,r){"use strict";r(362)},412:function(e,t,r){var n=r(95)((function(i){return i[1]}));n.push([e.i,".show[data-v-6771d835]{display:block!important}",""]),n.locals={},e.exports=n},424:function(e,t){},425:function(e,t){},434:function(e,t){},435:function(e,t){},455:function(e,t){},457:function(e,t){},458:function(e,t){},461:function(e,t){},462:function(e,t){},467:function(e,t){},468:function(e,t){},476:function(e,t){},482:function(e,t){},485:function(e,t){},489:function(e,t,r){"use strict";r.r(t);var n=r(146);var o=r(156),c=r(116);function l(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||Object(o.a)(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=r(3),f=(r(45),r(354),r(11),r(39),r(53),{components:{HostQuery:r(373).default},data:function(){return{input:"",messages:[],picture:this.$auth.$state.user.picture,isHostOpen:!1}},props:{targetedUser:{},match_id:{type:Number}},mounted:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("".concat("http://localhost:3000","/messages"),{headers:{Authorization:e.$auth.$storage._state["_token.local"],match_id:e.match_id}});case 2:t.sent.forEach((function(t){e.messages=[].concat(l(e.messages),[{value:t.message,isMe:t.from===e.$auth.$state.user.id}])})),e.socket=e.$nuxtSocket({path:"/socket.io",transports:["websocket"],reconnection:!0,auth:{token:e.$auth.$storage._state["_token.local"]},query:{me:e.$auth.$state.user.id}}),e.socket.on("message",(function(data){e.messages=[].concat(l(e.messages),[{value:data,isMe:!1}])}));case 6:case"end":return t.stop()}}),t)})))()},methods:{postMessage:function(){var data={user_id:this.targetedUser.id,message:this.input},e={match_id:this.match_id,from:this.$auth.$state.user.id,message:this.input};this.socket.emit("message",data),this.$axios.$post("".concat("http://localhost:3000","/messages"),e,{headers:{Authorization:this.$auth.$storage._state["_token.local"]}}),this.messages=[].concat(l(this.messages),[{value:this.input,isMe:!0}]),this.input=""},showHost:function(){this.isHostOpen=!this.isHostOpen}},computed:{needs:function(){return"H"===this.targetedUser.needs?"Peut héberger":"T"===this.targetedUser.needs?"Veut voyager":"Veut discuter"}}}),m=(r(386),r(44)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-[80%] relative"},[n("div",{staticClass:"h-[20%] bg-white flex flex-row justify-between"},[n("div",{staticClass:"w-[80%] flex items-center"},[n("div",{staticClass:"ml-[20px] mr-[10px] w-[80px] h-[80px] rounded-[100%] flex justify-center items-center border border-[#213B83]"},[n("div",{staticClass:"w-[70px] h-[70px] rounded-[100%] overflow-hidden"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:r(221)("./"+e.targetedUser.picture)}})])]),e._v(" "),n("div",[n("p",[e._v(e._s(e.targetedUser.name)+" "+e._s(e.targetedUser.surname))]),e._v(" "),n("p",[e._v(e._s(e.needs))])])]),e._v(" "),n("div",{staticClass:"w-[20%] flex flex-col items-center justify-center"},[n("button",{staticClass:"bg-[#F6C72B] text-white rounded-[5px] w-[80%] h-[34px] mt-[15px] mb-[7px]"},[e._v("Gérer l'amitié")]),e._v(" "),n("button",{staticClass:"bg-[#213B83] text-white rounded-[5px] w-[80%] h-[34px] mb-[15px] mt-[7px]",on:{click:e.showHost}},[e._v("Demande de voyage")])])]),e._v(" "),n("div",{staticClass:"h-[60%] overflow-auto flex flex-col-reverse hide-scrollbar px-4"},[n("ul",e._l(e.messages,(function(data){return n("li",{key:data.value,staticClass:"py-2.5",class:{reverse:data.isMe}},[n("div",{staticClass:"flex items-center  w-[50%]",class:{reverse:data.isMe}},[n("div",{staticClass:"w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]"},[n("div",{staticClass:"w-[50px] h-[50px] rounded-[100%] overflow-hidden"},[data.isMe?n("img",{staticClass:"w-full h-full object-cover",attrs:{src:r(221)("./"+e.picture)}}):n("img",{staticClass:"w-full h-full object-cover",attrs:{src:r(221)("./"+e.targetedUser.picture)}})])]),e._v(" "),n("div",{class:[data.isMe?"mr-[20px]":"ml-[20px]"]},[n("p",[e._v(e._s(data.value))])])])])})),0)]),e._v(" "),n("div",{staticClass:"h-[20%] flex justify-center items-center"},[n("form",{staticClass:"relative w-[90%]",on:{submit:function(t){return t.preventDefault(),e.postMessage.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"w-full rounded-full h-[30px] px-8",attrs:{type:"text",placeholder:"Rédiger un message..."},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),e._v(" "),n("button",{staticClass:"absolute right-3.5 top-1.5"},[n("img",{staticClass:"w-[20px]",attrs:{src:r(384)}})])])]),e._v(" "),n("div",{staticClass:"absolute top-[10%] left-[33%]"},[n("HostQuery",{directives:[{name:"show",rawName:"v-show",value:e.isHostOpen,expression:"isHostOpen"}],attrs:{targetedUser:e.targetedUser},on:{"close-host":e.showHost}})],1)])}),[],!1,null,"40c7d6bd",null);t.default=component.exports},491:function(e,t,r){"use strict";r.r(t);var n={props:{users:{type:Array}},methods:{openMessage:function(e){this.$emit("open-message",e)},openSwipe:function(){this.$emit("open-swipe")}},computed:{getNumberofMatch:function(){return this.users.length},showed:function(){return this.$store.state.showed}}},o=(r(377),r(44)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-[20%] sidebar bg-white h-full"},[n("div",{staticClass:"flex flex-row items-center justify-center bg-[#f8f8f8]"},[n("div",{staticClass:"w-1/2 flex items-center justify-center",class:{active:"message"===e.showed}},[n("img",{staticClass:"w-10 my-6",attrs:{src:r(375)}})]),e._v(" "),n("div",{staticClass:"w-1/2 flex items-center justify-center cursor-pointer",class:{active:"message"!==e.showed},on:{click:function(t){return e.openSwipe()}}},[n("img",{staticClass:"w-10 my-6",attrs:{src:r(376)}})])]),e._v(" "),n("div",{staticClass:"sidebar-shadow h-full"},[n("p",[e._v(e._s(e.getNumberofMatch+" rencontres"))]),e._v(" "),n("input",{attrs:{type:"text"}}),e._v(" "),n("ul",e._l(e.users,(function(t){return n("li",{staticClass:"flex justify-evenly items-center my-3 cursor-pointer",on:{click:function(r){return e.openMessage(t)}}},[n("div",{staticClass:"w-[60px] h-[60px] rounded-[100%] flex justify-center items-center border border-[#213B83]"},[n("div",{staticClass:"w-[50px] h-[50px] rounded-[100%] overflow-hidden"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:r(221)("./"+t.picture)}})])]),n("p",[e._v(e._s((t.description?t.description.substring(0,20):"")+"..."))])])})),0)])])}),[],!1,null,"c46c13e0",null);t.default=component.exports},492:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(45),r(53),{data:function(){return{queue:[],offset:0,userSource:[],img:"1.jpg",isSwipeEmpty:!1,isDescShow:!1}},created:function(){this.mock()},methods:{mock:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,i,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:5,o=!(e.length>1&&void 0!==e[1])||e[1],r.next=4,t.$axios.$get("/users/swipe",{headers:{Authorization:t.$auth.$storage._state["_token.local"],user_id:t.$auth.$state.user.id,needs:t.$auth.$state.user.needs}});case 4:c=r.sent,l=[],i=0;case 7:if(!(i<n)){r.next=15;break}if(void 0!==c[t.offset]){r.next=10;break}return r.abrupt("break",15);case 10:l.push(c[t.offset]),t.offset++;case 12:i++,r.next=7;break;case 15:o?t.queue=t.queue.concat(l):(d=t.queue).unshift.apply(d,l),0===t.queue.length&&(t.isSwipeEmpty=!0);case 17:case"end":return r.stop()}}),r)})))()},onSubmit:function(e,t,r){var o=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r={user_1:o.$auth.$state.user.id,user_2:e.key},"like"!==e.type){t.next=6;break}return t.next=4,o.$axios.$post("".concat("http://localhost:3000","/swipe"),r,{headers:{Authorization:o.$auth.$storage._state["_token.local"],"Content-Type":"application/json"}});case 4:t.sent,o.$emit("user-swiped");case 6:o.queue.length<3&&o.mock(),0===o.queue.length&&(o.isSwipeEmpty=!0);case 8:case"end":return t.stop()}}),t)})))()},decide:function(e){this.$refs.tinder.decide(e)},toggleDesc:function(){this.isDescShow=!this.isDescShow}}}),c=o,l=(r(382),r(44)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-[80%] flex justify-center items-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isSwipeEmpty,expression:"!isSwipeEmpty"}],staticClass:"w-fit"},[n("Tinder",{ref:"tinder",attrs:{"key-name":"id",queue:e.queue,"offset-y":10},on:{"update:queue":function(t){e.queue=t},submit:e.onSubmit},scopedSlots:e._u([{key:"default",fn:function(t){return n("div",{staticClass:"imgContainer relative"},[n("img",{attrs:{src:r(221)("./"+t.data.picture)}}),e._v(" "),n("div",{staticClass:"absolute w-full bg-white bottom-0 pb-[50px] pt-3 pl-4 pr-4 "},[n("div",{staticClass:"overflow-hidden"},[n("p",{staticClass:"text-sky-800  text-lg"},[n("span",{staticClass:"font-bold"},[e._v(e._s(t.data.name))]),e._v(" "+e._s(t.data.surname))]),e._v(" "),n("p",{ref:"description",staticClass:"max-h-0 transition-all duration-300",class:{show:e.isDescShow}},[e._v(e._s(t.data.description))])])]),e._v(" "),n("div",{staticClass:"w-full absolute bottom-0 flex justify-center"},[n("img",{staticClass:"w-[20px] transition-all duration-300",class:{turn_arrow:e.isDescShow},attrs:{src:r(379)},on:{click:function(t){return e.toggleDesc()}}})])])}}])}),e._v(" "),n("div",{staticClass:"btns flex justify-around relative z-[160] mt-[35px]"},[n("img",{staticClass:"nope-pointer",attrs:{src:r(380)},on:{click:function(t){return e.decide("nope")}}}),e._v(" "),n("img",{staticClass:"like-pointer",attrs:{src:r(381)},on:{click:function(t){return e.decide("like")}}})])],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isSwipeEmpty,expression:"isSwipeEmpty"}]},[n("p",[e._v("Il n'y a plus d'utilisateurs disponible :(")])])])}),[],!1,null,"edcb5af4",null);t.default=component.exports},493:function(e,t,r){"use strict";r.r(t);var n=r(20),o=r(3),c=(r(45),r(24),r(32),r(54),r(354),r(53),r(41),r(33),r(11),r(65),r(39),r(66),r(420));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{isNSOpen:!1,isMailOpen:!1,isPasswordOpen:!1,isNeedsOpen:!1,isPictureOpen:!1,isVerifiedFormOpen:!1,isDescOpen:!1,userNeeds:null,options:[{text:"Je veux héberger",value:"H"},{text:"Je veux voyager",value:"T"},{text:"Je veux juste discuter",value:"D"}],name:null,surname:null,email:null,password:null,confPassword:null,file:"",certificatScolaire:"",carte_id:"",description:""}},mounted:function(){this.name=this.$auth.$state.user.name,this.surname=this.$auth.$state.user.surname,this.email=this.$auth.$state.user.email,this.userNeeds=this.$auth.$state.user.needs,this.description=this.$auth.$state.user.description},computed:{needs:function(){return"T"===this.userNeeds?"voyager":"H"===this.userNeeds?"héberger":"discuter"}},methods:{update:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.password){r.next=6;break}if(e.password==t.confPassword){r.next=3;break}return r.abrupt("return");case 3:n=c.genSaltSync(Number("10")),o=c.hashSync(e.password,n),e.password=o;case 6:return r.next=8,t.$axios.$patch("".concat("http://localhost:3000","/users/").concat(t.$auth.$state.user.id),e,{headers:{Authorization:t.$auth.$storage._state["_token.local"]}});case 8:1===r.sent.affected&&(e.name&&(t.name=e.name,t.$auth.setUser(d(d({},t.$auth.user),{},{name:e.name}))),e.surname&&(t.surname=e.surname,t.$auth.setUser(d(d({},t.$auth.user),{},{surname:e.surname}))),e.email&&(t.email=e.email,t.$auth.setUser(d(d({},t.$auth.user),{},{email:e.email}))),e.needs&&(t.userNeeds=e.needs,t.$auth.setUser(d(d({},t.$auth.user),{},{needs:e.needs}))),t.show("all"));case 10:case"end":return r.stop()}}),r)})))()},updatePicture:function(){var e=new FormData;e.append("file",this.file),this.$axios.$post("/users/upload",e,{headers:{Authorization:this.$auth.$storage._state["_token.local"],"Content-Type":"multipart/form-data"}}),this.$router.go()},handleFileUpload:function(){this.file=this.$refs.file.files[0]},show:function(e){"NS"===e&&(this.isNSOpen=!this.isNSOpen),"email"===e&&(this.isMailOpen=!this.isMailOpen),"password"===e&&(this.isPasswordOpen=!this.isPasswordOpen),"needs"===e&&(this.isNeedsOpen=!this.isNeedsOpen),"picture"===e&&(this.isPictureOpen=!this.isPictureOpen),"description"===e&&(this.isDescOpen=!this.isDescOpen),"all"===e&&(this.isNSOpen=!1,this.isMailOpen=!1,this.isPasswordOpen=!1,this.isNeedsOpen=!1)},postVerifications:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new FormData,console.log(e.$refs.carte_id.files[0]),r.append("carte_id",e.$refs.carte_id.files[0]),r.append("certificatScolaire",e.$refs.certificatScolaire.files[0]),console.log(r.has("carte_id")&&r.has("certificatScolaire")),t.next=7,e.$axios.$post("/users/uploadVerifications",r,{headers:{Authorization:e.$auth.$storage._state["_token.local"],"Content-Type":"multipart/form-data"}});case 7:t.sent.affected;case 9:case"end":return t.stop()}}),t)})))()}}},m=(r(411),r(44)),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-[80%] flex items-center flex-col"},[n("h1",[e._v("Paramètres")]),e._v(" "),n("div",{staticClass:"flex items-center justify-center flex-col"},[n("div",{staticClass:" cursor-pointer w-[200px] h-[200px] rounded-[100%] flex justify-center items-center border border-[#213B83]",on:{click:function(t){return e.show("picture")}}},[n("div",{staticClass:"w-[180px] h-[180px] rounded-[100%] overflow-hidden"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:r(221)("./"+this.$auth.$state.user.picture)}})])]),e._v(" "),this.$auth.user.verified?n("p",[e._v("Vérifié ✔️")]):e._e(),e._v(" "),this.$auth.user.verified||null==this.$auth.user.carte_id?e._e():n("p",[e._v("En attente de vérification")]),e._v(" "),this.$auth.user.verified||null!==this.$auth.user.carte_id?e._e():n("p",{staticClass:"cursor-pointer",on:{click:function(t){e.isVerifiedFormOpen=!e.isVerifiedFormOpen}}},[e._v("Non-Vérifié, cliquer pour faire la demande")]),e._v(" "),this.$auth.user.verified||null!==this.$auth.user.carte_id?e._e():n("div",{directives:[{name:"show",rawName:"v-show",value:e.isVerifiedFormOpen,expression:"isVerifiedFormOpen"}]},[n("form",{staticClass:"flex flex-col",on:{submit:function(t){return t.preventDefault(),e.postVerifications()}}},[n("label",{attrs:{for:"carte_id"}},[e._v("Carte d'identité")]),e._v(" "),n("input",{ref:"carte_id",attrs:{name:"carte_id",type:"file",accept:".jpg, .png, .jpeg, .pdf",title:"carte d'identité",placeholder:"carte d'identité",required:""}}),e._v(" "),n("label",{attrs:{for:""}},[e._v("Certificat scolaire")]),e._v(" "),n("input",{ref:"certificatScolaire",attrs:{name:"certificat_scolaire",type:"file",accept:".jpg, .png, .jpeg, .pdf",title:"certificat scolaire",placeholder:"certificat scolaire",required:""}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Envoyer")])])]),e._v(" "),n("div",{ref:"name_surname",staticClass:"bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden",class:{show:e.isPictureOpen}},[n("form",{staticClass:"flex flex-col items-center w-fit",on:{submit:function(t){return t.preventDefault(),e.updatePicture()}}},[n("input",{ref:"file",staticClass:"my-3.5",attrs:{type:"file",placeholder:"Télécharger une image"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),n("button",[e._v("Modifier")])])]),e._v(" "),n("div",{staticClass:"flex items-center relative justify-center my-3.5"},[n("p",{staticClass:"text-3xl font-bold"},[e._v(e._s(this.name)+" "+e._s(this.surname))]),e._v(" "),n("button",{staticClass:"absolute right-[-33px]",on:{click:function(t){return e.show("NS")}}},[n("img",{staticClass:"w-[20px]",attrs:{src:r(334),alt:""}})]),e._v(" "),n("div",{ref:"name_surname",staticClass:"bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden",class:{show:e.isNSOpen}},[n("form",{staticClass:"flex flex-col items-center w-fit",on:{submit:function(t){return t.preventDefault(),e.update({name:e.name,surname:e.surname})}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"my-3.5",attrs:{type:"text",placeholder:"Nom"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],staticClass:"my-3.5",attrs:{type:"text",placeholder:"Prénom"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}}),e._v(" "),n("button",[e._v("Modifier")])])])]),e._v(" "),n("div",{staticClass:"flex items-center relative justify-center my-3.5"},[n("p",[e._v(e._s(this.email))]),e._v(" "),n("button",{staticClass:"absolute right-[-33px]",on:{click:function(t){return e.show("email")}}},[n("img",{staticClass:"w-[20px]",attrs:{src:r(334),alt:""}})]),e._v(" "),n("div",{ref:"name_surname",staticClass:"bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden",class:{show:e.isMailOpen}},[n("form",{staticClass:"flex flex-col items-center w-fit",on:{submit:function(t){return t.preventDefault(),e.update({email:e.email})}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"my-3.5",attrs:{type:"email",placeholder:"E-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("button",[e._v("Modifier")])])])]),e._v(" "),n("div",{staticClass:"flex items-center relative justify-center my-3.5"},[n("p",[e._v(e._s(this.description))]),e._v(" "),n("button",{staticClass:"absolute right-[-33px]",on:{click:function(t){return e.show("description")}}},[n("img",{staticClass:"w-[20px]",attrs:{src:r(334),alt:""}})]),e._v(" "),n("div",{ref:"desc",staticClass:"bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden",class:{show:e.isDescOpen}},[n("form",{staticClass:"flex flex-col items-center w-fit",on:{submit:function(t){return t.preventDefault(),e.update({description:e.description})}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{name:"desc",placeholder:"description"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),n("button",[e._v("Modifier")])])])]),e._v(" "),n("div",{staticClass:"flex items-center relative justify-center my-3.5"},[n("p",[e._v("Changer mon mot de passe")]),e._v(" "),n("button",{staticClass:"absolute right-[-33px]",on:{click:function(t){return e.show("password")}}},[n("img",{staticClass:"w-[20px]",attrs:{src:r(334),alt:""}})]),e._v(" "),n("div",{ref:"name_surname",staticClass:"bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden",class:{show:e.isPasswordOpen}},[n("form",{staticClass:"flex flex-col items-center w-fit",on:{submit:function(t){return t.preventDefault(),e.update({password:e.password})}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"my-3.5",attrs:{type:"password",placeholder:"Mot de passe"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.confPassword,expression:"confPassword"}],staticClass:"my-3.5",attrs:{type:"password",placeholder:"Confirmation du mot de passe"},domProps:{value:e.confPassword},on:{input:function(t){t.target.composing||(e.confPassword=t.target.value)}}}),e._v(" "),n("button",[e._v("Modifier")])])])]),e._v(" "),n("div",{staticClass:"flex items-center relative justify-center my-3.5"},[n("p",[e._v("Je veux "+e._s(e.needs))]),e._v(" "),n("button",{staticClass:"absolute right-[-33px]",on:{click:function(t){return e.show("needs")}}},[n("img",{staticClass:"w-[20px]",attrs:{src:r(334),alt:""}})]),e._v(" "),n("div",{ref:"name_surname",staticClass:"bg-white w-fit absolute z-10 p-2.5 rounded-[5px] hidden",class:{show:e.isNeedsOpen}},[n("form",{staticClass:"flex flex-col items-center w-fit",on:{submit:function(t){return t.preventDefault(),e.update({needs:e.userNeeds})}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.userNeeds,expression:"userNeeds"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.userNeeds=t.target.multiple?r:r[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Choisissez")]),e._v(" "),e._l(e.options,(function(option){return n("option",{domProps:{value:option.value}},[e._v("\n                                "+e._s(option.text)+"\n                          ")])}))],2),e._v(" "),n("button",[e._v("Modifier")])])])])])])}),[],!1,null,"6771d835",null);t.default=component.exports},604:function(e,t,r){"use strict";r.r(t);var n=r(3),o=(r(45),{data:function(){return{users:[],user:null,match_id:null}},created:function(){this.getUsersMatched()},computed:{showed:function(){return this.$store.state.showed}},methods:{getUsersMatched:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("".concat("http://localhost:3000","/users/match"),{headers:{Authorization:e.$auth.$storage._state["_token.local"]}});case 2:e.users=t.sent;case 3:case"end":return t.stop()}}),t)})))()},openMessages:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$axios.$get("".concat("http://localhost:3000","/swipe/id-with-users"),{headers:{Authorization:r.$auth.$storage._state["_token.local"],user_2:t.id}});case 2:r.match_id=n.sent,r.$store.commit("change",e),r.user=t;case 5:case"end":return n.stop()}}),n)})))()},openSwipe:function(){this.$store.commit("change","swipe")}}}),c=r(44),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex bg-[#f8f8f8] overflow-hidden",staticStyle:{height:"calc(100vh - 92px)"}},[r("UserSidebar",{attrs:{users:e.users},on:{"open-message":function(t){return e.openMessages("message",t)},"open-swipe":function(t){return e.openSwipe()}}}),e._v(" "),"swipe"===e.showed?r("UserSwipe",{on:{"user-swiped":function(t){return e.getUsersMatched()}}}):e._e(),e._v(" "),"message"===e.showed?r("UserMessages",{key:e.user.id,attrs:{targetedUser:e.user,match_id:e.match_id}}):e._e(),e._v(" "),"settings"===e.showed?r("UserSettings"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UserSidebar:r(491).default,UserSwipe:r(492).default,UserMessages:r(489).default,UserSettings:r(493).default})}}]);