(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/tick.e249914e.svg"},60:function(e,t,a){e.exports=a.p+"static/media/center.ecafd7c9.svg"},61:function(e,t,a){e.exports=a.p+"static/media/reset.2be41fd5.svg"},62:function(e,t,a){e.exports=a.p+"static/media/list.cbd8b5a8.svg"},71:function(e,t,a){e.exports=a(91)},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),i=a(33),c=a(26),s=a(11),u=a(12),m=a(14),d=a(13),h=a(15),g=a(18),v=a(19),p=a(111),b={ocherYellow:"#F2CB05",oceanBlue:"#03588C",waterBluelight:"#03738C",woodBrown:"#BF4904",brightRed:"#F21616",white:"#FFFFFF",cherry:"#3B3C4C",lavender:"#e6e6fa",gray:"#9697A9",lightGray:"#F8F8FF"};function f(){var e=Object(g.a)(["\n  background: ",";\n  height: 100vh;\n"]);return f=function(){return e},e}var E=Object(v.a)(p.a)(f(),b.lavender),y=a(45),w=a.n(y);function x(){var e=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  button {\n    position: absolute;\n    top: 105px;\n    right: 40px;\n    background: ",";\n    &:hover {\n      color: ",";\n    }\n  }\n  canvas {\n    margin-top: 20px;\n    border: 1px solid ",";\n    background-color: ",";\n  }\n"]);return x=function(){return e},e}var k=v.a.div(x(),b.lavender,b.lavender,b.grey,b.white),C={color:b.brightRed,radius:5.5,borderColor:b.brightRed},j={color:null,borderColor:b.ocherYellow,lineWidth:2},O={color:b.oceanBlue},I={width:1e3,height:700},M=a(112),B=a(42),P=function(e,t,a,n,r,o){e.beginPath(),e.arc(t.x,t.y,n,0,2*Math.PI,!1),o&&(e.lineWidth=o),a&&(e.fillStyle=a,e.fill()),r&&(e.strokeStyle=r,e.stroke())},F=function(e,t){var a=e.x-t.x,n=e.y-t.y;return Math.sqrt(a*a+n*n)},S=function(e,t,a){e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.lineWidth=2,e.strokeStyle=O.color,e.stroke()},D=function(e){var t=Object(B.a)(e,4),a=t[0],n=t[1],r=t[2],o=t[3];return{x:(a.x+n.x+r.x+o.x)/4,y:(a.y+n.y+r.y+o.y)/4}},A=function(e){if(!e||e.length<4)return 0;var t=F(e[1],e[3]),a=F(e[3],e[0]),n=F(e[1],e[0]),r=(t+a+n)/2;return 2*Math.sqrt(r*(r-t)*(r-a)*(r-n))},R=function(e){var t=Object(B.a)(e,3),a=t[0],n=t[1],r=t[2];return{x:a.x-(n.x-r.x),y:r.y-(n.y-a.y)}},T=function(e,t){var a=t[t.length-1],n=C.color,r=C.radius,o=C.borderColor;if(P(e,a,n,r,o),t.length-1>0){var l=t[t.length-2];S(e,l,a)}},N=function(e,t,a){var n=Object(B.a)(t,4),r=n[0],o=n[2],l=n[3];S(e,o,l),S(e,r,l);var i=j.color,c=j.borderColor,s=j.lineWidth,u=a.center,m=a.radius;P(e,u,i,m,c,s)},L=function(e,t,a){e.clearRect(0,0,I.width,I.height);for(var n=0;n<3;n++){var r=t.slice(0,n+1);T(e,r)}N(e,t,a)},Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getMousePosition=function(e){var t=a.state.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}},a.isMouseInsidePoint=function(e,t){var n=a.getMousePosition(t),r=n.x-e.x,o=n.y-e.y;return r*r+o*o<=C.radius*C.radius},a.setDraggable=function(e){var t=e.type;"mousedown"===t?a.setState({isMouseDown:!0}):"mouseup"===t&&a.setState({isMouseDown:!1,pointSelected:{isFocused:!1}})},a.calculateCenteredCircleInfo=function(e,t){return{center:D(e),radius:Math.sqrt(t/Math.PI)}},a.handleCanvasClick=function(e){var t=a.state,n=t.context,r=t.canvas,o=a.props,l=o.handleParallelogramChange,i=o.handleCircleChange,c=o.parallelogram.vertices,s=a.getMousePosition(e),u={x:s.x,y:s.y},m=0;if(!w.a.find(c,u)&&c.length<3){var d=c.concat(u);if(T(n,d),3===d.length){var h=R(d);d=d.concat(h),m=A(d);var g=a.calculateCenteredCircleInfo(d,m);i(g.center,g.radius),N(n,d,g),r.addEventListener("mousedown",a.setDraggable),r.addEventListener("mousemove",a.handleMouseMove),r.addEventListener("mouseup",a.setDraggable),r.removeEventListener("click",a.handleCanvasClick)}l(d,m)}},a.handleMouseMove=function(e){var t=a.state,n=t.isMouseDown,r=t.pointSelected,o=t.context,l=a.props.parallelogram.vertices;if(n&&4===l.length)if(r.isFocused){var i=a.getMousePosition(e),c=w.a.cloneDeep(l),s=a.props,u=s.handleParallelogramChange,m=s.handleCircleChange;c[r.key].x=i.x,c[r.key].y=i.y;var d=R(c);c[3]=d;var h=A(l),g=a.calculateCenteredCircleInfo(c,h);m(g.center,g.radius),u(c,h),L(o,c,g)}else a.searchClickedPoint(l,e)},a.searchClickedPoint=function(e,t){for(var n=0;n<e.length;n++)if(a.isMouseInsidePoint(e[n],t)){a.setState({pointSelected:{isFocused:!0,key:n}});break}},a.handleClear=function(){var e=a.state,t=e.context,n=e.canvas,r=a.props.handleParallelogramChange;t.clearRect(0,0,I.width,I.height),n.addEventListener("click",a.handleCanvasClick),n.removeEventListener("mousedown",a.setDraggable),n.removeEventListener("mousemove",a.handleMouseMove),n.removeEventListener("mouseup",a.setDraggable),r([],0)},a.state={context:null,isMouseDown:!1,pointSelected:{key:0,isFocused:!1}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("drawCanvas");e.addEventListener("click",this.handleCanvasClick),this.setState({canvas:e,context:e.getContext("2d")})}},{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(M.a,{onClick:this.handleClear},"Clear"),r.a.createElement("canvas",{className:"canvas",id:"drawCanvas",width:I.width,height:I.height}))}}]),t}(n.Component);Y.defaultProps={parallelogram:{},circle:{}};var W=Y;function J(){var e=Object(g.a)(["\n  margin-top: 20px;\n  margin-right: 20px;\n  color: ",";\n\n  .MuiGrid-container {\n    background-color: ",";\n    border-radius: 5px;\n    padding: 20px;\n  }\n\n  h6 {\n    color: ",";\n    font-weight: bold;\n  }\n\n  .circle-title {\n    margin-top: 50px;\n  }\n"]);return J=function(){return e},e}var q=Object(v.a)(p.a)(J(),b.white,b.cherry,b.white),G=a(113),X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).showPoints=function(e){if(e)return e.vertices.map(function(e,t){return r.a.createElement(p.a,{item:!0,xs:12,key:t},r.a.createElement(G.a,{gutterBottom:!0,variant:"h6"},"Point Number ",t+1),r.a.createElement("p",null,"{"," X: ",e.x,", Y: ",e.y,"}"))})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.parallelogram,a=e.circle;if(t.vertices.length<1)return r.a.createElement(q,null,r.a.createElement(p.a,{container:!0},r.a.createElement("p",null,"Add some items to see it's info")));var n=a.center,o=a.radius,l=Math.trunc(t.area),i=o?Math.trunc(o*o*Math.PI):0;return r.a.createElement(q,null,r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(G.a,{gutterBottom:!0,variant:"h4"},"Parallelogram")),this.showPoints(t),4===t.vertices.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(G.a,{gutterBottom:!0,variant:"h6"},"Total Area: ",l)),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(G.a,{gutterBottom:!0,variant:"h4",className:"circle-title"},"Circle")),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(G.a,{gutterBottom:!0,variant:"h6"},"Center Point"),r.a.createElement("p",null,"{"," X: ",Math.trunc(n.x),", Y: ",Math.trunc(n.y),"}")),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(G.a,{gutterBottom:!0,variant:"h6"},"Radius: ",Math.trunc(o))),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(G.a,{gutterBottom:!0,variant:"h6"},"Total Area: ",i)))))}}]),t}(n.Component);X.defaultProps={parallelogram:{},circle:{}};var z=X,U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleParallelogramChange=function(e,t){a.setState({parallelogram:{vertices:e,area:t}})},a.handleCircleChange=function(e,t){a.setState({circle:{center:e,radius:t}})},a.state={parallelogram:{vertices:[],area:-1},circle:{radious:-1,center:{}}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.parallelogram,a=e.circle;return r.a.createElement(E,{container:!0},r.a.createElement(p.a,{item:!0,xs:12,lg:9,className:"canvas-container"},r.a.createElement(W,{handleParallelogramChange:this.handleParallelogramChange,handleCircleChange:this.handleCircleChange,parallelogram:t})),r.a.createElement(p.a,{item:!0,xs:12,lg:3,className:"canvas-detail-container"},r.a.createElement(z,{parallelogram:t,circle:a})))}}]),t}(n.Component);function H(){var e=Object(g.a)(["\n  background: ",";\n  height: 100vh;\n  padding: 40px;\n  .inner-grid {\n    background-color: ",";\n    padding: 20px 40px;\n    margin: 0 auto;\n  }\n  ul {\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n    padding: 20px;\n  }\n  .subtitle {\n    padding: 50px 0 10px 0;\n  }\n  .MuiAvatar-colorDefault {\n    background-color: ",";\n  }\n"]);return H=function(){return e},e}var K=Object(v.a)(p.a)(H(),b.lavender,b.white,b.cherry,b.white,b.white),Z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(K,{container:!0},r.a.createElement(p.a,{item:!0,xs:8,className:"inner-grid"},r.a.createElement(G.a,{gutterBottom:!0,variant:"h4",component:"h2"},"About me"),r.a.createElement(G.a,{variant:"subtitle1",gutterBottom:!0},"Im",r.a.createElement("a",{href:"https://www.linkedin.com/in/sebastian-pellitero/"}," ","Sebastian Pellitero")," ","I'm a Frontend Dev from"," ",r.a.createElement("a",{href:"https://goo.gl/maps/4zZFfCFyBU1DAKGY7"},"Argentina"),". I have been working around 3 years in this field building pages for several brand known companies."),r.a.createElement(G.a,{variant:"subtitle1",gutterBottom:!0},"My passion started the first time I found a way to bring all the logic from a dark boring console to a nice looking browser and all the secrets behind it. From that moment on, I never stopped learning new things and I try to keep them updated."),r.a.createElement(G.a,{variant:"subtitle1",gutterBottom:!0},"I worked not only with JS vanilla/ES6 but with ReactJS, that I consider my main library along Redux Thunk and Saga. I extended my practices to the mobile world with React-Native and learned all the similarities and difficulties working with Android and OS environments."),r.a.createElement(G.a,{variant:"subtitle1",gutterBottom:!0},"I'm familiar with Material UI framework as well as Saas and good practices behind it. On my free time I am trying to extend my knowledge about Node and complete the Fullstack circle, and keep up with React updates, such as hooks and context. I'm a team player and I like to be part and create a good environment in the group, I love to share what I know and learn from others, not only from technology but about life and experiences."),r.a.createElement(G.a,{variant:"subtitle1",gutterBottom:!0},"This challenge made me learn a lot of things about"," ",r.a.createElement("a",{href:"https://sebastianpellitero.github.io/InterfacesCanvasPaint/"},"canvas"),", I took a course at udemy about making video games in canvas and that gave me some ground to start building. I never used canvas in React before so it was a challenge and I was astonished in the way that I could apply mathematics and trigonometry inside it.")))}}]),t}(n.Component),$=a(122),Q=a(114);function V(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  .right-container {\n    a:last-of-type span {\n      margin-left: 20px;\n    }\n  }\n"]);return V=function(){return e},e}function _(){var e=Object(g.a)(["\n  &.MuiAppBar-root {\n    background-color: ",";\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n    font-size: 18px;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return _=function(){return e},e}var ee=Object(v.a)($.a)(_(),b.oceanBlue,b.white),te=Object(v.a)(Q.a)(V()),ae=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{position:"static"},r.a.createElement(te,null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",null,"Dashboard")),r.a.createElement("div",{className:"right-container"},r.a.createElement(i.b,{to:"/tutorial"},r.a.createElement("span",null,"Tutorial")),r.a.createElement(i.b,{to:"/about"},r.a.createElement("span",null,"About")))))}}]),t}(n.Component),ne=a(41),re=a.n(ne),oe=a(60),le=a.n(oe),ie=a(61),ce=a.n(ie),se=a(62),ue=a.n(se),me=a(115),de=a(116),he=a(117),ge=a(118),ve=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(K,{container:!0},r.a.createElement(p.a,{item:!0,xs:8,className:"inner-grid"},r.a.createElement(G.a,{gutterBottom:!0,variant:"h4",component:"h2"},"Draw simple shapes"),r.a.createElement(G.a,{variant:"subtitle1",gutterBottom:!0},"The objective of this program is to draw simple shapes and interact with each other in real time. In order to make this interactive it use complex trigonometric formulas such as the Pythagorean theorem and Heron\u2019s formula. You can follow this steps:"),r.a.createElement(me.a,null,r.a.createElement(de.a,null,r.a.createElement(he.a,null,r.a.createElement(ge.a,null,r.a.createElement("img",{src:re.a,alt:"icon"}))),r.a.createElement(G.a,{variant:"body1"},"Start clicking inside the canvas and watch how it draw each time a red dot in the selected coordinates.")),r.a.createElement(de.a,null,r.a.createElement(he.a,null,r.a.createElement(ge.a,null,r.a.createElement("img",{src:re.a,alt:"icon"}))),r.a.createElement(G.a,{variant:"body1"},"After the third point is added, the fourth point generates automatically constructing a parallelogram.")),r.a.createElement(de.a,null,r.a.createElement(he.a,null,r.a.createElement(ge.a,null,r.a.createElement("img",{src:re.a,alt:"Tick icon"}))),r.a.createElement(G.a,{variant:"body1"},"Try click and drag the red dots and the shape will recalculate accordingly."))),r.a.createElement(G.a,{gutterBottom:!0,variant:"h5",component:"h4",className:"subtitle"},"Things to take in mind"),r.a.createElement(me.a,null,r.a.createElement(de.a,null,r.a.createElement(he.a,null,r.a.createElement(ge.a,null,r.a.createElement("img",{src:le.a,alt:"Center icon"}))),r.a.createElement(G.a,{variant:"body1"},"The yellow circle and the parallelogram have the same area.")),r.a.createElement(de.a,null,r.a.createElement(he.a,null,r.a.createElement(ge.a,null,r.a.createElement("img",{src:ue.a,alt:"List icon"}))),r.a.createElement(G.a,{variant:"body1"},"In the detail area you can see the data changing in real time.")),r.a.createElement(de.a,null,r.a.createElement(he.a,null,r.a.createElement(ge.a,null,r.a.createElement("img",{src:ce.a,alt:"Reset icon"}))),r.a.createElement(G.a,{variant:"body1"},"The undo button will reset all the functionalities and you can start drawing from the start.")))))}}]),t}(n.Component);ve.defaultProps={};var pe=ve,be=function(){return r.a.createElement(i.a,null,r.a.createElement(ae,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:U}),r.a.createElement(c.a,{path:"/about",component:Z}),r.a.createElement(c.a,{path:"/tutorial",component:pe})))},fe=a(121);var Ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,null),r.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[71,1,2]]]);
//# sourceMappingURL=main.9292815b.chunk.js.map