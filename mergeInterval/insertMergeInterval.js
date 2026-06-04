/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {

    // Insert new interval to intervals
    intervals.push(newInterval)

    // sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = []
    let first = intervals[0]

    for (let i = 1;i < intervals.length;i++) {
        if (first[1] >= intervals[i][0]) {
            let min = Math.min(first[0], intervals[i][0])
            let max = Math.max(first[1], intervals[i][1])
            first = [min, max]
        } else {
            // previous merged interval push
            result.push(first);
            // move to next interval
            first = intervals[i];
        }
    }

    result.push(first)
    return result
}

console.log(insert([[1, 3], [6, 9]], [2, 5])) // [[1,5],[6,9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])) // [[1,2],[3,10],[12,16]]

