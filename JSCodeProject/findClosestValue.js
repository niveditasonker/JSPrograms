function Node(value){
	this.value = value;
	this.right = null;
	this.left = null;
}

function BinarySearch(){
	this.root = null;
}

BinarySearch.prototype.findClosestValue = function(t1, target){
	if(t1==null){
    	return;
    }
    
    if(Math.abs(t1.value - target) < min){
    	min = Math.abs(t1.value-target);
        goal = t1.value;
    }
    if(target < t1.value){
		tree.findClosestValue(t1.left, target);
	}else{
		tree.findClosestValue(t1.right, target);
	}    
    //return goal;
}

var tree = new BinarySearch();
tree.root2 = new Node(4);
tree.root2.left = new Node(2);
tree.root2.right = new Node(5);
tree.root2.left.left = new Node(1);
tree.root2.left.right = new Node(3);


var min = Number.MAX_SAFE_INTEGER;
var target = 2.714286;
var goal;
tree.findClosestValue(tree.root2, target);
console.log(goal);