function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}

function findSubsequences(root){
	var arr = [];
	var startTraveled = {};
	startTraveled[root.val] = true;
	
	function recurse(nodes, traveled){
		
//		console.log(traveled);
		
		
		var noChild = true;
		nodes.forEach((node)=>{
//			console.log(node);
			if(node.left !== null && traveled[node.left.val] == undefined){
				noChild = false;
				traveled[node.left.val] = true;
				
				recurse(nodes.concat([node.left]), traveled);
				delete traveled[node.left.val];
			}
			
			if(node.right !== null && traveled[node.right.val] == undefined){
				noChild = false;
				traveled[node.right.val] = true;
				
				recurse(nodes.concat([node.right]), traveled);
				delete traveled[node.right.val];
			}
		});
		
		if(noChild){
			arr.push(nodes.map(node => node.val));
//			for(var i=0;i<nodes.length;i++){
//				console.log(nodes[i].val);
//			}
		}
	}
	
	recurse([root], startTraveled);
	
	return arr;
}

var tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(6);
tree.left.right = new TreeNode(3);
tree.left.left = new TreeNode(1);
tree.right.right = new TreeNode(7);
tree.right.left = new TreeNode(5);

console.log(findSubsequences(tree));