function isPowerOfTen(n){
	if(n == 0){
		return false;
	}
	while(n != 1){
		 if((n % 10 ) != 0){
			 return false;
		 }
		 n = n/10;
	}
	return true;
}

console.log(isPowerOfTen(1000));
console.log(isPowerOfTen(90));
console.log(isPowerOfTen(10000));