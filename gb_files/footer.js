!function(t,e,i){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(t),s=n(e),a=n(i),r={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:{"gb-icon":"ru-icon"!==t.name},attrs:{src:"https://frontend-scripts.hb.bizmrg.com/unique-hf/svg/"+t.name+".svg",alt:t.name}})},staticRenderFns:[],name:"MnIcon",props:{name:{type:String,required:!0}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mn-sceleton-loading"})},staticRenderFns:[],stub:1};var c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"mn-footer"},[i("div",{staticClass:"mn-footer-wrapper"},[i("footer-top",{attrs:{location:t.location}}),t._v(" "),i("footer-nav",{attrs:{"navigation-list":t.data}}),t._v(" "),i("footer-bottom",{attrs:{location:t.location}})],1)])},staticRenderFns:[],name:"GbFooter",components:{FooterTop:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mn-top_block-container"},[i("footer-logo"),t._v(" "),t.isPhonesVisible&&!t.isLoading?i("div",{staticClass:"mn-phone_block"},t._l(t.phones,(function(e){return i("div",{key:e.type,staticClass:"mn-phone"},[i("a",{staticClass:"mn-phone-link",attrs:{href:"tel:"+e.phone}},[t._v(t._s(e.phone))]),t._v(" "),i("div",{staticClass:"mn-phone-description"},[t._v(t._s(t.descriptionTrim(e.description)))])])})),0):t._e(),t._v(" "),t.isEmailsVisible&&!t.isLoading?i("div",{staticClass:"mn-email_block"},t._l(t.emails,(function(e){return i("div",{key:e.type,staticClass:"mn-email"},[i("a",{staticClass:"mn-email-link",attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))]),t._v(" "),i("div",{staticClass:"mn-email-description"},[t._v(t._s(t.descriptionTrim(e.description)))])])})),0):i("mn-sceleton-loading",{staticClass:"mn-phone_block"}),t._v(" "),i("footer-social")],1)},staticRenderFns:[],name:"GbFooterTop",components:{FooterLogo:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{class:["mn-footer__logo-link"],attrs:{href:"/"}},[e("div",{staticClass:"mn-footer__logo-image"})])},staticRenderFns:[],name:"GbFooterLogo"},FooterSocial:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mn-footer-social"},[i("ul",{staticClass:"mn-footer-social-list"},[i("li",{staticClass:"mn-footer-social-item"},[i("a",{staticClass:"mn-footer-social-link",attrs:{href:"https://vk.com/geekbrainsru"}},[i("icon",{attrs:{name:"vk-icon-colorless"}})],1)]),t._v(" "),i("li",{staticClass:"mn-footer-social-item"},[i("a",{staticClass:"mn-footer-social-link",attrs:{href:"https://www.youtube.com/user/progliveru"}},[i("icon",{attrs:{name:"youtube-icon"}})],1)]),t._v(" "),i("li",{staticClass:"mn-footer-social-item"},[i("a",{staticClass:"mn-footer-social-link",attrs:{href:"https://telegram.me/geekbrains_ru"}},[i("icon",{attrs:{name:"tg-icon"}})],1)])])])},staticRenderFns:[],name:"GbFooterSocial",components:{Icon:r}},MnSceletonLoading:l},props:{location:{type:Object,default:()=>({})}},computed:{isLoading(){return!Object.keys(this.location).length},isPhonesVisible(){return Array.isArray(this.location?.content?.phones)},isEmailsVisible(){return Array.isArray(this.location?.content?.emails)},phones(){return this.location?.content?.phones||null},emails(){return this.location?.content?.emails||null}},methods:{descriptionTrim(t){let e=t.slice(0,26);return e.length<t.length&&(e+="..."),e}}},FooterNav:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"mn-desktop_container"},[i("div",{staticClass:"mn-desktop-navigation-first_section"},[i("div",{staticClass:"mn-desktop-navigation-block"},[Array.isArray(t.navigationList)&&t.navigationList.length>0?i("a",{staticClass:"mn-footer-navigation-title",attrs:{href:t.navigationList&&t.navigationList.length&&t.navigationList[0].url}},[t._v("\n          "+t._s(t.navigationList&&t.navigationList.length&&t.navigationList[0].title)+"\n        ")]):t._e(),t._v(" "),Array.isArray(t.navigationList)&&t.navigationList.length>0?i("footer-nav-list",{attrs:{list:t.navigationList&&t.navigationList.length&&t.navigationList[0].children}}):t._e()],1)]),t._v(" "),Array.isArray(t.navigationList)&&t.navigationList.length>0?i("div",{staticClass:"mn-desktop-navigation-other_sections"},t._l(t.navigationList.filter((function(t,e){return 0!==e})),(function(e,n){return i("div",{key:n+"_desktop-navigation-block",staticClass:"mn-desktop-navigation-block",class:{"mn-footer-safari":t.isSafari,"mn-footer-chrome":!t.isSafari}},[i("a",{staticClass:"mn-footer-navigation-title",attrs:{href:e.url}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),i("footer-nav-list",{attrs:{list:e.children}})],1)})),0):t._e()]),t._v(" "),Array.isArray(t.navigationList)&&t.navigationList.length>0?i("div",{staticClass:"mn-mobile_container"},t._l(t.navigationList,(function(e,n){return i("div",{key:n+"_mobile-navigation-block",staticClass:"mn-mobile-navigation-block"},[i("details",[i("summary",[i("div",{staticClass:"mn-mobile-navigation-summary_inner"},[i("a",{staticClass:"mn-footer-navigation-title",attrs:{href:e.url}},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),e.children?i("div",{staticClass:"mn-mobile-navigation-icons"},[i("icon",{staticClass:"mn-mobile-navigation-icon_plus",attrs:{name:"plus"}}),t._v(" "),i("icon",{staticClass:"mn-mobile-navigation-icon_minus",attrs:{name:"minus"}})],1):t._e()])]),t._v(" "),i("footer-nav-list",{attrs:{list:e.children}})],1)])})),0):t._e()])},staticRenderFns:[],name:"GbFooterNav",components:{Icon:r,FooterNavList:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"mn-footer-navigation-list"},t._l(t.list,(function(e,n){return i("li",{key:n},[i("a",{staticClass:"mn-footer-navigation-link",attrs:{href:e.url}},[t._v(t._s(e.title))]),t._v(" "),e.children?i("ul",{staticClass:"mn-footer-navigation-list"},t._l(e.children,(function(e,n){return i("li",{key:n},[i("a",{staticClass:"mn-footer-navigation-link",attrs:{href:e.url}},[t._v(t._s(e.title))])])})),0):t._e()])})),0)},staticRenderFns:[],props:{list:{type:Array,default:()=>[]}}}},props:{navigationList:{type:Array,default:()=>[]}},data:()=>({isSafari:!1}),mounted(){this.isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}},FooterBottom:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mn-bottom-block__container"},[i("div",{staticClass:"mn-bottom-block__content"},[t.isLegalVisible?i("div",{staticClass:"mn-bottom-block__links"},t._l(t.legal,(function(e){return i("div",{key:e.type},[e.url?i("a",{staticClass:"mn-bottom-block__info-link",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          "+t._s(e.title)+"\n        ")]):i("div",{staticClass:"mn-bottom-block__info-link mn-bottom-block__info-link_no-hover"},[t._v("\n          "+t._s(e.title)+"\n        ")])])})),0):i("mn-sceleton-loading"),t._v(" "),i("div",{staticClass:"mn-bottom-block__styled-text"},[t._v("© GeekBrains, "+t._s(t.currentYear))])],1),t._v(" "),i("div",{staticClass:"mn-bottom-block__icon-block"},[i("a",{staticClass:"mn-bottom-block__icon-link",attrs:{href:"https://navigator.sk.ru/orn/1122411",target:"_blank",rel:"noopener noreferrer"}},[i("icon",{attrs:{name:"skolkovo-icon"}})],1)])])},staticRenderFns:[],name:"GbFooterBottom",components:{Icon:r,MnSceletonLoading:l},props:{location:{type:Object,default:()=>({})}},computed:{currentYear:()=>(new Date).getFullYear(),isLegalVisible(){return Array.isArray(this.location?.content?.legal)},legal(){return this.location?.content?.legal||[]}}}},props:{data:{type:Array,default:()=>[]}},data:()=>({location:{}}),mounted(){addEventListener("location-changed",(t=>{var e;t.stopImmediatePropagation(),dispatchEvent(new CustomEvent("footer-received-location-data",{detail:e})),this.location=t.detail.location}))}};const m=["development","dev"].includes("production")?"https://gb.dev.gb.ru":"https://gb.ru";var d={header:"/api/ui/v2/navigation/items?alias=main&types[]=burger&types[]=line&types[]=profile&types[]=line_second",footer:"/api/ui/v2/navigation/items?alias=main&types[]=footer",breadcrumbs:"api/ui/v1/navigation/breadCrumbs?alias=main&type=footer",userInfo:"api/v2/users/contact_details",cartInfo:"api/v2/cart/items_count",chatUnreadMessageCount:"/chat/rooms/unread_messages_count.json",notices:"api/v2/notices",location:`${m}/api/location/v1/regions/location`,regions:`${m}/api/location/v1/regions`,regionsWithCurrencies:"https://pricing.gb.ru/api/regions-with-currencies"};const u=s.default.create({baseURL:"https://gb.ru",timeout:15e3,headers:{"Content-Type":"application/json"}});o.default.use(a.default);const g=(t,e)=>{dispatchEvent(new CustomEvent(t,{detail:e}))},v=new a.default.Store({state:{regions:[],location:{},suggestionMessage:{},isDefineRegionEnabled:!1,isVisuallyImpairedVersion:!1,isSuggestVisible:!1,isModalVisible:!1,isMobileModalVisible:!1,isImpairedModalVisible:!1,listOfCurrencies:[{name:"Рубль",symbol:"₽",id:"rub"},{name:"Доллар",symbol:"$",id:"usd"},{name:"Евро",symbol:"€",id:"eur"},{name:"Бел. рубль",symbol:"Br",id:"byn"},{name:"Сом",symbol:"c",id:"kgs"},{name:"Драм",symbol:"AMD",id:"amd"},{name:"Тенге",symbol:"₸",id:"kzt"},{name:"Юань",symbol:"¥",id:"cny"},{name:"Сум",symbol:"UZS",id:"uzs"},{name:"Лей",symbol:"L",id:"mdl"}],currencyId:"",currency:{name:"",symbol:"",id:""},regionsWithCurrencies:[],isNeedToEmitRegion:!1,isNeedToEmitCurrency:!1,isFooterReceivedData:!1},mutations:{setLocation(t,e){t.location=e,t.isNeedToEmitRegion&&g("gb-region-changed-to",{location:e}),this.commit("setFooterReceivedData",!1);const i=setInterval((()=>{t.isFooterReceivedData?clearInterval(i):g("location-changed",{location:e})}),100)},setVisuallyImpairedVersion(t,e){t.isVisuallyImpairedVersion=e},setDefineRegion(t,e){t.isDefineRegionEnabled=e},setRegions(t,e){t.regions=e},setSuggestionMessage(t,e){t.suggestionMessage=e},setSuggestVisible(t,e){t.isSuggestVisible=e},setModalVisible(t,e){t.isModalVisible=e},setMobileModalVisible(t,e){t.isMobileModalVisible=e},setImpairedModalVisible(t,e){t.isImpairedModalVisible=e},setNeedToEmitRegion(t,e){t.isNeedToEmitRegion=e},setNeedToEmitCurrency(t,e){t.isNeedToEmitCurrency=e},setFooterReceivedData(t,e){t.isFooterReceivedData=e},setCurrency(t,e){t.currencyId=e,t.currency=t.listOfCurrencies.find((t=>t.id===e)),((t,e,i={path:"/"})=>{if(!t)return;(i=i||{}).expires instanceof Date&&(i.expires=i.expires.toUTCString()),e instanceof Object&&(e=JSON.stringify(e));let n=encodeURIComponent(t)+"="+encodeURIComponent(e);for(const t in i){n+="; "+t;const e=i[t];!0!==e&&(n+="="+e)}document.cookie=n})("currencyIdV1",e,{"max-age":2628e3}),t.isNeedToEmitCurrency&&g("gb-currency-changed-to",{...t.currency})},setRegionsWithCurrencies(t,e){t.regionsWithCurrencies=e}},actions:{async getRegions({commit:t}){try{t("setRegions",await u.get(d.regions).then((({data:t})=>t?.data.regions||[])))}catch(t){}},async getCurrentLocation({state:t},e){try{return await(t=>{const e=t?"?auto=1":"";return u.get(d.location+e)})(e).then((({data:t})=>t?.data?.location||{}))}catch(t){}},async setSelectedLocation({commit:t},{id:e,setEmit:i}){try{const o=await(n=e,u.get(`${d.regions}/${n}`)).then((({data:t})=>t?.data?.region||{}));o&&(t("setLocation",o),i&&t("setNeedToEmitRegion",!0))}catch(t){}var n},async getRegionsWithCurrencies({commit:t}){try{t("setRegionsWithCurrencies",await u.get(d.regionsWithCurrencies).then((({data:t})=>t?.data||[])))}catch(t){}}},getters:{getEmailForHeader(t){const e=t.location?.content?.emails;if(Array.isArray(e)&&e.length>0){const t=e.filter((t=>"main"===t.type));if(t.length>0)return t[0]}return null},getCurrencyId:t=>((t,e=!1)=>{if(!t)return;const i=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]*)"));if(i){const t=decodeURIComponent(i[1]);if(e)try{return JSON.parse(t)}catch(t){}return t}})("currencyIdV1")||t.currencyId,getCurrencyIdForLocation:t=>e=>{const i=t.regionsWithCurrencies.filter((t=>t?.regionId?.toLowerCase()===e.toLowerCase()));return i.length>0&&-1!==t.listOfCurrencies.findIndex((t=>t.id===i[0].currency))?i[0].currency:"eur"}},modules:{}});if(document.getElementById("footer-monolit")){let t=[];u.get(d.footer).then((({data:e})=>{1===e.length&&(t=e[0].items)})).finally((()=>{new o.default({store:v,render:e=>e(c,{props:{data:t}})}).$mount("#footer-app")}))}}(Vue,axios,Vuex);
//# sourceMappingURL=footer.js.map
