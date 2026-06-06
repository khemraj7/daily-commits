/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length
    let result = new Array(n).fill(-1)

    let stack = []

    // we will iterate through the array twice to handle the circular nature of the problem
    for (let i = 2 * n - 1;i >= 0;i--) {
        let currentIndex = i % n

        console.log(stack, result)
        // pop elements from the stack until we find a greater element or the stack is empty
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[currentIndex]) {
            stack.pop()
        }

        // if the stack is not empty, the top element is the next greater element
        if (stack.length > 0) {
            result[currentIndex] = nums[stack[stack.length - 1]]
        }

        // push the current index onto the stack
        stack.push(currentIndex)
        console.log('first time', stack)
    }

    return result
}

console.log(nextGreaterElements([1, 2, 1]))
// console.log(nextGreaterElements([1, 2, 3, 4, 3]))