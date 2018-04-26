function isArray(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}


function collect_all_even(collection) {
  //在这里写入代码
  if (!isArray(collection)) {
    return;
  }
  let result = [];
  collection.forEach(item => {
    if (item % 2 == 0) {
      result.push(item);
    }
  });
  return result;
}

let b = [1, 2, 3, 4, 5, 6];
let result = collect_all_even(b);
