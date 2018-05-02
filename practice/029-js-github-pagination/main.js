(function() {
  'use strict';
  init();

  function init() {
    localStorageSet('a', [{ a: 1, b: 2 }]);
    console.log(localStorageGet('a'));
  }

  function localStorageSet(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  function localStorageGet(key) {
    var data = localStorage.getItem(key);
    return JSON.parse(data);
  }
})();

