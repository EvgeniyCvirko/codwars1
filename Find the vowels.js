function vowelIndices(word){
	let arr = [ 'a', 'e', 'i', 'o', 'u', 'y']
	 word=word.toLowerCase().split('')
	 let arr1=[]
	 for (let i = 0; i < word.length; i++) {
		 for (let j = 0; j < arr.length; j++) {
			 if( word[i] === arr[j]){
				arr1.push(i)
			 }	
			 
		 }
		 
	 }
	return arr1.map(e => e+1)
	 
 }
 vowelIndices('soper');