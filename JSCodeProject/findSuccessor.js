function TreeLinkNode(data){
	this.data = data;
	this.left = null;
	this.right = null;
	this.parent = null;
}

var findSuccessor = function(elem){
	var successor = null;
//	console.log(elem.left,elem.right,elem.parent);
	if(elem.right !== null){
		successor = elem.right;
		while(successor.left !== null){
			successor = successor.left;
		}
	}else if(elem.parent !== null){
		var curr = elem;
		while(curr.parent !== null && successor === null){
			if(curr.parent.left === curr){
				successor = curr.parent
			}
			curr = curr.parent;
		}
	}
	return successor;
	
	
	
}

var n1 = new TreeLinkNode(5);
var n2 = new TreeLinkNode(3);
var n3 = new TreeLinkNode(7);
var n4 = new TreeLinkNode(2);
var n5 = new TreeLinkNode(4);
var n6 = new TreeLinkNode(6);
var n7 = new TreeLinkNode(8);

//n1.left = n2;
//n2.parent = n1;
//n2.right = n3;
//n3.parent = n2;
//n3.right = n4;
//n4.parent = n3;
//n4.right = n5; n5.parent = n4;
//n5.left = n6; n6.parent = n5;
//n5.right = n7; n7.parent = n5;

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

n2.parent = n1;
n3.parent = n1;

n6.parent = n3;
n7.parent = n3;



//console.log(n1);
console.log(findSuccessor(n6).data);
console.log(findSuccessor(n3).data);

