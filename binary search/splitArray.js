/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let low = Math.max(...nums)
    let high = nums.reduce((a,b)=> a+b , 0)
    let res = high

    while(low <= high){
        let mid = low + Math.floor((high-low)/2)

        if(canSplit(nums, k, mid)){
            res = mid
            high = mid - 1
        }else{
            low = mid + 1
        }
    }

    return res
};

function canSplit(nums, k, maxSum){
    let count = 1
    let sum = 0

    for(let num of nums){
        if((sum + num) > maxSum){
            count++
            sum = num
        }else{
             sum = sum + num
        }
    }
    return count <= k
}
