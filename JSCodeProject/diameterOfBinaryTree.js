function TreeNode(val){
	this.val = val;
    this.left = null;
    this.right = null;
}

var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);

n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

console.log(findDiameter(n1));

function findDiameter(root){
	var res = [0];
    
    findMaxDiameter(root,res);
    return res[0];
}

function findMaxDiameter(node,res){
	if(node==null){
    	return 0;
    }
    
    var leftTree = findMaxDiameter(node.left, res);
    var rightTree = findMaxDiameter(node.right, res);
    var tVal = leftTree + rightTree;
    console.log("leftTree "+leftTree +" rightTree "+rightTree+" tVal "+tVal+" res[0] "+res[0]);
    if(res[0]<tVal) res[0] = tVal;
   	return(leftTree>rightTree? leftTree+1:rightTree+1);
}