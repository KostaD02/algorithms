function cocktailShakerSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        sorted = false;
      }
    }

    if (sorted) {
      break;
    }

    sorted = true;

    for (let j = array.length - 1; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        sorted = false;
      }
    }
  }
}

module.exports = {
  cocktailShakerSort,
};
