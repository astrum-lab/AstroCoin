"use strict";(self["webpackChunkastracoin"]=self["webpackChunkastracoin"]||[]).push([[837],{61837:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-page"},[r("div",{attrs:{id:"container"}},[r("div",{attrs:{id:"login-page"}},[e._m(0),r("div",{staticClass:"login-form"},[r("div",{staticClass:"login-desc"},[e._v("Enter your Qwasar login")]),r("form",{staticClass:"form-modal",attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",{staticClass:"form-control"},[r("label",{attrs:{for:"email"}},[e._v("Your qwasar login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],attrs:{type:"text",name:""},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}})]),e._m(1)])])])])])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-header"},[r("div",{staticClass:"app-logo"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control submit-btn"},[r("input",{attrs:{type:"submit",value:"Submit"}})])}],o=r(16198),a=(r(78975),r(6409)),i={name:"QwasarCheck",data:function(){return{login:""}},validations:{login:{required:a.C1,minLength:(0,a.Ei)(3)}},methods:{submit:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$v.$invalid){t.next=4;break}return e.$v.$touch(),e.$v.login.$invalid&&Toast.fire("Поле Qwasar обязательно для заполнения","","error"),t.abrupt("return");case 4:return t.prev=4,t.next=7,e.$store.dispatch("qwasarCheck",{qwasar:e.login});case 7:e.$router.push("/register"),t.next=13;break;case 10:if(t.prev=10,t.t0=t["catch"](4),e.$store.state.errors)for(r in e.$store.state.errors)Toast.fire(e.$store.state.errors[r][0],"","error");else Toast.fire(e.$store.state.error,"","error");case 13:case"end":return t.stop()}}),t,null,[[4,10]])})))()}}},f=i,l=r(1001),c=(0,l.Z)(f,n,u,!1,null,null,null),d=c.exports},39550:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=u},87497:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=u},93627:function(e,t,r){r(41539),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=u},38540:function(e,t,r){r(74916),r(77601),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=u},22620:function(e,t,r){r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),r(47941),r(74916),r(77601),Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=u(r(926));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;var i=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=i;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!a(e)||t.test(e)}))};t.regex=l},38357:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=u},56363:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,o=(0,n.regex)("email",u);t["default"]=o},6409:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),r(4129),r(38880),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return v.default}});var u=q(r(39550)),o=q(r(87497)),a=q(r(15374)),i=q(r(38540)),f=q(r(56363)),l=q(r(77962)),c=q(r(55969)),d=q(r(57881)),s=q(r(24967)),v=q(r(93009)),p=q(r(76618)),y=q(r(99936)),m=q(r(56909)),b=q(r(90445)),g=q(r(54960)),h=q(r(93627)),_=q(r(94427)),x=q(r(52271)),P=q(r(85617)),w=q(r(41033)),j=q(r(38357)),O=$(r(22620));function M(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(M=function(e){return e?r:t})(e)}function $(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=M(t);if(r&&r.has(e))return r.get(e);var u={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(u,a,i):u[a]=e[a]}return u.default=e,r&&r.set(e,u),u}function q(e){return e&&e.__esModule?e:{default:e}}},41033:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=u},77962:function(e,t,r){r(74916),r(23123),r(41539),r(4723),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t["default"]=u;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},55969:function(e,t,r){r(74916),r(23123),r(4723),r(41539),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};t["default"]=u;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},57881:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=u},85617:function(e,t,r){r(74916),r(77601),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=u},24967:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=u},52271:function(e,t,r){r(74916),r(77601),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=u},94427:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=u},15374:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=u},54960:function(e,t,r){r(41539),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=u},93009:function(e,t,r){r(73210),Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=u},76618:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=u},99936:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=u},56909:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=u},90445:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(22620),u=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",u);t["default"]=o},926:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(44550).R:r(16056).withParams,u=n;t["default"]=u},44550:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),t.R=void 0;var u="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},o=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},a=u.vuelidate?u.vuelidate.withParams:o;t.R=a}}]);
//# sourceMappingURL=837-legacy.2c376456.js.map