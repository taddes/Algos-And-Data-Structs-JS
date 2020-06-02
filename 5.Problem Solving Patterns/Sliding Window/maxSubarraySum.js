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

// Implementation using Sliding Window O(n)
function maxSubArraySumSlidingWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  // Sum together the first few numbers to init maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  // set max and temp to the same. First collection could be the correct sum.
  // This value is updated and then compared to determine max sum
  tempSum = maxSum;

  // As you iterate through the array, you constantly update the temp and max
  // Sum value, removing the need for two for loops. 
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubArraySumSlidingWindow([2,6,9,2,1,8,6,4,1,2,6,5], 3))