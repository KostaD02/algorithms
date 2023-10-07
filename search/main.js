const { linearSearch } = require("./linear-search");
const { bubbleSort } = require("../sort/index");

const config = {
  SHOW_NUMBERS_LOG: false,
  SHOW_FASTEST_TIME_ALGORITHM: true,
  PRINT_IN_TABLE: true,
  RANDOM_MAX_NUMBER: 1000,
  RANDOM_MIN_NUMBER: 1,
  NUMBERS_SIZE: 100,
};

function calculateSearchData(label, func, searchValue = randomNumberForSearch, numbersArray = numbers) {
  const array = numbersArray;
  const startTime = process.hrtime();
  func(array, searchValue);
  const endTime = process.hrtime(startTime);

  if (config.SHOW_NUMBERS_LOG) {
    console.log(array);
  }

  const time = (endTime[0] * 1e9 + endTime[1]) / 1e6;

  if (!config.PRINT_IN_TABLE) {
    console.log(`${label}: ${time}ms`);
  }

  return `${time}ms`;
}

const algorithms = [{ label: "LinearSearch", func: linearSearch }];

const numbers = new Array(config.NUMBERS_SIZE)
  .fill(0)
  .map(
    (n) =>
      Math.floor(
        Math.random() *
          (config.RANDOM_MAX_NUMBER - config.RANDOM_MIN_NUMBER + 1)
      ) + 1
  );
const randomNumberForSearch = numbers[Math.floor(Math.random() * numbers.length)];

bubbleSort(numbers);

if (config.SHOW_NUMBERS_LOG) {
  console.log("Sorted array:", numbers);
}

for (const algorithm of algorithms) {
  algorithm.time = calculateSearchData(algorithm.label, algorithm.func);
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