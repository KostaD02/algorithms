function bucketSort(array = [], n) {
  if (n <= 0) {
    return;
  }

  const buckets = new Array(n).fill([]);

  for (let i = 0; i < n; i++) {
    buckets[Math.floor(array[i] * n)].push(array[i]);
  }

  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      array[index++] = buckets[i][j];
    }
  }
}

module.exports = {
  bucketSort
};
