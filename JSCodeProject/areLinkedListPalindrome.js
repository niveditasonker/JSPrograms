function Node(data){
	this.data =data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}


var ll = new LinkedList();

ll.head = new Node(3);
ll.head.next = new Node(4);
ll.head.next.next = new Node(9);
ll.head.next.next.next = new Node(4);
ll.head.next.next.next.next = new Node(3);



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
	}
	
	this.head = prev;
}

LinkedList.prototype.arePalindrome = function(){
	var rll = new LinkedList()
	rll = ll.head;
	ll.reverseList();
	
	console.log(rll);
	var curr = this.head;
	console.log(curr);
	while(curr){
		if(curr.data != rll.data){
			return false;
		}else{
			return true;
		}
		
		curr = curr.next;
	}
	
}

ll.printList();
//ll.reverseList();
//ll.printList();
console.log(ll.arePalindrome());

