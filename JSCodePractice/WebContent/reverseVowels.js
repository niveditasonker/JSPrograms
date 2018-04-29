var str = "hello world";

//console.log(swapVowels(str));
//
//function isVowel(v){
//	if(v == 'a' ||v == 'e' ||v == 'i' ||v == 'o' ||v == 'u' ||v == 'A' ||v == 'E' ||v == 'I' ||v == 'O' ||v == 'U'){
//		return true;
//	}
//	
//	return false;
//}
//
//function swapVowels(str){
//	var l = 0;
//	var r = str.length-1;
//	var nStr = str;
////	console.log(str[l], str.charAt(l),l,r);
//	
//	while(l<r){
//		
////		console.log("In left...",l,r, isVowel(nStr[l]),isVowel(nStr[r]));
//		if(!isVowel(nStr[l])){
//			l++;
//			continue;
//		}
//		if(!isVowel(nStr[r])){
//			r--;
//
//			continue;
//		}
//		
//		console.log(nStr[l],nStr[r], t);
//		var t = nStr[l];
//		nStr[l]=nStr[r];
//		nStr[r]=t;
//		console.log(nStr[l],nStr[r], t);
//		l++;
//		r--;
//
//	}
//	return nStr;
//	
//	
//}








var reverseVowels = function(s) {
    var result = '';
    var str = s.split('')
    
    var end = s.length - 1;
    for (var i=0; i<str.length; i++) {
        if (i > end) {
            // We're done.
            break;
        }

        // Find first vowel from end of string.
        while (end >= 0) {
            if ('aAeEiIoOuU'.indexOf(str[end]) !== -1) {
                // We have a vowel.
                break;
            }
            
            end--;
        }
        
        if ('aAeEiIoOuU'.indexOf(str[i]) === -1) {
            // Consonant, do nothing.
        }
        else {
            // Vowel, swap with end.
            var temp = str[end];
            str[end] = str[i];
            str[i] = temp;
            
            end--;
        }
    }
    
    result = str.join('');
    
    return result;
}

console.log(reverseVowels(str));