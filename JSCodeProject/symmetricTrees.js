function Node(value){
	this.value = value;
	this.right = null;
	this.left = null;
}

function BinarySearch(){
	this.root = null;
}

BinarySearch.prototype.isMirror = function(t1, t2){
	if(t1 == null && t2 == null){
		return true;
	}
	if(t1 != null && t2 != null && t1.value==t2.value ){
    	 return (tree.isMirror(t1.left, t2.right)
                    && tree.isMirror(t2.right, t1.left));
    }
    
    return false;
}

BinarySearch.prototype.areIdentical = function(t1){
	return tree.isMirror(t1, t1);
}

var tree = new BinarySearch();
//var tree2 = new BinarySearch();

tree.root1 = new Node(1);
tree.root1.left = new Node(2);
tree.root1.right = new Node(2);
tree.root1.left.left = new Node(3);
tree.root1.left.right = new Node(4);
tree.root1.right.left = new Node(4);
tree.root1.right.right = new Node(3);

var op = tree.areIdentical(tree.root1);
console.log(op);