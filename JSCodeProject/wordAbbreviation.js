/**
 * @param {string[]} dict
 * @return {string[]}
 */
var wordsAbbreviation = function(dict) {
    
    var ans = [];
    var prefix = [];
    
    for(let i=0;i<dict.length;i++){
        ans[i] = abbreviate(dict[i],1);
        prefix[i] = 1;
    }
    console.log(ans);
    for(let i=0;i<dict.length;i++){
        while(true){
            var strSet = new Set();
            for(let j=i+1;j<dict.length;j++){
            	
                if(ans[j] == ans[i]){
                    strSet.add(j);
                }
            }
          
            if(strSet.size == 0) break;
            strSet.add(i);
            
            for(let k=0;k<strSet.size;k++){
            	console.log(k,dict[k],prefix[k]);
                ans[k] = abbreviate(dict[k],++prefix[k]);
            }
        }
    }
    console.log(ans);
    return ans;
};

function abbreviate(str,k){
    if(str.length==0 || str == null) return;
    
    if(k>=str.length-2) return str;
    
    let res = [];
    let num = str.length-k-1;
    
    res = str.substring(0, k) + num + str.charAt(str.length-1);
    return res;
}

var wordsAbbreviation2 = function(dict) {
    let maxLen = dict.reduce((max, str) => Math.max(max, str.length), 0);
    let allarr = dict.map( (str, i) => ({str: str.substr(-1) + str.slice(0, -1), i}));
    function process(arr, l, r) {
        if (arr.length === 0) {
            return [];
        }
        if (l === r) {
            return arr.map(obj => ({
                str:obj.str.length > l + 1 ? obj.str.substr(0,l) + (obj.str.length - l):obj.str,
                i: obj.i
            }));
        }
        let mid = (l + r) >> 1;
        let dict = {};
        for (let {str, i} of allarr) {
            let key = str.substr(0, mid) + str.length;
            if (!dict[key]) {
                dict[key] = 0;
            }
            dict[key]++;
        }
        let left = [], right = [];
        for (let obj of arr) {
            let key = obj.str.substr(0, mid) + obj.str.length;
            if (dict[key] === 1){
                left.push(obj);
            } else {
                right.push(obj);
            }
        }
        return process(left, l, mid).concat(process(right, mid + 1, r));
    }
    let ret = Array(dict.length);
    for (let {str, i} of process(allarr, 2, maxLen)) {
        ret[i] = str.substr(1) + str[0];
    }
    return ret;
};

//console.log(wordsAbbreviation(["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]));
//https://leetcode.com/problems/word-abbreviation/discuss/99782/Really-simple-and-straightforward-Java-solution
console.log(wordsAbbreviation2(["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]));