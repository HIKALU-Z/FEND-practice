let $el = require('./element')
let share = require('./share')
let pageAmount = 0;

function showPagination() {
  $el.paginationContainer.hidden = false;
}

function hidePagination() {
  $el.paginationContainer.hidden = true;
}

function clearPagination() {
  $el.pagination.innerHTML = '';
}

function getPageAmount(){
  pageAmount = Math.ceil(share.getAmount()/share.getLimit())
  return pageAmount;
}

function resetPage(){
  share.setCurrentPage(1)
}

function gotoPage(page,fn){
  let maxUserLimit = page*share.getLimit>999
  if(maxUserLimit){
    share.setCurrentPage(Math.floor(999/limit))
  } else {
    share.setCurrentPage(page)
  }
  fn()
}

module.exports = {
  showPagination,
  hidePagination,
  clearPagination,
  getPageAmount,
  resetPage,
  gotoPage,
  pageAmount
}