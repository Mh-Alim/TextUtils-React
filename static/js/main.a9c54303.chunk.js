(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(8),n=a.n(o),l=(a(13),a(3)),i=(a(14),a(0));function r(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable Dark Mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsxs)("div",{className:"container my-5",style:a,children:[Object(i.jsx)("h1",{className:"my=3d",children:"About us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a,children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a,children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container my-2",children:Object(i.jsx)("button",{type:"button",onClick:function(){"black"===a.color?(s({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light Mode")):(s({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},class:"btn btn-primary",children:r})})]})}var d=a(5);function b(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-4"),onClick:e.toggleMode,children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){console.log("clicked on Onchange "),o(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},id:"myBox",rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Clicked on upper case button");var e=s.toUpperCase();o(e)},children:"Convert to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("Clicked on lower case button");var e=s.toLowerCase();o(e)},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("cleard");o("")},children:"Clear"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=s.split(/[ ]+/);o(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h1",{children:"Your Text Summary"}),Object(i.jsxs)("p",{children:[s.split(" ").length," words and ",s.length," characters here"]}),Object(i.jsxs)("p",{children:[.008*s.split(" ").length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsxs)("p",{children:[" ",s.length>0?s:"Enter something in box so that you can preview it here!!!"," "]})]})]})}b.defaultProps={title:"set Title",aboutText:"set About"};var j=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[e.alert,Object(i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),u=(n[0],n[1]);return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"TextUtils",mode:a,toggleMode:function(){"dark"===a?(s("light"),document.body.style.backgroundColor="white",u({msg:"Dark mode has enabled",type:"success"}),document.title="textUtils-Light Mode"):(s("dark"),document.body.style.backgroundColor="#042743",document.title="textUtils - Dark Mode")}}),Object(i.jsx)(j,{alert:"This is alert"}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",element:Object(i.jsx)(r,{})}),Object(i.jsx)(m.a,{exact:!0,path:"/",element:Object(i.jsx)(h,{heading:"Enter the text to analyze",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.a9c54303.chunk.js.map