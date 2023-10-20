function interpolationSearch(array = [], searchValue) {
  let left = 0;
  let right = array.length - 1;

  while (
    left <= right &&
    searchValue >= array[left] &&
    searchValue <= array[right]
  ) {
    if (left === right) {
      if (array[left] === searchValue) {
        return left;
      }
      return -1;
    }
    const pos =
      left +
      Math.floor(
        ((right - left) / (array[right] - array[left])) *
          (searchValue - array[left])
      );

    if (array[pos] === searchValue) {
      return pos;
    }

    if (array[pos] < searchValue) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
}

module.exports = {
  interpolationSearch,
};
