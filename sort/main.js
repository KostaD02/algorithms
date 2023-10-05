const { bubbleSort } = require("./bubble-sort");
const { selectionSort } = require("./selection-sort");
const { insertionSort } = require("./insertion-sort");

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
  if (SHOW_NUMBERS_LOG) {
    console.log(array);
  }
}

console.time("JSBuiltIn");
const jsBuiltInSort = numbers.sort((a, b) => a - b);
console.timeEnd("JSBuiltIn");
if (SHOW_NUMBERS_LOG) {
  console.log(jsBuiltInSort);
}

logSortData("BubbleSort", bubbleSort);
logSortData("SelectionSort", selectionSort);
logSortData("InsertionSort", insertionSort);