# Insertion Sort

* Builds up the sort by gradually creating a larger left portion which is always sorted.

1. Start by picking the second element in the array. The first is considered the 'sorted' portion.
2. Compare the second element with the one before it and swap if necessary.
3. Continue to the next element and if it is in the correct order, iterate through teh sorted portion to place the element in the correct place.
4. Repeat until array sorted.

## Big O - Runtime Complexity - O (n^2)
* O (n^2) - Quadratic - As size grows, so does complexity (nested loop).
* Online Algorithm/Streaming in data - Algo that can work as data comes in.  The value can be placed where it needs to be in order. **Effective for this use case.**