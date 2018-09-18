var num = 10;

var nthUglyNumber = function(n) {
	var ugly = [];
	var idx2 = 0; var factor2 = 2;
	var idx3 = 0; var factor3 = 3;
	var idx5 = 0; var factor5 = 5;
	var min;
	
	for(var i=1;i<n;i++){
		min = Math.min(factor2,factor3,factor5);
		ugly[i] = min;
		
		if(factor2==min) factor2 = 2*ugly[++idx2];
		if(factor3==min) factor3 = 3*ugly[++idx3];
		if(factor5==min) factor5 = 5*ugly[++idx5];
	}
	
	return ugly[n-1];
};

function findUglyNum(n){
	var i=1;
	var count = 1;
	
	while(n>count){
		i++;
		if(isUgly(i)==1) count++;
	}
	
	return i;
}

function isUgly(number){
	number = maxDivide(number, 2);
	number = maxDivide(number, 3);
	number = maxDivide(number, 5);
	
	
	return (number==1)?1:0;
}

function maxDivide(a,b){
	while(a%b==0) a= a/b;
	return a;
}

console.log(nthUglyNumber(num));
console.log(findUglyNum(num));