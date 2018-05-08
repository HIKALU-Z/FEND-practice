let eleEvent = require('./eleEvent');
let history = require('./history')

init();

function init() {
  history.reloadList();
  history.renderList();
  eleEvent.addEvent();
}
