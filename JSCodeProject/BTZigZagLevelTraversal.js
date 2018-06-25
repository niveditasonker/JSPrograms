function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

var zigzagLevelOrder = function(root) {
	if(!root){
		return [];
	}
	
	var curLevel = [];
	curLevel.push(root);
	
    var fromLeft = true;
    var result = [];
    var tmpResult = [];
    var nextLevel = [];
    
    while(curLevel.length > 0){
    	var len = curLevel.length;
    	
        for(var i = 0; i < len; i++) {
            var node = curLevel.pop();
            tmpResult.push(node.val);
            
            if(fromLeft) {
                if(node.left) {
                    nextLevel.push(node.left);
                }
                if(node.right) {
                    nextLevel.push(node.right);
                }
            } else {
                if(node.right) {
                    nextLevel.push(node.right);
                }
                if(node.left) {
                    nextLevel.push(node.left);
                }
            }
        }
        fromLeft = !fromLeft;
        curLevel = nextLevel;
        nextLevel = [];
        result.push(tmpResult);
        tmpResult = [];
    }
    
    return result;
    
}

var n1 = new TreeLinkNode(3);
var n2 = new TreeLinkNode(9);
var n3 = new TreeLinkNode(20);
var n4 = new TreeLinkNode(null);
var n5 = new TreeLinkNode(null);
var n6 = new TreeLinkNode(15);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(zigzagLevelOrder(n1));