const Bingo = (arr) =>  {
	 let arrLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	 let bingo = ['b', 'i', 'n', 'g', 'o']
	 let words = []
	 let o = []
		for (let i = 0; i < arr.length; i++){
			words.push(arrLetters[arr[i]-1])
		}
		for (let j = 0; j < bingo.length; j++) {
			if(words.includes(bingo[j])){
				o.push(bingo[j])}
			}
			if(o.length === bingo.length ){
				return "WIN"
			}
	 return "LOSE"
 }
