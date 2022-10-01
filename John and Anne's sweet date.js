function sweetDate(w1,r1,w2,r2,timePeriod){
	let period = []
	let period1 = []
	let dayOfJonn = []
	let dayOfAnn = []
	for(let i = 1; i<=timePeriod;i++){
		period.push(i)
		period1.push(i)
	}
	while (period.length !==0) {
		period = period.slice(w1, period.length)
		for(let i = 0; i < r1;i++){
			dayOfJonn.push(period[i])
			 }
			 period = period.slice(r1, period.length) 
	}
	while (period1.length !==0) {
		period1 = period1.slice(w2, period1.length)
		for(let i = 0; i < r2;i++){
			dayOfAnn.push(period1[i])
			 }
			 period1 = period1.slice(r2, period1.length) 
	}
	let sweetsDate = 0
	for (let i = 0; i < dayOfAnn.length; i++) {
		for (let j = 0; j < dayOfJonn.length; j++) {
			if (dayOfAnn[i] === dayOfJonn[j]) {
				sweetsDate++
			} 
		}
		
	}
	return sweetsDate
 }
 //or
 function sweetDate(w1,r1,w2,r2,timePeriod){
	let johnPeriod = w1 + r1;
	let annaPeriod = w2 + r2;
	let sweetsDate = 0;
	for (let i = 0; i < timePeriod; i++) {
	  if (i % johnPeriod >= w1 && i % annaPeriod >= w2) { 
		sweetsDate++}
	}
	return sweetsDate;
 }