//var arr = ['A','A','C','A','B','C','B','B','D','B','A'];
var arr = ['A','A','A','B','B','B'];
var n = 2;

var leastInterval = function(tasks, n) {
    var map = [];
    tasks.forEach((t,i)=>{
//    	console.log(map[t],map[t] || 0);
    	map[t]= (map[t] || 0) + 1;;
    });
    
//    for(var i=0;i<tasks.length;i++){
//    	if(tasks[i] in map){
//    		map[tasks[i]]++;
//    	}else{
//    		map[tasks[i]] = 1;
//    	}
//    }
    
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

function leastInterval2(tasks, n) {
	  let arr = new Array(26).fill(0);

	  for (var t of tasks) {
//		  console.log(t.charCodeAt(0), 'A'.charCodeAt(0));
		    arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
	  }
	  
//	  for (let t of tasks) {
//	    arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
//	  }

	  arr.sort((a, b) => a - b);
	  
	  console.log(arr);

	  let i = 25;

	  while (i >= 0 && arr[i] === arr[25]){
		  console.log(i,arr[i]);
		  i--;
	  }
	  console.log(tasks.length, (arr[25] - 1) * (n + 1) + 25 - i);
	  return Math.max(tasks.length, (arr[25] - 1) * (n + 1) + 25 - i);
	}
console.log(leastInterval(arr,n));
console.log(leastInterval2(arr,n));