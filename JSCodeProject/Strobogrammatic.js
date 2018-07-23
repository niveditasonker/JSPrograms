var numLen = 3;

function findStrobogrammaticNos(n){
	var res = fetchStrobogrammatic(n,n);
	return res;
}

function fetchStrobogrammatic(n,len){
	if(n==0) return [""];
	if(n==1) return ["1","0","8"];

	var list = fetchStrobogrammatic((n-2),len);
	var result = [];
	
	console.log("...",list.length);
	
	for(var i=0;i<list.length;i++){
		 var s = list[i];
		 if(n!=len){
			 result.push("0" + s + "0");
		 }
         result.push("1" + s + "1");
         result.push("8" + s + "8");
         result.push("6" + s + "9");
         result.push("9" + s + "6");
		 
	}
	return result;
}

console.log(findStrobogrammaticNos(numLen));