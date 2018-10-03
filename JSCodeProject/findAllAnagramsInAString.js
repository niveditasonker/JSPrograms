var findAnagrams = function(s, p) {
    var newP = p.split('').sort().join('');
    var pLen = p.length;
    var res = [];
    
    for(let i=0;i<s.length;i++){
        let word = s.substr(i,pLen);
        word = word.split('').sort().join('');
        if(word == newP) res.push(i);
    }
    
    return res;
};

var findAnagrams2 = function(s, p) {
	var res = [];
	var objp = {};
	var objs = {};
	
	for(var i=0;i<p.length;i++){
		objp[p[i]] = objp[p[i]] || 0;
		objp[p[i]]++;
	}
	
	for(var i=0;i<p.length;i++){
		objs[s[i]] = objs[s[i]] || 0;
		objs[s[i]]++;
	}
	
	for(var i=0;i<s.length-p.length;i++){
		if(isEqual(objp,objs)){
			res.push(i);
		}
		
		if(objs[s[i]] > 0){
			if(objs[s[i]] == 1) delete objs[s[i]];
			else objs[s[i]]--;
		}
		
		objs[s[i+p.length]] = objs[s[i+p.length]]  || 0;
		objs[s[i+p.length]]++;
	}
	
	return res;
}

function isEqual(a,b){
	var propA = Object.getOwnPropertyNames(a);
	var propB = Object.getOwnPropertyNames(b);
	
	console.log(propA,propB);
	
	if(propA.length !== propB.length) return false;
	
	for(var i=0;i<propA.length;i++){
		var propName = propA[i];
		
		if(a[propName] !== b[propName]) return false;
	}
	
	return true;
}

var s = "cbaebabacd";
var p =  "abc";

console.log(findAnagrams(s,p));
console.log(findAnagrams2(s,p));