/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let low = 0;
    let maxL = -Infinity;

    let frequency = {}

    for (let high = 0;high < fruits.length;high++) {
        let char = fruits[high];
        frequency[char] = (frequency[char] || 0) + 1;

        while (Object.keys(frequency).length > 2) {
            let leftChar = fruits[low];
            frequency[leftChar]--;
            if (frequency[leftChar] === 0) {
                delete frequency[leftChar];
            }
            low++;
        }

        maxL = Math.max(maxL, high - low + 1);
    }

    return maxL == -Infinity ? 0 : maxL;
};


console.log(totalFruit([1, 2, 1])) // output: 3