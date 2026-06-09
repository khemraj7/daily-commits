var maxNumberOfBalloons = function (text) {
    const originalObj = {
        b: 1,
        a: 1,
        l: 2,
        o: 2,
        n: 1
    }

    let textObj = {};
    for (let char of text) {
        if (originalObj[char]) {
            textObj[char] = (textObj[char] || 0) + 1;
        }
    }

    let res = Infinity;
    for (let char in originalObj) {
        res = Math.min(res, Math.floor((textObj[char] || 0) / originalObj[char]));
    }

    return res;
}

console.log(maxNumberOfBalloons("nlaebolko"))
console.log(maxNumberOfBalloons("loonbalxballpoon"))
console.log(maxNumberOfBalloons("lloo"))
console.log(maxNumberOfBalloons("leetcode"))