(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5005"],{19:function(e,t){},20:function(e,t){},"5EWB":function(e,t,n){"use strict";n.r(t);var o=n("4d7F"),a=n.n(o),l=n("EUZL"),r=n.n(l),i={data:function(){return{fileList:[]}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},beforeUpload:function(e){var t=this;return new a.a(function(n,o){t.readExcel(e).then(function(e){e&&n(e)})})},readExcel:function(e){console.log(e);var t=this;return new a.a(function(n,o){var a=new FileReader;a.onload=function(e){try{var a=e.target.result,l=r.a.read(a,{type:"binary"}),i=[];for(var s in console.log(l.SheetNames),l.SheetNames){console.log(s);var u=l.SheetNames[s],c=l.Sheets[u];for(var d in c)"!ref"!==d&&i.push(c[d])}var f=r.a.utils.sheet_to_json(l.Sheets[l.SheetNames[0]]);console.log(f),i.length>t.upLoadNumber?(console.log("上传电芯数量不能超过6条"),n(!1)):n(!0)}catch(e){o(e.message)}},a.readAsBinaryString(e)})}}},s=(n("8TPN"),n("KHd+")),u=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-bar"),e._v(" "),n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-upload":e.beforeUpload,"file-list":e.fileList,action:""}},[n("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传 Excel 文件，且不超过 500kb")])],1)],1)},[],!1,null,"034d6a07",null);u.options.__file="excel.vue";t.default=u.exports},"8TPN":function(e,t,n){"use strict";var o=n("VFNK");n.n(o).a},9:function(e,t){},VFNK:function(e,t,n){}}]);