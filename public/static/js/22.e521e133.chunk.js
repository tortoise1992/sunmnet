webpackJsonp([22],{1144:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(0),i=o.n(a),c=o(382),s=o(1062),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f=function(e){function t(){var e,o,l,a;n(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return o=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),l.state={visibleModel:!1,noFooterModel:!1},l.showModel=function(){l.setState({visibleModel:!0})},l.hideModel=function(){l.setState({visibleModel:!1})},l.showNoFooterModel=function(){l.setState({noFooterModel:!0})},l.hideNoFooterModel=function(){l.setState({noFooterModel:!1})},a=o,r(l,a)}return l(t,e),u(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(c.c,{className:"breadcrumb"},i.a.createElement(c.c.Item,null,"\u5176\u4ed6\u7ec4\u4ef6"),i.a.createElement(c.c.Item,null,"\u5f39\u6846")),i.a.createElement("div",{className:"common-content"},i.a.createElement(c.e,{title:"\u5f39\u51fa\u6846"},i.a.createElement(c.d,{onClick:this.showModel},"\u70b9\u51fb\u663e\u793a\u5f39\u6846"),i.a.createElement(c.d,{onClick:this.showNoFooterModel,style:{marginLeft:20}},"\u65e0\u5e95\u90e8\u5185\u5bb9"),i.a.createElement("div",{style:{marginTop:20}},i.a.createElement(c.a,{message:"\u5176\u4ed6api\u4e0eantd model\u4fdd\u6301\u4e00\u81f4",type:"info",showIcon:!0}))),i.a.createElement(s.a,{title:"hello",visible:this.state.visibleModel,onCancel:this.hideModel},"hello World"),i.a.createElement(s.a,{title:"hello",visible:this.state.noFooterModel,onCancel:this.hideNoFooterModel,noFooter:!0},"\u8bbe\u7f6enoFooter=true\u65f6\u4e0d\u663e\u793a\u5e95\u90e8\u5185\u5bb9")))}}]),t}(a.Component);t.default=f}});
//# sourceMappingURL=22.e521e133.chunk.js.map