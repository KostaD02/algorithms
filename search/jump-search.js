function jumpSearch(array = [], searchValue) {
  const n = array.length;
  let step = Math.sqrt(n);
  let prev = 0;
  while (array[Math.min(step, n) - 1] < searchValue) {
    prev = step;
    step += Math.sqrt(n);
    if (prev >= n) {
      return -1;
    }
  }

  while (array[prev] < searchValue) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }

  return array[prev] === searchValue ? prev : -1;
}

module.exports = {
  jumpSearch,
};
