function TreeLinkNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var binaryTreePaths = function(root) {
    var res = [];
    
    function dfs(node, curr, res){
    	if(node==null){
    		return;
    	}
    	curr.push(node.val);
    	
    	if(node.left==null || node.right == null){
    		res.push(curr.join('->'));
    	}else{
    		dfs(node.left,curr,res);
    		dfs(node.right,curr,res);
    	}
    	
    	curr.pop();
    }
    
    dfs(root,[],res);
    
    return res;
    
//    var res = [];
//    
//    function dfs(node, curr, res) {
//        if(node === null) {
//            return;
//        }
//        
//        curr.push(node.val);
//        
//        if(node.left === null && node.right === null) {
//            res.push(curr.join('->'));
//        } else {
//            dfs(node.left, curr, res);
//            dfs(node.right, curr, res);
//        }
//        
//        curr.pop();
//    }
//    
//    dfs(root, [], res);
//    
//    return res;
};

var n1 = new TreeLinkNode(3);
var n2 = new TreeLinkNode(9);
var n3 = new TreeLinkNode(20);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(15);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(binaryTreePaths(n1));