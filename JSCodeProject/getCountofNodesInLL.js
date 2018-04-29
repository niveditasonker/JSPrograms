var llist = new LinkedList();

function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this.size = 0;
	this.head = null;
}

LinkedList.prototype.addNodes = function(val){
	console.log("adding element: "+val);
	
	var node = new Node(val);
	
	var curr = this.head;
	
	if(!curr){
		this.head = node;
		this.size++;
		return node;
	}
	
	while(curr.next != null){
		curr = curr.next;
	}
	
	curr.next = node;
	this.size++;
	return node;

}

LinkedList.prototype.getCount = function(){
	var temp = this.head;
	var c=0;
	
	while(temp){
		c++;
		temp = temp.next;
	}
	console.log(c);
	return c;
}

LinkedList.prototype.getCountRec = function(node){

	if(node==null){
		console.log(node);
		return 0;
	}else{
		return 1;
		getCountRec(node.next);
	}
}

llist.addNodes(1);
llist.addNodes(3);
llist.addNodes(1);
llist.addNodes(2);
llist.addNodes(1);
llist.addNodes(5);
llist.getCount();
//llist.getCountRec(llist.head);