let $el = require('./element')
let share = require('./share')

/**
 * 渲染用户列表
 * @param {Array} data 用于渲染的数据
 */
function renderUserList(data) {
  let html = '';
  /*
    if (data.total_count>5){
      showNextBtn();
    } */

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
  if(noMore){
    $el.placeholder.hidden = false;
  }else{
    $el.placeholder.hidden = true;
  }
}

module.exports = {
  renderUserList
}