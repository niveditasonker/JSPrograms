var ll = new LinkedList();

function Node(data){
	
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

ll.head = new Node(1);
ll.head.next = new Node(15);
ll.head.next.next = new Node(23);
ll.head.next.next.next = new Node(37);
ll.head.next.next.next.next = new Node(45);
ll.head.next.next.next.next.next = new Node(54);


LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp){
		str += temp.data + " ";
		temp = temp.next;
		
	}
	console.log("LL",str);
}

LinkedList.prototype.reverseList = function(){
	var prev = null;
	var next = null;
	var curr = this.head;
	
	while(curr != null){
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
//		console.log(curr,prev,curr.next,next);
	}
	this.head = prev;
	
}

ll.printList();
ll.reverseList();
ll.printList();
