(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{370:function(e,t,r){"use strict";r.r(t);r(41),r(65),r(66);var n=r(20),o=r(3);r(45),r(11),r(39),r(33),r(55),r(56),r(24),r(32),r(54);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{defaultUsers:[],users:[],filter:""}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/users",{headers:{Authorization:e.$auth.$storage._state["_token.local"]}});case 2:(r=t.sent)&&r.forEach((function(t){t.id!==e.$auth.user.id&&(t=c(c({},t),{},{input:""}),e.users.push(t),e.defaultUsers.push(t))}));case 4:case"end":return t.stop()}}),t)})))()},methods:{need:function(e){return"H"===e.needs?"Veut héberger":"T"===e.needs?"Veut voyager":"Veut discuter"},deleteUser:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("supprimer"!==e.input){r.next=7;break}return delete(n=e).input,r.next=5,t.$axios.$delete("/users",{headers:{"Content-Type":"application/json",Authorization:t.$auth.$storage._state["_token.local"]},data:n});case 5:200===r.sent&&(t.users=t.users.filter((function(t){return t.id!=e.id})));case 7:case"end":return r.stop()}}),r)})))()},filterUsers:function(){var e=this,t=this.defaultUsers.filter((function(t){return t.id==e.filter||(!!t.email.toLowerCase().includes(e.filter.toLowerCase())||(!!t.name.toLowerCase().includes(e.filter.toLowerCase())||(!!t.surname.toLowerCase().includes(e.filter.toLowerCase())||(!!t.description.toLowerCase().includes(e.filter.toLowerCase())||(!!t.needs.toLowerCase().includes(e.filter.toLowerCase())||(!!t.role.toLowerCase().includes(e.filter.toLowerCase())||(t.verified==e.filter||void 0)))))))}));this.users=t,console.log(t)}}},f=r(44),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-center items-center"},[n("p",[e._v("Filtrer les utilisateurs")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"border ",attrs:{type:"text",placeholder:""},domProps:{value:e.filter},on:{change:e.filterUsers,input:function(t){t.target.composing||(e.filter=t.target.value)}}}),e._v(" "),n("ul",{staticClass:"w-[70%]"},e._l(e.users,(function(t){return n("li",{key:t.id,staticClass:"flex flex-col items-center my-8"},[n("div",{staticClass:"ml-[20px] mr-[10px] w-[80px] h-[80px] rounded-[100%] flex justify-center items-center border border-[#213B83]"},[n("div",{staticClass:"w-[70px] h-[70px] rounded-[100%] overflow-hidden"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:r(221)("./"+t.picture)}})])]),e._v(" "),n("p",{staticClass:"text-[#213B83]"},[n("span",{staticClass:"font-bold"},[e._v(e._s(t.name))]),e._v(" "+e._s(t.surname)+" - "+e._s("A"===t.role?"Administrateur":"Client"))]),e._v(" "),n("p",[e._v("Role : "+e._s("A"===t.role?"Administrateur":"Client"))]),e._v(" "),n("p",[e._v("Id: "+e._s(t.id))]),e._v(" "),n("p",[e._v("E-mail : "+e._s(t.email))]),e._v(" "),n("p",[e._v(e._s(e.need(t)))]),e._v(" "),n("p",[e._v(e._s(!0===t.verified?"Vérifié":"Non-vérifié"))]),e._v(" "),n("p",[e._v("Description : "+e._s(t.description))]),e._v(" "),n("form",{staticClass:"mt-3",on:{submit:function(r){return r.preventDefault(),e.deleteUser(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"user.input"}],staticClass:"border rounded-md p-2",attrs:{type:"text",placeholder:"Taper supprimer"},domProps:{value:t.input},on:{input:function(r){r.target.composing||e.$set(t,"input",r.target.value)}}}),e._v(" "),n("button",{staticClass:"text-[#DE0000] font-bold rounded-[5px] shadow p-2",attrs:{type:"submit"}},[e._v("Supprimer")])])])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);