//var str= "101000";
//var chkSyr = "100";

var str= "101001";
var chkSyr = "101";

function checkPattern(gstr){
	console.log(gstr);
	if(gstr.length==0 || gstr == null){
		console.log("here here: "+gstr);
		return null;
	}

	if(typeof gstr =="string"){
		gstr = str.split('');
	}

	for(let i=gstr.length-1;i>=0;i--){
		if(gstr[i]=='0'){
			var retStr = checkRestOfTheString(i-1,gstr);
			console.log(retStr);
			if(retStr.length > 0){
				checkPattern(retStr);
			}else{
				break;
			}
			
		}
	}
	return "not null";
}

function checkRestOfTheString(start, cStr){
	console.log("start: "+start,cStr);
	for(let j=start;j>=0;j--){
		if(cStr[j]=='0' && cStr[j-1]=='1'){
			console.log("j......",j,j-1,cStr[j],cStr[j-1]);
			cStr.splice(start+1,1);
			cStr.splice(j,1);
			cStr.splice(j-1,1);
			console.log("rem str: "+cStr);
//			break;
			return cStr;
		}
	}
}


function checkPattern2(str,innerStr){
	var res = "";
	while(containsStr(str,innerStr)){
		str = str.replace(innerStr,"");
	}
	res = str.length;
	if(res == "") res = "NULL";
	else res = "Not NULL";
	
	return res;
}

function containsStr(s, c){
	var len = 0;
	var arr = s.split('');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==c[len]) len++;
		else if(arr[i]==c[0]) len = 1;
		else len=0;
		
		if(c.length==len) return true;
	}
	return false;
}
//console.log(checkPattern(str));
console.log(checkPattern2(str,chkSyr));