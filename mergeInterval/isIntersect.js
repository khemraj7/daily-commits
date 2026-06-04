const isIntersect = function (intervals) {
    // sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let first = intervals[0]
    for (let i = 1;i < intervals.length;i++) {
        if (first[1] >= intervals[i][0]) {
            return true
        }

        // move to next interval
        first = intervals[i];
    }
    return false
}

console.log(isIntersect([[1, 3], [2, 4]])) // true
console.log(isIntersect([[1, 2], [3, 4]])) // false