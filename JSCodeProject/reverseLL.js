function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var ll = new LinkedList();

ll.head = new Node(1);
ll.head.next = new Node(2);
ll.head.next.next = new Node(3);
ll.head.next.next.next = new Node(4);
ll.head.next.next.next.next = new Node(5);

LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp != null){
		str += temp.data+" ";
		temp = temp.next;
	}
	
	return str;
}


LinkedList.prototype.reverseList = function(){
	var curr = this.head;
	var prev = null;
	var next = null;
	var str = "";
	
	while(curr!= null){
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	
	this.head = prev;
}

//function reverseRecursively (node, prev) {
//    if (!node) {
//        return null;
//    }
//    
//    let head = reverseRecursively(node.next, node) || node;
//    
//    node.next = prev;
//    
//    return head;
//}
LinkedList.prototype.recursiveReverseList = function(node,prev){
	if(!node){return null};
	
	var head = ll.recursiveReverseList(node.next,node)||node;
	node.next= prev;
	return head;
}

LinkedList.prototype.removeNode = function(head,n){
	var n1= new Node();
	var n2= new Node();
	var dummy = n2;
	
	n1.next = head;
	n2.next = head;
	
	while(n > 0 && n1){
		n1 = n1.next;
		n--;
	}
	
	if(n>0){
		return head;
	}
    while(n1 && n1.next){
        n1 = n1.next;
        n2 = n2.next;
    }
    
    n2.next = n2.next.next;
    
    return dummy.next;

}

console.log(ll.printList());
//ll.reverseList();
//console.log(ll.printList());
//console.log(ll.recursiveReverseList(ll.head, ll.head.prev));
console.log(ll.removeNode(ll.head,2));
console.log(ll.printList());