function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++){
	let c=str.charAt(i);
		if(string.indexOf(c)==i && string.indexOf(c,i+1)==-1){
			return c;
		}
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
