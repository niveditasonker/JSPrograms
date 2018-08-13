function TreeLinkNode(val){
	this.val = val;
	this.left = this.right = null;
}

function BSTIterator(root){
	this.stack = [];
	this.pushLeft(root);
}

BSTIterator.prototype.hasNext = function(){
	return this.stack.length != 0;
}

BSTIterator.prototype.next = function(){
	if(this.hasNext()){
		var node = this.stack.pop();
		
		if(node.right){
			this.pushLeft(node.right);
		}
		
		return node.val;
	}
}

BSTIterator.prototype.pushLeft = function(node){
	while(node){
		this.stack.push(node);
		node = node.left;
	}
}

var n1 = new TreeLinkNode(4);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(6);
var n4 = new TreeLinkNode(1);
var n5 = new TreeLinkNode(3);
var n6 = new TreeLinkNode(5);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

var itr = new BSTIterator(n1);
var arr = [];
while(itr.hasNext()){
	arr.push(itr.next());
}

console.log(arr);