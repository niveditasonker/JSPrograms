/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var newStr = "";
    var tmpStr = S;
    tmpStr = S.toUpperCase().replace(/\-/g,'');
    let idx = 0;
    
    if(tmpStr.length %2 != 0){
        idx = 1;
        newStr = tmpStr.charAt(0) + '-';
    }else{
    	idx = 0;
    }
    
//    console.log(groups, tmpStr.length, newStr, tmpStr.charAt(0));
    let c=0;
    
    for(let i=idx;i<tmpStr.length;i++){
        c++;
        newStr += tmpStr.charAt(i);
        if(c==K){
            newStr += '-';
            c = 0;
        }
    }
//    console.log(newStr);
    return newStr.slice(0,-1);
};

var licenseKeyFormatting2 = function(S, K) {
	  const arr = [];
	  let count = 0;
	  for (let i = S.length - 1; i > -1; i--) { // one pass here
	    if (S[i] === '-') {
	      continue;
	    }
	    if (count === K) {
	      arr.push('-');
	      count = 0;
	    }
	    arr.push(S[i].toUpperCase());
	    count++;
	  }
	  return arr.reverse().join('');
	}

var S = "5F3Z-2e-9-w", K = 4;
var S2 = "2-5g-3-J", K2 = 2;

console.log(licenseKeyFormatting(S,K));
console.log(licenseKeyFormatting(S2,K2));

console.log(licenseKeyFormatting2(S,K));
console.log(licenseKeyFormatting2(S2,K2));