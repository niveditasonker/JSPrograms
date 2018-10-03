function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}


function isBalanced(root){
	if(root == null) return true;
	
	var heightLeft = getHeight(root.left);
	var heightRight = getHeight(root.right);
	
	var diff = Math.abs(heightLeft-heightRight);
	
	if(diff>1) return false;
	else return isBalanced(root.left) && isBalanced(root.right);
}


function getHeight(root){
	if(root == null) return -1;
	
	return Math.max(getHeight(root.left), getHeight(root.right))+1;
}


function isBalanced2(root){
	return checkTree(root) != Number.MIN_VALUE;
}

function checkTree(root){
	if(root==null) return -1;
	
	var leftH = checkTree(root.left);
	if(leftH == Number.MIN_VALUE) return Number.MIN_VALUE;
	
	var rightH = checkTree(root.right);
	if(rightH == Number.MIN_VALUE) return Number.MIN_VALUE;
	
	var diff = Math.abs(leftH-rightH);
	if(diff>1) return Number.MIN_VALUE;
	else return Math.max(leftH,rightH)+1;
}

var n1 = new TreeLinkNode(3);
var n2 = new TreeLinkNode(9);
var n3 = new TreeLinkNode(20);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(15);
var n7 = new TreeLinkNode(7);
var n8 = new TreeLinkNode(6);
//var n9 = new TreeLinkNode(5);
//var n10 = new TreeLinkNode(25);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.right = n8;
//n8.right = n9;
//n9.right = n10;

console.log(isBalanced(n1)); //complexity O(nlogn);
console.log(isBalanced2(n1));
