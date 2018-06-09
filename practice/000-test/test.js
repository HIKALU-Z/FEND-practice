const trim2 = (str, capList) => {
  // console.log(capList);
  let arr = capList.split('');
  // console.log(arr);
  // return ;
  arr.forEach(cap => {
    if (str.startsWith(cap)) {
      str = str.substring(1);
      trim2(str,cap)
    }
    if (str.endsWith(cap)) {
      str = str.substring(0, str.length - 1)
      trim2(str,cap)
    }
  });
  return str;
}

let result = trim2('#/home./#', '#/')
debugger
console.log(result);