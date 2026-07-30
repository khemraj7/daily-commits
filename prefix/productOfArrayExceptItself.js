let productOfArrayExceptItself =(nums) =>{
    let prefix = new Array(nums.length).fill(1);
    let suffix = new Array(nums.length).fill(1);
    // prefix
    for(let i = 1; i<nums.length; i++){
       prefix[i] = prefix[i-1] * nums[i-1]
    }
    
    // suffix 
    let n = nums.length
    for(let i = n - 2; i >= 0; i--){
        console.log(i, nums[i])
        suffix[i] = suffix[i+1] * nums[i + 1]
    }
    
    let ans = new Array(n);

    for (let i = 0; i < n; i++) {
        ans[i] = prefix[i] * suffix[i];
    }

    return ans;
}

console.log(productOfArrayExceptItself([1,2,3,4]))
