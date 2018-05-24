window.CatUi = CatUi;

function CatUi(list_selector, add_cat_selector) {
  this.list = document.querySelector(list_selector || '#cat-list');
  this.add_cat = document.querySelector(add_cat_selector || '#add-cat')
  this.cat_form = document.querySelector('#cat-form');
  this.updatingCatItem = null;
  this._api = new CatApi();
}

CatUi.prototype.init = init;
CatUi.prototype.render = render;
CatUi.prototype.detect_add_cat_btn = detect_add_cat_btn;
CatUi.prototype.detect_click_form = detect_click_form;
CatUi.prototype.detect_click_list = detect_click_list;
CatUi.prototype.detect_submit_form = detect_submit_form;
CatUi.prototype.resetCatForoLocation = resetCatForoLocation;
CatUi.prototype.show_cat_form = show_cat_form;
CatUi.prototype.hide_cat_form = hide_cat_form;
CatUi.prototype.showAddItemBtn = showAddItemBtn;
CatUi.prototype.hideAddItemBtn = hideAddItemBtn;
CatUi.prototype.showUpdatingCatItem = showUpdatingCatItem;
CatUi.prototype.get_form_data = helper.get_form_data;
CatUi.prototype.set_form_data = helper.set_form_data;
CatUi.prototype.clear_form = helper.clear_form;


function init() {
  // console.log(this);
  this.render();
  this.detect_add_cat_btn();
  this.detect_click_form();
  this.detect_click_list();
  this.detect_submit_form();
}

function render() {
  var cat_list = this._api.read();
  var me = this;
  this.resetCatForoLocation();
  this.list.innerHTML = '';
  cat_list.forEach(function (row) {
    var el = document.createElement('div');
    el.classList.add('cat-item');
    el.dataset.id = row.id
    row.id == 1 ? el.isHidden = 'hidden' : el.isHidden = ''
    el.innerHTML = `
    <div class="input">
        <input type="text" value="${row.title}" disabled>
    </div>
    <div class="tool-set" ${el.isHidden}>
      <span class="update">更新</span>
      <span class="delete">删除</span>
    </div>
    `;
    me.list.appendChild(el);
  });
}

function detect_add_cat_btn() {
  var me = this;
  this.add_cat.addEventListener('click', function () {
    me.show_cat_form();
    me.hideAddItemBtn();
  });
}

function detect_click_form() {
  var me = this;
  this.cat_form.addEventListener('click', function (e) {
    var is_cancel_btn = e.target.dataset.action == 'cancel';
    if (is_cancel_btn) {
      me.hide_cat_form();
      me.showUpdatingCatItem();
      me.resetCatForoLocation();
      me.showAddItemBtn();
    }
  });
}

function detect_click_list() {
  var me = this;
  this.list.addEventListener("click", function (e) {
    var target = e.target;
    var cat_item = target.closest('.cat-item');
    var isDeleteBtn = target.classList.contains('delete');
    var isUpdateBtn = target.classList.contains('update');
    if (cat_item) {
      var id = cat_item.dataset.id;
    }
    if (isDeleteBtn) {
      me._api.remove(id)
      me.render()
    } else if (isUpdateBtn) {
      // 如果之前有正在更新的元素，那么点击别的地方的更新按钮，上一条被隐藏的 item 应该显示
      if (me.updatingCatItem) {
        me.updatingCatItem.hidden = false;
      }
      // 隐藏当前被点击（更新的）的 item
      cat_item.hidden = true;
      // 隐藏增加 item 按钮
      me.hideAddItemBtn();
      // 显示需要更新的 form 表单
      me.show_cat_form();
      var row = me._api.$find(id)
      me.set_form_data(me.cat_form, row)

      // form 表单插入在其 afterend 的位置
      cat_item.insertAdjacentElement('afterend', me.cat_form);
      me.updatingCatItem = cat_item;
    }
  })
}

function detect_submit_form() {
  var me = this;
  this.cat_form.addEventListener('submit', function (e) {
    e.preventDefault();
    me.showAddItemBtn();
    var row = me.get_form_data(me.cat_form);
    if (row.id) {
      me._api.update(row.id, row)
      me.hide_cat_form(); // 更新完毕后隐藏表单
    } else {
      me._api.add(row);
    }
    me.clear_form(me.cat_form);
    me.render();
  });
}

function resetCatForoLocation() {
  this.list.insertAdjacentElement('afterend', this.cat_form);
  this.clear_form(this.cat_form); // 清空表单
}

function show_cat_form() {
  this.cat_form.hidden = false;
}

function hide_cat_form() {
  this.cat_form.hidden = true;
}

function showAddItemBtn() {
  this.add_cat.hidden = false;
}

function hideAddItemBtn() {
  this.add_cat.hidden = true;
}

/**
 * 显示正在更新的那一条分组
 * 比如说用户提交了更新表单或取消更新的时候就应该隐藏表单，
 * 同时显示正在更新的那一条分组，这个方法就是用来恢复显示分组的
 *
 */
function showUpdatingCatItem() {
  if (this.updatingCatItem)
    this.updatingCatItem.hidden = false;
}