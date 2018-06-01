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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Api_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Api/article */ \"./src/Api/article.js\");\n/* harmony import */ var _src_Router_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Router/router */ \"./src/Router/router.js\");\n\n\n\n// router.hello();\nObject(_src_Api_article__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n_src_Router_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFydGljbGUgZnJvbSAnLi9zcmMvQXBpL2FydGljbGUnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc3JjL1JvdXRlci9yb3V0ZXInO1xuXG4vLyByb3V0ZXIuaGVsbG8oKTtcbmFydGljbGUoKTtcbnJvdXRlci5pbml0KCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

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

/***/ "./src/Router/router.js":
/*!******************************!*\
  !*** ./src/Router/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Router {\n  constructor() {\n    this.currentHash = this.parseHash(window.location.hash) || 'home';\n    this.pageList = document.querySelectorAll('.page');\n    this.detectClick();\n    this.detectHash();\n    this.render();\n  }\n\n  detectClick() {\n    document.addEventListener('click', e => {\n      let target = e.target;\n      switch (target.nodeName) {\n        case \"A\":\n          this.go(target.href)\n          break;\n        default:\n          break;\n      }\n    })\n  }\n\n  detectHash() {\n    window.addEventListener('hashchange', e => {\n      this.go(window.location.hash)\n    })\n  }\n\n  go(hash) {\n    let oldValue = this.currentHash;\n    let newVlaue = this.parseHash(hash)\n    if (oldValue == newVlaue) {\n      return;\n    }\n    this.currentHash = newVlaue;\n    this.render()\n  }\n\n  render(selector) {\n    let content;\n    selector = selector || this.currentHash\n    this.clearPage();\n    content = document.getElementById(selector);\n    content.hidden = false;\n  }\n\n  clearPage() {\n    this.pageList.forEach(element => {\n      element.hidden = true;\n    });\n  }\n\n  parseHash(hash) {\n    let hashArr = hash.split('/')\n    return hashArr[hashArr.length - 1]\n  }\n}\n\n// 单例模式实体类\nlet instance;\n\nconst init = () => {\n  if (!instance) {\n    instance = new Router()\n  }\n  return instance;\n}\n\n// init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUm91dGVyL3JvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Sb3V0ZXIvcm91dGVyLmpzPzcyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50SGFzaCA9IHRoaXMucGFyc2VIYXNoKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB8fCAnaG9tZSc7XG4gICAgdGhpcy5wYWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlJyk7XG4gICAgdGhpcy5kZXRlY3RDbGljaygpO1xuICAgIHRoaXMuZGV0ZWN0SGFzaCgpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBkZXRlY3RDbGljaygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgc3dpdGNoICh0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgICB0aGlzLmdvKHRhcmdldC5ocmVmKVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBkZXRlY3RIYXNoKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZSA9PiB7XG4gICAgICB0aGlzLmdvKHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxuICAgIH0pXG4gIH1cblxuICBnbyhoYXNoKSB7XG4gICAgbGV0IG9sZFZhbHVlID0gdGhpcy5jdXJyZW50SGFzaDtcbiAgICBsZXQgbmV3VmxhdWUgPSB0aGlzLnBhcnNlSGFzaChoYXNoKVxuICAgIGlmIChvbGRWYWx1ZSA9PSBuZXdWbGF1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRIYXNoID0gbmV3VmxhdWU7XG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcmVuZGVyKHNlbGVjdG9yKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgc2VsZWN0b3IgPSBzZWxlY3RvciB8fCB0aGlzLmN1cnJlbnRIYXNoXG4gICAgdGhpcy5jbGVhclBhZ2UoKTtcbiAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xuICAgIGNvbnRlbnQuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBjbGVhclBhZ2UoKSB7XG4gICAgdGhpcy5wYWdlTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcGFyc2VIYXNoKGhhc2gpIHtcbiAgICBsZXQgaGFzaEFyciA9IGhhc2guc3BsaXQoJy8nKVxuICAgIHJldHVybiBoYXNoQXJyW2hhc2hBcnIubGVuZ3RoIC0gMV1cbiAgfVxufVxuXG4vLyDljZXkvovmqKHlvI/lrp7kvZPnsbtcbmxldCBpbnN0YW5jZTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlID0gbmV3IFJvdXRlcigpXG4gIH1cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBpbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdFxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Router/router.js\n");

/***/ }),

/***/ "./src/Util/send.js":
/*!**************************!*\
  !*** ./src/Util/send.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ok = true;\nconst list = [{\n  id: '1',\n  content: 'hello',\n  desc: 'my name is mu!'\n}]\n/**\n * 利用 get 方法传参\n * @param {String} url 请求的地址\n * @param {Function} success_hook 请求成功后的回调函数\n * @param {Function} fail_hook 请求失败后的回调函数 \n */\nconst get = (url, success_hook, fail_hook) => {\n  if (ok) {\n    console.log(url);\n    success_hook(list)\n  } else {\n    fail_hook()\n  }\n}\n\nconst output = {\n  get\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (output);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbC9zZW5kLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWwvc2VuZC5qcz9jNGU5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9rID0gdHJ1ZTtcbmNvbnN0IGxpc3QgPSBbe1xuICBpZDogJzEnLFxuICBjb250ZW50OiAnaGVsbG8nLFxuICBkZXNjOiAnbXkgbmFtZSBpcyBtdSEnXG59XVxuLyoqXG4gKiDliKnnlKggZ2V0IOaWueazleS8oOWPglxuICogQHBhcmFtIHtTdHJpbmd9IHVybCDor7fmsYLnmoTlnLDlnYBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN1Y2Nlc3NfaG9vayDor7fmsYLmiJDlip/lkI7nmoTlm57osIPlh73mlbBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZhaWxfaG9vayDor7fmsYLlpLHotKXlkI7nmoTlm57osIPlh73mlbAgXG4gKi9cbmNvbnN0IGdldCA9ICh1cmwsIHN1Y2Nlc3NfaG9vaywgZmFpbF9ob29rKSA9PiB7XG4gIGlmIChvaykge1xuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgc3VjY2Vzc19ob29rKGxpc3QpXG4gIH0gZWxzZSB7XG4gICAgZmFpbF9ob29rKClcbiAgfVxufVxuXG5jb25zdCBvdXRwdXQgPSB7XG4gIGdldFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG91dHB1dDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Util/send.js\n");

/***/ })

/******/ });