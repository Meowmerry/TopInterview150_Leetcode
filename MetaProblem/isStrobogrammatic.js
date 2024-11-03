/*
https://leetcode.com/problems/strobogrammatic-number/description/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days&difficulty=EASY
Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).


Example 1:

Input: num = "69"
Output: true
Example 2:

Input: num = "88"
Output: true
Example 3:

Input: num = "962"
Output: false
 

Constraints:

1 <= num.length <= 50
num consists of only digits.
num does not contain any leading zeros except for zero itself.

*/
// Approch one
var isStrobogrammatic = function (num) {
    // Using Map to set Key and Value as possible number where can do rotateString
    // if num is 0,1,6,9,8  can rotate but if 2,3,4,5,7 can't rotate
    const rotateString = { '0': '0', '1': '1', '8': '8', '6': '9', '9': '6', };
    // Building string and compare with num and return 
    let newNum = '';

    // Iterate through nun input backword
    for (let i = num.length - 1; i >= 0; i--) {
        // check if each num is not contain int rotateString will return false
        const char = num[i];

        if (!rotateString[char]) {
            return false;
        }
        // else build up string with Value at rotateString[char]
        newNum += rotateString[char];
    }
    return newNum === num;
};


console.log(isStrobogrammatic("69")); // true
console.log(isStrobogrammatic("88"));  // true
console.log(isStrobogrammatic("962")); // false

// Approch two
var isStrobogrammatic2 = function (num) {

};

// console.log(isStrobogrammatic2("69")); // true
// console.log(isStrobogrammatic2("88"));  // true
// console.log(isStrobogrammatic2("962")); // false