/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let result = []
    let first = intervals[0]
    for (let i = 1;i < intervals.length;i++) {
        if (first[1] >= intervals[i][0]) {
            let min = Math.min(first[0], intervals[i][0])
            let max = Math.max(first[1], intervals[i][1])
            first = [min, max]
        }
        else {
            // previous merged interval push
            result.push(first);

            // move to next interval
            first = intervals[i];
        }


    }
    result.push(first)
    return result
};