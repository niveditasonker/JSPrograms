function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}
/*
var n1 = new TreeNode(5);
var n2 = new TreeNode(3);
var n3 = new TreeNode(7);
var n4 = new TreeNode(3);
var n5 = new TreeNode(4);
var n6 = new TreeNode(1);
var n7 = new TreeNode(2);
var n8 = new TreeNode(2);
var n9 = new TreeNode(1);
var n10 = new TreeNode(3);
var n11 = new TreeNode(8);
var n12 = new TreeNode(7);
var n13 = new TreeNode(6);
var n14 = new TreeNode(9);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n4.left = n6;
n4.right = n7;
n5.left = n8;
n8.left = n9;
n3.left = n10;
n3.right = n11;
n11.left = n12;
n11.right = n14;
n12.left = n13;
*/

var n1 = new TreeNode(4);
var n2 = new TreeNode(5);
var n3 = new TreeNode(6);
var n4 = new TreeNode(4);
var n5 = new TreeNode(1);
var n6 = new TreeNode(6);
var n7 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n4.left = n7;

n3.left = n5;
n3.right = n6;


var binaryTreePaths = function(root) {
	var final = [];
   
    search(root,[],final);
   	// console.log(final);
    return final;

};

function search(node,current,final){
	if(node==null){
    	return;
    }
    
    var value = node.val;
    current.push(value);
        
    if(node.left == null && node.right == null){
        final.push(current.join('->'));

    }else{
        search(node.left,current,final);
        search(node.right,current,final);
    }
    current.pop();
};

console.log(binaryTreePaths(n1));