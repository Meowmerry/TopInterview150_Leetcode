/*
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["flower","flow","floight"]
Output: "flo"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.
Input: strs = ["dog","","car"]

Input: strs = ["flower","flow","floight", ""]
Output: ""

Input: strs = ["flower","flow","t"]
Output: ""

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

Explore:
Input: Array of string
Outptu: String



Brainstrom:

Input: strs = ["flower","flow","flight"] => 
[["f", "l", "o", "w", "e", "r"], ["f", "l", "o", "w"], ["f", "l", "i", "g", "h", "t"]]

iterate the strs array and compare the i element
   if i element is same for all strs, push it to outputString
    example: i = 0: j = 0 strs[i][j] is f, then outputString becomes f
   if i element reaches the end of any strs, break
return outputString.join 


strs = ["flower","flow","flight"]
        i                    j  i
star[0][0] ==> f  --- > strs[0][0]=> f
                  --- > strs[1][0]=> f
                  --- > strs[2][0]=> f
star[0][1] ==> l  --- > strs[0][1]=> l
                  --- > strs[1][1]=> l
                  --- > strs[2][1]=> l
star[0][2] ==> o  --- > strs[0][2]=> o
                  --- > strs[1][2]=> o
                  --- > strs[2][2]=> o

star[0][3] ==> w
star[0][4] ==> e
star[0][5] ==> r

Defind prefix = ''
    Interate throug the strs[0] "flower"
        i = 0; i < 6 ; i++
            char = strs[0][0]--> f
            for let j = 0; j < strs.length ; j++
                if strs[0][0] !== char
                    return prefix
        prefix += char
   
  return prefix

Plan: 


*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // find the short length
    let minLenth = Infinity;
    let shortestStr = "";
    for (const str of strs) {
        if (str.length < minLenth) {
            minLenth = Math.min(minLenth, str.length);
            shortestStr = str;
        }
    }

    for (let i = 0; i < minLenth; i++) {
        for (j = 0; j < strs.length; j++) {
            const char = strs[j][i];

            // compare char of each str to shortestStr
            if (char !== shortestStr[i]) {
                // console.log({ char }, shortestStr[i]);
                // slice shortestStr
                return shortestStr.slice(0, i);
            }
        }
    }
    /*                          j  i
    first i loop ==> -- > strs[0][0]=> f
                    --- > strs[1][0]=> f
                    --- > strs[2][0]=> f
    secnd i loop ==> -- > strs[0][1]=> l
                    --- > strs[1][1]=> l
                    --- > strs[2][1]=> l
    thrd i loop ==>  -- > strs[0][2]=> o
                    --- > strs[1][2]=> o
                    return "fl"
                  */
    return shortestStr;
};



/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = '';
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i += 1) { // O(N) length string
        const char = strs[0][i];
        for (let j = 0; j < strs.length; j += 1) { // O(N) length of list String
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));