(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-62f7"],{"+E9z":function(e,a,t){"use strict";var o=t("joBk");t.n(o).a},"4p+I":function(e,a,t){"use strict";t.r(a);var o=t("t3Un"),n={name:"Upload",data:function(){return{uploadUrl:"https://up.qiniup.com",dialogImageUrl:"",dialogVisible:!1,desc:"",dataObj:{}}},created:function(){var e=this;o.a.get("/api/getToken").then(function(a){e.dataObj={token:a.data.token},console.log(e.dataObj)})},methods:{handleRemove:function(e,a){console.log(e,a)},handlePictureCardPreview:function(e){console.log(e),this.dialogImageUrl=e.url,this.dialogVisible=!0},handleBeforeUpload:function(e){var a=e.name,t=a.substring(a.lastIndexOf("."),a.length).toLowerCase(),o=new Date,n=o.getFullYear()+""+(o.getMonth()+1)+o.getDate()+o.getHours()+o.getMinutes();this.dataObj.key=n+"_"+Math.floor(1e4*Math.random())+t,console.log(this.dataObj)},handleSuccess:function(e,a){console.log(a),console.log(e),this.desc=e.data.words},handleUpload:function(e){console.log(e)}}},l=(t("+E9z"),t("KHd+")),i=Object(l.a)(n,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("nav-bar"),e._v(" "),t("el-container",[t("el-header",[e._v("图片识别模块")]),e._v(" "),t("el-container",[t("el-aside",{attrs:{width:"500px"}},[t("div",[e._v("点击下面的加号 上传图片")]),e._v(" "),t("el-upload",{attrs:{data:e.dataObj,action:e.uploadUrl,limit:100,"on-preview":e.handlePictureCardPreview,"before-upload":e.handleBeforeUpload,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"list-type":"picture-card"}},[t("i",{staticClass:"el-icon-plus"})]),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("img",{attrs:{src:e.dialogImageUrl,width:"100%",alt:""}})])],1),e._v(" "),t("el-main",[t("el-input",{attrs:{type:"textarea",rows:"50"},model:{value:e.desc,callback:function(a){e.desc=a},expression:"desc"}})],1)],1)],1)],1)},[],!1,null,"1a8781ab",null);i.options.__file="upload.vue";a.default=i.exports},joBk:function(e,a,t){}}]);