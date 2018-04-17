var login = document.querySelector('.login'); // 谁触发
var mask = document.querySelector('.mask'); // 谁显示
var modal = document.querySelector('.modal'); // 谁显示
var close = document.querySelector('.close'); // 关闭

function showMoadl() {
  mask.classList.add('show');
  modal.classList.add('show');
}

function hideMoadl() {
  mask.classList.remove('show');
  modal.classList.remove('show');
}

login.addEventListener('click', showMoadl);

mask.addEventListener('click', hideMoadl);

close.addEventListener('click', hideMoadl);

document.addEventListener('keyup', function(e) {
  if (e.code != 'Escape') return;
  if (e.keyCode != 'Escape') return;
  hideMoadl();
});
