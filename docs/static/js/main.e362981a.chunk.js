(this["webpackJsonpgspa-with-akram-1"]=this["webpackJsonpgspa-with-akram-1"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(1),a=i.n(s),n=i(5),r=i.n(n),l=i(4),o=i(2),d=function(e,t){var i=document.body,c=window.getComputedStyle(i).getPropertyValue("font-size");return parseFloat(c,10)/t/10*e},u=i.p+"static/media/image3.3a14efc3.jpg",h=i.p+"static/media/image2.37238b3f.jpg",v=[{name:"Julia Cameron",title:"Creative Director, VISA",image:u,quote:"It's all good. I was amazed at the quality of the Design. We've seen amazing results already."},{name:"Mark Jacobs",title:"Tech Lead, Google",image:i.p+"static/media/image.26e4533f.jpg",quote:"The re-branding has really helped our business. Definitely worth the investment."},{name:"Lisa Bearings",title:"Brand Coordinator, Facebook",image:h,quote:"The service was excellent. Absolutely wonderful! A complete redesign did it for us."}],j=i.p+"static/media/arrow-left.389e5dec.svg",m=i.p+"static/media/arrow-right.067f8094.svg",b=(i(11),i(12),function(e){var t=e.imageList,i=e.testimonialList,s=e.nextSlide,a=e.prevSlide,n=e.state;return Object(c.jsx)("div",{className:"testimonial-section",children:Object(c.jsxs)("div",{className:"testimonial-container",children:[Object(c.jsx)("div",{onClick:a,className:"arrows left",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:""+j,alt:"Left Arrow"})})}),Object(c.jsxs)("div",{className:"inner",children:[Object(c.jsx)("div",{className:"t-image",children:Object(c.jsxs)("ul",{ref:t,children:[Object(c.jsx)("li",{className:n.isActive1?"active":"",children:Object(c.jsx)("img",{src:""+v[0].image,alt:v[0].name+" image"})}),Object(c.jsx)("li",{className:n.isActive2?"active":"",children:Object(c.jsx)("img",{src:""+v[1].image,alt:v[1].name+" image"})}),Object(c.jsx)("li",{className:n.isActive3?"active":"",children:Object(c.jsx)("img",{src:""+v[2].image,alt:v[2].name+" image"})})]})}),Object(c.jsx)("div",{className:"t-content",children:Object(c.jsxs)("ul",{ref:i,children:[Object(c.jsx)("li",{className:n.isActive1?"active":"",children:Object(c.jsxs)("div",{className:"content-inner",children:[Object(c.jsx)("p",{className:"quote",children:v[0].quote}),Object(c.jsx)("h3",{className:"",children:v[0].name}),Object(c.jsx)("h4",{className:"title",children:v[0].title})]})}),Object(c.jsx)("li",{className:n.isActive2?"active":"",children:Object(c.jsxs)("div",{className:"content-inner",children:[Object(c.jsx)("p",{className:"quote",children:v[1].quote}),Object(c.jsx)("h3",{className:"",children:v[1].name}),Object(c.jsx)("h4",{className:"title",children:v[1].title})]})}),Object(c.jsx)("li",{className:n.isActive3?"active":"",children:Object(c.jsxs)("div",{className:"content-inner",children:[Object(c.jsx)("p",{className:"quote",children:v[2].quote}),Object(c.jsx)("h3",{className:"",children:v[2].name}),Object(c.jsx)("h4",{className:"title",children:v[2].title})]})})]})})]}),Object(c.jsx)("div",{onClick:s,className:"arrows right",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:""+m,alt:"right Arrow"})})})]})})}),x=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),i=Object(s.useState)({isActive1:!0,isActive2:!1,isActive3:!1}),a=Object(l.a)(i,2),n=a[0],r=a[1],u=Object(s.useState)(!1),h=Object(l.a)(u,2),v=h[0],j=h[1];Object(s.useEffect)((function(){setTimeout((function(){v&&j(!1)}),990)}),[v]);var m=function(t,i){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3?arguments[3]:void 0;o.a.to(e.current.children[t],{duration:i,x:-s*c,ease:"power3.inOut"}),o.a.to(e.current.children[t],{duration:i,x:-s*c,ease:"power3.inOut"})},x=function(t,i){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3?arguments[3]:void 0;o.a.to(e.current.children[t],{duration:i,x:s*c,ease:"power3.inOut"}),o.a.to(e.current.children[t],{duration:i,x:s*c,ease:"power3.inOut"})},g=function(t,i){o.a.from(e.current.children[t],{duration:i,scale:1.2,ease:"power3.inOut"})},p=function(e,i){o.a.to(t.current.children[e],{duration:i,alpha:0})},O=function(e,i){o.a.to(t.current.children[e],{duration:i,alpha:1,delay:1})},f=function(e,t){var i=t.previous,c=t.next,s=t.duration,a=void 0===s?1:s,n=t.byMuchprev,r=void 0===n?1:n,l=t.byMuchNext,o=void 0===l?1:l,d=t.imageWidth,u=t.previousNext;"left"===e?(m(i,a,r,d),p(i,a),p(u,0),m(c,a,o,d),g(c,a),O(c,a)):"right"===e&&(x(i,a,r,d),p(i,a),x(c,a,o,d),g(c,a),O(c,a))};return Object(s.useEffect)((function(){o.a.to(t.current.children[0],{duration:1,alpha:1})}),[]),Object(c.jsx)("div",{children:Object(c.jsx)(b,{imageList:e,testimonialList:t,nextSlide:function(){if(!v){j(!0);var t=d(340,1.6);!e.current.children[0].classList.contains("active")||e.current.children[1].classList.contains("active")||e.current.children[2].classList.contains("active")?!e.current.children[1].classList.contains("active")||e.current.children[0].classList.contains("active")||e.current.children[2].classList.contains("active")?!e.current.children[2].classList.contains("active")||e.current.children[0].classList.contains("active")||e.current.children[1].classList.contains("active")||(r({isActive1:!0,isActive2:!1,isActive3:!1}),x(0,0,1,t),f("left",{previous:2,previousNext:1,next:0,byMuchprev:3,byMuchNext:0,imageWidth:t})):(r({isActive1:!1,isActive2:!1,isActive3:!0}),m(2,0,1,t),f("left",{previous:1,previousNext:0,next:2,byMuchprev:2,byMuchNext:2,imageWidth:t})):(r({isActive1:!1,isActive2:!0,isActive3:!1}),m(1,0,0,t),f("left",{previous:0,previousNext:2,next:1,imageWidth:t}))}},prevSlide:function(){if(!v){j(!0);var t=d(340,1.6);e.current.children[0].classList.contains("active")?(r({isActive1:!1,isActive2:!1,isActive3:!0}),m(2,0,3,t),f("right",{previous:0,previousNext:1,next:2,byMuchNext:-2,imageWidth:t})):e.current.children[1].classList.contains("active")?(r({isActive1:!0,isActive2:!1,isActive3:!1}),m(0,0,1,t),f("right",{previous:1,previousNext:2,next:0,byMuchprev:0,byMuchNext:0,imageWidth:t})):e.current.children[2].classList.contains("active")&&(r({isActive1:!1,isActive2:!0,isActive3:!1}),m(1,0,2,t),f("right",{previous:2,previousNext:0,next:1,byMuchprev:-1,byMuchNext:-1,imageWidth:t}))}},state:n})})};var g=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(x,{})})};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e362981a.chunk.js.map