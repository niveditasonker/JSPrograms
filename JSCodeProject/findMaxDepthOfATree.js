function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var maxDepth = function(root) {
    if(root == null){
    	return 0;
    }
    
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    var maxLen = Math.max(left,right);
    
    return maxLen + 1;
};

var n1 = new TreeNode(3);
var n2 = new TreeNode(9);
var n3 = new TreeNode(20);
var n4 = new TreeNode(null);
var n5 = new TreeNode(null);
var n6 = new TreeNode(15);
var n7 = new TreeNode(7);
var n8 = new TreeNode(24);
var n9 = new TreeNode(32);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n7.left = n8;
n7.right = n9;

console.log(maxDepth(n1));
