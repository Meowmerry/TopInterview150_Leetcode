/*
74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/description/
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

## Advice / Tips
What happens if you line up all of the rows next to each other? You get an ordered list! How do we search in an ordered list?

## Verbal Solution
Because the rows are all sorted themselves and each row always come after the one before, this matrix can be consider as a 1 dimensional ordered list. There are n items in the matrix, and we can consider them indexed from 0 to n - 1. Given an index, we can compute row and column indices by:
row = index / column_count
column = index % column_count

Note that the division in computing the row index is integer division.
Now just binary search!

*/

var searchMatrix = function (matrix, target) {

};
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); //  true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); //  false