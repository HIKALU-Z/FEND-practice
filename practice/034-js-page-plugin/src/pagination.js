let list = [];
let el;
let onClick;
let onDelete;
let pageContainer;
let currentPage;
let maxBtnLength;
let onPagerClicked;
let totalPage;
let output = {
  init,
  render
}


function init(config) {
  if (!config.el) {
    throw 'Invalid element'
  }
  el = document.querySelector(config.el)
  maxBtnLength = config.maxBtnLength || 5;
  currentPage = config.config || 1;
  totalPage = config.totalPage || 100;
  onPagerClicked = config.onPagerClicked;
  render()
}

function render() {
  el.innerHTML = '';

  let start = 1;
  let end = maxBtnLength;
  let middle = Math.ceil(maxBtnLength / 2);
  let reachLeft = currentPage <= middle;
  let reachRight = currentPage >= totalPage - middle;

  if (reachLeft) {
    start = 1;
    end = maxBtnLength;
  } else if (reachRight) {
    start = totalPage - maxBtnLength;
    end = totalPage;
  } else {
    start = currentPage - (middle - 1)
    end = currentPage - (middle - 1)
  }

  if (totalPage < maxBtnLength) {
    end = totalPage
  }

  for (var i = start; i <= end; i++) {
    var btn = document.createElement('button');
    btn.innerText = i;
    btn.dataset.page = i;
    btn.classList.add('pager');
    if (i == currentPage) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', (function (i) {
      return function (e) {
        if (onPagerClicked) {
          onPagerClicked(e, i)
          render()
        }
      }
    })(i))
    el.appendChild(btn)
  }

}



module.exports = output