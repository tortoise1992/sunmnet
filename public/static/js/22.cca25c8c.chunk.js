(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{269:function(e,t,n){},626:function(e,t,n){},635:function(e,t,n){"use strict";n.r(t);n(161);var a=n(159),r=(n(162),n(160)),i=n(6),o=n(7),s=n(9),l=n(8),c=n(10),u=n(0),m=n.n(u),d=(n(154),n(155)),p=(n(157),n(626),n(197),n(199),n(275),n(192)),f=n.n(p),g=n(152),h=n.n(g),v=n(5),b=n.n(v),y=n(59),E=n.n(y),x=n(62),O=n.n(x),C=n(60),j=n.n(C),M=n(61),k=n.n(M),S=n(1),N=n(151),I=n.n(N),w=n(193),U=n(43),A=n(198),L=n(201),D=n(407),P=n(402),R=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},q=function(e){var t=e.prefixCls,n=void 0===t?"ant-list":t,a=e.className,r=e.avatar,i=e.title,o=e.description,s=R(e,["prefixCls","className","avatar","title","description"]),l=I()(n+"-item-meta",a),c=u.createElement("div",{className:n+"-item-meta-content"},i&&u.createElement("h4",{className:n+"-item-meta-title"},i),o&&u.createElement("div",{className:n+"-item-meta-description"},o));return u.createElement("div",b()({},s,{className:l}),r&&u.createElement("div",{className:n+"-item-meta-avatar"},r),(i||o)&&c)};function T(e,t){return e[t]&&Math.floor(24/e[t])}var _=["",1,2,3,4,6,8,12,24],z=function(e){function t(){return E()(this,t),j()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return k()(t,e),O()(t,[{key:"render",value:function(){var e=this.context.grid,t=this.props,n=t.prefixCls,a=void 0===n?"ant-list":n,r=t.children,i=t.actions,o=t.extra,s=t.className,l=R(t,["prefixCls","children","actions","extra","className"]),c=I()(a+"-item",s),m=[],d=[];u.Children.forEach(r,function(e){e&&e.type&&e.type===q?m.push(e):d.push(e)});var p=I()(a+"-item-content",h()({},a+"-item-content-single",m.length<1)),f=d.length>0?u.createElement("div",{className:p},d):null,g=void 0;if(i&&i.length>0){g=u.createElement("ul",{className:a+"-item-action"},i.map(function(e,t){return function(e,t){return u.createElement("li",{key:a+"-item-action-"+t},e,t!==i.length-1&&u.createElement("em",{className:a+"-item-action-split"}))}(e,t)}))}var v=u.createElement("div",{className:a+"-item-extra-wrap"},u.createElement("div",{className:a+"-item-main"},m,f,g),u.createElement("div",{className:a+"-item-extra"},o));return e?u.createElement(P.a,{span:T(e,"column"),xs:T(e,"xs"),sm:T(e,"sm"),md:T(e,"md"),lg:T(e,"lg"),xl:T(e,"xl"),xxl:T(e,"xxl")},u.createElement("div",b()({},l,{className:c}),o&&v,!o&&m,!o&&f,!o&&g)):u.createElement("div",b()({},l,{className:c}),o&&v,!o&&m,!o&&f,!o&&g)}}]),t}(u.Component),F=z;z.Meta=q,z.propTypes={column:S.oneOf(_),xs:S.oneOf(_),sm:S.oneOf(_),md:S.oneOf(_),lg:S.oneOf(_),xl:S.oneOf(_),xxl:S.oneOf(_)},z.contextTypes={grid:S.any};var H=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},K=function(e){function t(){E()(this,t);var e=j()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={paginationCurrent:1},e.defaultPaginationProps={current:1,pageSize:10,onChange:function(t,n){var a=e.props.pagination;e.setState({paginationCurrent:t}),a&&a.onChange&&a.onChange(t,n)},total:0},e.keys={},e.renderItem=function(t,n){var a=e.props,r=a.dataSource,i=a.renderItem,o=a.rowKey,s=void 0;return(s="function"===typeof o?o(r[n]):"string"===typeof o?r[o]:r.key)||(s="list-item-"+n),e.keys[n]=s,i(t,n)},e.renderEmpty=function(t){var n=b()({},t,e.props.locale);return u.createElement("div",{className:e.props.prefixCls+"-empty-text"},n.emptyText)},e}return k()(t,e),O()(t,[{key:"getChildContext",value:function(){return{grid:this.props.grid}}},{key:"isSomethingAfterLastItem",value:function(){var e=this.props,t=e.loadMore,n=e.pagination,a=e.footer;return!!(t||n||a)}},{key:"render",value:function(){var e,t=this,n=this.state.paginationCurrent,a=this.props,r=a.bordered,i=a.split,o=a.className,s=a.children,l=a.itemLayout,c=a.loadMore,m=a.pagination,d=a.prefixCls,p=a.grid,g=a.dataSource,v=a.size,y=(a.rowKey,a.renderItem,a.header),E=a.footer,x=a.loading,O=(a.locale,H(a,["bordered","split","className","children","itemLayout","loadMore","pagination","prefixCls","grid","dataSource","size","rowKey","renderItem","header","footer","loading","locale"])),C=x;"boolean"===typeof C&&(C={spinning:C});var j=C&&C.spinning,M="";switch(v){case"large":M="lg";break;case"small":M="sm"}var k=I()(d,o,(e={},h()(e,d+"-vertical","vertical"===l),h()(e,d+"-"+M,M),h()(e,d+"-split",i),h()(e,d+"-bordered",r),h()(e,d+"-loading",j),h()(e,d+"-grid",p),h()(e,d+"-something-after-last-item",this.isSomethingAfterLastItem()),e)),S=b()({},this.defaultPaginationProps,{total:g.length,current:n},m||{}),N=Math.ceil(S.total/S.pageSize);S.current>N&&(S.current=N);var P=m?u.createElement("div",{className:d+"-pagination"},u.createElement(L.a,b()({},S,{onChange:this.defaultPaginationProps.onChange}))):null,R=[].concat(f()(g));m&&g.length>(S.current-1)*S.pageSize&&(R=[].concat(f()(g)).splice((S.current-1)*S.pageSize,S.pageSize));var q=void 0;if(q=j&&u.createElement("div",{style:{minHeight:53}}),R.length>0){var T=R.map(function(e,n){return t.renderItem(e,n)}),_=[];u.Children.forEach(T,function(e,n){_.push(u.cloneElement(e,{key:t.keys[n]}))}),q=p?u.createElement(D.a,{gutter:p.gutter},_):_}else s||j||(q=u.createElement(w.a,{componentName:"Table",defaultLocale:U.a.Table},this.renderEmpty));var z=S.position||"bottom";return u.createElement("div",b()({className:k},O),("top"===z||"both"===z)&&P,y&&u.createElement("div",{className:d+"-header"},y),u.createElement(A.a,C,q,s),E&&u.createElement("div",{className:d+"-footer"},E),c||("bottom"===z||"both"===z)&&P)}}]),t}(u.Component),W=K;K.Item=F,K.childContextTypes={grid:S.any},K.defaultProps={dataSource:[],prefixCls:"ant-list",bordered:!1,split:!0,loading:!1,pagination:!1};n(158);var B=n(156),G=(n(163),n(164)),J=(n(244),n(270)),V=(n(165),n(169)),Y=(n(187),n(191)),Q=n(168),X=Y.a.Item,Z={labelCol:{span:4},wrapperCol:{span:19,style:{paddingLeft:"10px"}}},$=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).sureAction=function(){n.props.form.validateFields(function(e,t){e||n.props.onOk(t)})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.editData;return m.a.createElement(Q.a,{title:this.props.title,visible:!0,onOk:this.sureAction,onCancel:this.props.onCancel,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},m.a.createElement(X,Object.assign({},Z,{label:"\u89d2\u8272\u540d\u79f0"}),e("roleName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0(\u4e0d\u8d85\u8fc78\u5b57)"}],initialValue:t&&t.roleName})(m.a.createElement(V.a,{placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0(\u4e0d\u8d85\u8fc78\u5b57)"}))),m.a.createElement(X,Object.assign({},Z,{label:"\u89d2\u8272\u63cf\u8ff0"}),e("remark",{initialValue:t&&t.remark})(m.a.createElement(V.a.TextArea,{style:{resize:"none",height:60},placeholder:"\u8bf7\u8f93\u5165\u89d2\u8272\u63cf\u8ff0(\u4e0d\u8d85\u8fc720\u5b57)"}))))}}]),t}(u.Component),ee=Y.a.create()($),te=(n(269),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={roleLists:[],activeIndex:0,activeRole:void 0,visible:!1,isEditor:!1,editData:void 0},n.getDataLists=function(e){var t={success:!0,msg:"\u6210\u529f",obj:[{id:1,roleName:"\u9886\u5bfc"},{id:10,roleName:"\u5b66\u751f"},{id:20,roleName:"\u8f85\u5bfc\u5458"},{id:21,roleName:"\u4ee3\u8bfe\u6559\u5e08"},{id:29,roleName:"\u8d85\u7ea7\u7ba1\u7406\u5458"}],errorCode:null};if(t.success){var a=e||0;n.setState({activeRole:t.obj[a],roleLists:t.obj||[]},function(){n.props.changeRole(t.obj[a])})}},n.addAction=function(){n.setState({visible:!0,isEditor:!1,editData:void 0})},n.editorAction=function(e){n.setState({visible:!0,isEditor:!0,editData:e})},n.deleteAction=function(e){J.a.confirm({title:"\u786e\u5b9a\u5220\u9664".concat(e.roleName,"?"),onOk:function(){var e="\u670d\u52a1\u5f02\u5e38\uff01";!1?(G.a.success("\u5220\u9664\u6210\u529f\uff01"),n.getDataLists()):G.a.error(e)},onCancel:function(){},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"})},n.saveAction=function(e){var t=n.state.isEditor,a=e.roleName,r=e.remark;t&&({roleName:a,remark:r,sourceCode:"pc"}.id=n.state.editData.id);var i={success:!0};i.success?(G.a.success("\u4fdd\u5b58\u6210\u529f\uff01"),n.setState({visible:!1,isEditor:!1,editData:void 0}),n.getDataLists(n.state.activeIndex)):G.a.error(i.obj)},n.rowClick=function(e,t){n.setState({activeIndex:t},function(){n.props.changeRole(e)})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getDataLists()}},{key:"render",value:function(){var e=this;return m.a.createElement(d.a,{className:"authority-roleLists",style:{height:"100%",overflowY:"auto"},title:m.a.createElement("span",{style:{color:"#1890FF",lineHeight:"34px"}},"\u89d2\u8272"),extra:m.a.createElement(B.a,{icon:"plus",type:"primary",onClick:this.addAction},"\u6dfb\u52a0\u89d2\u8272")},m.a.createElement(W,{dataSource:this.state.roleLists,renderItem:function(t,n){return m.a.createElement(W.Item,{className:n===e.state.activeIndex?"active":"",onClick:function(){return e.rowClick(t,n)},actions:[m.a.createElement("a",{style:{color:"#71CF09"},href:"javascript:;",onClick:function(){return e.editorAction(t,n)}},"\u7f16\u8f91"),m.a.createElement("a",{style:{color:"#E45A5A"},href:"javascript:;",onClick:function(a){a.stopPropagation(),e.deleteAction(t,n)}},"\u5220\u9664")]},t.roleName)}}),this.state.visible?m.a.createElement(ee,{title:this.state.isEditor?"\u4fee\u6539\u89d2\u8272":"\u6dfb\u52a0\u89d2\u8272",visible:this.state.visible,onOk:this.saveAction,editData:this.state.editData,onCancel:function(){return e.setState({visible:!1,isEditor:!1,editData:void 0})}}):null)}}]),t}(u.Component)),ne=(n(223),n(215)),ae=ne.a.Group,re={borderTop:"1px solid #ccc",borderBottom:"1px solid #ccc",overflow:"auto",lineHeight:"52px",paddingLeft:"46px",marginBottom:"20px"},ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={menuLists:[],roleMenuData:[]},n.getRoleMenuLists=function(e){var t={success:!0,msg:"\u6210\u529f",obj:{roleId:1,menu:[150,151,152,2,4,153]},errorCode:null};t.success&&n.setState({roleMenuData:t.obj.menu||[]})},n.changeCheckMenu=function(e){var t,a=Object.assign([],e),r=Object.assign([],n.state.roleMenuData),i=a.length>r.length;i?t=a[a.length-1]:r.forEach(function(e,n){t||e===a[n]||(t=e)});for(var o=n.state.menuLists.filter(function(e){return t===e.id})[0],s=n.state.menuLists,l=function(e){if(o&&s[e].id===t)if(i)for(var n=0;n<s[e].subMenus.length;n++)a.push(s[e].subMenus[n].id);else for(var r=function(t){a=a.filter(function(n){return n!==s[e].subMenus[t].id})},l=0;l<s[e].subMenus.length;l++)r(l);else if(s[e].subMenus.length>0)if(i)for(var c=0;c<s[e].subMenus.length;c++)s[e].subMenus[c].id!==t||a.some(function(t){return t===s[e].id})||a.push(s[e].id);else for(var u=0;u<s[e].subMenus.length;u++)s[e].subMenus[u].id===t&&function(){for(var t=s[e].subMenus.map(function(e){return e.id}),n=!1,r=function(e){a.some(function(n){return n===t[e]})&&(n=!0)},i=0;i<t.length;i++)r(i);n||(a=a.filter(function(t){return t!==s[e].id}))}()},c=0;c<s.length;c++)l(c);n.setState({roleMenuData:a})},n.saveAction=function(){var e={success:!0};e.success?G.a.success("\u6743\u9650\u914d\u7f6e\u6210\u529f\uff01"):G.a.error(e.obj)},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e={success:!0,msg:"\u6210\u529f",obj:[{id:150,parentId:-1,name:"\u7efc\u5408\u753b\u50cf",url:"",iconUrl:"n_ico2.png",iconSelectedUrl:"n_ico2.png",seq:11,tags:[],subMenus:[{id:151,parentId:150,name:"\u7fa4\u4f53\u753b\u50cf",url:"/mainframe/GroupPortrait",iconUrl:"",iconSelectedUrl:"",seq:12,tags:[],subMenus:[]},{id:152,parentId:150,name:"\u4e2a\u4eba\u753b\u50cf",url:"/mainframe/personalportrait",iconUrl:"",iconSelectedUrl:"",seq:13,tags:[],subMenus:[]}]},{id:2,parentId:-1,name:"\u8f68\u8ff9\u5206\u6790",url:"",iconUrl:"n_ico3.png",iconSelectedUrl:"n_ico3.png",seq:14,tags:[],subMenus:[{id:4,parentId:2,name:"\u4e2a\u4eba\u8f68\u8ff9",url:"/mainframe/personalpath",iconUrl:"",iconSelectedUrl:"",seq:58,tags:[],subMenus:[]},{id:153,parentId:2,name:"\u7fa4\u4f53\u8f68\u8ff9",url:"/mainframe/grouppath",iconUrl:"",iconSelectedUrl:"",seq:59,tags:[],subMenus:[]}]},{id:178,parentId:-1,name:"\u7efc\u5408\u9884\u8b66",url:"/mainframe/comprehensivewarning",iconUrl:"",iconSelectedUrl:"",seq:256,tags:[],subMenus:[]},{id:179,parentId:-1,name:"\u7cfb\u7edf\u8bbe\u7f6e",url:"/mainframe/systemsetup",iconUrl:"",iconSelectedUrl:"",seq:257,tags:[],subMenus:[{id:180,parentId:179,name:"\u9884\u8b66\u8bbe\u7f6e",url:"/mainframe/systemsetup/earlywarningsetting",iconUrl:"",iconSelectedUrl:"",seq:387,tags:[],subMenus:[]},{id:181,parentId:179,name:"\u884c\u4e3a\u8f68\u8ff9\u8bbe\u7f6e",url:"/mainframe/systemsetup/behaviortrajectory",iconUrl:"",iconSelectedUrl:"",seq:388,tags:[],subMenus:[]}]},{id:10,parentId:-1,name:"\u6743\u9650\u7ba1\u7406",url:"",iconUrl:"xitongguanli.png",iconSelectedUrl:"xitongguanli2.png",seq:259,tags:[],subMenus:[{id:25,parentId:10,name:"\u8d26\u6237\u7ba1\u7406",url:"/mainframe/accessmanage/account",iconUrl:"",iconSelectedUrl:"",seq:264,tags:[],subMenus:[]},{id:24,parentId:10,name:"\u83dc\u5355\u7ba1\u7406",url:"/mainframe/accessmanage/menu",iconUrl:"",iconSelectedUrl:"",seq:265,tags:[],subMenus:[]},{id:26,parentId:10,name:"\u6743\u9650\u914d\u7f6e",url:"/mainframe/accessmanage/authority",iconUrl:"",iconSelectedUrl:"",seq:266,tags:[],subMenus:[]}]}],errorCode:null};e.success&&this.setState({menuLists:e.obj||[]})}},{key:"componentWillReceiveProps",value:function(e){e.activeRole.id!==this.props.activeRole.id&&this.getRoleMenuLists({roleId:e.activeRole.id,sourceCode:"pc"})}},{key:"render",value:function(){return m.a.createElement(d.a,{title:m.a.createElement("span",{style:{color:"#1890FF"}},this.props.activeRole.roleName,"\u89d2\u8272\u6743\u9650\u914d\u7f6e")},m.a.createElement("div",null,m.a.createElement(ae,{value:this.state.roleMenuData,onChange:this.changeCheckMenu},this.state.menuLists.map(function(e){return m.a.createElement("div",{key:e.id},m.a.createElement("div",{style:{height:"52px",lineHeight:"52px"}},m.a.createElement(ne.a,{value:e.id},e.name)),e.subMenus.length>0&&m.a.createElement("div",{style:re},e.subMenus.map(function(e){return m.a.createElement(ne.a,{value:e.id,key:e.id},e.name)})))}))),m.a.createElement("div",{style:{textAlign:"right"}},m.a.createElement(B.a,{type:"primary",onClick:this.saveAction},"\u4fdd\u5b58")))}}]),t}(u.Component),oe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={activeRole:{}},n.changeRole=function(e){n.setState({activeRole:e})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{style:{padding:"20px"}},m.a.createElement(a.a,{type:"flex",gutter:20},m.a.createElement(r.a,{sm:8,xl:7,xxl:6,style:{minHeight:"100%"}},m.a.createElement(te,{changeRole:this.changeRole})),m.a.createElement(r.a,{sm:16,xl:17,xxl:18,style:{minHeight:"100%"}},m.a.createElement(ie,{activeRole:this.state.activeRole}))))}}]),t}(u.Component);t.default=oe}}]);
//# sourceMappingURL=22.cca25c8c.chunk.js.map