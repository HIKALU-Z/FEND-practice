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

/***/ "./src/pagination.js":
/*!***************************!*\
  !*** ./src/pagination.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let list = [];\nlet el;\nlet onClick;\nlet onDelete;\nlet pageContainer;\nlet currentPage;\nlet maxBtnLength;\nlet onPagerClicked;\nlet totalPage;\nlet output = {\n  init,\n  render\n}\n\n\nfunction init(config) {\n  if (!config.el) {\n    throw 'Invalid element'\n  }\n  el = document.querySelector(config.el)\n  maxBtnLength = config.maxBtnLength || 5;\n  currentPage = config.config || 1;\n  totalPage = config.totalPage || 100;\n  onPagerClicked = config.onPagerClicked;\n  render()\n}\n\nfunction render() {\n  el.innerHTML = '';\n\n  let start = 1;\n  let end = maxBtnLength;\n  let middle = Math.ceil(maxBtnLength / 2);\n  let reachLeft = currentPage <= middle;\n  let reachRight = currentPage >= totalPage - middle;\n\n  if (reachLeft) {\n    start = 1;\n    end = maxBtnLength;\n  } else if (reachRight) {\n    start = totalPage - maxBtnLength;\n    end = totalPage;\n  } else {\n    start = currentPage - (middle - 1)\n    end = currentPage - (middle - 1)\n  }\n\n  if (totalPage < maxBtnLength) {\n    end = totalPage\n  }\n\n  for (var i = start; i <= end; i++) {\n    var btn = document.createElement('button');\n    btn.innerText = i;\n    btn.dataset.page = i;\n    btn.classList.add('pager');\n    if (i == currentPage) {\n      btn.classList.add('active');\n    }\n    btn.addEventListener('click', (function (i) {\n      return function (e) {\n        if (onPagerClicked) {\n          onPagerClicked(e, i)\n          render()\n        }\n      }\n    })(i))\n    el.appendChild(btn)\n  }\n\n}\n\n\n\nmodule.exports = output//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnaW5hdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uLmpzP2QxMzkiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGxpc3QgPSBbXTtcbmxldCBlbDtcbmxldCBvbkNsaWNrO1xubGV0IG9uRGVsZXRlO1xubGV0IHBhZ2VDb250YWluZXI7XG5sZXQgY3VycmVudFBhZ2U7XG5sZXQgbWF4QnRuTGVuZ3RoO1xubGV0IG9uUGFnZXJDbGlja2VkO1xubGV0IHRvdGFsUGFnZTtcbmxldCBvdXRwdXQgPSB7XG4gIGluaXQsXG4gIHJlbmRlclxufVxuXG5cbmZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XG4gIGlmICghY29uZmlnLmVsKSB7XG4gICAgdGhyb3cgJ0ludmFsaWQgZWxlbWVudCdcbiAgfVxuICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsKVxuICBtYXhCdG5MZW5ndGggPSBjb25maWcubWF4QnRuTGVuZ3RoIHx8IDU7XG4gIGN1cnJlbnRQYWdlID0gY29uZmlnLmNvbmZpZyB8fCAxO1xuICB0b3RhbFBhZ2UgPSBjb25maWcudG90YWxQYWdlIHx8IDEwMDtcbiAgb25QYWdlckNsaWNrZWQgPSBjb25maWcub25QYWdlckNsaWNrZWQ7XG4gIHJlbmRlcigpXG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgZWwuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGV0IHN0YXJ0ID0gMTtcbiAgbGV0IGVuZCA9IG1heEJ0bkxlbmd0aDtcbiAgbGV0IG1pZGRsZSA9IE1hdGguY2VpbChtYXhCdG5MZW5ndGggLyAyKTtcbiAgbGV0IHJlYWNoTGVmdCA9IGN1cnJlbnRQYWdlIDw9IG1pZGRsZTtcbiAgbGV0IHJlYWNoUmlnaHQgPSBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2UgLSBtaWRkbGU7XG5cbiAgaWYgKHJlYWNoTGVmdCkge1xuICAgIHN0YXJ0ID0gMTtcbiAgICBlbmQgPSBtYXhCdG5MZW5ndGg7XG4gIH0gZWxzZSBpZiAocmVhY2hSaWdodCkge1xuICAgIHN0YXJ0ID0gdG90YWxQYWdlIC0gbWF4QnRuTGVuZ3RoO1xuICAgIGVuZCA9IHRvdGFsUGFnZTtcbiAgfSBlbHNlIHtcbiAgICBzdGFydCA9IGN1cnJlbnRQYWdlIC0gKG1pZGRsZSAtIDEpXG4gICAgZW5kID0gY3VycmVudFBhZ2UgLSAobWlkZGxlIC0gMSlcbiAgfVxuXG4gIGlmICh0b3RhbFBhZ2UgPCBtYXhCdG5MZW5ndGgpIHtcbiAgICBlbmQgPSB0b3RhbFBhZ2VcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gaTtcbiAgICBidG4uZGF0YXNldC5wYWdlID0gaTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnZXInKTtcbiAgICBpZiAoaSA9PSBjdXJyZW50UGFnZSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAob25QYWdlckNsaWNrZWQpIHtcbiAgICAgICAgICBvblBhZ2VyQ2xpY2tlZChlLCBpKVxuICAgICAgICAgIHJlbmRlcigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KShpKSlcbiAgICBlbC5hcHBlbmRDaGlsZChidG4pXG4gIH1cblxufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBvdXRwdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagination.js\n");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let pagination = __webpack_require__(/*! ../src/pagination */ \"./src/pagination.js\")\n\npagination.init({\n  el:\"#pagination-container\",\n  onPagerClicked:function(e,num){\n    console.log(num);\n  }\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0L3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3Rlc3QuanM/MzdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4uL3NyYy9wYWdpbmF0aW9uJylcblxucGFnaW5hdGlvbi5pbml0KHtcbiAgZWw6XCIjcGFnaW5hdGlvbi1jb250YWluZXJcIixcbiAgb25QYWdlckNsaWNrZWQ6ZnVuY3Rpb24oZSxudW0pe1xuICAgIGNvbnNvbGUubG9nKG51bSk7XG4gIH1cbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./test/test.js\n");

/***/ })

/******/ });