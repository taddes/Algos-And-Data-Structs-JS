/*
Write the function factorial that returns the factorial of that number.
Factorial is the product of an integer and all the integers below it.
!4 equals 24, (4x3x2x1)
Factorial 0 (!0) is always 1 
*/


function factorialNonRecursive(num) {
  if (num === 0) {
    return 1;
  }

  let result = 1
  for (let i = num; i > 1; i--) {
    console.log(i)
    result *= i 
  }
  return result
}

console.log(factorialNonRecursive(4))

function factorialRecursive(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(4))