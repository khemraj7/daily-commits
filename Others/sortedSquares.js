/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let left_square = nums[left] * nums[left]
        let right_square = nums[right] * nums[right]

        console.log('left square :', left_square, 'right square :', right_square)
        if (right_square > left_square) {
            nums[right] = right_square
            right--
        } else {
            nums[right] = left_square
            left++
        }
    }
    return nums
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))