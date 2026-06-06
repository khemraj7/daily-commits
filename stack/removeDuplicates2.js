/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack = []

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++

            // remove when count becomes k
            if (stack[stack.length - 1][1] === k) {
                stack.pop()
            }
        } else {
            stack.push([char, 1])
        }
    }

    // construct the result string from the stack
    let result = ""
    for (let [char, count] of stack) {
        result += char.repeat(count)
    }

    return result
}

console.log(removeDuplicates("deeedbbcccbdaa", 3))
console.log(removeDuplicates("pbbcggttciiippooaais", 2))
console.log(removeDuplicates("abcd", 2))
console.log(removeDuplicates("aaaa", 2))