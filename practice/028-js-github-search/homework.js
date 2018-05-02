/*模板床*/
var el_user_list = document.getElementById('user-list'),
  el_form = document.getElementById('search-form'),
  el_input = document.getElementById('search-input'),
  el_loadMore = document.getElementById('load-more');

/*返回的数据*/
var res,keyword;
let pageNum = 1;
const perPage = 5;

init();


function init() {
  detect_submit();
  detectLoadMore()
}

/*通过用户名搜Github用户
 * @param String keyword 关键词
 */
function search(keyword) {
  let url = 'https://api.github.com/search/users?q=' + keyword +
            '&page=' + pageNum + '&per_page=' + perPage;
  ajax('get', url, render)
}

function ajax(method,url,fn){
  method = method || 'GET';
  var http = new XMLHttpRequest();
  http.open('get', url);
  http.send();
  http.addEventListener('load', function() {
    res = JSON.parse(http.responseText);
    if(fn){
      fn();
    }
  });
}

/*绑定表单提交事件*/
function detect_submit() {
  el_form.addEventListener('submit', function(e) {
    e.preventDefault();
    keyword = el_input.value;
    el_user_list.innerHTML = '<div></div>'
    if (!keyword) {
      alert('你闹呢');
      return;
    }
    search(keyword);
  });
}

function detectLoadMore(){
  el_loadMore.addEventListener('click',function(){
    loadMore();
  })
}

function loadMore(){
  pageNum++;
  search(keyword)
}

/**
 * 通过数据生成HTML
 */
function render() {
  /*初始化HTML*/
  var html = '';
  if (res.items.length >= perPage) {
    el_loadMore.hidden = false;
  }
  console.log(res);
  /*遍历用户列表*/
  res.items.forEach(function(user) {
    /*每个用户都追加到HTML后面*/
    html =
      html +
      `
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
  });
  let perDiv = document.createElement('div')
  perDiv.innerHTML = html

  /*将生成的HTML写入模板床*/
  el_user_list.appendChild(perDiv)
  document.getElementById('amount').innerHTML = `共有${res.total_count}条结果`;
}
