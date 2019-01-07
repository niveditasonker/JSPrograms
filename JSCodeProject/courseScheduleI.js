var canFinish = function(numCourses, prerequisites) {
    let nodeList = {};
    console.log(prerequisites);
    for(let [course,prereq] of prerequisites){
        if(!nodeList[course]){
            nodeList[course] = [];
        }
        
        nodeList[course].push(prereq);
    }
   
    let keys = Object.keys(nodeList);
    let closed = new Set();
    for(let key of keys){
        if(!DFS(parseInt(key)))
            return false;
    }
    
    return true;
    
    function DFS(start){
        closed.add(start);
        let children = nodeList[start];

        if(children != null){
            for(let child of children){
                if(!closed.has(child)){
                    if(!DFS(child))
                        return false;
                }else{
                    return false;
                }

            }
        }
        closed.delete(start);

        return true;
    }

};

var constructGraph = function(numNodes, pre) {
    var nodes = [];
    for (var i = 0; i < numNodes; i++) {
        var node = {};
        node.neighbors = [];
        nodes[i] = node;
    }
    for (var j = 0; j < pre.length; j++) {
        var s = pre[j][1];
        var d = pre[j][0];
        nodes[s].neighbors.push(nodes[d]);
    }
    return nodes;
}

// Return true if there is a cycle detected.
var dfs = function(startNode, parents) {
    if (parents.indexOf(startNode) >= 0) return true;
    if (startNode.visited) return false;
    
    startNode.visited = true;
    var neighbors = startNode.neighbors;
    parents.push(startNode);
    for (var i = 0; i < neighbors.length; i++) {
        var hasCycle = dfs(neighbors[i], parents);
        if (hasCycle) return true;
    }
    parents.pop();
}

var canFinish2 = function(numCourses, prerequisites) {
    var nodes = constructGraph(numCourses, prerequisites);
    for (var i = 0; i < nodes.length; i++) {
        var hasCycle = dfs(nodes[i], []);
        if (hasCycle) return false;
    }
    return true;
};


console.log(canFinish(2,[[1,0]]));
console.log(canFinish2(2,[[1,0]]));