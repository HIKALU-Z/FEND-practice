(function() {
  let timer = setTimeout(function() {
    console.log('2秒后我才会执行');
  }, 2000);

  let count = 0;
  let timeInterval = setInterval(function() {
    console.log('我每秒执行一次');
    count++;
    if (count > 5) {
      clearInterval(timeInterval);
    }
  }, 1000);

  button.addEventListener('click', onClick);
  function onClick() {
    console.log('yo');
    button.removeEventListener('click', onClick);
  }

  fetch('https:api.github.com/users/noobjoe').then(function(res) {
    res.json().then(function(data) {
      console.log(data);
    });
  });

  /*发送请求
  * @param url String 请求地址
  * @param fn Function 回调函数
  * @param method String 请求方法，默认为get
  * */
  function send(url, fn, methed) {
    methed = methed || 'get';
    var http = new XMLHttpRequest();
    http.open(methed, url);
    http.send();
    http.addEventListener('load', function() {
      var data = JSON.parse(this.responseText);
      if (fn) fn(data);
    });
  }
})();
