(function() {
  let arr = [3, 2, 4, 6, 5];
  var rank_asc = function(collection) {
    let result = [];
    result = collection.sort(sortAsc);
    console.log(result);
    return result;
  };

  function sortAsc(a, b) {
    return a - b;
  }
  rank_asc(arr);
})();
