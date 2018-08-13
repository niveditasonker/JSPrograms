function TreeNode(left,value,right){
	this.left = left;
	this.value = value;
	this.right = right;
}

function ListNode(prev,value,next){
	this.prev = prev;
    this.value = value;
    this.next = next;	
}

function LinkedList(head,tail){
	if(tail == undefined) tail = head;
	this.head = head;
	this.tail = tail;
}

LinkedList.prototype.addAtStart = function(list){
	this.head.prev = list.tail;
	list.tail.next = this.head;
	this.head = list.head;
}

LinkedList.prototype.addAtEnd= function(li){
	this.tail.next = li.head;
	li.head.prev = this.tail;
	this.tail = li.tail; 
}

function bstToCLL(tree){
	var centralNode = new ListNode(null,tree.value,null);
	
	var list = new LinkedList(centralNode);
	if(tree.left) list.addAtStart(bstToCLL(tree.left));
	if(tree.right) list.addAtEnd(bstToCLL(tree.right));
	return list;
}


var tree = new TreeNode(
	new TreeNode(
	    new TreeNode(null, 1, null),
	    2,
	    new TreeNode(null, 3, null)
    ),
    4,
    new TreeNode(null, 5, null)
);
var linkedList = bstToCLL(tree);
//console.log(linkedList);

var arr = [];

for(var node=linkedList.head;node;node=node.next){
	arr.push(node.value);
}
console.log(arr);

//reference :https://stackoverflow.com/questions/39008646/javascript-algorithm-to-convert-binary-search-tree-to-doubly-linked-list
