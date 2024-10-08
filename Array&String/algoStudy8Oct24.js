/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a string, find the longest palindromic substring. You may assume there is only one longest substring.

Examples:
• Given a string: "babe" // returns"bab"
• Given a string: "baba" // returns"bab or aba"
• Given a string: "aefez" // returns "efe"
• Given a string: "a" // returns "a"
• Given a string: "aaa" // returns "aaa"
• Given a string: "" // returns ""

Explore:
Input: String
Output: longest substring
- string can be empty return ''
- string can be any length
- if can't find palindrom return ''

Brainstrom:
  - Iterate string backword len = str.length; len >= str.length
      babe 
      interate string from front
        start = 0 , star < string.length - end ; start++
            palindrome(string, start, end)
               

  - create a palindrom with string, start= 0, end = string.length
  if it is palindrome then move both
  if it is not palindrome then try both 
   - move front pointer
   - move back pointer
   palindrome(babe, start, 4)
     end = 4 || end

      if(b !== e) return false
  

Plan:
*/
function isPalindrome(string, start = 0, len) {
  len = len || string.length;
  let end = start + len - 1;
  while (start < end) {
    if (string[start++] !== string[end--]) {
      return false
    }
  }
  return true;
}

function longestPalindrome(string) {
  let result = ''
  


  return result;
}


// Test Cases
console.log(longestPalindrome("ba") == "b"); // Should print "b"
console.log(longestPalindrome("babe") == "bab"); // Should print "bab"
console.log(longestPalindrome("abaxyzzyxf") == "xyzzyx"); // Should print "xyzzyx"
console.log(longestPalindrome("it's afternoon") === "noon"); // Should print "noon"
console.log(longestPalindrome("a") == "a"); // Should print "a"
console.log(longestPalindrome("kb12365456321bb") === 'b12365456321b');  // b12365456321b



/* ===========================================================
Q. Given a linked list, return the kth element from the end of the list.

You may assume all elements have a positive integer value.
If K exceeds the length of the list, return -1 instead.
Examples:

Given a linked list: [13, 1, 5, 3, 7, 10], k: 1 // returns 10
Given a linked list: [13, 1, 5, 3, 7, 10], k: 3 // returns 3
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer list

head of the list

[input] integer k

[output] integer



*/
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function kthFromLast(head, k) {

}
// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))));
console.log(kthFromLast(LL1, 1)); // 10
console.log(kthFromLast(LL1, 3)); // 3 
console.log(kthFromLast(LL1, 6)); // 13
console.log(kthFromLast(LL1, 7)); // -1




/* ===========================================================
Q. Given an unsorted linked list, find the element with the highest value iteratively.

Examples:

Given a linked list: 1 -> 2 -> 3 // returns 3
Given a linked list: 6 -> 1 -> 5 -> -13 // returns 6
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer list

head of the list

[output] integer

max value


*/

/* ===========================================================
Q. Given a non-empty binary tree, find the maximum path sum.

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

[JavaScript] Syntax Tips


*/


/* ===========================================================
Q. Given k sorted arrays, merge all the arrays into a single array.

Each array is sorted in ascending order.
Examples:

Given one empty array: returns []
Given 3 arrays:
[
  [1, 4, 5],
  [1, 3, 4]
  [2, 6]
]
returns: [1, 1, 2, 3, 4, 4, 5, 6]

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.array.integer m

An array of sorted arrays

[output] array.integer

merged sorted array of integers




*/


/* ===========================================================

Q. Given a binary tree, find the lowest common ancestor of two given nodes in the tree and return its value.

A node can be its own ancestor.
Examples:

Given a binary tree:
                     10
                    /  \
                  5     12
                 / \    /    
                3   6  11
For node1: 3, node2: 6 // returns 5
For node1: 11, node2: 6 // returns 10
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] tree.integer root

[input] integer val1

[input] integer val2

[output] integer

lowest common ancestor
*/

/* ===========================================================

Q. Given a binary tree, print the level order traversal so that each level of nodes is stored in a separate list, going from left to right.

Examples:

Given a binary tree:
                 1
                / \ 
               2   3
// returns [[1], [2, 3]] 

Given a binary tree:
                 1
                / \
               2   3
              / \
             4   5
// returns [[1], [2, 3], [4, 5]] 

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] tree.integer root

roof of the tree

[output] array.array.integer

printed trees in 2D array of integers (matrix)



*/

/* ===========================================================
Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order starting from the top left element.

Examples:

Given a matrix:
[               
    [1, 2, 3],            
    [4, 5, 6],          
    [7, 8, 9]  
]   
// returns: [1, 2, 3, 6, 9, 8, 7, 4, 5]

Given a matrix:
[
    [1, 2, 3],
    [4. 5. 6]
]
// returns: [1, 2, 3, 6, 5, 4]
*/

/*
Q. Given a linked list, return the kth element from the end of the list.

You may assume all elements have a positive integer value.
If K exceeds the length of the list, return -1 instead.
Examples:

Given a linked list: [13, 1, 5, 3, 7, 10], k: 1 // returns 10
Given a linked list: [13, 1, 5, 3, 7, 10], k: 3 // returns 3
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer list

head of the list

[input] integer k

[output] integer

*/



/* ===========================================================
Q. Given a linked list, sum all elements in the list recursively.

Examples:

Given a linked list: 1 -> 2 -> 3 // returns 6
Given a linked list:   (empty list) // returns 0
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] linkedlist.integer list

head of the list

[output] integer

sum all all elements in the list

*/