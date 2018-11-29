function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var printTree = function(root) {
    var depth = getDepth(root);
    
    var count  = 0;
    for(let i=0;i<depth;i++){
    	count += Math.pow(2,i);
    }
    console.log(depth, count);
    
    function build(node,res,lo,hi,level){
    	if(!node) return 0;
    	if(res.length < level){
    		var c = count;
    		var str= "";
    		while(c > 0){
    			str += '"';
    			c--;
    		}
    		console.log(str);
//    		res.push([""]*count);
    		res.push(str);
    	}
    	var mid=lo+parseInt((hi-lo)/2);
    	res[level-1][mid]=node.val;
    	console.log("res", res);
    	build(node.left, res, lo, mid, level+1)
        build(node.right, res, mid+1, hi, level+1)
        return res;
    }
    return build(root,[],0,count-1,1);
};

function getDepth(node){
	if(!node) return 0;
	return Math.max(getDepth(node.left), getDepth(node.rigth))+1;
	
}
var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);


n1.left = n2;
//n1.right = n3;
//n2.right = n4;

console.log(printTree(n1));
