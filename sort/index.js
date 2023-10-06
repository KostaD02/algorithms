const { bubbleSort } = require("./bubble-sort");
const { selectionSort } = require("./selection-sort");
const { insertionSort } = require("./insertion-sort");
const { mergeSort, mergeSortInPlace } = require("./merge-sort");
const { quickSort } = require("./quick-sort");
const { heapSort } = require("./heap-sort");

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  mergeSortInPlace,
  quickSort,
  heapSort
};
