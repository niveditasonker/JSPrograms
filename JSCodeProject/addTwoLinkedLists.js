var fll = new LinkedList();
var sll = new LinkedList();

function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

fll.head = new Node(3);
fll.head.next = new Node(4);
fll.head.next.next = new Node(7);
//
sll.head = new Node(8);
sll.head.next = new Node(5);
sll.head.next.next = new Node(1);

//fll.head = new Node(6);
//fll.head.next = new Node(4);
//fll.head.next.next = new Node(9);
//fll.head.next.next.next = new Node(5);

//sll.head = new Node(3);
//sll.head.next = new Node(4);
//sll.head.next.next = new Node(2);
//sll.head.next.next.next = new Node(4);

//LinkedList.prototype.printList = function(){
//	var temp = this.head;
//	var str = "";
//	
//	while(temp){
//		str += temp.data + " ";
//		temp = temp.next;
//		
//	}
//	console.log("LL",str);
//}


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

LinkedList.prototype.addNums = function(first,sec){
	var prev = null;
	var sum = 0;
	var carry = 0;
	var temp = null;
//	var rll = null;
	
	while(first != null || sec != null){
		var fdata = (first!=null)? first.data:0;
		var sdata = (sec!=null)? sec.data:0;
		sum  = carry + fdata + sdata;
//		sum = carry +(first!=null ? first.data:0)+(sec!=null ? sec.data:0)
//		console.log(sum,carry);
		if(sum >= 10){
			carry = 1;
			sum = sum % 10;
		}else{
			carry = 0;
			sum = sum;
		}
//		carry = (sum >= 10) ? 1: 0;
		
//		sum = sum % 10;
		
		temp = new Node(sum);
//		console.log(sum,carry);
		if(this.head == null){
			this.head = temp;
		}else{
			prev.next = temp;
		}
		
		prev = temp;
		if(first != null){
			first = first.next;
		}
		if(sec != null){
			sec = sec.next;
		}

	}
	if(carry > 0){
		temp.next = new Node(carry);
	}
//	return rll;
}

fll.printList();
sll.printList();
//console.log(fll.head);
var rll = new LinkedList();
rll.addNums(fll.head, sll.head);
rll.printList();
rll.reverseList();
rll.printList();