function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}



var BTLevelOrder = function(root){
	var result = [];
	var queue = [];
	
	if(root == null) return queue;
	
	queue.push(root);
	
	while(queue.length){
		console.log("length 1.........",queue.length);
		var curr  = [];
		var pData = [];
		
		for(var i in queue){
//			console.log(".......",i, queue[i]);
			queue[i].left ? curr.push(queue[i].left) : null;
			queue[i].right ? curr.push(queue[i].right) : null;
			pData.push(queue[i].val);
		}
		console.log(pData);
//		result.unshift(pData);
		result.push(pData);
//		console.log(curr);
//		console.log("length.........",queue.length);
		queue = curr;
	}
//	result.reverse();
	return result;
}

var levelOrder2 = function(root) {
    var result = [];
    
    if(root === null){
        return result;
    }
    
    var queue = [];
    var temp = [];
    var curLvlCnt = 1;
    var nextLvlCnt = 0;
    
    queue.push(root);
    
    while(queue.length !== 0){
        var p = queue.shift();
        temp.push(p.val);
        curLvlCnt--;
        
        if(p.left){
            queue.push(p.left);
            nextLvlCnt++;
        }
        if(p.right){
            queue.push(p.right);
            nextLvlCnt++;
        }
        
        if(curLvlCnt === 0){
            result.push(temp);
            curLvlCnt = nextLvlCnt;
            nextLvlCnt = 0;
            temp = [];
        }
    }
    
    return result;
};


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

//connect(n1);
console.log(BTLevelOrder(n1));
console.log(levelOrder2(n1));
