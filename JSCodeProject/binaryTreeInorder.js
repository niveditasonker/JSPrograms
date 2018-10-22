function Node(value){
	this.value = value;
	this.right = null;
	this.left = null;
}

function BinarySearch(){
	this.root = null;
}

BinarySearch.prototype.inorder = function(t1){
	var stack = [];
	var result = [];
	
	if(t1 == null){
		return result;
	}
	
	var curr = t1;
	
	while(true){
		while(curr != null){
			stack.push(curr);
			curr = curr.left;
		}
//		console.log(stack);
//		console.log(stack.length);
		if(stack.length == 0){
			break;
		}
		
		curr = stack.pop();
//		console.log("Curr: ");
//		console.log(curr);
		result.push(curr.value);
		curr = curr.right;
//		console.log("Curr right: ");
//		console.log(curr);
	}
	
	return result;
}

BinarySearch.prototype.preorder = function(t1){
	var stack = [];
	var result = [];
	
	if(t1 == null){
		return result;
	}
	
	stack.push(t1);
	
	while(stack.length){
		var node = stack.pop();
		result.push(node.value);
		
		if(node.right != null){
			stack.push(node.right);
		}
		
		if(node.left != null){
			stack.push(node.left);
		}
	}
	
	return result;
	
}

BinarySearch.prototype.postorder = function(t1){
	var stack = [];
	var result = [];
	var prev = null;
	var curr = null;
	
	if(t1 == null){
		return result;
	}
	
	stack.push(t1);
	
	while(stack.length != 0){
		curr = stack[stack.length-1];
		console.log("Curr:============ ",curr);
		if(prev == null || prev.left == curr || prev.right == curr){ //traverse down the tree
			if(curr.left != null){
				stack.push(curr.left);
			}else if(curr.right != null){
				stack.push(curr.right);
			}
		}else if(curr.left == prev){ //traverse up the tree from left
			if(curr.right != null){
				stack.push(curr.right);
			}
		}else{
			// curr==prev
			result.push(curr.value);
			stack.pop();
		}
		prev = curr;
	}

	return result;
}

var tree = new BinarySearch();

tree.root1 = new Node(1);
tree.root1.left = new Node(2);
tree.root1.right = new Node(1);
tree.root1.right.left = new Node(3);
tree.root1.right.right = new Node(4);


//console.log(tree.inorder(tree.root1));
//console.log(tree.preorder(tree.root1));
console.log(tree.postorder(tree.root1));