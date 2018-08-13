var romanNum = "IV";

function convertRomanToNum(num){
	var map = {
	'I' : 1,
	'V' : 5,
	'X' : 10,
	'L' : 50,
	'C' : 100,
	'M' : 500,
	'D' : 1000
	};
	var result = 0;
	
	var arr = num.split('');
	
	for(var i=0;i<arr.length;i++){
		console.log("i: "+i);
		var curr = map[arr[i]];
		var nxt  = map[arr[i+1]];
		
		if(curr == undefined){
			return null;
		}else {
			if(curr < nxt){
				console.log(arr[i],i);
				result += nxt-curr;
				i++;
				console.log(i, nxt,curr);
			}else{
				result += curr;
			}
		}
	}
	
	return result;
	
}

function RomToInt(num){
	
	if(num == null) return -1;
	var total = getInt(num.charAt(0));
	var curr;
	var prev;
	
	for(var i=1;i<num.length;i++){
		curr  = getInt(num.charAt(i));
		prev  = getInt(num.charAt(i-1));
		
		if(curr <= prev){
			total += curr;
		}else{
			total = total - (prev *2) + curr;
		}
	}
	
	return total; 

}

var num1 = "IV";

function romanToInteger(num){
  var map = {};
  map['I'] = 1;
  map['V'] = 5; 
  map['X'] = 10;
  map['L'] = 50;
  map['C'] = 100;
  map['D'] = 500;
  map['M'] = 1000;

  var len = num.length;
  var i=0;
  var sum = 0;
  if(num in map){
    return map[num];

  }
  
  for(var i=len-1;i>=0;i--){
    var c = map[num.charAt(i)];
    var nc = map[num.charAt(i-1)];

    if(nc < c){
      sum += c - nc;
      i--;
    }else{
      sum += c;
    }
  }
  // else{
  //   while(len > 0){
  //     var c = num.charAt(i);
  //     sum += map[c];
  //     i++;
  //     len--;
  //   }
  // }

return sum;

};

function getInt(c){
	switch(c){
		case 'I' : return 1;
		case 'V' : return 5;
		case 'X' : return 10;
		case 'L' : return 50;
		case 'C' : return 100;
		case 'M' : return 500;
		case 'D' : return 1000;
		default : return -1; 
	}
}

console.log(romanToInteger(num1));
console.log(convertRomanToNum(romanNum));
console.log(RomToInt(romanNum));