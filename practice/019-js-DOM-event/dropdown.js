;(function() {
  'use strict'
  var menuTrigger = document.querySelector('#menu-trigger'),
    menuContent = document.querySelector('#menu-content'),
    menuSwtich = false

  menuTrigger.addEventListener('click', function(e) {
    // 阻止默认事件
    e.preventDefault()
    // 聚焦
    menuTrigger.focus()
    // 切换显示
    menuSwtich = !menuSwtich
    if (menuSwtich) {
      menuContent.style.display = 'block'
    } else {
      menuContent.style.display = 'none'
    }
  })

  menuTrigger.addEventListener('blur', function(e) {
    // 阻止默认事件
    e.preventDefault()
    //
    menuSwtich = false;
    // 切换显示
    menuContent.style.display = 'none'
  })
})()
