var linkedList = new LinkedList();

function Node(data){
	this.data = data;
	this.next=null;
}

function LinkedList(){
	this.length = 0;
	this.head = null;
}

LinkedList.prototype.add = function(value) {
	
    var node = new Node(value);
//    console.log(value);
    currentNode = this.head;
   
    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this.length++;
//        console.log(value,currentNode);
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
//        console.log(">>>>>",value,currentNode);
    }
//    console.log("length...."+this.length);
    currentNode.next = node;
 
    this.length++;
     
    return node;
};

LinkedList.prototype.insert = function(element, idx){
	console.log(element, idx);
	if(idx > 0 && idx > this.length){
		return false;
	}else{
		var node = new Node(element);
		var curr, prev;
		curr = this.head;
		
		if(idx==0){
			node.next = head;
			this.head = node;
		}else{
			curr = this.head;
			var counter = 0;
			
			while(counter < idx){
				counter++;
				prev = curr;
				curr = curr.next;
			}
			
			node.next = curr;
			prev.node = node;
		}
		
		this.length++;
	}
}

LinkedList.prototype.removeFrom = function(idx){
	console.log("removing element at index: "+idx);
	
	if(idx <0 && idx > this.length){
		return -1;
	}else{
		var curr, prev, c=0;
		curr = this.head;
		prev = curr;
		
		if(idx==0){
			this.head = curr.next;
		}else{
			while(c<idx){
				c++;
				prev = curr;
				curr = curr.next;
			}
			
			prev.next = curr.next;
		}
		
		this.length--;
	}
	
	return curr.data;
}

LinkedList.prototype.removeElement = function(element){
	console.log("removing element: "+element);
	
	var curr = this.head;
	var prev = null;
	
	while(curr != null){
		if(curr.data == element){
			if(prev == null){
				this.head = curr.next;
			}else{
				prev.next = curr.next;
			}
			this.length--;
			return curr.data;
		} 
		prev = curr;
		curr = curr.next;
	}
	return -1;
	
}

LinkedList.prototype.isEmpty = function(){
	return this.length == 0;        
}

LinkedList.prototype.sizeOfList = function(){
	console.log(this.length);
}

LinkedList.prototype.printList = function(){
	var curr = this.head;
	var str = "";
	
	while(curr){
		str += curr.data + " ";
		curr = curr.next;
	}
	console.log("LL",str);
}
console.log(linkedList.isEmpty());
//console.log(linkedList.sizeOfList());

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
//linkedList.add(60);
linkedList.printList();
console.log(linkedList.sizeOfList());
linkedList.insert(60, 2);
linkedList.printList();
console.log(linkedList.removeFrom(3));
linkedList.insert(70, 3);
linkedList.printList();
linkedList.removeElement(20);
linkedList.printList();