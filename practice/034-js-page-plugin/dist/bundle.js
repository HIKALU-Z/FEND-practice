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

eval("let list = [];\nlet el;\nlet onClick;\nlet onDelete;\nlet pageContainer;\nlet currentPage;\nlet maxBtnLength;\nlet onPageChaged;\nlet totalPage;\nlet config;\nlet pageAmount;\nlet defaultConfig = {\n  amount: null,\n  limit: null,\n  range: 5,\n  current: 1\n}\nlet output = {\n  init,\n  disabled,\n  enabled\n}\n\n/**\n * 组建的初始化函数\n * @param {Object} config\n *\n * @initProperty\n *  - el: 选择器 // 必填项\n *  - amount: 总数 // 必填项\n *  - limit: 每页显示数 // 必填项\n *  - range: 可见按钮数 // 默认为5\n *  - current: 指定当前页 // 默认为1\n *\n * @initMethod\n *  - on_page_change // 当页面发生改变时触发使用者的函数\n */\nfunction init(userConfig) {\n  el = document.querySelector(userConfig.el);\n\n  /*el为必填参数*/\n  if (!el) {\n    throw 'Invalid root element.';\n  }\n\n  /*amount和limit为必填参数*/\n  if (!userConfig.amount || !userConfig.limit) {\n    throw 'Required config.amount and config.limit.';\n  }\n\n  config = Object.assign({}, defaultConfig, userConfig)\n\n  calcPageAmount();\n\n  changePage(config.current, true);\n\n  // 渲染 page 组件的骨架\n  renderPageField()\n  // 渲染 page 组件的数字 list\n  renderPageList()\n}\n\n\nfunction renderPageField() {\n  el.classList.add('pagination');\n\n  el.innerHTML = `\n  <fieldset class=\"pagination-fieldset\">\n    <div class=\"pagination-pre\">\n      <button class=\"pagination-first\">First</button>\n      <button class=\"pagination-prev\">Prev</button>\n    </div>\n    <div class=\"pagination-list\"></div>\n    <div class=\"pagination-post\">\n      <button class=\"pagination-next\">Next</button>\n      <button class=\"pagination-last\">Last</button>\n    </div>\n  </fieldset>\n  `;\n\n  elPaginationList = el.querySelector('.pagination-list');\n  elPaginationField = el.querySelector('.pagination-fieldset');\n\n  el.addEventListener('click', function (e) {\n    let target = e.target; // 谁冒的泡\n\n    let isNumeric = target.classList.contains('pagination-item'); // 点击了数字页\n    let first = target.classList.contains('pagination-first'); // 点击了第一页\n    let last = target.classList.contains('pagination-last'); // 点击了第最后一页\n    let prev = target.classList.contains('pagination-prev'); // 点击了上一页\n    let next = target.classList.contains('pagination-next'); // 点击了下一页\n\n    if (isNumeric) { // 如果是数字按钮\n      var page = parseInt(target.dataset.page);\n      changePage(page);\n    } else if (first) {\n      changePage(1);\n    } else if (last) {\n      changePage(pageAmount);\n    } else if (prev) {\n      changePage(config.current - 1);\n    } else if (next) {\n      changePage(config.current + 1);\n    }\n\n    renderPageList();\n  })\n}\n\nfunction renderPageList() {\n  elPaginationList.innerHTML = '';\n\n  let region = calcRegion();\n  let start = region.start;\n  let end = region.end;\n\n  /*生成翻页按钮*/\n  for (var i = start; i <= end; i++) {\n    var btn = document.createElement('button');\n    btn.innerText = i;\n    btn.classList.add('pagination-item');\n    btn.dataset.page = i;\n    elPaginationList.appendChild(btn);\n\n    if (i == config.current) {\n      btn.classList.add('active');\n    }\n\n  }\n}\n\n/**\n * 获得总页数\n * @method Math.ceil()\n */\nfunction calcPageAmount() {\n  pageAmount = Math.ceil(config.amount / config.limit);\n}\n\nfunction calcRegion() {\n  let start;\n  let end;\n  let middle = Math.ceil(config.range / 2);\n  let reachingLeft = config.current <= middle;\n  let reachingRight = config.current >= pageAmount - middle;\n\n  if (reachingLeft) { // 逼近左边\n    start = 1;\n    end = config.range;\n  } else if (reachingRight) { // 逼近右边\n    start = pageAmount - (config.range - 1);\n    end = pageAmount;\n  } else { // 正常状态（在中间）\n    start = config.current - (middle - 1);\n    end = config.current + (middle - 1);\n  }\n\n  return {\n    start: start,\n    end: end\n  };\n}\n\nfunction changePage(page, force) {\n  let old = config.current;\n  config.current = page;\n  if (!force && old == config.current) {\n    return;\n  }\n\n  if (page < 1) {\n    config.current = 1\n  } else if (page > pageAmount) {\n    config.current = pageAmount\n  }\n\n  if (config.onPageChaged) {\n    onPageChaged(config.current)\n  }\n}\n\nfunction disabled() {\n  el_pagination_fieldset.disabled = true;\n}\n\nfunction enabled() {\n  el_pagination_fieldset.disabled = false;\n}\n\nmodule.exports = output//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnaW5hdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdpbmF0aW9uLmpzP2QxMzkiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGxpc3QgPSBbXTtcbmxldCBlbDtcbmxldCBvbkNsaWNrO1xubGV0IG9uRGVsZXRlO1xubGV0IHBhZ2VDb250YWluZXI7XG5sZXQgY3VycmVudFBhZ2U7XG5sZXQgbWF4QnRuTGVuZ3RoO1xubGV0IG9uUGFnZUNoYWdlZDtcbmxldCB0b3RhbFBhZ2U7XG5sZXQgY29uZmlnO1xubGV0IHBhZ2VBbW91bnQ7XG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcbiAgYW1vdW50OiBudWxsLFxuICBsaW1pdDogbnVsbCxcbiAgcmFuZ2U6IDUsXG4gIGN1cnJlbnQ6IDFcbn1cbmxldCBvdXRwdXQgPSB7XG4gIGluaXQsXG4gIGRpc2FibGVkLFxuICBlbmFibGVkXG59XG5cbi8qKlxuICog57uE5bu655qE5Yid5aeL5YyW5Ye95pWwXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gKlxuICogQGluaXRQcm9wZXJ0eVxuICogIC0gZWw6IOmAieaLqeWZqCAvLyDlv4XloavpoblcbiAqICAtIGFtb3VudDog5oC75pWwIC8vIOW/heWhq+mhuVxuICogIC0gbGltaXQ6IOavj+mhteaYvuekuuaVsCAvLyDlv4XloavpoblcbiAqICAtIHJhbmdlOiDlj6/op4HmjInpkq7mlbAgLy8g6buY6K6k5Li6NVxuICogIC0gY3VycmVudDog5oyH5a6a5b2T5YmN6aG1IC8vIOm7mOiupOS4ujFcbiAqXG4gKiBAaW5pdE1ldGhvZFxuICogIC0gb25fcGFnZV9jaGFuZ2UgLy8g5b2T6aG16Z2i5Y+R55Sf5pS55Y+Y5pe26Kem5Y+R5L2/55So6ICF55qE5Ye95pWwXG4gKi9cbmZ1bmN0aW9uIGluaXQodXNlckNvbmZpZykge1xuICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckNvbmZpZy5lbCk7XG5cbiAgLyplbOS4uuW/heWhq+WPguaVsCovXG4gIGlmICghZWwpIHtcbiAgICB0aHJvdyAnSW52YWxpZCByb290IGVsZW1lbnQuJztcbiAgfVxuXG4gIC8qYW1vdW505ZKMbGltaXTkuLrlv4Xloavlj4LmlbAqL1xuICBpZiAoIXVzZXJDb25maWcuYW1vdW50IHx8ICF1c2VyQ29uZmlnLmxpbWl0KSB7XG4gICAgdGhyb3cgJ1JlcXVpcmVkIGNvbmZpZy5hbW91bnQgYW5kIGNvbmZpZy5saW1pdC4nO1xuICB9XG5cbiAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgdXNlckNvbmZpZylcblxuICBjYWxjUGFnZUFtb3VudCgpO1xuXG4gIGNoYW5nZVBhZ2UoY29uZmlnLmN1cnJlbnQsIHRydWUpO1xuXG4gIC8vIOa4suafkyBwYWdlIOe7hOS7tueahOmqqOaetlxuICByZW5kZXJQYWdlRmllbGQoKVxuICAvLyDmuLLmn5MgcGFnZSDnu4Tku7bnmoTmlbDlrZcgbGlzdFxuICByZW5kZXJQYWdlTGlzdCgpXG59XG5cblxuZnVuY3Rpb24gcmVuZGVyUGFnZUZpZWxkKCkge1xuICBlbC5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uJyk7XG5cbiAgZWwuaW5uZXJIVE1MID0gYFxuICA8ZmllbGRzZXQgY2xhc3M9XCJwYWdpbmF0aW9uLWZpZWxkc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcHJlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1maXJzdFwiPkZpcnN0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1wcmV2XCI+UHJldjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wb3N0XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1uZXh0XCI+TmV4dDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tbGFzdFwiPkxhc3Q8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9maWVsZHNldD5cbiAgYDtcblxuICBlbFBhZ2luYXRpb25MaXN0ID0gZWwucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb24tbGlzdCcpO1xuICBlbFBhZ2luYXRpb25GaWVsZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uLWZpZWxkc2V0Jyk7XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDsgLy8g6LCB5YaS55qE5rOhXG5cbiAgICBsZXQgaXNOdW1lcmljID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbi1pdGVtJyk7IC8vIOeCueWHu+S6huaVsOWtl+mhtVxuICAgIGxldCBmaXJzdCA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24tZmlyc3QnKTsgLy8g54K55Ye75LqG56ys5LiA6aG1XG4gICAgbGV0IGxhc3QgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLWxhc3QnKTsgLy8g54K55Ye75LqG56ys5pyA5ZCO5LiA6aG1XG4gICAgbGV0IHByZXYgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLXByZXYnKTsgLy8g54K55Ye75LqG5LiK5LiA6aG1XG4gICAgbGV0IG5leHQgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLW5leHQnKTsgLy8g54K55Ye75LqG5LiL5LiA6aG1XG5cbiAgICBpZiAoaXNOdW1lcmljKSB7IC8vIOWmguaenOaYr+aVsOWtl+aMiemSrlxuICAgICAgdmFyIHBhZ2UgPSBwYXJzZUludCh0YXJnZXQuZGF0YXNldC5wYWdlKTtcbiAgICAgIGNoYW5nZVBhZ2UocGFnZSk7XG4gICAgfSBlbHNlIGlmIChmaXJzdCkge1xuICAgICAgY2hhbmdlUGFnZSgxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QpIHtcbiAgICAgIGNoYW5nZVBhZ2UocGFnZUFtb3VudCk7XG4gICAgfSBlbHNlIGlmIChwcmV2KSB7XG4gICAgICBjaGFuZ2VQYWdlKGNvbmZpZy5jdXJyZW50IC0gMSk7XG4gICAgfSBlbHNlIGlmIChuZXh0KSB7XG4gICAgICBjaGFuZ2VQYWdlKGNvbmZpZy5jdXJyZW50ICsgMSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGFnZUxpc3QoKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFnZUxpc3QoKSB7XG4gIGVsUGFnaW5hdGlvbkxpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGV0IHJlZ2lvbiA9IGNhbGNSZWdpb24oKTtcbiAgbGV0IHN0YXJ0ID0gcmVnaW9uLnN0YXJ0O1xuICBsZXQgZW5kID0gcmVnaW9uLmVuZDtcblxuICAvKueUn+aIkOe/u+mhteaMiemSriovXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gaTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbi1pdGVtJyk7XG4gICAgYnRuLmRhdGFzZXQucGFnZSA9IGk7XG4gICAgZWxQYWdpbmF0aW9uTGlzdC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgaWYgKGkgPT0gY29uZmlnLmN1cnJlbnQpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgfVxufVxuXG4vKipcbiAqIOiOt+W+l+aAu+mhteaVsFxuICogQG1ldGhvZCBNYXRoLmNlaWwoKVxuICovXG5mdW5jdGlvbiBjYWxjUGFnZUFtb3VudCgpIHtcbiAgcGFnZUFtb3VudCA9IE1hdGguY2VpbChjb25maWcuYW1vdW50IC8gY29uZmlnLmxpbWl0KTtcbn1cblxuZnVuY3Rpb24gY2FsY1JlZ2lvbigpIHtcbiAgbGV0IHN0YXJ0O1xuICBsZXQgZW5kO1xuICBsZXQgbWlkZGxlID0gTWF0aC5jZWlsKGNvbmZpZy5yYW5nZSAvIDIpO1xuICBsZXQgcmVhY2hpbmdMZWZ0ID0gY29uZmlnLmN1cnJlbnQgPD0gbWlkZGxlO1xuICBsZXQgcmVhY2hpbmdSaWdodCA9IGNvbmZpZy5jdXJyZW50ID49IHBhZ2VBbW91bnQgLSBtaWRkbGU7XG5cbiAgaWYgKHJlYWNoaW5nTGVmdCkgeyAvLyDpgLzov5Hlt6bovrlcbiAgICBzdGFydCA9IDE7XG4gICAgZW5kID0gY29uZmlnLnJhbmdlO1xuICB9IGVsc2UgaWYgKHJlYWNoaW5nUmlnaHQpIHsgLy8g6YC86L+R5Y+z6L65XG4gICAgc3RhcnQgPSBwYWdlQW1vdW50IC0gKGNvbmZpZy5yYW5nZSAtIDEpO1xuICAgIGVuZCA9IHBhZ2VBbW91bnQ7XG4gIH0gZWxzZSB7IC8vIOato+W4uOeKtuaAge+8iOWcqOS4remXtO+8iVxuICAgIHN0YXJ0ID0gY29uZmlnLmN1cnJlbnQgLSAobWlkZGxlIC0gMSk7XG4gICAgZW5kID0gY29uZmlnLmN1cnJlbnQgKyAobWlkZGxlIC0gMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBlbmQ6IGVuZFxuICB9O1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2UsIGZvcmNlKSB7XG4gIGxldCBvbGQgPSBjb25maWcuY3VycmVudDtcbiAgY29uZmlnLmN1cnJlbnQgPSBwYWdlO1xuICBpZiAoIWZvcmNlICYmIG9sZCA9PSBjb25maWcuY3VycmVudCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYWdlIDwgMSkge1xuICAgIGNvbmZpZy5jdXJyZW50ID0gMVxuICB9IGVsc2UgaWYgKHBhZ2UgPiBwYWdlQW1vdW50KSB7XG4gICAgY29uZmlnLmN1cnJlbnQgPSBwYWdlQW1vdW50XG4gIH1cblxuICBpZiAoY29uZmlnLm9uUGFnZUNoYWdlZCkge1xuICAgIG9uUGFnZUNoYWdlZChjb25maWcuY3VycmVudClcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZCgpIHtcbiAgZWxfcGFnaW5hdGlvbl9maWVsZHNldC5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZWQoKSB7XG4gIGVsX3BhZ2luYXRpb25fZmllbGRzZXQuZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdXRwdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pagination.js\n");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let pagination = __webpack_require__(/*! ../src/pagination */ \"./src/pagination.js\")\n\npagination.init({\n  el:\"#pagination-container\",\n  amount:1000,\n  limit:5,\n  range:7,\n  onPagerClicked:function(e,num){\n    console.log(num);\n  }\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0L3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3Rlc3QuanM/MzdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4uL3NyYy9wYWdpbmF0aW9uJylcblxucGFnaW5hdGlvbi5pbml0KHtcbiAgZWw6XCIjcGFnaW5hdGlvbi1jb250YWluZXJcIixcbiAgYW1vdW50OjEwMDAsXG4gIGxpbWl0OjUsXG4gIHJhbmdlOjcsXG4gIG9uUGFnZXJDbGlja2VkOmZ1bmN0aW9uKGUsbnVtKXtcbiAgICBjb25zb2xlLmxvZyhudW0pO1xuICB9XG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./test/test.js\n");

/***/ })

/******/ });