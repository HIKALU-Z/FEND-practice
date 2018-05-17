/**
 * # 设置表格数据
 * - 以数据为中心，循环迭代数据的键值对
 *   - 通过数据的键值，查询页面中是否有此元素
 *     + 如果有元素则反填，否则跳过 `continue`
 *   - 如果数据类型为 Boolean 那么设置元素的 checked 属性为 data.value
 *   - 如果数据类型为 !Boolean 那么设置元素的 value 属性为 data.value
 * @param {String} selector
 * @param {Object} data
 */
function setFormData(selector, data) {
  let form = document.querySelector(selector)

  for (var key in data) {
    let value = data[key]
    let type = typeof value
    let element = form.querySelector(`[name=${key}]`)
    if(!element){
      continue
    }
    switch (type) {
      case "boolean":
        element.checked = value;
        break;
      default:
        element.value = value;
        break;
    }
  }
}

let row = {
  title: 'play',
  completed: true,
  desc:'i am hikalu',
  yo:123
}

setFormData('#todo-form', row)

