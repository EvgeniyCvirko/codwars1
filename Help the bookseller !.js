function stockList(listOfArt, listOfCat){
    if(listOfArt.length === 0 && listOfCat.length === 0){
      return ''
    }
    let arr1=listOfArt.map(e => e.replace(/[^A-Z]/g, '')[0])
  let arr2=listOfArt.map(e => e.replace(/[^\d]/g, ''))
  let newArr=[]
  let newArr1=[]
  
  for(let i = 0; i<listOfCat.length; i++) {
      newArr.push([listOfCat[i],0])
}
for(let j = 0; j<arr1.length; j++) {
    newArr1.push([arr1[j],+arr2[j]])
}
let obj = Object.fromEntries(newArr)
let keys = O`bject.keys(obj)
for(let i = 0; i<newArr.length;i++){
    for (let j = 0; j < newArr1.length; j++) {
        if(newArr[i][0] === newArr1[j][0]){
            for ( let key in obj){
                if(key === newArr1[j][0]){
                    obj[key] = obj[key] + newArr1[j][1]
                }
            }
 
        }
    }
    
}
if (newArr1.every(e => e===0)){
    console.log(newArr1.every(e => e===0));
    console.log(newArr1);
    return ''
  }
let x = []
for(let key in obj){
    x.push(`(${key} : ${obj[key]})`)
}
return x.join(',').replace(/,/g, ' - ') 
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],["L", "S", "R", "P"]));