let form = document.getElementById('search-form');
let input = document.getElementById('search-input');
let next = document.getElementById('next');
let userList = document.getElementById('user-list');


/**
 * 渲染用户列表
 * @param {Array} data 用于渲染的数据
 */
function renderUserList(data) {
  var html = userList.innerHTML;

  if (data.total_count>5){
    showNextBtn();
  }

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

    userList.innerHTML = html;
  });
}

function showNextBtn(){
  next.hidden = false;
}

function hideNextBtn(){
  next.hidden = true;
}

module.exports = {
  form,
  input,
  userList,
  next,
  showNextBtn,
  hideNextBtn,
  renderUserList
}