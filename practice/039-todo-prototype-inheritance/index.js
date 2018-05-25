var task_ui = new TaskUi({
  on_init: function () {
    var cat_select = document.getElementById('cat-select');
    var list = cat_ui._api.read();
    list.forEach(function (row) {
      var el = document.createElement('option');
      el.value = row.id;
      el.innerText = row.title;
      cat_select.appendChild(el);
    });
  },
});

var cat_config = {
  onItemClick: function (id) {
    task_ui.render(id)
  },
  onItemDelete: function (cat_id) {
    task_ui._api.removeByCat(cat_id);
    task_ui.render(1);
  }
}

var cat_ui = new CatUi(cat_config);

task_ui.init();
cat_ui.init();