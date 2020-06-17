# Recursion
* Simply, a process (function) that calls itself

## Call Stack Example
* Built in data structure that manages what happens when functions are invoked.
* When a function is invoked, it is pushed on the top of the call stack. When the return keyword is seen, or when the function ends, the compiler pops the function off the stack.
* FILO - First In Last Out
* Recursive functions keep pushing same function onto the call stack, with modified arguments.

* Every Recursive Function Should Have:
    1. A base case; the simplest resolution that stops the recursive execution.
    2. Different Input; the recursive call should change the data/arguments passed to function

## Common Pitfalls
1. No base case:
    * Results in infinite loop, endlessly calling function until memory overloaded.
2. Forgetting to return or returning the wrong thing
    * Usually have to return the function (with modified argument) with the argument itself.
    * Must modify argument somehow.
    * Not returning from base case. Results in endless loop, execution does not end.
3. Stack Overflow
    * Too many functions invoked, exceeding memory.

## Helper Method Recursion
* Outer function with a recursive function within it.
* Can be used to collect values within an array.
```javascript
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

## Pure Recursion
* Where the function itself is self contained and recursive. More challenging to implement, but effective in some cases.
* For arrays, use slice method and the spread operator, or concat that make copies of the array so you do not mutate them.
* Recall that strings are immutable, so you will need to use methods like slice, substr or substring to make copies.
