/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */

var isSubsequence = function(str, t) {
    var m = str.length;
    var n = t.length;

    var j=0;
    
    for(let i=0;i<n && j<m;i++){
    	if(str.charAt(j) == t.charAt(i))j++;
    }
    return(j==m);
   
};


var findLongestWord = function(s, d) {
    let len = 0;
    let res = "";
    
    for(let word of d){
        if(len < word.length && isSubsequence(word,s)){
            res = word;
            len = word.length;
        }
    }
    return res;
};

var s = "abpcplea", d = ["ale","apple","monkey","plea"];
console.log(findLongestWord(s,d));
