function isCoprime(x, y) {
	let arr = []
	let arr1 = []
	for (let i = 1; i <= x; i++) {
		if( x % i === 0){
			arr.push(i)
		}
	}
	for (let j = 1; j <= y; j++) {
		if( y % j === 0){
			arr1.push(j)
		}
	}
return arr.filter(el => arr1.indexOf(el) >0).length === 0 ? true : false 
 }
