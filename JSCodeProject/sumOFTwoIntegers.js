var getSum = function(a, b) {
    var sum;
    
    while(b != 0){
        sum = (a&b);
        a = a ^ b;
        b = (sum)<<1;
    }
    return a;
};


console.log(getSum(3,2));
