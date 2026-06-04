var intervalIntersection = function (firstList, secondList) {
    let result = []
    // two pointers
    let first = 0, second = 0

    while (first < firstList.length && second < secondList.length) {
        let start1 = firstList[first][0];
        let end1 = firstList[first][1]

        let start2 = secondList[second][0];
        let end2 = secondList[second][1]

        if (start1 <= start2) {
            if (end1 >= start2) {
                let max = Math.max(start1, start2)
                let min = Math.min(end1, end2)
                result.push([max, min])
            }
        } else {
            if (end2 >= start1) {
                let max = Math.max(start1, start2)
                let min = Math.min(end1, end2)
                result.push([max, min])
            }
        }

        if (end1 <= end2) {
            first++
        } else {
            second++
        }
    }

    return result;
}

console.log(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]])) // [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

console.log(intervalIntersection([[1, 3], [5, 9]], [])) // []