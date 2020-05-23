/*
Write a function, sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return
an array that includes both values of that sum to zero, or undefined
if a pair does not exist.  

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
*/

// Time Complexity - O(n^2)
// Space Complexity - O(1)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) 
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) 
console.log(sumZero([-2, 0, 1, 3]))  

function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]]
      }
    }
  }
}
  