(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),o=n(1),l=n.n(o),i=n(2),u=n(3),d=n(4),p=n(6),m=n(5),f=(n(15),n(16),n(17),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={filterTodos:[],select:"all",search:""},e.searchSelect=function(t,n){var a=e.props.todos.filter((function(e){return null!==e.title&&""!==e.title}));return"all"===t?a.filter((function(e){return e.title.includes(n)})):a.filter((function(e){return e.completed===("active"!==t)&&e.title.includes(n)}))},e.selectFind=function(t){var n=e.props.todos;if("completed"===t){var a=n.filter((function(e){return!0===e.completed}));e.setState({filterTodos:a})}else if("active"===t){var r=n.filter((function(e){return!1===e.completed}));e.setState({filterTodos:r})}else e.setState({filterTodos:n})},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.todos!==this.props.todos&&this.setState({filterTodos:this.props.todos});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=t.userId,a=t.findUserId,s=this.state,c=s.filterTodos,o=s.select,l=s.search;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("input",{value:l,placeholder:"search Title",onChange:function(t){e.setState({search:t.target.value,filterTodos:e.searchSelect(o,t.target.value)})}}),r.a.createElement("select",{value:o,onChange:function(t){e.setState({select:t.target.value}),e.selectFind(t.target.value)}},r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"active"},"active"),r.a.createElement("option",{value:"completed"},"completed")),r.a.createElement("h2",null,"Todos:"),c.map((function(e){return r.a.createElement("div",{className:"TodoList__list-container",key:e.id},r.a.createElement("ul",{className:"TodoList__list"},r.a.createElement("li",{className:"TodoList__item\n                  ".concat(e.completed?"TodoList__item--checked":"TodoList__item--unchecked","\n                ")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!!e.completed}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:"TodoList__user-button\n                    ".concat(e.userId===n&&"TodoList__user-button--selected","\n                    button"),type:"button",onClick:function(){return a(e.userId)}},"User\xa0",e.userId))))})))}}]),n}(r.a.Component)),h=(n(18),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.localeUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.localeUser()}},{key:"localeUser",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=this.props.userId,fetch("https://mate-api.herokuapp.com/users/".concat(n)).then((function(e){return e.json()}))).then((function(e){t.setState({user:e.data})}));case 1:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement(r.a.Fragment,null,null!==this.state.user?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",t.id)),r.a.createElement("h3",{className:"CurrentUser__name"},t.name),r.a.createElement("p",{className:"CurrentUser__email"},t.email),r.a.createElement("p",{className:"CurrentUser__phone"},t.phone),0!==this.props.userId&&r.a.createElement("button",{className:"TodoList__user-button button",type:"button",onClick:function(){return e.props.clearUser()}},"Clear")):"User not a found")}}]),n}(r.a.Component)),v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.findUserId=function(t){e.state.selectedUserId!==t&&e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://mate-api.herokuapp.com/todos").then((function(e){return e.json()})).then((function(e){t.setState({todos:e.data})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(f,{todos:t,userId:n,findUserId:this.findUserId})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(h,{userId:n,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1f81a60a.chunk.js.map