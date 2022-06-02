function towerBuilder(n) {
let arr = []
let sum = 0
for (let i = 1; i <=n ; i++) {
   let str = '*'.repeat(i + sum++)
   let s = ' '.repeat(n-i)
   let newStr = s.concat(str,s)
   arr.push(newStr)
}
return arr
 }