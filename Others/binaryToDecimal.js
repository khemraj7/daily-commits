console.log('Binary To Decimal')

function Binary_To_decimal(num) {
    let sum = 0, power = 0;

    while (num > 0) {
        let remainder = num % 10
        sum = sum + (remainder * Math.pow(2, power))
        power++
        num = Math.floor(num / 10)
    }
    return sum
}

console.log(Binary_To_decimal(110010))