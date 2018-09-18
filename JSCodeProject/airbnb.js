function roundPricesToMatchTarget(prices, target) {
    var flag = 0; //0 floor, 1 ceil
    var min;
    var res = [];
    // for(var i=0; prices.length;i++){
        calc(prices,0,0,target,res, min)
    // }
    return res;
}

function calc(arr,flag,idx,target,res, min){
    var sum = 0;
    if(idx == arr.length - 1){
       for(var i=0;i<arr.length;i++){
            sum += arr[i];
        }
    
        if(min > sum - target){
            min = sum - target;
            res = arr;
        }
    
        calc(arr,0,i+1,target,res,min);
        calc(arr,1,i+1,target,res,min);
    }
     
}
/*
function roundPricesToMatchTarget(prices, target) {
    
    var roundError = [];
    var nums = [];
    
    var sum = Math.round(prices.reduce((a,b) =>a+b));
    var fNums = prices
    .map((val,idx) =>({val,idx}))
    .sort(({val:a},{val:b})=>(b - Math.floor(b)) - (a - Math.floor(a)))
    .map(value => ({...value, val: Math.floor(value.val)}));
    var fSum = fNums.map(({val}) => val).reduce((a, b) => a + b);
    for (var i = 0; i < sum - fSum; i++) {
        fNums[i].val++;
    }
    
    return fNums.sort(({idx: a}, {idx: b}) => a - b).map(({val}) => val)
    
//     for(var i=0;i<prices.length;i++){
        
        
//         calc(prices,)
//     }

// }



}
*/
var prices  = [0.70,2.80,4.90];
var target = 8;

function roundPricesToMatchTarget(prices, target) {
    
    var roundError = [];
    var nums = [];
    
    var sum = Math.round(prices.reduce((a,b) =>a+b));
    // console.log(sum);
    var fNums = prices
    .map((val,idx) =>({val,idx}))
    .sort(({val:a},{val:b})=>(b - Math.floor(b)) - (a - Math.floor(a)))
    .map(value => ({...value, val: Math.floor(value.val)}));
    
    // console.log(fNums);
    var fSum = fNums.map(({val}) => val).reduce((a, b) => a + b);
    
    // console.log(fSum);
    for (var i = 0; i < sum - fSum; i++) {
        fNums[i].val++;
    }
    // console.log(fNums);
    return fNums.sort(({idx: a}, {idx: b}) => a - b).map(({val}) => val);



}