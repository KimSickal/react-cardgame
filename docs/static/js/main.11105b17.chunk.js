(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e){},22:function(t,e,n){t.exports=n(36)},31:function(t,e,n){},33:function(t,e,n){"use strict";n(18)},34:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var o,r=n(0),i=n.n(r),a=n(19),c=n.n(a),u=n(1),s=n(8),p=n(21),d=(n(31),n(3));!function(t){t.MOVE_HEAD="MOVE_HEAD",t.POP_TAILS="POP_TAILS",t.PUSH_TAILS="PUSH_TAILS"}(o||(o={}));var E;n(33);!function(t){t.SET_CELL="SET_CELL",t.INIT_GRID="INIT_GRID",t.RANDOM_PUT_ITEM="RANDOM_PUT_ITEM"}(E||(E={}));var l={head:{posX:0,posY:0},tails:[]};var f,L=[20,20];!function(t){t[t.CELL_BLANK=0]="CELL_BLANK",t[t.CELL_SNAKE_HEAD=1]="CELL_SNAKE_HEAD",t[t.CELL_SNAKE_BODY=2]="CELL_SNAKE_BODY",t[t.CELL_SNAKE_ITEM=3]="CELL_SNAKE_ITEM"}(f||(f={}));var _={grid:[],item:{posX:0,posY:0}};var h=Object(u.c)({snake:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0,n=t.tails;switch(e.type){case o.MOVE_HEAD:return Object(d.a)({},t,{head:e.targetPos});case o.POP_TAILS:return Object(d.a)({},t,{tails:n.slice(1)});case o.PUSH_TAILS:return Object(d.a)({},t,{tails:n.concat(e.targetPos)});default:return t}},grid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E.SET_CELL:var n=t.grid;return n[e.position.posY][e.position.posX]=e.cellType,Object(d.a)({},t,{grid:n});case E.INIT_GRID:var o=Array.from(Array(L[0])).map(function(t,n){return Array.from(Array(L[1])).map(function(t,o){return n===e.head.posY&&o===e.head.posX?f.CELL_SNAKE_HEAD:f.CELL_BLANK})});return Object(d.a)({},t,{grid:o});case E.RANDOM_PUT_ITEM:for(var r=t.grid,i=0,a=0;;)if(a=Math.floor(Math.random()*L[0]),i=Math.floor(Math.random()*L[1]),r[a][i]===f.CELL_BLANK){r[a][i]=f.CELL_SNAKE_ITEM;break}return console.log(r),{grid:r,item:{posX:i,posY:a}};default:return t}}}),O=n(5),b=n(6),A=n(10),v=n(7),y=n(9),m=n(2),j=function(t){return t.snake},I=Object(m.a)([j],function(t){return t.head}),N=(Object(m.a)([j],function(t){return t.head.posX}),Object(m.a)([j],function(t){return t.head.posY}),Object(m.a)([j],function(t){return t.tails})),T=function(t){return t.grid},S=Object(m.a)([T],function(t){return t.grid}),g=Object(m.a)([T],function(t){return t.item});function C(t){return{type:o.PUSH_TAILS,targetPos:t}}function D(t){return{type:o.MOVE_HEAD,targetPos:t}}function w(t,e,n){return function(r){r(M(e,f.CELL_SNAKE_HEAD)),r(D(e)),void 0===n?r(M(t,f.CELL_BLANK)):(r(M(t,f.CELL_SNAKE_BODY)),r(M(n,f.CELL_BLANK)),r(C(t)),r({type:o.POP_TAILS}))}}function K(t){return function(e,n){var o=n(),r=I(o),i=function(){switch(t){case 37:return{posX:r.posX-1,posY:r.posY};case 38:return{posX:r.posX,posY:r.posY-1};case 39:return{posX:r.posX+1,posY:r.posY};case 40:return{posX:r.posX,posY:r.posY+1};default:return r}}();if(function(t,e,n){return!(e.posY<0||e.posY>=L[0])&&!(e.posX<0||e.posX>=L[1])&&t>=37&&t<=40}(t,i)){var a=S(o)[i.posY][i.posX];if(a===f.CELL_BLANK){var c=N(o)[0];e(w(r,i,c))}else a===f.CELL_SNAKE_ITEM&&e(function(t,e){return function(n){console.log("asdf"),n(M(t,f.CELL_SNAKE_BODY)),n(M(e,f.CELL_SNAKE_HEAD)),n(D(e)),n(C(t)),n(Y())}}(r,i))}}}function M(t,e){return{type:E.SET_CELL,position:t,cellType:e}}function Y(){return{type:E.RANDOM_PUT_ITEM}}function k(t){return{type:E.INIT_GRID,head:t}}var P=function(t){function e(){return Object(O.a)(this,e),Object(A.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(b.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.head;this.props.initializeGrid(t),this.props.randomPutItem()}},{key:"render",value:function(){var t=this.props,e=t.head,n=t.tails,o=t.item;return r.createElement("div",{style:{width:"500px",height:"500px"}},r.createElement("div",{style:{position:"absolute",width:"10px",height:"10px",background:"black",top:10*e.posY,left:10*e.posX}}),n.map(function(t,e){return r.createElement("div",{style:{position:"absolute",width:"10px",height:"10px",background:"grey",top:10*t.posY,left:10*t.posX},key:e})}),r.createElement("div",{style:{position:"absolute",width:"10px",height:"10px",background:"red",top:10*o.posY,left:10*o.posX}}))}}]),e}(r.Component);var X=Object(s.b)(function(t){return{head:I(t),tails:N(t),item:g(t)}},function(t){return Object(u.b)({initializeGrid:k,randomPutItem:Y},t)})(P),H=n(12),B=function(t){function e(t){var n;return Object(O.a)(this,e),(n=Object(A.a)(this,Object(v.a)(e).call(this,t))).onKeyDown=n.onKeyDown.bind(Object(H.a)(Object(H.a)(n))),n}return Object(y.a)(e,t),Object(b.a)(e,[{key:"onKeyDown",value:function(t){this.props.keydownMoveHeadIfNeeded(t.keyCode)}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return r.createElement("div",null)}}]),e}(r.Component);var x=Object(s.b)(function(t){return{}},function(t){return Object(u.b)({keydownMoveHeadIfNeeded:K,initializeGrid:k},t)})(B),U=(n(34),function(t){function e(){return Object(O.a)(this,e),Object(A.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(b.a)(e,[{key:"render",value:function(){return r.createElement("div",{className:"App"},r.createElement(x,null),r.createElement(X,null))}}]),e}(r.Component));c.a.render(i.a.createElement(s.a,{store:Object(u.d)(h,Object(u.a)(p.a))},i.a.createElement(U,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.11105b17.chunk.js.map