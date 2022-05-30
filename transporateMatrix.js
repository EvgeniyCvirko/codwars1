/*function transpose(matrix) {
    let arr = []
    let a = matrix[0].length
    let array =  matrix.reduce((acc, val) => acc.concat(val), [])
    for (let i = 0; i < array.length; i++) {
        if(i < a){
            arr.push([array[i]])
        } else if(a <= i < array.length){
            arr[i-a].push(array[i])
        }
    }
    return arr
}*/

function transpose(m) {
	let e=[];
	for(let i=0;i<m[0].length;i++){
		 let b=[];
		 m.forEach(e=>{
			  b.push(e[i])
		 })
		 e.push(b)
	}
	return e
}
console.log(transpose([[1,2,3],[4,5,6]]))
console.log(transpose([[1,2,3,4,5,6]]))
console.log(transpose([[1]]))