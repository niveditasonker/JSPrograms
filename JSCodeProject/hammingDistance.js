var num1 = 11 ;
var num2 = 4 ;

function hammingDist(num1,num2){
  var binStr1 = num1.toString(2);
  var binStr2 = num2.toString(2);
  

  var appendZeroStr = "";
  var count = 0;
  var maxLen = Math.max(binStr1.length,binStr2.length);
  
  console.log(binStr1,binStr2,maxLen);

  if(binStr1.length < binStr2.length){
    var lenDiff = binStr2.length-binStr1.length;
    for(var i=0;i<lenDiff;i++){
      appendZeroStr += '0' ;
    }
    binStr1 = appendZeroStr + binStr1;
  }else if(binStr1.length > binStr2.length){
    var lenDiff = binStr1.length-binStr2.length;
    for(var i=0;i<lenDiff;i++){
      appendZeroStr += '0' ;
    }
    binStr2 = appendZeroStr + binStr2;
  }

//  console.log(binStr1,binStr2);
  for(var i=0;i<maxLen;i++){
    if(binStr1[i] != binStr2[i]){
      count++;
    }
  }
  return count;
};

var hammingDistance = function(x, y) {
	  let ones = 0;
	  let z = x ^ y;
	    
	  while (z) {
	    if (z & 1) {
	      ones += 1;  
	    }
	    
	    z = z >> 1;
	  }
	  
	  return ones;
	};
	
console.log(hammingDist(num1,num2));
console.log(hammingDistance(num1,num2));

