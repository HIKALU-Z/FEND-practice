;(function() {
  let checkAllBtn = document.querySelector('#checkAll')
  let unCheckAllBtn = document.querySelector('#unCheckAll')
  let reverseCheckBtn = document.querySelector('#reverseCheck')
  let allList = document.querySelectorAll('[type=checkbox]')

  checkAllBtn.addEventListener('click', function(e) {
    allList.forEach(list => {
      list.checked = true
    })
  })

  unCheckAllBtn.addEventListener('click', function(e) {
    allList.forEach(list => {
      list.checked = false
    })
  })

  reverseCheckBtn.addEventListener('click', function(e) {
    allList.forEach(list => {
      list.checked = !list.checked
    })
  })

  function unCheckOthers(except){
    allList.forEach(function (item) {
      /*如果正在迭代的元素是传进来的例外元素，那么就不要管，直接返回*/
      if (item === except)
        return;
      /*否则取消打钩*/
      item.checked = false;
    });
  }

  allList.forEach(list => {
    list.addEventListener('click',function(){
      unCheckOthers(this)
    })
  })
})()
