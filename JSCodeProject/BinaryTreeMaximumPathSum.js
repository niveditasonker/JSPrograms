function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(1);
var n6 = new TreeNode(6);
var n7 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
//n2.left = n4;
//n4.left = n7;
//n3.left = n5;
//n3.right = n6;

var maxLen = 0;

function findMaxTreePath(root){
   var maxPath = -Infinity;
    getMaxPath(root);
    return maxPath;
    
    function getMaxPath(node){
    	if(node==null){
        	return 0;
        }
    	
    	var leftVal = Math.max(0,getMaxPath(node.left));
    	var rightVal = Math.max(0,getMaxPath(node.right));
    	
    	maxPath = Math.max(maxPath, (leftVal+rightVal+root.val));
    	
    	return Math.max(node.val+leftVal, node.val+rightVal);
    }
}

var maxPathSum = function(root) {
    var maxVal = -Infinity;
    findMaxPath(root);
    return maxVal;
    
    function findMaxPath(node) {
        if(!node) {
            return 0;
        }
        
        var leftVal = Math.max(findMaxPath(node.left), 0);
        var rightVal = Math.max(findMaxPath(node.right), 0);
        
        var ps1 = node.val + Math.max(leftVal, rightVal);
        // ps2 means taking this current node as parent node and stop there
        var ps2 = node.val + leftVal + rightVal;
        
        // maxVal as if we end counting value here, what will be the maximum val
        // leftVal and rightVal can be negative values
        maxVal = Math.max.apply(null, [maxVal, ps1, ps2]);

        // return ps1 only since, ps2 cannot be combined with the parent node
        // leftVal and rightVal can be negative values, however, we can to see if combining with values down below can give higher number
        return ps1;
    }
};

console.log(maxPathSum(n1));
console.log(findMaxTreePath(n1));

