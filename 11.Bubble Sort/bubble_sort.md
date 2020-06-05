# Bubble Sort
* Where the largest values bubble up to the top.
* One index compared to the next, and switched if one is greater than the other.






### Built in JS Sorting
* `Array.sort()` - strange behavior. Does not sort numbers as expected. Is based off of sorting unicdoe strings... Need to pass in a sort/comparitor function as a parameter. 
    * Takes two elements, `a` and `b`.  Determines sort order based on return value.
    * If it returns a negaive number, a should come before b
    * If it returns a positive number, a should come after b
    * If it returns 0, it keeps them in the same place
    ```javascript
    [6, 4, 15, 10].sort((a, b) => a - b) // [4, 6, 10, 15]
    [6, 4, 15, 10].sort((a, b) => b - a) // [15, 10, 6, 4]
    ```