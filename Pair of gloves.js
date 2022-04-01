function numberOfPairs(a){
	let с  = [...new Set(a)]
	console.log(с);
	let s = a.sort()
	
	let sum = 0
	let pairs = 1
		 for (i = 0; i < s.length; i++) {
			if ( s[i] == s[i + 1]){
			sum +=1;
			
		 }
		 return sum
	}
}
	
console.log(numberOfPairs(["red", "green", "red", "red", "blue", "blue"]));