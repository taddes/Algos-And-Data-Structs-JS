# Selection Sort
Similar to bubble sort, but instead of first placing large values into a sorted position, selection sort places small values into a sorted position. *Sorted data is accumulating at the beginning*. Search for minimum value at put it at the start of the array.

* Compare, index by index, the first value to the others in the array/list and put the smallest item at the start.
1. Store the first element as the smallest value you've seen so far.
2. Compare this item to the next item in the array until you find a smaller number. Save index of this value. *we care where the index is of the item to swap*.
3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4. If the "minimum" is not the value (index) you intially began with, swap the two values.
* As you loop through, continually shrink the scope of the problem as you iterate through the array, as items are sorted in the front.

## Time Complexity - O (n^2)
* Grows at n x n (n^2) making it not particularily scalable. 
* Have to compare every element to all subsequent elements.
* If you want to minimize the number of swaps, this particular algorithm is more memory efficient than bubble sort, only making one swap at the end of the loop.