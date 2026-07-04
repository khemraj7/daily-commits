/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let n = nums.length

  while(low <= high){
    let mid = low + Math.floor((high - low)/2)

    if(nums[mid] == target){
      return mid
    }else if(nums[mid] > nums[n-1]){
      if(nums[mid] < target){
        low = mid + 1
      }else{
        if(nums[0] > target){
          low = mid + 1
        }else{
          high = mid -1
        }
      }
    }else{
      if(nums[mid] > target){
        high = mid - 1
      }else{
        if(nums[n-1] < target){
          high = mid -1
        }else{
          low = mid + 1
        }
      }
    }
  }
  return -1
}

console.log(search([4,5,6,7,0,1,2], 0))
