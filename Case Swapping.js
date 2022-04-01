function swap(str){
return str.split('').map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
 }
 console.log(swap("CodeWars"));