function matrixAddition(a, b){
   let newArray = []
   for (let i = 0; i< a.length; i++) {
      newArray[i]=[]
         for (let j = 0; j < b.length; j++) {
            newArray[i][j] = a[i][j] + b[i][j]
         }
   }
   return newArray
 }