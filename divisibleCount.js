function divisibleCount(x, y, k) {
	let long = (y-x+1)
	let u = Math.floor(long/k)
	let sum = 0
	for (let i = x; i < x + k ; i++) {
		if (i % k === 0) {
			sum ++
		}
	}
	let sum1=0
	for (let j = u * k +x; j < y ; j++) {
		if (j % k === 0) {
			sum1 ++
		}
	}
	return sum * u + sum1
	}