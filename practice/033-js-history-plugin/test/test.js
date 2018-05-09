let history = require('../src/history')

history.init({
  el:"#history-list",
  onClick:function(keyword,e){
    console.log("clicked");
  },
  onDelete:function(keyword,e){
    e.stopPropagation();
    console.log("delete");
  }
})

history.addHistory('a');
