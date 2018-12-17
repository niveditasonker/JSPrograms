var pattern = "abba", str = "dog cat cat dog";

var wordPattern = function(pattern, str) {
    var map1 = {};
    var map2 = {};
    var curChar,
    curString;
    
    var arr = str.split(' ');
    
    if (pattern.length !== arr.length) {
        return false;
    }
    
    for (let i = 0; i < arr.length; i++) {
        curChar = pattern.charAt(i);
        curString = arr[i];
        
        if (!map1.hasOwnProperty(curChar) && !map2.hasOwnProperty(curString)) {
            map1[curChar] = curString;
            map2[curString] = curChar;
        } else if (map1[curChar] !== curString || map2[curString] !== curChar) {
            return false;
        }
    }
    
    return true;
};

console.log(wordPattern(pattern, str));