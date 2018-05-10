/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (20:0)\\nYou may need an appropriate loader to handle this file type.\\n|   render(5\\n|     \\n| }\\n| \\n| const addHistory = (keyword) => {\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGlzdG9yeS5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/history.js\n");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let history = __webpack_require__(/*! ../src/history */ \"./src/history.js\")\n\nhistory.init({\n  el:\"#history-list\",\n  onClick:function(keyword,e){\n    console.log(keyword);\n  },\n  onDelete:function(keyword,e){\n    e.stopPropagation();\n    history.deleteHistory(keyword)\n  }\n})\n\nhistory.addHistory('a');\nhistory.addHistory('b');\nhistory.addHistory('c');\nhistory.deleteHistory('c');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0L3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3Rlc3QuanM/MzdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaGlzdG9yeSA9IHJlcXVpcmUoJy4uL3NyYy9oaXN0b3J5JylcblxuaGlzdG9yeS5pbml0KHtcbiAgZWw6XCIjaGlzdG9yeS1saXN0XCIsXG4gIG9uQ2xpY2s6ZnVuY3Rpb24oa2V5d29yZCxlKXtcbiAgICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcbiAgfSxcbiAgb25EZWxldGU6ZnVuY3Rpb24oa2V5d29yZCxlKXtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGhpc3RvcnkuZGVsZXRlSGlzdG9yeShrZXl3b3JkKVxuICB9XG59KVxuXG5oaXN0b3J5LmFkZEhpc3RvcnkoJ2EnKTtcbmhpc3RvcnkuYWRkSGlzdG9yeSgnYicpO1xuaGlzdG9yeS5hZGRIaXN0b3J5KCdjJyk7XG5oaXN0b3J5LmRlbGV0ZUhpc3RvcnkoJ2MnKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./test/test.js\n");

/***/ })

/******/ });