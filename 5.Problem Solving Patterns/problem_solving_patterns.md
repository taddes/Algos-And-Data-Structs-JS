## Common Patterns for Solving Problems
Methodolgy to follow to solve common types of problems.

Some patterns include:
* Frequency Counter
* Multiple Pointers
* Sliding Window
* Divide and Conquer
* Dynamic Programming
* Greedy Algorithms
* Backtracking

### Frequency Counter
* Useful when you need to compare multiple inputs.
* This pattern uses objects or sets of objects to collect values/frequencies of values.
* This is often O(n) and can avoid the need for nested loops or O(n^2) operations with arrays/strings.

### Multiple Pointers
* Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle (towards one another), based on a certain condition.
* Very efficient for solving problems with minimal space complexity as well. 
    * For example, a linear structure like a list or string, and you want to search for a pair of values, or something that meets a condition. Iterate or move through in a certain way. 

### Sliding Window
* This pattern involves creating a window which can either ba an array, sub array or number from one position to another.
* Depending on a certain condition, the window either increases or closes (and a new window is created).
* Useful for keeping track of a subset of data in an array/string, etc.
    * Ex. In an array or string, find the longest sequence of unique characters.
    * Ex. Finding a max sub array, where within an array, you fix the maximum possuble sum of consecutive n elements.

### Divide and Conquer
* Dividing a data set into smaller chunks and then repeating a process with a subset of data
* **This pattern can tremendously decrease time complexity**
* Usually an array, list, tree.