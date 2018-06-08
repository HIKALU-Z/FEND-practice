let tpl = `我的名字叫{{name}},我今年{{age}}岁了，我的孩子叫{{child.name}},
他最喜欢的球类玩具是{{child.toy.ball}}`
let data = {
  name: 'whh',
  age: 22,
  child: {
    name: 'lsd',
    age: 3,
    toy: {
      ball: 'basketball'
    }
  }
}
/**
 * 模板分析器函数
 * - 通过正则表达式，匹配你需要替换的模板变量（exec 方法）
 * - 通过 getValueByKey 方法获得当前模板变量的值
 * - 使用 string 的 replace 方法将捕获的变量替换为真实值
 *
 * @param {String} tpl 要解析的模板字符串
 * @param {Object} data 替换模板的数据
 */
const parse = (tpl, data) => {
  let reg = /{{\s*([^}\s]+)}}\s*/g
  let match, result = tpl;
  while (match = reg.exec(tpl)) {
    let variable = match[0];
    let key = match[1].trim();
    let replacement = getValueByKey(data, key)
    result = result.replace(variable, replacement);
  }
  return result;
}

/**
 * 通过键值字符串获取真实值
 * @param {Object} data 从后台获取得到的真实数据
 * @param {String} key 数据对象关键字用于取值
 */
const getValueByKey = (data, key) => {
  let arr = key.split('.');
  let result = Object.assign({},data);
  arr.forEach(element => {
    result = result[element]
  });
  return result;
}

let result =  parse(tpl, data)
console.log(result);