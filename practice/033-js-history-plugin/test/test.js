let history = require('../src/history')

history.init({
  el:"#history-list",
  onClick:function(keyword,e){
    console.log(keyword);
  },
  onDelete:function(keyword,e){
    e.stopPropagation();
    history.deleteHistory(keyword)
  }
})

history.addHistory('a');
history.addHistory('b');
history.addHistory('c');
history.deleteHistory('c');
