let pagination = require('../src/pagination')

pagination.init({
  el:"#pagination-container",
  amount:1000,
  limit:5,
  range:7,
  onPagerClicked:function(e,num){
    console.log(num);
  }
})
