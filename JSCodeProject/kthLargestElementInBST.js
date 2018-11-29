var tree = {
  val: 5,
  left: {
    val: 2, left: null, right: null
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 8,
      left: null,
      right: null
    }
  }
};

function findKthLargest(root,k,c){
	var res = null;
	var c = 0;
	
	function findK(node){
		if(!node) return null;
		if (node.right !== null) findK(node.right);
		c++;
		if(c == k){
			res = node.val;
			return;
		}
		
		
		if (node.left  !== null) findK(node.left,  k, c);  
	}
	findK(root);
	return res;
}

function inorderReverse(node, cb) {
  if (node.right !== null) inorderReverse(node.right, cb);
  cb(node);
  if (node.left  !== null) inorderReverse(node.left,  cb);  
}

// Find the kth largest element
var k = 2;
var count = 1;
inorderReverse(tree, function(node) {
  if (count++ === k) console.log(node.val);
});

console.log(findKthLargest(tree,k,1));

