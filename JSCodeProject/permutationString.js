var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false;
		
    //alphas is the bucket to store s1
    let alphas=Array.from({length:26}, x=>0);
    console.log(alphas);
    let begin='a'.charCodeAt();
    for(let a of s1) alphas[a.charCodeAt()-begin]++;
    console.log(alphas);
    let len=s1.length;
    let count=Array.from({length:26}, x=>0);
    //initialize count
    for(let i=0; i<len; i++){
        count[s2[i].charCodeAt()-begin]++;
    }
    //sliding window
    for(let i=len; i<=s2.length; i++){
        let fit=true;
        for(let i=0; i<26; i++){
            if(count[i]!==alphas[i]){
                fit=false;
                break;
            }
        }
        if(fit) return true;
        if(i===s2.length) return false;
        //update count
        count[s2[i-len].charCodeAt()-begin]--;
        count[s2[i].charCodeAt()-begin]++;
    }
};

var ss1 = "ab", ss2 = "eidbaooo"
var s1= "ab", s2 = "eidboaoo";

console.log(checkInclusion(ss1,ss2));
console.log(checkInclusion(s1,s2));