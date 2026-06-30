/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
   let freq = {}
   let total = 0
   let left = 0;

   for(let right = 0; right < s.length; right++){
    freq[s[right]] = (freq[s[right]] || 0) + 1

    while(freq['a'] > 0 && freq['b'] > 0 && freq['c']){
        freq[s[left]] -=1
        left++
    }
    total += left
   } 

   return total
};
