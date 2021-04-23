/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={367:function(e,t){var n,s;void 0===(s="function"==typeof(n=function(e,t){"use strict";var n,s,i="function"==typeof Map?new Map:(n=[],s=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return s[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),s.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),s.splice(t,1))}}),r=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){r=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var t=null,n=null,s=null,o=function(){e.clientWidth!==n&&d()},c=function(t){window.removeEventListener("resize",o,!1),e.removeEventListener("input",d,!1),e.removeEventListener("keyup",d,!1),e.removeEventListener("autosize:destroy",c,!1),e.removeEventListener("autosize:update",d,!1),Object.keys(t).forEach((function(n){e.style[n]=t[n]})),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",c,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",d,!1),window.addEventListener("resize",o,!1),e.addEventListener("input",d,!1),e.addEventListener("autosize:update",d,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:c,update:d}),"vertical"===(a=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===a.resize&&(e.style.resize="horizontal"),t="content-box"===a.boxSizing?-(parseFloat(a.paddingTop)+parseFloat(a.paddingBottom)):parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth),isNaN(t)&&(t=0),d()}var a;function l(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function u(){if(0!==e.scrollHeight){var s=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),i=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,s.forEach((function(e){e.node.scrollTop=e.scrollTop})),i&&(document.documentElement.scrollTop=i)}}function d(){u();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),i="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(i<t?"hidden"===n.overflowY&&(l("scroll"),u(),i="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(l("hidden"),u(),i="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),s!==i){s=i;var o=r("autosize:resized");try{e.dispatchEvent(o)}catch(e){}}}}function c(e){var t=i.get(e);t&&t.destroy()}function a(e){var t=i.get(e);t&&t.update()}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return o(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],c),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],a),e}),t.default=l,e.exports=t.default})?n.apply(t,[e,t]):n)||(e.exports=s)},306:(e,t,n)=>{"use strict";n.r(t)},175:(e,t,n)=>{"use strict";n.r(t)},116:(e,t,n)=>{"use strict";n.r(t)},894:(e,t,n)=>{"use strict";n.r(t)},891:(e,t,n)=>{"use strict";n.r(t)},871:(e,t,n)=>{"use strict";n.r(t)},660:(e,t,n)=>{"use strict";n.r(t)},781:(e,t,n)=>{"use strict";n.r(t)},821:(e,t,n)=>{"use strict";n.r(t)},63:(e,t,n)=>{"use strict";n.r(t)},799:(e,t,n)=>{"use strict";n.r(t)},172:(e,t,n)=>{"use strict";n.r(t)},130:(e,t,n)=>{"use strict";n.r(t)},623:(e,t,n)=>{"use strict";n.r(t)},217:(e,t,n)=>{"use strict";e.exports=n.p+"src/components/checkbox/img/tick.svg"},765:(e,t,n)=>{"use strict";n.r(t);var s=n(142);Array.from(document.querySelectorAll(".form-section")).filter((e=>e.querySelector(".form-section__checkbox"))).forEach((e=>{new s.default(e)}))},142:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});const s=class{constructor(e){this.formSection=e,this._init()}_init(){this._getDomElements(),this._switchHiddenSectionState(),this._addEvents()}_getDomElements(){this.input=this.formSection.querySelector('.checkbox__input[type="checkbox"]')}_switchHiddenSectionState(){this.hiddenSection=Array.from(this.formSection.querySelectorAll(".form-section__text-field")).filter((e=>e.matches("._is-one-of-hidden-section"))),this.hiddenSection.forEach((e=>{this.input.checked?e.style.display="block":e.style.display="none"}))}_addEvents(){this.input.addEventListener("change",this._handleInputOnchange.bind(this))}_handleInputOnchange(){this._switchHiddenSectionState()}}},131:(e,t,n)=>{"use strict";n.r(t);var s=n(108);Array.from(document.querySelectorAll(".text-field")).filter((e=>e.matches("._has-arrow"))).forEach((e=>{new s.default(e)}))},108:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var s=n(367);n.n(s)()(document.querySelectorAll("textarea"));const i=class{constructor(e){this.textField=e,this._init()}_init(){this._getDomElements(),this._addEvents()}_getDomElements(){this.input=this.textField.querySelector(".text-field__container")}_addEvents(){this.input.addEventListener("click",this._handleInputClick.bind(this)),this.input.addEventListener("mouseleave",this._handleInputLeave.bind(this))}_handleInputClick(e){e.preventDefault();const{target:t}=e;this.textField.classList.toggle("_expanded"),t.matches(".text-field__option")&&(this.input.querySelector(".text-field__input").value=t.innerText,this.textField.classList.remove("_expanded"))}_handleInputLeave(){this.textField.classList.remove("_expanded")}}},936:(e,t,n)=>{var s={"./checkbox/checkbox.scss":306,"./checkbox/img/tick.svg":217,"./form-section/FormSection-init.js":765,"./form-section/FormSection.js":142,"./form-section/form-section.scss":175,"./subtitle/subtitle.scss":116,"./text-field/TextField-init.js":131,"./text-field/TextField.js":108,"./text-field/text-field.scss":894};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=936},880:(e,t,n)=>{var s={"./index/index.scss":891};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=880},655:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/android-chrome-192x192.png"},59:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/apple-touch-icon.png"},23:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/favicon.ico"},145:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/favicon.svg"},741:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/icon-16x16.png"},415:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/icon-32x32.png"},697:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/mstile-150x150.png"},337:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/safari-pinned-tab.svg"},990:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/favicons/site.webmanifest"},635:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/fonts/helvetica-neue/helvetica-neue-400.svg"},160:(e,t,n)=>{"use strict";e.exports=n.p+"src/theme/fonts/helvetica-neue/helvetica-neue-700.svg"},761:(e,t,n)=>{var s={"./favicons/android-chrome-192x192.png":655,"./favicons/apple-touch-icon.png":59,"./favicons/favicon.ico":23,"./favicons/favicon.svg":145,"./favicons/icon-16x16.png":741,"./favicons/icon-32x32.png":415,"./favicons/mstile-150x150.png":697,"./favicons/safari-pinned-tab.svg":337,"./favicons/site.webmanifest":990,"./fonts/helvetica-neue/helvetica-neue-400.svg":635,"./fonts/helvetica-neue/helvetica-neue-700.svg":160,"./scss/fonts.scss":871,"./scss/global.scss":660,"./scss/helpers.scss":781,"./scss/mixins/container.scss":821,"./scss/mixins/material-icons.scss":63,"./scss/mixins/visually-hidden.scss":799,"./scss/mixins/visually-visible.scss":172,"./scss/reset.scss":130,"./scss/variables.scss":623};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=r,e.exports=i,i.id=761}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(e){return e.keys().map(e)}e(n(936)),e(n(880)),e(n(761))})()})();