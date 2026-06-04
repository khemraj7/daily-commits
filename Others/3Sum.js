/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
1.sort the array
2.loop 0 to n-2
3. condition to duplicate array of i
*/
var threeSum = function (nums) {

    nums.sort((a, b) => a - b)

    let finalResult = []

    for (i = 0;i < nums.length - 2;i++) {

        // skip duplicate i
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1

        let target = -1 * nums[i]

        while (left < right) {
            let sum = nums[left] + nums[right]
            // console.log('sum :', sum, 'target :', target)
            if (sum == target) {
                // console.log(nums[left], nums[right], nums[i])
                finalResult.push([nums[i], nums[left], nums[right]])

                left++
                right--

                // skip duplicate left
                while (left < nums.length && nums[left] == nums[left - 1]) {
                    left++
                }

                // skip duplicate right
                while (right >= 0 && nums[right] == nums[right + 1]) {
                    right--
                }
            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }

    return finalResult
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]))