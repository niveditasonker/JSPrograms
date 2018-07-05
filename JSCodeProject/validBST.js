var minimum = -4294967296;
var maximum = 4294967296;

function Node(value){
	this.value = value;
	this.right = null;
	this.left = null;
	this.prevNode = null;
}

function BinarySearch(){
	console.log("In binarysearch");
	this.root = null;
}

BinarySearch.prototype.isBST1 = function(root) {
	if (root != null) {
		if (!bst.isBST1(root.left))
			return false;
		if (this.prevNode != null && this.prevNode.data >= root.data) {
			return false;
		}
		this.prevNode = root;
		return bst.isBST1(root.right);
	}
	return true;
}


BinarySearch.prototype.isBST2 = function(root, min, max) {
	if (root != null) {
		if (root.value > max || root.value < min) {
			return false;
		}
		return bst.isBST2(root.left, min, root.value)
				&& bst.isBST2(root.right, root.value, max);
	} else {
		return true;
	}
}

BinarySearch.prototype.inorder = function(node){
	//console.log("In inorder", node.value);
		var str = "";
		if(node!=null){
			this.inorder(node.left);
			console.log(node.value);
			this.inorder(node.right);
		}
	}

var bst = new BinarySearch();
bst.root = new Node(20);
bst.root.left = new Node(10);
bst.root.right = new Node(30);
bst.root.left.left = new Node(5);
bst.root.left.right = new Node(15);
bst.root.right.left = new Node(25);
bst.root.right.right = new Node(35);

//bst.inorder(bst.root);
console.log(bst.isBST2(bst.root, Number.MIN_SAFE_INTEGER - 1,Number.MAX_SAFE_INTEGER - 1));

bst.root.left.right.right = new Node(40);

//bst.inorder(bst.root);
console.log(bst.isBST2(bst.root, Number.MIN_SAFE_INTEGER - 1,Number.MAX_SAFE_INTEGER - 1));





