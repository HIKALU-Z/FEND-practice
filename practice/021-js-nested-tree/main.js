;(function() {
  'use strtic'

  // 获取全部li节点
  let allList = document.querySelectorAll('li')

  allList.forEach(list => {
    list.addEventListener('click', function(e) {
      let ul = this.querySelector('ul')
      let isListSelf = e.target == e.currentTarget
      if (!ul || !isListSelf) {
        return
      }
      ul.hidden = !ul.hidden
    })
  })
})()
