;(function() {
  'use strtic'

  // 获取全部li节点
  let allList = document.querySelectorAll('li')

  // 循环所有节点，为每个节点添加点击事件
  for (let index = 0; index < allList.length; index++) {
    // 取出单独的li元素
    const list = allList[index]

    if (!list.querySelector('ul')) {
      list.style.cursor = 'not-allowed'
    }

    // 添加事件
    list.addEventListener('click', function(e) {
      // 查询当前节点下是否有ul元素（即是否有子集）
      let item = this.querySelector('ul')
      // 判断事件的发起源，与当前正在处理click事件的元素是否相同
      // 如果相同则执行下面的取反，否则return
      // 应为事件会冒泡，所以要去判断，这个函数是不是自身发起的，以防接受了子元素传递来的冒泡事件
      // if (e.target !== e.currentTarget || !item) 和下面的判断条件是一样的

      if (e.target !== this || !item) {
        return
      }
      // 对hidden进行取反
      item.hidden = !item.hidden
    })
  }
})()
