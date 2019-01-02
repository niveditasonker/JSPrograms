var arr = [2,-1,2];
var k=3;

var shortestSubarray = function(A, K) {
    var min = -1;
    var dist = new Array(A.length);
    for(let i =0;i<A.length;i++){
    	dist[i] = findShortDist(A,K,i);
    	if((dist[i] > 0) && (dist[i]< min || min == -1)){
    		min = dist[i];
    	}
    }
    return min;
};

function findShortDist(arr,k,start){
	var minDist = -1; var curr = 0;
	for(let i=start;i<arr.length;i++){
		curr += arr[i];
		
		if(curr >= k) return (i-start+1);
		if(curr<0||minDist != -1) return minDist;
	}
}

console.log(shortestSubarray(arr,k));
//complexity: O(n*n) check