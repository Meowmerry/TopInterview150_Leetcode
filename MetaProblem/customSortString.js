/*

791. Custom Sort String
https://leetcode.com/problems/custom-sort-string/description/


You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. More specifically, 
if a character x occurs before a character y in order, then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.

Example 1:

Input: order = "cba", s = "abcd"

Output: "cbad"

Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".

Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

Example 2:

Input: order = "bcafg", s = "abcd"

Output: "bcad"

Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. 
The character "d" in s does not appear in order, so its position is flexible.

Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. 
The output "bcad" correctly follows this rule. Other arrangements like "dbca" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.

 

Constraints:

1 <= order.length <= 26
1 <= s.length <= 200
order and s consist of lowercase English letters.
All the characters of order are unique.

*/

// var customSortString = function (order, s) {
//     // using map to map "order" - get an object with key value pairs. ex: key 0 and value "c" in "cba"
//     // iterate the map object and find matching char in s string
//     // if match, push to output_str
//     // if no match, push to remaining_str
//     // return output_str + remaining_str
//     /*
//     order1 = "bcafg", s1 = "abcd";
//     {
//         0:b
//         1:c
//         2:a
//         3:f
//         4:g
//     }

//     "b" is in s string, push to output_str. output_str is now "b"
//     "c" is in s string, push to output_str. output_str is now "bc"

//     string = ''
//     "cba" --> s.includes(c) --> cba;
//     */
//     // cba;

//     // interate throug s, 
//     // check if c in s not in in string, join with string.
//     let result = '';
//     // Iterate through `order`, and add characters found in `s` to `result`
//     for (const c of order) {
//         if (s.includes(c)) {
//             result += c;
//         }
//     }

//     for (let i = 0; i < s.length; i++) {
//         // If characters in `s` are not already in `result`, add them
//         if (!result.includes(s[i])) {
//             result += s[i];
//         }
//     }
//     return result;

// };

// const order = "cba", s = "abcd";
// console.log(customSortString(order, s)); // "cbad"
// const order1 = "bcafg", s1 = "abcd";
// console.log(customSortString(order1, s1)); // "bcad"
// const order2 = "bcafg", s2 = "abcdhyk";
// console.log(customSortString(order2, s2)); // "bcadhyk"  "dhybcak" "dhybcak"
// var customSortString = function (order, s) {
//     let result = '';
//     const frequency = new Map();

//     // Iterate through the s to set Key: char, Value: count
//     for (const char of s) {
//         frequency.set(char, (frequency.get(char) || 0) + 1);
//     }

//     // iterate through order
//     for (const char of order) {
//         // check if frequency at char
//         if (frequency.has(char)) {

//             // build and repeat string 
//             result += char.repeat(frequency.get(char));
//             // Remove from frequency map once added
//             frequency.delete(char);
//         }

//     }
//     // Step 3: Add remaining characters from s that are not in `order`
//     for (const [char, _] of frequency) {
//         result += char.repeat(frequency.get(char));
//     }
//     return result;
// };

var customSortString = function (order, s) {
    const charCount = {};
    // Iterate to order and set Key:Char , Value: count

    for (const char of order) {
        charCount[char] = 0;
    }

    // Iterate through the s, and if has value in charCountMap will increment value by 1
    for (const char of s) {
        if (charCount[char] !== undefined) {
            charCount[char]++;
        }
    }

    let result = '';
    //Iterate the order, build up the result string by repeat each string with value in charCount
    for (const char of order) {
        result += char.repeat(charCount[char]);
    }

    // Add remaining the string from s
    for (const char of s) {
        if (!order.includes(char)) {
            result += char.repeat(charCount[char]);
        }
    }
    return result;
};
const order = "cba", s = "abcd";
console.log(customSortString(order, s)); // "cbad"
// const order1 = "bcafg", s1 = "abcd";
// console.log(customSortString(order1, s1)); // "bcad"
// const order3 = "kqep", s3 = "pekeq";
// console.log(customSortString(order3, s3)); // "kqeep"

