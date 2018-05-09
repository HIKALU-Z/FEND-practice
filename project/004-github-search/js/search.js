let share = require('./share')
let $el = require('./element')
let ui = require('./ui')

function ajax(methods, url, successHook, failHook) {
  methods = methods || 'GET';
  let xhr = new XMLHttpRequest();
  xhr.open(methods, url);
  xhr.send();
  xhr.addEventListener('load', function () {
    let result = JSON.parse(this.responseText);
    successHook(result)
  });
}

/**
 * 通过用户名搜Github用户
 * @param String keyword 关键词
 */
function search() {
  let http = new XMLHttpRequest();
  http.open('get',
  'https://api.github.com/search/users?q=' +
  share.getKeyword() +
  '&page=' +
  share.getCurrentPage() +
  '&per_page=' +
  share.getLimit());

  http.send();
  http.addEventListener('load', function () {
    let res = JSON.parse(http.responseText);
    share.setAmount(res.total_count)
    ui.renderUserList(res);
    ui.renderPagination(search);
  });
}

function setKeyword(val) {
  $el.input.value = val || '';
  share.setKeyword(val)
}

module.exports = {
  ajax,
  search,
  setKeyword
  // searchUsers,
  // loadMoreUsers
}