"use strict";(self["webpackChunkastracoin"]=self["webpackChunkastracoin"]||[]).push([[961],{1961:function(t,r,e){e.r(r),e.d(r,{default:function(){return d}});var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"login-page"},[e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"login-page"}},[t._m(0),e("div",{staticClass:"login-form"},[e("div",{staticClass:"login-desc"},[t._v("AstroCoin wallet, login to your account")]),e("form",{staticClass:"form-modal",attrs:{action:"#"},on:{submit:function(r){return r.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"form-control"},[e("label",{attrs:{for:"email"}},[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"",id:"email"},domProps:{value:t.email},on:{input:function(r){r.target.composing||(t.email=r.target.value)}}})]),e("div",{staticClass:"form-control"},[e("label",{attrs:{for:"password"}},[t._v("Password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"",id:"password"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value)}}})]),e("router-link",{staticClass:"forgot-pass",attrs:{to:"/qwasar-check"}},[t._v("Registration")]),e("router-link",{staticClass:"forgot-pass",attrs:{to:"/recover"}},[t._v("Forgot Password?")]),t._m(1)],1)])])])])},i=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"login-header"},[e("div",{staticClass:"app-logo"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"form-control submit-btn"},[e("input",{attrs:{type:"submit",value:"Login"}})])}],o=e(16198),a=(e(78975),e(17004)),s=e(98501),u=e(68520),c={name:"Login",data:function(){return{email:"",password:""}},mounted:function(){localStorage.getItem("token")&&this.$router.push("/")},validations:{email:{required:a.Z,email:s.Z},password:{required:a.Z,minLength:(0,u.Z)(6)}},methods:{submit:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.$v.$invalid){r.next=4;break}return t.$v.$touch(),t.$v.email.$invalid?Toast.fire("Поле E-mail обязательно для заполнения","","error"):t.$v.password.$invalid&&Toast.fire("Поле Password обязательно для заполнения","","error"),r.abrupt("return");case 4:return r.prev=4,r.next=7,t.$store.dispatch("login",{email:t.email,password:t.password});case 7:t.$router.push("/"),r.next=13;break;case 10:if(r.prev=10,r.t0=r["catch"](4),t.$store.state.errors)for(e in t.$store.state.errors)Toast.fire(t.$store.state.errors[e][0],"","error");else Toast.fire(t.$store.state.error,"","error");case 13:case"end":return r.stop()}}),r,null,[[4,10]])})))()}}},l=c,f=e(1001),p=(0,f.Z)(l,n,i,!1,null,null,null),d=p.exports},9343:function(t,r,e){e.d(r,{RP:function(){return p}});var n=e(93019),i=e(9726),o=(e(21703),[]),a=null;function s(){null!==a&&o.push(a),a={}}function u(){var t=a,r=a=o.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(t)),t}function c(t){if("object"!==(0,i.Z)(t)||Array.isArray(t))throw new Error("params must be an object");a=(0,n.Z)((0,n.Z)({},a),t)}function l(t,r){return f((function(e){return function(){e(t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return r.apply(this,i)}}))}function f(t){var r=t(c);return function(){s();try{for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.apply(this,e)}finally{u()}}}function p(t,r){return"object"===(0,i.Z)(t)&&void 0!==r?l(t,r):f(t)}},12237:function(t,r,e){e.d(r,{Lx:function(){return o},Sz:function(){return u},Zh:function(){return a},iH:function(){return s}});var n=e(9726),i=(e(47941),e(74916),e(77601),e(63718)),o=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===(0,n.Z)(t)){for(var r in t)return!0;return!1}return!!String(t).length},a=function(t){return Array.isArray(t)?t.length:"object"===(0,n.Z)(t)?Object.keys(t).length:String(t).length},s=function(t,r,e){return"function"===typeof t?t.call(r,e):e[t]},u=function(t,r){return(0,i.Z)({type:t},(function(t){return!o(t)||r.test(t)}))}},98501:function(t,r,e){var n=e(12237),i=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;r["Z"]=(0,n.Sz)("email",i)},68520:function(t,r,e){var n=e(63718),i=e(12237);r["Z"]=function(t){return(0,n.Z)({type:"minLength",min:t},(function(r){return!(0,i.Lx)(r)||(0,i.Zh)(r)>=t}))}},17004:function(t,r,e){e(73210);var n=e(63718),i=e(12237);r["Z"]=(0,n.Z)({type:"required"},(function(t){return"string"===typeof t?(0,i.Lx)(t.trim()):(0,i.Lx)(t)}))},63718:function(t,r,e){var n="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?e(96015).R:e(9343).RP;r["Z"]=n},96015:function(t,r,e){e.d(r,{R:function(){return a}});var n=e(9726),i="undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:{},o=function(t,r){return"object"===(0,n.Z)(t)&&void 0!==r?r:t((function(){}))},a=i.vuelidate?i.vuelidate.withParams:o},93019:function(t,r,e){e.d(r,{Z:function(){return o}});e(47941),e(82526),e(57327),e(41539),e(38880),e(54747),e(49337);function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){n(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}}}]);
//# sourceMappingURL=961-legacy.8d2c0e22.js.map