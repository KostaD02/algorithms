function mergeSort(array = []) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left = [], right = []) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSortInPlace(array = [], start = 0, end = array.length - 1) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);

    mergeSortInPlace(array, start, middle);
    mergeSortInPlace(array, middle + 1, end);

    mergeInPlace(array, start, middle, end);
  }
}

function mergeInPlace(array = [], start, middle, end) {
  const leftSize = middle - start + 1;
  const rightSize = end - middle;

  const leftArray = new Array(leftSize);
  const rightArray = new Array(rightSize);

  for (let i = 0; i < leftSize; i++) {
    leftArray[i] = array[start + i];
  }

  for (let j = 0; j < rightSize; j++) {
    rightArray[j] = array[middle + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = start;

  while (i < leftSize && j < rightSize) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftSize) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightSize) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}

module.exports = {
  mergeSort, // returning
  mergeSortInPlace, // void sort
};
