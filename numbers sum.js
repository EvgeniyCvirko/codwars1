function rowSumOddNumbers(n) {
	let sum = 0
	for(let i = 0; i<n; i++){
		sum = sum + i
	}
	const sum2 = sum + n
	const a = new Array(sum2).fill(0)
	a.forEach((_, i, arr) => arr[i] = 2*i+1)
	let arrString = a.slice(sum)
	let newSum = 0
	for (let j = 0; j < arrString.length; j++){
		newSum = newSum + arrString[j]
	}
	return newSum
	}