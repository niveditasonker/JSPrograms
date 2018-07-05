var a = 5;
var b = 3;

function sum(a, b) {
    if (b == 0) return a;
    var partialSum = a ^ b;
    var carry = (a & b) << 1;
    console.log(partialSum, carry);
    return sum(partialSum, carry);
}

console.log(sum(a,b));

//console.log(-8 >> 2);

console.log(5 & 3);