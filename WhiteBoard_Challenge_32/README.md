The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

Write two functions to print out the nth entry in the fibonacci series, recursively and iteratively
ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series

ex: fib(4) === 3

Write at least four tests for each function (they will generally cover the same IO for each function)

your tests should cover basic (expected) functionality
your tests should consider edge cases for your function (ex: will your function still operate on an array of floating point integers?)
### In your README.md explain why you would NOT use recursion to solve fibonacci, even though you CAN.

The recursion in this problem has to when this fibonacci gets a lot bigger the efficiency isn't there due to having to preserve and reread itself before proceeding can get outta hand where as iterating over the data gives it all one go.
