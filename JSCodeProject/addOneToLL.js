function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.head = null;
	this.size = 0;
}

LinkedList.prototype.insert = function(val){
	var node = new Node(val);
	node.next = this.head;
	this.head = node;
}

LinkedList.prototype.printList = function(){
	var temp = this.head;
	var str = "";
	
	while(temp != null){
		str += temp.data + " ";
		temp = temp.next;
	}
	
	console.log("LL: "+str);
}

LinkedList.prototype.reverseList = function(){
	var prev = null;
	var next = null;
	var curr = this.head;
	
	while(curr!=null){
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	
	this.head = prev;
}

LinkedList.prototype.addOne = function(){
	var curr = this.head;
	var result = this.head;
	var sum; var carry = 1;
	var temp;
	
	while(curr != null){
		sum = carry + curr.data;
		carry = (sum >= 10)? 1 : 0;
		sum = sum % 10;
		curr.data = sum;
		temp = curr;
        curr = curr.next;
	}
	
	if(carry>10){
		temp.next = newNode(carry);
	}
//	console.log(result);
	return result;
}

var ll = new LinkedList();
ll.insert(9);
ll.insert(9);
ll.insert(6);
ll.insert(9);

ll.printList();
ll.reverseList();
ll.printList();
var res = ll.addOne();
console.log(res);
ll.reverseList();
ll.printList();
