(this.webpackJsonpteststl=this.webpackJsonpteststl||[]).push([[0],{37:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(27),s=c.n(a),i=(c(36),c(37),c(31)),l=c(11),j=c(20),o=c(12),d=c(1);function b(){return Object(d.jsx)("header",{className:"mb-3",children:Object(d.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-secondary",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)(o.c,{className:"navbar-brand",to:"/",children:"People"})})})})}function m(){return Object(d.jsx)("footer",{className:"footer mt-auto py-3 bg-secondary",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("span",{className:"text-light",children:"\u0421\u0438\u0432\u0430\u043a \u041c\u0430\u043a\u0441\u0438\u043c 2021"}),Object(d.jsx)("a",{className:"text-light float-right",href:"mailto:jjestertt@gmail.com",children:"jjestertt@gmail.com"})]})})}var u=c(30),h=c(2);var O=Object(h.g)((function(e){var t=e.location.state.user,c=t.id,n=t.name,r=t.phone,a=t.email,s=t.country,i=t.age,j=Object(u.a)({initialValues:{name:n,phone:r,email:a,country:s,age:i},onSubmit:function(t){e.location.pathname="/",e.changeUserHandler(c,t)}});return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Edit Person"}),Object(d.jsxs)("form",{onSubmit:j.handleSubmit,className:"mb-3",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",Object(l.a)({type:"text",className:"form-control",id:"name","aria-describedby":"name",required:!0},j.getFieldProps("name")))]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"Phone",children:"Phone"}),Object(d.jsx)("input",Object(l.a)({type:"text",className:"form-control",id:"phone","aria-describedby":"phone",required:!0},j.getFieldProps("phone")))]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",Object(l.a)({type:"email",className:"form-control",id:"email","aria-describedby":"email",required:!0},j.getFieldProps("email")))]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"country",children:"Country"}),Object(d.jsxs)("select",Object(l.a)(Object(l.a)({className:"custom-select",id:"country",required:!0},j.getFieldProps("country")),{},{children:[Object(d.jsx)("option",{value:"Russia",children:"Russia"}),Object(d.jsx)("option",{value:"USA",children:"USA"}),Object(d.jsx)("option",{value:"Australia",children:"Australia"})]}))]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"age",children:"Age"}),Object(d.jsx)("input",Object(l.a)({type:"text",className:"form-control",id:"age","aria-describedby":"age"},j.getFieldProps("age")))]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Change"})]})]})})),x=[{id:1,name:"\u0421\u0435\u0440\u0433\u0435\u0439 \u041f\u0435\u0442\u0440\u043e\u0432",phone:"+79520591333",email:"sergeooo@gmail.com",country:"Russia",age:"99"},{id:2,name:"Jonny Fake",phone:"+612556893",email:"jonnyfake@gmail.com",country:"Australia",age:"38"},{id:3,name:"Valery Jeferson",phone:"+16357454235432",email:"valeryvalery@gmail.com",country:"Australia",age:"17"},{id:4,name:"Kevin Jey",phone:"+153463534",email:"kevinjey@usa.usa",country:"USA",age:"22"},{id:5,name:"\u0413\u0435\u043e\u0440\u0433\u0438\u0439 \u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432",phone:"+72224443355",email:"georgy@yandex.ru",country:"Russia",age:"15"}];function p(e){var t=Object(n.useState)("id"),c=Object(j.a)(t,2),r=c[0],a=c[1],s=e.users.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.id}),Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.email}),Object(d.jsx)("td",{children:t.country}),Object(d.jsx)("td",{children:t.age}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{className:"btn btn-sm btn-danger mr-1",onClick:function(){e.deleteUserHandler(t.id)},children:"Del"}),Object(d.jsx)(o.b,{className:"btn btn-sm btn-primary mr-1",to:{pathname:"/edit",state:{user:t}},children:"Edit"})]})]},t.id)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"User Data"}),Object(d.jsx)("form",{className:"mb-3 text-right",onSubmit:function(e){return e.preventDefault()},children:Object(d.jsx)("div",{className:"form-row d-flex justify-content-end",children:Object(d.jsxs)("div",{className:"col-2",children:[Object(d.jsx)("label",{htmlFor:"country",children:"Sort by"}),Object(d.jsxs)("select",{className:"custom-select",id:"country",required:!0,value:r,onChange:function(t){var c;c=t.target.value,a(c),e.sortBy(c)},children:[Object(d.jsx)("option",{value:"id",children:"Id"}),Object(d.jsx)("option",{value:"name",children:"Name"}),Object(d.jsx)("option",{value:"age",children:"Age"})]})]})})}),Object(d.jsxs)("table",{className:"table table-striped table-sm mb-3",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"id"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Country"}),Object(d.jsx)("th",{children:"Age"}),Object(d.jsx)("th",{children:"Buttons"})]})}),Object(d.jsx)("tbody",{children:s})]})]})}function g(){var e=Object(n.useState)(x),t=Object(j.a)(e,2),c=t[0],r=t[1],a=function(e){var t=c.filter((function(t){return t.id!==e}));r(t)},s=function(e,t){var n=c.map((function(c){return c.id===e?Object(l.a)({id:e},t):c}));r(n)},o=function(e){var t=Object(i.a)(c);t.sort((function(t,c){return t[e]>c[e]?1:t[e]<c[e]?-1:0})),r(t)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)("main",{role:"main",className:"container flex-shrink-0",children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(p,{users:c,deleteUserHandler:a,sortBy:o})}}),Object(d.jsx)(h.b,{path:"/edit",render:function(){return Object(d.jsx)(O,{changeUserHandler:s})}}),Object(d.jsx)(h.b,{render:function(){h.a}})]})}),Object(d.jsx)(m,{})]})}var f=function(){return Object(d.jsx)(o.a,{children:Object(d.jsx)(g,{})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.76853f90.chunk.js.map