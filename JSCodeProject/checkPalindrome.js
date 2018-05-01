var str= "nitin";

console.log(isPalindrome(str));
var t = checkPalindrome(str);
console.log(t);

function isPalindrome(strn){
	
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