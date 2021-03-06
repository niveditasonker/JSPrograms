var number = 129878;
var map = {};
map[0] = "Zero";
map[1] = "One";
map[2] = "Two";
map[3] = "Three";
map[4] = "Four";
map[5] = "Five";
map[6] = "Six";
map[7] = "Seven";
map[8] = "Eight";
map[9] = "Nine";
map[10] = "Ten";
map[11] = "Eleven";
map[12] = "Twelve";
map[13] = "Thirteen";
map[14] = "Fourteen";
map[15] = "Fifteen";
map[16] = "Sixteen";
map[17] = "Seventeen";
map[18] = "Eighteen";
map[19] = "Nineteen";
map[20] = "Twenty";
map[30] = "Thirty";
map[40] = "Forty";
map[50] = "Fifty";
map[60] = "Sixty";
map[70] = "Seventy";
map[80] = "Eighty";
map[90] = "Ninety";

//numToWords(number);
console.log(numToWords(number));

function numToWords(num){
	var newStr = "";
    if(num ==0){
    	return map[0];
    }
    
    if(num >= 1000000000){
    	var extra = num/1000000000;
    	extra = Math.floor(extra);
    	console.log("B", extra);
        newStr += convert(extra) + " Billion";
        num = num%1000000000;
    }
    
    if(num >= 1000000){
    	var extra = num/1000000;
    	extra = Math.floor(extra);
    	console.log("M",extra);
        newStr += convert(extra) + " Million";
        num = num%1000000;
    }
    
    if(num >= 1000){
    	var extra = num/1000;
    	extra = Math.floor(extra);
    	console.log("T",extra);
        newStr += convert(extra) + " Thousand";
        num = num%1000;
    }
    
    if(num > 0){
    	newStr += convert(num);
    }
	return newStr;
    
}

function convert(num){
	var newStr = "";
    
    
    if(num >= 100){
    	var no = num/100;
        no = Math.floor(no);
        //alert(no);
        newStr += " "+map[no]+" Hundred";
        //alert(newStr);
        num = num%100;
    }
    
    if(num > 0){
    	if(num>0 && num<=20){
        //alert(num);
        	newStr += " "+map[num];
        }else{
       
        	var numTen = num/10;
            numTen =Math.floor(numTen);
            newStr += (" "+map[numTen*10]);
             
            var numOne=num%10;
            numOne =Math.floor(numOne);
            if(numOne>0){
            	 newStr += (" "+map[numOne]);
            }            
        }
    }
    return newStr;
}

var belowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var belowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var belowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];


var helper = function(n){
	var result = "";
	if(n < 10){
		result = belowTen[n];
	}else if(n < 20){
		result =  belowTwenty[n-10];
	}else if(n < 100){
		result = belowHundred[parseInt(n/10)] + " " + helper(n%10);
	}else if(n < 1000){
		result = helper(parseInt(n/100)) + " Hundred " + helper(n%100);
	}else if(n < 1000000){
		result = helper(parseInt(n/1000)) + " Thousand " + helper(n%1000);
	}else if(n < 1000000000){
		result = helper(parseInt(n/1000000)) + " Million " + helper(n%1000000);
	}else{
		result = helper(parseInt(n/1000000000)) + " Billion " + helper(n%1000000000);
	}
	return result.trim();
	

}


var numberToWords = function(num) {
    
    
    if(num == 0){
    	return "Zero";
    }

    return helper(num);
    	
};


console.log(numberToWords(number));
