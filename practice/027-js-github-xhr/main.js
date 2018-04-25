(function() {
  // 定义方法常量
  let method = {
    get: 'GET',
    post: 'POST'
  };
  let urlPrefix = 'https://api.github.com/users/';

  // 获取所需dom节点
  let form = document.querySelector('#search-form');
  let input = document.querySelector('[type = search]');
  let userInfo = document.getElementById('user-info');
  let userName = document.querySelector('#userName')

  /**
   *
   */
  function init() {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      findUser(getUserName());
    });
  }

  function findUser(userName) {
    let url = urlPrefix + userName;
    ajax(method.get, url, reqListener);
  }

  function getUserName(){
    return input.value;
  }

  function ajax(method, url, fn) {
    method = method || 'GET';
    let xhr = new XMLHttpRequest();
    xhr.open(method,url)
    xhr.send()
    xhr.addEventListener('load',function(){
      let data = JSON.parse(this.responseText);
      if(fn){
        fn(data);
      }
    })
  }

  function reqListener(data){
    render(data)
  }

  function render(data){
    let html = `
      <h2>${data.login}</h2>
      <img src=${data.avatar_url}>
    `
    userInfo.innerHTML = html;
  }

  init();
})();
