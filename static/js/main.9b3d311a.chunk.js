(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},16:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(10),c=n.n(s),u=(n(16),n(1)),l=n(2),o=n(4),i=n(3),m=n(5),b=(n(18),n(7),n(8),n(9),function e(t,n){if(t.indexOf(n)>=0)return!0;if(t[0]>n)return!1;if(t[t.length-1]>n)return t.pop(),e(t,n);for(var r=t.length,a=1<<r,s=1;s<a;s++){for(var c=0,u=0;u<r;u++)s&1<<u&&(c+=t[u]);if(n===c)return!0}return!1}),d=function(e){for(var t=[],n=0;n<e.numberOfStars;n++)t.push(a.a.createElement("i",{key:n,className:"fa fa-star"}));return a.a.createElement("div",{className:"col-5"},t)},f=function(e){var t;switch(e.answerIsCorrect){case!0:t=a.a.createElement("button",{className:"btn btn-success",onClick:e.acceptAnswer},a.a.createElement("i",{className:"fa fa-check"}));break;case!1:t=a.a.createElement("button",{className:"btn btn-danger"},a.a.createElement("i",{className:"fa fa-times"}));break;default:t=a.a.createElement("button",{className:"btn",onClick:e.checkAnswer,disabled:0===e.selectedNumbers.length},"=")}return a.a.createElement("div",{className:"col-2 text-center"},t,a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("button",{className:"btn btn-warning btn-sm",onClick:e.redraw,disabled:0===e.redrawNumber},a.a.createElement("i",{className:"fa fa-refresh"}),e.redrawNumber))},N=function(e){return a.a.createElement("div",{className:"col-5"},e.selectedNumbers.map(function(t,n){return a.a.createElement("span",{key:n,onClick:function(){return e.unselectNumber(t)}},t)}))},h=function(e){return a.a.createElement("div",{className:"card text-center"},a.a.createElement("div",null,w.map(function(t,n){return a.a.createElement("span",{key:n,className:function(t){return e.usedNumbers.indexOf(t)>=0?"numbers-used":e.selectedNumbers.indexOf(t)>=0?"numbers-selected":void 0}(t),onClick:function(){e.selectNumber(t)}},t)})))},w=[1,2,3,4,5,6,7,8,9],E=function(e){return a.a.createElement("div",{className:"text-center"},a.a.createElement("h2",null,e.doneStatus),a.a.createElement("button",{className:"btn btn-secondary",onClick:e.resetGame},"Play Again"))},p=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state=t.initialState(),n.resetGame=function(){return n.setState(t.initialState())},n.selectNumber=function(e){n.state.selectedNumbers.indexOf(e)>=0||n.state.usedNumbers.indexOf(e)>=0||n.setState(function(t){return{selectedNumbers:t.selectedNumbers.concat(e),answerIsCorrect:null}})},n.unselectNumber=function(e){n.setState(function(t){return{selectedNumbers:t.selectedNumbers.filter(function(t){return t!==e}),answerIsCorrect:null}})},n.checkAnswer=function(){n.setState(function(e){return{answerIsCorrect:e.numberOfStars===e.selectedNumbers.reduce(function(e,t){return e+t},0)}})},n.acceptAnswer=function(){n.setState(function(e){return{usedNumbers:e.usedNumbers.concat(e.selectedNumbers),selectedNumbers:[],answerIsCorrect:null,numberOfStars:t.randomNumber()}},n.updateDoneStatus)},n.redraw=function(){0!==n.state.redrawNumber&&n.setState(function(e){return{selectedNumbers:[],numberOfStars:t.randomNumber(),answerIsCorrect:null,redrawNumber:e.redrawNumber-1}},n.updateDoneStatus)},n.possibleSolutions=function(e){var t=e.numberOfStars,n=e.usedNumbers,r=w.filter(function(e){return-1===n.indexOf(e)});return b(r,t)},n.updateDoneStatus=function(){n.setState(function(e){return 9===e.usedNumbers.length?{doneStatus:"Done. Nice!"}:0!==e.redrawNumber||n.possibleSolutions(e)?void 0:{doneStatus:"Game Over! "}})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedNumbers,n=e.numberOfStars,r=e.answerIsCorrect,s=e.usedNumbers,c=e.redrawNumber,u=e.doneStatus;return a.a.createElement("div",{className:"container"},a.a.createElement("h2",null,"Play Nine"),a.a.createElement("div",{className:"row"},a.a.createElement(d,{numberOfStars:n}),a.a.createElement(f,{selectedNumbers:t,checkAnswer:this.checkAnswer,answerIsCorrect:r,acceptAnswer:this.acceptAnswer,redraw:this.redraw,redrawNumber:c}),a.a.createElement(N,{selectedNumbers:t,unselectNumber:this.unselectNumber})),a.a.createElement("br",null),u?a.a.createElement(E,{doneStatus:u,resetGame:this.resetGame}):a.a.createElement(h,{selectedNumbers:t,selectNumber:this.selectNumber,usedNumbers:s}),a.a.createElement("br",null))}}]),t}(r.Component);p.randomNumber=function(){return 1+Math.floor(9*Math.random())},p.initialState=function(){return{selectedNumbers:[],numberOfStars:p.randomNumber(),usedNumbers:[],answerIsCorrect:null,redrawNumber:5,doneStatus:null}};var v=p,O=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"rulesheader"},a.a.createElement("h3",null,"Rules")),a.a.createElement("div",{className:"rulescontent"},"Select one or more numbers that would sum up to the value of the stars. Click the equal sign to see if it is right. If right, the button becomes green and click to countinue. If wrong, the button becomes red and you should pick other right numbers or click refresh if there is no possible correct combination. The objective is to correctly use all the numbers. When all the 9 numbers are used, you win. When there is no refresh time and no possible combination out of the remaining numbers, game over.")))}}]),t}(r.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title="Game PlayNine"}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(v,null),a.a.createElement(O,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){},9:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.9b3d311a.chunk.js.map