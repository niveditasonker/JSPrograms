var removeDuplicateLetters = function(s) {
    var data = [];
    var ans = "";
    for(var i =0; i<s.length; i++){
        var c = s.charAt(i);
        
        if(!data.includes(c)){
            data.push(c);
        }
    }
    data.sort();
    for(var k=0; k<data.length;k++){
        ans += data[k];
    }
    return ans;
};

var str = "cbacdcbc";
console.log(removeDuplicateLetters(str));
