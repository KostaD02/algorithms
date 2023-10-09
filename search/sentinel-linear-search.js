function sentinelLinearSearch(array = [], searchValue) {
  const n = array.length;
  const lastElement = array[n - 1];
  array[n - 1] = searchValue;

  let i = 0;
  while (array[i] !== searchValue) {
    i++;
  }

  array[n - 1] = lastElement;

  return i < n - 1 || lastElement === searchValue ? i : -1;
}

module.exports = {
  sentinelLinearSearch,
};
