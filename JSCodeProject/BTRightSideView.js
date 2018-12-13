function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

function BinarySearch(){
	this.root = null;
}

var righSideView = function(root){
	var result  = [];
	var left = [];
	if(root===null){
		return result;
	}
	
	var queue = [];
	queue.push(root);
	
	while(queue.length > 0){
		var len = queue.length;
		for(var i=0;i<len;i++){
			var node = queue.shift();
			console.log(i);
//			console.log(queue);
			
			if(node.left){
				queue.push(node.left);
			}
			
			if(node.right){
				queue.push(node.right);
			}
			
			if(i === len-1){
				result.push(node.val);
			}
//			if(i==0){
//				left.push(node.val);
//			}

		}
	}
//	console.log(left);
	return result;
}

var rightSideView = function(root) {
	  var res= [];
	  

	  dfs(root,0,res);
	  return res;

	  function dfs(node, level, final){
	      if(node==null) return;
	      if(level==final.length) final.push(node.val);
	      
	      dfs(node.right,level+1,final);
	      dfs(node.left,level+1,final);
	  }
};

var n1 = new TreeLinkNode(3);
var n2 = new TreeLinkNode(9);
var n3 = new TreeLinkNode(20);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(15);
var n7 = new TreeLinkNode(7);

//var tree = new BinarySearch();
////var tree2 = new BinarySearch();
//
//tree.root1 = new TreeLinkNode(1);
//tree.root1.left = new TreeLinkNode(2);
//tree.root1.right = new TreeLinkNode(3);
////tree.root1.left.left = new Node(3);
//tree.root1.left.right = new TreeLinkNode(5);
////tree.root1.right.left = new Node(4);
//tree.root1.right.right = new TreeLinkNode(4);


n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;


console.log(righSideView(n1));
console.log(rightSideView(n1));