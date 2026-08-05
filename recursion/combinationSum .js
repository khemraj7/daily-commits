/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = []
    let length = candidates.length

    function backTrack(arr, sum, index, n, target) {
        if (n == index) {
            if (sum == target) {
                result.push([...arr])
            }
            return
        }

        // not choice
        if (sum <= target) {
            arr.push(candidates[index])
            sum += candidates[index]

            backTrack(arr, sum, index, n, target)
            arr.pop()
            sum -= candidates[index]
        }

        // choice
        backTrack(arr, sum, index + 1, n, target)
    }

    backTrack([], 0, 0, length, target)

    return result
};
