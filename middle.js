const middle = function(arrX) {
  if (arrX.length <= 2) {
    return [];
  }
  if ((arrX.length % 2) !== 0) {
    return [arrX[(arrX.length - 1) / 2]];
  }
  let firstIndex = ((arrX.length / 2) - 1);
  return arrX.slice(firstIndex, firstIndex + 2);
};

module.exports = middle;