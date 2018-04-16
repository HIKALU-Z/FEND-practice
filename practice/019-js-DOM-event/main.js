;(function() {
  // 选中所有类名为trigger的元素
  const elements = document.querySelectorAll('.trigger')
  // 循环所有数组元素
  elements.forEach(element => {
    element.addEventListener('click', function(event) {
      // 阻止浏览器默认事件
      event.preventDefault()
      // 触发真正的事件
      console.log("you've clicked on me!")
    })
  })


  const inputEle = document.querySelector('.search');

  inputEle.addEventListener('focus',function(){
    console.log('已聚焦');
  })


  inputEle.addEventListener('blur',function(){
    console.log('已失焦');
  })

  inputEle.addEventListener('mouseout',function(){
    console.log('已聚焦');
  })

})()
