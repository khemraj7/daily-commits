function fibnacci(n){
   if(n == 0) return 0
   if(n == 1) return 1
   
   return fibnacci(n-1) + fibnacci(n-2)
}

console.log(fibnacci(10))
