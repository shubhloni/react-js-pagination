(this["webpackJsonpreact-pagination"]=this["webpackJsonpreact-pagination"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),r=n.n(s),i=(n(12),n(6)),o=n(3),u=n.n(o),j=n(5),l=n(2),b=(n(14),n(15),n(0)),f=function(e){var t=e.searchFact;return Object(b.jsxs)("div",{className:"search-widget",children:[Object(b.jsx)("h4",{children:"Give a look at below dog facts"}),Object(b.jsx)("input",{type:"text",className:"seacrh-input",placeholder:"Search facts globally...",onChange:function(e){t(e.target.value)}})]})},d=function(e){var t=e.searchFact;return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h1",{children:"React Pagination Demo"})}),Object(b.jsx)(f,{searchFact:t})]})};n(17),n(18);var h=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("p",{children:"Pagination can also be implemented at server side. So at frontend we can directly fetch Facts based on pageCount."})})};n(19);var x=function(e){var t=e.idx,n=e.fact,a=e.changeFact,s=Object(c.useState)(!0),r=Object(l.a)(s,2),i=r[0],o=r[1],u=Object(c.useRef)(null);return Object(b.jsxs)("div",{className:"item",children:[Object(b.jsxs)("div",{className:"item-top",children:[Object(b.jsxs)("label",{className:"text-label",children:["Fact: ",t+1]}),Object(b.jsxs)("div",{className:"text-actions",children:[i?Object(b.jsx)("button",{className:"btn edit",onClick:function(){o(!i)},children:Object(b.jsx)("i",{class:"fas fa-edit"})}):Object(b.jsx)("button",{className:"btn save",onClick:function(){o(!i),a(n._id,u.current.value)},children:Object(b.jsx)("i",{class:"fas fa-save"})}),Object(b.jsx)("button",{className:"btn delete",onClick:function(){a(n._id,"",!0)},children:Object(b.jsx)("i",{class:"fas fa-trash-alt"})})]})]}),Object(b.jsx)("textarea",{id:"1",cols:"30",rows:"2",className:"text-area",ref:u,disabled:i?1:0,children:n.text})]})};var O=function(e){var t=e.facts,n=e.pageCount,c=e.changeFact;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsx)(x,{idx:1!==n?10*(n-1)+t:t,fact:e,changeFact:c},e._id)}))})},p=(n(20),function(e){var t=e.pageCount,n=e.maxPageCount,c=e.changePage;return Object(b.jsxs)("div",{className:"page-nav",children:[Object(b.jsx)("button",{className:"prev",onClick:function(){c("prev")},disabled:1===t,children:"prev"}),Object(b.jsx)("p",{children:t}),Object(b.jsx)("button",{className:"next",onClick:function(){c("next")},disabled:t===n,children:"next"})]})}),v=n.p+"static/media/spinner.0c238a17.gif";var g=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),o=r[0],f=r[1],x=Object(c.useState)(1),g=Object(l.a)(x,2),m=g[0],C=g[1],N=Object(c.useState)(!0),w=Object(l.a)(N,2),F=w[0],k=w[1];Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,a(t),k(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=55");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log(10*(m-1),10*m);var e=n.slice(10*(m-1),10*m);f((function(){return e}))}),[n,m]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{searchFact:function(e){if(""===e){var t=n.slice(10*(m-1),10*m);f((function(){return t}))}else{var c=e.toLowerCase(),a=n.filter((function(e){if(e.text.toLowerCase().includes(c))return e}));f(a)}}}),F&&Object(b.jsx)("img",{src:v}),Object(b.jsxs)("main",{children:[o.length>0&&Object(b.jsx)(O,{facts:o,pageCount:m,changeFact:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=[];c?(s=n.filter((function(t){if(t._id!==e)return t})),a(s)):(s=n.map((function(n){return n._id===e?Object(i.a)(Object(i.a)({},n),{},{text:t}):n})),a(s))}}),Object(b.jsx)(p,{pageCount:m,maxPageCount:Math.ceil(n.length/10),changePage:function(e){"prev"===e&&m>1?C(m-1):"next"===e&&m<n.length/10&&C(m+1)}})]}),Object(b.jsx)(h,{})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.251384fc.chunk.js.map