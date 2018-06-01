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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Api_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Api/article */ \"./src/Api/article.js\");\n\n\nObject(_src_Api_article__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFydGljbGUgZnJvbSAnLi9zcmMvQXBpL2FydGljbGUnXG5cbmFydGljbGUoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./src/Api/article.js":
/*!****************************!*\
  !*** ./src/Api/article.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Util_send__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Util/send */ \"./src/Util/send.js\");\n\n\nconst read = () => {\n  let url = '/api/article/read'\n  _Util_send__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url, data=>{\n    console.log(data);\n  }, ()=>{\n    throw \"error\"\n  })\n}\n\nconst output = {\n  read\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (read);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBpL2FydGljbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBpL2FydGljbGUuanM/MGU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VuZCBmcm9tICcuLy4uL1V0aWwvc2VuZCdcblxuY29uc3QgcmVhZCA9ICgpID0+IHtcbiAgbGV0IHVybCA9ICcvYXBpL2FydGljbGUvcmVhZCdcbiAgc2VuZC5nZXQodXJsLCBkYXRhPT57XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH0sICgpPT57XG4gICAgdGhyb3cgXCJlcnJvclwiXG4gIH0pXG59XG5cbmNvbnN0IG91dHB1dCA9IHtcbiAgcmVhZFxufVxuXG5leHBvcnQgZGVmYXVsdCByZWFkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Api/article.js\n");

/***/ }),

/***/ "./src/Util/send.js":
/*!**************************!*\
  !*** ./src/Util/send.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ok = true;\nconst list = [{\n  id: '1',\n  content: 'hello',\n  desc: 'my name is mu!'\n}]\nconst get = (url, success_hook, fail_hook) => {\n  if (ok) {\n    console.log(url);\n    success_hook(list)\n  } else {\n    fail_hook()\n  }\n}\n\nconst output = {\n  get\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (output);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbC9zZW5kLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwvc2VuZC5qcz9jNGU5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9rID0gdHJ1ZTtcbmNvbnN0IGxpc3QgPSBbe1xuICBpZDogJzEnLFxuICBjb250ZW50OiAnaGVsbG8nLFxuICBkZXNjOiAnbXkgbmFtZSBpcyBtdSEnXG59XVxuY29uc3QgZ2V0ID0gKHVybCwgc3VjY2Vzc19ob29rLCBmYWlsX2hvb2spID0+IHtcbiAgaWYgKG9rKSB7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICBzdWNjZXNzX2hvb2sobGlzdClcbiAgfSBlbHNlIHtcbiAgICBmYWlsX2hvb2soKVxuICB9XG59XG5cbmNvbnN0IG91dHB1dCA9IHtcbiAgZ2V0XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgb3V0cHV0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Util/send.js\n");

/***/ })

/******/ });