/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let n = temperatures.length
    let result = new Array(n).fill(0)
    let stack = []
    for (let i = n - 1;i >= 0;i--) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop()
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1] - i
        }
        stack.push(i)
    }
    return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))