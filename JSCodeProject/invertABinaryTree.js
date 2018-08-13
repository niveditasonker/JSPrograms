function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}


var invertTree = function(root){
	if(root == null){
		return;
	}
	
	var left = invertTree(root.left);
	var right = invertTree(root.right);
	
	if(left){
		root.left = right;
	}
	if(right){
		root.right = left;
	}
	return root;
}


var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(6);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

var it = invertTree(n1);
console.log(it);
