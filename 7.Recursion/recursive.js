// Simple Recursive Example
function countDown(num) {
  if (num <= 0) {
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}



function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1)
}

console.log(sumRange(5))

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1)
}

console.log(factorial(4))