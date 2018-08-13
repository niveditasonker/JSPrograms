var arr = ['A','A','C','A','B','C','B','B','D','B','A'];
var n = 2;

var leastInterval = function(tasks, n) {
    var map = [];
    tasks.forEach((t,i)=>{
//    	console.log(map[t],map[t] || 0);
    	map[t]= (map[t] || 0) + 1;;
    });
    
    console.log(map);
    var maxKey = Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b);
    var maxval = map[maxKey];
    console.log(maxKey,maxval);
    
    var currCount = (maxval-1)*n + maxval;
    var currSpace = (maxval-1)* n;
    
    console.log(currCount,currSpace);
    
    for(var key in map){
    	if (key == maxKey) continue;
    	else if (map[key] == maxval && currSpace > 0){
    		currSpace -= (maxval - 1);
            currCount += 1;
    	}else if (currSpace > 0){
            currCount += Math.max(0, map[key] - currSpace);
            currSpace -= map[key];
        } else {
            currCount += map[key];
        }
    }
    
    return currCount;
    
};

console.log(leastInterval(arr,n));