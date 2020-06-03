/* 
Write a function that takes an array of numbers and returns their product
*/

function productOfNonRecursive(arr) {
  let total = arr[0];
  for (let item of arr.slice(1)) {
    total *= item;
  }
  return total;
}

console.log(productOfNonRecursive([1,2,3,10]))

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  console.log(arr[0])
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1, 2, 3, 10]))