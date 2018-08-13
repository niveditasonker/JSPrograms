var arr = [-10,-3,0,5,9];
//var arr = [1,2,3,4,5,6,7];
var len = arr.length;
var str="";

function TNode(val){
	this.val = val;
	this.left=this.right=null;
}

var sortedArrayToBST = function(nums) {
    return arrToBST(nums, 0, nums.length-1);
};

var arrToBST = function(a, start, end){
	
	if(start > end){
		return null;
	}
	
	var mid = start + parseInt((end - start)/2);
//	console.log(a, start, end,mid);
	
	var tnode = new TNode(a[mid]);
	
	tnode.left = arrToBST(a,start,mid-1);
	tnode.right = arrToBST(a,mid+1,end);
	
	return tnode;
}

var preorder = function(node){
	if(node!=null){
//		console.log(node.val);
		str += node.val +" ";
		preorder(node.left);
		preorder(node.right);
	}	
	
}

var tree = sortedArrayToBST(arr);
console.log(tree);
//preorder(tree);
//console.log(str);

