function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
      console.log(arr)
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 8, 15, 4, 76, 25, 12, 5])