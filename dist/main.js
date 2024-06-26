(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}var n=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=e,this.hits=Array(e).fill(!1)},(r=[{key:"hit",value:function(){var t=this.hits.findIndex((function(t){return!t}));-1!==t&&(this.hits[t]=!0)}},{key:"isSunk",value:function(){return this.hits.every((function(t){return t}))}}])&&e(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function a(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}var u=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e,this.board=this.createBoard(),this.ships=[]},(e=[{key:"createBoard",value:function(){for(var t=[],e=0;e<this.size;e++)t.push(Array(this.size).fill(null));return t}},{key:"placeShip",value:function(t,e,r,o){for(var i=this,a=[],u=new n(t.length),s=Array.from({length:t.length},(function(){return null})),l=0;l<s.length;l++){var c="horizontal"===o?e+l:e,f="vertical"===o?r+l:r;if(c>=this.size||f>=this.size)return!1;if(null!==this.board[c][f])return!1;a.push({x:c,y:f})}return a.forEach((function(t){i.board[t.x][t.y]=u})),this.ships.push({ship:u,cells:a}),!0}},{key:"receiveAttack",value:function(t,e){if(this.board[t][e]instanceof n){var r=this.board[t][e];return r.hit(),this.board[t][e]="hit",{hit:!0,ship:r}}return{hit:!1}}},{key:"isValidAttack",value:function(t,e){return!(t<0||t>=this.size||e<0||e>=this.size)&&"hit"!==this.board[t][e]&&"miss"!==this.board[t][e]}},{key:"allShipsSunk",value:function(){for(var t=0;t<this.ships.length;t++)if(!this.ships[t].ship.isSunk())return!1;return!0}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function c(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}var f,h,m,y,p=function(){return t=function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isHuman=e,this.gameboard=new u(r)},(e=[{key:"placeShip",value:function(t,e,r,n){return this.gameboard.placeShip(t,e,r,n)}},{key:"receiveAttack",value:function(t,e){return this.gameboard.receiveAttack(t,e)}},{key:"allShipsSunk",value:function(){return this.gameboard.allShipsSunk()}}])&&l(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function b(t){m.textContent=t}function d(){S("computerBoard",h.gameboard,!0),S("playerBoard",f.gameboard,!1),f.gameboard.allShipsSunk()?b("Game Over! Computer wins!"):h.gameboard.allShipsSunk()&&b("Game Over! You win!"),y===h&&setTimeout((function(){!function(t,e,r){var n,o;do{n=Math.floor(10*Math.random()),o=Math.floor(10*Math.random())}while(!t.gameboard.isValidAttack(n,o));t.receiveAttack(n,o),e("playerBoard",t.gameboard,!1),t.allShipsSunk()&&r("Game over! All your ships are sunk")}(f,S,b),v(),d()}),1e3)}function v(){y=y===f?h:f}function S(t,e,r){var o=document.getElementById(t);o.innerHTML="";for(var i=function(t){for(var i=function(i){var a=document.createElement("div");a.dataset.x=i,a.dataset.y=t,e.board[i][t]instanceof n&&(e.board[i][t].isSunk()?a.classList.add("ship","sunk"):a.classList.add("ship")),r&&y===f&&(a.classList.add("clickable"),a.addEventListener("click",(function(){y===f&&(e.receiveAttack(i,t).hit?a.classList.add("hit"):a.classList.add("miss"),a.classList.remove("clickable"),e.allShipsSunk()?b("You win! All computer ships are sunk"):(v(),setTimeout((function(){d()}),1e3)))}))),o.appendChild(a)},a=0;a<e.size;a++)i(a)},a=0;a<e.size;a++)i(a);m.textContent=y===f?"Your turn! Click on oppenent's board to attack":"Computer's turn"}function k(t){for(var e=0,r=[5,4,3,4,2];e<r.length;e++)for(var o=r[e],i=Math.floor(Math.random()*t.size),a=Math.floor(Math.random()*t.size),u=Math.random()<.5?"horizontal":"vertical";!t.placeShip(new n(o),i,a,u);)i=Math.floor(Math.random()*t.size),a=Math.floor(Math.random()*t.size),u=Math.random()<.5?"horizontal":"vertical",console.log("Retry: (".concat(i,", ").concat(a,") with orientation ").concat(u))}document.getElementById("start-button").addEventListener("click",(function(){f=new p(!0,10),h=new p(!1,10),m=document.getElementById("messages"),y=f,k(f.gameboard),k(h.gameboard),S("playerBoard",f.gameboard,!1),S("computerBoard",h.gameboard,!0),d()}))})();