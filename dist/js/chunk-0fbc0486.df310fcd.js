(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fbc0486"],{"159d":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),l={class:"container"},n={class:"topic"},d=Object(a["h"])("h2",null,"訂單頁面",-1),s={class:"table mt-4"},o=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"購買時間"),Object(a["h"])("th",null,"Email"),Object(a["h"])("th",null,"購買款項"),Object(a["h"])("th",null,"應付金額"),Object(a["h"])("th",null,"是否付款"),Object(a["h"])("th",null,"編輯")])],-1),b={key:0,class:"noProduct"},i=Object(a["h"])("td",{colspan:"6"},"未有訂單",-1),r={class:"list-unstyled"},h={class:"text-right"},u={class:"switch-group"},O=Object(a["h"])("div",{class:"switch-circle"},null,-1),j={key:0},p={key:1},m={class:"btn-group"},f={class:"d-flex justify-content-center"};function v(t,e,c,v,g,y){var k=Object(a["C"])("Pagination"),x=Object(a["C"])("DeleteModal"),D=Object(a["C"])("OrderModal");return Object(a["v"])(),Object(a["e"])(a["a"],null,[Object(a["h"])("div",l,[Object(a["h"])("section",n,[d,Object(a["h"])("table",s,[o,Object(a["h"])("tbody",null,[0===g.orders.length?(Object(a["v"])(),Object(a["e"])("tr",b,[i])):(Object(a["v"])(!0),Object(a["e"])(a["a"],{key:1},Object(a["A"])(g.orders,(function(t){return Object(a["v"])(),Object(a["e"])("tr",{key:t.id},[Object(a["h"])("td",null,Object(a["F"])(t.create_at),1),Object(a["h"])("td",null,[Object(a["h"])("span",null,Object(a["F"])(t.user.email),1)]),Object(a["h"])("td",null,[Object(a["h"])("ul",r,[(Object(a["v"])(!0),Object(a["e"])(a["a"],null,Object(a["A"])(t.products,(function(t){return Object(a["v"])(),Object(a["e"])("li",{key:t.id},Object(a["F"])(t.product.title)+" 數量："+Object(a["F"])(t.qty)+" "+Object(a["F"])(t.product.unit),1)})),128))])]),Object(a["h"])("td",h,Object(a["F"])(t.total),1),Object(a["h"])("td",null,[Object(a["h"])("div",u,[Object(a["h"])("div",{class:["switch",{open:t.is_paid}]},[O],2)]),Object(a["h"])("label",null,[t.is_paid?(Object(a["v"])(),Object(a["e"])("span",j,"已付款")):(Object(a["v"])(),Object(a["e"])("span",p,"未付款"))])]),Object(a["h"])("td",null,[Object(a["h"])("div",m,[Object(a["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return y.openOrderModal(t)}}," 檢視 ",8,["onClick"]),Object(a["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return y.openDeleteModal("order",t)}}," 刪除 ",8,["onClick"])])])])})),128))])])]),Object(a["h"])("div",f,[Object(a["h"])(k,{pagination:g.pagination,onPage:y.getOrder},null,8,["pagination","onPage"])])]),Object(a["h"])(x,{ref:"deleteModal",data:g.tempOrder,status:g.delStatus,onDelData:y.getOrder},null,8,["data","status","onDelData"]),Object(a["h"])(D,{ref:"orderModal",order:g.tempOrder,onChangeOrder:y.getOrder},null,8,["order","onChangeOrder"])],64)}var g=c("5530"),y=(c("99af"),c("ec05")),k=c("1799"),x=(c("b0c0"),{ref:"orderModal",class:"modal fade",tabindex:"-1"}),D={class:"modal-dialog modal-xl"},F={class:"modal-content"},w=Object(a["h"])("div",{class:"modal-header bg-block"},[Object(a["h"])("h5",{class:"modal-title text-white fw-bolder"},"訂單資料"),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},C={class:"row"},_={class:"col-md-4"},S=Object(a["h"])("h3",null,"用戶資料",-1),$={class:"table"},A=Object(a["h"])("th",{style:{width:"100px"}},"姓名",-1),P=Object(a["h"])("th",null,"Email",-1),q=Object(a["h"])("th",null,"電話",-1),E=Object(a["h"])("th",null,"地址",-1),J={class:"col-md-8"},I=Object(a["h"])("h3",null,"訂單細節",-1),L={class:"table"},U=Object(a["h"])("th",{style:{width:"100px"}},"訂單編號",-1),V=Object(a["h"])("th",null,"下單時間",-1),z=Object(a["h"])("th",null,"付款時間",-1),B={key:0},G={key:1},H=Object(a["h"])("th",null,"付款狀態",-1),K={key:0,class:"text-success"},N={key:1,class:"text-muted"},Q=Object(a["h"])("th",null,"總金額",-1),R=Object(a["h"])("h3",null,"選購商品",-1),T={class:"table"},W=Object(a["h"])("thead",null,[Object(a["h"])("tr")],-1),X={class:"text-end"},Y={class:"d-flex justify-content-end"},Z={class:"form-check"},tt={class:"form-check-label",for:"flexCheckDefault"},et={key:0},ct={key:1},at={class:"modal-footer"},lt=Object(a["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function nt(t,e,c,l,n,d){return Object(a["v"])(),Object(a["e"])("div",x,[Object(a["h"])("div",D,[Object(a["h"])("div",F,[w,Object(a["h"])("div",M,[Object(a["h"])("div",C,[Object(a["h"])("div",_,[S,Object(a["h"])("table",$,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[A,Object(a["h"])("td",null,Object(a["F"])(n.user.name),1)]),Object(a["h"])("tr",null,[P,Object(a["h"])("td",null,Object(a["F"])(n.user.email),1)]),Object(a["h"])("tr",null,[q,Object(a["h"])("td",null,Object(a["F"])(n.user.tel),1)]),Object(a["h"])("tr",null,[E,Object(a["h"])("td",null,Object(a["F"])(n.user.address),1)])])])]),Object(a["h"])("div",J,[I,Object(a["h"])("table",L,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[U,Object(a["h"])("td",null,Object(a["F"])(n.temp.id),1)]),Object(a["h"])("tr",null,[V,Object(a["h"])("td",null,Object(a["F"])(n.temp.create_at),1)]),Object(a["h"])("tr",null,[z,Object(a["h"])("td",null,[n.temp.is_paid?(Object(a["v"])(),Object(a["e"])("span",B,Object(a["F"])(n.temp.paid_date),1)):(Object(a["v"])(),Object(a["e"])("span",G,"尚未付款"))])]),Object(a["h"])("tr",null,[H,Object(a["h"])("td",null,[n.temp.is_paid?(Object(a["v"])(),Object(a["e"])("strong",K,"已付款")):(Object(a["v"])(),Object(a["e"])("span",N,"尚未付款"))])]),Object(a["h"])("tr",null,[Q,Object(a["h"])("td",null,Object(a["F"])(n.temp.total),1)])])]),R,Object(a["h"])("table",T,[W,Object(a["h"])("tbody",null,[(Object(a["v"])(!0),Object(a["e"])(a["a"],null,Object(a["A"])(n.products,(function(t){return Object(a["v"])(),Object(a["e"])("tr",{key:t.id},[Object(a["h"])("th",null,Object(a["F"])(t.product.title),1),Object(a["h"])("td",null,Object(a["F"])(t.qty)+" / "+Object(a["F"])(t.product.unit),1),Object(a["h"])("td",X,Object(a["F"])(t.final_total),1)])})),128))])]),Object(a["h"])("div",Y,[Object(a["h"])("div",Z,[Object(a["O"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",id:"flexCheckDefault","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.temp.is_paid=t})},null,512),[[a["I"],n.temp.is_paid]]),Object(a["h"])("label",tt,[n.temp.is_paid?(Object(a["v"])(),Object(a["e"])("span",et,"已付款")):(Object(a["v"])(),Object(a["e"])("span",ct,"未付款"))])])])])])]),Object(a["h"])("div",at,[lt,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(t){return d.changeOrder(n.temp.id)})},"修改付款狀態")])])])],512)}var dt=c("3dea"),st=c.n(dt),ot={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{modal:"",temp:{},user:{},products:{}}},watch:{order:function(){this.temp=this.order,this.user=this.order.user,this.products=this.order.products}},methods:{openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()},changeOrder:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/order/").concat(t);this.$http.put(c,{data:this.temp}).then((function(t){console.log(t),t.data.success?(alert(t.data.message),e.$emit("changeOrder"),e.closeModal()):alert(t.data.message)})).catch((function(t){console.log(t)}))}},mounted:function(){this.modal=new st.a(this.$refs.orderModal)}};ot.render=nt;var bt=ot,it={components:{DeleteModal:y["a"],Pagination:k["a"],OrderModal:bt},inject:["dateFormat"],data:function(){return{orders:[],delStatus:"",tempOrder:{},pagination:{}}},methods:{getOrder:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/orders?page=").concat(e);this.$http.get(c).then((function(e){e.data.success&&(t.orders=e.data.orders,t.pagination=e.data.pagination)})).catch((function(t){console.log(t)}))},openOrderModal:function(t){this.tempOrder=Object(g["a"])({},t),this.$refs.orderModal.openModal()},openDeleteModal:function(t,e){this.tempOrder=Object(g["a"])({},e),this.delStatus=t,this.$refs.deleteModal.openDelete()}},mounted:function(){this.getOrder()}};it.render=v;e["default"]=it},ec05:function(t,e,c){"use strict";var a=c("7a23"),l={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog",role:"document"},d={class:"modal-content border-0"},s={class:"modal-header bg-danger text-white"},o={class:"modal-title"},b={key:0},i={key:1},r=Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),h={class:"modal-body"},u=Object(a["g"])(" 是否刪除 "),O={key:0,class:"text-danger"},j={key:1,class:"text-danger"},p=Object(a["g"])(" (刪除後將無法恢復)。 "),m={class:"modal-footer"},f=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function v(t,e,c,v,g,y){return Object(a["v"])(),Object(a["e"])("div",l,[Object(a["h"])("div",n,[Object(a["h"])("div",d,[Object(a["h"])("div",s,[Object(a["h"])("h5",o,["product"===g.delStatus?(Object(a["v"])(),Object(a["e"])("span",b,"刪除 "+Object(a["F"])(g.delData.title),1)):(Object(a["v"])(),Object(a["e"])("span",i,"刪除訂單"))]),r]),Object(a["h"])("div",h,[u,"product"===g.delStatus?(Object(a["v"])(),Object(a["e"])("strong",O,Object(a["F"])(g.delData.title),1)):(Object(a["v"])(),Object(a["e"])("strong",j,Object(a["F"])(g.delData.id)+" 此訂單",1)),p]),Object(a["h"])("div",m,[f,Object(a["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(t){return y.deleteData(g.delData.id)})}," 確認刪除 ")])])])],512)}c("99af");var g=c("3dea"),y=c.n(g),k={props:{data:{type:Object,default:function(){return{}}},status:{type:String,required:!0}},data:function(){return{modal:"",delStatus:"",delApi:"",delData:{}}},watch:{data:function(){this.delData=this.data},status:function(){this.delStatus=this.status}},methods:{openDelete:function(){this.modal.show()},hideDelete:function(){this.modal.hide()},deleteData:function(t){var e=this;"product"===this.delStatus?this.delApi="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/product/").concat(t):"order"===this.delStatus&&(this.delApi="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/order/").concat(t));var c=this.delApi;this.$http.delete(c).then((function(t){t.data.success?(alert(t.data.message),e.$emit("delData"),e.hideDelete()):alert(t.data.message)})).catch((function(t){console.log(t)}))}},mounted:function(){this.modal=new y.a(this.$refs.modal)}};k.render=v;e["a"]=k}}]);
//# sourceMappingURL=chunk-0fbc0486.df310fcd.js.map