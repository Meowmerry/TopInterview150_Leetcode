
/* 1)
============================================================================== 
Q. Given an unsorted linked list, count the number of elements recursively.

Examples:

Given a linked list: 1 -> 2 -> 3 // returns 3
Given a linked list:1 // returns 1
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer arg1

the head of the list

[output] integer

the number of all nodes in the list
*/




/* 2)
============================================================================== 
Q. Given a linked list, determine if it is monotonically increasing. Monotonically increasing means always increasing or remaining constant.

Examples:

Given a linked list: 1 -> 1 -> 2 -> 5 // returns True
Given a linked list: -1 -> -5 -> 3 -> -100, // returns False
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer head

head of the list

[output] boolean
*/


/* 3)
============================================================================== 
Q. Given a linked list, return the value of the element that is at the 1/3 position from the head.

You may assume the total number of elements is multiples of 3 (e.g. 3, 6, 9, 12 ...).
Examples:

Given a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 // returns 2
Given a linked list: 1 -> 2 -> 3 // returns 1
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer head

head of the list

[output] integer

one third element's value in the list
*/



/* 4)
============================================================================== 
Q. Given an unsorted array, perform bubble sort in ascending order.

Like other quadratic sorting algorithms, bubble sort makes n passes through the array, then works by swapping adjacent pairs of elements that are out of order. At every pass through the array, this process causes the largest remaining misplaced element to bubble into position. This process is to be done in place and the original array returned.

Examples:

Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
Given an array: [1] // returns [1]
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer array

unsorted array of integers

[output] array.integer

sorted array of integers
*/


/*. 5)
============================================================================== 
Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.

Examples:

Given an array: [2, 1] // returns [1, 2]
Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer array

unsorted array of 0s, 1s, and 2s

[output] array.integer

sorted array of 0s, 1s, and 2s
*/


/*. 6) 
==============================================================================
Q. Given a binary tree, return the in-order traversal of its nodes' values. You must use iterative approach.

In-order traversal:

Traverse the left subtree.
Visit the root.
Traverse the right subtree.
Example:

Given a binary tree:
           1
          / \
         2   3
// returns [2, 1, 3]

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] tree.integer root

[output] array.integer

*/


/* 7)
==============================================================================  
Q. Given a string, return the index of the first occurrence of a target string. Return -1 if the input string does not contain the target string.

Examples:

Given a string: "hello", target: "ll" // returns 2
Given a string: "formation", target: "afor" // returns -1
string: "aaaaaaa" target: "abc" // returns -1
string: "formation" target: "n" // returns 8

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string string

[input] string target

[output] integer

index

[JavaScript] Syntax Tips


*/


/* 8)
============================================================================== 
Q. Given an array of integers, find a triplet (a, b, c) that their sum equals zero (a + b + c = 0).

In case there are multiple such triplets, return one sorted triplet with the smallest value
Examples:

Given an array: [1, 2, 0] returns: []
Given an array: [-1, 0, 1, 0, 1] returns: [-1, 0, 1]
Given an array: [-5, -1, 0, 1, 4, -1] returns: [-5,1,4]
Note: There is a second triplet, [-1,0,1] but return [-5,1,4] since -5 is the smallest value
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer array

array of integers

[output] array.integer

unique triplet with the lowest overall value


*/




/* 9)
============================================================================== 
Q. Given a positive decimal integer, convert it to a hexadecimal form as a string.

Examples:

Given: 13, returns "D"
Given: 132, returns "84"
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

[output] string
*/




/* 10)
============================================================================== 
. Given a non-empty binary tree, find the maximum path sum.

A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
Example:

Given a tree:
           1
          / \    
         2   3
        /     
      -1   
// returns 6 (1 + 2 + 3)

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] tree.integer root

Root of the tree

[output] integer

The maximum path sum
*/



/* 11)
============================================================================== 
You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

Return the shortest sorted list of ranges that exactly covers all the missing numbers. That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.


Example 1:

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]
Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]


Example 2:

Input: nums = [-1], lower = -1, upper = -1
Output: []
Explanation: There are no missing ranges since there are no missing numbers.

*/










