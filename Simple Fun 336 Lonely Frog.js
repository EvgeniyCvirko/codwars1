function jumpTo(n) {
let step = 1
let level = 0
let stepEnd = Math.abs(n)
let distance = 1
 while (level + step !== stepEnd ) {
	console.log(`for step: ${step} level: ${level} distance: ${distance}` );
	if( level + step < stepEnd ){
		level = level + step
		step++
		distance = step
		console.log(`level: ${level}`);
	} else if(level + step > stepEnd){
		level = level - step
		step++
		distance = step
		console.log(`level : ${level}`);
	}
 }
 return step

}
function jumpTo(n) {
	n = Math.abs(n)
	let distance = 0
	let steps = 0
	for (let i=1; distance<n; i++){
	  distance += i
	  steps++
	  console.log(distance);
	  console.log(steps);
	}
 
	if (distance == n || (distance - n) % 2 == 0) {
		console.log("!!!1");
	  return steps
	} else if (steps%2) {
		console.log(steps%2);
		console.log("!!!2");
	  return steps + 2
	} else {
		console.log("!!!3");
	  return steps+1
	}
 }
console.log(jumpTo(12));