/*
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    let n = s.length;
    function backTrack(arr, index){
        if(index == n){
            result.push([...arr])
            return
        }

        for(let end = index; end < n; end++ ){
            let str = s.substring(index, end + 1);

            if(isPalindrome(str)){
                arr.push(str)
                backTrack(arr, end + 1)
                arr.pop()
            }
        }
    }

    backTrack([],0)

    return result
};

function isPalindrome(str) {
    let left = 0, right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}
