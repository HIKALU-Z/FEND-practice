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

eval("// import {\n//   on\n// } from \"cluster\";\n\n\nlet list = [];\nlet el;\nlet onClick;\nlet onDelete;\n\n\nconst init = (config) => {\n  if (!config.el) {\n    throw 'Invalid root element!'\n  }\n  el = document.querySelector(config.el);\n  if (!el) {\n    throw 'Invalid Selector!'\n  }\n  onClick = config.onClick;\n  onDelete = config.onDelete;\n  syncToList()\n  render()\n\n  // return output\n}\n\nconst addHistory = (keyword) => {\n  if (list.includes(keyword)) {\n    return;\n  }\n  list.unshift(keyword);\n  syncToStorage()\n  render();\n}\n\nconst deleteHistory = (keyword) => {\n  let shitIndex = list.indexOf(keyword);\n  if (shitIndex == -1) {\n    return\n  } else {\n    list.splice(shitIndex, 1)\n    syncToStorage()\n    render()\n  }\n}\n\nconst clear = () => {\n  list = []\n}\n\nconst syncToStorage = () => {\n  setStorage('history-list', list)\n}\n\nconst syncToList = () => {\n  list = getStorage('history-list') || [];\n}\n\n\nconst setStorage = (keyword, val) => {\n  val = JSON.stringify(val)\n  localStorage.setItem(keyword, val)\n}\n\nconst getStorage = (keyword) => {\n  let val = localStorage.getItem(keyword);\n  val = JSON.parse(val);\n  return val;\n}\n\nconst render = () => {\n  list.forEach(keyword => {\n    let elRow = document.createElement('div')\n    elRow.classList.add('history');\n    elRow.innerHTML = `\n      <div class=\"text\">${keyword}</div>\n      <div class=\"tool\">\n        <span class=\"delete\">delete</span>\n      </div>\n    `\n    elRow.addEventListener('click', function (e) {\n      onClick(keyword,e)\n    })\n    el.appendChild(elRow)\n    elRow\n      .querySelector('.delete')\n      .addEventListener('click', function (e) {\n        onDelete(keyword,e)\n      })\n  });\n}\n\nlet output = {\n  init,\n  addHistory,\n  deleteHistory,\n  clear\n}\nmodule.exports = output//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGlzdG9yeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oaXN0b3J5LmpzPzcyNzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtcbi8vICAgb25cbi8vIH0gZnJvbSBcImNsdXN0ZXJcIjtcblxuXG5sZXQgbGlzdCA9IFtdO1xubGV0IGVsO1xubGV0IG9uQ2xpY2s7XG5sZXQgb25EZWxldGU7XG5cblxuY29uc3QgaW5pdCA9IChjb25maWcpID0+IHtcbiAgaWYgKCFjb25maWcuZWwpIHtcbiAgICB0aHJvdyAnSW52YWxpZCByb290IGVsZW1lbnQhJ1xuICB9XG4gIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZWwpO1xuICBpZiAoIWVsKSB7XG4gICAgdGhyb3cgJ0ludmFsaWQgU2VsZWN0b3IhJ1xuICB9XG4gIG9uQ2xpY2sgPSBjb25maWcub25DbGljaztcbiAgb25EZWxldGUgPSBjb25maWcub25EZWxldGU7XG4gIHN5bmNUb0xpc3QoKVxuICByZW5kZXIoKVxuXG4gIC8vIHJldHVybiBvdXRwdXRcbn1cblxuY29uc3QgYWRkSGlzdG9yeSA9IChrZXl3b3JkKSA9PiB7XG4gIGlmIChsaXN0LmluY2x1ZGVzKGtleXdvcmQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxpc3QudW5zaGlmdChrZXl3b3JkKTtcbiAgc3luY1RvU3RvcmFnZSgpXG4gIHJlbmRlcigpO1xufVxuXG5jb25zdCBkZWxldGVIaXN0b3J5ID0gKGtleXdvcmQpID0+IHtcbiAgbGV0IHNoaXRJbmRleCA9IGxpc3QuaW5kZXhPZihrZXl3b3JkKTtcbiAgaWYgKHNoaXRJbmRleCA9PSAtMSkge1xuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGxpc3Quc3BsaWNlKHNoaXRJbmRleCwgMSlcbiAgICBzeW5jVG9TdG9yYWdlKClcbiAgICByZW5kZXIoKVxuICB9XG59XG5cbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBsaXN0ID0gW11cbn1cblxuY29uc3Qgc3luY1RvU3RvcmFnZSA9ICgpID0+IHtcbiAgc2V0U3RvcmFnZSgnaGlzdG9yeS1saXN0JywgbGlzdClcbn1cblxuY29uc3Qgc3luY1RvTGlzdCA9ICgpID0+IHtcbiAgbGlzdCA9IGdldFN0b3JhZ2UoJ2hpc3RvcnktbGlzdCcpIHx8IFtdO1xufVxuXG5cbmNvbnN0IHNldFN0b3JhZ2UgPSAoa2V5d29yZCwgdmFsKSA9PiB7XG4gIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5d29yZCwgdmFsKVxufVxuXG5jb25zdCBnZXRTdG9yYWdlID0gKGtleXdvcmQpID0+IHtcbiAgbGV0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXdvcmQpO1xuICB2YWwgPSBKU09OLnBhcnNlKHZhbCk7XG4gIHJldHVybiB2YWw7XG59XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgbGlzdC5mb3JFYWNoKGtleXdvcmQgPT4ge1xuICAgIGxldCBlbFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxSb3cuY2xhc3NMaXN0LmFkZCgnaGlzdG9yeScpO1xuICAgIGVsUm93LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+JHtrZXl3b3JkfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2xcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIj5kZWxldGU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gICAgZWxSb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgb25DbGljayhrZXl3b3JkLGUpXG4gICAgfSlcbiAgICBlbC5hcHBlbmRDaGlsZChlbFJvdylcbiAgICBlbFJvd1xuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgb25EZWxldGUoa2V5d29yZCxlKVxuICAgICAgfSlcbiAgfSk7XG59XG5cbmxldCBvdXRwdXQgPSB7XG4gIGluaXQsXG4gIGFkZEhpc3RvcnksXG4gIGRlbGV0ZUhpc3RvcnksXG4gIGNsZWFyXG59XG5tb2R1bGUuZXhwb3J0cyA9IG91dHB1dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/history.js\n");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let history = __webpack_require__(/*! ../src/history */ \"./src/history.js\")\n\nhistory.init({\n  el:\"#history-list\",\n  onClick:function(keyword,e){\n    console.log(\"clicked\");\n  },\n  onDelete:function(keyword,e){\n    e.stopPropagation();\n    console.log(\"delete\");\n  }\n})\n\nhistory.addHistory('a');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0L3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3Rlc3QuanM/MzdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaGlzdG9yeSA9IHJlcXVpcmUoJy4uL3NyYy9oaXN0b3J5JylcblxuaGlzdG9yeS5pbml0KHtcbiAgZWw6XCIjaGlzdG9yeS1saXN0XCIsXG4gIG9uQ2xpY2s6ZnVuY3Rpb24oa2V5d29yZCxlKXtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gIH0sXG4gIG9uRGVsZXRlOmZ1bmN0aW9uKGtleXdvcmQsZSl7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcbiAgfVxufSlcblxuaGlzdG9yeS5hZGRIaXN0b3J5KCdhJyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./test/test.js\n");

/***/ })

/******/ });