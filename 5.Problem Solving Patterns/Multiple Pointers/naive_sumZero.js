// Time Complexity - O(n^2)
// Space Complexity - O(1)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+j; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) 
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])) 
console.log(sumZero([-2, 0, 1, 3]))  