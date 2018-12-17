var pattern = "abab", str = "redblueredblue";

var wordPatternMatch = function(pattern, str) {
	if(pattern.length == 0 && str.length == 0) return true;
	if(pattern.length == 0 || str.length == 0) return false;
	var map = new Map();
	var set = new Set();
	return DFShelper(pattern, str, 0, 0, map, set);
}


function DFShelper(pattern, str, i,j,map,set){
	if(i==pattern.length && j==str.length) return true;
	
	if(i>=pattern.length || j>=str.length) return false;
	
	var c = pattern.charAt(i);
	
	for(let k=j+1;k<=str.length;k++){
		var sub = str.substring(j,k);
		
		if(!map.has(c) && !set.has(sub)){
//			console.log("In if",c, i,j,k, map.has(c), map.get(c), sub);
			map.set(c,sub);
			set.add(sub);
//			console.log("Result of ",DFShelper(pattern, str, i+1,k,map,set), map, set);
			if(DFShelper(pattern, str, i+1,k,map,set)){
				return true;
			}
			map.delete(c);
			set.delete(sub);
//			console.log("Map, Set", map, set);
		}else if(map.has(c) && (map.get(c)==sub)){
//			console.log("In else",c, i,j,k, map.has(c), map.get(c), sub);
//			console.log("Result of else ",DFShelper(pattern, str, i+1,k,map,set), map, set);
			if(DFShelper(pattern, str, i+1,k,map,set)) return true;
		}
//		console.log("Setting map:", map);
	}
	return false;
}


console.log(wordPatternMatch("aabb", "xyzabcxzyabc")); 
console.log(wordPatternMatch("aaaa", "asdasdasdasd")); 
console.log(wordPatternMatch(pattern, str))