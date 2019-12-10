(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(20),o=a.n(l),r=(a(28),a(14)),s=a(5),c=a(7),m=a(8),d=a(11),p=a(10),u=a(9),h=a(12),E=(a(29),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={windowWidth:window.innerWidth},a.handleWindowResize=a.handleWindowResize.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleWindowResize",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"render",value:function(){return this.state.windowWidth<500?i.a.createElement("div",{className:"Bio"},i.a.createElement("h2",null,"About Me"),i.a.createElement("div",{className:"BioContainerMobile"},i.a.createElement("div",{className:"BioImg"},i.a.createElement("img",{src:"/edmund.jpg",alt:"Edmund Lai"})),i.a.createElement("div",{className:"BioText"},i.a.createElement("p",null,"Hi, I'm Edmund!"),i.a.createElement("p",null,"I'm passionate about creating code that helps make people's lives easier."),i.a.createElement("p",null,"I'm a web developer, musician, and always curious to learn more about the world we live in."),i.a.createElement("p",null,"I'm also interested in game development and games in general, so I enjoy making projects that can help people improve their gameplay or tilt a little less.")))):i.a.createElement("div",{className:"Bio"},i.a.createElement("h2",null,"About Me"),i.a.createElement("div",{className:"BioContainer"},i.a.createElement("div",{className:"BioText"},i.a.createElement("p",null,"Hi, I'm Edmund!"),i.a.createElement("p",null,"I'm passionate about creating code that helps make people's lives easier."),i.a.createElement("p",null,"I'm a web developer, musician, and always curious to learn more about the world we live in."),i.a.createElement("p",null,"I'm also interested in game development and games in general, so I enjoy making projects that can help people improve their gameplay or tilt a little less.")),i.a.createElement("div",{className:"BioImg"},i.a.createElement("img",{src:"/edmund.jpg",alt:"Edmund Lai"}))))}}]),t}(i.a.Component)),v=(a(30),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={windowWidth:window.innerWidth},a.handleWindowResize=a.handleWindowResize.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleWindowResize",value:function(){this.setState({windowWidth:window.innerWidth})}},{key:"render",value:function(){return this.state.windowWidth<500?i.a.createElement("div",{className:"ProjectCardMobile"},i.a.createElement("h3",null,this.props.title),i.a.createElement("div",{className:"ProjectImage"},i.a.createElement("a",{href:this.props.projLink},i.a.createElement("img",{src:this.props.imgsrc,alt:this.props.title}))),i.a.createElement("div",{className:"DescriptionBody"},this.props.description)):i.a.createElement("div",{className:"ProjectCard"},i.a.createElement("div",{className:"ProjectImage"},i.a.createElement("a",{href:this.props.projLink},i.a.createElement("img",{src:this.props.imgsrc,alt:this.props.title}))),i.a.createElement("div",{className:"ProjectDescription"},i.a.createElement("h3",null,this.props.title),i.a.createElement("div",{className:"DescriptionBody"},this.props.description)))}}]),t}(i.a.Component)),g=(a(31),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Website dedicated to providing useful information for each game to League of Legends players looking to analyze their gameplay."),i.a.createElement("p",null,"Provides important stats such as Kills, Deaths, Assists, and gold and experience earned to analyze overall performance."),i.a.createElement("p",null,"Developed using React and Node.JS.")),t=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Application developed to monitor latency to League of Legends servers outside of game, so that players can check if their internet connection is stable and won't impair their ingame performance."),i.a.createElement("p",null,"Uses built in TCP/IP ping command in operating system to connect to the server IP address to check connection quality."),i.a.createElement("p",null,"Developed using Python and Tkinter."));return i.a.createElement("div",{className:"Portfolio"},i.a.createElement("h2",null,"Portfolio"),i.a.createElement(v,{imgsrc:"/lolstats2.png",title:"League of Legends Stats App",description:e,projLink:"https://lol-stats-analysis.herokuapp.com/"}),i.a.createElement(v,{imgsrc:"/ping_app_demo.png",title:"League of Legends Ping Checker",description:t,projLink:"https://github.com/EdmundLai/League-of-Legends-Ping-App/"}))}}]),t}(i.a.Component));a(32);var w=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Edmund Lai"),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(r.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"/portfolio"},"Portfolio"))))),i.a.createElement("div",{className:"App-body"},i.a.createElement(s.c,null,i.a.createElement(s.a,{path:"/portfolio"},i.a.createElement(g,null)),i.a.createElement(s.a,{exact:!0,path:"/"},i.a.createElement(E,null)))),i.a.createElement("div",{className:"App-footer"},"\u24b8 2019 Edmund Lai")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.927fa606.chunk.js.map