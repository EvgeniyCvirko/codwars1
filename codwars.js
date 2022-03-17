//Highest and Lowest
function highAndLow(numbers){
	let arr = numbers.split(" ").map(e => e*1).sort((a,b) => {return a-b});
	let min = arr[0];
	let max = arr[arr.length - 1];
	 return `${max} ${min}`  
 }