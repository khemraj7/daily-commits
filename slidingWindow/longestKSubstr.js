/*
You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.

Note : If no such substring exists, return -1.
*/

// Sliding Window Approach
function longestKSubstr(s, k) {
    // code here
    let low = 0;
    let max = -Infinity

    let frequency = {}

    for (let high = 0;high < s.length;high++) {
        let currentChar = s[high]
        frequency[currentChar] = (frequency[currentChar] || 0) + 1

        while (Object.keys(frequency).length > k) {
            frequency[s[low]] = frequency[s[low]] - 1

            if (frequency[s[low]] === 0) {
                delete frequency[s[low]]
            }
            low++
        }

        if (Object.keys(frequency).length === k) {
            let length = high - low + 1
            max = Math.max(max, length)
        }
    }

    return max === -Infinity ? -1 : max

}

console.log(longestKSubstr("aabacbebebe", 3))
console.log(longestKSubstr("aaaa", 2))
console.log(longestKSubstr("aabaaab", 2))

