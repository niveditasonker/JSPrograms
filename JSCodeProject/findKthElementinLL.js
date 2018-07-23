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
ll.head.next.next.next.next.next = new Node(6);

LinkedList.prototype.findElement = function(root, n){
	var temp = root;
	var len = 0;
	
	while( temp != null){
		temp = temp.next;
		len++;
	}
	
	if(len < n){
		return;
	}
	temp = root;
	
//	for(var i=1;i<len-n+1;i++){
	for(var i=0;i<len-n;i++){
		temp = temp.next;
	}
	
	console.log(temp.data);
}

ll.findElement(ll.head,2);
