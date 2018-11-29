var findKthNumber = function(n,k) {
    var curr = 1;
    k = k - 1;
    while (k > 0) {
        var steps = calSteps(n, curr, curr + 1);
        console.log(steps);
        if (steps <= k) {
            curr += 1;
            k -= steps;
        } else {
            curr *= 10;
            k -= 1;
        }
    }
    return curr;
}

var calSteps = function( n, n1,n2) {
    var steps = 0;
    while (n1 <= n) {
    	console.log("...",n1,n2);
        steps += Math.min(n + 1, n2) - n1;
        n1 *= 10;
        n2 *= 10;
        console.log(n1,n2);
    }
    return steps;
}

console.log(findKthNumber(13,2));