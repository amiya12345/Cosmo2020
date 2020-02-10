/*! emergence.js v1.1.2 | (c) 2017 @xtianmiller | https://github.com/xtianmiller/emergence.js */
!function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e)}):"object"==typeof exports?module.exports=t:e.emergence=t(e)}(this,function(e){"use strict";var t,n,o,i,r,c,s,d,a,l,f={},u=function(){},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},h=function(e){var t=e.offsetWidth,n=e.offsetHeight,o=0,i=0;do{isNaN(e.offsetTop)||(o+=e.offsetTop),isNaN(e.offsetLeft)||(i+=e.offsetLeft)}while(null!==(e=e.offsetParent));return{width:t,height:n,top:o,left:i}},g=function(){t||(clearTimeout(t),t=setTimeout(function(){f.engage(),t=null},o))};return f.init=function(e){var t=function(e,t){return parseInt(e||t,10)};n=(e=e||{}).container||window,i=void 0===e.reset||e.reset,r=void 0===e.handheld||e.handheld,o=t(e.throttle,250),c=function(e,t){return parseFloat(e||t)}(e.elemCushion,.15),s=t(e.offsetTop,0),d=t(e.offsetRight,0),a=t(e.offsetBottom,0),l=t(e.offsetLeft,0),u=e.callback||u,"querySelectorAll"in document?(m()&&r||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",g,!1),n.addEventListener("scroll",g,!1),n.addEventListener("resize",g,!1)):(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&g()}),n.attachEvent("onscroll",g),n.attachEvent("onresize",g))):console.log("Emergence.js is not supported in this browser.")},f.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),o=t.length,r=0;r<o;r++)!function(e){if(function(e){return null===e.offsetParent}(e))return!1;var t=h(e),o=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}}(n),i=function(e){return e!==window?{x:e.scrollLeft+h(e).left,y:e.scrollTop+h(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}}(n),r=t.width,f=t.height,u=t.top,m=t.left,g=u+f,v=m+r;return function(){var e=u+f*c,t=v-r*c,n=g-f*c,h=m+r*c,w=i.y+s,p=i.x-d+o.width,E=i.y-a+o.height,y=i.x+l;return e<E&&n>w&&h<p&&t>y}()}(e=t[r])?!0===i?(e.setAttribute("data-emergence","hidden"),e.className=e.className,u(e,"reset")):!1===i&&u(e,"noreset"):(e.setAttribute("data-emergence","visible"),e.className=e.className,u(e,"visible"));o||f.disengage()},f.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",g,!1),n.removeEventListener("resize",g,!1)):(n.detachEvent("onscroll",g),n.detachEvent("onresize",g)),clearTimeout(t)},f});