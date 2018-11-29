function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}


var connect = function(root) {
    if(!root) {
        return;
    }
    
    // leftEnd is used to track the current left most node
    var leftEnd = root;
    
    while(leftEnd !== null) {
        var cur = leftEnd;
        // dummy is used to point to the next level's leftEnd
        var dummy = new TreeLinkNode(0);
        var pre = dummy;
        // for each level we use leftEnd and leftEnd next to achieve level traversal
        while(cur !== null) {
            if(cur.left !== null) {
                pre.next = cur.left;
                pre = cur.left;
            }
            
            if(cur.right !== null) {
                pre.next = cur.right;
                pre = cur.right;
            }
            
            cur = cur.next;
        }
        
        leftEnd = dummy.next;
    }
};


var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
//var n6 = new TreeLinkNode(6);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
//n3.left = n6;
n3.right = n7;

connect(n1);

console.log(n2.next);