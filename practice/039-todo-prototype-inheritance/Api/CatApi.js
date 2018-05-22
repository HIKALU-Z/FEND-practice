window.CatApi = CatApi;

function CatApi(list, max_id) {
  this.config = {
    title: {
      max_length: 10,
    },
  };

  list = list || [{
      id: 1,
      title: '默认',
    },
    {
      id: 2,
      title: '生活',
    },
    {
      id: 3,
      title: '学习',
    },
  ];
  max_id = max_id || 1;
  /*继承显性属性（也就是原型prototype）*/
  BaseApi.call(this, list, max_id);
}

/*继承隐性属性（也就是原型prototype）*/
CatApi.prototype = Object.create(BaseApi.prototype);
CatApi.prototype.constructor = CatApi;

CatApi.prototype.add = add;
CatApi.prototype.remove = remove;
CatApi.prototype.update = update;
CatApi.prototype.read = read;


function add(row) {
  if (!row.title)
    return;

  var max_length = this.config.title.max_length;

  if (row.title.length > max_length)
    throw `title should not greater than ${max_length}`;

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