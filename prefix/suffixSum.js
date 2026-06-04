
const suffixSum = (nums) => {
    let suffix = new Array(nums.length);

    suffix[nums.length - 1] = nums[nums.length - 1];

    for (let i = nums.length - 2;i >= 0;i--) {
        suffix[i] = suffix[i + 1] + nums[i]
    }

    return suffix
}

console.log(suffixSum([2, 4, 1, 6, 3]))