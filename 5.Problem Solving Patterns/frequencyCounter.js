/* 
Write a function called same that accepts two arrays. The function should return 
true if the value in the array has its corresponding value squared in teh second 
array. The frequency of values must be the same (order doesn't matter).

same([1,2,3], [4,1,9]) // True
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // true

*/

function freqCount(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return;
  }
}