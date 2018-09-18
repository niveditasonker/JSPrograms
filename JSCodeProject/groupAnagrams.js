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
console.log(groupAnagrams(input));