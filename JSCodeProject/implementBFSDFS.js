function Graph(){
	this.vertices = [];
	this.edges = [];
	this.noOfEdges = 0;
}

Graph.prototype.addVertex = function(vert){
	this.vertices.push(vert);
	this.edges[vert] = [];
}

Graph.prototype.addEdge = function(vert1, vert2){
	this.edges[vert1].push(vert2);
	this.edges[vert2].push(vert1);
	this.noOfEdges++;
}

Graph.prototype.traverseBFS = function(vert, fn){
	if(this.vertices.indexOf(vert) == -1) return "No vertex exists";
	var queue = [];
	queue.push(vert);
	
	var visited = [];
	visited[vert] = true;
	
//	console.log(this.edges[vert]);
	while(queue.length > 0){
		vert = queue.shift();
		
		fn(vert);
		
		for(var i=0;i<this.edges[vert].length;i++){
//			console.log(this.edges[vert][i],visited[this.edges[vert][i]]);
			if(!visited[this.edges[vert][i]]){
//				console.log("inside if: "+i,this.edges[vert][i],visited[this.edges[vert][i]]);
				visited[this.edges[vert][i]] = true;
				queue.push(this.edges[vert][i]);
			}
		}
		console.log(queue);
	}
}

Graph.prototype.traverseDFS = function(vert, fn){
	if(this.vertices.indexOf(vert) == -1) return "No vertex exists";
	var visited = [];
	
	this.DFS(vert,visited,fn);
}

Graph.prototype.DFS = function(vert, visited,fn){
	visited[vert] = true;
	
	if(this.edges[vert] != undefined){
		fn(vert);
	}
	
	for(var i=0;i<this.edges[vert].length;i++){
		if(!visited[this.edges[vert][i]]){
			this.DFS(this.edges[vert][i],visited,fn);
		}
	}
}

Graph.prototype.print = function() {
	  console.log(this.vertices.map(function(vertex) {
	    return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
	  }, this).join(' | '));
};


var graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.print();


graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(2,3);
graph.addEdge(2,4);
graph.addEdge(3,4);
graph.addEdge(4,5);
graph.addEdge(4,6);
graph.addEdge(5,7);
graph.addEdge(6,7);

graph.print();
console.log("BFS......");
graph.traverseBFS(1, function(vertex) { console.log(vertex) });
console.log("DFS......");
graph.traverseDFS(1, function(vertex) { console.log(vertex) });
