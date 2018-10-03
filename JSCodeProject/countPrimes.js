var n = 10;

var countPrimes = function(n){
	if(n==1) return 0;
	
	var result = 0;
	var prime = true;
	
	for(var i=2;i<n;i++){
		prime = true;
		for(var j=2;j*j<=i;j++){
			console.log(i,j,prime);
		
			if(i%j==0){
				prime = false;
				break;
			}
		}
		
		if(prime) result++;
	}
	
	return result;
}

console.log(countPrimes(n));

//complexity:O(n)
//https://www.geeksforgeeks.org/sieve-eratosthenes-0n-time-complexity/