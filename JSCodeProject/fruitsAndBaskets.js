var totalFruit = function(tree) {
    var set = new Set();
    var max = Number.MIN_VALUE;
    var stPair = 0, stFruit = 0;
    
    for(let i=0;i<tree.length;i++){
    	if(set.size < 2){
    		set.add(tree[i]);
    		stFruit = 1;
    	}else{
    		if(!set.has(tree[i])){
    			max = Math.max(max, i-stPair);
    			set = new Set([tree[i], tree[i-1]]);
    			stPair = stFruit;
    			stFruit = i;
    		}
    		
    		if(tree[i] != tree[i-1]){
    			stFruit = i;
    		}
    	}
    }
    
    return Math.max(max, tree.length-stPair);
};

var inp = [1,2,3,2,2];

console.log(totalFruit(inp));