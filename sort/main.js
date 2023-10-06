const {
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
  jsBuiltIn,
} = require("./index");

const config = {
  SHOW_NUMBERS_LOG: false,
  SHOW_FASTEST_TIME_ALGORITHM: true,
  PRINT_IN_TABLE: true,
  RANDOM_MAX_NUMBER: 1000,
  RANDOM_MIN_NUMBER: 1,
  NUMBERS_SIZE: 100,
};

const numbers = new Array(config.NUMBERS_SIZE)
  .fill(0)
  .map(
    (n) =>
      Math.floor(
        Math.random() *
          (config.RANDOM_MAX_NUMBER - config.RANDOM_MIN_NUMBER + 1)
      ) + 1
  );

if (config.SHOW_NUMBERS_LOG) {
  console.log("unsorted array:", numbers);
}

function calculateSortData(label, func, numbersArray = numbers) {
  const array = numbersArray;
  const startTime = process.hrtime();
  const empty = func(array);
  const endTime = process.hrtime(startTime);

  if (config.SHOW_NUMBERS_LOG) {
    console.log(empty ?? array);
  }

  const time = (endTime[0] * 1e9 + endTime[1]) / 1e6;

  if (!config.PRINT_IN_TABLE) {
    console.log(`${label}: ${time}ms`);
  }

  return `${time}ms`;
}

const algorithms = [
  { label: "JSBuiltIn", func: jsBuiltIn },
  { label: "BubbleSort", func: bubbleSort },
  { label: "SelectionSort", func: selectionSort },
  { label: "InsertionSort", func: insertionSort },
  { label: "MergeSortWithReturn", func: mergeSort },
  { label: "MergeSortWithoutReturn", func: mergeSortInPlace },
  { label: "QuickSort", func: quickSort },
  { label: "HeapSort", func: heapSort },
  { label: "RadixSort", func: radixSort },
  { label: "CountingSort", func: countingSort },
  { label: "BucketSort", func: bucketSort },
  { label: "ShellSort", func: shellSort },
  { label: "TimSort", func: timSort },
  { label: "CocktailShakerSort", func: cocktailShakerSort },
  { label: "CycleSort", func: cycleSort },
];

console.log(`Array size: ${config.NUMBERS_SIZE}`);

for (const algorithm of algorithms) {
  algorithm.time = calculateSortData(algorithm.label, algorithm.func);
  delete algorithm.func;
}

if (config.PRINT_IN_TABLE) {
  console.table(algorithms);
}

if (config.SHOW_FASTEST_TIME_ALGORITHM) {
  let min = parseFloat(algorithms[0].time);
  let algorithm = algorithms[0];
  for (let i = 1; i < algorithms.length; i++) {
    if (min > parseFloat(algorithms[i].time)) {
      min = parseFloat(algorithms[i].time);
      algorithm = algorithms[i];
    }
  }
  console.log(`Current fastest is "${algorithm.label}" with time: "${algorithm.time}"`);
}