const { bubbleSort, selectionSort, insertionSort, mergeSort, mergeSortInPlace } = require("./index");

const config = {
  SHOW_NUMBERS_LOG: false,
  RANDOM_MAX_NUMBER: 1000,
  RANDOM_MIN_NUMBER: 1,
  NUMBERS_SIZE: 100
};

const numbers = new Array(config.NUMBERS_SIZE).fill(0).map(n => Math.floor(Math.random() * (config.RANDOM_MAX_NUMBER - config.RANDOM_MIN_NUMBER + 1)) + 1);

function logSortData(name, func, numbersArray = numbers) {
  const array = numbersArray;
  console.time(name);
  func(array);
  console.timeEnd(name);
  if (config.SHOW_NUMBERS_LOG) {
    console.log(array);
  }
}

function jsBuiltIn(array) {
  array = array.sort((a, b) => a - b);
}

logSortData("JSBuiltIn", jsBuiltIn);
logSortData("BubbleSort", bubbleSort);
logSortData("SelectionSort", selectionSort);
logSortData("InsertionSort", insertionSort);
logSortData("MergeSortWithReturn", mergeSort);
logSortData("MergeSortWithoutReturn", mergeSortInPlace);