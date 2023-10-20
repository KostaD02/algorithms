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

function metaBinarySearch(array = [], searchValue) {
  const n = array.length;
  let max = parseInt(Math.log(n - 1) / Math.log(2)) + 1;
  let position = 0;
  for (let i = max; i >= 0; i--) {
    if (array[position] === searchValue) {
      return position;
    }
    const newPosition = position | (1 << i);
    if (newPosition < n && array[newPosition] <= searchValue) {
      position = newPosition;
    }
  }
  return array[position] === searchValue ? position : -1;
}

function exponentialSearch(array = [], searchValue) {
  if (array[0] === searchValue) {
    return 0;
  }

  let i = 1;

  while(i < array.length && array[i] <= searchValue) {
    i *= 2;
  }

  return binarySearchRecursive(array, searchValue, i / 2, Math.min(i, array.length - 1));
}

module.exports = {
  binarySearch,
  binarySearchRecursive,
  metaBinarySearch,
  exponentialSearch
};
