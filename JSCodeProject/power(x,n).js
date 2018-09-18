var num = 2.00000;
var x = -2;


var myPow = function(x, n) {
    if(n<0) return power(x,1/n);
    return power(x,n);
};

function power(x,n){
	if(n==0) return 1;
	
	console.log("====",n,parseInt(n/2));
	var v = power(x,parseInt(n/2));
	
	console.log("......",v);
	if(n%2==0) return v*v;
	
	return v*v*x;
}

var myPow2 = function(x, n) {
    if (x === 0) return 0;

    if (n < 0) return 1/myPow2(x, -n);

    if (n === 0) return 1;

    if (n > 0) {
        var floor = myPow2(x, Math.floor(n/2));
        if (n%2 === 0) return floor * floor;
        else return floor * floor * x;
    }
};

/*
var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, n);
    }
    
    return power(x, n);
};

function power(x, n) {
    if (n === 0) {
        return 1;
    }
    
    var v = power(x, parseInt(n/2));
    
    if (n % 2 === 0) {
        return v * v;
    }
    
    return v * v * x;
}
*/
console.log(myPow(x,num));
console.log(myPow2(x,num));