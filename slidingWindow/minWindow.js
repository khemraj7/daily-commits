/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let low = 0;
    let frequency = {};
    let minStart = 0;
    let minLength = Infinity;

    let neededFreq = {};

    for (let char of t) {
        neededFreq[char] = (neededFreq[char] || 0) + 1;
    }

    for (let high = 0;high < s.length;high++) {
        let char = s[high];
        frequency[char] = (frequency[char] || 0) + 1;

        while (sahiHai(frequency, neededFreq)) {

            let currentLength = high - low + 1;

            if (currentLength < minLength) {
                minLength = currentLength;
                minStart = low;
            }

            frequency[s[low]]--;
            low++;
        }
    }

    return minLength === Infinity
        ? ""
        : s.slice(minStart, minStart + minLength);
};

function sahiHai(frequency, neededFreq) {

    for (let key in neededFreq) {

        if (!frequency[key] || frequency[key] < neededFreq[key]) {
            return false;
        }
    }

    return true;
}


console.log(minWindow("ADOBECODEBANC", "ABC")) // output: "BANC"
console.log(minWindow("a", "a")) // output: "a"