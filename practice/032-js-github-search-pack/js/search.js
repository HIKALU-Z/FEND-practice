function ajax(methods, url, successHook, failHook) {
  methods = methods || 'GET';
  let xhr = new XMLHttpRequest();
  xhr.open(methods,url);
  xhr.send();
  xhr.addEventListener('load', function() {
    let result = JSON.parse(this.responseText);
    successHook(result)
  });
}

function searchUsers(keyword,successHook,failHook){
  let url = 'https://api.github.com/search/users?q='+keyword+'&per_page=5';
  ajax("GET",url,successHook,failHook);
}

function loadMoreUsers(keyword,successHook,failHook,config){
  let defaultConfig = {
    page:10,
    perPage:15
  }
  config = Object.assign(defaultConfig,config)
  let url = `https://api.github.com/search/users?q=${keyword}
            &page=${config.page}&per_page=${config.perPage}`;
  ajax('GET',url,successHook,failHook)
}

module.exports = {
  ajax,
  searchUsers,
  loadMoreUsers
}