(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logotodo.af874f15.png"},30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),i=(a(35),a(6)),s=a(7),u=a(10),l=a(8),m=a(9),d=a(12),p=function(){return c.a.createElement("nav",{className:"nav-warpper red darken+5"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"./",className:"brand-logo "},"todo list"),c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(d.c,{to:"./"},"Todolist         ")," "),c.a.createElement("li",null,c.a.createElement(d.c,{to:"./about.js"},"About    ")," "),c.a.createElement("li",null,c.a.createElement(d.c,{to:"./contact.js"},"Contact")," "),c.a.createElement("li",null,c.a.createElement(d.c,{to:"./updates.js"},"Updates")," "))))},h=a(13),E=a(29),b=function(e){var t=e.todos,a=e.deleteTodo,n=t.length?t.map(function(e){return c.a.createElement("div",{className:"collection-item",key:e.id},c.a.createElement("span",{onClick:function(){a(e.id)}},e.content))}):c.a.createElement("p",{className:"center"},"you have no todo's left");return c.a.createElement("div",{className:"todos collection"},n)},f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={content:""},a.handleChange=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.AddTodo(a.state),a.setState({content:""})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null),c.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={todos:[{id:1,content:"finish the course"},{id:2,content:"play a game"}]},a.deleteTodo=function(e){var t=a.state.todos.filter(function(t){return t.id!==e});a.setState({todos:t}),console.log(e)},a.AddTodo=function(e){e.id=Math.random();var t=[].concat(Object(E.a)(a.state.todos),[e]);a.setState({todos:t}),console.log(a.state)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"todo-app container"},c.a.createElement("h1",{className:"center blue-text"},"Todo's"),c.a.createElement(b,{todos:this.state.todos,deleteTodo:this.deleteTodo}),c.a.createElement(f,{AddTodo:this.AddTodo}))}}]),t}(n.Component),j=function(e){return function(t){return c.a.createElement("div",{className:"green-text"},c.a.createElement(e,t))}},g=j(function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"about"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ratione rerum, vel in sunt itaque eius reprehenderit minima eveniet officiis non maxime labore veritatis a corrupti dicta iusto, sit temporibus."))}),O=j(function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"contact"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ratione rerum, vel in sunt itaque eius reprehenderit minima eveniet officiis non maxime labore veritatis a corrupti dicta iusto, sit temporibus."))}),N=a(14),y=a(28),q=a.n(y),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.posts,t=e.length?e.map(function(e){return c.a.createElement("div",{className:"post card ",key:e.id},c.a.createElement("img",{src:q.a,alt:"her a photoa"}),c.a.createElement("div",{className:"card-content"},c.a.createElement(d.b,{to:"/"+e.id},c.a.createElement("span",{className:"card-title orange-text"},e.title)),c.a.createElement("p",{className:"red-text"},e.body)))}):c.a.createElement("div",{className:"center"},"No posts yet");return c.a.createElement("div",{className:"container home"},c.a.createElement("h4",{className:"center"},"Updates"),t)}}]),t}(n.Component),x=Object(N.b)(function(e){return{posts:e.posts}})(w),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props.post?c.a.createElement("div",{className:"post"},c.a.createElement("h4",{className:"center"},this.props.post.title),c.a.createElement("p",null,this.props.post.body)):c.a.createElement("div",{className:"center"},"Loading post...");return c.a.createElement("div",{className:"container"},e)}}]),t}(n.Component),C=j(Object(N.b)(function(e,t){var a=t.match.params.post_id;return{post:e.posts.find(function(e){return e.id=a})}})(k)),T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"todo-app container"},c.a.createElement(p,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/",exact:!0,component:v}),c.a.createElement(h.a,{path:"/about.js",exact:!0,component:g}),c.a.createElement(h.a,{path:"/contact.js",component:O}),c.a.createElement(h.a,{path:"/updates.js",component:x}),c.a.createElement(h.a,{path:"/:post_id",component:C}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(20),S={posts:[{id:1,title:"accusamus beatae ad facilis cum similique qui sunt",body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"},{id:2,title:"accusamus beatae ad facilis cum similique qui sunt",body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"},{id:3,title:"accusamus beatae ad facilis cum similique qui sunt",body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"},{id:4,title:"accusamus beatae ad facilis cum similique qui sunt",body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;arguments.length>1&&arguments[1];return e},B=Object(A.b)(L);o.a.render(c.a.createElement(N.a,{store:B},c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.61c5fcb3.chunk.js.map