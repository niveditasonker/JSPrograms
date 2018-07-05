var num = 123456;
var digits = num.toString().split('');
console.log(digits);

var number = 12354987,
output = [],
sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
output.push(+sNumber.charAt(i));
}

console.log(output);

var num = 19;
//console.log(findHappyNumber(num));

function findHappyNumber(num){
	
	if(num == 1){
		//console.log("Happy Number");
		return true;
	}
	var digits = [];
	var ans = 0;
	while (num > 0) {
	    digits[digits.length] = num % 10;
	    num = parseInt(num / 10);
	}
	digits.reverse();
	console.log(digits);
	
	for(var i=0;i<digits.length;i++){
		ans += digits[i] * digits[i];
	}
	console.log(ans);
	return(findHappyNumber(ans));
}

console.log(happyNumber(278));
function happyNumber(n){
	
	if(n===null){
		return false;
	}
	var value = n;
	var hash = {};
	while(!hash[value]){
		if(value == 1){
			return true;
		}
		
		hash[value] = true;
		
		var a = value + '';
		var arr = a.split('');
		var sum=0;
		
		for(var i=0; i<arr.length;i++){
			sum += parseInt(arr[i])*parseInt(arr[i]);
		}
		
		val = sum;
	}
	return false;
	
}


var isHappy = function(n) {
    if(n === null){
        return false;
    }
    
    var val = n;
    var hash = {};
    
    while(!hash[val]){
        if(val === 1){
            return true;
        }
        
        hash[val] = true;
        
        var sn = val + '';
        var sarr = sn.split('');    
        var total = 0;
        
        for(var i = 0; i < sarr.length; i++){
            si = parseInt(sarr[i]);
            total += Math.pow(si,2);
        }
        
        
        val = total;
    }
    
    return false;
}

console.log(isHappy(278));
