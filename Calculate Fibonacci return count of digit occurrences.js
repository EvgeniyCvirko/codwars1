 function fibDigits(n) {
   let n1 = 0, n2 = 1, next;
   for (let i = 1; i <= n; i++) {
     next = BigInt(n1 + n2);
     n1 = BigInt(n2);
     n2 = BigInt(next);
   } 
   let str = n1.toString()
let newArray = []
for (let j = 0; j < 10; j++) {
   let counter = 0
   for (let i = 0; i < str.length; i++) {
      if (j === +str[i]){
         counter ++
      }
   }
   newArray.push([counter, j])
}
const a = newArray.sort((a,b) => 
   b[0] === a[0] ? b[1] - a[1]: b[0] - a[0]
   )
const index = a.findIndex(e => e[0]===0)
 if (index === -1 ) {
   return a
 } else return a.splice(0,a.length - (a.length - index))
 }
 console.log(fibDigits(10000));
 