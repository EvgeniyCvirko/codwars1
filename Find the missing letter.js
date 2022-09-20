function findMissingLetter(array){
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 let firstIndex = alphabet.findIndex(e=> e === array[0].toUpperCase())
 let endIndex = alphabet.findIndex(e=> e === array[array.length - 1].toUpperCase())
 let newArr = alphabet.slice(firstIndex, endIndex)
 let x = newArr.find((e,i) => e !== array[i].toUpperCase())
  return array[0] === array[0].toUpperCase() ? x.toUpperCase() : x.toLowerCase();
}
console.log(findMissingLetter(['O','Q','R','S'])); 
console.log(findMissingLetter(['a','b','c','d','f']))