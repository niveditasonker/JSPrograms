var inp = [[1,2], [3], [3], []] ;

var allPathsSourceTarget = function(graph) {
    var res = [];
    var path = [];
    path.push(0);
    dfs(graph, 0, res, path);
    console.log('path after first push', path);
    return res;
    
};

function dfs(graph, node,res,path){
	if(node==graph.length-1){
		console.log("Node: ",node);
		res.push(path.slice(0));
		return;
	}
	
	console.log(graph[node]);
	
	for (nextNode of graph[node]) {
		console.log("NextNode: ",graph[node][nextNode],nextNode);
		path.push(nextNode);
	    dfs(graph, nextNode, res, path);
	    path.pop();
	}
}

console.log(allPathsSourceTarget(inp));