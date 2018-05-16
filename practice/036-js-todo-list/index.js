let maxId = 1;
let todoList = getData();

function getData() {
  return [{
      id: 1,
      name: 'shopping',
      completed: true,
      createDate: '2012/2/2'
    },
    {
      id: 2,
      name: 'eat',
      completed: true,
      createDate: '2014/2/2'
    },
    {
      id: 14,
      name: 'play',
      completed: true,
      createDate: '2016/2/2'
    }
  ];
}

function createTodo(row) {
  rowId = ++maxId;
  todoList.push(row)
}

function removeTodo(id) {
  let index = findIndexById(todoList, id);
  console.log(index);
  if (index < 0) {
    return;
  }
  todoList.splice(index, 1);
  console.log(todoList);
}

function readTodo(id){
  if(id){
    return findById(todoList,id)
  }
  return todoList;
}

console.log(readTodo(14));
// readTodo(14)

// removeTodo(14)
/**
 * 通过 id 在对应的数组中 找到对应的索引
 * @param {Array} arr 被查找的数组
 * @param {Number} id 查询的id
 * @returns {Number} index 找到的和 id 匹配的数组的索引值
 */
function findIndexById(arr, id) {
  let result
  /*   arr.forEach((element,index) => {
      if(element.id===id){
        return result = index;
      }
    }); */

  // 以下是 Array 内置的方法
  return result = arr.findIndex(item => item.id == id)
}


function findById(arr,id){
  return arr.find(item=>item.id == id);
}