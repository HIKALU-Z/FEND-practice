;(function() {
  'use strict'

  function make_meal(attach, eat_raw, pref) {
    console.log('========')

    console.log('买菜')
    if (attach) attach()

    console.log('洗菜')
    if (eat_raw) eat_raw()

    console.log('炒菜')
    if (pref) pref()
  }

  function buy_pen() {
    console.log('捎纸笔')
  }

  make_meal(
    buy_pen,
    function() {
      console.log('给我个西红柿')
    },
    function() {
      console.log('少放盐')
    }
  )
})()
