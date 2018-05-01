function Node(value){
	this.value = value;
	this.right = null;
	this.left = null;
}

function BinarySearch(){
//	console.log("In binarysearch");
	this.root = null;
}

var str = "";
BinarySearch.prototype.push  = function(elem){
	var root = this.root;
	
	if(!root){
		this.root = new Node(elem);
		return
	}
	
	var curr = root;
	var nnode = new Node(elem);
	
	while(curr){
		if(elem<curr.value){
			if(!curr.left){
				curr.left = nnode;
				break
			}else{
				curr = curr.left;
			}
		}else{
			if(!curr.right){
				curr.right = nnode;
				break;
			}else{
				curr = curr.right;
			}
		}
	}
}

BinarySearch.prototype.printTree = function(){
	var curr = this.root;
	while(curr){
		str += curr.value + " ";
	}
	return str;
}

BinarySearch.prototype.inorder = function(node){
//console.log("In inorder", node.value);

	if(node!=null){
		this.inorder(node.left);
//		console.log(node.value);
		str += node.value +" ";
		this.inorder(node.right);
	}
	console.log("Inorder: "+ str);
}

BinarySearch.prototype.preorder = function(node){
	if(node!=null){
		str += node.value +" ";
//		console.log(node.value);
		this.preorder(node.left);
		this.preorder(node.right);
	}
	console.log("Preorder: "+ str);
}

BinarySearch.prototype.postorder = function(node){
	if(node!=null){
		this.postorder(node.left);
		this.postorder(node.right);
		str += node.value +" ";
//		console.log(node.value);
	}
	console.log("Postorder: "+ str);
}

BinarySearch.prototype.minNode = function(node){
	var curr;
	if(node.left == null){
//		console.log("Min found: "+node.value);
		return node;
	}else{
		bst.minNode(node.left);
	}
}

BinarySearch.prototype.maxNode = function(node){
	var curr;
	if(node.right == null){
//		console.log("Max found: "+node.value);
		return node;
	}else{
		bst.maxNode(node.right);
	}
}

BinarySearch.prototype.remove = function(node){
	this.root = this.removeNode(this.root, node);
//	console.log(this.root);
}

BinarySearch.prototype.removeNode = function(node, key){
	if(node===null){
		return null;
	}else if(key <node.data){
		node.left = this.removeNode(node.left, key);
	}else if(key > node.data){
		node.right = this.removeNode(node.right, key);
	}else{
		if(node.left === null && node.right === null){
			node = null;
			return node;
		}
		if(node.left === null){
			node = node.right;
			return node;
		}
		if(node.right === null){
			node = node.left;
			return node;
		}
	    var aux = this.minNode(node.right);
	    node.data = aux.data;
	 
	    node.right = this.removeNode(node.right, aux.data);
	    return node;

	}
	
}
var bst = new BinarySearch();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(6)
bst.push(5);;

//bst.inorder(bst.root);
//bst.preorder(bst.root);
//bst.postorder(bst.root);
bst.maxNode(bst.root);
//bst.remove(4); 
bst.printTree();