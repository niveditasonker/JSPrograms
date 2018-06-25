var num1 = 15;
var num2 = 21;

console.log(findGCD(num1,num2));
function findGCD(num1,num2){
	if(! num2){
		return num1;
	}
//	console.log(num1,num2,num1%num2);
	return findGCD(num2,(num1%num2));
}

var num = 20;
console.log(findFibo(8));
console.log(fibonacci(8));
function findFibo(n){
	if(n==0){
		return 0;
	}
	if(n==1){
		return 1;
	}
	return findFibo(n-1) + findFibo(n-2);
}

function fibonacci(number) {
	var arr = [];
	if (number < 1)
		return 0;

	if (number <= 2)
		return 1;
	arr.push(fibonacci(number - 1) + fibonacci(number - 2));
//   return arr;
	return fibonacci(number - 1) + fibonacci(number - 2);
}