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

"use strict";
eval("\n\nvar $el = __webpack_require__(/*! ./element */ \"./js/element.js\");\nvar search = __webpack_require__(/*! ./search */ \"./js/search.js\");\nvar store = __webpack_require__(/*! ./store */ \"./js/store.js\");\nvar history = __webpack_require__(/*! ./history */ \"./js/history.js\");\nvar share = __webpack_require__(/*! ./share */ \"./js/share.js\");\n\nvar page = 2;\nvar limit = 25;\n\n/**\n * 监听表单提交事件\n * - 如果有 keyword 提交，那么调用 searchUsers 方法\n */\nfunction detectSubmit() {\n  $el.form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    var keyword = share.setKeyword($el.input.value);\n    if (!keyword) {\n      return;\n    }\n    search.search();\n    history.append(share.getKeyword());\n  });\n}\n\n/**\n * 监听输入框是否被点击，如果被点击，则显示历史记录\n */\nfunction detectClickHistory() {\n  $el.input.addEventListener('click', function () {\n    history.showList();\n  });\n}\n\n/**\n * 监听 html 是否被点击\n * - 如果被点击，那么进行判断，是否是在历史记录区域被点击的\n *   + 如果不是在历史区域点击那么收起历史记录\n *   + 否则 return\n */\nfunction detectClickDocument() {\n  document.documentElement.addEventListener('click', function (e) {\n    var inHistoryArea = e.target.closest('#history-list');\n    var inInputArea = e.target.closest('#search-input');\n    if (inHistoryArea || inInputArea) {\n      return;\n    }\n    history.hideList();\n  });\n}\n\nfunction detectNext() {\n  $el.next.addEventListener('click', function (e) {\n    e.preventDefault();\n    var keyword = $el.input.value || '';\n    var config = {\n      page: page++,\n      perPage: 5\n    };\n    console.log(keyword);\n    search.loadMoreUsers(keyword, $el.renderUserList, function () {\n      console.log('123');\n    }, config);\n  });\n}\n\n/**\n * 监听回到顶部按钮是否触发 click 事件\n * - 触发 click 事件之后 执行 toTop 函数\n */\nfunction detectScrollToTop() {\n  $el.top.addEventListener('click', function () {\n    toTop();\n  });\n}\n\n/**\n * 监听 window scroll\n * - 如果 window.scrollY > 400 那么显示 top 按钮\n */\nfunction detectWindowScrollY() {\n  if (!window) {\n    return;\n  } else {\n    window.addEventListener('scroll', function () {\n      if (window.scrollY > 400) {\n        $el.top.hidden = false;\n      } else {\n        $el.top.hidden = true;\n      }\n    });\n  }\n}\n\n/**\n * 回到页面顶部\n */\nfunction toTop() {\n  window.scrollTo(0, 0);\n}\n\n/**\n * 添加所有页面需要监听的事件\n */\nfunction addEvent() {\n  detectSubmit();\n  detectScrollToTop();\n  detectWindowScrollY();\n  detectClickHistory();\n  detectClickDocument();\n  // detectNext();\n}\n\n/**\n * 导出模块\n */\nmodule.exports = {\n  detectSubmit: detectSubmit,\n  detectNext: detectNext,\n  addEvent: addEvent\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9lbGVFdmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9lbGVFdmVudC5qcz8xOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImxldCAkZWwgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcbmxldCBzZWFyY2ggPSByZXF1aXJlKCcuL3NlYXJjaCcpO1xubGV0IHN0b3JlID0gcmVxdWlyZSgnLi9zdG9yZScpXG5sZXQgaGlzdG9yeSA9IHJlcXVpcmUoJy4vaGlzdG9yeScpXG5sZXQgc2hhcmUgPSByZXF1aXJlKCcuL3NoYXJlJylcblxubGV0IHBhZ2UgPSAyO1xubGV0IGxpbWl0ID0gMjU7XG5cbi8qKlxuICog55uR5ZCs6KGo5Y2V5o+Q5Lqk5LqL5Lu2XG4gKiAtIOWmguaenOaciSBrZXl3b3JkIOaPkOS6pO+8jOmCo+S5iOiwg+eUqCBzZWFyY2hVc2VycyDmlrnms5VcbiAqL1xuZnVuY3Rpb24gZGV0ZWN0U3VibWl0KCkge1xuICAkZWwuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQga2V5d29yZCA9IHNoYXJlLnNldEtleXdvcmQoJGVsLmlucHV0LnZhbHVlKVxuICAgIGlmICgha2V5d29yZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZWFyY2guc2VhcmNoKCk7XG4gICAgaGlzdG9yeS5hcHBlbmQoc2hhcmUuZ2V0S2V5d29yZCgpKVxuICB9KTtcbn1cblxuLyoqXG4gKiDnm5HlkKzovpPlhaXmoYbmmK/lkKbooqvngrnlh7vvvIzlpoLmnpzooqvngrnlh7vvvIzliJnmmL7npLrljoblj7LorrDlvZVcbiAqL1xuZnVuY3Rpb24gZGV0ZWN0Q2xpY2tIaXN0b3J5KCkge1xuICAkZWwuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlzdG9yeS5zaG93TGlzdCgpXG4gIH0pXG59XG5cblxuLyoqXG4gKiDnm5HlkKwgaHRtbCDmmK/lkKbooqvngrnlh7tcbiAqIC0g5aaC5p6c6KKr54K55Ye777yM6YKj5LmI6L+b6KGM5Yik5pat77yM5piv5ZCm5piv5Zyo5Y6G5Y+y6K6w5b2V5Yy65Z+f6KKr54K55Ye755qEXG4gKiAgICsg5aaC5p6c5LiN5piv5Zyo5Y6G5Y+y5Yy65Z+f54K55Ye76YKj5LmI5pS26LW35Y6G5Y+y6K6w5b2VXG4gKiAgICsg5ZCm5YiZIHJldHVyblxuICovXG5mdW5jdGlvbiBkZXRlY3RDbGlja0RvY3VtZW50KCkge1xuICBkb2N1bWVudFxuICAgIC5kb2N1bWVudEVsZW1lbnRcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IGluSGlzdG9yeUFyZWEgPSBlLnRhcmdldC5jbG9zZXN0KCcjaGlzdG9yeS1saXN0Jyk7XG4gICAgICBsZXQgaW5JbnB1dEFyZWEgPSBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoLWlucHV0Jyk7XG4gICAgICBpZiAoaW5IaXN0b3J5QXJlYSB8fCBpbklucHV0QXJlYSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGhpc3RvcnkuaGlkZUxpc3QoKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRldGVjdE5leHQoKSB7XG4gICRlbC5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGtleXdvcmQgPSAkZWwuaW5wdXQudmFsdWUgfHwgJyc7XG4gICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgIHBhZ2U6IHBhZ2UrKyxcbiAgICAgIHBlclBhZ2U6IDVcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xuICAgIHNlYXJjaC5sb2FkTW9yZVVzZXJzKGtleXdvcmQsICRlbC5yZW5kZXJVc2VyTGlzdCwgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJzEyMycpO1xuICAgIH0sIGNvbmZpZyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIOebkeWQrOWbnuWIsOmhtumDqOaMiemSruaYr+WQpuinpuWPkSBjbGljayDkuovku7ZcbiAqIC0g6Kem5Y+RIGNsaWNrIOS6i+S7tuS5i+WQjiDmiafooYwgdG9Ub3Ag5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIGRldGVjdFNjcm9sbFRvVG9wKCkge1xuICAkZWwudG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRvVG9wKClcbiAgfSlcbn1cblxuLyoqXG4gKiDnm5HlkKwgd2luZG93IHNjcm9sbFxuICogLSDlpoLmnpwgd2luZG93LnNjcm9sbFkgPiA0MDAg6YKj5LmI5pi+56S6IHRvcCDmjInpkq5cbiAqL1xuZnVuY3Rpb24gZGV0ZWN0V2luZG93U2Nyb2xsWSgpIHtcbiAgaWYgKCF3aW5kb3cpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDQwMCkge1xuICAgICAgICAkZWwudG9wLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsLnRvcC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiDlm57liLDpobXpnaLpobbpg6hcbiAqL1xuZnVuY3Rpb24gdG9Ub3AoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn1cblxuLyoqXG4gKiDmt7vliqDmiYDmnInpobXpnaLpnIDopoHnm5HlkKznmoTkuovku7ZcbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnQoKSB7XG4gIGRldGVjdFN1Ym1pdCgpO1xuICBkZXRlY3RTY3JvbGxUb1RvcCgpO1xuICBkZXRlY3RXaW5kb3dTY3JvbGxZKCk7XG4gIGRldGVjdENsaWNrSGlzdG9yeSgpO1xuICBkZXRlY3RDbGlja0RvY3VtZW50KCk7XG4gIC8vIGRldGVjdE5leHQoKTtcbn1cblxuLyoqXG4gKiDlr7zlh7rmqKHlnZdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRldGVjdFN1Ym1pdCxcbiAgZGV0ZWN0TmV4dCxcbiAgYWRkRXZlbnRcbn07Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/eleEvent.js\n");

/***/ }),

/***/ "./js/element.js":
/*!***********************!*\
  !*** ./js/element.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar form = document.getElementById('search-form');\nvar input = document.getElementById('search-input');\nvar userList = document.getElementById('user-list');\nvar historyList = document.getElementById('history-list');\nvar top = document.getElementById('top');\nvar placeholder = document.getElementById('placeholder');\nvar amount = document.getElementById('amount');\n\n// /**\n//  * 渲染用户列表\n//  * @param {Array} data 用于渲染的数据\n//  */\n// function renderUserList(data) {\n//   let html = userList.innerHTML;\n//   /*\n//     if (data.total_count>5){\n//       showNextBtn();\n//     } */\n\n//   data.items.forEach(function (user) {\n//     html = html + `\n//   <div class=\"user\">\n//     <a class=\"avatar\" target=\"_blank\" href=\"${user.html_url}\">\n//       <img src=\"${user.avatar_url}\">\n//     </a>\n//     <div class=\"info\">\n//       <div class=\"username\">${user.login}</div>\n//       <div><a target=\"_blank\" href=\"${user.html_url}\">${user.html_url}</a></div>\n//     </div>\n//   </div>\n//     `;\n\n//     userList.innerHTML = html;\n//   });\n// }\n\nmodule.exports = {\n  top: top,\n  form: form,\n  input: input,\n  userList: userList,\n  historyList: historyList,\n  amount: amount,\n  placeholder: placeholder\n  // renderUserList\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9lbGVtZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL2VsZW1lbnQuanM/ZmNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xubGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xubGV0IHVzZXJMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItbGlzdCcpO1xubGV0IGhpc3RvcnlMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktbGlzdCcpO1xubGV0IHRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AnKTtcbmxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjZWhvbGRlcicpXG5sZXQgYW1vdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Ftb3VudCcpXG5cbi8vIC8qKlxuLy8gICog5riy5p+T55So5oi35YiX6KGoXG4vLyAgKiBAcGFyYW0ge0FycmF5fSBkYXRhIOeUqOS6jua4suafk+eahOaVsOaNrlxuLy8gICovXG4vLyBmdW5jdGlvbiByZW5kZXJVc2VyTGlzdChkYXRhKSB7XG4vLyAgIGxldCBodG1sID0gdXNlckxpc3QuaW5uZXJIVE1MO1xuLy8gICAvKlxuLy8gICAgIGlmIChkYXRhLnRvdGFsX2NvdW50PjUpe1xuLy8gICAgICAgc2hvd05leHRCdG4oKTtcbi8vICAgICB9ICovXG5cbi8vICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyKSB7XG4vLyAgICAgaHRtbCA9IGh0bWwgKyBgXG4vLyAgIDxkaXYgY2xhc3M9XCJ1c2VyXCI+XG4vLyAgICAgPGEgY2xhc3M9XCJhdmF0YXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt1c2VyLmh0bWxfdXJsfVwiPlxuLy8gICAgICAgPGltZyBzcmM9XCIke3VzZXIuYXZhdGFyX3VybH1cIj5cbi8vICAgICA8L2E+XG4vLyAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbi8vICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VybmFtZVwiPiR7dXNlci5sb2dpbn08L2Rpdj5cbi8vICAgICAgIDxkaXY+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7dXNlci5odG1sX3VybH1cIj4ke3VzZXIuaHRtbF91cmx9PC9hPjwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICA8L2Rpdj5cbi8vICAgICBgO1xuXG4vLyAgICAgdXNlckxpc3QuaW5uZXJIVE1MID0gaHRtbDtcbi8vICAgfSk7XG4vLyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0b3AsXG4gIGZvcm0sXG4gIGlucHV0LFxuICB1c2VyTGlzdCxcbiAgaGlzdG9yeUxpc3QsXG4gIGFtb3VudCxcbiAgcGxhY2Vob2xkZXJcbiAgLy8gcmVuZGVyVXNlckxpc3Rcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/element.js\n");

/***/ }),

/***/ "./js/history.js":
/*!***********************!*\
  !*** ./js/history.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $el = __webpack_require__(/*! ./element */ \"./js/element.js\");\nvar store = __webpack_require__(/*! ./store */ \"./js/store.js\");\nvar search = __webpack_require__(/*! ./search */ \"./js/search.js\");\nvar share = __webpack_require__(/*! ./share */ \"./js/share.js\");\nvar util = __webpack_require__(/*! ./util */ \"./js/util.js\");\nvar list = void 0;\n\nfunction showList() {\n  $el.historyList.hidden = false;\n}\n\nfunction hideList() {\n  $el.historyList.hidden = true;\n}\n\nfunction reloadList() {\n  list = store.getStorage('list') || [];\n}\n\nfunction overWriteList(data) {\n  store.setStorage('list', data);\n}\n\nfunction renderList() {\n  $el.historyList.innerHTML = '';\n  list.forEach(function (history) {\n    var elDelete = void 0;\n    var elHistory = document.createElement('div');\n    elHistory.classList.add('history');\n    elHistory.dataset.history = history;\n    elHistory.innerHTML = '\\n      <div class=\"text\">' + history + '</div>\\n      <div class=\"tool\">\\n        <span class=\"delete\">delete</span>\\n      </div>\\n    ';\n    $el.historyList.appendChild(elHistory);\n\n    elHistory.addEventListener('click', function (e) {\n      if (e.target.classList.contains('delete')) {\n        return;\n      }\n      search.setKeyword(this.dataset.history);\n      search.search();\n    });\n\n    elDelete = elHistory.querySelector('.delete');\n    elDelete.addEventListener('click', onDeleteClicked);\n  });\n}\n\nfunction onDeleteClicked() {\n  var elHistory = this.closest('.history');\n  var keyword = elHistory.dataset.history;\n  if (!util.findAndDelete(list, keyword)) return;\n  overWriteList(list);\n  setTimeout(function () {\n    renderList();\n  }, 100);\n  if (!list.length) {\n    $el.historyList.hidden = true;\n  }\n}\n\nfunction append(kwd) {\n  util.findAndDelete(list, kwd);\n  list.unshift(kwd);\n  overWriteList(list);\n}\n\nmodule.exports = {\n  append: append,\n  showList: showList,\n  hideList: hideList,\n  reloadList: reloadList,\n  renderList: renderList,\n  overWriteList: overWriteList\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9oaXN0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL2hpc3RvcnkuanM/NmI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgJGVsID0gcmVxdWlyZSgnLi9lbGVtZW50JylcbmxldCBzdG9yZSA9IHJlcXVpcmUoJy4vc3RvcmUnKVxubGV0IHNlYXJjaCA9IHJlcXVpcmUoJy4vc2VhcmNoJylcbmxldCBzaGFyZSA9IHJlcXVpcmUoJy4vc2hhcmUnKVxubGV0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKVxubGV0IGxpc3RcblxuZnVuY3Rpb24gc2hvd0xpc3QoKSB7XG4gICRlbC5oaXN0b3J5TGlzdC5oaWRkZW4gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGlkZUxpc3QoKSB7XG4gICRlbC5oaXN0b3J5TGlzdC5oaWRkZW4gPSB0cnVlO1xufVxuXG5mdW5jdGlvbiByZWxvYWRMaXN0KCkge1xuICBsaXN0ID0gc3RvcmUuZ2V0U3RvcmFnZSgnbGlzdCcpIHx8IFtdXG59XG5cbmZ1bmN0aW9uIG92ZXJXcml0ZUxpc3QoZGF0YSkge1xuICBzdG9yZS5zZXRTdG9yYWdlKCdsaXN0JywgZGF0YSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdCgpIHtcbiAgJGVsLmhpc3RvcnlMaXN0LmlubmVySFRNTCA9ICcnO1xuICBsaXN0LmZvckVhY2goaGlzdG9yeSA9PiB7XG4gICAgbGV0IGVsRGVsZXRlXG4gICAgbGV0IGVsSGlzdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxIaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKVxuICAgIGVsSGlzdG9yeS5kYXRhc2V0Lmhpc3RvcnkgPSBoaXN0b3J5O1xuICAgIGVsSGlzdG9yeS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPiR7aGlzdG9yeX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICAgICRlbC5oaXN0b3J5TGlzdC5hcHBlbmRDaGlsZChlbEhpc3RvcnkpO1xuXG4gICAgZWxIaXN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYXJjaC5zZXRLZXl3b3JkKHRoaXMuZGF0YXNldC5oaXN0b3J5KVxuICAgICAgc2VhcmNoLnNlYXJjaCgpXG4gICAgfSlcblxuICAgIGVsRGVsZXRlID0gZWxIaXN0b3J5LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcbiAgICBlbERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uRGVsZXRlQ2xpY2tlZClcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9uRGVsZXRlQ2xpY2tlZCgpIHtcbiAgbGV0IGVsSGlzdG9yeSA9IHRoaXMuY2xvc2VzdCgnLmhpc3RvcnknKVxuICBsZXQga2V5d29yZCA9IGVsSGlzdG9yeS5kYXRhc2V0Lmhpc3Rvcnk7XG4gIGlmICghdXRpbC5maW5kQW5kRGVsZXRlKGxpc3QsIGtleXdvcmQpKSByZXR1cm47XG4gIG92ZXJXcml0ZUxpc3QobGlzdClcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVuZGVyTGlzdCgpXG4gIH0sIDEwMCk7XG4gIGlmICghbGlzdC5sZW5ndGgpIHtcbiAgICAkZWwuaGlzdG9yeUxpc3QuaGlkZGVuID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmQoa3dkKSB7XG4gIHV0aWwuZmluZEFuZERlbGV0ZShsaXN0LCBrd2QpXG4gIGxpc3QudW5zaGlmdChrd2QpO1xuICBvdmVyV3JpdGVMaXN0KGxpc3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwZW5kLFxuICBzaG93TGlzdCxcbiAgaGlkZUxpc3QsXG4gIHJlbG9hZExpc3QsXG4gIHJlbmRlckxpc3QsXG4gIG92ZXJXcml0ZUxpc3Rcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/history.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar eleEvent = __webpack_require__(/*! ./eleEvent */ \"./js/eleEvent.js\");\nvar history = __webpack_require__(/*! ./history */ \"./js/history.js\");\n\ninit();\n\nfunction init() {\n  history.reloadList();\n  history.renderList();\n  eleEvent.addEvent();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9pbmRleC5qcz81MzkyIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBlbGVFdmVudCA9IHJlcXVpcmUoJy4vZWxlRXZlbnQnKTtcbmxldCBoaXN0b3J5ID0gcmVxdWlyZSgnLi9oaXN0b3J5JylcblxuaW5pdCgpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBoaXN0b3J5LnJlbG9hZExpc3QoKTtcbiAgaGlzdG9yeS5yZW5kZXJMaXN0KCk7XG4gIGVsZUV2ZW50LmFkZEV2ZW50KCk7XG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/search.js":
/*!**********************!*\
  !*** ./js/search.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar share = __webpack_require__(/*! ./share */ \"./js/share.js\");\nvar $el = __webpack_require__(/*! ./element */ \"./js/element.js\");\nvar ui = __webpack_require__(/*! ./ui */ \"./js/ui.js\");\n\nfunction ajax(methods, url, successHook, failHook) {\n  methods = methods || 'GET';\n  var xhr = new XMLHttpRequest();\n  xhr.open(methods, url);\n  xhr.send();\n  xhr.addEventListener('load', function () {\n    var result = JSON.parse(this.responseText);\n    successHook(result);\n  });\n}\n\n/**\n * 通过用户名搜Github用户\n * @param String keyword 关键词\n */\nfunction search() {\n  var http = new XMLHttpRequest();\n  http.open('get', 'https://api.github.com/search/users?q=' + share.getKeyword() + '&page=' + share.getCurrentPage() + '&per_page=' + share.getLimit());\n\n  http.send();\n  http.addEventListener('load', function () {\n    var res = JSON.parse(http.responseText);\n    ui.renderUserList(res);\n    // render_pagination();\n  });\n}\n\nfunction setKeyword(val) {\n  $el.input.value = val || '';\n  share.setKeyword(val);\n}\n\nmodule.exports = {\n  ajax: ajax,\n  search: search,\n  setKeyword: setKeyword\n  // searchUsers,\n  // loadMoreUsers\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zZWFyY2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc2VhcmNoLmpzPzgxMzUiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNoYXJlID0gcmVxdWlyZSgnLi9zaGFyZScpXG5sZXQgJGVsID0gcmVxdWlyZSgnLi9lbGVtZW50JylcbmxldCB1aSA9IHJlcXVpcmUoJy4vdWknKVxuXG5mdW5jdGlvbiBhamF4KG1ldGhvZHMsIHVybCwgc3VjY2Vzc0hvb2ssIGZhaWxIb29rKSB7XG4gIG1ldGhvZHMgPSBtZXRob2RzIHx8ICdHRVQnO1xuICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKG1ldGhvZHMsIHVybCk7XG4gIHhoci5zZW5kKCk7XG4gIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICBzdWNjZXNzSG9vayhyZXN1bHQpXG4gIH0pO1xufVxuXG4vKipcbiAqIOmAmui/h+eUqOaIt+WQjeaQnEdpdGh1YueUqOaIt1xuICogQHBhcmFtIFN0cmluZyBrZXl3b3JkIOWFs+mUruivjVxuICovXG5mdW5jdGlvbiBzZWFyY2goKSB7XG4gIGxldCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGh0dHAub3BlbignZ2V0JyxcbiAgJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9JyArXG4gIHNoYXJlLmdldEtleXdvcmQoKSArXG4gICcmcGFnZT0nICtcbiAgc2hhcmUuZ2V0Q3VycmVudFBhZ2UoKSArXG4gICcmcGVyX3BhZ2U9JyArXG4gIHNoYXJlLmdldExpbWl0KCkpO1xuXG4gIGh0dHAuc2VuZCgpO1xuICBodHRwLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHJlcyA9IEpTT04ucGFyc2UoaHR0cC5yZXNwb25zZVRleHQpO1xuICAgIHVpLnJlbmRlclVzZXJMaXN0KHJlcyk7XG4gICAgLy8gcmVuZGVyX3BhZ2luYXRpb24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEtleXdvcmQodmFsKSB7XG4gICRlbC5pbnB1dC52YWx1ZSA9IHZhbCB8fCAnJztcbiAgc2hhcmUuc2V0S2V5d29yZCh2YWwpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhamF4LFxuICBzZWFyY2gsXG4gIHNldEtleXdvcmRcbiAgLy8gc2VhcmNoVXNlcnMsXG4gIC8vIGxvYWRNb3JlVXNlcnNcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/search.js\n");

/***/ }),

/***/ "./js/share.js":
/*!*********************!*\
  !*** ./js/share.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keyword = void 0;\nvar limit = 5;\nvar currentPage = void 0;\nvar amount = void 0;\n\nfunction getKeyword() {\n  return keyword;\n}\n\nfunction setKeyword(val) {\n  keyword = val;\n  return keyword;\n}\n\nfunction getLimit() {\n  return limit;\n}\n\nfunction setLimit(val) {\n  limit = val;\n  return limit;\n}\n\nfunction getCurrentPage() {\n  return currentPage;\n}\n\nfunction setCurrentPage(val) {\n  currentPage = val;\n  return currentPage;\n}\n\nfunction getAmount() {\n  return amount;\n}\n\nfunction setAmount(val) {\n  amount = val;\n  return amount;\n}\n\nmodule.exports = {\n  setCurrentPage: setCurrentPage,\n  getCurrentPage: getCurrentPage,\n  getKeyword: getKeyword,\n  setKeyword: setKeyword,\n  getAmount: getAmount,\n  setAmount: setAmount,\n  getLimit: getLimit,\n  setLimit: setLimit\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zaGFyZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zaGFyZS5qcz8xYmQzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBrZXl3b3JkXG5sZXQgbGltaXQgPSA1XG5sZXQgY3VycmVudFBhZ2VcbmxldCBhbW91bnRcblxuZnVuY3Rpb24gZ2V0S2V5d29yZCgpIHtcbiAgcmV0dXJuIGtleXdvcmQ7XG59XG5cbmZ1bmN0aW9uIHNldEtleXdvcmQodmFsKXtcbiAga2V5d29yZCA9IHZhbDtcbiAgcmV0dXJuIGtleXdvcmQ7XG59XG5cbmZ1bmN0aW9uIGdldExpbWl0KCkge1xuICByZXR1cm4gbGltaXQ7XG59XG5cbmZ1bmN0aW9uIHNldExpbWl0KHZhbCl7XG4gIGxpbWl0ID0gdmFsO1xuICByZXR1cm4gbGltaXQ7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlKCkge1xuICByZXR1cm4gY3VycmVudFBhZ2U7XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQYWdlKHZhbCl7XG4gIGN1cnJlbnRQYWdlID0gdmFsO1xuICByZXR1cm4gY3VycmVudFBhZ2U7XG59XG5cbmZ1bmN0aW9uIGdldEFtb3VudCgpIHtcbiAgcmV0dXJuIGFtb3VudDtcbn1cblxuZnVuY3Rpb24gc2V0QW1vdW50KHZhbCkge1xuICBhbW91bnQgPSB2YWw7XG4gIHJldHVybiBhbW91bnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXRDdXJyZW50UGFnZSxcbiAgZ2V0Q3VycmVudFBhZ2UsXG4gIGdldEtleXdvcmQsXG4gIHNldEtleXdvcmQsXG4gIGdldEFtb3VudCxcbiAgc2V0QW1vdW50LFxuICBnZXRMaW1pdCxcbiAgc2V0TGltaXRcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/share.js\n");

/***/ }),

/***/ "./js/store.js":
/*!*********************!*\
  !*** ./js/store.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * 利用 localstorage 存储数据\n * @param {String} key\n * @param {Any} val\n */\nfunction setStorage(key, val) {\n  var json = JSON.stringify(val);\n  localStorage.setItem(key, json);\n}\n\n/**\n * 利用键值取得 localstorage 中的变量\n * @param {String} key\n */\nfunction getStorage(key) {\n  var json = localStorage.getItem(key);\n  json = JSON.parse(json);\n  return json;\n}\n\n// 导出模块\nmodule.exports = {\n  setStorage: setStorage,\n  getStorage: getStorage\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zdG9yZS5qcz9iZDU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5Yip55SoIGxvY2Fsc3RvcmFnZSDlrZjlgqjmlbDmja5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7QW55fSB2YWxcbiAqL1xuZnVuY3Rpb24gc2V0U3RvcmFnZShrZXksIHZhbCkge1xuICBsZXQganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbClcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBqc29uKVxufVxuXG4vKipcbiAqIOWIqeeUqOmUruWAvOWPluW+lyBsb2NhbHN0b3JhZ2Ug5Lit55qE5Y+Y6YePXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cbmZ1bmN0aW9uIGdldFN0b3JhZ2Uoa2V5KSB7XG4gIGxldCBqc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICBqc29uID0gSlNPTi5wYXJzZShqc29uKVxuICByZXR1cm4ganNvbjtcbn1cblxuLy8g5a+85Ye65qih5Z2XXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0U3RvcmFnZSxcbiAgZ2V0U3RvcmFnZVxufSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/store.js\n");

/***/ }),

/***/ "./js/ui.js":
/*!******************!*\
  !*** ./js/ui.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $el = __webpack_require__(/*! ./element */ \"./js/element.js\");\nvar share = __webpack_require__(/*! ./share */ \"./js/share.js\");\n\n/**\n * 渲染用户列表\n * @param {Array} data 用于渲染的数据\n */\nfunction renderUserList(data) {\n  var html = '';\n  /*\n    if (data.total_count>5){\n      showNextBtn();\n    } */\n\n  data.items.forEach(function (user) {\n    html = html + ('\\n  <div class=\"user\">\\n    <a class=\"avatar\" target=\"_blank\" href=\"' + user.html_url + '\">\\n      <img src=\"' + user.avatar_url + '\">\\n    </a>\\n    <div class=\"info\">\\n      <div class=\"username\">' + user.login + '</div>\\n      <div><a target=\"_blank\" href=\"' + user.html_url + '\">' + user.html_url + '</a></div>\\n    </div>\\n  </div>\\n    ');\n    $el.userList.innerHTML = html;\n  });\n\n  $el.amount.innerHTML = '\\u5171\\u6709' + data.total_count + '\\u6761\\u7ED3\\u679C';\n  var noMore = share.getCurrentPage() * share.getLimit() >= share.getAmount();\n  if (noMore) {\n    $el.placeholder.hidden = false;\n  } else {\n    $el.placeholder.hidden = true;\n  }\n}\n\nmodule.exports = {\n  renderUserList: renderUserList\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91aS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy91aS5qcz9jZmIzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCAkZWwgPSByZXF1aXJlKCcuL2VsZW1lbnQnKVxubGV0IHNoYXJlID0gcmVxdWlyZSgnLi9zaGFyZScpXG5cbi8qKlxuICog5riy5p+T55So5oi35YiX6KGoXG4gKiBAcGFyYW0ge0FycmF5fSBkYXRhIOeUqOS6jua4suafk+eahOaVsOaNrlxuICovXG5mdW5jdGlvbiByZW5kZXJVc2VyTGlzdChkYXRhKSB7XG4gIGxldCBodG1sID0gJyc7XG4gIC8qXG4gICAgaWYgKGRhdGEudG90YWxfY291bnQ+NSl7XG4gICAgICBzaG93TmV4dEJ0bigpO1xuICAgIH0gKi9cblxuICBkYXRhLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHVzZXIpIHtcbiAgICBodG1sID0gaHRtbCArIGBcbiAgPGRpdiBjbGFzcz1cInVzZXJcIj5cbiAgICA8YSBjbGFzcz1cImF2YXRhclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3VzZXIuaHRtbF91cmx9XCI+XG4gICAgICA8aW1nIHNyYz1cIiR7dXNlci5hdmF0YXJfdXJsfVwiPlxuICAgIDwvYT5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInVzZXJuYW1lXCI+JHt1c2VyLmxvZ2lufTwvZGl2PlxuICAgICAgPGRpdj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt1c2VyLmh0bWxfdXJsfVwiPiR7dXNlci5odG1sX3VybH08L2E+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIGA7XG4gICAgJGVsLnVzZXJMaXN0LmlubmVySFRNTCA9IGh0bWw7XG4gIH0pO1xuXG4gICRlbC5hbW91bnQuaW5uZXJIVE1MID0gYOWFseaciSR7ZGF0YS50b3RhbF9jb3VudH3mnaHnu5PmnpxgXG4gIGxldCBub01vcmUgPSBzaGFyZS5nZXRDdXJyZW50UGFnZSgpICogc2hhcmUuZ2V0TGltaXQoKSA+PSBzaGFyZS5nZXRBbW91bnQoKTtcbiAgaWYobm9Nb3JlKXtcbiAgICAkZWwucGxhY2Vob2xkZXIuaGlkZGVuID0gZmFsc2U7XG4gIH1lbHNle1xuICAgICRlbC5wbGFjZWhvbGRlci5oaWRkZW4gPSB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZW5kZXJVc2VyTGlzdFxufSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/ui.js\n");

/***/ }),

/***/ "./js/util.js":
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction findAndDelete(arr, key) {\n  var index = arr.indexOf(key);\n  if (index == -1) {\n    return false;\n  }\n  arr.splice(index, 1);\n  return true;\n}\n\nmodule.exports = {\n  findAndDelete: findAndDelete\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy91dGlsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL3V0aWwuanM/NWU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmaW5kQW5kRGVsZXRlKGFycixrZXkpe1xuICBsZXQgaW5kZXggPSBhcnIuaW5kZXhPZihrZXkpO1xuICBpZihpbmRleCA9PSAtMSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGFyci5zcGxpY2UoaW5kZXgsMSk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmluZEFuZERlbGV0ZSBcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/util.js\n");

/***/ })

/******/ });