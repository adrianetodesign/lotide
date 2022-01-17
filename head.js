const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;