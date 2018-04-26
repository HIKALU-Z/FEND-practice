(function() {
  let userInfoDiv = document.querySelector('#user-info');
  let keyword = 'hikalu';
  let api = {
    github:{
      url:'https://api.github.com/users?q='
    }
  };
  let method = {
    get:'GET',
    post:'POST'
  }

  function searchByKeyword(keyword) {
    url = api.github.url + keyword;
    ajax(method.get, url, render);
  }

  function ajax(method, url, fn) {
    method = method || 'GET';
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    xhr.onload = function() {
      let data = JSON.parse(this.responseText);
      if(fn){
        fn(data)
      }
    };
  }

  function render(userList) {
    let html = '';
    userList.forEach(user => {
      let template = `
        <div class='user'>
          <div class='avatar'>
            <img src='${user.avatar_url}'/>
          </div>
          <div class='user-name'>${user.login}</div>
          <a href='${user.html_url}'>${user.html_url}</a>
        </div>
      `
      html = html + template;
    });
    userInfoDiv.innerHTML = html;
  }

  function init() {
    searchByKeyword(keyword);
  }

  init();
})();
