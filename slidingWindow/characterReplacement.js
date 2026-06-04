/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let maxCount = 0;
    let low = 0;

    let frequency = {}

    for (let high = 0;high < s.length;high++) {
        let char = s[high];
        frequency[char] = (frequency[char] || 0) + 1;

        let length = high - low + 1;
        let maxData = Math.max(...Object.values(frequency));
        let diff = length - maxData;

        if (diff > k) {
            let leftChar = s[low];
            frequency[leftChar]--;
            low++;
        } else {
            length = high - low + 1;
            maxCount = Math.max(maxCount, length);
        }
    }

    return maxCount;
};

console.log(characterReplacement("ABAB", 2)) // output: 4
console.log(characterReplacement("AABABBA", 1)) // output: 4