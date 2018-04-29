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
		if(curr !== dummy){
			if(curr.left){
				arr.push(curr.left);
			}
			
			if(curr.right){
				arr.push(curr.right);
			}
		}else{
			arr.push(curr);
//			console.log("["+root.val+"]");
				
			for(var i=0; i<arr.length-1;i++){
				if(arr[i+1]!=dummy){			
					console.log("["+arr[i].val+","+arr[i+1].val+"]");
				}
			}
		}
	}
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

connect(n1);
