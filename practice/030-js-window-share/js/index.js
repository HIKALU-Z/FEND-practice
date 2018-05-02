(function() {
  'use strict'
  let form = document.querySelector('#form');
  let keywordInput = document.getElementById('keyword-input')


  function init() {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let keyword = keywordInput.value;
      search.searchUser(keyword);
      search.searchRepo(keyword);
    });
  }

  init();

  function searchUser(keyword) {
    let url = 'https://api.github.com/search/users?q=' + keyword;
    ajax.get(url, renderUser);
  }

  function renderUser(data) {
    console.log(data);
  }
})();
