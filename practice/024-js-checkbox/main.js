(function() {
  let checkAllBtn = document.querySelector('#checkAll');
  let unCheckAllBtn = document.querySelector('#unCheckAll');
  let reverseCheckBtn = document.querySelector('#reverseCheck');
  let allCheckbox = document.querySelectorAll('[type=checkbox]');
  let startIndex;
  let endIndex;
  let start;

  // 第二种类型的 checkbox 在点击完自身之后，如果选中，那么清除其他 CheckBox 的选中状态
  let checkList_2 = document.querySelector('.checkList_2').querySelectorAll('[type=checkbox]');

  /**
   * 为全选按钮增添 click 事件
   */
  checkAllBtn.addEventListener('click', function(e) {
    allCheckbox.forEach(checkbox => {
      checkbox.checked = true;
    });
  });

  /**
   * 为取消全选按钮增添 click 事件
   */
  unCheckAllBtn.addEventListener('click', function(e) {
    allCheckbox.forEach(checkbox => {
      checkbox.checked = false;
    });
  });

  /**
   * 为反选按钮增添 click 事件
   */
  reverseCheckBtn.addEventListener('click', function(e) {
    allCheckbox.forEach(checkbox => {
      checkbox.checked = !checkbox.checked;
    });
  });

  /**
   * 为所有的 checkbox 添加监听事件
   * 如果在 click 过程中使用 shift 键, 那么应用其实位置的状态至终止位置
   */
  allCheckbox.forEach((checkbox, i) => {
    checkbox.addEventListener('click', function(e) {
      if (e.shiftKey) {
        endIndex = i;
        applyCheckStatusBetween(startIndex, endIndex);
      } else {
        startIndex = i;
        start = this;
      }
    });
  });

  /**
   * 循环 checkboxlist 应用其实位置的状态
   * @param {*} startIndex 应用状态的起始位置
   * @param {*} endIndex 应用状态的终止位
   */
  function applyCheckStatusBetween(startIndex, endIndex) {
    if (start === undefined || endIndex === undefined) {
      return;
    }
    allCheckbox.forEach((checkbox, i) => {
      // 自上而下
      if (startIndex < endIndex) {
        if (i >= startIndex && i <= endIndex) {
          checkbox.checked = start.checked;
        }
      } else {
        // 自下而上
        if (i <= startIndex && i >= endIndex) {
          checkbox.checked = start.checked;
        }
      }
    });
  }

  /**
   * 本函数用于清楚所有除了自身的其他 checkbox 的 checked 状态
   * @param {obj} except
   */
  function unCheckOthers(except) {
    checkList_2.forEach(function(item) {
      /*如果正在迭代的元素是传进来的例外元素，那么就不要管，直接返回*/
      if (item === except) return;
      /*否则取消打钩*/
      item.checked = false;
    });
  }

  /**
   * 为第二类 checkbox 添加监听事件
   */

  checkList_2.forEach(list => {
    list.addEventListener('click', function() {
      unCheckOthers(this);
    });
  });
})();
