var num = [1,2,3,4];

console.log(calcProduct(num));


function calcProduct(num){
	var rArr = [];
	var t1 = [];
	var t2 = [];
	
	t1[0] = 1;
	t2[num.length-1] = 1;
	
	for(var i=0;i<num.length-1;i++){
		t1[i+1] = t1[i] * num[i];
	}
//	console.log(t1);
	for(var i=num.length-1;i>0;i--){
		t2[i-1] = num[i] * t2[i];
	}
	
//	console.log(t2);
	for(var i=0;i<=num.length-1;i++){
		rArr[i] = t1[i] * t2[i];
	}
	console.log(rArr);
	return rArr;
}

var productExceptSelf = function(nums) {
    var res = [];
    var results = [];
    for (var i = 0; i < nums.length; i++) {
		results[i] = 1;
		for (var j = 0; j < nums.length; j++) {
			if (i != j) {
				results[i] *= nums[j];
			}
		}
    }
    return results;
//    for(var i=0;i<nums.length;i++){
//    	res[i] = 1;
//    	for(let j=0;j<nums.length;j++){
//    		if(i!== j) res[i] *= nums[i];
//    	}
//    }
//    
//    return res;
    
};

console.log(productExceptSelf(num));