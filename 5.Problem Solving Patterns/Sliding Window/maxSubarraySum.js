/* 
Write a function called maxSubarraySum which accepts an array
of integers and a number called n. The function should calc the 
max sum of n consecutive elements in the array
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i+j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// if (num > arr.length) {
//   return null;
// }
// // Account for negative array possibilities
// let max = -Infinity;
// for (let i = 0; i < arr.length - num + 1; i++) {
//   let temp = 0;
//   for (let j = 0; j < num; j++) {
//     temp += arr[i + j]
//   }
//   if (temp > max) {
//     max = temp;
//   }
// }
// return temp;