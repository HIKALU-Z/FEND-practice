let $el = require('./element');
let search = require('./search');
let store = require('./store')
let history = require('./history')
let share = require('./share')

let page = 2;
let limit = 25;

/**
 * 监听表单提交事件
 * - 如果有 keyword 提交，那么调用 searchUsers 方法
 */
function detectSubmit() {
  $el.form.addEventListener('submit', function (e) {
    e.preventDefault();
    let keyword = share.setKeyword($el.input.value)
    if (!keyword) {
      return;
    }
    search.search();
    history.append(share.getKeyword())
  });
}

/**
 * 监听输入框是否被点击，如果被点击，则显示历史记录
 */
function detectClickHistory() {
  $el.input.addEventListener('click', function () {
    history.showList()
  })
}


/**
 * 监听 html 是否被点击
 * - 如果被点击，那么进行判断，是否是在历史记录区域被点击的
 *   + 如果不是在历史区域点击那么收起历史记录
 *   + 否则 return
 */
function detectClickDocument() {
  document
    .documentElement
    .addEventListener('click', function (e) {
      let inHistoryArea = e.target.closest('#history-list');
      let inInputArea = e.target.closest('#search-input');
      if (inHistoryArea || inInputArea) {
        return
      }
      history.hideList()
    })
}

function detectNext() {
  $el.next.addEventListener('click', function (e) {
    e.preventDefault();
    let keyword = $el.input.value || '';
    let config = {
      page: page++,
      perPage: 5
    };
    console.log(keyword);
    search.loadMoreUsers(keyword, $el.renderUserList, function () {
      console.log('123');
    }, config);
  });
}

/**
 * 监听回到顶部按钮是否触发 click 事件
 * - 触发 click 事件之后 执行 toTop 函数
 */
function detectScrollToTop() {
  $el.top.addEventListener('click', function () {
    toTop()
  })
}

/**
 * 监听 window scroll
 * - 如果 window.scrollY > 400 那么显示 top 按钮
 */
function detectWindowScrollY() {
  if (!window) {
    return;
  } else {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        $el.top.hidden = false;
      } else {
        $el.top.hidden = true;
      }
    })
  }
}

/**
 * 回到页面顶部
 */
function toTop() {
  window.scrollTo(0, 0);
}

/**
 * 添加所有页面需要监听的事件
 */
function addEvent() {
  detectSubmit();
  detectScrollToTop();
  detectWindowScrollY();
  detectClickHistory();
  detectClickDocument();
  // detectNext();
}

/**
 * 导出模块
 */
module.exports = {
  detectSubmit,
  detectNext,
  addEvent
};