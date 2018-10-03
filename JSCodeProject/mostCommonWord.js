/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    var arr = paragraph.split(' ');
    var hash = {};
    var res = [];
    var maxOccurence = 0;
    var maxWord = "";
    
    for(var i=0;i<arr.length;i++){
        var curr = arr[i].toLowerCase();
        curr = curr.replace(/[\W_]+/g,"");
        if(!banned.includes(curr)){
            if(hash[curr]==undefined){
                hash[curr] = [];
                hash[curr]["count"] = 0;
            }
            hash[curr]["count"]++;
        }
    }
    // console.log(hash);
    for(var w in hash){
        if(maxOccurence < hash[w]["count"]){
            maxOccurence = hash[w]["count"];
            maxWord = w;
        }
    }
    
    // console.log(maxOccurence);
    
    return maxWord;
};