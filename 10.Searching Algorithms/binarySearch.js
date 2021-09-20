function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  let midpoint = Math.floor((arr.length -1) / 2);

  while (arr[midpoint] !== item && start <= end) {
    console.log(start, middle, end);
    if (item < arr[midpoint]) {
      end = middle -1;
    } else {
      start = middle + 1
    }
    midpoint = Math.floor((arr.length -1) / 2);
  }
  console.log(start, middle, end);
  if (arr[midpoint] == item) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5))