window.CatUi = CatUi;

function CatUi(list_selector, add_cat_selector) {
  this.list = document.querySelector(list_selector || '#cat-list');
  this.add_cat = document.querySelector(add_cat_selector || '#add-cat')
  this.cat_form = document.querySelector('#cat-form');
  this._api = new CatApi();
}

CatUi.prototype.render = render;
CatUi.prototype.init = init;
CatUi.prototype.detect_show_form = detect_show_form;
CatUi.prototype.detect_click_form = detect_click_form;
CatUi.prototype.detect_click_list = detect_click_list;
CatUi.prototype.detect_submit_form = detect_submit_form;
CatUi.prototype.show_cat_input = show_cat_input;
CatUi.prototype.hide_cat_input = hide_cat_input;
CatUi.prototype.get_form_data = helper.get_form_data;
CatUi.prototype.set_form_data = helper.set_form_data;
CatUi.prototype.clear_form = helper.clear_form;


function init() {
  console.log(this);
  this.render();
  this.detect_show_form();
  this.detect_click_form();
  this.detect_click_list();
  this.detect_submit_form();
}

function render() {
  var cat_list = this._api.read();
  var me = this;
  this.list.innerHTML = '';
  cat_list.forEach(function (row) {
    var el = document.createElement('div');
    el.classList.add('cat-item');
    el.dataset.id = row.id
    el.innerHTML = `
    <div class="input">
        <input type="text" value="${row.title}" disabled>
    </div>
    <div class="tool-set">
      <span class="update">更新</span>
      <span class="delete">删除</span>
    </div>
    `;
    me.list.appendChild(el);
  });
}

function detect_show_form() {
  var me = this;
  this.add_cat.addEventListener('click', function () {
    me.show_cat_input();
  });
}

function detect_click_form() {
  var me = this;
  this.cat_form.addEventListener('click', function (e) {
    var is_cancel_btn = e.target.dataset.action == 'cancel';
    if (is_cancel_btn) {
      me.hide_cat_input();
    }
  });
}

function detect_click_list(){
  var me = this;
  this.list.addEventListener("click",function(e){
    console.log("123");
    var target = e.target;
    var isDeleteBtn = target.classList.contains('delete');
    var id = target.closest('.cat-item').dataset.id;
    if(isDeleteBtn){
      me._api.remove(id)
      me.render()
    }
  })
}

function detect_submit_form() {
  var me = this;
  this.cat_form.addEventListener('submit', function (e) {
    e.preventDefault();
    var row = me.get_form_data(me.cat_form);
    me._api.add(row);
    me.clear_form(me.cat_form);
    me.render();
  });
}

function show_cat_input() {
  this.cat_form.hidden = false;
}

function hide_cat_input() {
  this.cat_form.hidden = true;
}
