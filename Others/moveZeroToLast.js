// two pointers
var moveZeroes = function (nums) {
    let start = 0;
    let end = 1;

    while (end < nums.length) {
        console.log(start, end)
        if (nums[start] === 0 && nums[end] !== 0) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
        } else if (nums[start] !== 0) {
            start++;
        }
        end++;
    }
    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]))