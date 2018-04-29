function Node(value){
	this.value = value;
	this.right = null;
	this.left = null;
}

function BinarySearch(){
	this.root = null;
}

BinarySearch.prototype.areIdentical = function(t1,t2){
//	console.log(t1);
	if(t1 == null && t2 == null){
		return true;
	}
	if(t1 != null && t2 != null ){

		return ((t1.value==t2.value) && tree.areIdentical(t1.left,t2.left) && tree.areIdentical(t1.right,t2.right));
	}else{
		return false;
	}
	
	
}

BinarySearch.prototype.findDiffNode = function(t1,t2){
	if(t1 == null && t2 == null){
		return true;
	}
	if(t1 != null && t2 != null ){
		if(t1.value==t2.value){
			return ((t1.value==t2.value) && tree.findDiffNode(t1.left,t2.left) && tree.findDiffNode(t1.right,t2.right));
		}else{
			console.log(">>>>>>>");
			console.log(t1.value,t2.value);
		}
		
	}
	
	return false;
	
	
	
}

var tree = new BinarySearch();
//var tree2 = new BinarySearch();

tree.root1 = new Node(1);
tree.root1.left = new Node(2);
tree.root1.right = new Node(6);
tree.root1.left.left = new Node(4);
tree.root1.left.right = new Node(5);

tree.root2 = new Node(1);
tree.root2.left = new Node(2);
tree.root2.right = new Node(3);
tree.root2.left.left = new Node(4);
tree.root2.left.right = new Node(5);

//console.log(tree.areIdentical(tree.root1,tree.root2));
tree.findDiffNode(tree.root1,tree.root2);
