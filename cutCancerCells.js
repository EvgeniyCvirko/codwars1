function cutCancerCells(o){
	
	let arr1=[]
	let a = o.split('').forEach((e,i,arr) => {
		e === e.toUpperCase() && e !=='C' ? arr1.push(e):e;
		e === e.toLowerCase() && e !=='c'&& arr[i +1] !=='C' && arr[i - 1] !=='C' ? arr1.push(e):e		
	});
	return arr1.join('')
 }