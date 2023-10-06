function countingSort(array = [], exp) {
  const output = new Array(array.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < array.length; i++) {
    count[Math.floor(array[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
    count[Math.floor(array[i] / exp) % 10]--;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
}

function radixSort(array = []) {
  const max = Math.max(...array);

  for (let i = 1; Math.floor(max / i) > 0; i *= 10) {
    countingSort(array, i);
  }
}

module.exports = {
  radixSort
};
