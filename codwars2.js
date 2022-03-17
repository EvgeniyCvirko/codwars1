//"use strict";
//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
/* function mergeArrays(arr1, arr2) {
	 if ( arr1 === [] && arr2 === []) {
	  return [];
	} else {
	  const arr3 = arr1.concat(arr2).sort( function(a, b) {return a-b});
	    return arr3.filter((item, index) => arr3.indexOf(item) === index);
	 
	}
 }
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12])); */

//https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
/* function add(num1, num2) {
	num1 = num1.toString().split("").reverse().join("");
	num2 = num2.toString().split("").reverse().join("");
	if (num1.length < num2.length) {
		 [num1, num2] = [num2, num1];
	}
	var returnString = "";
	for (var i = 0; i < num1.length; i++) {
		 var int1 = parseInt(num1[i]);
		 var int2 = parseInt(num2[i] || 0);
	  
		 returnString = (int1+ int2).toString()+returnString;
	}
		return parseInt(returnString);
}
  */
//https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
/* for ( let i = 0; i < questions.length; i++){
questions[i].usersAnswer = null;
} */
//https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript
/* const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association})) */
//https://www.codewars.com/kata/combine-objects
/* function combine(inputs){
	let argsArray = [...arguments];
	let comboObj = {};
	for(let i = 0; i < arguments.length; i++){
	  for(let key in arguments[i]){
		 if(!comboObj[key]){
		 comboObj[key] = arguments[i][key];
		 }
		 else {
			comboObj[key] += arguments[i][key];
		 }
	  }
	}
 return comboObj;
 }
console.log(combine(objA, objB)) */
//https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript
/* function findMissing(arr1, arr2) {
	let arr1Sort = arr1.sort();
	let arr2Sort = arr2.sort();
	
	for (let i = 0; i < arr1.length;	i++)
	if ( arr1Sort[i] !== arr2Sort[i] ) {
		return arr1Sort[i];
	};
 } */
 //https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript
 function getDecimal(n){
	console.log(n);
	n = n.toFixed(1);
	console.log(n); 
	n = String(n * 10);
	console.log(n);
	 a = n[n.length - 1] / 10;
	return a;
 } 
 console.log(getDecimal(4.03423334));