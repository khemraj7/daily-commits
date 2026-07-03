/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let low = 0, high = arr.length -1;

  let res = -1

  while (low <= high) {
    let mid = low + Math.floor((high - low)/2)

    if(arr[mid] < arr[mid + 1]){
      low = mid + 1
    }else{
      res = mid
      high = mid - 1
    }
  }

  return res
}

console.log(peakIndexInMountainArray([0,1,10,5,2]))