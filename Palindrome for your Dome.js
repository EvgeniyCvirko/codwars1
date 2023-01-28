function palindrome(string) {
	const newString = string.replace(/[^0-9aA-zZ.]/g, '').replace(/[\s_,.,%]/g,'').toLowerCase()
	const polindrom = newString.split("").reverse().join("").toLowerCase()
	console.log(newString);
	console.log(polindrom);
if(string = ''){
	return true
} else if (newString === polindrom ) {
return true
} else return false
}

 console.log(palindrome("h635VxADEuNvvNu'EDAx?V5,3.6h;"));//true 
 console.log(palindrome("Under_scores; Serocsrednu"))