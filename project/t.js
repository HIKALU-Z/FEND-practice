var str = '[1,2,3]';

var s = str.split('')
var r = []
s.forEach((element, index) => {
  if (index % 2 != 0) {
    r.push(element)
  }
});

JSON.parse(jsondata)