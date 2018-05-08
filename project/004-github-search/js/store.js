/**
 * 利用 localstorage 存储数据
 * @param {String} key
 * @param {Any} val
 */
function setStorage(key, val) {
  let json = JSON.stringify(val)
  localStorage.setItem(key, json)
}

/**
 * 利用键值取得 localstorage 中的变量
 * @param {String} key
 */
function getStorage(key) {
  let json = localStorage.getItem(key)
  json = JSON.parse(json)
  return json;
}

// 导出模块
module.exports = {
  setStorage,
  getStorage
}