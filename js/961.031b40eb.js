"use strict";(self["webpackChunkastracoin"]=self["webpackChunkastracoin"]||[]).push([[961],{1961:function(t,r,e){e.r(r),e.d(r,{default:function(){return d}});var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"login-page"},[e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"login-page"}},[t._m(0),e("div",{staticClass:"login-form"},[e("div",{staticClass:"login-desc"},[t._v("AstroCoin wallet, login to your account")]),e("form",{staticClass:"form-modal",attrs:{action:"#"},on:{submit:function(r){return r.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"form-control"},[e("label",{attrs:{for:"email"}},[t._v("E-mail:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"",id:"email"},domProps:{value:t.email},on:{input:function(r){r.target.composing||(t.email=r.target.value)}}})]),e("div",{staticClass:"form-control"},[e("label",{attrs:{for:"password"}},[t._v("Password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"",id:"password"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value)}}})]),e("router-link",{staticClass:"forgot-pass",attrs:{to:"/qwasar-check"}},[t._v("Registration")]),e("router-link",{staticClass:"forgot-pass",attrs:{to:"/recover"}},[t._v("Forgot Password?")]),t._m(1)],1)])])])])},n=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"login-header"},[e("div",{staticClass:"app-logo"})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"form-control submit-btn"},[e("input",{attrs:{type:"submit",value:"Login"}})])}],o=e(7004),s=e(8501),a=e(8520),u={name:"Login",data:()=>({email:"",password:""}),mounted(){localStorage.getItem("token")&&this.$router.push("/")},validations:{email:{required:o.Z,email:s.Z},password:{required:o.Z,minLength:(0,a.Z)(6)}},methods:{async submit(){if(this.$v.$invalid)return this.$v.$touch(),void(this.$v.email.$invalid?Toast.fire("Поле E-mail обязательно для заполнения","","error"):this.$v.password.$invalid&&Toast.fire("Поле Password обязательно для заполнения","","error"));try{await this.$store.dispatch("login",{email:this.email,password:this.password}),this.$router.push("/")}catch(t){if(this.$store.state.errors)for(const r in this.$store.state.errors)Toast.fire(this.$store.state.errors[r][0],"","error");else Toast.fire(this.$store.state.error,"","error")}}}},l=u,c=e(1001),f=(0,c.Z)(l,i,n,!1,null,null,null),d=f.exports},9343:function(t,r,e){e.d(r,{RP:function(){return c}});e(1703);const i=[];let n=null;function o(){null!==n&&i.push(n),n={}}function s(){const t=n,r=n=i.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(t)),t}function a(t){if("object"!==typeof t||Array.isArray(t))throw new Error("params must be an object");n={...n,...t}}function u(t,r){return l((e=>function(...i){return e(t),r.apply(this,i)}))}function l(t){const r=t(a);return function(...t){o();try{return r.apply(this,t)}finally{s()}}}function c(t,r){return"object"===typeof t&&void 0!==r?u(t,r):l(t)}},2237:function(t,r,e){e.d(r,{Lx:function(){return n},Sz:function(){return a},Zh:function(){return o},iH:function(){return s}});var i=e(3718);const n=t=>{if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===typeof t){for(let r in t)return!0;return!1}return!!String(t).length},o=t=>Array.isArray(t)?t.length:"object"===typeof t?Object.keys(t).length:String(t).length,s=(t,r,e)=>"function"===typeof t?t.call(r,e):e[t],a=(t,r)=>(0,i.Z)({type:t},(t=>!n(t)||r.test(t)))},8501:function(t,r,e){var i=e(2237);const n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;r["Z"]=(0,i.Sz)("email",n)},8520:function(t,r,e){var i=e(3718),n=e(2237);r["Z"]=t=>(0,i.Z)({type:"minLength",min:t},(r=>!(0,n.Lx)(r)||(0,n.Zh)(r)>=t))},7004:function(t,r,e){var i=e(3718),n=e(2237);r["Z"]=(0,i.Z)({type:"required"},(t=>"string"===typeof t?(0,n.Lx)(t.trim()):(0,n.Lx)(t)))},3718:function(t,r,e){const i="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?e(6015).R:e(9343).RP;r["Z"]=i},6015:function(t,r,e){e.d(r,{R:function(){return o}});const i="undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:{},n=(t,r)=>"object"===typeof t&&void 0!==r?r:t((()=>{})),o=i.vuelidate?i.vuelidate.withParams:n}}]);
//# sourceMappingURL=961.031b40eb.js.map