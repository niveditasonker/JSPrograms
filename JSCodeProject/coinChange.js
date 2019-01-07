var arr = [1,5,10,25];
var n = 10;

function rec_coins(target,coins){
	var min_coins = target;
	var num_coin;
//	console.log(coins.indexOf(target));
	if(coins.indexOf(target) != -1){
		return 1;
	}else{
		
		for (var i=0;i<coins.length;i++){
			if(coins[i] <= target){
//				console.log(target, coins[i]);
				var num_coin = 1+rec_coins(target-coins[i], coins);
				
				if(num_coin < min_coins){
					min_coins = num_coin;
				}
			}
		}
	}
	return min_coins;
}



function rec_coins_dynamic(target,coins,res){
	var min_coins = target;
	if(coins.indexOf(target) != -1){
		return 1;
	}else if(res[target] > 0){	
		return res[target];
	}else{
		for (var i=0;i<coins.length;i++){
			if(coins[i] <= target){
				var num_coin = 1+rec_coins_dynamic(target-coins[i], coins,res);
				if(num_coin < min_coins){
					min_coins = num_coin;
					res[target] = min_coins;
				}
			}
		}
	}
	return min_coins;
}

var coinChange = function(coins, amount) {
    
    var i = 0,
        arr = Array(amount+1).fill(Number.MAX_VALUE),
        len = coins.length,
        j;
    
    // while (i <= amount) {
    //     arr.push(Number.MAX_VALUE);
    //     i++;
    // }
    
    arr[0] = 0;
    
    for (i = 0; i < len; i++) {
        for (j = coins[i]; j <= amount; j++) {
            arr[j] = Math.min(arr[j], arr[j - coins[i]] + 1);
        }
    }
    
    return arr[amount] === Number.MAX_VALUE? -1 : arr[amount];
};

console.log(coinChange(arr,70));
console.log(rec_coins_dynamic(70,arr,{}));
console.log(rec_coins(63,arr));


function findCombinations(coins,m,n){

	var table = new Array(n+1);
	
	table.fill(0);
//	console.log(table);
	table[0] = 1;
	
	for(var i=0;i<m;i++){
		for(var j=coins[i];j<=n;j++){
			table[j] +=table[j-coins[i]];
		}
	}
	return table[n];
}
//var coinArr = [1,2,13];
var coinArr = [1,5,10];
var m = arr.length;
console.log(findCombinations(coinArr,m,11));