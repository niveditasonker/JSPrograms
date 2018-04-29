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
ll.head.next = new Node(15);
ll.head.next.next = new Node(23);
ll.head.next.next.next = new Node(37);
ll.head.next.next.next.next = new Node(45);
ll.head.next.next.next.next.next = new Node(54);


LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp != null){
		str += temp.data + " ";
		temp = temp.next;
	}
	
	console.log("LL: "+str);
}
ll.printList();

LinkedList.prototype.reverseList = function(){
	var prev = null;
	var next = null;
	var curr = this.head;
//	console.log(curr);
	while(curr != null){
		next = curr.next;
//		console.log("Next: "+next.data);
		curr.next = prev;
//		console.log("Curr Next: "+curr.next)
		prev = curr;
//		console.log("Prev: "+prev.data);
		curr = next;
//		console.log("Curr: "+curr.data);
		
	}
	
	this.head = prev;
//	console.log("Head: "+this.head.data);
}

ll.reverseList();
ll.printList();