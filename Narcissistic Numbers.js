function isNarcissistic(n){
	let sum = 0
	let a = n.toString()
	let b =a.split('').map(el =>el**a.length)
	for(let i = 0; i < b.length; i++){
		sum = sum + b[i]
	}
	if( sum !== n){
		return false
	} return true
	
}
function isNarcissistic(n) {
	return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
 }