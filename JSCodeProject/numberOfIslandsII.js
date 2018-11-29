var m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]];


var id = new Array(m*n);
var sz = new Array(m*n);

var numIslands2 = function(m, n, positions) {
	var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];   
	var res = [];
	if (positions == null || positions.length == 0 || m < 0 || n < 0) {
        return res;
    }
	 for (let i = 0; i < id.length; i++) {
         id[i] = i;
     }
	 
	 var count = 0;
	 
	 for (let i=0;i< positions.length;i++) {
		 var p = positions[i][0] * n + positions[i][1];
		 if(sz[p]) sz[p]++;
		 else sz[p] = 1;
		 count++;
		 for (let j=0;j<directions.length;j++) {
			 var newRow = positions[i][0] + directions[j][0];
			 var newCol = positions[i][1] + directions[j][1];
			 
			 if (newRow < 0 || newCol < 0 || newRow > m - 1 || newCol > n - 1) {
                 continue;
             }
			 var q = newRow * n + newCol;
			 
			 if (sz[q] > 0) {
				 console.log(isConnected(p, q));
			 
				 if (isConnected(p, q)) {
					 continue;    
                 } else {
                	 union(p, q);
                     count--;
                 }
			 }
//			 console.log("count: ",count);
		 }
		 res.push(count);
	 }
	 return res;
};
function  getRoot(p) {
//	console.log("p: ",p);
    while (p != id[p]) {
        id[p] = id[id[p]];
        p = id[p];
    }
//    console.log("p2: ",p);
    return p;
}

function isConnected(p, q) {
    return getRoot(p) == getRoot(q);
}

function union(p, q) {
//	console.log(p,q);
    var rootP = getRoot(p);
    var rootQ = getRoot(q);
    if (rootP == rootQ) {
        return;
    } else {
        if (sz[p] < sz[q]) {
            id[rootP] = rootQ;
            sz[q] += sz[p];
        } else {
            id[rootQ] = rootP;
            sz[p] += sz[q];
        }
    }
}

console.log(numIslands2(m,n,positions));