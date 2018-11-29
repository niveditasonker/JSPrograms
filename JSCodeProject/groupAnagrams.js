var input = ["eat", "tea", "tan", "ate", "nat", "bat"];

/*
var groupAnagrams = function(strs) {
	var result = [];
	
	if(strs.length==0 || strs == null) return result;
    for(var i=0;i<strs.length;i++){
    	var curr = strs[i];
    	getAnagrams(curr, strs, result);
    }
    
    return result;
};

var getAnagrams = function(cStr, arr, res){
	for(var i=0;i<arr.length;i++){
		if(cStr.length==arr[i] && cStr != arr[i]){
			var c1 = cStr.split("").sort().joint("");
			var c2 = arr[i].split("").sort().joint("");
			if(c1==c2 && res.indexOf(arr[i] == -1) && res.indexOf(cStr) == -1) res.push([cStr,arr[i]]);
		}else{
			res.push([cStr]);
		}
	}
	
}
*/
var groupAnagrams = function(strs) {
	var map = {};
	var result = [];
	if(strs.length==0 || strs == null) return result;
	for(var i=0;i<strs.length;i++){
		var cStr = strs[i].split("").sort().join("");
		map[cStr] = map[cStr] || [];
		map[cStr].push(strs[i]);
	}
	console.log(map);
	for(var word in map){
		result.push(map[word]);
	}
	return result;
}

var groupAnagrams2 = function(strs) {
    if(strs.length == 0) return [];
    const result = new Map();
    const primes = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107];
    const getKey = str => {
        let key = 1;
        for(let i = 0; i < str.length; i++){
//        	console.log("....",primes[str.charCodeAt(i) - 97],str.charCodeAt(i) );
            key =  primes[str.charCodeAt(i) - 97] * key;
        }
        return key;
    }
//    console.log(get)
    strs.forEach(w => {
        let key = getKey(w);
        if(result.has(key)) {
            result.get(key).push(w);
        } else {
            result.set(key,  [w]);
        }
       
    });
    return [...result.values()];
};
console.log(groupAnagrams(input));
console.log(groupAnagrams2(input));


