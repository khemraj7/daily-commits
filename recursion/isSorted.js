function isSorted(arr, i = 0){
    let n = arr.length
    
    // base case
    if(i == n || i == n - 1) {
        return true
    }
    
    if(arr[i] > arr[i+1]){
        return false
    }
    
    return isSorted(arr, i+1)
}

console.log(isSorted([1,2,3,4,6]))
