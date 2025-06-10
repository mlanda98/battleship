/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/computerTurn.js":
/*!*************************************!*\
  !*** ./src/modules/computerTurn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computerTurn)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");


function computerTurn(player, renderBoard, endGame) {
  var x;
  var y;
  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (!player.gameboard.isValidAttack(x, y));
  player.receiveAttack(x, y);
  renderBoard('playerBoard', player.gameboard, false);
  if (player.allShipsSunk()) {
    endGame('Game over! All your ships are sunk');
  }
}

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable no-plusplus */

var Gameboard = /*#__PURE__*/function () {
  function Gameboard(size) {
    _classCallCheck(this, Gameboard);
    this.size = size;
    this.board = this.createBoard();
    this.ships = []; // Array to hold placed ships
  }
  return _createClass(Gameboard, [{
    key: "createBoard",
    value: function createBoard() {
      var board = [];
      for (var i = 0; i < this.size; i++) {
        board.push(Array(this.size).fill(null));
      }
      return board;
    }
  }, {
    key: "placeShip",
    value: function placeShip(ship, x, y, orientation) {
      var _this = this;
      var shipCells = [];
      var shipObj = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](ship.length);
      var shipArray = Array.from({
        length: ship.length
      }, function () {
        return null;
      });
      for (var i = 0; i < shipArray.length; i++) {
        var newX = orientation === 'horizontal' ? x + i : x;
        var newY = orientation === 'vertical' ? y + i : y;
        if (newX >= this.size || newY >= this.size) return false; // out of bounds check
        if (this.board[newX][newY] !== null) return false; // overlap check
        shipCells.push({
          x: newX,
          y: newY
        });
      }
      shipCells.forEach(function (cell) {
        _this.board[cell.x][cell.y] = shipObj;
      });
      this.ships.push({
        ship: shipObj,
        cells: shipCells
      });
      return true;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      if (this.board[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        var ship = this.board[x][y];
        ship.hit(y);
        this.board[x][y] = 'hit';
        return {
          hit: true,
          ship: ship
        };
      }
      this.board[x][y] = 'miss';
      return {
        hit: false
      };
    }
  }, {
    key: "isValidAttack",
    value: function isValidAttack(x, y) {
      if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
        return false;
      }
      if (this.board[x][y] === 'hit' || this.board[x][y] === 'miss') {
        return false;
      }
      return true;
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      for (var i = 0; i < this.ships.length; i++) {
        if (!this.ships[i].ship.isSunk()) {
          return false;
        }
      }
      return true;
    }
  }]);
}();


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Player = /*#__PURE__*/function () {
  function Player(isHuman, boardSize) {
    _classCallCheck(this, Player);
    this.isHuman = isHuman;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](boardSize);
  }
  return _createClass(Player, [{
    key: "placeShip",
    value: function placeShip(ship, x, y, orientation) {
      return this.gameboard.placeShip(ship, x, y, orientation);
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      return this.gameboard.receiveAttack(x, y);
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      return this.gameboard.allShipsSunk();
    }
  }]);
}();


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);
    this.length = length;
    this.hits = new Array(length).fill(false);
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      var index = this.hits.findIndex(function (hit) {
        return !hit;
      });
      if (index !== -1) {
        this.hits[index] = true;
      }
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hits.every(function (hit) {
        return hit;
      });
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

body.light-mode {
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  color: #111;
}

body.dark-mode {
  background: linear-gradient(to right, #141e30, #243b55);
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.header h1 {
  font-style: 3rem;
  text-shadow: 1px 1px #00000030;
}

#toggle-theme {
  background-color: transparent;
  border: 2px solid currentColor;
  color: inherit;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#toggle-theme:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.gameboard {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 35px);
  grid-template-rows: repeat(10, 35px);
  gap: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
}

.board div {
  width: 35px;
  height: 35px;
  background-color: #1a3b6d;
  border: 1px solid #334;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.1s ease;
}

.board div:hover {
  background-color: #3c5c9b;
  transform: scale(1.1);
}

.board-title {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.lower-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}


.hit {
  background-color: crimson !important;
  animation: pop 0.3s ease;
}

.miss {
  background-color: #ccc !important;
  animation: fadeOut 0.3s ease;
}

.ship {
  background-color: #2893ff;
}

button {
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #00c853;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  border-radius: 5px;
  color: white;
  
}

button:hover {
  background-color: #00a543;
}

#messages {
  font-size: 1.2rem;
  min-height: 30px;
  text-align: center;
}

.clickable {
  cursor: pointer;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .gameboard {
    flex-direction: column;
    gap: 20px;
  }

  .board {
    grid-template-columns: repeat(10, 25px);
    grid-template-rows: repeat(10, 25px);
  }
  

  .board div {
    width: 25px;
    height: 25px;

  }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,4DAA4D;EAC5D,uDAAuD;AACzD;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,uDAAuD;EACvD,WAAW;AACb;;AAEA;EACE,uDAAuD;EACvD,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,QAAQ;EACR,oCAAoC;EACpC,aAAa;EACb,kBAAkB;EAClB,uCAAuC;EACvC,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,sDAAsD;AACxD;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;AACX;;;AAGA;EACE,oCAAoC;EACpC,wBAAwB;AAC1B;;AAEA;EACE,iCAAiC;EACjC,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,wCAAwC;EACxC,sCAAsC;EACtC,kBAAkB;EAClB,YAAY;;AAEd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,sBAAsB;IACtB,SAAS;EACX;;EAEA;IACE,uCAAuC;IACvC,oCAAoC;EACtC;;;EAGA;IACE,WAAW;IACX,YAAY;;EAEd;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n.container {\n  max-width: 1200px;\n  margin: auto;\n  padding: 20px;\n}\n\nbody.light-mode {\n  background: linear-gradient(to right, #c9d6ff, #e2e2e2);\n  color: #111;\n}\n\nbody.dark-mode {\n  background: linear-gradient(to right, #141e30, #243b55);\n  color: #fff;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 30px;\n  flex-wrap: wrap;\n}\n\n.header h1 {\n  font-style: 3rem;\n  text-shadow: 1px 1px #00000030;\n}\n\n#toggle-theme {\n  background-color: transparent;\n  border: 2px solid currentColor;\n  color: inherit;\n  font-size: 1rem;\n  padding: 8px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n#toggle-theme:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.gameboard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  margin-top: 40px;\n  flex-wrap: wrap;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 35px);\n  grid-template-rows: repeat(10, 35px);\n  gap: 2px;\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  margin-bottom: 15px;\n}\n\n.board div {\n  width: 35px;\n  height: 35px;\n  background-color: #1a3b6d;\n  border: 1px solid #334;\n  border-radius: 4px;\n  transition: background-color 0.3s, transform 0.1s ease;\n}\n\n.board div:hover {\n  background-color: #3c5c9b;\n  transform: scale(1.1);\n}\n\n.board-title {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n}\n.lower-section {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n}\n\n\n.hit {\n  background-color: crimson !important;\n  animation: pop 0.3s ease;\n}\n\n.miss {\n  background-color: #ccc !important;\n  animation: fadeOut 0.3s ease;\n}\n\n.ship {\n  background-color: #2893ff;\n}\n\nbutton {\n  padding: 12px 24px;\n  font-size: 1rem;\n  cursor: pointer;\n  background-color: #00c853;\n  border: none;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);\n  transition: background-color 0.3s ease;\n  border-radius: 5px;\n  color: white;\n  \n}\n\nbutton:hover {\n  background-color: #00a543;\n}\n\n#messages {\n  font-size: 1.2rem;\n  min-height: 30px;\n  text-align: center;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n@keyframes pop {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .gameboard {\n    flex-direction: column;\n    gap: 20px;\n  }\n\n  .board {\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n  }\n  \n\n  .board div {\n    width: 25px;\n    height: 25px;\n\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ship */ "./src/modules/ship.js");
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player */ "./src/modules/player.js");
/* harmony import */ var _modules_computerTurn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/computerTurn */ "./src/modules/computerTurn.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable radix */





var player;
var computer;
var messagesElement;
var currentPlayer;
function endGame(message) {
  messagesElement.textContent = message;
}
function gameLoop() {
  console.log('Start game loop');
  renderBoard('computerBoard', computer.gameboard, true);
  renderBoard('playerBoard', player.gameboard, false);
  if (player.gameboard.allShipsSunk()) {
    console.log('player has sunk all ships');
    endGame('Game Over! Computer wins!');
    return;
  }
  if (computer.gameboard.allShipsSunk()) {
    console.log('computer has sunk all ships');
    endGame('Game Over! You win!');
    return;
  }
  if (currentPlayer === computer) {
    setTimeout(function () {
      (0,_modules_computerTurn__WEBPACK_IMPORTED_MODULE_2__["default"])(player, renderBoard, endGame);
      switchTurn();
      gameLoop();
    }, 1000);
  }
}
function switchTurn() {
  currentPlayer = currentPlayer === player ? computer : player;
}
function renderBoard(boardId, gameboard, clickable) {
  var boardElement = document.getElementById(boardId);
  boardElement.innerHTML = '';
  var _loop = function _loop(y) {
    var _loop2 = function _loop2(x) {
      var cell = document.createElement('div');
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.classList.add('cell');
      if (gameboard.board[x][y] instanceof _modules_ship__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        cell.classList.add('ship');
      } else if (gameboard.board[x][y] === 'hit') {
        cell.classList.add('hit');
      } else if (gameboard.board[x][y] === 'miss') {
        cell.classList.add('miss');
      }
      if (clickable && currentPlayer === player) {
        cell.classList.add('clickable');
        cell.addEventListener('click', function () {
          if (currentPlayer === player && gameboard.isValidAttack(x, y)) {
            var attackResult = gameboard.receiveAttack(x, y);
            if (attackResult.hit) {
              cell.classList.add('hit');
              if (gameboard.allShipsSunk()) {
                endGame('You win! All computer ships are sunk');
              } else {
                switchTurn();
                setTimeout(function () {
                  gameLoop();
                }, 1000);
              }
            } else {
              cell.classList.add('miss');
              cell.classList.remove('clickable');
              switchTurn();
              setTimeout(function () {
                gameLoop();
              }, 1000);
            }
          }
        });
      }
      boardElement.appendChild(cell);
    };
    for (var x = 0; x < gameboard.size; x++) {
      _loop2(x);
    }
  };
  for (var y = 0; y < gameboard.size; y++) {
    _loop(y);
  }
  if (currentPlayer === player) {
    messagesElement.textContent = "Your turn! Click on oppenent's board to attack";
  } else {
    messagesElement.textContent = "Computer's turn";
  }
}
function placeShipsRandomly(gameboard) {
  var shipLengths = [5, 4, 3, 4, 2];
  for (var _i = 0, _shipLengths = shipLengths; _i < _shipLengths.length; _i++) {
    var length = _shipLengths[_i];
    var x = Math.floor(Math.random() * gameboard.size);
    var y = Math.floor(Math.random() * gameboard.size);
    var orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    while (!gameboard.placeShip(new _modules_ship__WEBPACK_IMPORTED_MODULE_0__["default"](length), x, y, orientation)) {
      x = Math.floor(Math.random() * gameboard.size);
      y = Math.floor(Math.random() * gameboard.size);
      orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    }
  }
}
function startGame() {
  player = new _modules_player__WEBPACK_IMPORTED_MODULE_1__["default"](true, 10);
  computer = new _modules_player__WEBPACK_IMPORTED_MODULE_1__["default"](false, 10);
  messagesElement = document.getElementById('messages');
  currentPlayer = player;
  placeShipsRandomly(player.gameboard);
  placeShipsRandomly(computer.gameboard);
  renderBoard('playerBoard', player.gameboard, false);
  renderBoard('computerBoard', computer.gameboard, true);
  gameLoop();
}
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('toggle-theme').addEventListener('click', function () {
  var _document = document,
    body = _document.body;
  var toggle = document.getElementById('toggle-theme');
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  if (body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Light Mode';
  } else {
    toggle.textContent = '🌙 Dark Mode';
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFL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Z0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDdEUsSUFBQVMsU0FBQSxHQUFpQmxCLFFBQVE7SUFBakJtQixJQUFJLEdBQUFELFNBQUEsQ0FBSkMsSUFBSTtFQUNaLElBQU1DLE1BQU0sR0FBR3BCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUV0RGtCLElBQUksQ0FBQ1osU0FBUyxDQUFDYSxNQUFNLENBQUMsV0FBVyxDQUFDO0VBQ2xDRCxJQUFJLENBQUNaLFNBQVMsQ0FBQ2EsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUVuQyxJQUFJRCxJQUFJLENBQUNaLFNBQVMsQ0FBQ2MsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0lBQ3hDRCxNQUFNLENBQUM3QixXQUFXLEdBQUcsZUFBZTtFQUN0QyxDQUFDLE1BQU07SUFDTDZCLE1BQU0sQ0FBQzdCLFdBQVcsR0FBRyxjQUFjO0VBQ3JDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyVHVybi5qcyIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vZXNsaW50LXByZXR0aWVyLWJhYmVsLXBhY2thZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50LXByZXR0aWVyLWJhYmVsLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vZXNsaW50LXByZXR0aWVyLWJhYmVsLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXNsaW50LXByZXR0aWVyLWJhYmVsLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VzbGludC1wcmV0dGllci1iYWJlbC1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2VzbGludC1wcmV0dGllci1iYWJlbC1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2VzbGludC1wcmV0dGllci1iYWJlbC1wYWNrYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXNsaW50LXByZXR0aWVyLWJhYmVsLXBhY2thZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXNsaW50LXByZXR0aWVyLWJhYmVsLXBhY2thZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VzbGludC1wcmV0dGllci1iYWJlbC1wYWNrYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9lc2xpbnQtcHJldHRpZXItYmFiZWwtcGFja2FnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVyVHVybihwbGF5ZXIsIHJlbmRlckJvYXJkLCBlbmRHYW1lKSB7XG4gIGxldCB4O1xuICBsZXQgeTtcbiAgZG8ge1xuICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfSB3aGlsZSAoIXBsYXllci5nYW1lYm9hcmQuaXNWYWxpZEF0dGFjayh4LCB5KSk7XG5cbiAgcGxheWVyLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIHJlbmRlckJvYXJkKCdwbGF5ZXJCb2FyZCcsIHBsYXllci5nYW1lYm9hcmQsIGZhbHNlKTtcblxuICBpZiAocGxheWVyLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgZW5kR2FtZSgnR2FtZSBvdmVyISBBbGwgeW91ciBzaGlwcyBhcmUgc3VuaycpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBzID0gW107IC8vIEFycmF5IHRvIGhvbGQgcGxhY2VkIHNoaXBzXG4gIH1cblxuICBjcmVhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgIGJvYXJkLnB1c2goQXJyYXkodGhpcy5zaXplKS5maWxsKG51bGwpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgc2hpcENlbGxzID0gW107XG4gICAgY29uc3Qgc2hpcE9iaiA9IG5ldyBTaGlwKHNoaXAubGVuZ3RoKTtcblxuICAgIGNvbnN0IHNoaXBBcnJheSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNoaXAubGVuZ3RoIH0sICgpID0+IG51bGwpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5ld1ggPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8geCArIGkgOiB4O1xuICAgICAgY29uc3QgbmV3WSA9IG9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8geSArIGkgOiB5O1xuXG4gICAgICBpZiAobmV3WCA+PSB0aGlzLnNpemUgfHwgbmV3WSA+PSB0aGlzLnNpemUpIHJldHVybiBmYWxzZTsgLy8gb3V0IG9mIGJvdW5kcyBjaGVja1xuICAgICAgaWYgKHRoaXMuYm9hcmRbbmV3WF1bbmV3WV0gIT09IG51bGwpIHJldHVybiBmYWxzZTsgLy8gb3ZlcmxhcCBjaGVja1xuICAgICAgc2hpcENlbGxzLnB1c2goeyB4OiBuZXdYLCB5OiBuZXdZIH0pO1xuICAgIH1cblxuICAgIHNoaXBDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkW2NlbGwueF1bY2VsbC55XSA9IHNoaXBPYmo7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNoaXBzLnB1c2goeyBzaGlwOiBzaGlwT2JqLCBjZWxsczogc2hpcENlbGxzIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgc2hpcC5oaXQoeSk7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ2hpdCc7XG4gICAgICByZXR1cm4geyBoaXQ6IHRydWUsIHNoaXAgfTtcbiAgICB9XG4gICAgdGhpcy5ib2FyZFt4XVt5XSA9ICdtaXNzJztcbiAgICByZXR1cm4geyBoaXQ6IGZhbHNlIH07XG4gIH1cblxuICBpc1ZhbGlkQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLnNpemUgfHwgeSA8IDAgfHwgeSA+PSB0aGlzLnNpemUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gPT09ICdoaXQnIHx8IHRoaXMuYm9hcmRbeF1beV0gPT09ICdtaXNzJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5zaGlwc1tpXS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihpc0h1bWFuLCBib2FyZFNpemUpIHtcbiAgICB0aGlzLmlzSHVtYW4gPSBpc0h1bWFuO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChib2FyZFNpemUpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHksIG9yaWVudGF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBvcmllbnRhdGlvbik7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmhpdHMuZmluZEluZGV4KChoaXQpID0+ICFoaXQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuaGl0c1tpbmRleF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmV2ZXJ5KChoaXQpID0+IGhpdCk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuYm9keS5saWdodC1tb2RlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzlkNmZmLCAjZTJlMmUyKTtcbiAgY29sb3I6ICMxMTE7XG59XG5cbmJvZHkuZGFyay1tb2RlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTQxZTMwLCAjMjQzYjU1KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgZm9udC1zdHlsZTogM3JlbTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDAwMDMwO1xufVxuXG4jdG9nZ2xlLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbiN0b2dnbGUtdGhlbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5nYW1lYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpO1xuICBnYXA6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvYXJkIGRpdiB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTNiNmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xufVxuXG4uYm9hcmQgZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNWM5YjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYm9hcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5sb3dlci1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogcG9wIDAuM3MgZWFzZTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzIGVhc2U7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4OTNmZjtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzg1MztcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIFxufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNTQzO1xufVxuXG4jbWVzc2FnZXMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHBvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZ2FtZWJvYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5ib2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcbiAgfVxuICBcblxuICAuYm9hcmQgZGl2IHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG5cbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxRQUFRO0VBQ1Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7OztBQUdBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxvQ0FBb0M7RUFDdEM7OztFQUdBO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0VBRWQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG5ib2R5LmxpZ2h0LW1vZGUge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzlkNmZmLCAjZTJlMmUyKTtcXG4gIGNvbG9yOiAjMTExO1xcbn1cXG5cXG5ib2R5LmRhcmstbW9kZSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNDFlMzAsICMyNDNiNTUpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHtcXG4gIGZvbnQtc3R5bGU6IDNyZW07XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjMDAwMDAwMzA7XFxufVxcblxcbiN0b2dnbGUtdGhlbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG5cXG4jdG9nZ2xlLXRoZW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICBnYXA6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uYm9hcmQgZGl2IHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhM2I2ZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5ib2FyZCBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNjNWM5YjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5sb3dlci1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uICFpbXBvcnRhbnQ7XFxuICBhbmltYXRpb246IHBvcCAwLjNzIGVhc2U7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcXG4gIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzIGVhc2U7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODkzZmY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgXFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhNTQzO1xcbn1cXG5cXG4jbWVzc2FnZXMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQGtleWZyYW1lcyBwb3Age1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5nYW1lYm9hcmQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjVweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KTtcXG4gIH1cXG4gIFxcblxcbiAgLmJvYXJkIGRpdiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuXFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJhZGl4ICovXG5cbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9zaGlwJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9tb2R1bGVzL3BsYXllcic7XG5pbXBvcnQgY29tcHV0ZXJUdXJuIGZyb20gJy4vbW9kdWxlcy9jb21wdXRlclR1cm4nO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sZXQgcGxheWVyO1xubGV0IGNvbXB1dGVyO1xubGV0IG1lc3NhZ2VzRWxlbWVudDtcbmxldCBjdXJyZW50UGxheWVyO1xuXG5mdW5jdGlvbiBlbmRHYW1lKG1lc3NhZ2UpIHtcbiAgbWVzc2FnZXNFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGNvbnNvbGUubG9nKCdTdGFydCBnYW1lIGxvb3AnKTtcbiAgcmVuZGVyQm9hcmQoJ2NvbXB1dGVyQm9hcmQnLCBjb21wdXRlci5nYW1lYm9hcmQsIHRydWUpO1xuICByZW5kZXJCb2FyZCgncGxheWVyQm9hcmQnLCBwbGF5ZXIuZ2FtZWJvYXJkLCBmYWxzZSk7XG5cbiAgaWYgKHBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBjb25zb2xlLmxvZygncGxheWVyIGhhcyBzdW5rIGFsbCBzaGlwcycpO1xuICAgIGVuZEdhbWUoJ0dhbWUgT3ZlciEgQ29tcHV0ZXIgd2lucyEnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGNvbnNvbGUubG9nKCdjb21wdXRlciBoYXMgc3VuayBhbGwgc2hpcHMnKTtcbiAgICBlbmRHYW1lKCdHYW1lIE92ZXIhIFlvdSB3aW4hJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IGNvbXB1dGVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb21wdXRlclR1cm4ocGxheWVyLCByZW5kZXJCb2FyZCwgZW5kR2FtZSk7XG4gICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgICBnYW1lTG9vcCgpO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFR1cm4oKSB7XG4gIGN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyID09PSBwbGF5ZXIgPyBjb21wdXRlciA6IHBsYXllcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQm9hcmQoYm9hcmRJZCwgZ2FtZWJvYXJkLCBjbGlja2FibGUpIHtcbiAgY29uc3QgYm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9hcmRJZCk7XG4gIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGdhbWVib2FyZC5zaXplOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdhbWVib2FyZC5zaXplOyB4KyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNlbGwuZGF0YXNldC54ID0geDtcbiAgICAgIGNlbGwuZGF0YXNldC55ID0geTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuXG4gICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkLmJvYXJkW3hdW3ldID09PSAnaGl0Jykge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmQuYm9hcmRbeF1beV0gPT09ICdtaXNzJykge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsaWNrYWJsZSAmJiBjdXJyZW50UGxheWVyID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyICYmIGdhbWVib2FyZC5pc1ZhbGlkQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgICAgIGlmIChhdHRhY2tSZXN1bHQuaGl0KSB7XG4gICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBlbmRHYW1lKCdZb3Ugd2luISBBbGwgY29tcHV0ZXIgc2hpcHMgYXJlIHN1bmsnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBnYW1lTG9vcCgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2FibGUnKTtcbiAgICAgICAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lTG9vcCgpO1xuICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcikge1xuICAgIG1lc3NhZ2VzRWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICBcIllvdXIgdHVybiEgQ2xpY2sgb24gb3BwZW5lbnQncyBib2FyZCB0byBhdHRhY2tcIjtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlc0VsZW1lbnQudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyJ3MgdHVyblwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShnYW1lYm9hcmQpIHtcbiAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgNCwgMl07XG4gIGZvciAoY29uc3QgbGVuZ3RoIG9mIHNoaXBMZW5ndGhzKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuc2l6ZSk7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBnYW1lYm9hcmQuc2l6ZSk7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG5cbiAgICB3aGlsZSAoIWdhbWVib2FyZC5wbGFjZVNoaXAobmV3IFNoaXAobGVuZ3RoKSwgeCwgeSwgb3JpZW50YXRpb24pKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkLnNpemUpO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVib2FyZC5zaXplKTtcbiAgICAgIG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgcGxheWVyID0gbmV3IFBsYXllcih0cnVlLCAxMCk7XG4gIGNvbXB1dGVyID0gbmV3IFBsYXllcihmYWxzZSwgMTApO1xuXG4gIG1lc3NhZ2VzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlcycpO1xuXG4gIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgcGxhY2VTaGlwc1JhbmRvbWx5KHBsYXllci5nYW1lYm9hcmQpO1xuICBwbGFjZVNoaXBzUmFuZG9tbHkoY29tcHV0ZXIuZ2FtZWJvYXJkKTtcblxuICByZW5kZXJCb2FyZCgncGxheWVyQm9hcmQnLCBwbGF5ZXIuZ2FtZWJvYXJkLCBmYWxzZSk7XG4gIHJlbmRlckJvYXJkKCdjb21wdXRlckJvYXJkJywgY29tcHV0ZXIuZ2FtZWJvYXJkLCB0cnVlKTtcblxuICBnYW1lTG9vcCgpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS10aGVtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXRoZW1lJyk7XG5cbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdsaWdodC1tb2RlJyk7XG5cbiAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLW1vZGUnKSkge1xuICAgIHRvZ2dsZS50ZXh0Q29udGVudCA9ICfimIDvuI8gTGlnaHQgTW9kZSc7XG4gIH0gZWxzZSB7XG4gICAgdG9nZ2xlLnRleHRDb250ZW50ID0gJ/CfjJkgRGFyayBNb2RlJztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiU2hpcCIsIlBsYXllciIsImNvbXB1dGVyVHVybiIsInBsYXllciIsInJlbmRlckJvYXJkIiwiZW5kR2FtZSIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2FtZWJvYXJkIiwiaXNWYWxpZEF0dGFjayIsInJlY2VpdmVBdHRhY2siLCJhbGxTaGlwc1N1bmsiLCJHYW1lYm9hcmQiLCJzaXplIiwiX2NsYXNzQ2FsbENoZWNrIiwiYm9hcmQiLCJjcmVhdGVCb2FyZCIsInNoaXBzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJpIiwicHVzaCIsIkFycmF5IiwiZmlsbCIsInBsYWNlU2hpcCIsInNoaXAiLCJvcmllbnRhdGlvbiIsIl90aGlzIiwic2hpcENlbGxzIiwic2hpcE9iaiIsImxlbmd0aCIsInNoaXBBcnJheSIsImZyb20iLCJuZXdYIiwibmV3WSIsImZvckVhY2giLCJjZWxsIiwiY2VsbHMiLCJoaXQiLCJpc1N1bmsiLCJkZWZhdWx0IiwiaXNIdW1hbiIsImJvYXJkU2l6ZSIsImhpdHMiLCJpbmRleCIsImZpbmRJbmRleCIsImV2ZXJ5IiwiY29tcHV0ZXIiLCJtZXNzYWdlc0VsZW1lbnQiLCJjdXJyZW50UGxheWVyIiwibWVzc2FnZSIsInRleHRDb250ZW50IiwiZ2FtZUxvb3AiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInN3aXRjaFR1cm4iLCJib2FyZElkIiwiY2xpY2thYmxlIiwiYm9hcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIl9sb29wIiwiX2xvb3AyIiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNrUmVzdWx0IiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJzaGlwTGVuZ3RocyIsIl9pIiwiX3NoaXBMZW5ndGhzIiwic3RhcnRHYW1lIiwiX2RvY3VtZW50IiwiYm9keSIsInRvZ2dsZSIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==