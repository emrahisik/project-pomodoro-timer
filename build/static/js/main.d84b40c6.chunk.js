(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=(a(10),a(1)),c=a(2);function u(e){var t=Math.floor(e).toString().padStart(2,"0");return"".concat(t,":00")}var l=function(e){var t=e.session,a=e.focusDuration,n=e.breakDuration;if(!t)return null;var i="";i="Focusing"===t.label?a:n;var s=100*(1-t.timeRemaining/(60*i));return r.a.createElement("div",null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},t.label," for ",u(i)," minutes"),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},function(e){var t=Math.floor(e%3600/60).toString().padStart(2,"0"),a=Math.round(e%60).toString().padStart(2,"0");return"".concat(t,":").concat(a)}(t.timeRemaining)," remaining"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":s,style:{width:"".concat(s,"%")}})))))},m=function(e){var t=e.session,a=e.focusDuration,n=e.setFocusDuration,i=function(e){return n((function(){return Math.min(Math.max(a+e,5),60)}))};return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",u(a)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",onClick:function(){return i(-5)},disabled:t},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",onClick:function(){return i(5)},disabled:t},r.a.createElement("span",{className:"oi oi-plus"})))))},d=function(e){var t=e.session,a=e.breakDuration,n=e.setBreakDuration,i=function(e){return n((function(){return Math.min(Math.max(a+e,1),15)}))};return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",u(a)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:function(){return i(-1)},disabled:t},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:function(){return i(1)},disabled:t},r.a.createElement("span",{className:"oi oi-plus"}))))))},p=function(e){var t=e.session,a=e.setSession,n=e.setIsTimerRunning;return r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"stop",title:"Stop the session",onClick:function(){a(null),n(!1)},disabled:!t},r.a.createElement("span",{className:"oi oi-media-stop"}))};var b=function(e){var t,a=e.setSession,n=e.focusDuration,i=e.isTimerRunning,s=e.setIsTimerRunning;return r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:function(){s((function(e){var t=!e;return t&&a((function(e){return null===e?{label:"Focusing",timeRemaining:60*n}:e})),t}))}},r.a.createElement("span",{className:(t={oi:!0,"oi-media-play":!i,"oi-media-pause":i},Object.entries(t).reduce((function(e,t){var a=Object(o.a)(t,2),n=a[0],r=a[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))}))};function f(e){var t=Math.max(0,e.timeRemaining-1);return Object(c.a)(Object(c.a)({},e),{},{timeRemaining:t})}var E=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(null),c=Object(o.a)(s,2),u=c[0],E=c[1],v=Object(n.useState)(25),g=Object(o.a)(v,2),N=g[0],h=g[1],k=Object(n.useState)(5),y=Object(o.a)(k,2),D=y[0],O=y[1];return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return 0===u.timeRemaining?(new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play(),E(function(e,t){return function(a){return"Focusing"===a.label?{label:"On Break",timeRemaining:60*t}:{label:"Focusing",timeRemaining:60*e}}}(N,D))):E(f)}),a?1e3:null),r.a.createElement("div",{className:"pomodoro"},r.a.createElement("div",{className:"row"},r.a.createElement(m,{session:u,focusDuration:N,setFocusDuration:h}),r.a.createElement(d,{session:u,breakDuration:D,setBreakDuration:O})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement(b,{setSession:E,focusDuration:N,isTimerRunning:a,setIsTimerRunning:i}),r.a.createElement(p,{session:u,setSession:E,setIsTimerRunning:i})))),r.a.createElement(l,{session:u,focusDuration:N,breakDuration:D}))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(E,null)))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.d84b40c6.chunk.js.map