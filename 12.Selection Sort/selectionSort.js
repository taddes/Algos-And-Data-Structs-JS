// Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Position of smallest element
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      // Check to make swaps only if i differs from lowest
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}


console.log(selectionSort([34, 22, 10, 19, 17]))