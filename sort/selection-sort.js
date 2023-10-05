function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
}

// Test case

const numbers = new Array(100).fill(0).map(n => Math.floor(Math.random() * 1000));
console.time("SelectionSort");
selectionSort(numbers);
console.log(numbers);
console.timeEnd("SelectionSort");