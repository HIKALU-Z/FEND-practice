let list = [];
let el;
let onClick;
let onDelete;
let pageContainer;
let currentPage;
let maxBtnLength;
let onPageChaged;
let totalPage;
let config;
let pageAmount;
let defaultConfig = {
  amount: null,
  limit: null,
  range: 5,
  current: 1
}
let output = {
  init,
  disabled,
  enabled
}

/**
 * 组建的初始化函数
 * @param {Object} config
 *
 * @initProperty
 *  - el: 选择器 // 必填项
 *  - amount: 总数 // 必填项
 *  - limit: 每页显示数 // 必填项
 *  - range: 可见按钮数 // 默认为5
 *  - current: 指定当前页 // 默认为1
 *
 * @initMethod
 *  - on_page_change // 当页面发生改变时触发使用者的函数
 */
function init(userConfig) {
  el = document.querySelector(userConfig.el);

  /*el为必填参数*/
  if (!el) {
    throw 'Invalid root element.';
  }

  /*amount和limit为必填参数*/
  if (!userConfig.amount || !userConfig.limit) {
    throw 'Required config.amount and config.limit.';
  }

  config = Object.assign({}, defaultConfig, userConfig)

  calcPageAmount();

  changePage(config.current, true);

  // 渲染 page 组件的骨架
  renderPageField()
  // 渲染 page 组件的数字 list
  renderPageList()
}


function renderPageField() {
  el.classList.add('pagination');

  el.innerHTML = `
  <fieldset class="pagination-fieldset">
    <div class="pagination-pre">
      <button class="pagination-first">First</button>
      <button class="pagination-prev">Prev</button>
    </div>
    <div class="pagination-list"></div>
    <div class="pagination-post">
      <button class="pagination-next">Next</button>
      <button class="pagination-last">Last</button>
    </div>
  </fieldset>
  `;

  elPaginationList = el.querySelector('.pagination-list');
  elPaginationField = el.querySelector('.pagination-fieldset');

  el.addEventListener('click', function (e) {
    let target = e.target; // 谁冒的泡

    let isNumeric = target.classList.contains('pagination-item'); // 点击了数字页
    let first = target.classList.contains('pagination-first'); // 点击了第一页
    let last = target.classList.contains('pagination-last'); // 点击了第最后一页
    let prev = target.classList.contains('pagination-prev'); // 点击了上一页
    let next = target.classList.contains('pagination-next'); // 点击了下一页

    if (isNumeric) { // 如果是数字按钮
      var page = parseInt(target.dataset.page);
      changePage(page);
    } else if (first) {
      changePage(1);
    } else if (last) {
      changePage(pageAmount);
    } else if (prev) {
      changePage(config.current - 1);
    } else if (next) {
      changePage(config.current + 1);
    }

    renderPageList();
  })
}

function renderPageList() {
  elPaginationList.innerHTML = '';

  let region = calcRegion();
  let start = region.start;
  let end = region.end;

  /*生成翻页按钮*/
  for (var i = start; i <= end; i++) {
    var btn = document.createElement('button');
    btn.innerText = i;
    btn.classList.add('pagination-item');
    btn.dataset.page = i;
    elPaginationList.appendChild(btn);

    if (i == config.current) {
      btn.classList.add('active');
    }

  }
}

/**
 * 获得总页数
 * @method Math.ceil()
 */
function calcPageAmount() {
  pageAmount = Math.ceil(config.amount / config.limit);
}

function calcRegion() {
  let start;
  let end;
  let middle = Math.ceil(config.range / 2);
  let reachingLeft = config.current <= middle;
  let reachingRight = config.current >= pageAmount - middle;

  if (reachingLeft) { // 逼近左边
    start = 1;
    end = config.range;
  } else if (reachingRight) { // 逼近右边
    start = pageAmount - (config.range - 1);
    end = pageAmount;
  } else { // 正常状态（在中间）
    start = config.current - (middle - 1);
    end = config.current + (middle - 1);
  }

  return {
    start: start,
    end: end
  };
}

function changePage(page, force) {
  let old = config.current;
  config.current = page;
  if (!force && old == config.current) {
    return;
  }

  if (page < 1) {
    config.current = 1
  } else if (page > pageAmount) {
    config.current = pageAmount
  }

  if (config.onPageChaged) {
    onPageChaged(config.current)
  }
}

function disabled() {
  el_pagination_fieldset.disabled = true;
}

function enabled() {
  el_pagination_fieldset.disabled = false;
}

module.exports = output