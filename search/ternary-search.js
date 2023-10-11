function ternarySearch(array = [], searchValue) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let firstMid = Math.floor(left + (right - left) / 3);
    let secondMid = Math.floor(right - (right - left) / 3);

    if (array[firstMid] === searchValue) {
      return firstMid;
    }

    if (array[secondMid] === searchValue) {
      return secondMid;
    }

    if (searchValue < array[firstMid]) {
      right = firstMid - 1;
    } else if (searchValue > array[secondMid]) {
      left = secondMid + 1;
    } else {
      left = firstMid + 1;
      right = secondMid - 1;
    }
  }

  return -1;
}

module.exports = {
  ternarySearch,
};
