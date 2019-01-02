function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var n1 = new TreeNode(15);
var n2 = new TreeNode(13);
var n3 = new TreeNode(18);
var n4 = new TreeNode(10);
var n5 = new TreeNode(16);
var n6 = new TreeNode(20);
var n7 = new TreeNode(8);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n4.left = n7;

n3.left = n5;
n3.right = n6;

var inorderSuccessor = function(root, p) {
	if(p.right){
		p = p.right;
		while(p.left){
			p=p.left;
		}
		return p;
	}
	
	   var succ = null;
	    while(root !== p) {
	        if(root.val > p.val) { // root is on the right hand side of p, handle case p = 1
	            succ = root;
	            root = root.left;
	        } else if(root.val < p.val && root.right) { // handle case p = 8
	            root = root.right;
	        } else {
	            break;
	        }
	    }
	    return succ;
//	var succ = null;
//	
//	while(root != p ){
//		if(root.val > p.val){
//			succ = root;
//			root = root.left;
//		}else if(root.val < p.val && root.right){
//			root = root.right;
//		}else{
//			break;
//		}
//		
//	}
//	return succ;
}

var inorderSuccessor2 = function(root, p) {
    if (!root) {
        return null;
    }
    
    if (root.val <= p.val) {
        return inorderSuccessor(root.right, p);
    }
    
    let leftMostChild = inorderSuccessor(root.left, p);
    return leftMostChild ? leftMostChild : root;    
};

console.log(inorderSuccessor(n1, 10));
console.log(inorderSuccessor2(n1, 10))