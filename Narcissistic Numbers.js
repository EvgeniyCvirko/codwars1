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
 console.log(isNarcissistic(153));
 console.log(isNarcissistic(1634));

/* function isNarcissistic(n){
  
	let sum = 0
	let a = n.toString()
	let b =a.split('').map(el =>el**3)
	for(let i = 0; i < b.length; i++){
		sum = sum + b[i]
	}
	console.log(sum);
	console.log(typeof(sum));
	if( sum === n){
		return true
	} return false
}
console.log(isNarcissistic(153)); */