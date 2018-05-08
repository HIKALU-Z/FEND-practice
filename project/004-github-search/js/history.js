let $el = require('./element')
let store = require('./store')
let search = require('./search')
let share = require('./share')
let util = require('./util')
let list

function showList() {
  $el.historyList.hidden = false;
}

function hideList() {
  $el.historyList.hidden = true;
}

function reloadList() {
  list = store.getStorage('list') || []
}

function overWriteList(data) {
  store.setStorage('list', data)
}

function renderList() {
  $el.historyList.innerHTML = '';
  list.forEach(history => {
    let elDelete
    let elHistory = document.createElement('div')
    elHistory.classList.add('history')
    elHistory.dataset.history = history;
    elHistory.innerHTML = `
      <div class="text">${history}</div>
      <div class="tool">
        <span class="delete">delete</span>
      </div>
    `
    $el.historyList.appendChild(elHistory);

    elHistory.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        return;
      }
      search.setKeyword(this.dataset.history)
      search.search()
    })

    elDelete = elHistory.querySelector('.delete');
    elDelete.addEventListener('click', onDeleteClicked)
  });
}

function onDeleteClicked() {
  let elHistory = this.closest('.history')
  let keyword = elHistory.dataset.history;
  if (!util.findAndDelete(list, keyword)) return;
  overWriteList(list)
  setTimeout(() => {
    renderList()
  }, 100);
  if (!list.length) {
    $el.historyList.hidden = true;
  }
}

function append(kwd) {
  util.findAndDelete(list, kwd)
  list.unshift(kwd);
  overWriteList(list);
}

module.exports = {
  append,
  showList,
  hideList,
  reloadList,
  renderList,
  overWriteList
}