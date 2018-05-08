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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/eleEvent.js":
/*!************************!*\
  !*** ./js/eleEvent.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let ele = __webpack_require__(/*! ./element */ \"./js/element.js\");\nlet search = __webpack_require__(/*! ./search */ \"./js/search.js\");\n\nlet page = 2;\nlet limit = 5;\n\nfunction detectSubmit() {\n  ele.form.addEventListener('submit', function(e) {\n    e.preventDefault();\n    let keyword = ele.input.value || '';\n    console.log(keyword);\n    search.search\n  });\n}\n\n/* function detectNext() {\n  ele.next.addEventListener('click', function(e) {\n    e.preventDefault();\n    let keyword = ele.input.value || '';\n    let config = {\n      page: page++,\n      perPage: 5\n    };\n    console.log(keyword);\n    search.loadMoreUsers(keyword, ele.renderUserList,function(){\n      console.log('123');\n    }, config);\n  });\n} */\n\nfunction addEvent() {\n  detectSubmit();\n  detectNext();\n}\n\nmodule.exports = {\n  detectSubmit,\n  detectNext,\n  addEvent\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9lbGVFdmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2VsZUV2ZW50LmpzPzY0MWQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGVsZSA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xubGV0IHNlYXJjaCA9IHJlcXVpcmUoJy4vc2VhcmNoJyk7XG5cbmxldCBwYWdlID0gMjtcbmxldCBsaW1pdCA9IDU7XG5cbmZ1bmN0aW9uIGRldGVjdFN1Ym1pdCgpIHtcbiAgZWxlLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQga2V5d29yZCA9IGVsZS5pbnB1dC52YWx1ZSB8fCAnJztcbiAgICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcbiAgICBzZWFyY2guc2VhcmNoXG4gIH0pO1xufVxuXG4vKiBmdW5jdGlvbiBkZXRlY3ROZXh0KCkge1xuICBlbGUubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGtleXdvcmQgPSBlbGUuaW5wdXQudmFsdWUgfHwgJyc7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIHBhZ2U6IHBhZ2UrKyxcbiAgICAgIHBlclBhZ2U6IDVcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xuICAgIHNlYXJjaC5sb2FkTW9yZVVzZXJzKGtleXdvcmQsIGVsZS5yZW5kZXJVc2VyTGlzdCxmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJzEyMycpO1xuICAgIH0sIGNvbmZpZyk7XG4gIH0pO1xufSAqL1xuXG5mdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgZGV0ZWN0U3VibWl0KCk7XG4gIGRldGVjdE5leHQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRldGVjdFN1Ym1pdCxcbiAgZGV0ZWN0TmV4dCxcbiAgYWRkRXZlbnRcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/eleEvent.js\n");

/***/ }),

/***/ "./js/element.js":
/*!***********************!*\
  !*** ./js/element.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let form = document.getElementById('search-form');\nlet input = document.getElementById('search-input');\nlet next = document.getElementById('next');\nlet userList = document.getElementById('user-list');\n\n\n/**\n * 渲染用户列表\n * @param {Array} data 用于渲染的数据\n */\nfunction renderUserList(data) {\n  var html = userList.innerHTML;\n\n  if (data.total_count>5){\n    showNextBtn();\n  }\n\n  data.items.forEach(function (user) {\n    html = html + `\n  <div class=\"user\">\n    <a class=\"avatar\" target=\"_blank\" href=\"${user.html_url}\">\n      <img src=\"${user.avatar_url}\">\n    </a>\n    <div class=\"info\">\n      <div class=\"username\">${user.login}</div>\n      <div><a target=\"_blank\" href=\"${user.html_url}\">${user.html_url}</a></div>\n    </div>\n  </div>\n    `;\n\n    userList.innerHTML = html;\n  });\n}\n\nfunction showNextBtn(){\n  next.hidden = false;\n}\n\nfunction hideNextBtn(){\n  next.hidden = true;\n}\n\nmodule.exports = {\n  form,\n  input,\n  userList,\n  next,\n  showNextBtn,\n  hideNextBtn,\n  renderUserList\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9lbGVtZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvZWxlbWVudC5qcz8yODZkIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XG5sZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XG5sZXQgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG5sZXQgdXNlckxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1saXN0Jyk7XG5cblxuLyoqXG4gKiDmuLLmn5PnlKjmiLfliJfooahcbiAqIEBwYXJhbSB7QXJyYXl9IGRhdGEg55So5LqO5riy5p+T55qE5pWw5o2uXG4gKi9cbmZ1bmN0aW9uIHJlbmRlclVzZXJMaXN0KGRhdGEpIHtcbiAgdmFyIGh0bWwgPSB1c2VyTGlzdC5pbm5lckhUTUw7XG5cbiAgaWYgKGRhdGEudG90YWxfY291bnQ+NSl7XG4gICAgc2hvd05leHRCdG4oKTtcbiAgfVxuXG4gIGRhdGEuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAodXNlcikge1xuICAgIGh0bWwgPSBodG1sICsgYFxuICA8ZGl2IGNsYXNzPVwidXNlclwiPlxuICAgIDxhIGNsYXNzPVwiYXZhdGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7dXNlci5odG1sX3VybH1cIj5cbiAgICAgIDxpbWcgc3JjPVwiJHt1c2VyLmF2YXRhcl91cmx9XCI+XG4gICAgPC9hPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidXNlcm5hbWVcIj4ke3VzZXIubG9naW59PC9kaXY+XG4gICAgICA8ZGl2PjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3VzZXIuaHRtbF91cmx9XCI+JHt1c2VyLmh0bWxfdXJsfTwvYT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgYDtcblxuICAgIHVzZXJMaXN0LmlubmVySFRNTCA9IGh0bWw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93TmV4dEJ0bigpe1xuICBuZXh0LmhpZGRlbiA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoaWRlTmV4dEJ0bigpe1xuICBuZXh0LmhpZGRlbiA9IHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmb3JtLFxuICBpbnB1dCxcbiAgdXNlckxpc3QsXG4gIG5leHQsXG4gIHNob3dOZXh0QnRuLFxuICBoaWRlTmV4dEJ0bixcbiAgcmVuZGVyVXNlckxpc3Rcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/element.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eleEvent = __webpack_require__(/*! ./eleEvent */ \"./js/eleEvent.js\");\n\ninit();\n\nfunction init() {\n  eleEvent.addEvent();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGVsZUV2ZW50ID0gcmVxdWlyZSgnLi9lbGVFdmVudCcpO1xuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGVsZUV2ZW50LmFkZEV2ZW50KCk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/search.js":
/*!**********************!*\
  !*** ./js/search.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ajax(methods, url, successHook, failHook) {\n  methods = methods || 'GET';\n  let xhr = new XMLHttpRequest();\n  xhr.open(methods,url);\n  xhr.send();\n  xhr.addEventListener('load', function() {\n    let result = JSON.parse(this.responseText);\n    successHook(result)\n  });\n}\n\nfunction searchUsers(keyword,successHook,failHook){\n  let url = 'https://api.github.com/search/users?q='+keyword+'&per_page=5';\n  ajax(\"GET\",url,successHook,failHook);\n}\n\nfunction loadMoreUsers(keyword,successHook,failHook,config){\n  let defaultConfig = {\n    page:10,\n    perPage:15\n  }\n  config = Object.assign(defaultConfig,config)\n  let url = `https://api.github.com/search/users?q=${keyword}\n            &page=${config.page}&per_page=${config.perPage}`;\n  ajax('GET',url,successHook,failHook)\n}\n\nmodule.exports = {\n  ajax,\n  searchUsers,\n  loadMoreUsers\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zZWFyY2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zZWFyY2guanM/ODAxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhamF4KG1ldGhvZHMsIHVybCwgc3VjY2Vzc0hvb2ssIGZhaWxIb29rKSB7XG4gIG1ldGhvZHMgPSBtZXRob2RzIHx8ICdHRVQnO1xuICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKG1ldGhvZHMsdXJsKTtcbiAgeGhyLnNlbmQoKTtcbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XG4gICAgc3VjY2Vzc0hvb2socmVzdWx0KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoVXNlcnMoa2V5d29yZCxzdWNjZXNzSG9vayxmYWlsSG9vayl7XG4gIGxldCB1cmwgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0nK2tleXdvcmQrJyZwZXJfcGFnZT01JztcbiAgYWpheChcIkdFVFwiLHVybCxzdWNjZXNzSG9vayxmYWlsSG9vayk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNb3JlVXNlcnMoa2V5d29yZCxzdWNjZXNzSG9vayxmYWlsSG9vayxjb25maWcpe1xuICBsZXQgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBwYWdlOjEwLFxuICAgIHBlclBhZ2U6MTVcbiAgfVxuICBjb25maWcgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsY29uZmlnKVxuICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9JHtrZXl3b3JkfVxuICAgICAgICAgICAgJnBhZ2U9JHtjb25maWcucGFnZX0mcGVyX3BhZ2U9JHtjb25maWcucGVyUGFnZX1gO1xuICBhamF4KCdHRVQnLHVybCxzdWNjZXNzSG9vayxmYWlsSG9vaylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFqYXgsXG4gIHNlYXJjaFVzZXJzLFxuICBsb2FkTW9yZVVzZXJzXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/search.js\n");

/***/ })

/******/ });