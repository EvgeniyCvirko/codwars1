const xMarksTheSpot = (input) => {
	let b = []
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[i].length; j++) {
			if (input[i][j] === 'x'){
			b.push(i)
			b.push(j)
		}
		}
	}
		if( input === []) {
			return []
		}if( b  === []) {
			return []
		} if( b.length >=3 ) {
			return []
		}if( b  === [0,0]) {
			return []
		}
		return b;
			
 }
 console.log(xMarksTheSpot(
	[
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
		['o', 'o', 'o', 'o', 'o', 'x', 'o', '0'],
		['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
	 ]
 ));