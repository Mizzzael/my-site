/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{256:function(t,e,n){var o,l;!function(r,c){"use strict";o=[n(259)],void 0===(l=function(t){return function(t,e){var n=t.jQuery,o=t.console;function l(a,b){for(var t in b)a[t]=b[t];return a}var r=Array.prototype.slice;function c(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?r.call(t):[t]}function d(t,e,r){if(!(this instanceof d))return new d(t,e,r);var f=t;"string"==typeof t&&(f=document.querySelectorAll(t)),f?(this.elements=c(f),this.options=l({},this.options),"function"==typeof e?r=e:l(this.options,e),r&&this.on("always",r),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(f||t))}d.prototype=Object.create(e.prototype),d.prototype.options={},d.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},d.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&f[e]){for(var n=t.querySelectorAll("img"),i=0;i<n.length;i++){var img=n[i];this.addImage(img)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(i=0;i<o.length;i++){var l=o[i];this.addElementBackgroundImages(l)}}}};var f={1:!0,9:!0,11:!0};function m(img){this.img=img}function h(t,element){this.url=t,this.element=element,this.img=new Image}return d.prototype.addElementBackgroundImages=function(t){var style=getComputedStyle(t);if(style)for(var e=/url\((['"])?(.*?)\1\)/gi,n=e.exec(style.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=e.exec(style.backgroundImage)}},d.prototype.addImage=function(img){var t=new m(img);this.images.push(t)},d.prototype.addBackground=function(t,e){var n=new h(t,e);this.images.push(n)},d.prototype.check=function(){var t=this;function e(image,e,n){setTimeout((function(){t.progress(image,e,n)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(t){t.once("progress",e),t.check()})):this.complete()},d.prototype.progress=function(image,t,e){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!image.isLoaded,this.emitEvent("progress",[this,image,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,image),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+e,image,t)},d.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},m.prototype=Object.create(e.prototype),m.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},m.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},m.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},m.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},m.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype=Object.create(m.prototype),h.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},h.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},d.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((n=e).fn.imagesLoaded=function(t,e){return new d(this,t,e).jqDeferred.promise(n(this))})},d.makeJQueryPlugin(),d}(r,t)}.apply(e,o))||(t.exports=l)}("undefined"!=typeof window?window:this)},259:function(t,e,n){var o,l;"undefined"!=typeof window&&window,void 0===(l="function"==typeof(o=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},o=n[t]=n[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var o=n.indexOf(e);return-1!=o&&n.splice(o,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],i=0;i<n.length;i++){var l=n[i];o&&o[l]&&(this.off(t,l),delete o[l]),l.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?o.call(e,n,e,t):o)||(t.exports=l)},264:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("2558f9d7",content,!0,{sourceMap:!1})},277:function(t,e,n){t.exports=n.p+"img/avatar.d9e8c98.jpg"},278:function(t,e,n){"use strict";n(264)},279:function(t,e,n){var o=n(53)((function(i){return i[1]}));o.push([t.i,".backend\\.box[data-v-07976302],.frameworks\\.box[data-v-07976302],.frontend\\.box[data-v-07976302]{\n  transform-origin:left center\n}\n.skills\\.items[data-v-07976302],.skills\\.label[data-v-07976302],.skills\\.title[data-v-07976302]{\n  letter-spacing:2px\n}\n@media only screen and (min-width:1024px){\n.avatar[data-v-07976302]{\n    width:420px;\n    max-height:420px\n}\n.skill[data-v-07976302]{\n    width:604px\n}\n}\n@media only screen and (min-width:1280px){\n.skill[data-v-07976302]{\n    width:860px\n}\n.skills\\.triggerOverlay[data-v-07976302]{\n    width:40px;\n    height:40px;\n    margin-top:40px;\n    transition:background-color .22s cubic-bezier(.215,.61,.355,1)\n}\n.skills\\.triggerOverlay svg[data-v-07976302]{\n    width:28px;\n    height:18px\n}\n}\n@media only screen and (min-width:1536px){\n.skill[data-v-07976302]{\n    width:1116px\n}\n.skills\\.overlay[data-v-07976302]{\n    width:60px;\n    height:60px;\n    transform:translateY(60px)\n}\n}",""]),t.exports=o},285:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"w-full bg-custom-2"},[o("section",{staticClass:"container mx-auto w-full",attrs:{id:"homeskills"}},[o("section",{staticClass:"w-full flex flex-wrap items-center justify-center min-full-height"},[o("section",{staticClass:"w-full flex flex-wrap items-center justify-start skills.title"},[o("header",{staticClass:"md:w-full mx-auto w-11/12 py-4 my-8"},[o("h4",{staticClass:"text-custom-5 xl:text-xl md:text-lg text-md font-bold skills.title opacity-0"},[t._v("\n                        Habilidades\n                    ")])]),t._v(" "),o("figure",{staticClass:"avatar overflow-hidden relative opacity-0"},[o("img",{staticClass:"w-8/12 avatar.image",attrs:{src:n(277),alt:"Eu segurando uma boia de unicórno."}})]),t._v(" "),o("section",{staticClass:"skill"},[o("section",{staticClass:"flex flex-wrap items-center justify-start py-4 w-full"},[o("div",{staticClass:"xl:w-3/12 lg:w-4/12"},[o("p",{staticClass:"xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"},[t._v("\n                                Perfil\n                            ")])]),t._v(" "),o("div",{staticClass:"xl:w-9/12 lg:w-8/12"},[o("p",{staticClass:"xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"},[t._v("\n                                Desenvolvedor Fullstack\n                                "),o("b",{staticClass:"text-custom-4"},[t._v("Pleno")])])])]),t._v(" "),o("section",{staticClass:"flex flex-wrap items-center justify-start py-2 w-full"},[o("div",{staticClass:"xl:w-3/12 lg:w-4/12"},[o("p",{staticClass:"xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"},[t._v("\n                                Front-End\n                            ")])]),t._v(" "),o("div",{staticClass:"xl:w-9/12 lg:w-8/12"},[o("div",{staticClass:"frontend.box w-full bg-custom-1 py-2 relative opacity-0"},[o("div",{staticClass:"absolute top-0 left-0 bg-custom-3 py-2",attrs:{id:"frontend"}})])])]),t._v(" "),o("section",{staticClass:"flex flex-wrap items-center justify-start py-2 w-full"},[o("div",{staticClass:"xl:w-3/12 lg:w-4/12"},[o("p",{staticClass:"xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"},[t._v("\n                                Ferramentas\n                            ")])]),t._v(" "),o("div",{staticClass:"xl:w-9/12 lg:w-8/12"},[o("p",{staticClass:"xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"},[t._v("\n                                VueJS, ReactJS, Angular, ES6, Sass,\n                                Stylus...\n                            ")])])]),t._v(" "),o("section",{staticClass:"flex flex-wrap items-center justify-start py-2 w-full"},[o("div",{staticClass:"xl:w-3/12 lg:w-4/12"},[o("p",{staticClass:"xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"},[t._v("\n                                Back-End\n                            ")])]),t._v(" "),o("div",{staticClass:"xl:w-9/12 lg:w-8/12"},[o("div",{staticClass:"backend.box w-full bg-custom-1 py-2 relative opacity-0"},[o("div",{staticClass:"absolute top-0 left-0 bg-custom-3 py-2",attrs:{id:"backend"}})])])]),t._v(" "),o("section",{staticClass:"flex flex-wrap items-center justify-start py-2 w-full"},[o("div",{staticClass:"xl:w-3/12 lg:w-4/12"},[o("p",{staticClass:"xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"},[t._v("\n                                Ferramentas\n                            ")])]),t._v(" "),o("div",{staticClass:"xl:w-9/12 lg:w-8/12"},[o("p",{staticClass:"xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"},[t._v("\n                                Python, PHP, NodeJS, JAVA, Scala, Elixir...\n                            ")])])]),t._v(" "),o("section",{staticClass:"flex flex-wrap items-center justify-start py-2 w-full"},[o("div",{staticClass:"xl:w-3/12 lg:w-4/12"},[o("p",{staticClass:"xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"},[t._v("\n                                Frameworks\n                            ")])]),t._v(" "),o("div",{staticClass:"xl:w-9/12 lg:w-8/12"},[o("div",{staticClass:"frameworks.box w-full bg-custom-1 py-2 relative opacity-0"},[o("div",{staticClass:"absolute top-0 left-0 bg-custom-3 py-2",attrs:{id:"frameworks"}})])])]),t._v(" "),o("section",{staticClass:"flex flex-wrap items-center justify-start py-1 w-full"},[o("div",{staticClass:"xl:w-3/12 lg:w-4/12"},[o("p",{staticClass:"xl:text-md text-sm text-custom-5 font-bold text-left skills.label opacity-0"},[t._v("\n                                Ferramentas\n                            ")])]),t._v(" "),o("div",{staticClass:"xl:w-9/12 lg:w-8/12"},[o("p",{staticClass:"xl:text-md lg:text-sm text-sm text-custom-5 font-light skills.items"},[t._v("\n                                Phoenix, Laravel, AdonisJS, Tailwindcss...\n                            ")])])])])])])])])}],l=(n(26),n(55),n(66),n(257)),r=n(256),c=n.n(r),d={name:"HomeSkills",data:function(){return{isExecuted:!1}},mounted:function(){var t=this;c()(document.querySelector("body"),(function(){t.initListengScroll()}))},methods:{runAnimations:function(){l.a.timeline({loop:!1}).add({targets:".skills\\.label",opacity:[0,1],translateX:["-45px",0],duration:400,easing:"easeOutElastic(1, .6)",elasticity:700,delay:function(t,i){return 80*i}}),l.a.timeline({loop:!1}).add({targets:".avatar",opacity:[0,1],translateY:["45px",0],duration:1400,easing:"easeOutElastic(1, .6)",delay:function(t,i){return 80*i}}),l.a.timeline({loop:!1}).add({targets:".skills\\.triggerOverlay",opacity:[0,1],scale:[0,1],duration:1400,easing:"easeOutElastic(1, .6)",delay:function(t,i){return 80*i}}),l.a.timeline({loop:!1}).add({targets:".skills\\.triggerOverlay svg",opacity:[0,1],duration:1400,delay:function(t,i){return 80*i}}),l.a.timeline({loop:!1}).add({targets:".skills\\.words",opacity:[0,1],scale:[1.8,1],translateX:[10,0],duration:100,easing:"spring(1, 80, 10, 0)",delay:function(t,i){return 40*i}}),l.a.timeline({loop:!1}).add({targets:".skills\\.title",opacity:[0,1],translateY:[-20,0],duration:400,easing:"spring(1, 80, 10, 0)",delay:function(t,i){return 40*i}}),l.a.timeline({loop:!1}).add({targets:[".frontend\\.box",".backend\\.box",".frameworks\\.box"],opacity:[0,1],scaleX:[0,1],translateZ:0,duration:400,easing:"easeInOutExpo",elasticity:700,delay:function(t,i){return 80*i}}).add({targets:".frontend\\.box div",width:[0,"93%"],duration:400,easing:"easeOutElastic(1, .6)",elasticity:700}).add({targets:".backend\\.box div",width:[0,"74%"],duration:400,easing:"easeOutElastic(1, .6)",elasticity:700}).add({targets:".frameworks\\.box div",width:[0,"82%"],duration:400,easing:"easeOutElastic(1, .6)",elasticity:700})},initListengScroll:function(){var t=this,e=document.getElementById("homeskills");document.querySelectorAll(".skills\\.items").forEach((function(t){t.innerHTML=t.textContent.replace(/\S/g,'<span class="skills.words inline-block opacity-0">$&</span>')}));var n=function(){window.scrollY>=.98*e.offsetTop&&!t.isExecuted&&(t.isExecuted=!0,t.runAnimations())};n(),window.addEventListener("scroll",(function(){n()}),!1)}}},f=(n(278),n(42)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"07976302",null);e.default=component.exports}}]);