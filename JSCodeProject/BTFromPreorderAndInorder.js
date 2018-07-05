function TreeLinkNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var preorder = [3,9,20,15,7];
var inorder = [9,3,15,20,7];

var buildTree = function(preorder, inorder) {
	if(!preorder || !inorder){
		return null;
	}  
	
	if(preorder.length != inorder.length){
		return null;
	}
	
	return generate(preorder,0,(preorder.length-1),inorder,0,inorder.length-1);
};

var generate = function(preorder,pl,pr, inorder,il,ir){
	if(pl>pr || il > ir){
		return null;
	}
	
	var root = new TreeLinkNode(preorder[pl]);
	var mid = -1;
	
	for(var i=0; i<inorder.length;i++){
		if(inorder[i]==preorder[pl]){
			mid = i;
			break;
		}
	}
	
	var left = generate(preorder,pl+1, pl+(mid-il),inorder,il,mid-1);
	var right = generate(preorder,pl+(mid-il)+1,pr,inorder,mid+1,ir);
	
	root.left = left;
	root.right = right;
	
	return root;
}

console.log(buildTree(preorder,inorder));