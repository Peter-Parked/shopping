"use strict";(self["webpackChunkhm_shopping"]=self["webpackChunkhm_shopping"]||[]).push([[887],{4887:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order"},[e("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{name:"all",title:"全部"}}),e("van-tab",{attrs:{name:"payment",title:"待支付"}}),e("van-tab",{attrs:{name:"delivery",title:"待发货"}}),e("van-tab",{attrs:{name:"received",title:"待收货"}}),e("van-tab",{attrs:{name:"comment",title:"待评价"}})],1),t._l(t.list,(function(t){return e("OrderListItem",{key:t.order_id,attrs:{item:t}})}))],2)},i=[],r=function(){var t=this,e=t._self._c;return t.item.order_id?e("div",{staticClass:"order-list-item"},[e("div",{staticClass:"tit"},[e("div",{staticClass:"time"},[t._v(t._s(t.item.create_time))]),e("div",{staticClass:"status"},[e("span",[t._v(t._s(t.item.state_text))])])]),e("div",{staticClass:"list"},t._l(t.item.goods,(function(a,s){return e("div",{key:s,staticClass:"list-item"},[e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:a.goods_image,alt:""}})]),e("div",{staticClass:"goods-content text-ellipsis-2"},[t._v(" "+t._s(a.goods_name)+" ")]),e("div",{staticClass:"goods-trade"},[e("p",[t._v("¥ "+t._s(a.total_pay_price))]),e("p",[t._v("x "+t._s(a.total_num))])])])})),0),e("div",{staticClass:"total"},[t._v(" 共 "+t._s(t.item.total_num)+" 件商品，总金额 ¥"+t._s(t.item.total_price)+" ")]),e("div",{staticClass:"actions"},[10===t.item.order_status?e("div",[10===t.item.pay_status?e("span",[t._v("立刻付款")]):10===t.item.delivery_status?e("span",[t._v("申请取消")]):20===t.item.delivery_status||30===t.item.delivery_status?e("span",[t._v("确认收货")]):t._e()]):t._e(),30===t.item.order_status?e("div",[e("span",[t._v("评价")])]):t._e()])]):t._e()},n=[],o={props:{item:{type:Object,default:()=>({})}}},l=o,d=a(1001),c=(0,d.Z)(l,r,n,!1,null,"3a7929ad",null),u=c.exports,m=a(7535),v={name:"OrderPage",components:{OrderListItem:u},data(){return{active:this.$route.query.dataType||"all",page:1,list:[]}},methods:{async getOrderList(){const{data:{list:t}}=await(0,m.ue)(this.active,this.page);t.data.forEach((t=>{t.total_num=0,t.goods.forEach((e=>{t.total_num+=e.total_num}))})),this.list=t.data}},watch:{active:{immediate:!0,handler(){this.getOrderList()}}}},_=v,p=(0,d.Z)(_,s,i,!1,null,"4e7cf11c",null),f=p.exports},7535:function(t,e,a){a.d(e,{Gd:function(){return i},pm:function(){return r},ue:function(){return n}});var s=a(4471);const i=function(t,e){return(0,s.Z)({url:"/checkout/order",method:"get",params:{mode:t,delivery:10,couponId:0,isUsePoints:0,...e}})},r=function(t,e){return(0,s.Z)({url:"/checkout/submit",method:"post",data:{mode:t,delivery:20,couponId:0,isUsePoints:0,payType:10,...e}})},n=function(t,e){return(0,s.Z)({url:"/order/list",method:"get",params:{dataType:t,page:e}})}}}]);
//# sourceMappingURL=887.62bf65f6.js.map