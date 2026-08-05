/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = []

    function dp(open, close, arr) {
        // base case
        if (open == n && close == n) {
            ans.push(arr.join(""))
            return 
        }

        if (open < n) {
            arr.push("(")
            dp(open + 1, close, arr)
            arr.pop()
        }

        if (close < open) {
            arr.push(")")
            dp(open, close + 1, arr)
            arr.pop()
        }
    }

    dp(0, 0, [])

    return ans
};
