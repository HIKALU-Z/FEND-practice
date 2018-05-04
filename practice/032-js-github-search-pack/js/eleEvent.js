let ele = require('./element');
let searchService = require('./searchService');
let page = 2;
let limit = 5;
function detect_submit() {
  ele.form.addEventListener('submit', function(e) {
    e.preventDefault();
    let keyword = ele.input.value || '';
    console.log(keyword);
    searchService.searchUsers(keyword, ele.renderUserList);
  });
}

function detect_next() {
  ele.next.addEventListener('click', function(e) {
    e.preventDefault();
    let keyword = ele.input.value || '';
    let config = {
      page: page++,
      perPage: 5
    };
    console.log(keyword);
    searchService.loadMoreUsers(keyword, ele.renderUserList,function(){
      console.log('123');
    }, config);
  });
}

function add_events() {
  detect_submit();
  detect_next();
}

module.exports = {
  detect_submit: detect_submit,
  add_events: add_events
};
