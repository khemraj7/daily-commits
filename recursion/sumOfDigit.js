function sumOfDigit(n){
  // base case
  if(n == 0) return 0;

  let lastDigit = n % 10

  let ans = sumOfDigit(Math.floor(n / 10))

  return lastDigit + ans
}

console.log(sumOfDigit(1234)) //10