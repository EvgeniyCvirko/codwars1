function deepCount(a){
	
	for (let i = 0; i < a.length; i++) {
		if ( Array.isArray(a[i]) === true )
		return deepCount(a);
	} 
	return a.length;
 }
 console.log(deepCount([1,2,[2,3,[0]]]));

