// 209. Minimum Size Subarray Sum

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// Sliding Window Approach
var minSubArrayLen = function (target, nums) {
    let min = Infinity;
    let low = 0;
    let high = 0;
    let sum = 0;

    while (high < nums.length) {
        sum = sum + nums[high]

        while (sum >= target) {
            let currentLength = high - low + 1
            min = Math.min(min, currentLength)
            sum = sum - nums[low]
            low++
        }

        high++
    }
    return min === Infinity ? 0 : min
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))