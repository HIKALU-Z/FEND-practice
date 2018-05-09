let form = document.getElementById('search-form');
let input = document.getElementById('search-input');
let userList = document.getElementById('user-list');
let historyList = document.getElementById('history-list');
let top = document.getElementById('top');
let placeholder = document.getElementById('placeholder')
let amount = document.getElementById('amount')
let pagination = document.getElementById('pagination')
let paginationContainer = document.getElementById('pagination-container')
let pageStart = document.getElementById('pagination-start')
let pageEnd = document.getElementById('pagination-end')

module.exports = {
  top,
  form,
  input,
  userList,
  historyList,
  amount,
  placeholder,
  pagination,
  pageEnd,
  pageStart,
  paginationContainer
  // renderUserList
}