function TreeLinkNode(val) {
      this.val = val;
      this.left = this.right = null;
}

var sumNumbers = function(root) {

    var total = 0;
    if(root===null){
    	return total;
    }
    
    var queue = [];
    queue.push(root);
    
    while(queue.length !== 0){
    	var node = queue.shift();
        
        if(node.left === null && node.right === null){
        	total += parseInt(node.val);
        }
        
        if(node.left){
        	node.left.val = ''+node.val+node.left.val;
            queue.push(node.left);
        }
        
		if(node.right){
        	node.right.val = ''+node.val+node.right.val;
            queue.push(node.right);
        }
        
       

    }
     return total;
}
var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

var c = sumNumbers(n1);
console.log(c);