function bubbleSort(array) {
  let isSwaped = false;
  do {
    isSwaped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwaped = true;
      }
    }
  } while (isSwaped);
}

// Test case

const numbers = new Array(100).fill(0).map(n => Math.floor(Math.random() * 1000));
console.time("BubbleSort");
bubbleSort(numbers);
console.log(numbers);
console.timeEnd("BubbleSort");