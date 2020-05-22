/* 
Write a function called same that accepts two arrays. The function should return 
true if the value in the array has its corresponding value squared in teh second 
array. The frequency of values must be the same (order doesn't matter).

same([1,2,3], [4,1,9]) // True
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // true

O(n2) solution - Quadratic relationship
if 1000 values in outer loop, 1000 in inner loop, results in 1000 * 1000 = 1000000!!!

*/

function same_naive(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr.splice(correctIndex, 1)
  }
  return true
}