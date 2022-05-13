function removeParentheses(s){
	let index1;
	 let index2;
	 let str = s
	 while (str.includes( '(') || str.includes( ')')){
		 index1 = str.lastIndexOf('(')  
		 index2 = str.indexOf(')', index1)
		 str = str.slice(0, index1) + str.slice(index2 + 1)
	 }
	 return str
  }