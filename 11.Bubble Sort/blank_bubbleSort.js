function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubble([45, 8, 16, 32, 2]))

function bubbleBest(arr) {
 for (let i = arr.length; i > 0; i--) {
   for (let j = 0; j < i - 1; j++) {
     if (arr[j] > arr[j+1]) {
       let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
     }

   }
 }
  return arr;
}


console.log(bubbleBest([45, 8, 16, 32, 2]))