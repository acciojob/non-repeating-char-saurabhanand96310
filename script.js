function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++){
		let match=false;
		for(let j=0;j<str.length;j++){
			if(str(j)===str(i)){
				match=true;
				break;
			}
		}
		if(match===false){
			return str(i);
		}
	}
	if(match===true){
		return "null"
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
