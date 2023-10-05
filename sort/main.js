const { bubbleSort } = require("./bubble-sort");
const { selectionSort } = require("./selection-sort");

const numbers = new Array(100).fill(0).map(n => Math.floor(Math.random() * 1000));
const bubbleSortNumbers = numbers;
const selectionSortNumbers = numbers;

console.time("BubbleSort");
bubbleSort(bubbleSortNumbers);
console.log(bubbleSortNumbers);
console.timeEnd("BubbleSort");

console.time("SelectionSort");
selectionSort(selectionSortNumbers);
console.log(selectionSortNumbers);
console.timeEnd("SelectionSort");