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
function longestPalindrome(string) {

    let len = string.length;
    // Iterate backward from last length
    while (len >= 0) {
        // Iterate from front, stop at the last index 
        for (let start = 0; start <= string.length - len; start++) {
            // check if string is isPalindrome, 
            if (isPalindrome(string, start, len)) {
                // if meet palindrome will return here
                return string.substring(start, start + len);
            }
        }
        len--;
    }
    return '';

}
function isPalindrome(string, start = 0, len) {
    // let len is == len or string length
    len = len || string.length;
    // defind th end point with each start with subtract length by 1
    let end = start + len - 1;
    while (start < end) {
        if (string[start++] !== string[end--]) {
            return false;
        }
    }
    return true;
}



// Test Cases
console.log(longestPalindrome("ba") == "b"); // Should print "b"
console.log(longestPalindrome("babe") == "bab"); // Should print "bab"
console.log(longestPalindrome("abaxyzzyxf") == "xyzzyx"); // Should print "xyzzyx"
console.log(longestPalindrome("it's afternoon") === "noon"); // Should print "noon"
console.log(longestPalindrome("a") == "a"); // Should print "a"
console.log(longestPalindrome("kb12365456321bb") === 'b12365456321b');  // b12365456321b

