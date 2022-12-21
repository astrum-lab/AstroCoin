"use strict";(self["webpackChunkastracoin"]=self["webpackChunkastracoin"]||[]).push([[976],{9976:function(t,r,s){s.r(r),s.d(r,{default:function(){return f}});var o=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{attrs:{id:"repass"}},[s("div",{staticClass:"login-page"},[s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"login-page"}},[t._m(0),s("div",{staticClass:"login-form"},[s("div",{staticClass:"login-desc"},[t._v("Enter new password for your account")]),s("form",{staticClass:"form-modal",attrs:{action:"#",method:"post"},on:{submit:function(r){return r.preventDefault(),t.submit.apply(null,arguments)}}},[s("div",{staticClass:"form-control"},[s("label",{attrs:{for:"old_password"}},[t._v("Current password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],attrs:{type:"password",name:"pass_two",id:"old_password"},domProps:{value:t.oldPassword},on:{input:function(r){r.target.composing||(t.oldPassword=r.target.value)}}})]),s("div",{staticClass:"form-control"},[s("label",{attrs:{for:"password"}},[t._v("New password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value)}}})]),s("div",{staticClass:"form-control"},[s("label",{attrs:{for:"verify_pass"}},[t._v("Re-enter new password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmation,expression:"confirmation"}],attrs:{type:"password",name:"pass_two",id:"verify_pass"},domProps:{value:t.confirmation},on:{input:function(r){r.target.composing||(t.confirmation=r.target.value)}}})]),t._m(1)])])])])])])},e=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"login-header"},[s("div",{staticClass:"app-logo"})])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"form-control submit-btn"},[s("input",{attrs:{type:"submit",value:"Submit"}})])}],n=s(7004),i=s(8520),a=s(4459),u={name:"UpdatePassword",data:()=>({password:"",confirmation:"",oldPassword:""}),validations:{password:{required:n.Z,minLength:(0,i.Z)(8)},confirmation:{required:n.Z,minLength:(0,i.Z)(8),sameAs:(0,a.Z)("password")},oldPassword:{required:n.Z,minLength:(0,i.Z)(8)}},mounted(){document.title="Astrocoin | ChangePassword"},methods:{async submit(){if(this.$v.$invalid)return this.$v.$touch(),void(this.$v.password.$invalid?Toast.fire("Password must be at least 8 characters.","error"):this.$v.password.$invalid?Toast.fire("Password field is required","","error"):this.$v.confirmation.$invalid?Toast.fire("Password confirmation is required","","error"):this.$v.confirmation.$error.sameAs&&Toast.fire("Passwords do not match","","error"));try{await this.$store.dispatch("updatePassword",{password:this.password,password_confirmation:this.confirmation,old_password:this.oldPassword}),Toast.fire("Password has been updated","","success"),this.$router.push("/user-page")}catch(t){if(this.$store.state.errors)for(const r in this.$store.state.errors)Toast.fire(this.$store.state.errors[r][0],"","error");else Toast.fire(this.$store.state.error,"","error")}}}},d=u,c=s(1001),l=(0,c.Z)(d,o,e,!1,null,null,null),f=l.exports},9343:function(t,r,s){s.d(r,{RP:function(){return c}});s(1703);const o=[];let e=null;function n(){null!==e&&o.push(e),e={}}function i(){const t=e,r=e=o.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(t)),t}function a(t){if("object"!==typeof t||Array.isArray(t))throw new Error("params must be an object");e={...e,...t}}function u(t,r){return d((s=>function(...o){return s(t),r.apply(this,o)}))}function d(t){const r=t(a);return function(...t){n();try{return r.apply(this,t)}finally{i()}}}function c(t,r){return"object"===typeof t&&void 0!==r?u(t,r):d(t)}},2237:function(t,r,s){s.d(r,{Lx:function(){return e},Sz:function(){return a},Zh:function(){return n},iH:function(){return i}});var o=s(3718);const e=t=>{if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===typeof t){for(let r in t)return!0;return!1}return!!String(t).length},n=t=>Array.isArray(t)?t.length:"object"===typeof t?Object.keys(t).length:String(t).length,i=(t,r,s)=>"function"===typeof t?t.call(r,s):s[t],a=(t,r)=>(0,o.Z)({type:t},(t=>!e(t)||r.test(t)))},8520:function(t,r,s){var o=s(3718),e=s(2237);r["Z"]=t=>(0,o.Z)({type:"minLength",min:t},(r=>!(0,e.Lx)(r)||(0,e.Zh)(r)>=t))},7004:function(t,r,s){var o=s(3718),e=s(2237);r["Z"]=(0,o.Z)({type:"required"},(t=>"string"===typeof t?(0,e.Lx)(t.trim()):(0,e.Lx)(t)))},4459:function(t,r,s){var o=s(3718),e=s(2237);r["Z"]=t=>(0,o.Z)({type:"sameAs",eq:t},(function(r,s){return r===(0,e.iH)(t,this,s)}))},3718:function(t,r,s){const o="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?s(6015).R:s(9343).RP;r["Z"]=o},6015:function(t,r,s){s.d(r,{R:function(){return n}});const o="undefined"!==typeof window?window:"undefined"!==typeof s.g?s.g:{},e=(t,r)=>"object"===typeof t&&void 0!==r?r:t((()=>{})),n=o.vuelidate?o.vuelidate.withParams:e}}]);
//# sourceMappingURL=976.45f056c5.js.map