var str = "Mr John Smith ";

console.log(geturlifiedStr(str,13));

function geturlifiedStr(s, len){
	var spacesCount = 0;
	var newStr = str.split('');
//	console.log(newStr);
	
	for(var i=0;i<len;i++){
		if(str[i] == ' '){
			spacesCount++;
		}
	}
	
	var insertChars = len + 2 * spacesCount -1;
//	console.log(newStr);
	
	for(var i=len-1;i>=0;i--){
		var c = newStr[i];
		if(c == ' '){			
			newStr[insertChars--] = '0';
			newStr[insertChars--] = '2';
			newStr[insertChars--] = '%';
		}else newStr[insertChars--] = str[i];;
//		console.log(newStr)
	}
	console.log(newStr);
	newStr = newStr.toString();
	console.log(newStr);
	return newStr.replace(/,/g, '');
}