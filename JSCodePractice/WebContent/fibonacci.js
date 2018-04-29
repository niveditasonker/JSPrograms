var n =10;

console.log(fibo(n));
function fibo(n){
    if (n == 0)

    {

        return 1;

    }

    else if (n == 1)

    {

        return 1;

    }

    else

    {

        return fibo(n - 1) + fibo(n - 2);

    }
}

console.log(Factorial(n));
function Factorial(n){

	    if (n == 0)

	    {

	        return 1;

	    }

	    else

	    {

	        return n * Factorial(n - 1);

	    }
}

console.log(Fibonnaci(n));

function Fibonnaci(n){
	    var fn = 1;

	    var fn1 = 1;

	    var fn2 = 1;

	    for (var i = 2; i < n; i++)

	    {

	        fn = fn1 + fn2;

	        fn2 = fn1;

	        fn1 = fn;

	    }

	    return fn;

}