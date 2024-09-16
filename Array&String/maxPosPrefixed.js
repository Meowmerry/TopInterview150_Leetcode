
/*

An array of integers, arr[n], can be rearranged arbitrarily.
The prefix sum at index i is defined as psum[i] = arr[0] + arr[1] + ... + arr[i].

Rearrange the array to maximize the number of positive elements in the psum array.

Report the maximum the number of positive elements that can be achieved in the array psum.

Note: Here, a positive value is defined as an integer value greater than 0

Explore:

[3,4,-6,-10]
[ 4, 3, -6, -10 ]
[ 4, 7, 1, -9] -- possivie 3


Brainstorm:
Plan:
Sorting from grather to smaller
count = 0;
preSum = 0;

Iterate trhoug the arr number
    preSum += num
        presum > 0,
            increment count by 1
        else break

*/

function maxPosPrefixed(arr) {
    arr.sort((a, b) => b - a);
    let preSum = 0;
    let count = 0;

    for (let num of arr) {
        preSum += num;
        if (preSum > 0) {
            count += 1;
        } else {
            break;
        }
    }

    return count;

}
console.log(maxPosPrefixed([3, 4, -6, -10])); // 3
console.log(maxPosPrefixed([3, 4, 6, -10])); // 4
