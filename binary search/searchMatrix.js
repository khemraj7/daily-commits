/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let low = 0;
    let high = matrix.length - 1
    
    while(low <= high){
        let mid = low + Math.floor((high - low)/2)
        let row = matrix[mid]
        if (target < row[0]) {
            high = mid - 1;
        } else if (target > row[row.length - 1]) {
            low = mid + 1;
        } else {
            return searchHelper(row, target);
        }
    }
    
    return false
};

function searchHelper(arr, target){
    let low = 0;
    let high = arr.length - 1
    
    while(low <= high){
        let mid = low + Math.floor((high - low)/2)
        
        if(arr[mid] == target){
            return true
        }else if(arr[mid] < target){
            low = mid + 1
        }else{
            high =  mid - 1
        }
    }
    
    return false
}
