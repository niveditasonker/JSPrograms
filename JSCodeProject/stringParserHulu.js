var str = "abc(efg)hij{klmn}opq[rst]uvw";


function parseString(s){
	if(s==null || s.length == 0) return null;
	
	let idx = 0;
	let haveParent = false;
	var lastDelimiter = "";
	var list = [];
	var stringBuffer = "";
	
	for(let ch of s){
//		console.log(ch);
		if(ch=='(' || ch =='[' || ch=='{' || ch==')' || ch==']' || ch=='}'){
			if(s.length-1>idx && s.charAt(idx+1)==ch){
				stringBuffer += ch;
				idx = idx+2;
				continue;
			}
			if(ch=='{' && lastDelimiter=='('){
				haveParent = true;
				stringBuffer += ch;
				idx++;
				continue;
			}
			
			if(ch=='}' && haveParent){
				stringBuffer += ch;
				idx++;
				continue;
			}
			lastDelimiter= ch;
			haveParent= false;
			list.push(stringBuffer.toString());
			stringBuffer= "";
			idx++;
			continue;
	
		}
		stringBuffer += ch;
		idx++;
	}
	
	if(stringBuffer.toString().length !=0){
		list.push(stringBuffer.toString());
	}
	return list;
}

console.log(parseString(str));
console.log(parseString("abc((g{h}j)ujj"));