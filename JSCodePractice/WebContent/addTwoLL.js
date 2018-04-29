var ll = new LinkedList();
var sll = new LinkedList();

function Node(data){
	
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

ll.head = new Node(6);
ll.head.next = new Node(4);
ll.head.next.next = new Node(9);
ll.head.next.next.next = new Node(5);

sll.head = new Node(3);
sll.head.next = new Node(4);
sll.head.next.next = new Node(2);
sll.head.next.next.next = new Node(4);

LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp){
		str += temp.data + " ";
		temp = temp.next;
		
	}
	console.log("LL",str);
}

LinkedList.prototype.addNums = function(first,sec){
	var temp = null;
	var prev = null;
	var carry = 0;
	var sum;
//	console.log(first);
//	console.log(sec);
	while(first != null & sec != null){}
//		if(first == null){
//			
//		}
		sum = carry + (first != null ? first.data : 0)
		+ (second != null ? second.data : 0);
	
		carry = (sum >= 10) ? 1 : 0;
		sum = sum % 10;
}

ll.printList();
sll.printList();

var resultList = new LinkedList();
//resultList.addNums(ll.head, sll.head);

