let keyword
let limit = 5
let currentPage
let amount

function getKeyword() {
  return keyword;
}

function setKeyword(val){
  keyword = val;
  return keyword;
}

function getLimit() {
  return limit;
}

function setLimit(val){
  limit = val;
  return limit;
}

function getCurrentPage() {
  return currentPage;
}

function setCurrentPage(val){
  currentPage = val;
  return currentPage;
}

function getAmount() {
  return amount;
}

function setAmount(val) {
  amount = val;
  return amount;
}

module.exports = {
  setCurrentPage,
  getCurrentPage,
  getKeyword,
  setKeyword,
  getAmount,
  setAmount,
  getLimit,
  setLimit
}