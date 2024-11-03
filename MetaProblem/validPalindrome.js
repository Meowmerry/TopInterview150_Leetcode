/*
https://leetcode.com/problems/valid-palindrome-ii/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days&difficulty=EASY
/**
 * @param {string} s
 * @return {boolean}
 */
/*
## Algorithm

1) Create a helper function checkPalindrome that takes a string s, and two pointers i and j. This function returns a boolean indicating if s.substring(i, j) is a palindrome. Implementation details for this function can be found in the first section of this article.

2) Initialize two pointers, i = 0 and j = s.length() - 1.

3) While i < j, check if the characters at indices i and j match. If they don't, that means we must spend our deletion on one of these characters. Try both options using checkPalindrome. In other words, return true if either checkPalindrome(s, i, j -1) or checkPalindrome(s, i + 1, j) is true.

4) If we exit the while loop, that means the original string is a palindrome. Since we didn't need to use the deletion, we should return true.

*/

var validPalindrome = function (s) {
    // Using two pointer to solve
    // the first and the last should be the same
    // Initailize one poq at the start of the string and one at the end.
    // Compare the characters at these pointers - if they're different, the string can't be a palindrome. If they're the same, then move thje pointers toward each other.
    // Contunue until there is a mismatch (signifiying the string is not a palindrome) or until the pointers meet each other (which would mean the string is a palindrome)
    let start = 0, end = s.length - 1;
    while (start < end) {
        // Found a mismatched pair - try both deletions
        if (s[start] !== s[end]) {
            return checkPalindrome(s, start, end - 1) || checkPalindrome(s, start + 1, end);
        }
        start += 1;
        end -= 1;
    }
    return true;
};

function checkPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        // check if the characters don't match. We much delete one of these characters
        start++;
        end--;
    }
    return true;
}

