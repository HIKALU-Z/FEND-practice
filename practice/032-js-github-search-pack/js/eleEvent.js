let ele = require('./element');
let search = require('./search');

let page = 2;
let limit = 5;

function detectSubmit() {
  ele.form.addEventListener('submit', function(e) {
    e.preventDefault();
    let keyword = ele.input.value || '';
    console.log(keyword);
    search.search
  });
}

/* function detectNext() {
  ele.next.addEventListener('click', function(e) {
    e.preventDefault();
    let keyword = ele.input.value || '';
    let config = {
      page: page++,
      perPage: 5
    };
    console.log(keyword);
    search.loadMoreUsers(keyword, ele.renderUserList,function(){
      console.log('123');
    }, config);
  });
} */

function addEvent() {
  detectSubmit();
  detectNext();
}

module.exports = {
  detectSubmit,
  detectNext,
  addEvent
};
