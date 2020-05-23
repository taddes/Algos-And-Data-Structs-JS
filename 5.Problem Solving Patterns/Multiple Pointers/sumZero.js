/*
Write a function, sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return
an array that includes both values of that sum to zero, or undefined
if a pair does not exist.  

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
*/

// Time complexity - O(n)
// Space complexity - O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}


console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) 
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) 
console.log(sumZero([-2, 0, 1, 3]))  

// Alt solution

function sumZero2(arr) {
  let point1 = 0;
  let point2 = arr.length -1;

  while (point1 < point2)
  if (arr[point1] + arr[point2] === 0) {
    return [arr[point1], arr[point2]]
  } else if (arr[point1] + arr[point2] > 0) {
    point2--;
  } else if (arr[point1] + arr[point2] < 0) {
    point1++;
  }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])) 
console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5])) 
console.log(sumZero2([-2, 0, 1, 3]))