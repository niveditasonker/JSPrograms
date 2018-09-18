var words = ["practice", "makes", "perfect", "coding", "makes"];
var word1 = "makes";
var word2 = "coding";

function shortestDistance(words, wA, wB){
	var min;
	var aIdx;
	var bIdx;
	
	for(var i=0;i<words.length;i++){
		if(words[i]==wA) aIdx = i;
		if(words[i]==wB) bIdx = i;
		
		if(aIdx != null && bIdx != null){
			var dist = Math.abs(aIdx-bIdx);
			if(min>dist || min==null) min = dist;
		}
	}
	
	return min;
}

function shortestDistance2(words, wA, wB){
	var m=-1;
	var n=-1;
	
	var min = Number.MAX_SAFE_INTEGER;
	
	for(var i=0; i<words.length; i++){
	     var s = words[i];
	     if(wA== s){
	         m = i;
	         if(n!=-1)
	             min = Math.min(min, m-n);
	     }else if(wB==s){
	         n = i;
	         if(m!=-1)
	             min = Math.min(min, n-m);
	     }
	}
	
	return min;
}
console.log(shortestDistance(words, word1, word2));
console.log(shortestDistance2(words, word1, word2));