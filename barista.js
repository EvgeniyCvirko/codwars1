function barista(coffees){
	if(coffees.length ===0){
	  return 0
	}if(coffees.length >=1){
	coffees = coffees.sort((a,b)=>a-b)
	let q = []
	let sum = -2;
	for (let i = 0; i < coffees.length; i++) {
	  sum =sum +2+ coffees[i]; 
	  q.push(sum)
	}
 return q.reduce((acc,e)=> acc+e)  
  }
 }