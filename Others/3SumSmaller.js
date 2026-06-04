/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
    // sort the array
    nums.sort((a, b) => a - b)
    let n = nums.length
    let result = 0;

    for (let i = 0;i < n - 2;i++) {
        let left = i + 1
        let right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum >= target) {
                right--
            } else if (sum < target) {
                result = result + (right - left)
                left++
            }
        }
    }

    return result
};

console.log(threeSumSmaller([-2, 0, 1, 3], 1))