/*
Write a function called power which accepts a base and an exponent. 
The function should reutrn the power of the base to the exponent.
Should mimic Math.pow()
Note: do not worry about negative bases or exponents
*/


// Non recursive solution
function powerNonRecursive(base, exp) {
  if (exp === 0) {
    return 1;
  }
  let result = 1;

  for (let i = 0; i < exp; i++) {
    console.log(i)
    console.log(result)
    result *= base
  }
  return result
}

console.log(powerNonRecursive(2,1))

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  console.log(exp)
  return base * power(base, exp - 1);
}

console.log(power(2,1))