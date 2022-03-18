function explode(s) {
	let arr = []
	for( let i = 0; i < s.length; i++){
	  let str = s[i].repeat(s[i]);
	  arr.push(str)
	}
 	return arr.join('')
 }