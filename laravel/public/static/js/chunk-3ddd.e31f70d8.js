(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3ddd"],{"29bv":function(t,e,n){"use strict";var a=n("xN0U");n.n(a).a},sZnh:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"h",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"g",function(){return u}),n.d(e,"a",function(){return o}),n.d(e,"d",function(){return l}),n.d(e,"f",function(){return c}),n.d(e,"c",function(){return d});var a=n("t3Un");function r(t){return Object(a.a)({url:"/api/crontask",method:"get",params:t})}function i(t){return a.a.post("/api/crontask",t)}function s(t){return a.a.get("/api/crontask/"+t)}function u(t,e){return a.a.patch("/api/crontask/"+t,e)}function o(t){return a.a.delete("/api/crontask/"+t)}function l(t){return Object(a.a)({url:"/api/bus_line_search",method:"get",params:t})}function c(t){return a.a.post("/api/postCrontask",t)}function d(t){return Object(a.a)({url:"/api/bus_line_list",methods:"get",params:t})}},xDC0:function(t,e,n){"use strict";n.r(e);var a=n("P2sY"),r=n.n(a),i=n("sZnh"),s={filters:{statusFilter:function(t){return{1:"success",0:"gray","-1":"danger"}[t]}},data:function(){return{list:null,listLoading:!0,perpage:10,total:100,currentpage:1,listQuery:{page:1}}},created:function(){this.listQuery=this.$route.query,this.currentpage=parseInt(this.listQuery.page),this.perpage=parseInt(this.perpage),this.fetchData()},methods:{handleSizeChange:function(t){this.perpage=t,this.$router.push({path:"",query:{page:this.listQuery.page,perPage:t}}),this.fetchData()},handleCurrentChange:function(t){this.listQuery={page:t},this.$router.push({path:"",query:{page:t,perPage:this.perpage}}),this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0;var e=r()({page:this.listQuery.page},{perPage:this.perpage});Object(i.e)(e).then(function(e){t.list=e.data.data,t.total=e.data.total?e.data.total:0,t.listLoading=!1})},handleEdit:function(t,e){this.$router.push({path:"/task/edit/"+e.id})},handleDelete:function(t,e){var n=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)(e.id).then(function(t){n.loading=!1,200===t.code?(n.$message({message:"操作成功",type:"success"}),n.fetchData()):n.$message.error(t.reason)}),n.$message({type:"success",message:"删除成功!"})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})}}},u=(n("29bv"),n("KHd+")),o=Object(u.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-button",{attrs:{type:"primary",size:"medium"}},[n("router-link",{attrs:{to:"/task/search"}},[t._v("根据车次查询")])],1),t._v(" "),n("el-button",{attrs:{type:"primary",size:"medium"}},[n("router-link",{attrs:{to:"/task/newBus"}},[t._v("新增任务")])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"车次信息",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.LineInfo)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"cid",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.cid))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"LineGuid",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.LineGuid)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"开启时间",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.start_at)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"结束时间",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.end_at)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"启动状态",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.is_task?n("el-tag",{attrs:{type:"success"}},[t._v("启动")]):n("el-tag",{attrs:{type:"warning"}},[t._v("关闭")])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{total:t.total,"current-page":t.currentpage,"page-sizes":[10,20,30,50,100],"page-size":t.perpage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"1c60d856",null);o.options.__file="index.vue";e.default=o.exports},xN0U:function(t,e,n){}}]);