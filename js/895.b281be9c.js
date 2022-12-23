"use strict";(self["webpackChunkastracoin"]=self["webpackChunkastracoin"]||[]).push([[895],{8895:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"container"}},[r("div",{attrs:{id:"login-page"}},[t._m(0),r("div",{staticClass:"login-form"},[r("div",{staticClass:"login-desc"},[t._v("Enter your email address to get recover link")]),r("form",{staticClass:"form-modal",attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[r("div",{staticClass:"form-control"},[r("label",{attrs:{for:"email"}},[t._v("E-mail:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("router-link",{staticClass:"forgot-pass",attrs:{to:"/login"}},[t._v("Login")]),r("router-link",{staticClass:"forgot-pass",attrs:{to:"/qwasar-check"}},[t._v("Registration")]),r("div",{staticClass:"form-control submit-btn"},[r("button",{attrs:{type:"submit",disabled:!0===t.success}},[t._v("Get link")])])],1)])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-header"},[r("div",{staticClass:"app-logo"})])}],s=r(7004),o=r(8501),a={name:"Recover",data:()=>({email:"",success:!1}),validations:{email:{required:s.Z,email:o.Z}},mounted(){document.title="AstroCoin | Reset Password"},methods:{async submit(){if(this.$v.$invalid)return this.$v.$touch(),void(this.$v.email.$invalid&&Toast.fire("E-mail not found","","error"));try{await this.$store.dispatch("resetPassword",{email:this.email}),Toast.fire("We have sent you the link!","","success"),this.email="",this.success=!0}catch(t){if(this.$store.state.errors)for(const e in this.$store.state.errors)Toast.fire(this.$store.state.errors[e][0],"","error");else Toast.fire(this.$store.state.error,"","error")}}}},u=a,c=r(1001),l=(0,c.Z)(u,i,n,!1,null,"e3628526",null),f=l.exports},9343:function(t,e,r){r.d(e,{RP:function(){return l}});r(1703);const i=[];let n=null;function s(){null!==n&&i.push(n),n={}}function o(){const t=n,e=n=i.pop()||null;return e&&(Array.isArray(e.$sub)||(e.$sub=[]),e.$sub.push(t)),t}function a(t){if("object"!==typeof t||Array.isArray(t))throw new Error("params must be an object");n={...n,...t}}function u(t,e){return c((r=>function(...i){return r(t),e.apply(this,i)}))}function c(t){const e=t(a);return function(...t){s();try{return e.apply(this,t)}finally{o()}}}function l(t,e){return"object"===typeof t&&void 0!==e?u(t,e):c(t)}},2237:function(t,e,r){r.d(e,{Lx:function(){return n},Sz:function(){return a},Zh:function(){return s},iH:function(){return o}});var i=r(3718);const n=t=>{if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===typeof t){for(let e in t)return!0;return!1}return!!String(t).length},s=t=>Array.isArray(t)?t.length:"object"===typeof t?Object.keys(t).length:String(t).length,o=(t,e,r)=>"function"===typeof t?t.call(e,r):r[t],a=(t,e)=>(0,i.Z)({type:t},(t=>!n(t)||e.test(t)))},8501:function(t,e,r){var i=r(2237);const n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;e["Z"]=(0,i.Sz)("email",n)},7004:function(t,e,r){var i=r(3718),n=r(2237);e["Z"]=(0,i.Z)({type:"required"},(t=>"string"===typeof t?(0,n.Lx)(t.trim()):(0,n.Lx)(t)))},3718:function(t,e,r){const i="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(6015).R:r(9343).RP;e["Z"]=i},6015:function(t,e,r){r.d(e,{R:function(){return s}});const i="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},n=(t,e)=>"object"===typeof t&&void 0!==e?e:t((()=>{})),s=i.vuelidate?i.vuelidate.withParams:n}}]);
//# sourceMappingURL=895.b281be9c.js.map