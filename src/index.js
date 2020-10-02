
exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  } else {
    let min = array[0];
    array.forEach(el => {
      if (el <= min) {
        min = el;
      }
    });
    return min;
  }
}

exports.max = function max (array) {
  if (!array || !array.length) {
    return 0;
  } else {
    let max = Math.max.apply(null, array);
    return max;
  }
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  } else {
      const average = array.reduce((sum, number, index, arr) => {
        sum += number;
        if (index === array.length - 1) {
          return sum/array.length;
        } else {
          return sum;
        }
      });
      return average;
    }
}
