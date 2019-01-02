/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function(s, dict) {
    let bold = Array(s.length).fill(false);
    let boldOn = false;
    var boldStr = "";
    let idx = -1;
    
    for(let wrd of dict){
        while((idx = s.indexOf(wrd,idx+1)) > -1){
            for(let i=idx;i<idx+wrd.length;i++){
                bold[i] = true;
            }
        }
    }
    
    for(let i=0;i<s.length;i++){
        if(bold[i] && !boldOn){
            boldOn = true;
            boldStr += "<b>";
        }else if(!bold[i] && boldOn){
            boldOn = false;
            boldStr += "</b>";
        }
        boldStr += s[i];
    }

    return boldOn ? boldStr + '</b>' : boldStr
};

var s = "abcxyz123"
	dict = ["abc","123"];

console.log(addBoldTag(s,dict));

var s = "aaabbcc"
	dict = ["aaa","aab","bc"];
console.log(addBoldTag(s,dict));