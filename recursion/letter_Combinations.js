/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let obj = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    let result =[]
    if(!digits || digits == "") return result

    function backTracking(current , index){
        if(digits.length == current.length){
            result.push(current);
            return;
        }

        let letters = obj[digits[index]]

        for(let char of letters){
            backTracking(current + char, index + 1)
        }
    }

    backTracking("", 0)

    return result
};
