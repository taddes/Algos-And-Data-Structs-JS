/* 
write a function called recursiveRange which accepts a number and adds up all the 
numbers from 0 to the nummber passed to the function
*/

function rangeNonRecursive(num) {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
}

console.log(rangeNonRecursive(10))

function recursiveRange(num) {
  if (num === 0) {
    return 0
  }
  return num + recursiveRange(num - 1)
}

console.log(recursiveRange(10))