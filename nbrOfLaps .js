const nbrOfLaps = (x,y) =>{
	let arr=[]
	for (let i = 1; i>0; i++ ){
		if(i%x===0 && i%y === 0){
			arr.push(i / x);
			arr.push(i / y);
			break;
		}
	}
	return arr
}