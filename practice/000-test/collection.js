function choose_no_repeat_number(collection) {

  //在这里写入代码
  let result = []
  for (let i = 0; i < collection.length; i++) {
    let flag = true;
    let item = collection[i]
    for (let j = 0; j < result.length; j++) {
      if (item === result[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(item)
    }
  }
  return result;
}
let arr = [1, 1, 2, 3, 3, 4, 4, 5, 1, 1, 2, 3, 5, 45, 3, 6, 345, 6]
var r = choose_no_repeat_number(arr)
console.log(r);