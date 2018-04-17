;(function() {
  let ele_1 = document.querySelector('#box1')
  let ele_2 = document.querySelector('#box2')
  let ele_3 = document.querySelector('#box3')

  ele_1.addEventListener(
    'click',
    function(e) {
      console.log('谁先冒泡：',e.target, '这个冒泡在谁手里：',e.currentTarget)
    }
    //,
    // 设置是否为捕获事件（自上而下传递）
    // true
  )

  ele_2.addEventListener('click', function(e) {
    console.log('谁先冒泡：',e.target, '这个冒泡在谁手里：',e.currentTarget)
  })

  ele_3.addEventListener('click', function(e) {
    // 阻止冒泡事件触发（自下而上传递）
    e.stopPropagation()
    console.log('谁先冒泡：',e.target, '这个冒泡在谁手里：',e.currentTarget)
  })
})()
