var n = 78;

function findNearestPrime(x){
	var prime1;
	var prime2;
	
	for(var i=0;i<x;i++){
		if(isPrime(i)){
			prime1 = i;
		}
	}
	
	for(var i=x*x;i>x;i--){
		if(isPrime(i)){
			prime2 = i;
		}
	}
	
	var  nearest;
	
	if(Math.abs(prime1-x) > Math.abs(prime2-x)){
		nearest = prime2;
	}else{
		nearest = prime1;
	}
	
	return nearest;
}

function isPrime(x){
	var flag = true;
	
	for(var i=2;i<Math.sqrt(x);i++){
		if(x%i==0) flag = false;
	}
	
	return flag;
}

console.log(findNearestPrime(n));