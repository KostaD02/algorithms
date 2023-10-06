function insertionSort(array = [], starting = 1, n = array.length) {
  for (let i = starting; i < n; i++) {
    const current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }
}

module.exports = {
  insertionSort
};
