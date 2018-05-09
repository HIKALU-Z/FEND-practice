let $el = require('./element')
let share = require('./share')
let search = require('./search')
let pagination = require('./pagination')

/**
 * 渲染用户列表
 * @param {Array} data 用于渲染的数据
 */
function renderUserList(data) {
  let html = '';
  data.items.forEach(function (user) {
    html = html + `
  <div class="user">
    <a class="avatar" target="_blank" href="${user.html_url}">
      <img src="${user.avatar_url}">
    </a>
    <div class="info">
      <div class="username">${user.login}</div>
      <div><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
    </div>
  </div>
    `;
    $el.userList.innerHTML = html;
  });

  $el.amount.innerHTML = `共有${data.total_count}条结果`
  let noMore = share.getCurrentPage() * share.getLimit() >= share.getAmount();
  if (noMore) {
    $el.placeholder.hidden = false;
  } else {
    $el.placeholder.hidden = true;
  }
}

function renderPagination(fn) {
  pagination.showPagination()
  pagination.clearPagination()
  let pageAmount = pagination.getPageAmount();
  let start;
  let end;
  let maxPageBtn = 5;
  let middle = Math.ceil(maxPageBtn / 2)
  let currentPage = share.getCurrentPage();
  let reachingLeft = currentPage <= middle;
  let reachingRight = currentPage >= pageAmount - middle;

  if (reachingLeft) {
    start = 1;
    end = maxPageBtn;
  } else if (reachingRight) {
    start = pageAmount - maxPageBtn;
    end = pageAmount;
  } else {
    start = currentPage - middle + 1;
    end = currentPage + middle - 1;
  }

  for (var i = start; i <= end; i++) {
    let num = i;
    let btn = document.createElement('button');
    btn.innerText = num;
    btn.classList.add('pager')

    if (currentPage == num) {
      btn.classList.add('active');
    }

    $el.pagination.appendChild(btn);
    btn.addEventListener('click', (function (num) {
      return function (e) {
        currentPage = share.setCurrentPage(num);
        fn()
      }
    })(num))
  }
}

function onPageChange(num) {
  return function (e) {
    currentPage = share.setCurrentPage(num)
    search.search()
  }
}

module.exports = {
  renderUserList,
  renderPagination
}