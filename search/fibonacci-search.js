function fibonacciSearch(array = [], searchValue) {
  let firstNumber = 0;
  let secondNumber = 1;
  let fib = secondNumber + firstNumber;

  let offset = -1;

  while (fib > 1) {
    let i = Math.min(offset + firstNumber, array.length - 1);

    if (array[i] === searchValue) {
      return i;
    } else if (array[i] < searchValue) {
      fib = secondNumber;
      secondNumber = firstNumber;
      firstNumber = fib - secondNumber;
      offset = i;
    } else {
      fib = firstNumber;
      secondNumber = secondNumber - firstNumber;
      firstNumber = fib - secondNumber;
    }
  }

  if (secondNumber && array[offset + 1] === searchValue) {
    return offset + 1;
  }

  return -1;
}

module.exports = {
  fibonacciSearch,
};
