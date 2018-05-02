;(function(){
  'use strict'
  function searchUser(keyword) {
    let url = 'https://api.github.com/search/users?q=' + keyword;
    ajax.get(url, render);
  }

  function searchRepo(keyword) {
    let url = 'https://api.github.com/search/repositories?q=' + keyword;
    ajax.get(url, render);
  }

  function render(data) {
    console.log(data);
  }

  window.search = {
    searchUser,
    searchRepo,
    render
  }
})();