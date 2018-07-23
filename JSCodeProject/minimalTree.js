function Node(data){
	this.data = data;
	this.left = null;
	this.right = null;
}
function BinarySearchTree(){
	this.root = null;
}

BinarySearchTree.prototype.insert  = function(elem){
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

BinarySearchTree.prototype.createMinimalTree = function(arr){
	var mid;
	
	if(arr.length == 0) return 0;
	else if(arr.length == 1) mid = 0;
	else mid = parseInt(arr.length/2);
	
	bst.insert(arr[mid]);
	var leftArr = arr.slice(0,mid);
	var rightArr = arr.slice(mid+1,arr.length);
	
	this.createMinimalTree(leftArr);
	this.createMinimalTree(rightArr);
}

BinarySearchTree.prototype.inorder = function(node, arr){
	//console.log("In inorder", node.value);
		var str = "";
		if(node!=null){
			this.inorder(node.left);
			str += node.data + " ";
			console.log(node.data);
			this.inorder(node.right);
		}
		return str;
	}



var bst = new BinarySearchTree();
var sortedArr = [1,2,3,4,5,6,7,8];
bst.createMinimalTree(sortedArr);
console.log(bst.root);
var rArr = "";
bst.inorder(bst.root,rArr);
console.log(rArr);
