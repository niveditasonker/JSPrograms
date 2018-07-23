function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

function LinkedListNode(val){
	this.val = val;
	this.next = null;
}

var converToBT = function(root){
	if(root == null){
		return;
	}
	
	var arr = [];
	var dummy = new TreeLinkNode(null);
	arr.push(root);
	arr.push(dummy);
//	var list = [];
	var list = "";
	while(arr.length > 1){
		var curr = arr.shift();
	
		if(curr!== dummy){
			if(curr.left){
				arr.push(curr.left);
			}
			
			if(curr.right){
				arr.push(curr.right);
			}
		}else{
			arr.push(curr);
//			list.push(arr[0]+"->");
			list = root.val+"->";
			for(var i=0;i<arr.length-1;i++){
				if(arr[i+1] != dummy){
					list += arr[i].val +"->"+arr[i+1].val;
//					list.push(arr[i].val +"->"+arr[i+1].val);
				}
			}
		}
	}
	return list;
}


var convertToLL2 = function(root){
	var listOfLists = [];
	var list = null;
	var newNode;
	var q = [];
	var nextQ = [];
	var curr = root;
	
	q.push(curr);
//	console.log(q);
	
	while(q.length  > 0){
		curr = q.shift();

		newNode = new LinkedListNode(curr.val);
		newNode.next = list;
		
		list = newNode;
		if(curr.left != null){
			nextQ.push(curr.left);
		}
		
		if(curr.rigth != null){
			nextQ.push(curr.right);
		}
		
		if(q.length == 0){
			listOfLists.push(list);
			list = null;
			q = nextQ;
			console.log(q);
			nextQ = [];
		}
	}
	return listOfLists;
}
/*
var n1 = new TreeLinkNode(3);
var n2 = new TreeLinkNode(9);
var n3 = new TreeLinkNode(20);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
var n6 = new TreeLinkNode(15);
var n7 = new TreeLinkNode(7);
*/
var n1 = new TreeLinkNode(4);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(6);
var n4 = new TreeLinkNode(1);
var n5 = new TreeLinkNode(3);
var n6 = new TreeLinkNode(5);
var n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

//console.log(converToBT(n1));
console.log(convertToLL2(n1));