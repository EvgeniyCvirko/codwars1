function getLengthOfMissingArray(arrayOfArrays) {
	const arr = (arrayOfArrays || [])
	.map(a => a ? a.length : 0)
	.sort((a, b) => a - b)
	
	console.log(arr);
	if (arrayOfArrays == null || arrayOfArrays.length == 0){
    return 0;
	}
	if (arr.includes(0)) {
	return 0
}	
	 for (let i = 0; i < arr.length; i++){
	 if ( arr[i] + 1 !== arr[i + 1] ){
		 return arr[i] + 1;
	 }
	
	}
return 0
	}
	   
 console.log(getLengthOfMissingArray([[[4, 4, 2, 4],
	[2, 2, 4, 1, 3, 2],
	[4, 2, 3, 4, 3, 3, 3],
	[3, 3, 3, 0, 3, 3, 0, 0],
	[3, 2, 0, 3, 4, 0, 2, 3, 3],
	[1, 1, 1, 2, 4, 0, 3, 2, 0, 2],
	[4, 3, 1, 4, 2, 0, 1, 1, 3, 3, 2]]]));
 console.log(getLengthOfMissingArray([]));









 /*  function getLengthOfMissingArray(arrayOfArrays) {
	const lengths = (arrayOfArrays || [])
	  .map(a => a ? a.length : 0)
	  .sort((a, b) => a - b)
	
	if (lengths.includes(0)) {
	  return 0
	}
 
	for (let i = 0; i < lengths.length - 1; i++) {
	  if (lengths[i] + 1 !== lengths[i + 1]) {
		 return lengths[i] + 1
	  }
	}
 
	return 0
 } */