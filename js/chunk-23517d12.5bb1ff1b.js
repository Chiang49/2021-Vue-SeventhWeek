(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23517d12"],{a434:function(t,e,c){"use strict";var o=c("23e7"),a=c("23cb"),n=c("a691"),l=c("50c4"),d=c("7b0b"),i=c("65f0"),r=c("8418"),s=c("1dde"),u=s("splice"),b=Math.max,h=Math.min,p=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var c,o,s,u,O,j,f=d(this),g=l(f.length),v=a(t,g),P=arguments.length;if(0===P?c=o=0:1===P?(c=0,o=g-v):(c=P-2,o=h(b(n(e),0),g-v)),g+c-o>p)throw TypeError(m);for(s=i(f,o),u=0;u<o;u++)O=v+u,O in f&&r(s,u,f[O]);if(s.length=o,c<o){for(u=v;u<g-o;u++)O=u+o,j=u+c,O in f?f[j]=f[O]:delete f[j];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>v;u--)O=u+o-1,j=u+c-1,O in f?f[j]=f[O]:delete f[j];for(u=0;u<c;u++)f[u+v]=arguments[u+2];return f.length=g-o+c,s}})},d9e1:function(t,e,c){},d9e3:function(t,e,c){"use strict";c("d9e1")},e6dc:function(t,e,c){"use strict";c.r(e);var o=c("7a23"),a={class:"container"},n={class:"topic"},l=Object(o["h"])("h2",null,"產品登錄",-1),d={class:"productTable"},i={class:"d-flex justify-content-between"},r=Object(o["h"])("button",{type:"button",class:"btn btn-danger",disabled:""}," 刪除全部 ",-1),s=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{style:{width:"10%"}},"分類"),Object(o["h"])("th",{style:{width:"25%"}},"產品名稱"),Object(o["h"])("th",{style:{width:"15%"}},"原價"),Object(o["h"])("th",{style:{width:"15%"}},"售價"),Object(o["h"])("th",{style:{width:"20%"}},"是否啟用"),Object(o["h"])("th",{style:{width:"15%"}},"編輯")])],-1),u={key:0,class:"noProduct"},b=Object(o["h"])("td",{colspan:"6"},"未有產品",-1),h={class:"switch-group"},p=Object(o["h"])("div",{class:"switch-circle"},null,-1),m={class:"d-flex"},O={class:"d-flex justify-content-center"};function j(t,e,c,j,f,g){var v=Object(o["C"])("ProductModal"),P=Object(o["C"])("DeleteModal"),y=Object(o["C"])("Pagination");return Object(o["v"])(),Object(o["e"])("div",a,[Object(o["h"])(v,{ref:"productModal",product:f.tepmProduct,status:f.productMdStatus,onNewProduct:g.updateProduct,onEditProduct:g.updateProduct},null,8,["product","status","onNewProduct","onEditProduct"]),Object(o["h"])(P,{ref:"deleteModal",data:f.tepmProduct,status:f.delStatus,onDelData:g.updateProduct},null,8,["data","status","onDelData"]),Object(o["h"])("section",n,[l,Object(o["h"])("div",d,[Object(o["h"])("div",i,[Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return g.openModal("isNew")})}," 建立新的產品 "),r]),Object(o["h"])("table",null,[s,Object(o["h"])("tbody",null,[0===f.products.length?(Object(o["v"])(),Object(o["e"])("tr",u,[b])):(Object(o["v"])(!0),Object(o["e"])(o["a"],{key:1},Object(o["A"])(f.products,(function(t){return Object(o["v"])(),Object(o["e"])("tr",{key:t.id},[Object(o["h"])("td",null,Object(o["F"])(t.category),1),Object(o["h"])("td",null,Object(o["F"])(t.title),1),Object(o["h"])("td",null,Object(o["F"])(t.origin_price),1),Object(o["h"])("td",null,Object(o["F"])(t.price),1),Object(o["h"])("td",null,[Object(o["h"])("div",h,[Object(o["h"])("div",{class:["switch",{open:t.is_enabled}]},[p],2)])]),Object(o["h"])("td",m,[Object(o["h"])("button",{type:"button",class:"btn btn-outline-primary",onClick:function(e){return g.openModal("edit",t)}}," 編輯 ",8,["onClick"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return g.openDeleteModal("product",t)}}," 刪除 ",8,["onClick"])])])})),128))])])]),Object(o["h"])("div",O,[Object(o["h"])(y,{pagination:f.pagination,onPage:g.getProducts},null,8,["pagination","onPage"])])])])}var f=c("5530"),g=(c("99af"),c("a434"),c("a4d3"),c("e01a"),{id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),v={class:"modal-dialog modal-xl"},P={ref:"modalForm",class:"modal-content border-0"},y={class:"modal-header bg-dark text-white"},w={id:"productModalLabel",class:"modal-title"},M={key:0},k={key:1},U=Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},S={class:"row"},D={class:"col-sm-4"},C={class:"border-bottom mb-2"},$={class:"form-group"},_=Object(o["h"])("label",{for:"imageUrl"},"輸入主圖片網址",-1),J={class:"col-sm-8"},V={class:"form-group"},F=Object(o["h"])("label",{for:"title"},"產品名稱",-1),N={class:"row"},A={class:"form-group col-md-6"},I=Object(o["h"])("label",{for:"category"},"分類",-1),E={class:"form-group col-md-6"},L=Object(o["h"])("label",{for:"unit"},"單位",-1),q={class:"row"},T={class:"form-group col-md-6"},z=Object(o["h"])("label",{for:"origin_price"},"原價",-1),B={class:"form-group col-md-6"},G=Object(o["h"])("label",{for:"price"},"售價",-1),H=Object(o["h"])("hr",null,null,-1),K={class:"form-group"},Q=Object(o["h"])("label",{for:"description"},"產品描述",-1),R={class:"form-group"},W=Object(o["h"])("label",{for:"content"},"說明內容",-1),X={class:"form-group"},Y={class:"form-check"},Z=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),tt={class:"modal-footer"};function et(t,e,c,a,n,l){var d=Object(o["C"])("Swiper-slide"),i=Object(o["C"])("Swiper");return Object(o["v"])(),Object(o["e"])("div",g,[Object(o["h"])("div",v,[Object(o["h"])("div",P,[Object(o["h"])("div",y,[Object(o["h"])("h5",w,["isNew"===n.modalStatus?(Object(o["v"])(),Object(o["e"])("span",M,"新增產品")):(Object(o["v"])(),Object(o["e"])("span",k,"編輯產品"))]),U]),Object(o["h"])("div",x,[Object(o["h"])("div",S,[Object(o["h"])("div",D,[Object(o["h"])("div",C,[Object(o["h"])("div",$,[_,Object(o["O"])(Object(o["h"])("input",{type:"url",id:"imageUrl",class:"form-control",placeholder:"請輸入主圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return n.tempProduct.imageUrl=t})},null,512),[[o["J"],n.tempProduct.imageUrl]])]),Object(o["h"])("img",{class:"img-fluid mb-1",src:n.tempProduct.imageUrl},null,8,["src"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100 mb-2",onClick:e[2]||(e[2]=function(t){return n.tempProduct.imageUrl=""})},"刪除主圖片 ")]),Object(o["h"])("div",null,[Object(o["O"])(Object(o["h"])("input",{type:"text",class:"form-control mb-1",placeholder:"請輸入其他圖片連結","onUpdate:modelValue":e[3]||(e[3]=function(t){return n.tempImageUrl=t})},null,512),[[o["J"],n.tempImageUrl]]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100 mb-2",disabled:""===n.tempImageUrl,onClick:e[4]||(e[4]=function(t){return n.tempProduct.imagesUrl.push(n.tempImageUrl),n.tempImageUrl=""})}," 新增其他圖片 ",8,["disabled"])]),Object(o["h"])(i,{navigation:!0,class:"mySwiper"},{default:Object(o["N"])((function(){return[(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["A"])(n.tempProduct.imagesUrl,(function(t,e){return Object(o["v"])(),Object(o["e"])(o["a"],{key:e},[Object(o["h"])(d,null,{default:Object(o["N"])((function(){return[Object(o["h"])("img",{ref:"images",class:"img-fluid mb-1",src:t,alt:e},null,8,["src","alt"])]})),_:2},1024),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:function(t){return n.tempProduct.imagesUrl.splice(e,1)}}," 刪除第 "+Object(o["F"])(e+1)+" 圖片 ",9,["onClick"])],64)})),128))]})),_:1})]),Object(o["h"])("div",J,[Object(o["h"])("div",V,[F,Object(o["O"])(Object(o["h"])("input",{id:"title",type:"text",name:"產品名稱",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=function(t){return n.tempProduct.title=t})},null,512),[[o["J"],n.tempProduct.title]])]),Object(o["h"])("div",N,[Object(o["h"])("div",A,[I,Object(o["O"])(Object(o["h"])("input",{id:"category",type:"text",name:"分類",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=function(t){return n.tempProduct.category=t})},null,512),[[o["J"],n.tempProduct.category]])]),Object(o["h"])("div",E,[L,Object(o["O"])(Object(o["h"])("input",{id:"unit",type:"text",name:"單位",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=function(t){return n.tempProduct.unit=t})},null,512),[[o["J"],n.tempProduct.unit]])])]),Object(o["h"])("div",q,[Object(o["h"])("div",T,[z,Object(o["O"])(Object(o["h"])("input",{id:"origin_price",type:"number",min:"0",name:"原價",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=function(t){return n.tempProduct.origin_price=t})},null,512),[[o["J"],n.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",B,[G,Object(o["O"])(Object(o["h"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=function(t){return n.tempProduct.price=t})},null,512),[[o["J"],n.tempProduct.price,void 0,{number:!0}]])])]),H,Object(o["h"])("div",K,[Q,Object(o["O"])(Object(o["h"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=function(t){return n.tempProduct.description=t})},"\r\n                ",512),[[o["J"],n.tempProduct.description]])]),Object(o["h"])("div",R,[W,Object(o["O"])(Object(o["h"])("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[11]||(e[11]=function(t){return n.tempProduct.content=t})},"\r\n                ",512),[[o["J"],n.tempProduct.content]])]),Object(o["h"])("div",X,[Object(o["h"])("div",Y,[Object(o["O"])(Object(o["h"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[12]||(e[12]=function(t){return n.tempProduct.is_enabled=t})},null,512),[[o["I"],n.tempProduct.is_enabled]]),Z])])])])]),Object(o["h"])("div",tt,[Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:e[13]||(e[13]=function(){return l.hideModal&&l.hideModal.apply(l,arguments)})}," 取消 "),Object(o["h"])("button",{type:"submit",class:"btn btn-primary",onClick:e[14]||(e[14]=function(){return l.submitProduct&&l.submitProduct.apply(l,arguments)})}," 確認 ")])],512)])],512)}var ct=c("3dea"),ot=c.n(ct),at={props:{product:{type:Object,default:function(){return{}}},status:{type:String,required:!0}},data:function(){return{modal:"",modalStatus:"",tempProduct:{},tempImageUrl:""}},watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imageUrl||(this.tempProduct.imageUrl=""),this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])},status:function(){this.modalStatus=this.status}},methods:{showModal:function(){this.tempProduct={imagesUrl:[]},this.modal.show()},hideModal:function(){this.modal.hide(),this.tempProduct={}},submitProduct:function(){"isNew"===this.modalStatus?this.newProduct():"edit"===this.modalStatus&&this.editProduct()},newProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/product");this.$http.post(e,{data:this.tempProduct}).then((function(e){e.data.success?(alert(e.data.message),t.$emit("newProduct"),t.hideModal()):alert(e.data.message)})).catch((function(t){console.log(t)}))},editProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/product/").concat(this.tempProduct.id);this.$http.put(e,{data:this.tempProduct}).then((function(e){e.data.success?(alert(e.data.message),t.$emit("editProduct"),t.hideModal()):alert(e.data.message)})).catch((function(t){console.log(t)}))}},mounted:function(){this.modal=new ot.a(this.$refs.productModal)}};at.render=et;var nt=at,lt=c("ec05"),dt=c("1799"),it={components:{ProductModal:nt,DeleteModal:lt["a"],Pagination:dt["a"]},data:function(){return{products:[],delStatus:"",productMdStatus:"",tepmProduct:{imagesUrl:[]},pagination:{}}},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/products?page=").concat(e);this.$http.get(c).then((function(e){e.data.success&&(t.products=e.data.products,t.pagination=e.data.pagination)})).catch((function(t){console.log(t)}))},openModal:function(t,e){"isNew"===t?(this.tepmProduct={},this.productMdStatus=t,this.$refs.productModal.showModal()):(this.productMdStatus=t,this.tepmProduct=Object(f["a"])({},e),this.$refs.productModal.showModal())},updateProduct:function(){this.getProducts()},openDeleteModal:function(t,e){this.tepmProduct=Object(f["a"])({},e),this.delStatus=t,this.$refs.deleteModal.openDelete()}},mounted:function(){this.getProducts()}};c("d9e3");it.render=j;e["default"]=it},ec05:function(t,e,c){"use strict";var o=c("7a23"),a={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog",role:"document"},l={class:"modal-content border-0"},d={class:"modal-header bg-danger text-white"},i={class:"modal-title"},r={key:0},s={key:1},u=Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),b={class:"modal-body"},h=Object(o["g"])(" 是否刪除 "),p={key:0,class:"text-danger"},m={key:1,class:"text-danger"},O=Object(o["g"])(" (刪除後將無法恢復)。 "),j={class:"modal-footer"},f=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function g(t,e,c,g,v,P){return Object(o["v"])(),Object(o["e"])("div",a,[Object(o["h"])("div",n,[Object(o["h"])("div",l,[Object(o["h"])("div",d,[Object(o["h"])("h5",i,["product"===v.delStatus?(Object(o["v"])(),Object(o["e"])("span",r,"刪除 "+Object(o["F"])(v.delData.title),1)):(Object(o["v"])(),Object(o["e"])("span",s,"刪除訂單"))]),u]),Object(o["h"])("div",b,[h,"product"===v.delStatus?(Object(o["v"])(),Object(o["e"])("strong",p,Object(o["F"])(v.delData.title),1)):(Object(o["v"])(),Object(o["e"])("strong",m,Object(o["F"])(v.delData.id)+" 此訂單",1)),O]),Object(o["h"])("div",j,[f,Object(o["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(t){return P.deleteData(v.delData.id)})}," 確認刪除 ")])])])],512)}c("99af");var v=c("3dea"),P=c.n(v),y={props:{data:{type:Object,default:function(){return{}}},status:{type:String,required:!0}},data:function(){return{modal:"",delStatus:"",delApi:"",delData:{}}},watch:{data:function(){this.delData=this.data},status:function(){this.delStatus=this.status}},methods:{openDelete:function(){this.modal.show()},hideDelete:function(){this.modal.hide()},deleteData:function(t){var e=this;"product"===this.delStatus?this.delApi="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/product/").concat(t):"order"===this.delStatus&&(this.delApi="".concat("https://vue3-course-api.hexschool.io/","api/").concat("chiang666","/admin/order/").concat(t));var c=this.delApi;this.$http.delete(c).then((function(t){t.data.success?(alert(t.data.message),e.$emit("delData"),e.hideDelete()):alert(t.data.message)})).catch((function(t){console.log(t)}))}},mounted:function(){this.modal=new P.a(this.$refs.modal)}};y.render=g;e["a"]=y}}]);
//# sourceMappingURL=chunk-23517d12.5bb1ff1b.js.map