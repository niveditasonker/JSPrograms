function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var pruneTree = function(root) {
    if(!root) return null;
    
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    
    var isLeaf = !root.left && !root.right;
    
    if(isLeaf && root.val != 1) return null;
    
    return root;  
};


var pruneTree2 = function(root) {
    helper(root, 0);
	return root;
}

var helper = function (root, sum) {
	if (root == null) {
		return 0;
	}
	if (root.left == null && root.right == null) {
		return root.val;
	} else {
		var left = helper(root.left, sum);
		if(left == 0){
			root.left = null;
		}
		var right = helper(root.right,sum);
		if(right == 0){
			root.right = null;
		}
		return left + root.val + right;
	}

}

var n1 = new TreeNode(1);
var n2 = new TreeNode(0);
var n3 = new TreeNode(1);
var n4 = new TreeNode(0);
var n5 = new TreeNode(0);
var n6 = new TreeNode(0);
var n7 = new TreeNode(1);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n4.left = n7;

n3.left = n5;
n3.right = n6;


console.log(pruneTree(n1));
console.log("===============");
console.log(pruneTree(n1));