(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{256:function(e,t,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("15ff3616",content,!0,{sourceMap:!1})},257:function(e,t,n){"use strict";n(256)},258:function(e,t,n){var l=n(54),o=n(261),r=n(259),c=l((function(i){return i[1]})),d=o(r);c.push([e.i,".header[data-v-639d4274]{\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position:50%\n}\n.header\\.title[data-v-639d4274]{\n  letter-spacing:2px\n}\n.header\\.backdrop[data-v-639d4274]{\n  background-color:rgba(198,108,73,.4)\n}\n@media only screen and (min-width:1536px){\n.header[data-v-639d4274]{\n    background-image:url("+d+")\n}\n}",""]),e.exports=c},259:function(e,t,n){e.exports=n.p+"img/vincentiu-solomon-Z4wF0h47fy8-unsplash.a183432.jpg"},262:function(e,t,n){"use strict";n.r(t);n(53),n(66);var l=n(260),o={name:"HomeBanner",mounted:function(){this.initAnimationOnLetter()},methods:{initAnimationOnLetter:function(){var title=document.querySelector(".header\\.title");title.innerHTML=title.textContent.replace(/\S/g,'<span class="letter inline-block">$&</span>'),l.a.timeline({loop:!1}).add({targets:".header\\.title .letter",scale:[0,1],duration:1500,elasticity:600,delay:function(e,i){return 45*(i+1)}})}}},r=(n(257),n(50)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header w-full full-height"},[n("section",{staticClass:"header.backdrop"},[n("section",{staticClass:"container mx-auto relative"},[n("section",{staticClass:"w-full absolute top-0 left-0"},[e._v("\n                Menu Here!\n            ")]),e._v(" "),n("section",{staticClass:"flex flex-wrap items-center full-height"},[n("div",{staticClass:"w-full"},[n("h2",{staticClass:"header.title xl:text-5xl font-light text-custom-1"},[e._v("\n                        Olá, este é o meu site pessoal!\n                    ")]),e._v(" "),n("p",{staticClass:"header.subtitle xl:text-xl font-light text-custom-1 my-4"},[e._v("\n                        Desenvolvedor de Guarulhos, São Paulo\n                    ")])])])])])])}],!1,null,"639d4274",null);t.default=component.exports},275:function(e,t,n){"use strict";n.r(t);var l={},o=n(50),component=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"w-full"},[t("HomeBanner")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HomeBanner:n(262).default})}}]);