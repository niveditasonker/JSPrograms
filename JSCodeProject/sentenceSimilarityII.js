var areSentencesSimilarTwo = function(words1, words2, pairs) {
	if (words1.length != words2.length) {
        return false;
    }
	var map = new Map();
	var visited = new Set();
	
	for(let p of pairs){
		if(!map.has(p[0])){
			map.set(p[0], p[1]);
			map.set(p[1], p[0]);
		}
	}
	
	console.log(map);
	
	for(let w of words1){
		if(words1[w] == words2[w]) continue;
		if (!map.has(words1[i])) return false;  
		if (!dfs(map, words1[i], words2[i], visited)){
			return false;
		}
	}
	return true;
};

function dfs(map,wrd1, wrd2, visited){
	if(map.get(wrd1) == wrd2) return true;
	
	if(visited.set(wrd1)){
		for(let next of map.get(wrd1)){
			if (!visited.has(next) && dfs(map, next, wrd2, visited)) {
				return true;
			}
		}
		return false;
	}
}



var areSentencesSimilarTwo2 = function(words1, words2, pairs) {
    if(words1.length != words2.length ) return false
    
    // use pairs array to construct the uf. 
    let N = pairs.length, uf = new UnionFind(2 * N), map = {}, count = 0
    for(let pair of pairs) {
        for(let p of pair) {
            if(!map.hasOwnProperty(p)) {
                map[p] = count;
                count++;
            }
        }
        uf.union(map[pair[0]], map[pair[1]])
    }
    
    for(let i = 0; i < words1.length; i++) {
        if(words1[i] === words2[i]) continue
        let word1 = words1[i], word2= words2[i]
        if(!map.hasOwnProperty(word1) || !map.hasOwnProperty(word2) || 
            uf.find(map[word1]) != uf.find(map[word2])) {
            return false
        }
    }
    return true;
    
};

// Use hashmap to store string. and a count value. 
var UnionFind = function(size) {
    let parent = Array(size), rank = Array(size).fill(0)
    for(let i = 0; i < size; i++) {
        parent[i] = i
    }
    
    return {find, union}
    
    function find(x) {
        if(parent[x] != x) parent[x] = find(parent[x])
        return parent[x]
    }
    
    function union(x, y) {
        let xr = find(x), yr = find(y)
        if(xr !== yr) {
           
            if(rank[xr] < rank[yr]) {
                parent[xr] = yr
            } else if(rank[xr] > rank[yr]) {
                parent[yr] = xr
            } else {
                parent[yr] = xr
                rank[xr]++
            }
        }
          
    }
}
var pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]];
var words1 = ["great","acting","skills"];
var words2 = ["fine","drama","talent"];

console.log(areSentencesSimilarTwo(words1, words2, pairs));
console.log(areSentencesSimilarTwo2(words1, words2, pairs));