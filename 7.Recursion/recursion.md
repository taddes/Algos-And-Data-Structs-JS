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