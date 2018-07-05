var n = 5;
var version = 4;

var solution = function(isBadVersion) {
	
	return function(n){
		var left = 1;
		var right = n;
		
		while(left < right){
			var mid = left+Math.floor(right-left/2);
			
			if(isBadVersion(mid)){
				right = mid;
			}else{
				left = mid+1;
			}
		}
		return left;
	}
}

solution(n);