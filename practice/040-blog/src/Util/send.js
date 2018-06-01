const ok = true;
const list = [{
  id: '1',
  content: 'hello',
  desc: 'my name is mu!'
}]
/**
 * 利用 get 方法传参
 * @param {String} url 请求的地址
 * @param {Function} success_hook 请求成功后的回调函数
 * @param {Function} fail_hook 请求失败后的回调函数 
 */
const get = (url, success_hook, fail_hook) => {
  if (ok) {
    console.log(url);
    success_hook(list)
  } else {
    fail_hook()
  }
}

const output = {
  get
}


export default output;