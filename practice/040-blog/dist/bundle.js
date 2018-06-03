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
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @author HIKALU\n * @since 2018年06月01日\n * @version 1.0\n */\n\nclass Router {\n  /**\n   * @property `currentHash` 当前 hash 地址\n   * - 默认指向 home 页面，如果 hash 不为空，则指向 hash 所在页面\n   * @property `pageList` 当前路由管理下的所有页面\n   * @method `detectClick` 监听点击事件，点击 Anchor 以后链接跳转\n   * @method `detectHashChange` 监听 window.hash 如果 hash 发生变化链接跳转\n   */\n  constructor() {\n    this.currentHash = this.parseHash(window.location.hash) || 'home';\n    this.pageList = document.querySelectorAll('.page');\n    this.detectClick();\n    this.detectHashChange();\n    this.go(window.location.hash, {\n      force: true\n    });\n  }\n\n  /**\n   * 监听点击事件\n   * - 如果点击源为 A 类型的 node 那么继续\n   * - 如果点击源含有 host 信息，说明为外站链接，不进行任何其他操作\n   * - 如果为站内链接，那么跳转至其 hash 所在位置\n   */\n  detectClick() {\n    document.addEventListener('click', e => {\n      let target = e.target;\n      switch (target.nodeName) {\n        case 'A':\n          // 如果有 host 属性，则证明是站外链接\n          if (target.host) {\n            return;\n          }\n          this.go(target.hash);\n          break;\n        default:\n          break;\n      }\n    });\n  }\n\n  /**\n   * 监听 hash 变化\n   * - 通过 hashchange 事件，监听 hash 变化，只要发生变化，就跳转至新 hash 所在位置\n   */\n  detectHashChange() {\n    window.addEventListener('hashchange', e => {\n      this.go(window.location.hash);\n    });\n  }\n\n  /**\n   * 链接跳转\n   * @main\n   * @param {String} hash 路由器通过 hash 控制页面的节点显示\n   * @param {Object} config 链接跳转方法的可选参数对象，包含以下参数\n   * - `hook` 事件回调钩子函数\n   * - `force` 是否强制跳转，以防第一次进入页面时 hash 值未变化不会触发跳转事件\n   */\n  go(hash, config = null) {\n    hash = hash || 'home'\n    let defaultConfig = {\n      force: false,\n    };\n    config = Object.assign({}, defaultConfig, config);\n    let oldValue = this.currentHash;\n    let newVlaue = this.parseHash(hash);\n    this.currentHash = newVlaue;\n\n    if (!config.force && oldValue == newVlaue) {\n      return;\n    }\n\n    let hasThisPage = this.checkPageExist(this.currentHash);\n    if (!hasThisPage) {\n      this.go('#/not-fount')\n      return;\n    }\n\n    this.currentHash = newVlaue;\n    this.render();\n  }\n\n  /**\n   * 判断页面是否存在\n   * @param {String} page\n   */\n  checkPageExist(page) {\n    return !!document.getElementById(page);\n  }\n\n  /**\n   * 渲染\n   * @param {String} selector 被选中的容器\n   */\n  render(selector) {\n    let content;\n    selector = selector || this.currentHash;\n    this.clearPage();\n    content = document.getElementById(selector);\n    if (!content) {\n      return;\n    }\n    this.showPage(content);\n  }\n\n  clearPage() {\n    this.pageList.forEach(element => {\n      element.hidden = true;\n    });\n  }\n  // 显示页面\n  showPage(content) {\n    content.hidden = false;\n  }\n\n/**\n * 转化 hash 编码\n * @param {String} hash\n */\n  parseHash(hash) {\n    let hashArr = hash.split('/');\n    return hashArr[hashArr.length - 1];\n  }\n}\n\n// 单例模式实体类\nlet instance;\n\nconst init = () => {\n  if (!instance) {\n    instance = new Router();\n  }\n  return instance;\n};\n\n// init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init\n});\n\n// 实现重定向//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUm91dGVyL3JvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Sb3V0ZXIvcm91dGVyLmpzPzcyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIEhJS0FMVVxuICogQHNpbmNlIDIwMTjlubQwNuaciDAx5pelXG4gKiBAdmVyc2lvbiAxLjBcbiAqL1xuXG5jbGFzcyBSb3V0ZXIge1xuICAvKipcbiAgICogQHByb3BlcnR5IGBjdXJyZW50SGFzaGAg5b2T5YmNIGhhc2gg5Zyw5Z2AXG4gICAqIC0g6buY6K6k5oyH5ZCRIGhvbWUg6aG16Z2i77yM5aaC5p6cIGhhc2gg5LiN5Li656m677yM5YiZ5oyH5ZCRIGhhc2gg5omA5Zyo6aG16Z2iXG4gICAqIEBwcm9wZXJ0eSBgcGFnZUxpc3RgIOW9k+WJjei3r+eUseeuoeeQhuS4i+eahOaJgOaciemhtemdolxuICAgKiBAbWV0aG9kIGBkZXRlY3RDbGlja2Ag55uR5ZCs54K55Ye75LqL5Lu277yM54K55Ye7IEFuY2hvciDku6XlkI7pk77mjqXot7PovaxcbiAgICogQG1ldGhvZCBgZGV0ZWN0SGFzaENoYW5nZWAg55uR5ZCsIHdpbmRvdy5oYXNoIOWmguaenCBoYXNoIOWPkeeUn+WPmOWMlumTvuaOpei3s+i9rFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50SGFzaCA9IHRoaXMucGFyc2VIYXNoKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB8fCAnaG9tZSc7XG4gICAgdGhpcy5wYWdlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlJyk7XG4gICAgdGhpcy5kZXRlY3RDbGljaygpO1xuICAgIHRoaXMuZGV0ZWN0SGFzaENoYW5nZSgpO1xuICAgIHRoaXMuZ28od2luZG93LmxvY2F0aW9uLmhhc2gsIHtcbiAgICAgIGZvcmNlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog55uR5ZCs54K55Ye75LqL5Lu2XG4gICAqIC0g5aaC5p6c54K55Ye75rqQ5Li6IEEg57G75Z6L55qEIG5vZGUg6YKj5LmI57un57utXG4gICAqIC0g5aaC5p6c54K55Ye75rqQ5ZCr5pyJIGhvc3Qg5L+h5oGv77yM6K+05piO5Li65aSW56uZ6ZO+5o6l77yM5LiN6L+b6KGM5Lu75L2V5YW25LuW5pON5L2cXG4gICAqIC0g5aaC5p6c5Li656uZ5YaF6ZO+5o6l77yM6YKj5LmI6Lez6L2s6Iez5YW2IGhhc2gg5omA5Zyo5L2N572uXG4gICAqL1xuICBkZXRlY3RDbGljaygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgc3dpdGNoICh0YXJnZXQubm9kZU5hbWUpIHtcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgLy8g5aaC5p6c5pyJIGhvc3Qg5bGe5oCn77yM5YiZ6K+B5piO5piv56uZ5aSW6ZO+5o6lXG4gICAgICAgICAgaWYgKHRhcmdldC5ob3N0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZ28odGFyZ2V0Lmhhc2gpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOebkeWQrCBoYXNoIOWPmOWMllxuICAgKiAtIOmAmui/hyBoYXNoY2hhbmdlIOS6i+S7tu+8jOebkeWQrCBoYXNoIOWPmOWMlu+8jOWPquimgeWPkeeUn+WPmOWMlu+8jOWwsei3s+i9rOiHs+aWsCBoYXNoIOaJgOWcqOS9jee9rlxuICAgKi9cbiAgZGV0ZWN0SGFzaENoYW5nZSgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGUgPT4ge1xuICAgICAgdGhpcy5nbyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog6ZO+5o6l6Lez6L2sXG4gICAqIEBtYWluXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBoYXNoIOi3r+eUseWZqOmAmui/hyBoYXNoIOaOp+WItumhtemdoueahOiKgueCueaYvuekulxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOmTvuaOpei3s+i9rOaWueazleeahOWPr+mAieWPguaVsOWvueixoe+8jOWMheWQq+S7peS4i+WPguaVsFxuICAgKiAtIGBob29rYCDkuovku7blm57osIPpkqnlrZDlh73mlbBcbiAgICogLSBgZm9yY2VgIOaYr+WQpuW8uuWItui3s+i9rO+8jOS7pemYsuesrOS4gOasoei/m+WFpemhtemdouaXtiBoYXNoIOWAvOacquWPmOWMluS4jeS8muinpuWPkei3s+i9rOS6i+S7tlxuICAgKi9cbiAgZ28oaGFzaCwgY29uZmlnID0gbnVsbCkge1xuICAgIGhhc2ggPSBoYXNoIHx8ICdob21lJ1xuICAgIGxldCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgZm9yY2U6IGZhbHNlLFxuICAgIH07XG4gICAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLmN1cnJlbnRIYXNoO1xuICAgIGxldCBuZXdWbGF1ZSA9IHRoaXMucGFyc2VIYXNoKGhhc2gpO1xuICAgIHRoaXMuY3VycmVudEhhc2ggPSBuZXdWbGF1ZTtcblxuICAgIGlmICghY29uZmlnLmZvcmNlICYmIG9sZFZhbHVlID09IG5ld1ZsYXVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGhhc1RoaXNQYWdlID0gdGhpcy5jaGVja1BhZ2VFeGlzdCh0aGlzLmN1cnJlbnRIYXNoKTtcbiAgICBpZiAoIWhhc1RoaXNQYWdlKSB7XG4gICAgICB0aGlzLmdvKCcjL25vdC1mb3VudCcpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50SGFzaCA9IG5ld1ZsYXVlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICog5Yik5pat6aG16Z2i5piv5ZCm5a2Y5ZyoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYWdlXG4gICAqL1xuICBjaGVja1BhZ2VFeGlzdChwYWdlKSB7XG4gICAgcmV0dXJuICEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZSk7XG4gIH1cblxuICAvKipcbiAgICog5riy5p+TXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciDooqvpgInkuK3nmoTlrrnlmahcbiAgICovXG4gIHJlbmRlcihzZWxlY3Rvcikge1xuICAgIGxldCBjb250ZW50O1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgdGhpcy5jdXJyZW50SGFzaDtcbiAgICB0aGlzLmNsZWFyUGFnZSgpO1xuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvcik7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2hvd1BhZ2UoY29udGVudCk7XG4gIH1cblxuICBjbGVhclBhZ2UoKSB7XG4gICAgdGhpcy5wYWdlTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIC8vIOaYvuekuumhtemdolxuICBzaG93UGFnZShjb250ZW50KSB7XG4gICAgY29udGVudC5oaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4vKipcbiAqIOi9rOWMliBoYXNoIOe8lueggVxuICogQHBhcmFtIHtTdHJpbmd9IGhhc2hcbiAqL1xuICBwYXJzZUhhc2goaGFzaCkge1xuICAgIGxldCBoYXNoQXJyID0gaGFzaC5zcGxpdCgnLycpO1xuICAgIHJldHVybiBoYXNoQXJyW2hhc2hBcnIubGVuZ3RoIC0gMV07XG4gIH1cbn1cblxuLy8g5Y2V5L6L5qih5byP5a6e5L2T57G7XG5sZXQgaW5zdGFuY2U7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBSb3V0ZXIoKTtcbiAgfVxuICByZXR1cm4gaW5zdGFuY2U7XG59O1xuXG4vLyBpbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdFxufTtcblxuLy8g5a6e546w6YeN5a6a5ZCRIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Router/router.js\n");

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