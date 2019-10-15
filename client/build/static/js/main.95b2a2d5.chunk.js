(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(73)},43:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(31),c=n.n(r),i=(n(43),n(10)),l=n(11),s=n(13),u=n(12),m=n(14),h=n(35),f=n(15);var d=function(e){return o.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":""," font")},e.children)};var p=function(){return o.a.createElement("div",{className:"font"},o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",id:"homeLink",href:"/"},"Home"),o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link navbar-brand",id:"savedLink",href:"/api/books"},"Saved Books")))))},v=n(75),g=(n(44),function(e){return o.a.createElement("div",null,o.a.createElement(v.a,null,o.a.createElement("h1",{className:"display-3 white"},"Book Safe"),o.a.createElement("p",{className:"lead white"},"Search for and save books you want!"),o.a.createElement("hr",{className:"my-2 white"})))}),k=n(34);var b=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},"Search:"),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a Book",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))};n(49),n(50);var E=function(e){e.type,e.className;var t=e.children,n=e.onClick;return o.a.createElement("button",{onClick:n,className:"btn btn-primary mt-3"},t)},w=n(8),y=n.n(w),N=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).postToDB=function(e){var t={title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link};y.a.post("/api/books",t).then(function(){return console.log("".concat(e.title," added to database"))}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(E,{type:"primary",onClick:function(){e.postToDB(e.props)}},"Save Book"))}}]),t}(a.Component);var j=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.image}),o.a.createElement("a",{href:e.link},"get info"),o.a.createElement("h4",{className:"profile-name"},e.authors),o.a.createElement("h2",{className:"profile-position"},e.title),o.a.createElement("p",{className:"profile-info"},e.description),o.a.createElement(N,{title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}))};n(67).config();var O="".concat("AIzaSyD1-X3EhThX4KtzP3EnM228pef_VDOr-gU"),B={search:function(e){return y.a.get("".concat("https://www.googleapis.com/books/v1/volumes?q=").concat(e,"&key=").concat(O))}},C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",results:[]},n.searchAPI=function(e){console.log(e),B.search(e).then(function(e){n.setState({results:e.data.items}),console.log(e.data.items)}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(k.a)({},t,a))},n.handleFormSubmit=function(e){e.preventDefault(),n.searchAPI(n.state.search)},n.getBooks=function(){y.a.get("/api/books").then(console.log("getBooks triggered")).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.searchAPI("breakfast of champions")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,getBooks:this.getBooks}),this.state.results.map(function(e){return o.a.createElement(j,{key:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"",link:e.volumeInfo.previewLink})}))}}]),t}(a.Component);n(70);var I=function(e){return o.a.createElement(E,Object.assign({type:"danger",className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"Delete")};var S=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.image}),o.a.createElement("a",{href:e.link},"get info"),o.a.createElement("h4",{className:"profile-name"},e.authors),o.a.createElement("h2",{className:"profile-position"},e.title),o.a.createElement("p",{className:"profile-info"},e.description),o.a.createElement(I,{onClick:e.onClick}))},A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={savedBooks:[],initialized:!0},n.getBooks=function(){y.a.get("/api/books").then(function(e){n.setState({savedBooks:e.data}),console.log(e.data)}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){console.log(e),y.a.delete("/api/books/".concat(e)).then(function(){n.getBooks(),console.log("book ".concat(e," deleted"))}).catch(function(e){return console.log(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.savedBooks.map(function(t){return o.a.createElement(S,{key:t.id,title:t.title,authors:t.authors,description:t.description,image:t.image,link:t.link,onClick:function(){return e.deleteBook(t._id)}})}))}}]),t}(a.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null,o.a.createElement(p,null),o.a.createElement(g,null),o.a.createElement(h.a,null,o.a.createElement(f.c,null,o.a.createElement(f.a,{exact:!0,path:"/",component:C}),o.a.createElement(f.a,{exact:!0,path:"/api/books",component:A}),o.a.createElement(f.a,{path:"/api/books/:id"})))))}}]),t}(a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):L(e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.95b2a2d5.chunk.js.map