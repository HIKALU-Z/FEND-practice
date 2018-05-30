window.TaskApi = TaskApi;

function TaskApi(list) {
  this._model_name = 'task';
  list = list || [];
  /*继承显性属性（也就是原型prototype）*/
  BaseApi.call(this, list);
}

/*继承隐性属性（也就是原型prototype）*/
TaskApi.prototype = Object.create(BaseApi.prototype);
TaskApi.prototype.constructor = TaskApi;

TaskApi.prototype.add = add;
TaskApi.prototype.remove = remove;
TaskApi.prototype.update = update;
TaskApi.prototype.read = read;
TaskApi.prototype.readByCat = readByCat;
TaskApi.prototype.removeByCat = removeByCat;
TaskApi.prototype.set_completed = set_completed;


function add(row) {
  if (!row.title)
    return;
  row.cat_id = parseInt(row.cat_id);
  return this.$add(row);
}

function remove(id) {
  return this.$remove(id);
}

function update(id, new_row) {
  return this.$update(id, new_row);
}

function read() {
  return this.$read();
}


function set_completed (id, completed) {
  var row = this.$find(id);
  if (!row)
    return false;

  row.completed = completed;
  this.sync_to();
}

function readByCat(id) {
  id = parseInt(id)
  // console.log(this.list);
  var result = []
  result = this.read().filter(function (item) {
    return item.cat_id == id;
  })
  // console.log(result);
  return result
}

function removeByCat(cat_id) {
  this.list = this.list.filter(function (row) {
    return row.cat_id != cat_id;
  });
  this.sync_to();
}