/*
You are given a 0-indexed integer array nums of size n.

Define two arrays leftSum and rightSum where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return an integer array answer of size n where answer[i] = |leftSum[i] - rightSum[i]|.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let totalSum = nums.reduce((acc, crr) => acc + crr, 0)
    let left = 0

    let result = []

    for (let num of nums) {
        let right = totalSum - left - num
        result.push(Math.abs(left - right))
        left += num
    }

    return result
};

console.log(leftRightDifference([10, 4, 8, 3]))
console.log(leftRightDifference([1]))