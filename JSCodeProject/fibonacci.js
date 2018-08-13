var n =10;



function fibo(n){
    if (n == 0 || n == 1) return n;
    else return fibo(n - 1) + fibo(n - 2);
}



function Fibonnaci(n){
	    var fn = 1;
	    var fn1 = 1;
	    var fn2 = 1;

	    for (var i = 2; i < n; i++){
	        fn = fn1 + fn2;
	        fn2 = fn1;
	        fn1 = fn;
	    }
	    return fn;
}

function FibonnaciIterative(n){
    var fn1 = 1;
    var fn2 = 0;
    var temp;

    while(n>0){
    	temp = fn1;
    	fn1 = fn1+fn2;
    	fn2 = temp;
    	n--;
    }
    return fn2;
}

var dp = {};

function fiboDP(n){
	if(n in dp){
		return dp[n];
	}else if(n==0 || n==1){
		return 1;
	}else{
		var curr = fiboDP(n-1) + n;
		dp[n] = curr;
		return curr;
	}
}



function Factorial(n){
	    if (n == 0)	 return 1;
	    else return n * Factorial(n - 1);

}

console.log(fibo(n));
console.log(Fibonnaci(n));
console.log(FibonnaciIterative(n));
console.log(fiboDP(n));
console.log(Factorial(n));
