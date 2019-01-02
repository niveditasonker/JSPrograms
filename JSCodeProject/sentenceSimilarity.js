/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
    var map = new Map();
    
    for(let p of pairs){
        if(!map.has(p[0])){
            map.set(p[0],p[1]);
        }
        
    }
    // console.log(map);
    
    for(let i=0;i<words1.length; i++){
        if(!(map.get(words1[i]) == words2[i] || map.get(words2[i]) == words1[i] )){
            return false;
        }
    }
    return true;
};

var pairs = [["great", "fine"], ["acting","drama"], ["skills","talent"]];
var words1 = ["great","acting","skills"];
var words2 = ["fine","drama","talent"];


console.log(areSentencesSimilar(words1, words2, pairs));