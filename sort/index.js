const { bubbleSort } = require("./bubble-sort");
const { selectionSort } = require("./selection-sort");
const { insertionSort } = require("./insertion-sort");
const { mergeSort, mergeSortInPlace } = require("./merge-sort");
const { quickSort } = require("./quick-sort");
const { heapSort } = require("./heap-sort");
const { radixSort } = require("./radix-sort");
const { countingSort } = require("./counting-sort");
const { bucketSort } = require("./bucket-sort");
const { shellSort } = require("./shell-sort");
const { timSort } = require("./tim-sort");
const { cocktailShakerSort } = require("./cocktailshaker-sort");
const { cycleSort } = require("./cycle-sort");

function jsBuiltIn(array) {
  array = array.sort((a, b) => a - b);
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  mergeSortInPlace,
  quickSort,
  heapSort,
  radixSort,
  countingSort,
  bucketSort,
  shellSort,
  timSort,
  cocktailShakerSort,
  cycleSort,
  jsBuiltIn
};
