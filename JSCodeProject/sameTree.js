function TreeLinkNode(val) {
    this.val = val;
    this.left = this.right = null;
}

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


var nn1 = new TreeLinkNode(3);
var nn2 = new TreeLinkNode(9);
var nn3 = new TreeLinkNode(20);
var nn4 = new TreeLinkNode(4);
var nn5 = new TreeLinkNode(5);
var nn6 = new TreeLinkNode(15);
var nn7 = new TreeLinkNode(7);

nn1.left = nn2;
nn1.right = nn3;
nn2.left = nn4;
nn2.right = nn5;
nn3.left = nn6;
nn3.right = nn7;

var isSame = function(p,q){
	if(!p && !q){
		return true;
	}
	
	if(!p || !q){
		return false;
	}

	
	if(p.val != q.val){
		return false;
	}
	
	return isSame(p.left,q.left) && isSame(p.right,q.right);
}


var isSameTree = function(p, q) {
    var queue1 = [];
    var queue2 = [];
    
    queue1.push(p);
    queue2.push(q);
    
    while(queue1.length && queue2.length){
        var node1 = queue1.shift();
        var node2 = queue2.shift();
        var val1;
        var val2;
        
        
        if(node1 === null){
            val1 = null;
        } else {
            val1 = node1.val;
            queue1.push(node1.left);
            queue1.push(node1.right);
        }
        
        if(node2 === null){
            val2 = null;
        } else {
            val2 = node2.val;
            queue2.push(node2.left);
            queue2.push(node2.right);
        }
        
        if(val1 !== val2){
            return false;
        }
    }
    
    return queue1.length === queue2.length;
};
console.log(isSame(n1,nn1));
console.log(isSameTree(n1,nn1));