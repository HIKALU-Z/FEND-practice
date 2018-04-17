;(function() {
  'use strict'
  let login = document.querySelector('.login'), // 谁触发
    mask = document.querySelector('.mask'), // 谁显示
    modal = mask.querySelector('.modal'), // 谁显示
    close = document.querySelector('.close') // 关闭

  function showMoadl() {
    mask.classList.add('show')
  }

  function hideMoadl() {
    mask.classList.remove('show')
  }

  login.addEventListener('click', showMoadl)

  // 事件代理
  /*在爷爷辈检测点击事件（这意味着哪怕是孙子引发的点击事件也会传递上来，因为默认冒泡）*/
  mask.addEventListener('click', function(e) {
    // 如果点击源是close或自己（也就是遮罩），那么就隐藏modal
    if (e.target == close || e.target == mask) {
      hideMoadl()
    }
  })

  document.addEventListener('keyup', function(e) {
    if (e.code == 'Escape') {
      hideMoadl()
    }
  })
})()
