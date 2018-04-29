function TreeLinkNode(val){
	this.val = val;
	this.left=this.right=null;
}

var k = 2;
var result = null;
var count = 0;
var isFound = false;	

function recurFind(root){
	if(root != null && !isFound){
		recurFind(root.left);
		count++;
		if(count==k){
			result = root.val;
			isFound = true;
			return;
		}
		recurFind(root.right);
	}
	return result;
}

var n1 = new TreeLinkNode(6);
var n2 = new TreeLinkNode(4);
var n3 = new TreeLinkNode(8);
var n4 = new TreeLinkNode(3);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(7);
var n7 = new TreeLinkNode(9);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(recurFind(n1));