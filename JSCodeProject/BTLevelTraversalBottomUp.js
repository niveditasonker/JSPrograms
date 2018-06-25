function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

var connect = function(root){
	if(root == null){
		return;
	}
	var arr = [];
	var dummy = new TreeLinkNode(null);
	arr.push(root);
	arr.push(dummy);
	while(arr.length > 1){
		var curr = arr.shift();
//		console.log(curr);
		if(curr != dummy){
			if(curr.left){
				arr.push(curr.left);
			}
			
			if(curr.right){
				arr.push(curr.right);
			}
		}else{
			arr.push(curr);
			for(var i=0; i<arr.length-1;i++){
//				console.log(arr[i],arr[i+1]);
			
				if(arr[i+1]!=dummy){	
					console.log("["+arr[arr.length-1-i].val+","+arr[arr.length-2-i].val+"]");
//					console.log("["+arr[i].val+","+arr[i+1].val+"]");
				}
			}
		}
	
	}
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







