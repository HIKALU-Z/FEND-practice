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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Api_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Api/article */ \"./src/Api/article.js\");\n/* harmony import */ var _src_Router_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Router/router */ \"./src/Router/router.js\");\n\n\n\n// router.hello();\nObject(_src_Api_article__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nlet config = {\n  hook : {\n    before : function () {\n      let he_is_admin = true;\n      if (!he_is_admin)\n        return false;\n      return true;\n    },\n    after  : function (route) {\n      console.log('后');\n      console.log('route:', route);\n    },\n  },\n};\n_src_Router_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFydGljbGUgZnJvbSAnLi9zcmMvQXBpL2FydGljbGUnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc3JjL1JvdXRlci9yb3V0ZXInO1xuXG4vLyByb3V0ZXIuaGVsbG8oKTtcbmFydGljbGUoKTtcblxubGV0IGNvbmZpZyA9IHtcbiAgaG9vayA6IHtcbiAgICBiZWZvcmUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgaGVfaXNfYWRtaW4gPSB0cnVlO1xuICAgICAgaWYgKCFoZV9pc19hZG1pbilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhZnRlciAgOiBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCflkI4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZTonLCByb3V0ZSk7XG4gICAgfSxcbiAgfSxcbn07XG5yb3V0ZXIuaW5pdChjb25maWcpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @author HIKALU\n * @since 2018年06月01日\n * @version 1.0\n */\n\nclass Router {\n  /**\n   * @property `currentHash` 当前 hash 地址\n   * - 默认指向 home 页面，如果 hash 不为空，则指向 hash 所在页面\n   * @property `pageList` 当前路由管理下的所有页面\n   * @method `detectClick` 监听点击事件，点击 Anchor 以后链接跳转\n   * @method `detectHashChange` 监听 window.hash 如果 hash 发生变化链接跳转\n   */\n  constructor(config) {\n    let def = {\n      hook: {}\n    };\n    this.config = Object.assign({}, def, config);\n\n    this.currentHash = this.parseHash(window.location.hash) || 'home';\n    this.pageList = document.querySelectorAll('.page');\n    this.detectClick();\n    this.detectHashChange();\n    this.go(window.location.hash, {\n      force: true\n    });\n  }\n\n  /**\n   * 监听点击事件\n   * - 如果点击源为 A 类型的 node 那么继续\n   * - 如果点击源含有 host 信息，说明为外站链接，不进行任何其他操作\n   * - 如果为站内链接，那么跳转至其 hash 所在位置\n   */\n  detectClick() {\n    document.addEventListener('click', e => {\n      let target = e.target;\n      switch (target.nodeName) {\n        case 'A':\n          // 如果有 host 属性，则证明是站外链接\n          if (target.host) {\n            return;\n          }\n          this.go(target.hash);\n          break;\n        default:\n          break;\n      }\n    });\n  }\n\n  /**\n   * 监听 hash 变化\n   * - 通过 hashchange 事件，监听 hash 变化，只要发生变化，就跳转至新 hash 所在位置\n   */\n  detectHashChange() {\n    window.addEventListener('hashchange', e => {\n      this.go(window.location.hash);\n    });\n  }\n\n  /**\n   * 链接跳转\n   * @main\n   * @param {String} hash 路由器通过 hash 控制页面的节点显示\n   * @param {Object} config 链接跳转方法的可选参数对象，包含以下参数\n   * - `force` 是否强制跳转，以防第一次进入页面时 hash 值未变化不会触发跳转事件\n   *\n   * @event {\n   *    before: this.config.hook.before,\n   *    after: this.config.hook.after\n   * }\n   */\n  go(hash, config = null) {\n\n    // 每次执行前，判断是否有 before 的钩子函数，如果有且执行结果为 false，则退出\n    if (this.config.hook.before) {\n      if (!this.config.hook.before())\n        return;\n    }\n\n    hash = hash || 'home'\n    let defaultConfig = {\n      force: false,\n    };\n    config = Object.assign({}, defaultConfig, config);\n    let oldValue = this.currentHash;\n    let newVlaue = this.parseHash(hash);\n    this.currentHash = newVlaue;\n\n    if (!config.force && oldValue == newVlaue) {\n      return;\n    }\n\n    let hasThisPage = this.checkPageExist(this.currentHash);\n    if (!hasThisPage) {\n      this.go('#/not-fount')\n      return;\n    }\n\n    this.currentHash = newVlaue;\n    this.render();\n\n    // 在每次执行结果的最后，判断是否有 after 的钩子函数，如果有则执行，且参数为 currenHash\n    if (this.config.hook.after)\n      this.config.hook.after(this.currentHash);\n  }\n\n  /**\n   * 判断页面是否存在\n   * @param {String} page\n   */\n  checkPageExist(page) {\n    return !!document.getElementById(page);\n  }\n\n  /**\n   * 渲染\n   * @param {String} selector 被选中的容器\n   */\n  render(selector) {\n    let content;\n    selector = selector || this.currentHash;\n    this.clearPage();\n    content = document.getElementById(selector);\n    if (!content) {\n      return;\n    }\n    this.showPage(content);\n  }\n\n  clearPage() {\n    this.pageList.forEach(element => {\n      element.hidden = true;\n    });\n  }\n  // 显示页面\n  showPage(content) {\n    content.hidden = false;\n  }\n\n  /**\n   * 转化 hash 编码\n   * @param {String} hash\n   */\n  parseHash(hash) {\n    let hashArr = hash.split('/');\n    return hashArr[hashArr.length - 1];\n  }\n}\n\n// 单例模式实体类\nlet instance;\n\nconst init = (config) => {\n  if (!instance) {\n    instance = new Router(config);\n  }\n  return instance;\n};\n\n// init();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init\n});\n\n// 实现重定向//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUm91dGVyL3JvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Sb3V0ZXIvcm91dGVyLmpzPzcyOWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIEhJS0FMVVxuICogQHNpbmNlIDIwMTjlubQwNuaciDAx5pelXG4gKiBAdmVyc2lvbiAxLjBcbiAqL1xuXG5jbGFzcyBSb3V0ZXIge1xuICAvKipcbiAgICogQHByb3BlcnR5IGBjdXJyZW50SGFzaGAg5b2T5YmNIGhhc2gg5Zyw5Z2AXG4gICAqIC0g6buY6K6k5oyH5ZCRIGhvbWUg6aG16Z2i77yM5aaC5p6cIGhhc2gg5LiN5Li656m677yM5YiZ5oyH5ZCRIGhhc2gg5omA5Zyo6aG16Z2iXG4gICAqIEBwcm9wZXJ0eSBgcGFnZUxpc3RgIOW9k+WJjei3r+eUseeuoeeQhuS4i+eahOaJgOaciemhtemdolxuICAgKiBAbWV0aG9kIGBkZXRlY3RDbGlja2Ag55uR5ZCs54K55Ye75LqL5Lu277yM54K55Ye7IEFuY2hvciDku6XlkI7pk77mjqXot7PovaxcbiAgICogQG1ldGhvZCBgZGV0ZWN0SGFzaENoYW5nZWAg55uR5ZCsIHdpbmRvdy5oYXNoIOWmguaenCBoYXNoIOWPkeeUn+WPmOWMlumTvuaOpei3s+i9rFxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgbGV0IGRlZiA9IHtcbiAgICAgIGhvb2s6IHt9XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZiwgY29uZmlnKTtcblxuICAgIHRoaXMuY3VycmVudEhhc2ggPSB0aGlzLnBhcnNlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaCkgfHwgJ2hvbWUnO1xuICAgIHRoaXMucGFnZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZScpO1xuICAgIHRoaXMuZGV0ZWN0Q2xpY2soKTtcbiAgICB0aGlzLmRldGVjdEhhc2hDaGFuZ2UoKTtcbiAgICB0aGlzLmdvKHdpbmRvdy5sb2NhdGlvbi5oYXNoLCB7XG4gICAgICBmb3JjZTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOebkeWQrOeCueWHu+S6i+S7tlxuICAgKiAtIOWmguaenOeCueWHu+a6kOS4uiBBIOexu+Wei+eahCBub2RlIOmCo+S5iOe7p+e7rVxuICAgKiAtIOWmguaenOeCueWHu+a6kOWQq+aciSBob3N0IOS/oeaBr++8jOivtOaYjuS4uuWkluermemTvuaOpe+8jOS4jei/m+ihjOS7u+S9leWFtuS7luaTjeS9nFxuICAgKiAtIOWmguaenOS4uuermeWGhemTvuaOpe+8jOmCo+S5iOi3s+i9rOiHs+WFtiBoYXNoIOaJgOWcqOS9jee9rlxuICAgKi9cbiAgZGV0ZWN0Q2xpY2soKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIHN3aXRjaCAodGFyZ2V0Lm5vZGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgIC8vIOWmguaenOaciSBob3N0IOWxnuaAp++8jOWImeivgeaYjuaYr+ermeWklumTvuaOpVxuICAgICAgICAgIGlmICh0YXJnZXQuaG9zdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdvKHRhcmdldC5oYXNoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnm5HlkKwgaGFzaCDlj5jljJZcbiAgICogLSDpgJrov4cgaGFzaGNoYW5nZSDkuovku7bvvIznm5HlkKwgaGFzaCDlj5jljJbvvIzlj6ropoHlj5HnlJ/lj5jljJbvvIzlsLHot7Povazoh7PmlrAgaGFzaCDmiYDlnKjkvY3nva5cbiAgICovXG4gIGRldGVjdEhhc2hDaGFuZ2UoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBlID0+IHtcbiAgICAgIHRoaXMuZ28od2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOmTvuaOpei3s+i9rFxuICAgKiBAbWFpblxuICAgKiBAcGFyYW0ge1N0cmluZ30gaGFzaCDot6/nlLHlmajpgJrov4cgaGFzaCDmjqfliLbpobXpnaLnmoToioLngrnmmL7npLpcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDpk77mjqXot7Povazmlrnms5XnmoTlj6/pgInlj4LmlbDlr7nosaHvvIzljIXlkKvku6XkuIvlj4LmlbBcbiAgICogLSBgZm9yY2VgIOaYr+WQpuW8uuWItui3s+i9rO+8jOS7pemYsuesrOS4gOasoei/m+WFpemhtemdouaXtiBoYXNoIOWAvOacquWPmOWMluS4jeS8muinpuWPkei3s+i9rOS6i+S7tlxuICAgKlxuICAgKiBAZXZlbnQge1xuICAgKiAgICBiZWZvcmU6IHRoaXMuY29uZmlnLmhvb2suYmVmb3JlLFxuICAgKiAgICBhZnRlcjogdGhpcy5jb25maWcuaG9vay5hZnRlclxuICAgKiB9XG4gICAqL1xuICBnbyhoYXNoLCBjb25maWcgPSBudWxsKSB7XG5cbiAgICAvLyDmr4/mrKHmiafooYzliY3vvIzliKTmlq3mmK/lkKbmnIkgYmVmb3JlIOeahOmSqeWtkOWHveaVsO+8jOWmguaenOacieS4lOaJp+ihjOe7k+aenOS4uiBmYWxzZe+8jOWImemAgOWHulxuICAgIGlmICh0aGlzLmNvbmZpZy5ob29rLmJlZm9yZSkge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5ob29rLmJlZm9yZSgpKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFzaCA9IGhhc2ggfHwgJ2hvbWUnXG4gICAgbGV0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICBmb3JjZTogZmFsc2UsXG4gICAgfTtcbiAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICAgIGxldCBvbGRWYWx1ZSA9IHRoaXMuY3VycmVudEhhc2g7XG4gICAgbGV0IG5ld1ZsYXVlID0gdGhpcy5wYXJzZUhhc2goaGFzaCk7XG4gICAgdGhpcy5jdXJyZW50SGFzaCA9IG5ld1ZsYXVlO1xuXG4gICAgaWYgKCFjb25maWcuZm9yY2UgJiYgb2xkVmFsdWUgPT0gbmV3VmxhdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaGFzVGhpc1BhZ2UgPSB0aGlzLmNoZWNrUGFnZUV4aXN0KHRoaXMuY3VycmVudEhhc2gpO1xuICAgIGlmICghaGFzVGhpc1BhZ2UpIHtcbiAgICAgIHRoaXMuZ28oJyMvbm90LWZvdW50JylcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRIYXNoID0gbmV3VmxhdWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIC8vIOWcqOavj+asoeaJp+ihjOe7k+aenOeahOacgOWQju+8jOWIpOaWreaYr+WQpuaciSBhZnRlciDnmoTpkqnlrZDlh73mlbDvvIzlpoLmnpzmnInliJnmiafooYzvvIzkuJTlj4LmlbDkuLogY3VycmVuSGFzaFxuICAgIGlmICh0aGlzLmNvbmZpZy5ob29rLmFmdGVyKVxuICAgICAgdGhpcy5jb25maWcuaG9vay5hZnRlcih0aGlzLmN1cnJlbnRIYXNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliKTmlq3pobXpnaLmmK/lkKblrZjlnKhcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhZ2VcbiAgICovXG4gIGNoZWNrUGFnZUV4aXN0KHBhZ2UpIHtcbiAgICByZXR1cm4gISFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuLLmn5NcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIOiiq+mAieS4reeahOWuueWZqFxuICAgKi9cbiAgcmVuZGVyKHNlbGVjdG9yKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgc2VsZWN0b3IgPSBzZWxlY3RvciB8fCB0aGlzLmN1cnJlbnRIYXNoO1xuICAgIHRoaXMuY2xlYXJQYWdlKCk7XG4gICAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zaG93UGFnZShjb250ZW50KTtcbiAgfVxuXG4gIGNsZWFyUGFnZSgpIHtcbiAgICB0aGlzLnBhZ2VMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8g5pi+56S66aG16Z2iXG4gIHNob3dQYWdlKGNvbnRlbnQpIHtcbiAgICBjb250ZW50LmhpZGRlbiA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOi9rOWMliBoYXNoIOe8lueggVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaGFzaFxuICAgKi9cbiAgcGFyc2VIYXNoKGhhc2gpIHtcbiAgICBsZXQgaGFzaEFyciA9IGhhc2guc3BsaXQoJy8nKTtcbiAgICByZXR1cm4gaGFzaEFycltoYXNoQXJyLmxlbmd0aCAtIDFdO1xuICB9XG59XG5cbi8vIOWNleS+i+aooeW8j+WunuS9k+exu1xubGV0IGluc3RhbmNlO1xuXG5jb25zdCBpbml0ID0gKGNvbmZpZykgPT4ge1xuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UgPSBuZXcgUm91dGVyKGNvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLy8gaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXRcbn07XG5cbi8vIOWunueOsOmHjeWumuWQkSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Router/router.js\n");

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