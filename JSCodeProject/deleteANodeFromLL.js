function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size  = 0;
}

var ll = new LinkedList();
ll.head = new Node(10);
ll.head.next = new Node(21);
ll.head.next.next = new Node(32);
ll.head.next.next.next = new Node(44);
ll.head.next.next.next.next = new Node(55);
ll.head.next.next.next.next.next = new Node(66);

LinkedList.prototype.deleteNode = function(val){
	if(this.head.data == null){
		this.head = this.head.next;
	}else{
		var prev = this.head;
		var curr = prev.next;
		
		while(curr){
			if(curr.data == val){
				prev.next = curr.next;
				curr = curr.next;
				break;
			}else{
				prev = curr;
				curr = curr.next;
			}
		}
	}
}


LinkedList.prototype.recursiveDeleteNode = function(val){
	var curr = this.head;

	if(curr.next == null){
		return
	}
	
	curr.data = curr.next.data;
	curr.next = curr.next.next;
}
ll.deleteNode(44);
//ll.recursiveDeleteNode(21);
console.log(ll.head);