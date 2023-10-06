function cycleSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let item = array[i];
    let pos = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < item) {
        pos++;
      }
    }

    if (pos === i) {
      continue;
    }

    while (item === array[pos]) {
      pos++;
    }

    if (pos !== i) {
      const temp = item;
      item = array[pos];
      array[pos] = temp;
    }

    while (pos !== i) {
      pos = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < item) {
          pos++;
        }
      }

      while (item === array[pos]) {
        pos++;
      }

      if (item !== array[pos]) {
        const temp = item;
        item = array[pos];
        array[pos] = temp;
      }
    }
  }
}

module.exports = {
  cycleSort,
};
