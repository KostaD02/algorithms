const { insertionSort } = require("./insertion-sort");
const { mergeSortInPlace } = require("./merge-sort");

function timSort(array = []) {
  const n = array = [].length;
  const MIN_MERGE = 32;

  for (let i = 0; i < n; i += MIN_MERGE) {
    insertionSort(array = [], i, Math.min((i + MIN_MERGE - 1), (n - 1)));
  }

  for (let i = MIN_MERGE; i < n; i = 2 * i) {
    for (let j = 0; j < n; j += 2 * i) {
      const mid = j + i - 1;
      const right = Math.min((j + 2 * i - 1), (n - 1));

      if (mid < right) {
        mergeSortInPlace(array = [], j, mid, right);
      }
    }
  }
}

module.exports = {
  timSort
};
