(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{766:function(n,e,t){var o=t(767);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,t(76).default)("782fc1a3",o,!1,{})},767:function(n,e,t){(n.exports=t(66)(!1)).push([n.i,"\n.component-wrapper[data-v-71ac7487] {\n  display: flex;\n  justify-content: center;\n  width: 10rem;\n}\n.component-wrapper ul[data-v-71ac7487] {\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  margin: 0.32rem 0.32rem 0.08rem;\n  padding: 0;\n  width: 100%;\n}\n.component-wrapper ul li[data-v-71ac7487] {\n  position: relative;\n  width: 4.56rem;\n  margin-bottom: 0.24rem;\n  background-color: #FFFFFF;\n  overflow: hidden;\n}\n.component-wrapper ul .item-image[data-v-71ac7487] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 6.08rem;\n}\n.component-wrapper ul .item-image .image-goods img[data-v-71ac7487] {\n  width: 100%;\n}\n.component-wrapper ul .item-info[data-v-71ac7487] {\n  padding-left: 0.32rem;\n  margin-bottom: 0.32rem;\n}\n.component-wrapper ul .item-title[data-v-71ac7487] {\n  box-sizing: content-box;\n  width: 3.92rem;\n  font-size: 0.29333333rem;\n  height: 0.4rem;\n  line-height: 0.4rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  word-wrap: break-word;\n  padding-top: 0.24rem;\n  margin-bottom: 0.10666667rem;\n  color: #333333;\n}\n.component-wrapper ul .item-title a[data-v-71ac7487] {\n  color: #333333;\n}\n.component-wrapper ul .item-title a[data-v-71ac7487]:hover {\n  color: #333333;\n}\n.component-wrapper ul .item-shop-market[data-v-71ac7487] {\n  width: 100%;\n}\n.component-wrapper ul .item-shop-market .item-shop[data-v-71ac7487] {\n  display: flex;\n  flex-flow: row wrap;\n  color: #333333;\n  line-height: 0.64rem;\n  align-items: baseline;\n}\n.component-wrapper ul .item-shop-market .item-shop .shop-title[data-v-71ac7487] {\n  font-size: 0.34666667rem;\n  max-width: 3.92rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  word-wrap: break-word;\n}\n.component-wrapper ul .item-shop-market .item-shop .shop-title-block[data-v-71ac7487] {\n  display: inline-block;\n  width: 0.10695187rem;\n}\n.component-wrapper ul .item-shop-market .item-shop .shop-price[data-v-71ac7487] {\n  font-size: 0.48rem;\n  font-weight: bold;\n}\n.component-wrapper ul .item-market[data-v-71ac7487] {\n  color: #999999;\n  line-height: 0.45333333rem;\n}\n.component-wrapper ul .item-soldOut[data-v-71ac7487] {\n  position: absolute;\n  top: 2.42666667rem;\n  left: 0.32rem;\n  width: 3.92rem;\n  height: 0.80213904rem;\n  line-height: 0.80213904rem;\n  border-radius: 1.06666667rem;\n  background-color: #000000;\n  opacity: 0.4;\n  z-index: 1;\n}\n.component-wrapper ul .item-soldOut > span[data-v-71ac7487] {\n  display: block;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.32rem;\n  color: #ffffff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-break: keep-all;\n  word-wrap: break-word;\n  width: 100%;\n}\n.component-wrapper.is-whole ul[data-v-71ac7487] {\n  margin: 0.32rem;\n  padding: 0.32rem 0.32rem 0rem;\n  width: 100%;\n  background-color: #ffffff;\n}\n.component-wrapper.is-whole ul li[data-v-71ac7487] {\n  width: 4.24rem;\n}\n.component-wrapper.is-whole ul .item-image[data-v-71ac7487] {\n  height: 5.65333333rem;\n}\n.component-wrapper.is-whole ul .item-info[data-v-71ac7487] {\n  padding-left: 0rem;\n}\n.component-wrapper.is-whole ul .item-soldOut[data-v-71ac7487] {\n  position: absolute;\n  top: 2.42666667rem;\n  width: 3.6rem;\n}\n",""])},789:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this.styles,e=n.margin_top,t=n.margin_bottom,o=n.bg_color,i=n.bg_radius,a=n.item_radius,r=n.shop_price_color;return"\n        .component-"+this.id+" {\n            margin-top: "+this.px2rem(e)+";\n            margin-bottom: "+this.px2rem(t)+";\n            background-color: "+(o||"#f8f8f8")+";\n        }\n\n        .component-"+this.id+" ul {\n            border-radius: "+this.px2rem(i||12)+";\n        }\n\n        .component-"+this.id+" li {\n            border-radius: "+this.px2rem(a||12)+";\n        }\n\n        .component-"+this.id+" .item-shop .shop-price {\n            color: "+r+";\n        }\n    "},i={props:["id","datas","styles","goodsSKU","languages"],computed:{css:function(){return"<style>"+o.call(this)+"</style>"},className:function(){var n=["component-wrapper","component-"+this.id];return this.whole&&n.push("is-whole"),n},env:function(){return this.$store.state.page.env},list:function(){try{return this.goodsSKU[0].goodsInfo||[]}catch(n){return[]}},whole:function(){return 1==this.styles.box_is_whole}},methods:{px2rem:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return n/75+"rem"}},watch:{list:function(){this.$store.dispatch("global/async_goods_init_2",this)}},mounted:function(){this.$emit("loaded"),this.$store.dispatch("global/async_goods_init_2",this)}},a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.list.length>0?t("div",{class:n.className},[t("div",{domProps:{innerHTML:n._s(n.css)}}),n._v(" "),t("ul",n._l(n.list,(function(e,o){return t("li",{key:o+"-"+e.goods_sn},[t("discount-zaful-m",{attrs:{value:e.discount,config:n.styles}}),n._v(" "),t("div",{staticClass:"item-image"},[t("a",{attrs:{href:e.goods_number>0?e.url_title:"javascript:void(0);"}},[t("div",{staticClass:"image-goods"},[t("goods-image-zaful",{attrs:{src:e.goods_img,sku:e.goods_sn,index:o}})],1)]),n._v(" "),e.goods_number<=0?t("div",{staticClass:"item-soldOut"},[t("span",[n._v(n._s(n.languages.sold_out))])]):n._e()]),n._v(" "),t("div",{staticClass:"item-info"},[t("div",{staticClass:"item-title"},[t("a",{attrs:{href:e.goods_number>0?e.url_title:"javascript:void(0);"}},[n._v(n._s(e.goods_title))])]),n._v(" "),t("div",{staticClass:"item-shop-market"},[t("div",{staticClass:"item-shop bold"},[t("div",{staticClass:"shop-title"},[n._v(n._s(n.styles.shop_price_title))]),n._v(" "),t("span",{staticClass:"shop-title-block"}),n._v(" "),t("div",{staticClass:"shop-price"},[t("shop-price-zaful",{attrs:{value:e.shop_price,config:n.styles}})],1)]),n._v(" "),t("div",{staticClass:"item-market"},[t("market-price-zaful",{attrs:{value:e.market_price,"shop-price":e.shop_price,config:n.styles}})],1)])])],1)})),0)]):n._e()};a._withStripped=!0;var r=t(30);var s=function(n){t(766)},p=Object(r.a)(i,a,[],!1,s,"data-v-71ac7487",null);p.options.__file="src/ui-component/U000245/m/index.vue";e.default=p.exports}}]);