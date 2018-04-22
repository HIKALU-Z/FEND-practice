function findMost(arr) {
  var h = {};
  var maxNum = 0;
  maxEle = {};
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    h[key] === undefined ? (h[key] = 1) : h[key]++;
    if (h[key] > maxNum) {
      maxEle = key;
      maxNum = h[key];
    }
  }
  return '出现最多的元素为' + maxEle + '出现了' + maxNum + '次';
}


function countWords(message){
  // wirte your code here
  return message.split('').length;

}
countWords('Good morning, I love JavaScript.'); // should return 5