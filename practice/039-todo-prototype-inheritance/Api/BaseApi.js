window.BaseApi = BaseApi;

function BaseApi(list, max_id) {
  this.load_list(list);
  this.max_id = max_id || list.length;
  this.reverse_direction = false;
  this.on_sync = null;
}

BaseApi.prototype.$add = add;
BaseApi.prototype.$remove = remove;
BaseApi.prototype.$update = update;
BaseApi.prototype.$read = read;
BaseApi.prototype.$find = find;
BaseApi.prototype.sync_to = sync_to;
BaseApi.prototype.sync_from = sync_from;
BaseApi.prototype.load_list = load_list;

function load_list(list) {
  var old = this.sync_from();

  if (!old || !old.length) {
    this.list = list || [];
    this.sync_to();
  } else {
    this.list = old;
  }
}

/**
 * 增加一行数据
 * - 每增加一个数据 maxid 自增一次
 * - 每次将新增数据插入数组首位
 * @param {Object} row
 */
function add(row) {
  row.id = this.max_id;
  if (this.reverse_direction)
    this.list.push(row);
  else
    this.list.unshift(row);
  this.sync_to();
  store.set(this._model_name + '-max_id', this.max_id);
}


/*删*/
function remove(id) {
  /*先通过id找到索引，因为从数组中删元素要指定索引，不然splice()不知道从哪删*/
  var index = find_index_by_id(this.list, id);

  /*如果id有误，就直接返回*/
  if (index < 0)
    return;

  /*用splice()删除找到的元素*/
  this.list.splice(index, 1);
  this.sync_to();
}


/*改*/
function update(id, new_row) {
  /*先通过id找到索引*/
  var index = find_index_by_id(this.list, id);

  /*如果id有误，就直接返回*/
  if (index < 0)
    return;

  /*删除更新数据中的id，防止id被覆盖（id用于绝对定位，一旦生成不可修改）*/
  delete new_row.id;

  var old_row = this.list[index];
  this.list[index] = Object.assign({}, old_row, new_row);
  this.sync_to();
}


/**
 * 此方法用于返回 api 读取到的所有数据
 */
function read() {
  return this.list;
}

/**
 * 查找一个数据
 * - 通过 id 查找数据
 * - 此方法与 read 的不同，体现在 read 返回所有数据 ，但是此方法返回的是通过id查找的数据
 * - 这样的好处是将来选择传参与否的时候，可以直接调用不同的方法
 * @param {Number} id
 */
function find(id) {
  return find_by_id(this.list, id);
}

/*
 * 通过id找元素索引
 * @param array 在那个数组中找
 * @param number id 找哪个id
 * @return number 找到的索引
 */
function find_index_by_id(arr, id) {
  return arr.findIndex(function (row) {
    /*如果当前元素的id等于要找的id就会返回true，
    一旦返回true说明目标元素找到了，
    findIndex()方法也就停止循环了，
    同时它会将找到的元素索引返回给调用者*/
    return row.id == id;
  });
}

/*通过id找元素
 * @param array 在那个数组中找
 * @param number id 找哪个id
 * @return number 找到的元素
 * */
function find_by_id(arr, id) {
  return arr.find(function (row) {
    return row.id == id;
  });
}

function sync_to () {
  this.list = this.list || [];
  store.set(this._model_name + '-list', this.list);
  if (this.on_sync)
    this.on_sync(this.list);
}

function sync_from () {
  var result = store.get(this._model_name + '-list');
  return result;
}