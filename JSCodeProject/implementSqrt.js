var elem = 11;

var floorSqrt = function(x){
	var i =1;
	var result = 1;
	
	if(x==0 || x==1){
		return x;
	}
	
	while(result <= x){
		i++;
		result = i*i;
	}
	
	return i-1;
}

var sqrt_x = floorSqrt(elem);
console.log(sqrt_x);


var bsSqrt = function(x){
	if(x==0 || x==1){
		return x;
	}
	var start = 1; end = x; ans = 0;
	
	while(start<=end){
		var mid = (start+end)/2;
		
		if(mid*mid <= x){
			start = mid +1;
			ans = mid;
		}else{
			end = mid - 1;
		}
	}
	
	return ans;
}


var sqrtX = floorSqrt(elem);
console.log(sqrtX);
