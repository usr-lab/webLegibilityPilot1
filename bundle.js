(()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}window.onload=function(){var t,o=new URLSearchParams(window.location.search).get("environment");t="example"===o?"/assets/example.png":"twoGoals"===o?"/assets/two_goals.png":"manyGoals"===o?"/assets/many_goals.png":"https://picsum.photos/500/500",document.getElementById("environment").src=t;var r=document.getElementById("paint-canvas"),a=r.getContext("2d"),i=r.getBoundingClientRect();function s(e){return[e.clientX-i.left,e.clientY-i.top]}function c(){a.clearRect(0,0,r.width,r.height)}var l,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=[],this.y=[],this.time=[]}var t,o;return t=e,(o=[{key:"add",value:function(e,t){this.x.push(e),this.y.push(t),this.time.push(Date.now())}}])&&n(t.prototype,o),e}(),p=!1;a.strokeStyle="black",a.lineWidth=5,r.addEventListener("mousedown",(function(t){var n;if(!p){p=!0,c(),a.beginPath(),l=new u;var o=s(t);(n=l).add.apply(n,e(o)),a.moveTo.apply(a,e(o))}})),r.addEventListener("mousemove",(function(t){if(p){var n,o=s(t);(n=l).add.apply(n,e(o)),a.lineTo.apply(a,e(o)),a.stroke()}})),r.addEventListener("mouseup",(function(t){var n,o=s(t);(n=l).add.apply(n,e(o)),a.moveTo.apply(a,e(o)),p=!1,window.parent.postMessage(l,"*")})),document.getElementById("clear").addEventListener("click",(function(){c(),l=new u,window.parent.postMessage(l,"*")}))}})();