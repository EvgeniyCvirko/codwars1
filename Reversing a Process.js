function decode(r) {
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let num = +r.replace(/[^\d]/g, '')
let letters = r.replace(/[^a-z]/g, '').split('')
let newArr = []
letters.forEach(e=> {
	let index = alphabet.indexOf(e)
	for(let i = 0; i < alphabet.length; i++){
	if (	i * num % 26 === index) {
		newArr.push(alphabet[i]);
	} 
	}
})
if (letters.length!==newArr.length) {
	return "Impossible to decode"
}  
return newArr.join('')
}
console.log(decode("1273409kuqhkoynvvknsdwljantzkpnmfgf"));//"uogbucwnddunktsjfanzlurnyxmx"
console.log(decode("105860ymmgegeeiwaigsqkcaeguicc"));//"Impossible to decode"