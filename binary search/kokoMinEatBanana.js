var minEatingSpeed = function(piles, h) {
    let n = piles.length;
    let low = 1
    let high = Math.max(...piles)
    console.log(high)
    let res = -1
    
    while(low <= high){
        let mid = low + Math.floor((high-low)/2)
        
        let hour = countHr(piles, n, mid)
        if(hour > h){
            low = mid +1
        }else{
            res = mid
            high = mid -1
        }
    }
    
    return res
};

function countHr(arr, n, speed){
    let h = 0;
    for(let i =0; i<n; i++){
        h = h + Math.floor(arr[i]/speed)
        
        if(arr[i]%speed !== 0){
            h++
        }
    }
    
    return h
}

console.log(minEatingSpeed([3,6,7,11], 8))
