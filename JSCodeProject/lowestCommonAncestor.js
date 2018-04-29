function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right =  null;
}

var findLCA = function(root, nd1, nd2){
//	console.log(root);
//	console.log(">>>>>>>>>");
//	console.log("Val1: "+nd1);
//	console.log("Val2: "+nd2);
	if(root == null){
		return root;
	}
	
	if(root.val == nd1 || root.val == nd2){
		return root;
	}
	
	var left_lca = findLCA(root.left,nd1,nd2);
	var right_lca = findLCA(root.right,nd1,nd2);

	
	if(left_lca != null && right_lca != null){
		return root;
	}else{
		if(left_lca != null){
			return left_lca;
		}else{
			return right_lca;
		}
	}
	

}

var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(6);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.l3ft = n6;
n3.right = n7;

var c = findLCA(n1,4,5);
console.log(c.val);
