/* 
Write a function called same that accepts two arrays. The function should return 
true if the value in the array has its corresponding value squared in teh second 
array. The frequency of values must be the same (order doesn't matter).

same([1,2,3], [4,1,9]) // True
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // true
*/

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let freqCount1 = {};
//   let freqCount2 = {};

//   for (let value of arr1) {
//     freqCount1[value] = (freqCount1[value] || 0 ) + 1;
//   }

//   for (let value of arr2) {
//     freqCount2[value] = (freqCount2[value] || 0) + 1;
//   }
//   console.log(freqCount1)
//   console.log(freqCount2)

//   for (key in freqCount1) { 
//     if (!(key ** 2) in freqCount2) {
//       return false
//     }
//     if (freqCount2[key ** 2] !== freqCount1[key]) {
//       return false
//     }
//   }
//   return true
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    index = arr2.indexOf(arr1[i] ** 2)
    if (index === -1) {
      return false
    }
    arr2.splice(index, 1)
  }
  return true
}


console.log(same([1,2,3], [4,1,9])) // True
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,2], [4,4,1])) // true