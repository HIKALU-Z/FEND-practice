window.TaskApi = TaskApi;

function TaskApi(list, max_id) {
  list = list || [];
  max_id = max_id || 1;
  /*继承显性属性（也就是原型prototype）*/
  BaseApi.call(this, list, max_id);
}

/*继承隐性属性（也就是原型prototype）*/
TaskApi.prototype = Object.create(BaseApi.prototype);
TaskApi.prototype.constructor = TaskApi;

TaskApi.prototype.add = add;
TaskApi.prototype.remove = remove;
TaskApi.prototype.update = update;
TaskApi.prototype.read = read;


function add(row) {
  if (!row.title)
    return;
  return this.$add(row);
}

function remove(id) {
  return this.$remove(id);
}

function update(id, new_row) {
  return this.$update(id, new_row);
}

function read(id) {
  return this.$read(id);
}

