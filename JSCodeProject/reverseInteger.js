var num = 123;

var reverse = function(x) {
	console.log(x);
	var res = 0;
	var isNeg = x<0?true:false;
	
	if(isNeg){
		x = x*-1;
	}
	
	while(x!=0){
		var tail = x%10;
		var res = (res*10)+tail;
		x = Math.floor(x/10);
	}
	if(res >= Number.MAX_SAFE_INTEGER) return 0;
	return isNeg?res*(-1) : res;


	
}

console.log(reverse(num));