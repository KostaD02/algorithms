function linearSearch(array = [], searchValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

module.exports = {
  linearSearch,
};
