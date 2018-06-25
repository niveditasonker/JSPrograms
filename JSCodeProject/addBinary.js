var a = "11";
var b = "1";
//var a = "1010";
//var b = "1011"

console.log(addBinary(a,b));

function addBinary(n1,n2){
	var i = n1.length-1;
	var j = n2.length - 1;
	var carry = 0;
	var result = "";
	
	while(i>=0 || j>=0){
		console.log(n2[j]|0);
		var m = i<0?0:n1[i]|0;
		var n = j<0?0:n2[j]|0;
//		console.log(i,j,n1[i], n2[j], m,n);
		carry += m+n;
		result = carry%2 +result;
		carry = carry/2 | 0;
		i--;
		j--;
	}
	
	if(carry!==0){
		result = carry + result;
	}
	return result;
}