let testArr = [5, 68, 6, 15, 22, 78, 14];

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1] ) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(testArr));

// Bubble Sort Optimization
// If data almost sorted, Bubble sort behaves the same, even if there is less work.