function Todo(id, arr) {
  this.maxId = id
  this.todoList = arr
  this.add = function () {
    console.log("add");
  }
  this.remove = function () {
    console.log("remove");
  }
}

let todo = new Todo(1,[{name:'eat'},{name:'watch'}])
console.log(todo);