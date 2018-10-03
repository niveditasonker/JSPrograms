var knightProbability = function(N, K, r, c) {
    var directions = [[2,1],[-2,1],[2,-1],[-2,-1], [1,2],[-1,2],[1,-2],[-1,-2]];
    
    var prevWays = [[]];
    prevWays[r][c] = 1;
    var res = 0;
    
    for(var k=1;k<=K;++k){
    	var ways =[[]];
    	for(var i=0;i<N;++i){
    		for(var j=0;j<N;++j){
    			for(var m=0;m<directions.length;m++){
//    				console.log(directions[m][0],directions[m][1]);
    				var oldR = i-directions[m][0];
    				var oldC = j-directions[m][1];
    				if(oldR>=0 && oldC>=0 && oldR<N && oldC<N){
    					console.log(i,j,k,directions[m][0],directions[m][1],oldR,oldC);
    					ways[i][j] += (prevWays[oldR][oldC]/8.0);
    				}
    			}
    		}
    	}
    	prevWays = ways;
    }
	for(var i=0;i<N;i++){
		for(var j=0;j<N;j++){
			res += prevWays[i][j];
		}
	}
	return res;
};

var N=3;var k=2;var r=0;var c=0;

console.log(knightProbability(N,k,r,c));