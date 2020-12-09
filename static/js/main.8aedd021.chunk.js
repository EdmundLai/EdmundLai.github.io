(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/edmund1.587d9f8d.jpg"},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lolstatsnew.67558990.PNG"},34:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ping_app_demo.5067135c.PNG"},35:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(1),c=i.n(s),o=i(21),a=i.n(o),r=(i(28),i(14)),d=i(2),l=i(8),j=i(9),h=i(10),p=i(12),b=i(11),u=(i(29),i(30)),m=function(e){Object(p.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={windowWidth:window.innerWidth},n.handleWindowResize=n.handleWindowResize.bind(Object(h.a)(n)),n}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleWindowResize",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"render",value:function(){var e=this.state.windowWidth<640,t=this.state.windowWidth<950,i="BioContainer";return e?Object(n.jsxs)("div",{className:"Bio",children:[Object(n.jsx)("h2",{children:"About Me"}),Object(n.jsxs)("div",{className:"BioContainerMobile",children:[Object(n.jsx)(O,{}),Object(n.jsx)(x,{})]})]}):(t&&(i="BioContainerTablet"),Object(n.jsxs)("div",{className:"Bio",children:[Object(n.jsx)("h2",{children:"About Me"}),Object(n.jsxs)("div",{className:i,children:[Object(n.jsx)(x,{}),Object(n.jsx)(O,{})]})]}))}}]),i}(c.a.Component),O=function(){return Object(n.jsx)("div",{className:"BioImg",children:Object(n.jsx)("img",{src:u,alt:"Edmund Lai"})})},x=function(){return Object(n.jsxs)("div",{className:"BioText",children:[Object(n.jsx)("p",{children:"Hi, I'm Edmund!"}),Object(n.jsx)("p",{children:"I'm passionate about creating code that helps make people's lives easier."}),Object(n.jsx)("p",{children:"I'm a web developer, musician, and always curious to learn more about the world we live in."}),Object(n.jsx)("p",{children:"I'm also interested in game development and games in general, so I enjoy making projects that can help people improve their gameplay or tilt a little less."})]})},v=m,w=(i(31),function(e){Object(p.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={windowWidth:window.innerWidth},n.handleWindowResize=n.handleWindowResize.bind(Object(h.a)(n)),n}return Object(j.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleWindowResize",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"render",value:function(){var e=this.state.windowWidth<1e3,t=this.state.windowWidth<1200,i="";return e?Object(n.jsxs)("div",{className:"ProjectCardMobile",children:[Object(n.jsx)("h3",{children:this.props.title}),Object(n.jsx)("div",{className:"ProjectImage",children:Object(n.jsx)("a",{href:this.props.projLink,children:Object(n.jsx)("img",{src:this.props.imgsrc,alt:this.props.title})})}),Object(n.jsx)("div",{className:"DescriptionBody",children:this.props.description})]}):(t&&(i="CardTablet"),Object(n.jsxs)("div",{className:"ProjectCard ".concat(i),children:[Object(n.jsx)("div",{className:"ProjectImage",children:Object(n.jsx)("a",{href:this.props.projLink,children:Object(n.jsx)("img",{src:this.props.imgsrc,alt:this.props.title})})}),Object(n.jsxs)("div",{className:"ProjectDescription",children:[Object(n.jsx)("h3",{children:this.props.title}),Object(n.jsx)("div",{className:"DescriptionBody",children:this.props.description})]})]}))}}]),i}(c.a.Component)),f=(i(32),i(33)),g=i(34),y=function(e){Object(p.a)(i,e);var t=Object(b.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){var e=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"Website dedicated to providing useful information for each game to League of Legends players looking to analyze their gameplay."}),Object(n.jsx)("p",{children:"Provides important stats such as Kills, Deaths, Assists, and gold and experience earned to analyze overall performance."}),Object(n.jsx)("p",{children:"Developed using React and Node.JS."})]}),t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:"Application developed to monitor latency to League of Legends servers outside of game, so that players can check if their internet connection is stable and won't impair their ingame performance."}),Object(n.jsx)("p",{children:"Uses built in TCP/IP ping command in operating system to connect to the server IP address to check connection quality."}),Object(n.jsx)("p",{children:"Developed using Python and Tkinter."})]});return Object(n.jsxs)("div",{className:"Portfolio",children:[Object(n.jsx)("h2",{children:"Portfolio"}),Object(n.jsx)(w,{imgsrc:f,title:"League of Legends Stats App",description:e,projLink:"https://lol-stats-analysis.herokuapp.com/"}),Object(n.jsx)(w,{imgsrc:g,title:"League of Legends Ping Checker",description:t,projLink:"https://github.com/EdmundLai/League-of-Legends-Ping-App/"})]})}}]),i}(c.a.Component);i(35);var W=function(){return Object(n.jsx)(r.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("h1",{children:"Edmund Lai"}),Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(r.b,{to:"/portfolio",children:"Portfolio"})})]})})]}),Object(n.jsx)("div",{className:"App-body",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/portfolio",children:Object(n.jsx)(y,{})}),Object(n.jsx)(d.a,{exact:!0,path:"/",children:Object(n.jsx)(v,{})})]})}),Object(n.jsx)("div",{className:"App-footer",children:"\u24b8 2020 Edmund Lai"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(n.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.8aedd021.chunk.js.map