//var a = 5;
//var b = 3;

var a = 15;
var b = 3;

function sum(a, b) {
    if (b == 0) return a;
    var partialSum = a ^ b;
    var carry = (a & b) << 1;
    console.log(partialSum, carry);
    return sum(partialSum, carry);
}

var sum2 = function(a, b) {
    var sum;
    
    while(b != 0){
        sum = (a&b);
        a = a ^ b;
        b = (sum)<<1;
    }
    return a;
};

console.log(sum(a,b));
console.log(sum2(a,b));

//console.log(-8 >> 2);

console.log(5 & 3);