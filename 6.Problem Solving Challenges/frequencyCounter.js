/* 
Given two positive integers, find out if the two numbers have the same frequency 
of digits.

Solution must have a runtime complexity of O(n) (linear time)
*/

/* 
**********
Pseudocode
**********
- simple elimination -> if length of numbers not equal, cannot have same freq
- convert to strings, then to arrays to compare occurances
*/
function sameFrequency(num1, num2) {
  if (num1.toString.length !== num2.toString.length) {
    return false;
  }

  let num1Counter = {};
  let num2Counter = {};

  for (let number of num1.toString().split('')) {
    num1Counter[number] = ((num1Counter[number]) || 0) + 1
  }
  for (let number of num2.toString().split('')) {
    num2Counter[number] = ((num2Counter[number]) || 0) + 1
  }

  for (let key in num1Counter) {
    console.log(key)
    if (!key in num2Counter) {
      return false;
    }

    if (num1Counter[key] !== num2Counter[key]) {
      return false;
    }
  }

  for (let key in num2Counter) {
    console.log(key)
    if (!key in num2Counter) {
      return false;
    }
    if (num2Counter[key] !== num1Counter[key]) {
      return false;
    }
  }

  return true;
}



console.log(sameFrequency(221, 2132))











function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}; 
  let frequencyCounter2 = {}; 

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}