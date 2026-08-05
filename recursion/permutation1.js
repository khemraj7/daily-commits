/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let n = nums.length;
    let result = []
    const used = new Array(n).fill(false);

    function backTrack(currentArray){
        if(currentArray.length == n){
            result.push([...currentArray])
            return
        }

        for(let num of nums){
            if (used[num]) continue;

            used[num] = true
            currentArray.push(num)
            backTrack(currentArray)

            currentArray.pop()
            used[num] = false
        }
    }
    backTrack([])
    return result
};
