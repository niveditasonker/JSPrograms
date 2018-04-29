var str = ["a","a","b","b","c","c","c"];
var str2 = ["a"];
var str3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];




function encodeStr(s){
	var arr = [];	
	var c;
	
	for(var i=0;i<s.length;i++){
		if(s.length < 2){
			arr.push(s[i]);
			break;
		}
		arr.push(s[i]);
		c=1;
		
		while(i+1<s.length && s[i]==s[i+1]){
			c++;
			i++;
		}
		if(c>=10){
			q = Math.floor(c/10);
			r = c%10;
			arr.push(q,r);
		}else{
			arr.push(c);
		}
		
	}
	return arr;
}

console.log(encodeStr(str));
console.log(encodeStr(str2));
console.log(encodeStr(str3));