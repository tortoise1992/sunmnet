webpackJsonp([16],{1095:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=n(382),c=n(1062),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=s.i.Item,h=s.v.Option,p={labelCol:{span:6},wrapperCol:{span:17,style:{paddingLeft:"10px"}}},f=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.state={roleList:[]},r.sureAction=function(){r.props.form.validateFields(function(e,t){if(!e){var n=t.userName,a=t.name,o=t.sex,i=t.accountCode,l=t.roleId,c={sourceCode:"pc",userName:n,name:a,sex:o-0,accountCode:i,roleId:l-0};r.props.rowInfo&&(c.id=r.props.rowInfo.id);var u={success:!0};u.success?(s.E.success("\u4fdd\u5b58\u6210\u529f\uff01\uff01\uff01"),r.props.hideModal(),r.props.onOk()):s.E.error(u.obj)}})},i=n,o(r,i)}return r(t,e),u(t,[{key:"componentWillMount",value:function(){var e=[{roleId:1,roleName:"\u7ba1\u7406\u54584"},{roleId:10,roleName:"\u5b66\u751f"},{roleId:20,roleName:"\u6559\u5e08123"},{roleId:29,roleName:"\u8d85\u7ea7\u7ba1\u7406\u5458"}];this.setState({roleList:e})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.rowInfo,n=void 0;return t&&this.state.roleList.forEach(function(e,a){e.roleName===t.roles&&(n=e.roleId)}),l.a.createElement(c.a,{okText:"\u786e\u5b9a",title:this.props.title,visible:!0,onOk:this.sureAction,onCancel:this.props.hideModal,cancelText:"\u53d6\u6d88"},l.a.createElement(d,Object.assign({},p,{label:"\u8d26\u6237\u540d\u79f0"}),e("userName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d\u79f0"}],initialValue:t&&t.username})(l.a.createElement(s.k,{placeholder:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d\u79f0"}))),l.a.createElement(d,Object.assign({},p,{label:"\u59d3\u540d"}),e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}],initialValue:t&&t.name})(l.a.createElement(s.k,{placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"}))),l.a.createElement(d,Object.assign({},p,{label:"\u6027\u522b"}),e("sex",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6027\u522b"}],initialValue:t&&t.sex})(l.a.createElement(s.v,{placeholder:"\u8bf7\u9009\u62e9\u6027\u522b",style:{width:"100%"}},l.a.createElement(h,{value:1},"\u7537"),l.a.createElement(h,{value:2},"\u5973")))),l.a.createElement(d,Object.assign({},p,{label:"\u5b66\u53f7/\u6559\u5de5\u53f7"}),e("accountCode",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5b66\u53f7/\u6559\u5de5\u53f7"}],initialValue:t&&t.accountCode})(l.a.createElement(s.k,{placeholder:"\u8bf7\u8f93\u5165\u5b66\u53f7/\u6559\u5de5\u53f7"}))),l.a.createElement(d,Object.assign({},p,{label:"\u7528\u6237\u89d2\u8272"}),e("roleId",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u89d2\u8272"}],initialValue:n})(l.a.createElement(s.v,{placeholder:"\u8bf7\u9009\u62e9\u7528\u6237\u89d2\u8272",style:{width:"100%",marginBottom:8},onChange:this.roleIdChange},this.state.roleList.length>0?this.state.roleList.map(function(e){return l.a.createElement(h,{value:e.roleId,key:e.roleId},e.roleName)}):null))))}}]),t}(i.Component),m=s.i.create()(f);t.a=m},1259:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=n.n(i),s=n(382),c=n(1260),u=n(1261),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={sourceCode:"pc",username:"",name:"",accountCode:"",roleId:""},n.changeFilter=n.changeFilter.bind(n),n}return r(t,e),d(t,[{key:"changeFilter",value:function(e){this.setState({username:e.username,name:e.name,accountCode:e.accountCode,roleId:e.roleId})}},{key:"render",value:function(){return l.a.createElement(s.e,{style:{margin:"15px 20px"},title:"\u8d26\u6237\u7ba1\u7406"},l.a.createElement(c.a,{changeFilter:this.changeFilter}),l.a.createElement(u.a,{sourceCode:this.state.sourceCode,username:this.state.username,name:this.state.name,accountCode:this.state.accountCode,roleId:this.state.roleId}))}}]),t}(l.a.Component);t.default=h},1260:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=n(382),c=n(1095),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=s.v.Option,h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={account:"",name:"",code:"",role:"",roleList:[],addModalShow:!1},n.accountChange=n.accountChange.bind(n),n.nameChange=n.nameChange.bind(n),n.codeChange=n.codeChange.bind(n),n.roleChange=n.roleChange.bind(n),n.handleSearch=n.handleSearch.bind(n),n.showAddModal=n.showAddModal.bind(n),n.hideAddModal=n.hideAddModal.bind(n),n}return r(t,e),u(t,[{key:"accountChange",value:function(e){this.setState({account:e.target.value})}},{key:"nameChange",value:function(e){this.setState({name:e.target.value})}},{key:"codeChange",value:function(e){this.setState({code:e.target.value})}},{key:"roleChange",value:function(e){this.setState({role:e})}},{key:"handleSearch",value:function(){var e={username:this.state.account,name:this.state.name,accountCode:this.state.code,roleId:this.state.role};this.props.changeFilter(e)}},{key:"showAddModal",value:function(){this.setState({addModalShow:!0})}},{key:"hideAddModal",value:function(){this.setState({addModalShow:!1})}},{key:"componentDidMount",value:function(){var e={success:!0,msg:"\u6210\u529f",obj:[{id:1,roleName:"\u7ba1\u7406\u54584",remark:"\u7ba1\u7406\u5458",createTime:1516431152e3,updateTime:15360454e5},{id:10,roleName:"\u5b66\u751f",remark:"",createTime:1519810586e3,updateTime:1519811232e3},{id:20,roleName:"\u6559\u5e08123",remark:"\u6559\u5e081",createTime:1524736133e3,updateTime:1524736319e3},{id:29,roleName:"\u8d85\u7ea7\u7ba1\u7406\u5458",remark:"\u62e5\u6709\u6743\u9650\u7ba1\u7406\u6a21\u5757\u7684\u8bbe\u7f6e\u6743\u9650\u4e0d\u5305\u542b\u83dc\u5355",createTime:1536549032e3,updateTime:1536550539e3}]};if(e.success){var t=[];e.obj.forEach(function(e){t.push({label:e.roleName,value:e.id})}),t.unshift({label:"\u5168\u90e8",value:""}),this.setState({roleList:t})}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"\u8d26\u6237"),l.a.createElement(s.k,{value:this.state.account,onChange:this.accountChange,placeholder:"\u8bf7\u8f93\u5165\u8d26\u6237\u540d\u79f0",style:{width:130,display:"inline-block",marginLeft:10,marginRight:10}}),l.a.createElement("span",null,"\u59d3\u540d"),l.a.createElement(s.k,{value:this.state.name,onChange:this.nameChange,placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d",style:{width:130,display:"inline-block",marginLeft:10,marginRight:10}}),l.a.createElement("span",null,"\u5b66\u53f7/\u6559\u5de5\u53f7"),l.a.createElement(s.k,{value:this.state.code,onChange:this.codeChange,placeholder:"\u8bf7\u8f93\u5165\u5b66\u53f7/\u6559\u5de5\u53f7",style:{width:150,display:"inline-block",marginLeft:10,marginRight:10}}),l.a.createElement("span",{style:{marginRight:10}},"\u8d26\u6237\u89d2\u8272"),l.a.createElement(s.v,{placeholder:"\u8bf7\u9009\u62e9\u8d26\u6237\u89d2\u8272",style:{width:150},onChange:this.roleChange},this.state.roleList.length>0?this.state.roleList.map(function(e){return l.a.createElement(d,{value:e.value,key:e.value},e.label)}):null),l.a.createElement(s.d,{type:"primary",onClick:this.handleSearch,style:{margin:"0px 10px"}},"\u641c\u7d22"),l.a.createElement(s.d,{type:"primary",icon:"plus",onClick:this.showAddModal},"\u521b\u5efa\u65b0\u7528\u6237"),this.state.addModalShow?l.a.createElement(c.a,{title:"\u65b0\u589e\u7528\u6237",onOk:this.handleSearch,hideModal:this.hideAddModal}):null)}}]),t}(l.a.Component);t.a=h},1261:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),s=n(382),c=n(1095),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={columns:[{title:"\u5e8f\u53f7",dataIndex:"sortIndex",width:"6%"},{title:"\u8d26\u6237\u540d",dataIndex:"username",width:"10%",render:function(e){return l.a.createElement("span",{title:e},e)}},{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u6027\u522b",dataIndex:"sex",render:function(e){return 1===e?l.a.createElement("span",null,"\u7537"):2===e?l.a.createElement("span",null,"\u5973"):l.a.createElement("span",null,"-")}},{title:"\u5b66\u5de5/\u6559\u5de5\u53f7",dataIndex:"accountCode"},{title:"\u89d2\u8272",dataIndex:"roles"},{title:"\u64cd\u4f5c",dataIndex:"menus",width:"25%",render:function(e,t){return l.a.createElement("span",{style:{color:"#1890ff"}},l.a.createElement("span",{onClick:function(){n.showEdit(t)},style:{marginRight:10,cursor:"pointer"}},"\u7f16\u8f91"),"|",l.a.createElement("span",{onClick:function(){n.initcode(t)},style:{marginRight:10,marginLeft:10,cursor:"pointer"}},"\u521d\u59cb\u5316\u5bc6\u7801"),"|",l.a.createElement("span",{onClick:function(){n.deleteUser(t)},style:{marginLeft:10,cursor:"pointer"}},"\u5220\u9664"))}}],data:[],pagination:{current:1,pageSize:10,total:null},editShow:!1,rowInfo:""},n.handleTableChange=n.handleTableChange.bind(n),n.getData=n.getData.bind(n),n.initcode=n.initcode.bind(n),n.deleteUser=n.deleteUser.bind(n),n.showEdit=n.showEdit.bind(n),n.hideEdit=n.hideEdit.bind(n),n.reloadTable=n.reloadTable.bind(n),n}return r(t,e),u(t,[{key:"handleTableChange",value:function(e){var t=this,n=e.current,a=e.pageSize,o=e.total;this.setState(function(){return{pagination:{current:n,pageSize:a,total:o}}},function(){t.getData()})}},{key:"reloadTable",value:function(){var e={current:this.state.pagination.current,pageSize:this.state.pagination.pageSize,total:this.state.pagination.total};this.handleTableChange(e)}},{key:"getData",value:function(){var e={success:!0,msg:"\u6210\u529f",obj:{page:1,pageSize:10,totalPage:3,total:23,rows:[{password:"0c8a80688b671e290381acb56b1bd4e9",username:"admin",authorities:[],accountNonExpired:!0,accountNonLocked:!0,credentialsNonExpired:!0,enabled:!0,id:1,userId:null,accountCode:"11111111",name:"Administrator",sex:1,roles:"\u8d85\u7ea7\u7ba1\u7406\u5458",menus:null},{password:"0c8a80688b671e290381acb56b1bd4e9",username:"liujie",authorities:[],accountNonExpired:!0,accountNonLocked:!0,credentialsNonExpired:!0,enabled:!0,id:30,userId:null,accountCode:"111",name:"\u5218\u6770",sex:2,roles:"\u7ba1\u7406\u54584",menus:null}]},errorCode:null};if(e.success&&e.obj&&e.obj.rows.length>0){var t=e.obj.rows;t.forEach(function(e,t){e.key=e.id,e.sortIndex=t-0+1}),this.setState({data:t,pagination:{current:e.obj.page,pageSize:e.obj.pageSize,total:e.obj.total}})}else this.setState({data:[],pagination:{current:1,pageSize:10,total:null}})}},{key:"showEdit",value:function(e){this.setState({editShow:!0,rowInfo:e})}},{key:"hideEdit",value:function(){this.setState({editShow:!1})}},{key:"initcode",value:function(e){s.E.success("\u521d\u59cb\u5316\u5bc6\u7801\u6210\u529f\uff0c \u521d\u59cb\u5bc6\u7801\uff1a !23qaz")}},{key:"deleteUser",value:function(e){}},{key:"componentWillReceiveProps",value:function(e){var t=this;e!==this.props&&this.setState(function(){return{data:[],pagination:{current:1,pageSize:10,total:null}}},function(){t.getData()})}},{key:"shouldComponentUpdate",value:function(e,t){return t!==this.state}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.y,{columns:this.state.columns,dataSource:this.state.data,pagination:this.state.pagination,onChange:this.handleTableChange,bordered:!0,style:{marginTop:20}}),this.state.editShow?l.a.createElement(c.a,{title:"\u7f16\u8f91\u7528\u6237",rowInfo:this.state.rowInfo,hideModal:this.hideEdit,onOk:this.reloadTable}):null)}}]),t}(l.a.Component);t.a=d}});
//# sourceMappingURL=16.e7211b56.chunk.js.map