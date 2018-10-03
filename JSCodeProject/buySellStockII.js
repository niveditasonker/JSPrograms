var arr = [7, 1, 5, 3, 6, 4];
//var arr = [1,2,3,4,5];
//var arr = [7,6,4,3,1];

var maxProfit = function(prices) {
  var sum = 0;
  
  for(var i=0;i<prices.length-1;i++){
	  if(prices[i+1] > prices[i]) sum += prices[i+1] - prices[i];
  }
  return sum;
};

console.log(maxProfit(arr));