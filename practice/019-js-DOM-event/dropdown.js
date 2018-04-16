;(function() {
  'use strict'
  var menuTrigger = document.querySelector('#menu-trigger'),
    menuContent = document.querySelector('#menu-content'),
    menuSwtich = false

  menuTrigger.addEventListener('click', function(e) {
    // 阻止默认事件
    e.preventDefault()
    // 切换显示
    menuSwtich = !menuSwtich
    if (menuSwtich) {
      menuContent.style.display = 'block'
    } else {
      menuContent.style.display = 'none'
    }
  })
})()
