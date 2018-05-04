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

eval("let ele = __webpack_require__(/*! ./element */ \"./js/element.js\");\nlet searchService = __webpack_require__(/*! ./searchService */ \"./js/searchService.js\");\nlet page = 2;\nlet limit = 5;\nfunction detect_submit() {\n  ele.form.addEventListener('submit', function(e) {\n    e.preventDefault();\n    let keyword = ele.input.value || '';\n    console.log(keyword);\n    searchService.searchUsers(keyword, ele.renderUserList);\n  });\n}\n\nfunction detect_next() {\n  ele.next.addEventListener('click', function(e) {\n    e.preventDefault();\n    let keyword = ele.input.value || '';\n    let config = {\n      page: page++,\n      perPage: 5\n    };\n    console.log(keyword);\n    searchService.loadMoreUsers(keyword, ele.renderUserList,function(){\n      console.log('123');\n    }, config);\n  });\n}\n\nfunction add_events() {\n  detect_submit();\n  detect_next();\n}\n\nmodule.exports = {\n  detect_submit: detect_submit,\n  add_events: add_events\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9lbGVFdmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2VsZUV2ZW50LmpzPzY0MWQiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGVsZSA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xubGV0IHNlYXJjaFNlcnZpY2UgPSByZXF1aXJlKCcuL3NlYXJjaFNlcnZpY2UnKTtcbmxldCBwYWdlID0gMjtcbmxldCBsaW1pdCA9IDU7XG5mdW5jdGlvbiBkZXRlY3Rfc3VibWl0KCkge1xuICBlbGUuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBrZXl3b3JkID0gZWxlLmlucHV0LnZhbHVlIHx8ICcnO1xuICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xuICAgIHNlYXJjaFNlcnZpY2Uuc2VhcmNoVXNlcnMoa2V5d29yZCwgZWxlLnJlbmRlclVzZXJMaXN0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRldGVjdF9uZXh0KCkge1xuICBlbGUubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGtleXdvcmQgPSBlbGUuaW5wdXQudmFsdWUgfHwgJyc7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIHBhZ2U6IHBhZ2UrKyxcbiAgICAgIHBlclBhZ2U6IDVcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xuICAgIHNlYXJjaFNlcnZpY2UubG9hZE1vcmVVc2VycyhrZXl3b3JkLCBlbGUucmVuZGVyVXNlckxpc3QsZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCcxMjMnKTtcbiAgICB9LCBjb25maWcpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkX2V2ZW50cygpIHtcbiAgZGV0ZWN0X3N1Ym1pdCgpO1xuICBkZXRlY3RfbmV4dCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGV0ZWN0X3N1Ym1pdDogZGV0ZWN0X3N1Ym1pdCxcbiAgYWRkX2V2ZW50czogYWRkX2V2ZW50c1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/eleEvent.js\n");

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

eval("var eleEvent = __webpack_require__(/*! ./eleEvent */ \"./js/eleEvent.js\");\n\ninit();\n\nfunction init() {\n  eleEvent.add_events();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGVsZUV2ZW50ID0gcmVxdWlyZSgnLi9lbGVFdmVudCcpO1xuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGVsZUV2ZW50LmFkZF9ldmVudHMoKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/searchService.js":
/*!*****************************!*\
  !*** ./js/searchService.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ajax(methods, url, successHook, failHook) {\n  methods = methods || 'GET';\n  let xhr = new XMLHttpRequest();\n  xhr.open(methods,url);\n  xhr.send();\n  xhr.addEventListener('load', function() {\n    let result = JSON.parse(this.responseText);\n    successHook(result)\n  });\n}\n\nfunction searchUsers(keyword,successHook,failHook){\n  let url = 'https://api.github.com/search/users?q='+keyword+'&per_page=5';\n  ajax(\"GET\",url,successHook,failHook);\n}\n\nfunction loadMoreUsers(keyword,successHook,failHook,config){\n  let defaultConfig = {\n    page:10,\n    perPage:15\n  }\n  config = Object.assign(defaultConfig,config)\n  let url = `https://api.github.com/search/users?q=${keyword}\n            &page=${config.page}&per_page=${config.perPage}`;\n  ajax('GET',url,successHook,failHook)\n}\n\nmodule.exports = {\n  ajax,\n  searchUsers,\n  loadMoreUsers\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zZWFyY2hTZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvc2VhcmNoU2VydmljZS5qcz85ZDJkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFqYXgobWV0aG9kcywgdXJsLCBzdWNjZXNzSG9vaywgZmFpbEhvb2spIHtcbiAgbWV0aG9kcyA9IG1ldGhvZHMgfHwgJ0dFVCc7XG4gIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4obWV0aG9kcyx1cmwpO1xuICB4aHIuc2VuZCgpO1xuICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICBzdWNjZXNzSG9vayhyZXN1bHQpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hVc2VycyhrZXl3b3JkLHN1Y2Nlc3NIb29rLGZhaWxIb29rKXtcbiAgbGV0IHVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPScra2V5d29yZCsnJnBlcl9wYWdlPTUnO1xuICBhamF4KFwiR0VUXCIsdXJsLHN1Y2Nlc3NIb29rLGZhaWxIb29rKTtcbn1cblxuZnVuY3Rpb24gbG9hZE1vcmVVc2VycyhrZXl3b3JkLHN1Y2Nlc3NIb29rLGZhaWxIb29rLGNvbmZpZyl7XG4gIGxldCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIHBhZ2U6MTAsXG4gICAgcGVyUGFnZToxNVxuICB9XG4gIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZyxjb25maWcpXG4gIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke2tleXdvcmR9XG4gICAgICAgICAgICAmcGFnZT0ke2NvbmZpZy5wYWdlfSZwZXJfcGFnZT0ke2NvbmZpZy5wZXJQYWdlfWA7XG4gIGFqYXgoJ0dFVCcsdXJsLHN1Y2Nlc3NIb29rLGZhaWxIb29rKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWpheCxcbiAgc2VhcmNoVXNlcnMsXG4gIGxvYWRNb3JlVXNlcnNcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/searchService.js\n");

/***/ })

/******/ });