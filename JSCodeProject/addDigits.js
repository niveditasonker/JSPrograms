var number  = 38;
var number  = 50;

var addDigits = function(num){
	if(num==0) return 0;
	if(num % 9 == 0) return 9;
	else return num % 9;
}

console.log(addDigits(number));