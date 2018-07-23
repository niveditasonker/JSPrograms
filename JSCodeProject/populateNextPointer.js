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
//	console.log(arr);
	
	while(arr.length > 1){
		var curr = arr.shift();
//		console.log(curr);
		if(curr !== dummy){
			if(curr.left){
				arr.push(curr.left);
			}
			
			if(curr.right){
				arr.push(curr.right);
			}
		}else{
			arr.push(curr);
				
			for(var i=0; i<arr.length-1;i++){
				if(arr[i+1]==dummy){
					arr[i].next = null;
				}else{
					arr[i].next = arr[i+1];
				}
			}
		}
	}
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

connect(n1);

console.log(n2.next);

//
////  Definition for binary tree with next pointer.
//function TreeLinkNode(val) {
//      this.val = val;
//      this.left = this.right = this.next = null;
// }
// 
///**
// * @param {TreeLinkNode} root
// * @return {void} Do not return anything, modify tree in-place instead.
// */
//var connect = function(root) {
//    if (!root) return;
//    var list = [];
//    var dummy = new TreeLinkNode(null);
//    list.push(root);
//    list.push(dummy);
//    while(list.length > 1) {
//      curr = list.shift();
//      if (curr !== dummy) {
//        if (curr.left) list.push(curr.left);
//        if (curr.right) list.push(curr.right);
//      }
//      else { //curr === dummy
//        list.push(curr);
//        for (var i=0; i<list.length-1; i++) {
//          list[i].next = (list[i+1] === dummy) ? null : list[i+1];
//        }
//      }     
//    } 
//};
//
//var n1 = new TreeLinkNode(1);
//var n2 = new TreeLinkNode(2);
//var n3 = new TreeLinkNode(3);
//var n4 = new TreeLinkNode(4);
//var n5 = new TreeLinkNode(5);
//var n6 = new TreeLinkNode(6);
//var n7 = new TreeLinkNode(7);
//n1.left = n2;
//n1.right = n3;
//n2.left = n4;
//n2.right = n5;
//n3.left = n6;
//n3.right = n7;
//connect(n1);
//
//console.log(n4.next);