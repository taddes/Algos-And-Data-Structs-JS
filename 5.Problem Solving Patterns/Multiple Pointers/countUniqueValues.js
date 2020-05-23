/* 
Implement a function called countUniqueValues whcih accepts a sorted array
and counts the unique values in the array. There can be negative nuymbers in the
array, but it will always be sorted
*/

// Simple single iteration using the counter method
// Builds an object that has unique value counter
// The total number of unique keys in counter object returns unique values
function countUniqueValues(array) {
  // if (array.length === 0) {
  //   return 0;
  // }
  const counter = {}
  for (let int of array) {
    counter[int] = (counter[int] || 0) + 1;
  }
  console.log(counter)
  console.log(Object.keys(counter).length)
  return (Object.keys(counter).length)
}
countUniqueValues([1,1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,14])
countUniqueValues([])
countUniqueValues([-2,-1,-1, 0, 2])
countUniqueValues([1,1,1,1,1,2])
console.log()


// Interesting alternate method - USING POINTERS
// Avoids using a unique variable, uses MUCH less memory
// Modifies array as it iterates, building the unique values at the start of array.
// Two pointer values, one at base of array, the other like a scout moving forward.
function countUniqueValuesAlt(array) {
  if (array.length === 0) {
    console.log(0)
    return 0;
  }
  let pointerBase = 0;
  let pointerScout = 1;

  while (pointerScout <= array.length - 1) {
    if (array[pointerBase] === array[pointerScout]) {
      pointerScout++;
    } else if (array[pointerBase] !== array[pointerScout]) {
      pointerBase++;
      array[pointerBase] = array[pointerScout]
      pointerScout++;
    }
  }
  console.log(pointerBase + 1)
  return pointerBase + 1;
}

countUniqueValuesAlt([1,1,1,1,1,2])
countUniqueValuesAlt([1,2,3,4,4,4,7,7,12,12,14])
countUniqueValuesAlt([])
countUniqueValuesAlt([-2,-1,-1, 0, 2])
countUniqueValuesAlt([1,1,1,1,1,2])
console.log()


// Additional alternative, variation on solution above
function countUniqueValuesAlt2(array) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    } else {
      j++;
    }
  }
  console.log(i + 1)
  return i + 1
}

countUniqueValuesAlt2([1,1,1,1,1,2])
countUniqueValuesAlt2([1,2,3,4,4,4,7,7,12,12,14])
countUniqueValuesAlt2([])
countUniqueValuesAlt2([-2,-1,-1, 0, 2])
countUniqueValuesAlt2([1,1,1,1,1,2])
