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

words = substitution, abbr = s55n--> false
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
abbr consists of lowercase English letters or digits.
All the integers in abbr will fit in a 32-bit integer.\

Explore:
Input: two string
Output: Boolean

a , a --> true
a, b --> false

Brainstrom:

Plan:


*/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
// Time: O(w+) 
var validWordAbbreviation = function (word, abbr) {
    let i = 0, j = 0;

    while (i < word.length && j < abbr.length) {

        if (word[i] === abbr[j]) {
            // If characters match, move both pointers
            i++;
            j++;
        } else if (Number.isInteger(Number(abbr[j])) && abbr[j] !== '0') {
            // If the abbreviation character is a digit and it's not leading zero
            let k = j;

            // Find the end of the number in the abbreviation
            while (k < abbr.length && Number.isInteger(Number(abbr[k]))) {// K incress with abbr.length
                k++;
            }

            let number = Number(abbr.slice(j, k));

            // Move i forward by the number found in the abbreviation
            i += number;
            j = k; // Move j past the number in the abbreviation

            // Check if `i` exceeds the length of the word
            // console.log({ i }, { j });
            if (i > word.length) return false;
        } else {
            // If neither condition is met, return false
            return false;
        }
    }

    // Check if both pointers have reached the end of their respective strings
    return i === word.length && j === abbr.length;
};


// const word = "internationalization", abbr = "i12iz4n";
// console.log(validWordAbbreviation(word, abbr) === true); // true
// const word1 = "apple", abbr1 = "a2e";
// console.log(validWordAbbreviation(word1, abbr1) === false); // true
const word2 = "abbreviation", abbr2 = "a10n";
console.log(validWordAbbreviation(word2, abbr2)); // true
// const word3 = "a", abbr3 = "1";
// console.log(validWordAbbreviation(word3, abbr3)); // true
// const word4 = "substitution", abbr4 = "12";
// console.log(validWordAbbreviation(word4, abbr4));// true
// // const word5 = "hi", abbr5 = "hi1";
// console.log(validWordAbbreviation(word5, abbr5) === false);// true



var validWordAbbreviation = function (word, abbr) {
    // setup two pointers and current number
    let i = 0, j = 0, number = 0;
    // loop while the pointers are within the string bounds
    while (i < abbr.length && j < word.length) {
        // if the abbr char is a number
        if (!isNaN(abbr[i])) {
            // add the number to the previous number times 10
            // for example "12" will be 1 first then 10 + 2
            number = number * 10 + Number(abbr[i]);
            // if the new number is zero return false for leading zeros
            if (number === 0) return false;
            // increment the abbv pointer
            i++;
        }
        // if the number is greater than zero
        else if (number > 0) {
            // move the word pointer by number spaces
            j += number;
            // reset the number
            number = 0;
        }
        // if the characters match
        else if (abbr[i] == word[j]) {
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