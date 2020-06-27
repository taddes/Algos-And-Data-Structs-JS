/* 
*************************************
In order to implement merge sort, it's useful to implement a function 
responsible for arranging elements in an array on either side of a pivot.

Given an array, this helper function should designate an element as a pivot.

It should then rearrange elements in the array so that all values less than the 
pivot are moved to the left of the pivot and all values greater than the pivot are
moved to the right of the pivot.

Helper should do this process in place, that is, it should not create a new array.

When complete, the helper shold return the index of the pivot.

Considerations
==============
Runtime of quicksort depends on how one selects the pivot point.
Ideally, the pivot should be chosed so it's roughly the median value of the data.
Multiple possible options/permutations for the resultant array, with items being in 
a variable order. Index should be in same palce between those options.
*/

/*
1. 3 args: an array, start index and end index (can default to 0 and the array len,
  minus 1, respectively).
2. Grab the pivot from the start of the array.
3. Store current pivot index in a variable that will keep track of where the pivot
should show up.
4. Loop through array from start to end
    If pivot is greater than the current element, increment the pivot index
    variable and then swap the current element with the element at pivot index.
5. Swap the starting element/the pivot with pivot index
6. Return the pivot index.
*/

function pivotHelper(arr, start=0, end=arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivot += 1
    }
  }
  return pivot;
}

console.log(pivotHelper([4,8,2,1,5,7,6,3]))