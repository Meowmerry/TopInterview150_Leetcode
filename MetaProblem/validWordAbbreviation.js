/*
https://leetcode.com/problems/valid-word-abbreviation/
A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.

For example, a string such as "substitution" could be abbreviated as (but not limited to):

"s10n" ("s ubstitutio n")
"sub4u4" ("sub stit u tion")
"12" ("substitution")
"su3i1u2on" ("su bst i t u ti on")
"substitution" (no substrings replaced)
The following are not valid abbreviations:

"s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
"s010n" (has leading zeros)
"s0ubstitution" (replaces an empty substring)
Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

A substring is a contiguous non-empty sequence of characters within a string.

 

Example 1:

Input: word = "internationalization", abbr = "i12iz4n"
Output: true
Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").


Example 2:

Input: word = "apple", abbr = "a2e"
Output: false
Explanation: The word "apple" cannot be abbreviated as "a2e".
 

Constraints:

1 <= word.length <= 20
word consists of only lowercase English letters.
1 <= abbr.length <= 10
abbr consists of lowercase English letters and digits.
All the integers in abbr will fit in a 32-bit integer.
*/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
    // iterate through the word
    // if each letter in abbr, is number will count letter in word


};

const word = "internationalization", abbr = "i12iz4n";
console.log(validWordAbbreviation(word, abbr)); // true

const word1 = "apple", abbr1 = "a2e";
console.log(validWordAbbreviation(word1, abbr1)); // true


/*
var validWordAbbreviation = function(word, abbr) {
    // setup two pointers and current number
    let i = 0, j = 0, number = 0;
    // loop while the pointers are within the string bounds
    while(i < abbr.length && j < word.length) {
        // if the abbr char is a number
        if(!isNaN(abbr[i])) {
            // add the number to the previous number times 10
            // for example "12" will be 1 first then 10 + 2
            number = number * 10 + Number(abbr[i]);
            // if the new number is zero return false for leading zeros
            if(number === 0) return false;
            // increment the abbv pointer
            i++;
        }
        // if the number is greater than zero
        else if(number > 0) {
            // move the word pointer by number spaces
            j+=number;
            // reset the number
            number = 0;
        } 
        // if the characters match
        else if(abbr[i] == word[j]) {
            // increment both pointers
            i++; j++;
        } 
        // otherwise the characters don't match so return false
        else return false;
    }
    // the abbv is valid if the abbv pointer made it all the way through the string
    // and the word pointer plus any remaining number made it through the string
    return i === abbr.length && j + number === word.length;
};

*/