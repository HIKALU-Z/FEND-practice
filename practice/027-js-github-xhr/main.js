(function() {
  // 定义方法常量
  let method = {
    get: 'GET',
    post: 'POST'
  };
  let urlPrefix = 'https://api.github.com/users/';

  // 获取所需dom节点
  let form = document.querySelector('#githubForm');
  let input = document.querySelector('[type = search]');
  let userInfo = document.getElementById('user-info');
  let userName = document.querySelector('#userName');

  /**
   * 入口函数
   * 目的是为了初始化一些变量并给 form 表单添加默认的提交事件
   */
  function init() {
    form.addEventListener('submit', function(e) {
      // form 表单的默认提交事件会刷新浏览器，所以需要阻止默认事件的发生
      e.preventDefault();
      let keyword = input.value;
      search(keyword);
    });
  }

  /**
   * 此函数用于 form 绑定的搜索事件
   * 会将 keyword 传入，组合成新 url 并进行 ajax 调用
   * @param {String} keyword
   */
  function search(keyword) {
    let url = urlPrefix + keyword;
    ajax(method.get, url, reqListener);
  }

  /**
   * 一个通用的 ajax 方法 (在本例中实际上还可以继续优化)
   * @param {String} method
   * @param {String} url
   * @param {Function} fn
   */
  function ajax(method, url, fn) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    xhr.addEventListener('load', function() {
      let data = JSON.parse(this.responseText);
      fn(data);
    });
  }

  /**
   * ajax回调函数
   * @param {object} data
   */
  function reqListener(data) {
    if (!data) {
      console.log('error');
    } else {
      console.log(data);
      render(data);
    }
  }

  function render(data) {
    userName.innerText = 'id:'+data.id;
    let html = `用户名: ${data.login} <br>
         头像：<img src="${data.avatar_url}" width='150px'>`;
    let newDiv = document.createElement('div');
    newDiv.innerHTML = html
    userInfo.appendChild(newDiv);
  }

  // 运行初始化函数
  init();
})();
