
// Sliding window problem to find the maximum sum of a subarray of size k
function maxSubarraySum(arr, k) {
    // code here
    let maxSum = -Infinity;
    let low = 0;
    let high = k - 1;

    let sum = 0
    // initial window sum
    for (let i = low;i <= high;i++) {
        sum = sum + arr[i]
    }

    // slide the window across the array
    while (high < arr.length) {
        maxSum = Math.max(maxSum, sum)
        low++
        high++

        if (high == arr.length) break;
        sum = sum - arr[low - 1]
        sum = sum + arr[high]
    }

    return maxSum;
}

const result = maxSubarraySum([1, 2, 3, 4, 5], 2);
console.log(result)