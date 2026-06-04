var subarraySum = function (nums, k) {
    let sum = 0;

    const map = new Map()
    map.set(0, 1)
    let result = 0

    for (let i = 0;i < nums.length;i++) {
        sum = sum + nums[i]

        let rem = sum - k

        if (map.has(rem)) {
            result = result + map.get(rem)
        }

        map.set(sum, (map.get(sum) || 0) + 1)

    }

    return result
};


console.log(subarraySum([1, 1, 1], 2))
// console.log(pivotIndex([1, 2, 3]))
// console.log(pivotIndex([2, 1, -1]))