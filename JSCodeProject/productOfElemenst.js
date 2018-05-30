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
	console.log(t1);
	for(var i=num.length-1;i>0;i--){
		t2[i-1] = num[i] * t2[i];
	}
	
	console.log(t2);
	for(var i=0;i<=num.length-1;i++){
		rArr[i] = t1[i] * t2[i];
	}
	
	return rArr;
}