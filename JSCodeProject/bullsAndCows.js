/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let cows = 0;
    let bulls = 0;
    let total = 0;
    let op = "";
    let sec = secret;
    var map = [];
    
    for(let i=0;i<secret.length;i++){
//    	repeatCount[s.charCodeAt(i)-'A'.charCodeAt(0)]++;
//    	console.log(secret.charCodeAt(i),'0'.charCodeAt(0));
        map[secret.charCodeAt(i)-'0'.charCodeAt(0)] = map[secret.charCodeAt(i)-'0'.charCodeAt(0)] || 0;
        map[secret.charCodeAt(i)-'0'.charCodeAt(0)]++;
    }
//    console.log(map);
    for(let i=0;i<guess.length;i++){
        if(guess.charAt(i)==secret.charAt(i)) {
                bulls++;
        }
        if(map[guess.charAt(i)-'0']-- > 0) {
                total++;
        } 
    }

    
    cows = total-bulls;
    op = bulls+"A"+cows+"B";
    return op.toString();
};

var getHint2 = function(secret, guess){
    let cows = 0;
    let bulls = 0;
    let op = "";
    let sec = secret;
    
	for(let i=0;i<guess.length;i++){
         if(guess[i] == sec[i]){
             bulls++;
         }else if(sec.includes(guess[i])){
             let idx = sec.indexOf(guess[i]);
             console.log(guess[i],idx);
             sec = sec.slice(idx, 1) + sec.slice(idx+1, sec.length) //sec.slice(guess[i], '');
             console.log("secret",sec);
             cows++;
         }
     }
    
     console.log(bulls,cows);
     op = bulls+"A"+cows+"B";	
     return op;
}

var secret = "1123", guess = "0111";
var secret2 = "1807", guess2 = "7810";

console.log(getHint(secret, guess));
console.log(getHint(secret2, guess2));

//console.log(getHint2(secret, guess));