const runLengthEncoding = (str) => {
	let arr = []
	let sum=1
	for (let i = 0; i < str.length; i++) {
		if(str[i]===str[i+1]){
			sum++
		}else {
		arr.push([sum,str[i] ])
		sum = 1
	   }
		
		}
	
	
	return arr 
 }


	console.log(runLengthEncoding("Helloo world!"))//[[1,'H'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]