function accum(s) {
	let a = s.toLowerCase()
	let c = a.split("")
	let arr=[]
	for (let i = 0; i < c.length; i++) {
		let q = c[i].repeat(i+1)
		arr.push(q)
		
	}
	for (let j = 0; j < arr.length; j++) {
		let arr1 = arr.map(e => e[0].toUpperCase() + e.slice(1))
		return arr1.join(' ').replace(/ /g, '-')
	}
	
}
console.log(accum("RqaEzty"));
