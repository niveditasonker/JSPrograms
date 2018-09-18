var Graph = function(){
	this.nodes = {};
}

Graph.prototype.addNode = function(val){
	if(this.nodes[val] !== undefined) return "Node exists";
	else this.nodes[val] = {};
}

Graph.prototype.addEdge = function(node,route){
	if(this.nodes[node] == undefined) return "Node dosn't exists";
	else if(this.nodes[node][route]) return "Edge to the node exists";
	else this.nodes[node][route] = true;
}

Graph.prototype.findEdges = function(node){
	if(this.nodes[node] == undefined) return "Node dosn't exists";
	else return this.nodes[node];
}

Graph.prototype.hasEdge = function(node, route){
	if(this.nodes[node] == undefined) return false;
	else return this.nodes[node][route] !== undefined;
}

Graph.prototype.hasNode = function(node){
	return this.nodes[node] !== undefined;
}

Graph.prototype.removeEdge = function(edge){
	if(this.nodes[node] == undefined) return "Node dosn't exists";
	else delete this.nodes[node][edge];
}

Graph.prototype.removeNode = function(node){
	if(this.nodes[node] == undefined) return "Node dosn't exists";
	else delete this.nodes[node];
	
	for(var n in nodes){
		if(this.nodes[n][node] !== undefined){
			delete this.nodes[n][node];
		}
	}
}

Graph.prototype.checkRoute = function(val1, val2){
	var q1 = [];
	var q2 = [];
	
	var visited1 = {};
	var visited2 = {};
	
	visited1[val1] = true;
	visited2[val2] = true;
	
	console.log("..............");
	if(graph.hasNode(val1)){
		for (var edge in graph.findEdges(val1)){
			q1.push(edge);
		}
	}
	
	if(graph.hasNode(val2)){
		for (var edge in graph.findEdges(val2)){
			q2.push(edge);
		}
	}

	console.log(q1);
	console.log(q2);
	var nxEdge1;
	var nxEdge2;

	if(q1 == null || q2 == null){
		return false;
	}
	
	while(q1.length > 0 || q2.length > 0){
//	while(q1 !== null || q2 !== null){
//		if(q1 !== null){
		if(q1 !== null){
//			console.log("In q1");
//			console.log(q1);
			nxEdge1 = q1.shift();
			
			if(nxEdge1 === val2){
				return true;
			}
			
			if(visited1[nxEdge1] === undefined){
				visited1[nxEdge1] = true;
				if(graph.hasNode(nxEdge1)){
					for (var edge in graph.findEdges(nxEdge1)){
						q1.push(edge);
					}
				}
			}
		}
//		
		if(q2 !== null){
//			console.log("In q1");
//			console.log(q2);
			nxEdge2 = q2.shift();
			
			if(nxEdge2 == val1){
				return true;
			}
			
			if(visited2[nxEdge2] === undefined){
				visited2[nxEdge2] = true;
				if(graph.hasNode(nxEdge2)){
					for (var edge in graph.findEdges(nxEdge2)){
						q2.push(edge);
					}
				}
			}
		}
//		
//		
	}
//	
	return false;
	
}

var graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('B', 'D');

console.log(graph);

//console.log(graph.checkRoute('A', 'C'), true);
console.log(graph.checkRoute('C', 'E'), false);
//console.log(graph.checkRoute('B', 'A'), true);
//console.log(graph.checkRoute('D', 'E'), true);