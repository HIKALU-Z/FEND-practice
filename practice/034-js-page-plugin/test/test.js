let pagination = require('../src/pagination')

pagination.init({
  el:"#pagination-container",
  onPagerClicked:function(e,num){
    console.log(num);
  }
})
