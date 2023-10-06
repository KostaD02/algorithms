function countingSort(array = []) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const range = max - min + 1;

  const count = new Array(range).fill(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i] - min]++;
  }

  let index = 0;

  for (let i = 0; i < range; i++) {
    while (count[i] > 0) {
      array[index++] = i + min;
      count[i]--;
    }
  }
}

module.exports = {
  countingSort,
};
