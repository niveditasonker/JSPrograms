
    var isNumber = function(s) {
        s = s.trim(); // get rid of leading / trailing spaces (could be implemented manually if asked to)
        let digitsStarted = false; // have we seen number?
        let decimalsStarted = false; // have we seen decimal sign "." ?
        let expAppeared = false; // have we seen "e" ?
        let expSign = false; // have we seen "+/-" right after "e" ?
        let expDigits = false; // have we seen numbers  after "e+/-" ?
        let signAppeared = false; // have we seen "+/-" ?

        for (let i=0;i<s.length;i++) {
        	var c = s.charAt(i);
            if (c == ' ')return false;
            // digits
            if (!isNaN(c)) {
                if (!digitsStarted) digitsStarted = true;
                if (expAppeared && !expDigits) expDigits = true;
            // sign 
            } else if (c == '+' || c == '-') {
                if (!digitsStarted && signAppeared) return false; // "++9"
                if ((digitsStarted || decimalsStarted) && !expAppeared) return false; //"1-2" .-1 // 
                if (expAppeared && (expSign || expDigits)) return false; // e34+ or e++34
                if (!digitsStarted) signAppeared = true;
                if (expAppeared && !expDigits) expSign = true;
            // exponential
            } else if (c == 'e') {
                if (expAppeared || !digitsStarted) return false; //"e***" or "4ee"
                expAppeared = true;
            // decimal digit
            } else if (c == '.') {
                if (decimalsStarted || expAppeared) return false; // only allowed in numbers once
                decimalsStarted = true;
            // invalid character
            } else {
                return false;
            }
        }
        // cover the case where the epxression end with "12345e"
        if (expAppeared && (!expDigits)) return false;
        
        return digitsStarted;
    }

console.log(isNumber("1e1+1"));
