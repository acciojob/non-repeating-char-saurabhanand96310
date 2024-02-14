function firstNonRepeatedChar(str) {
 // Write your code here
	
	for(let i=0;i<str.length;i++){
        let find=false;
		for(let t=0;t<str.length;t++){
			if(str.charAt(i)==str.charAt(t)){
				find=true;
			}
		}
		if(find==false){
			return str.charAt(i);
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
