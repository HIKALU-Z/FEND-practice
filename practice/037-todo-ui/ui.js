function Ui(form_selector, list_selector, input_selector) {
  this.form = document.querySelector(form_selector);
  this.list = document.querySelector(list_selector);
  this.input = this.form.querySelector(input_selector);
  this._api = new TodoModel();
}

Ui.prototype.getFormData = getFormData;
Ui.prototype.setFormData = setFormData;
Ui.prototype.clearFormData = clearFormData;
Ui.prototype.render = render;
Ui.prototype.init = init;
Ui.prototype.detectSubmit = detectSubmit;
Ui.prototype.detectListClick = detectListClick;
Ui.prototype.remove = remove;

function init() {
  this.render()
  this.detectSubmit()
  this.detectListClick()
}

function detectListClick() {
  let me = this;
  this.list.addEventListener('click', function (e) {
    let target = e.target;
    let id = target.closest(".todo-item").dataset.id
    let isRemoveBtn = target.classList.contains('.remove')
    let isUpdateBtn = target.classList.contains("update")
    if (isRemoveBtn) {
      this.remove()
    } else if (isUpdateBtn) {
      row = me._api.read(id);
      me.setFormData(row);
    }
  })
}

function detectSubmit() {
  var _self_ = this;
  this.form.addEventListener('submit', function (e) {
    e.preventDefault();

    var row = _self_.getFormData(),
      title = row.title.trim();

    if (!title) {
      return alert("Please enter a title!");
    }

    if (row.id) {
      _self_._api.update(row.id, row);
    } else {
      _self_._api.add(row);
    }
    _self_.input.value = '';
    _self_.clearFormData();
    _self_.render();
  })
}


function render() {
  var todo_list = this._api.read();
  this.list.innerHTML = ''
  var me = this;
  todo_list.forEach(function (item) {
    var el = document.createElement('div');
    el.classList.add('row', 'todo-item');
    el.dataset.id = item.id;
    el.innerHTML = `
      <div class="col checkbox">
        <input type="checkbox">
      </div>
      <div class="col detail">
        <div class="title">${item.title}</div>
      </div>
      <div class="col tool-set">
        <button class="update">更新</button>
        <button class="remove">删除</button>
      </div>
    `;

    me.list.appendChild(el);
  });
}

function getFormData(form) {
  form = form || this.form;

  var data = {},
    list = form.querySelectorAll("[name]");

  list.forEach(function (item) {
    var name = item.name,
      type = item.type,
      value = item.value;

    switch (item.nodeName) {
      case "INPUT":
        switch (type) {
          case "text":
            break;
          case "search":
            value = value.trim();
            break;
          case "number":
            value = parseFloat(value);
            break;
          case "password":
          case "hidden":
            break;
          case "checkbox":
          case "radio":
            value = item.checked;
            break;
        }
        break;
      case "TEXTAREA":
        break;
    }
    data[name] = value;
  });
  return data;
}

function setFormData(row, form) {
  form = form || this.form;
  var key;

  for (key in row) {
    if (!row.hasOwnProperty(key))
      continue;

    var input = form.querySelector(`[name=${key}`),
      value = row[key],
      valueType = typeof value;

    if (!input)
      continue;

    switch (valueType) {
      case "string":
      case "number":
        input.value = value;
        break;
      case "boolean":
        input.checked = value;
    }
  }
}


function clearFormData(form) {
  form = form || this.form;
  var list = form.querySelectorAll("[name]");

  list.forEach(function (item) {
    var type = item.type;

    switch (item.nodeName) {
      case "INPUT":
        switch (type) {
          case "text":
          case "search":
          case "number":
          case "password":
          case "hidden":
            item.value = '';
            break;
          case "checkbox":
          case "radio":
            item.value = false;
            break;
        }
        break;
      case "TEXTAREA":
        item.value = '';
        break;
    }
  });
}
window.ui = Ui