var tip_trigger = document.querySelector('.tip-trigger');
var tip;
/*当鼠标进入tip-trigger*/
tip_trigger.addEventListener('mouseenter', function() {
  show_tip();
  position_tip();
});
/*当鼠标移出tip-trigger*/
tip_trigger.addEventListener('mouseleave', function() {
  hide_tip();
});

function show_tip() {
  if (tip) return;
  /*创建tip元素*/
  tip = document.createElement('div');
  tip.classList.add('tip'); // 添加类
  tip.innerText = tip_trigger.dataset.tip; // 添加内部文字
  document.body.appendChild(tip); // 添加到body上
}

function hide_tip() {
  tip.remove(); // 从DOM中移出tip
  tip = null; // 清空tip
}

function position_tip() {
  var position = tip_trigger.getBoundingClientRect(); // 获取元素的位置信息
  tip.style.top = position.top - tip.offsetHeight - 2; // offsetHeight可见区域高度
  tip.style.left = position.left;
}
