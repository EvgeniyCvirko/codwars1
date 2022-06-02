var countDeafRats = function(str) {
   let town = str.replace(/ /g,"");
   let index = town.indexOf('P')
   let arr = town.split('')
   let arrayL =  arr.slice(0,index)
   let arrayR =  arr.slice(index +1,arr.length )
   let arrL=[]
   let arrR=[]
   let sumr = 0;
   let suml = 0;
   while(arrayL.length > 0){
      arrL.push([arrayL[0],arrayL[1]])
      arrayL.shift()
      arrayL.shift()
   }
   while(arrayR.length > 0){
      arrR.push([arrayR[0],arrayR[1]])
      arrayR.shift()
      arrayR.shift()
   }
   for (let i = 0; i < arrL.length; i++) {
      if (arrL[i][0]==='O' || arrL[i][0]==='0' ) {
         suml++
       } 
   }
   for (let i = 0; i < arrR.length; i++) {
      if (arrR[i][0]==='~') {
         sumr++
       } 
   }
   return suml + sumr;
 }