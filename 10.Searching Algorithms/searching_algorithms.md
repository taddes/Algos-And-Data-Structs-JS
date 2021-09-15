# Searching Algorithms
Searching through a data structure to find a particular value.

### Linear Search
* Performance: 
    * Best case: O(1).
    * Worst case: O(n).  
    * Average O(n)
* Given an unsorted array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.
* Pesudocode Example: Accepts an array and a value, checks all elements one by one to see if the passed in value is found. If so, return the index, if not, return -1
* In JavaScript, the following methods do this:
    * `indexOf`
    * `includes`
    * `find`
    * `findIndex`

### Binary Search
* Rather than eliminating one element at a time, you eliminate *half* of the remaining elements at a time. Significantly faster than linear search
* **Only works on sorted arrays**
* **Divide and conquer** using a pivot point
* Performance:
    * Worst/Average Case: O(log n)
    * Best Case: O(1)
* Pick the middle element, check if the desired value is less or greater than what you're searching for. The continue splitting your array into sub arrays, finding the midpoint again and again until you find your value.

### Naive String Search
* Basic way of searching for a substring in a string. For example, counting the number of times a smaller string occurs in a larger string
* Loop over long string with a loop over shorter string. If characters don't match, break inner loop. If they do match, continue. Use a counter to increment occurances
