/*

Explore:
Input: Nums list 
Output: Max sum even nubmer

- It is guaranteed that there is at least one tag with an even value
- The tags can have positive or negativie value
- It can be possible to shoos no tags at all

Brainstrom:


Plan:
[2, 3, 6, 10,] // 22 check if sum is even return 
- if we sum all --> even return sum
- Iterate throug tagList 

Input : [2, 3, 6, -5, 10, 1, 1]

[2, 3, 6, 10,1,1] --> 23 (all positive)

[2, 3, 6, 10,1 ] --> 22 (23 minus smallest odd number)

find Maxinum sum in tagList
find minOdd num in tagList

Defind the tatalSum = 0;
Defind the minOdd num = Infinity

Iterate through tagList  
        totalSum += tag (exclude negative num)
        if tag is odd
           minOdd = Math.min(minOdd, tag(odd))

if totalSum % 2 == 0 --> return totalSum
const result = totalSum - minOdd

            
*/

// function getMaximumEvenSum(array) {
//     let totalSum = 0;
//     let minOdd = Infinity;

//     for (const num of array) {
//         if (num > 0) {
//             totalSum += num;
//         }

//         if (num % 2 !== 0) {
//             minOdd = Math.min(minOdd, Math.abs(num));
//         }

//     }

//     if (totalSum % 2 == 0) {
//         return totalSum;
//     }


//     return totalSum - minOdd;
// }

// console.log(getMaximumEvenSum([2, 3, 6, -5, 10, 1, 1])); // 22
// console.log(getMaximumEvenSum([2, 3, 6, -5, 10, -1])); // 20
// console.log(getMaximumEvenSum([5, -1, -2, -3, 8, 7])); // 20

// Time: O(n) where n is the length of array tag
// Space: O(1) 

function getMaximumEvenSum(array) {
    let totalSum = 0;
    let minOdd = Infinity;

    for (const num of array) { // O(n)

        if (num > 0) {
            totalSum += num; // O(1)
        }

        if (num % 2 !== 0) {
            minOdd = Math.min(minOdd, Math.abs(num)); // O(1)
        }

    }

    if (totalSum % 2 !== 0) {
        totalSum -= minOdd;
    }


    return totalSum;
}

console.log(getMaximumEvenSum([2, 3, 6, -5, 10, 1, 1])); // 22
console.log(getMaximumEvenSum([2, 3, 6, -5, 10, -1])); // 20
console.log(getMaximumEvenSum([5, -1, -2, -3, 8, 7])); // 20
