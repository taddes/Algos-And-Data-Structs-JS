function binarySearch(arr, item) {
  let left = 0;
  let right = arr.length - 1;
  let midpoint = Math.floor((arr.length -1) / 2)

  while (left > right) {
    if (item === arr[midpoint]) {
      return arr[item]
    } else if (item > arr[midpoint]) {
      left = midpoint
      right =
    } else if (item < arr[midpoint]) {

    }

    

  }
}