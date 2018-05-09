// import {
//   on
// } from "cluster";


let list = [];
let el;
let onClick;
let onDelete;


const init = (config) => {
  if (!config.el) {
    throw 'Invalid root element!'
  }
  el = document.querySelector(config.el);
  if (!el) {
    throw 'Invalid Selector!'
  }
  onClick = config.onClick;
  onDelete = config.onDelete;
  syncToList()
  render()

  // return output
}

const addHistory = (keyword) => {
  if (list.includes(keyword)) {
    return;
  }
  list.unshift(keyword);
  syncToStorage()
  render();
}

const deleteHistory = (keyword) => {
  let shitIndex = list.indexOf(keyword);
  if (shitIndex == -1) {
    return
  } else {
    list.splice(shitIndex, 1)
    syncToStorage()
    render()
  }
}

const clear = () => {
  list = []
}

const syncToStorage = () => {
  setStorage('history-list', list)
}

const syncToList = () => {
  list = getStorage('history-list') || [];
}


const setStorage = (keyword, val) => {
  val = JSON.stringify(val)
  localStorage.setItem(keyword, val)
}

const getStorage = (keyword) => {
  let val = localStorage.getItem(keyword);
  val = JSON.parse(val);
  return val;
}

const render = () => {
  list.forEach(keyword => {
    let elRow = document.createElement('div')
    elRow.classList.add('history');
    elRow.innerHTML = `
      <div class="text">${keyword}</div>
      <div class="tool">
        <span class="delete">delete</span>
      </div>
    `
    elRow.addEventListener('click', function (e) {
      onClick(keyword,e)
    })
    el.appendChild(elRow)
    elRow
      .querySelector('.delete')
      .addEventListener('click', function (e) {
        onDelete(keyword,e)
      })
  });
}

let output = {
  init,
  addHistory,
  deleteHistory,
  clear
}
module.exports = output