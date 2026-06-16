var longestPalindrome = function (s) {

    let map = new Map();
    let count = 0;
    let odd = false;

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let freq of map.values()) {
        count += Math.floor(freq / 2) * 2;
        if (freq % 2 === 1) {
            odd = true;
        }
    }

    return count + (odd ? 1 : 0);

}

console.log(longestPalindrome("abccccdd")); // 7
console.log(longestPalindrome("a")); // 1