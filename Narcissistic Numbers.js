function isNarcissistic(n){
	
	let sum = 0
	let a = n.toString()
	let b =a.split('')
	let c = b.map(el =>el**b.length)
	for(let i = 0; i < c.length; i++){
		sum = sum + c[i]
	}
	if( sum !== n){
		return false
	} return true
	
}
