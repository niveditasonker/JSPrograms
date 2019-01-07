function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}


var levelOrderBottom = function(root) {
    var q = [];
    var result = [];
    var temp = [];
    
    if(root === null){
        return q;
    }
    
    q.push(root);
    
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    while(q.length !== 0){
        var p = q.shift();
        curLvlCnt--;
        temp.push(p.val);
        
        if(p.left !== null){
            q.push(p.left);
            nextLvlCnt++;
        }
        
        if(p.right !== null){
            q.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            result.unshift(temp.slice());
            temp = [];
        }
    }
    
    return result;
};
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

//connect(n1);
console.log(levelOrderBottom(n1));







