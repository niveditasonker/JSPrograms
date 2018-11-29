function TreeLinkNode(val) {
     this.val = val;
     this.left = this.right = null;
}

function topView(root){
	if(root===null){
		return res;
	}
	
	var hash={};
	var queue=[];
	queue.push([root,0]);
	var res = [];
	var unorderedVals = [];
	
	while(queue.length){
		var pair = queue.shift();
		var node = pair[0];
		var lvl = pair[1];
//		console.log(".....",lvl);
		
		if((hash[lvl]!=undefined)){
			//Do nothing
		}else{
			hash[lvl] = node.val;
		}
		
		if(node.left){
			queue.push([node.left, lvl-1]);
		}
		
		if(node.right){
			queue.push([node.right, lvl+1]);
		}
	}
	
//	console.log(hash);
	
	var sortedHash = Object.keys(hash).sort(function(a,b){ return a-b});
//	console.log(sortedHash);
	
	for(let n in hash){
		unorderedVals.push(hash[n]);
	}

	for(let i =0;i<sortedHash.length;i++){
		res.push(hash[sortedHash[i]]);
	}
	
	console.log("Unordered Vals: ",unorderedVals);
	return res;
}

var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(6);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

var t1 = new TreeLinkNode(1);
var t2 = new TreeLinkNode(2);
var t3 = new TreeLinkNode(3);
var t4 = new TreeLinkNode(4);
var t5 = new TreeLinkNode(5);
var t6 = new TreeLinkNode(6);
var t7 = new TreeLinkNode(7);
var t8 = new TreeLinkNode(8);
var t9 = new TreeLinkNode(9);

t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;
t3.left = t6;
t3.right = t7;
t4.left = t8;
t4.right = t9;

console.log(topView(n1));
console.log(topView(t1));