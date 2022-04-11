function killer(obj, dead) {
	for( let name in obj){
		if( dead.every(deadPerson => obj[name].includes(deadPerson))){
return name
		}
	}
 }
