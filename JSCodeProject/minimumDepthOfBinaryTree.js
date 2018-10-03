function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var minDepth = function(root) {
	   if(root==null) return 0;
	    var left = minDepth(root.left);
	    var right = minDepth(root.right);
	    var min = Math.min(left,right);
	    
	    return min+1;
	    
//	    if (root === null) {
//	        return 0;
//	    }
//	    
//	    if (root.left === null) {
//	        return minDepth(root.right) + 1;
//	    }
//	    
//	    if (root.right === null) {
//	        return minDepth(root.left) + 1;
//	    }
//	    
//	    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

function minDepthIterative(root){
    if(root === null){
        return 0;
    }
    
    var queue = [];
    
    queue.push(root);
    
    var height = 1;
    
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    while(queue.length !== 0){
        var node = queue.shift();
        
        curLvlCnt--;
        
        if(node.left){
            queue.push(node.left);
            nextLvlCnt++;
        }
        if(node.right){
            queue.push(node.right);
            nextLvlCnt++;
        }
        
        if(node.left === null && node.right === null){
            return height;
        }
        
        if(curLvlCnt === 0){
            height++;
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
        }
    }
    
    return height;
}

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

console.log(minDepth(n1));
console.log(minDepthIterative(n1));

//Solution works correct on leetcode but not in eclipse;