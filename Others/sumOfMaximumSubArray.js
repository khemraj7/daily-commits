console.log("Sum of Maximum Sub array")
// Kedane's Algorithm
var maxSubArray = function (nums) {
    // Step 1: Initialize variables
    let sum = 0, max = Number.NEGATIVE_INFINITY;

    // Step 2: Iterate through the array
    for (let i = 0;i < nums.length;i++) {

        // Step 3: Add the current number to the sum of the current subarray
        sum = sum + nums[i]

        // Step 4: Update max if the current sum is greater than the previously recorded max
        max = Math.max(max, sum)

        // Step 5: If sum becomes negative, reset it to 0
        if (sum < 0) {
            sum = 0
        }
    }

    // Step 6: Return the maximum subarray sum found
    return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))