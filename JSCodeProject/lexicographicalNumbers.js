var num = 13;

var lexicalOrder = function(n) {
    
    var arr = [];
    for(var i=1;i<=n;i++){
        arr.push(i);     
    }
    arr.sort(function(x,y){
        if(x.toString() > y.toString()) return 1
        else return -1;
    });
    // console.log(arr);
    return arr;
};

var lexicalOrderDFS = function(n) {
	
	var res = [];
	
	for(var i=1;i<10;i++){
		dfs(i,n,res);
	}
	return res;
}

function dfs(curr,n,result){
	if(curr>n) return;
	else{
		result.push(curr);
		for(var j=0;j<10;j++){
			if(curr*10+j > n) return;
			dfs(curr*10+j, n, result);
		}
	}
}

console.log(lexicalOrder(num));
console.log(lexicalOrderDFS(num));