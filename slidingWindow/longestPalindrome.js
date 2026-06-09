
var longestPalindrome = function (s) {
    // use sliding window
    let res = "";

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        // palindrome is between left + 1 and right - 1
        let str = s.slice(left + 1, right);

        if (str.length > res.length) {
            res = str;
        }
    }

    for (let i = 0;i < s.length;i++) {
        // odd length palindrome
        expand(i, i);

        // even length palindrome
        expand(i, i + 1);
    }


    return res
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))