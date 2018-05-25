var task_ui = new TaskUi('#todo-form', '#todo-list', '#todo-input');

var cat_config = {
  onItemClick:function(id){
    task_ui.render(id)
  }
}

var cat_ui = new CatUi(cat_config);

task_ui.init();
cat_ui.init();
