var str = "Anagram";
var tstr = "naGarma";


var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    var ns = s.toLowerCase();
    ns = ns.split("").sort().join("");
    var nt = t.toLowerCase();
    nt = nt.split("").sort().join("");

    return ns == nt;
};

var isAnagram1 = function(s, t) {
	if(s.length != t.length) return false;
}
console.log(isAnagram(str,tstr));

var g = 'f';
console.log(g-'0');