var str= "nitin";
var str = "A man, a plan, a canal: Panama";
var str = "race a car";



//Prefer this one:
var isPalindrome = function(s) {
	  s = s.replace(/[^a-z0-9]/gi,'').toLowerCase()
	  if (!s.length) return true
	  
	  let i = 0
	  let j = s.length - 1
	  
	  while (i < j) 
	    if (s[j--] !== s[i++]) return false
	  
	  return true
}
console.log(isPalindrome("nitin"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

//.........
function isPalindromeOld(strn){
	console.log(strn);
	var len = Math.floor(strn.length/2);
//	console.log(len);
	for(var i=0;i<len;i++){
//		console.log(i,strn[i],strn[strn.length-i-1]);
		if(strn[i] !== strn[strn.length-i-1]){
			return false;
		}
	}
	return true;
	
}
function checkPalindrome(strn) {
	  return strn == strn.split('').reverse().join('');
}


function isPalin(str){
	var end = str.length -1;
	var beg = 0;
	
	while(beg < end){
//		console.log(str[beg], beg, !'ab'.match(/a-zA-Z0-9/));
//		console.log(str[end], end, !str[end].match(/a-zA-Z0-9/));
		if(!str[beg].match(/a-zA-Z0-9/)){
			beg++;
		}else if(!str[end].match(/a-zA-Z0-9/)){
			end--;
		}else if(str[beg] != str[end]){
			return false;
		}
		end--;
		beg++;
	}
	return true;
}




function validPalindrome(input){
	console.log("......",input);
	var end = input.length -1;
	var beg = 0;

	while(++beg < --end){
		if(input.charAt(beg) != input.charAt(end)){
			return isPalidromic(input, beg, end+1) ||isPalidromic(input, beg-1, end) ;
		}
		
	}
	return true;
}

function isPalidromic(s,l,r){
	console.log(s, l, r);
	while(++l < r--){
		if(s.charAt(l) != s.charAt(r)){
			return false;
		}
		
		return true;
	}
}

var isNumber = function(s) {
    return /^\d+\.\d+$/.test(s);
};


var isPalindromeNum = function(x) {
    if (x < 0) return false;

    var reverse = 0,
        r,
        q = x;

    do {
        r = q % 10;
        q = Math.trunc(q / 10);
        
        reverse += r;
        if (q > 0) { reverse *= 10; }
    } while (q > 0);
    
    return (x - reverse) === 0 ? true : false;
};


var input = "aba";
//var input = "abca";
//console.log(validPalindrome(input));
//console.log(validPalindrome(str));
//console.log(isPalindromeNum(-121));
//console.log(isPalindromeOld(str));




//console.log(isNumber(0));