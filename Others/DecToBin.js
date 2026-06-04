console.log('Decimal to binary')

function decimal_To_Binary(num) {
    let sum = 0, power = 0;

    while (num > 0) {
        let remainder = num % 2
        sum = sum + (remainder * Math.pow(10, power))
        power++
        num = Math.floor(num / 2)
    }
    return sum
}

console.log(decimal_To_Binary(50))