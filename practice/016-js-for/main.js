var ele = document.getElementById('#container')
var a = [4,21, 3, 123, 4, 12, 3, 2, 423, 43, 4545, 64, 52, 421, 1]
for (let i = 0; i < a.length; i++) {
  if (a[i] < 4) continue;
  console.log(a[i]);
}

console.log('----');

for (let index = 0; index < a.length; index++) {
  const element = a[index];
  if(element>40){
    break;
  }
  console.log(element);

}
ele.innerText = a

document.write('<br/>');

for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    document.write(i + '*' + j + '=' + i * j + '&nbsp;')
    if (i == j) {
      document.write('<br/>')
      break
    } //用的if语句，如果这两个数字相同了 那么跳出，另起一行
  }
}
