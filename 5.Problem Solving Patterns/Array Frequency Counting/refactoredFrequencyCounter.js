/* 
Write a function called same that accepts two arrays. The function should return 
true if the value in the array has its corresponding value squared in teh second 
array. The frequency of values must be the same (order doesn't matter).

same([1,2,3], [4,1,9]) // True
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // true

O(n) solution - Linear
2 loops better than a loop within a loop
For a 1000 el arr1,  each element in one array would have 1000 iterations 
occur for each item, equalling 100000! For this method, only 2000 iterations 
would occur.

*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}; 
  let frequencyCounter2 = {}; 

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}