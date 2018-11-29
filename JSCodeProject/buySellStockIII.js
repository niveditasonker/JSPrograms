var stocks = [3,3,5,0,0,3,1,4];

var maxProfit = function(prices) {
    var buy1=Number.MAX_VALUE, buy2=Number.MAX_VALUE, sell1=0, sell2=0;
    
    for(let p of prices){
    	buy1 = Math.min(buy1,p);
    	sell1 = Math.max(sell1, p-buy1);
    	buy2 = Math.min(buy2,p-sell1);
    	sell2 = Math.max(sell2, p-buy2);
    }
    
    return sell2;
};

console.log(maxProfit(stocks));