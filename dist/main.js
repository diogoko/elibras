!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);i(1);let n=new class{get textareaTexto(){return document.getElementById("textareaTexto")}get canvasSinais(){return document.getElementById("canvasSinais")}get menuTexto(){return document.getElementById("menuTexto")}get menuSinais(){return document.getElementById("menuSinais")}get divTexto(){return document.getElementById("divTexto")}get divSinais(){return document.getElementById("divSinais")}constructor(){this.mostrarCanvasSinais=this.mostrarCanvasSinais.bind(this),this.mostrarTextareaTexto=this.mostrarTextareaTexto.bind(this),this.redimensionarCanvas=this.redimensionarCanvas.bind(this),this.formatarTexto=this.formatarTexto.bind(this),this.atualizarSinais=this.atualizarSinais.bind(this),this.atualizarEstiloTexto=this.atualizarEstiloTexto.bind(this),this.jaDesenhou=!1,this.corFundo="darkblue",this.corTexto="white",this.tamanhoFonte=48}configurarEventos(){window.addEventListener("resize",this.redimensionarCanvas),this.menuTexto.addEventListener("click",this.mostrarTextareaTexto),this.menuSinais.addEventListener("click",this.mostrarCanvasSinais)}mostrarTextareaTexto(){this.menuTexto.classList.add("selecionado"),this.menuSinais.classList.remove("selecionado"),this.divTexto.style.zIndex=2,this.divSinais.style.zIndex=1}mostrarCanvasSinais(){this.menuTexto.classList.remove("selecionado"),this.menuSinais.classList.add("selecionado"),this.divTexto.style.zIndex=1,this.divSinais.style.zIndex=2,this.atualizarSinais(),this.jaDesenhou||(this.jaDesenhou=!0,setTimeout(this.atualizarSinais,100))}redimensionarCanvas(){const t=document.querySelector("main");this.canvasSinais.width=t.offsetWidth,this.canvasSinais.height=t.offsetHeight}formatarLinha(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().replace(/[^A-Z0-9]+/g," ").trim()}formatarTexto(t){return t.split("\n").map(this.formatarLinha)}atualizarSinais(){const t=this.canvasSinais,e=t.getContext("2d");e.fillStyle=this.corFundo,e.fillRect(0,0,t.width,t.height),e.font=`${this.tamanhoFonte}px Libras-2016`,e.fillStyle=this.corTexto,e.textAlign="center";const i=this.textareaTexto.value,n=this.formatarTexto(i),r=1*this.tamanhoFonte,s=n.length*r;let o=(t.height-s)/2+r;for(let i=0;i<n.length;i++)e.fillText(n[i],t.width/2,o,t.width),o+=r}atualizarEstiloTexto(){const t=this.textareaTexto.style;t.backgroundColor=this.corFundo,t.color=this.corTexto;const e=Math.round(.75*this.tamanhoFonte);t.fontSize=`${e}px`}};n.configurarEventos(),n.atualizarEstiloTexto(),n.mostrarTextareaTexto(),n.redimensionarCanvas()},function(t,e,i){var n;
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */!function(r,s,o,a){"use strict";var u,h=["","webkit","Moz","MS","ms","o"],c=s.createElement("div"),l=Math.round,p=Math.abs,f=Date.now;function d(t,e,i){return setTimeout(x(t,i),e)}function v(t,e,i){return!!Array.isArray(t)&&(m(t,i[e],i),!0)}function m(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function g(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,n,i),t.apply(this,arguments)}}u="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}:Object.assign;var T=g((function(t,e,i){for(var n=Object.keys(e),r=0;r<n.length;)(!i||i&&void 0===t[n[r]])&&(t[n[r]]=e[n[r]]),r++;return t}),"extend","Use `assign`."),y=g((function(t,e){return T(t,e,!0)}),"merge","Use `assign`.");function E(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&u(n,i)}function x(t,e){return function(){return t.apply(e,arguments)}}function S(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function b(t,e){return void 0===t?e:t}function I(t,e,i){m(z(e),(function(e){t.addEventListener(e,i,!1)}))}function C(t,e,i){m(z(e),(function(e){t.removeEventListener(e,i,!1)}))}function A(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function _(t,e){return t.indexOf(e)>-1}function z(t){return t.trim().split(/\s+/g)}function P(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function w(t){return Array.prototype.slice.call(t,0)}function D(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];P(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort((function(t,i){return t[e]>i[e]})):n.sort()),n}function O(t,e){for(var i,n,r=e[0].toUpperCase()+e.slice(1),s=0;s<h.length;){if((n=(i=h[s])?i+r:e)in t)return n;s++}}var M=1;function R(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var F="ontouchstart"in r,N=void 0!==O(r,"PointerEvent"),X=F&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Y=["x","y"],L=["clientX","clientY"];function j(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){S(t.options.enable,[t])&&i.handler(e)},this.init()}function k(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=1&e&&n-r==0,o=12&e&&n-r==0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=W(e));r>1&&!i.firstMultiple?i.firstMultiple=W(e):1===r&&(i.firstMultiple=!1);var s=i.firstInput,o=i.firstMultiple,a=o?o.center:s.center,u=e.center=q(n);e.timeStamp=f(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=B(a,u),e.distance=V(a,u),function(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};1!==e.eventType&&4!==s.eventType||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y});e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}(i,e),e.offsetDirection=U(e.deltaX,e.deltaY);var h=H(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=p(h.x)>p(h.y)?h.x:h.y,e.scale=o?(c=o.pointers,l=n,V(l[0],l[1],L)/V(c[0],c[1],L)):1,e.rotation=o?function(t,e){return B(e[1],e[0],L)+B(t[1],t[0],L)}(o.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,r,s,o=t.lastInterval||e,a=e.timeStamp-o.timeStamp;if(8!=e.eventType&&(a>25||void 0===o.velocity)){var u=e.deltaX-o.deltaX,h=e.deltaY-o.deltaY,c=H(a,u,h);n=c.x,r=c.y,i=p(c.x)>p(c.y)?c.x:c.y,s=U(u,h),t.lastInterval=e}else i=o.velocity,n=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=i,e.velocityX=n,e.velocityY=r,e.direction=s}(i,e);var c,l;var d=t.element;A(e.srcEvent.target,d)&&(d=e.srcEvent.target);e.target=d}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function W(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:l(t.pointers[i].clientX),clientY:l(t.pointers[i].clientY)},i++;return{timeStamp:f(),pointers:e,center:q(e),deltaX:t.deltaX,deltaY:t.deltaY}}function q(t){var e=t.length;if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:l(i/e),y:l(n/e)}}function H(t,e,i){return{x:e/t||0,y:i/t||0}}function U(t,e){return t===e?1:p(t)>=p(e)?t<0?2:4:e<0?8:16}function V(t,e,i){i||(i=Y);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function B(t,e,i){i||(i=Y);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}j.prototype={handler:function(){},init:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(R(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(R(this.element),this.evWin,this.domHandler)}};var G={mousedown:1,mousemove:2,mouseup:4};function Z(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,j.apply(this,arguments)}E(Z,j,{handler:function(t){var e=G[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var $={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},J={2:"touch",3:"pen",4:"mouse",5:"kinect"},K="pointerdown",Q="pointermove pointerup pointercancel";function tt(){this.evEl=K,this.evWin=Q,j.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(K="MSPointerDown",Q="MSPointerMove MSPointerUp MSPointerCancel"),E(tt,j,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=$[n],s=J[t.pointerType]||t.pointerType,o="touch"==s,a=P(e,t.pointerId,"pointerId");1&r&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):12&r&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var et={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function it(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,j.apply(this,arguments)}function nt(t,e){var i=w(t.touches),n=w(t.changedTouches);return 12&e&&(i=D(i.concat(n),"identifier",!0)),[i,n]}E(it,j,{handler:function(t){var e=et[t.type];if(1===e&&(this.started=!0),this.started){var i=nt.call(this,t,e);12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var rt={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function st(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},j.apply(this,arguments)}function ot(t,e){var i=w(t.touches),n=this.targetIds;if(3&e&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=w(t.changedTouches),a=[],u=this.target;if(s=i.filter((function(t){return A(t.target,u)})),1===e)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<o.length;)n[o[r].identifier]&&a.push(o[r]),12&e&&delete n[o[r].identifier],r++;return a.length?[D(s.concat(a),"identifier",!0),a]:void 0}E(st,j,{handler:function(t){var e=rt[t.type],i=ot.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});function at(){j.apply(this,arguments);var t=x(this.handler,this);this.touch=new st(this.manager,t),this.mouse=new Z(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ut(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,ht.call(this,e)):12&t&&ht.call(this,e)}function ht(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout((function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)}),2500)}}function ct(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(s<=25&&o<=25)return!0}return!1}E(at,j,{handler:function(t,e,i){var n="touch"==i.pointerType,r="mouse"==i.pointerType;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)ut.call(this,e,i);else if(r&&ct.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var lt=O(c.style,"touchAction"),pt=void 0!==lt,ft=function(){if(!pt)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){t[i]=!e||r.CSS.supports("touch-action",i)})),t}();function dt(t,e){this.manager=t,this.set(e)}dt.prototype={set:function(t){"compute"==t&&(t=this.compute()),pt&&this.manager.element.style&&ft[t]&&(this.manager.element.style[lt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,(function(e){S(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(_(t,"none"))return"none";var e=_(t,"pan-x"),i=_(t,"pan-y");if(e&&i)return"none";if(e||i)return e?"pan-x":"pan-y";if(_(t,"manipulation"))return"manipulation";return"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,r=_(n,"none")&&!ft.none,s=_(n,"pan-y")&&!ft["pan-y"],o=_(n,"pan-x")&&!ft["pan-x"];if(r){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}if(!o||!s)return r||s&&6&i||o&&24&i?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function vt(t){this.options=u({},this.defaults,t||{}),this.id=M++,this.manager=null,this.options.enable=b(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function mt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function gt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function Tt(t,e){var i=e.manager;return i?i.get(t):t}function yt(){vt.apply(this,arguments)}function Et(){yt.apply(this,arguments),this.pX=null,this.pY=null}function xt(){yt.apply(this,arguments)}function St(){vt.apply(this,arguments),this._timer=null,this._input=null}function bt(){yt.apply(this,arguments)}function It(){yt.apply(this,arguments)}function Ct(){vt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function At(t,e){return(e=e||{}).recognizers=b(e.recognizers,At.defaults.preset),new _t(t,e)}vt.prototype={defaults:{},set:function(t){return u(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(v(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Tt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return v(t,"dropRecognizeWith",this)?this:(t=Tt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(v(t,"requireFailure",this))return this;var e=this.requireFail;return-1===P(e,t=Tt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(v(t,"dropRequireFailure",this))return this;t=Tt(t,this);var e=P(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<8&&n(e.options.event+mt(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=8&&n(e.options.event+mt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=u({},t);if(!S(this.options.enable,[this,e]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},E(yt,vt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=6&e,r=this.attrTest(t);return n&&(8&i||!r)?16|e:n||r?4&i?8|e:2&e?4|e:2:32}}),E(Et,yt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push("pan-y"),24&t&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(6&e.direction?(r=0===s?1:s<0?2:4,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?1:o<0?8:16,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return yt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=gt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),E(xt,yt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),E(St,vt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=d((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),E(bt,yt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),E(It,yt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return Et.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return 30&i?e=t.overallVelocity:6&i?e=t.overallVelocityX:24&i&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&p(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=gt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),E(Ct,vt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(n&&r&&i){if(4!=t.eventType)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||V(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=d((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return 32},failTimeout:function(){return this._timer=d((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),At.VERSION="2.0.7",At.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[bt,{enable:!1}],[xt,{enable:!1},["rotate"]],[It,{direction:6}],[Et,{direction:6},["swipe"]],[Ct],[Ct,{event:"doubletap",taps:2},["tap"]],[St]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function _t(t,e){var i;this.options=u({},At.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(N?tt:X?st:F?at:Z))(i,k),this.touchAction=new dt(this,this.options.touchAction),zt(this,!0),m(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function zt(t,e){var i,n=t.element;n.style&&(m(t.options.cssProps,(function(r,s){i=O(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}_t.prototype={set:function(t){return u(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&14&i.state&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof vt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(v(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(v(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=P(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(void 0!==t&&void 0!==e){var i=this.handlers;return m(z(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this}},off:function(t,e){if(void 0!==t){var i=this.handlers;return m(z(t),(function(t){e?i[t]&&i[t].splice(P(i[t],e),1):delete i[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var i=s.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&zt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},u(At,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:_t,Input:j,TouchAction:dt,TouchInput:st,MouseInput:Z,PointerEventInput:tt,TouchMouseInput:at,SingleTouchInput:it,Recognizer:vt,AttrRecognizer:yt,Tap:Ct,Pan:Et,Swipe:It,Pinch:xt,Rotate:bt,Press:St,on:I,off:C,each:m,merge:y,extend:T,assign:u,inherit:E,bindFn:x,prefixed:O}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=At,void 0===(n=function(){return At}.call(e,i,e,t))||(t.exports=n)}(window,document)}]);