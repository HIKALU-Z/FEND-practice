;(function(){
  'use strict'

  function ajax(method,url,successHook,failHook){
    let http = new XMLHttpRequest();
    http.open(method, url);
    http.send();

    http.addEventListener('load', function () {
      successHook(this.responseText);
    });
  }

  function get(url,successHook,failHook){
    ajax('GET',url,successHook,failHook);
  }

  function post(url,successHook,failHook){
    ajax('POST',url,successHook,failHook);
  }

  window.ajax = {
    get,
    post,
    ajax
  }
})()