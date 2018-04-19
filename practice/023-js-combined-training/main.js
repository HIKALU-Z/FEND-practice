;(function() {
  'use strtic'
  /**
   * 实现modal-compontent功能
   */
  let modalTrigger = document.querySelector('#modal-trigger')
  let modalContent = document.querySelector('#modal-content')
  let mask = document.querySelector('.mask')
  let closeModalBtn = document.querySelector('#close-modal-btn')

  function showMask(){
    mask.hidden = false
  }
  function hideMask(){
    mask.hidden = true
  }

  function showModal() {
    modalContent.classList.add('show')
    showMask()
  }

  function hideModal() {
    modalContent.classList.remove('show')
    hideMask()
  }

  modalTrigger.addEventListener('click', showModal)

  closeModalBtn.addEventListener('click', hideModal)

  mask.addEventListener('click', hideModal)

  /**
   * 设置全局键盘监听事件
   * - 如果监听到 Esape 那么关闭 modal
   * @TODO
   */
  document.addEventListener('keyup', function(e) {
    if (e.code == 'Escape') {
      hideModal()
    }
  })

  /**
   * 实现 sidebar-compontent 功能
   *
   */
  let sidebarTrigger = document.querySelector('#sidebar-trigger')
  let sidebar = document.querySelector('.sidebar')

  function showSidebar() {
    sidebar.hidden = false
    showMask();
  }

  function hideSidebar(){
    sidebar.hidden = true;
    hideMask();
  }

  sidebarTrigger.addEventListener('click', function(e){
    e.preventDefault()
    showSidebar();
  })

  document.addEventListener('click',function(e){
    if(e.target == mask){
      hideSidebar()
    }
    if(e.closest('.sidebar')){
      e.stopPropagation()
    }
  })
})()
