/* 
Implement a function called countUniqueValues whcih accepts a sorted array
and counts the unique values in the array. There can be negative nuymbers in the
array, but it will always be sorted
*/

// Simple single iteration using the counter method
// Builds an object that has unique value counter
// The total number of unique keys in counter object returns unique values
function countUniqueValues(array) {
  if (array.length === 0) {
    return 0;
  }
  counter = {}
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


// Interesting alternate method

function countUniqueValuesAlt(array) {

}

countUniqueValuesAlt([1,1,1,1,1,2])
countUniqueValuesAlt([1,2,3,4,4,4,7,7,12,12,14])
countUniqueValuesAlt([])
countUniqueValuesAlt([-2,-1,-1, 0, 2])
countUniqueValuesAlt([1,1,1,1,1,2])