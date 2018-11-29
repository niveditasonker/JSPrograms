var num1 = 8, num2 = 5;

var swapInPlace = function(a,b){
	
	a = a-b;
	b = a+b;
	a = b-a;
	
	return [a,b];
}

var swapInPlaceXOR = function(a,b){
	a = a^b;
	b = a^b;
	a=a^b;
	return [a,b];
}

console.log("Without XOR:",swapInPlace(num1, num2));
console.log("With XOR:",swapInPlaceXOR(num1, num2));