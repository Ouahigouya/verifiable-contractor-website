(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795],{3391:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){a=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})},6937:function(e,t,n){"use strict";n.d(t,{C:function(){return b}});var r=n(7757),a=n.n(r),i=n(2137),o=n(6156),s=n(5893),c=n(7375),l=(n(7294),n(9008)),u=n(6829),d=n(1100),p=n(2340);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=null;function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.ssr,o=void 0===r||r,d=function(t){var n=t.apolloClient,r=t.apolloState,a=(0,c.Z)(t,["apolloClient","apolloState"]),i=n||j(r);return(0,s.jsx)(u.ApolloProvider,{client:i,children:(0,s.jsx)(e,x({},a))})};return(o||e.getInitialProps)&&(d.getInitialProps=function(){var t=(0,i.Z)(a().mark((function t(r){var i,c,u,d,p,f;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=r.AppTree,c=r.apolloClient=j(),u={},!e.getInitialProps){t.next=7;break}return t.next=6,e.getInitialProps(r);case 6:u=t.sent;case 7:t.next=24;break;case 10:if(!o){t.next=24;break}return t.prev=11,t.next=14,Promise.all([n.e(774),n.e(603)]).then(n.bind(n,6603));case 14:return d=t.sent,p=d.getDataFromTree,t.next=18,p((0,s.jsx)(i,{pageProps:x(x({},u),{},{apolloClient:c})}));case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(11),console.error("Error while running `getDataFromTree`",t.t0);case 23:l.default.rewind();case 24:return f=c.cache.extract(),t.abrupt("return",x(x({},u),{},{apolloState:f}));case 26:case"end":return t.stop()}}),t,null,[[11,20]])})));return function(e){return t.apply(this,arguments)}}()),d}function j(e){return h||(h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!1,n=(new p.h4).restore(e);return new d.fe({ssrMode:t,link:m(),cache:n})}(e)),h}function m(){return new(0,n(6624).HttpLink)({uri:"http://localhost:3000/api",credentials:"same-origin"})}},7513:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(5988),i=n(1664),o=n(1163),s=function(){var e=(0,o.useRouter)();function t(t){return e.pathname===t}return(0,r.jsxs)("nav",{className:"jsx-598980782",children:[(0,r.jsxs)("div",{className:"jsx-598980782 left",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{"data-active":t("/"),className:"jsx-598980782 bold",children:"Blog"})}),(0,r.jsx)(i.default,{href:"/drafts",children:(0,r.jsx)("a",{"data-active":t("/drafts"),className:"jsx-598980782",children:"Drafts"})})]}),(0,r.jsxs)("div",{className:"jsx-598980782 right",children:[(0,r.jsx)(i.default,{href:"/signup",children:(0,r.jsx)("a",{"data-active":t("/signup"),className:"jsx-598980782",children:"Signup"})}),(0,r.jsx)(i.default,{href:"/create",children:(0,r.jsx)("a",{"data-active":t("/create"),className:"jsx-598980782",children:"+ Create draft"})})]}),(0,r.jsx)(a.default,{id:"598980782",children:["nav.jsx-598980782{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:2rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".bold.jsx-598980782{font-weight:bold;}","a.jsx-598980782{-webkit-text-decoration:none;text-decoration:none;color:#000;display:inline-block;}",'.left.jsx-598980782 a[data-active="true"].jsx-598980782{color:gray;}',"a.jsx-598980782+a.jsx-598980782{margin-left:1rem;}",".right.jsx-598980782{margin-left:auto;}",".right.jsx-598980782 a.jsx-598980782{border:1px solid black;padding:0.5rem 1rem;border-radius:3px;}"]})]})},c=function(e){return(0,r.jsxs)("div",{className:"jsx-1678097691",children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:"jsx-1678097691 layout",children:e.children}),(0,r.jsx)(a.default,{id:"540019051",children:["html{box-sizing:border-box;}","*,*:before,*:after{box-sizing:inherit;}","body{margin:0;padding:0;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto, Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol';background:rgba(0,0,0,0.05);}","input,textarea{font-size:16px;}","button{cursor:pointer;}"]}),(0,r.jsx)(a.default,{id:"1179425017",children:[".layout.jsx-1678097691{padding:0 2rem;}"]})]})}},8651:function(e,t,n){"use strict";n.r(t);var r=n(7757),a=n.n(r),i=n(2137),o=n(5893),s=n(3391),c=n(2465),l=n(5988),u=n(7513),d=n(1163),p=n(6937),f=n(3121),x=n(6829);function h(){var e=(0,c.Z)(["\n  mutation DeleteMutation($postId: String!) {\n    deletePost(postId: $postId) {\n      id\n      title\n      content\n      published\n      author {\n        id\n        name\n      }\n    }\n  }\n"]);return h=function(){return e},e}function b(){var e=(0,c.Z)(["\n  mutation PublishMutation($postId: String!) {\n    publish(postId: $postId) {\n      id\n      title\n      content\n      published\n      author {\n        id\n        name\n      }\n    }\n  }\n"]);return b=function(){return e},e}function j(){var e=(0,c.Z)(["\n  query PostQuery($postId: String!) {\n    post(postId: $postId) {\n      id\n      title\n      content\n      published\n      author {\n        id\n        name\n      }\n    }\n  }\n"]);return j=function(){return e},e}var m=(0,f.ZP)(j()),g=(0,f.ZP)(b()),v=(0,f.ZP)(h());t.default=(0,p.C)((function(){var e=(0,d.useRouter)().query.id,t=(0,x.useQuery)(m,{variables:{postId:e}}),n=t.loading,r=t.error,c=t.data,p=(0,x.useMutation)(g),f=(0,s.Z)(p,1)[0],h=(0,x.useMutation)(v),b=(0,s.Z)(h,1)[0];if(n)return console.log("loading"),(0,o.jsx)("div",{children:"Loading ..."});if(r)return console.log("error"),(0,o.jsxs)("div",{children:["Error: ",r.message]});console.log("response",c);var j=c.post.title;c.post.published||(j="".concat(j," (Draft)"));var y=c.post.author?c.post.author.name:"Unknown author";return(0,o.jsxs)(u.Z,{children:[(0,o.jsxs)("div",{className:"jsx-3440979688",children:[(0,o.jsx)("h2",{className:"jsx-3440979688",children:j}),(0,o.jsxs)("p",{className:"jsx-3440979688",children:["By ",y]}),(0,o.jsx)("p",{className:"jsx-3440979688",children:c.post.content}),!c.post.published&&(0,o.jsx)("button",{onClick:function(){var t=(0,i.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f({variables:{postId:e}});case 2:d.default.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),className:"jsx-3440979688",children:"Publish"}),(0,o.jsx)("button",{onClick:function(){var t=(0,i.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b({variables:{postId:e}});case 2:d.default.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),className:"jsx-3440979688",children:"Delete"})]}),(0,o.jsx)(l.default,{id:"3440979688",children:[".page.jsx-3440979688{background:white;padding:2rem;}",".actions.jsx-3440979688{margin-top:2rem;}","button.jsx-3440979688{background:#ececec;border:0;border-radius:0.125rem;padding:1rem 2rem;}","button.jsx-3440979688+button.jsx-3440979688{margin-left:1rem;}"]})]})}))},1211:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/p/[id]",function(){return n(8651)}])}},function(e){e.O(0,[774,351,240],(function(){return t=1211,e(e.s=t);var t}));var t=e.O();_N_E=t}]);