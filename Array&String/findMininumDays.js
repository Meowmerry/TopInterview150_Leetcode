/*
Explore:
Input: list of movie durations time
Output: Number of days you can watch 

Number of day 1 < n < 1000

on each day <= 3units
1.01 
1.01
1.01

Brainstorm:
Time:
Space:

Plan: 
- 



*/



// Solution 1
// function findMinimumDays(durations) {
//     let totalDay = 0;
//     let currentDuration = 0;
//     for (let i = 0; i < durations.length; i++) {
//         if (currentDuration + durations[i] >= 3) {
//             totalDay++;
//             currentDuration = durations[i];
//         } else {
//             currentDuration += durations[i];
//         }
//     }
//     return totalDay;
// }


// Solution 2
function findMinimumDays(durations) {
    let totalDay = 0;
    let start = 0;
    let nextPointer = 0;
    let currentDuration = 0;

    while (start < durations.length) {

        currentDuration += durations[start];
        // 0 + 1.90 + 1.04: 2.94 + 1.25: 1.25+ 2.5: 2.5+ 1.75:4.25
        // start: 0 --> 1 --> 2 --> 3 --> 4
        if (currentDuration > 3) {
            totalDay++; // 3
            nextPointer = start; // nexP: 3
            // 3.75
            currentDuration = durations[nextPointer];
            // 2.5
        }
        start++;
    }
    return totalDay;
}


// Solution 3
function findMinimumDays(durations) {
    durations.sort((a, b) => a - b);
    let left = 0;
    let right = durations.length - 1;
    let totalDay = 0;
    while (left <= right) {
        if (durations[left] + durations[right] <= 3) {
            left++;
            right--;
        } else {
            right--;
        }
        totalDay++;
    }
    return totalDay;
}

console.log(findMinimumDays([1.90, 1.04, 1.25, 2.5, 1.75])); // 3
console.log(findMinimumDays([1.04, 1.10, 1.25, 1.75, 1.90, 1.96, 2.5])); // 4
console.log(findMinimumDays([1.04, 1.10, 1.25, 1.75, 1.90, 1.96, 2.5, 1.01, 1.01, 1.01])); // 6
// [1.90, 1.04,2.5, 1.25,  1.75]
// [1.90, 1.04,2.5, 1.25,  1.75, 1.10, 1.96]
// console.log([1.90, 1.04, 2.5, 1.25, 1.75, 1.10, 1.96].sort())
// [ 1.04, 1.10, 1.25,1.75, 1.90, 1.96,2.5]

/*
Day: 1 :  1.90 + 1.04 <= 3
Day: 2 :  2.5 <= 3
Day: 3 :  1.25 + 1.75 <= 3
Day: 4 :  1.10

*/