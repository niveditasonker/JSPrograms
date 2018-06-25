function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

var fll = new LinkedList();
var sll = new LinkedList();

fll.head = new Node(3);
fll.head.next = new Node(4);
fll.head.next.next = new Node(7);
//
sll.head = new Node(8);
sll.head.next = new Node(5);
sll.head.next.next = new Node(1);

LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp){
		str += temp.data + " ";
		temp = temp.next;
		
	}
	console.log("LL",str);
}

LinkedList.prototype.mergeLL = function(first,sec){
	var temp = this.head;
	
	while(first != null || sec != null){
		if(first.data < sec.data){
			temp.next = first;
			first = first.next;
		}else{
			temp.next = sec;
			sec = sec.next;
		}
		temp=temp.next;
	}
	
	if(first!=null){
		temp.next=first;
	}
	
	if(sec!=null){
		temp.next=sec;
	}
	return temp.next;
}

var rll = new LinkedList();
rll.mergeLL(fll.head, sll.head);
//rll.printList();
console.log(rll);