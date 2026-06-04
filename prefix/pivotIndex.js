var pivotIndex = function (nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0;i < nums.length;i++) {

        // suffix sum = total sum - left sum - current element
        let rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) return i;

        // prefix sum
        leftSum += nums[i];
    }

    return -1;
}


console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))