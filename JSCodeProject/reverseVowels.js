//var str = "hello world";
var str = "Nivedita";

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