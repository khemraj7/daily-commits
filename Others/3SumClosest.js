/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // sort the array
    nums.sort((a, b) => a - b)
    let n = nums.length
    let max_difference = Infinity
    let result;

    for (let i = 0;i < n - 2;i++) {
        let left = i + 1
        let right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            let diff = Math.abs(sum - target)
            // console.log('sum :', sum, 'diff :', diff)
            if (diff < max_difference) {
                max_difference = diff
                result = sum
            }
            if (sum == target) {
                left++
                right--
            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }

    return result
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([10, 20, 30, 40, 50, 60, 70, 80, 90], 1))