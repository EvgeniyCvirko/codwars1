function persistence(num) {
   let sum = 0
   num = num.toString()
   while(num.length > 1 ){
      sum ++
      num = num.split('').map(e=>+e).reduce((priv, curr) => priv*curr,1).toString()
   }
   return sum
}