const takeUntil = function(array, callback) {
  results = [];
  for (i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return results;
    }
    results.push(array[i]);
  }
  return results;
};

