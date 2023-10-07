function binarySearch(array = [], searchValue) {
  let left = 0;
  let right = array.length - 1;
  let mid;
  while (right >= left) {
    mid = Math.floor((right + left) / 2);

    if (array[mid] === searchValue) {
      return mid;
    } else if (array[mid] > searchValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function binarySearchRecursive(
  array = [],
  searchValue,
  left = 0,
  right = array.length - 1
) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (array[mid] === searchValue) {
    return mid;
  } else if (array[mid] > searchValue) {
    return binarySearchRecursive(array, searchValue, left, mid - 1);
  } else {
    return binarySearchRecursive(array, searchValue, mid + 1, right);
  }
}

module.exports = {
  binarySearch,
  binarySearchRecursive,
};
