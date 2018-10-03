var arrangeCoins = function(n) {
    var res = 0;
    var i=0;
    
    while(res<n){
        res += i;
        if(res>n) return i-1;
        i++;
    }
    return i-1;
};

var num = 5;
console.log(arrangeCoins(num));