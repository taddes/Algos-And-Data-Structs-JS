/* 
Given a sorted array of integers, write a function called search that
accepts a value and returns the index where the value passed to the 
function is located. If not found, return -1
*/

//  Linear Search
// O(n) Naive solution
function search(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// O(log(n))
function binary_search(arr, item) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (array[middle] < item) {
      min = middle + 1;
    } 
    else if (arr[middle] > val) {
      max = middle - 1;
    } 
    else {
      return middle; 
    }
  }
  return -1;
}

search([1,2,3,4,5,6], 4)
search([1,2,3,4,5,6], 6)
search([1,2,3,4,5,6], 11)

binary_search([1,2,3,4,5,6], 4)
binary_search([1,2,3,4,5,6], 6)
binary_search([1,2,3,4,5,6], 11)