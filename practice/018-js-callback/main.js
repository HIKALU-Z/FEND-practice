;(function() {
  'use strict'

  /*购买
  * @param Number money 付了多少钱
  * @param Function success 当成功时执行的自定义代码
  * @param Function fail 当失败时执行的自定义代码
  * */
  function buy(money, success, fail) {
    if (money > 0) {
      console.log('下单成功')
      if (success) success()
    } else {
      console.log('下单失败')
      if (fail) fail()
    }
  }
  /*当购买游戏（虚拟产品之一）成功时执行的代码*/
  function on_game_order_success() {
    console.log('游戏单，无需实体发货')
  }
  /*当购买T恤（实体产品之一）成功时执行的代码*/
  function on_tshirt_order_success() {
    console.log('服饰单')
    console.log('通知仓库中...')
    console.log('已通知仓库，发货中...')
  }
  /*下单失败（未付款）时执行的代码*/
  function on_order_fail() {
    console.log('钱呢')
  }
  buy(100, on_game_order_success, on_order_fail)
  buy(0, on_tshirt_order_success, on_order_fail)
})()
