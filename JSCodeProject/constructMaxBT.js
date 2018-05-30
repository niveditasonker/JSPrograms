var nums = [3,2,1,6,0,5];
console.log(constructMaximumBinaryTree(nums));

function TreeLinkNode(val) {
      this.val = val;
      this.left = this.right = null;
}

function constructMaximumBinaryTree(nums){
	var len = nums.length;
    
    if(!len){
    	return null;
    }
    
    var max = 0;
    var maxIdx = 0;
    
    for (var i = 0; i < len; i++) {
    	var n = nums[i];
        
        if(n>max){
        	max = n;
            maxIdx = i;
        }
    }
    var node = new TreeLinkNode(max);
 	node.left = constructMaximumBinaryTree(nums.slice(0, maxIdx));
  	node.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1));
  	return node;
   
}